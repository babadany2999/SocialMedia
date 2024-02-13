import "../Styles/Explore.css";
import NavigationTop from "./MultipleUses/NavigationTop";
import SearchBar from "./MultipleUses/SearchBar";
import Title from "./MultipleUses/Title";

const Explore = () => {
    return <main className="Explore">
        <Title ctx={{
            text: "Explore",
        }}/>
        <SearchBar/>
        <NavigationTop/>
    </main>
}
 
export default Explore;