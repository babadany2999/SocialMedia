import "../../../Styles/Credential/Components/CredentialFormObject.css";
import { Link } from "react-router-dom";

type InputType = "text" | "email" | "password";

export interface ICredentialRedirect {
    link: string;
    text: string;
}

export interface ICredentialFormObject {
    label: string;
    icon?: string;
    redirect?: ICredentialRedirect;
    showRequired?: boolean;
    inputType: InputType;
    placeholder: string;
}

const CredentialFormObject = ({ctx}: {ctx: ICredentialFormObject}) => {

    return <div className="CredentialFormObject">
        <label>{ctx.label}</label>
        <input type={ctx.inputType} placeholder={ctx.placeholder} className={!ctx.icon ? "CredentialFormObject-WithoutPadding" : ""}>
        </input>
        {/* Optional link above input */}
        {ctx.redirect ? <Link to={ctx.redirect.link}>{ctx.redirect.text}</Link> : ""}
        {/* Optional Image representing the input */}
        {ctx.icon ? <img src={ctx.icon}/> : ""}
    </div>;
}
 
export default CredentialFormObject;