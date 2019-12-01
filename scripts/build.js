"use strict";

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", (err) => {
    throw err;
});

const path = require("path");
const chalk = require("chalk");
const fs = require("fs-extra");
const webpack = require("webpack");
const config = require("../config/webpack.prod");
const paths = require("../config/paths");
const checkRequiredFiles = require("react-dev-utils/checkRequiredFiles");
const formatWebpackMessages = require("react-dev-utils/formatWebpackMessages");
const printHostingInstructions = require("react-dev-utils/printHostingInstructions");
const FileSizeReporter = require("react-dev-utils/FileSizeReporter");
const printBuildError = require("react-dev-utils/printBuildError");

const measureFileSizesBeforeBuild =
    FileSizeReporter.measureFileSizesBeforeBuild;
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;

// These sizes are pretty large. We'll warn for bundles exceeding them.
const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;

const isInteractive = process.stdout.isTTY;


// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
    process.exit(1);
}

const { checkBrowsers } = require("react-dev-utils/browsersHelper");


checkBrowsers(paths.appPath, isInteractive)
    .then(() => {
        return measureFileSizesBeforeBuild(paths.appBuild);
    })
    .then((previousFileSizes) => {
        fs.emptyDirSync(paths.appBuild);
        copyPublicFolder();
        return build(previousFileSizes);
    })
    .then(
        ({ stats, previousFileSizes, warnings }) => {

            console.log("File sizes after gzip:\n");
            printFileSizesAfterBuild(
                stats,
                previousFileSizes,
                paths.appBuild,
                WARN_AFTER_BUNDLE_GZIP_SIZE,
                WARN_AFTER_CHUNK_GZIP_SIZE
            ); 
            const appPackage = require(paths.appPackageJson);
            const publicPath = config.output.publicPath;
            const buildFolder = path.relative(process.cwd(), paths.appBuild);
            
            printHostingInstructions(
                appPackage,
                //publicUrl,
                publicPath,
                buildFolder,
            );
        },
        (err) => {
            console.log(chalk.red("Failed to compile.\n"));
            printBuildError(err);
            process.exit(1);
        }
    )
    .catch((err) => {
        if (err && err.message) {
            console.log(err.message);
        }
        process.exit(1);
    });

// Create the production build and print the deployment instructions.
function build(previousFileSizes) {
    console.log("Creating an optimized production build...");

    let compiler = webpack(config);
    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            let messages;
            if (err) {
                if (!err.message) {
                    return reject(err);
                }
                messages = formatWebpackMessages({
                    errors: [err.message],
                    warnings: []
                });
            } else {
                messages = formatWebpackMessages(
                    stats.toJson({ all: false, warnings: true, errors: true })
                );
            }
            if (messages.errors.length) {
                // Only keep the first error. Others are often indicative
                // of the same problem, but confuse the reader with noise.
                if (messages.errors.length > 1) {
                    messages.errors.length = 1;
                }
                return reject(new Error(messages.errors.join("\n\n")));
            }
            
            const resolveArgs = {
                stats,
                previousFileSizes
            };
            

            return resolve(resolveArgs);
        });
    });
}

function copyPublicFolder() {
    fs.copySync(paths.appPublic, paths.appBuild, {
        dereference: true,
        filter: (file) => file !== paths.appHtml
    });
}