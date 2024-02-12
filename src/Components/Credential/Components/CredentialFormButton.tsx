import '../../../Styles/Credential/Components/CredentialFormButton.css';

interface ICredentialFormButton {
    text: string;
}

const CredentialFormButton = ({ctx}: {ctx: ICredentialFormButton}) => {
    return <button className="CredentialFormButton" type="submit">{ctx.text}</button>;
}
 
export default CredentialFormButton;