import { useState } from "react";
import "../Styles/Explore.css";
import MediaPostContainer from "./MultipleUses/MediaPostContainer";
import NavigationTop from "./MultipleUses/NavigationTop";
import SearchBar from "./MultipleUses/SearchBar";
import Title from "./MultipleUses/Title";
import { IMediaPost } from "./MultipleUses/MediaPost";
import postOne from '../Assets/Images/posts/postOne.jpg';

const Explore = () => {

    const [mediaPosts, setMediaPosts] = useState<IMediaPost[]>([
        {
            playable: true,
            media: postOne
        },
        {
            media: postOne,
            bigFlex: true
        }
    ]);

    // const [textPosts, setTextPosts] = useState<ITextPost[]>([
        
    // ])

    return <main className="Explore">
        <Title ctx={{
            text: "Explore",
        }}/>
        <SearchBar/>
        <NavigationTop/>
        <MediaPostContainer ctx={mediaPosts}/>
    </main>
}
 
export default Explore;