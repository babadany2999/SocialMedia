import '../../Styles/Credential/SignUp.css';
import CredentialBg from './Components/CredentialBg';
import CredentialContent from './Components/CredentialContent';
import { ICredentialFormObject } from './Components/CredentialFormObject';
import userIcon from '../../Assets/Images/user.png';
import keyIcon from '../../Assets/Images/key.png';


const SignUp = () => {

    const formObjects: ICredentialFormObject[] = [
        {
            label: "Username",
            inputType: "text",
            placeholder: "somedudeonline",
            icon: userIcon
        },
        {
            label: "Password",
            inputType: "password",
            redirect: {
                link: "/forgot-password",
                text: "Forgot your password?"
            },
            placeholder: "*********",
            icon: keyIcon
        }
    ]

    return <main className="SignUp">
        <CredentialBg/>
        <CredentialContent ctx={{title:"Sign In", formObjects:formObjects, redirect: {
            content: "Don't have an account?",
            link: "/sign-up",
            text: "Sign up",
        }, button: "Log In"}} />
    </main>
}

export default SignUp;