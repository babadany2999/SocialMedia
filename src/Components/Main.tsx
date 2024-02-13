import '../Styles/Main.css';
import Title from './MultipleUses/Title';
import bellIcon from '../Assets/Images/bell.svg';
import Story from './MultipleUses/Story';
import Post from './MultipleUses/Post';
// Humans
import humanOne from '../Assets/Images/humans/human1.jpg';
// Post
import postOne from '../Assets/Images/posts/postOne.jpg';
import NavigationButton from './MultipleUses/NavigationButton';

const Main = () => {
    return <main className="Main">
        <Title ctx={{text: "x", button: {
            icon: bellIcon,
            right: true
        }}}/>
        <Story/>
        <Post ctx={{
            icon: humanOne,
            handle: "myhandle",
            media:  postOne,
            text: "Look at how mysterous I am! You would never guess I like to pee in the shower :D"
        }}/>
        <Post ctx={{
            icon: humanOne,
            handle: "myhandle",
            media:  postOne,
            text: "Look at how mysterous I am! You would never guess I like to pee in the shower :D"
        }}/>
        <NavigationButton/>
    </main>
}


export default Main;