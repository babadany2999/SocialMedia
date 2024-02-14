import '../../Styles/MultipleUses/NavigationButton.css';
import { useNavigate } from 'react-router-dom';

import homeIcon from '../../Assets/Images/home.svg';
import searchIcon from '../../Assets/Images/search.svg';
import plusIcon from '../../Assets/Images/plus-bold.svg';
import commentIcon from '../../Assets/Images/comment.svg';
import userIcon from '../../Assets/Images/user.png';

const NavigationButton = () => {

    const navigate = useNavigate();

    return <footer className="NavigationButton">
        <button className='NavigationButton-Button' onClick={() => navigate("/")}>
            <img src={homeIcon} alt=""/>
        </button>
        <button className='NavigationButton-Button' onClick={() => navigate("/explore")}>
            <img src={searchIcon} alt=""/>
        </button>
        <button className='NavigationButton-Button NavigationButton-CenterButton' onClick={() => navigate("/create-post")}>
            <img src={plusIcon} alt=""/>
        </button>
        <button className='NavigationButton-Button' onClick={() => navigate("/messages")}>
            <img src={commentIcon} alt=""/>
        </button>
        <button className='NavigationButton-Button' onClick={() => navigate("/user")}>
            <img src={userIcon} alt=""/>
        </button>
    </footer>
}
 
export default NavigationButton;