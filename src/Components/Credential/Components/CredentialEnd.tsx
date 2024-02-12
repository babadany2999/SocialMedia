import { ICredentialRedirect } from "./CredentialFormObject";
import { Link } from "react-router-dom";
import "../../../Styles/Credential/Components/CredentialEnd.css";


interface ICredentialEnd {
    text: string;
    redirect: ICredentialRedirect;
}

const CredentialEnd = ({ctx}: {ctx: ICredentialEnd}) => {
    return <div className="CredentialEnd">
        <span>{ctx.text}</span>
        <Link to={ctx.redirect.link}>{ctx.redirect.text}</Link>
    </div>
}
 
export default CredentialEnd;