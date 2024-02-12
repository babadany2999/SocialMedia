import '../Styles/Main.css';
import Title from './MultipleUses/Title';
import bellIcon from '../Assets/Images/bell.svg';
import Story from './MultipleUses/Story';

const Main = () => {
    return <main className="Main">
        <Title ctx={{text: "x", button: {
            icon: bellIcon,
            right: true
        }}}/>
        <Story/>
    </main>
}


export default Main;