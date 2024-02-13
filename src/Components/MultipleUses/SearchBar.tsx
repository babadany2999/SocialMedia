import "../../Styles/MultipleUses/SearchBar.css";
import searchIcon from '../../Assets/Images/search.svg';

const SearchBar = () => {
    return <div className="SearchBar">
        <img src={searchIcon} alt=""/>
        <input type="text" placeholder="Search here"></input>
    </div>
}
 
export default SearchBar;