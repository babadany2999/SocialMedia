import '../../../Styles/Credential/Components/CredentialContent.css';
import CredentialEnd from './CredentialEnd';
import CredentialFormButton from './CredentialFormButton';
import CredentialFormObject, { ICredentialFormObject, ICredentialRedirect } from './CredentialFormObject';
import CredentialTermsAndConditions from './CredentialTermsAndConditions';


interface ICredentialContent {
    title: string;
    formObjects: ICredentialFormObject[];
    redirect: ICredentialRedirect & {content: string};
    button: string;
}

const CredentialContent = ({ctx}: {ctx: ICredentialContent}) => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    }

    return <div className="CredentialContent">
        <h1>{ctx.title}</h1>
        <form onSubmit={handleSubmit}>
            {ctx.formObjects.map((object, i) => <CredentialFormObject key={i} ctx={object}/>)}
            <CredentialTermsAndConditions/>
            <CredentialFormButton ctx={{text: ctx.button}}/>
            <CredentialEnd ctx={{text: ctx.redirect.content, 
                redirect: {link: ctx.redirect.link, text: ctx.redirect.text}}}/>
        </form>
    </div>;
}
 
export default CredentialContent;