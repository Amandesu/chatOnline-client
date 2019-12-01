



import Manage from "./Manage";
import { MyContext } from "./Manage"

const Portal = () => {

}
Portal.Manage = Manage

export default Portal;
/* export default ({back = false, goBack = () => {}, title="我的IM"}) => {
    return (
        <div className={prefix}>
            <div style={{paddingRight: 15}} onClick={goBack}>
                {back && <Icon size={25} color="#fff" code="&#xe95d;" /> }
            </div>
            <span>{title}</span>
        </div>
    )
} */
