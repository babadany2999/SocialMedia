import "../../Styles/Credential/SignIn.css";
import CredentialBg from "./Components/CredentialBg";
import CredentialContent from "./Components/CredentialContent";
import { ICredentialFormObject } from "./Components/CredentialFormObject";
import keyIcon from '../../Assets/Images/key.png';

const SignIn = () => {

    const formObjects: ICredentialFormObject[] = [
        {
            label: "Full name",
            inputType: "text",
            placeholder: "Name Surname",
        },
        {
            label: "Username",
            inputType: "text",
            placeholder: "somedudeonline",
        },
        {
            label: "E-mail",
            inputType: "email",
            placeholder: "somedudeonline@gmail.com",
        },
        {
            label: "Password",
            inputType: "password",
            placeholder: "*********",
            icon: keyIcon
        },
        {
            label: "Repeat password",
            inputType: "password",
            placeholder: "*********",
            icon: keyIcon
        },
    ]

    return <main className="SignIn">
        <CredentialBg/>
        <CredentialContent ctx={{title: "Create an account", formObjects: formObjects, redirect: {
            content: "Already have an account?",
            text: "Log in",
            link: "/sign-in",
        },button: "Sign Up"}}/>
    </main>
}

export default SignIn;