import '../Styles/Main.css';
import "../Styles/MainPageStyles.css";
import Title from './MultipleUses/Title';
import bellIcon from '../Assets/Images/bell.svg';
import Story from './MultipleUses/Story';
import Post from './MultipleUses/Post';
// Humans
import humanOne from '../Assets/Images/humans/human1.jpg';
// Post
import postOne from '../Assets/Images/posts/postOne.jpg';
import NavigationButton from './MultipleUses/NavigationButton';
import StickyHeader from './MultipleUses/StickyHeader';

const Main = () => {
    return <div className="Main MainPageStyles">
        <StickyHeader ctx={<><Title ctx={{text: "x", button: {
            icon: bellIcon,
            right: true
        }}}/>
        <Story/></>}/>
        <main>
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
                text: "Look at how mysterous I am! You would never guess I like to pee in the shower :D",
                playable: true
            }}/>
        </main>
        <NavigationButton/>
    </div>
}


export default Main;