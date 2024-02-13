import '../../Styles/MultipleUses/NavigationButton.css';

import homeIcon from '../../Assets/Images/home.svg';
import searchIcon from '../../Assets/Images/search.svg';
import plusIcon from '../../Assets/Images/plus-bold.svg';
import commentIcon from '../../Assets/Images/comment.svg';
import userIcon from '../../Assets/Images/user.png';

const NavigationButton = () => {
    return <footer className="NavigationButton">
        <button className='NavigationButton-Button'>
            <img src={homeIcon} alt=""/>
        </button>
        <button className='NavigationButton-Button'>
            <img src={searchIcon} alt=""/>
        </button>
        <button className='NavigationButton-Button NavigationButton-CenterButton'>
            <img src={plusIcon} alt=""/>
        </button>
        <button className='NavigationButton-Button'>
            <img src={commentIcon} alt=""/>
        </button>
        <button className='NavigationButton-Button'>
            <img src={userIcon} alt=""/>
        </button>
    </footer>
}
 
export default NavigationButton;