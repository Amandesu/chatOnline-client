let addZero = (n:number) => n < 10 ? "0"+n:String(n);

class Moment {
    Y:number; M:number; D:number;
    h:number; m:number; s:number;
    timestamp:number;
    constructor(timestamp:number){
        let d = new Date(timestamp);
        this.timestamp = timestamp;
        this.Y = d.getFullYear();
        this.M = d.getMonth()+1;
        this.D = d.getDate();
        this.h = d.getHours();
        this.m = d.getMinutes();
        this.s = d.getSeconds();
    }
    //'YYYY年M月D日 H:mm:ss'
    format(text:string){
        let newText =text;
        let match = [this.Y, this.M, this.D, this.h, this.m, this.s].map(item => addZero(item));
        [/Y+/g, /M+/g, /D+/g, /H+/g, /m+/g, /s+/g].forEach((reg, i) => {
            newText = newText.replace(reg, (str) => {
                if (str.length == 2 && i == 0) {
                    return match[i].slice(2)
                }
                return match[i]
            })
        })
        return newText;
    }
}

export default function moment(timestamp:number){
    return new Moment(timestamp)
}