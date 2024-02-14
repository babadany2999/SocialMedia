import { useState } from "react";
import "../Styles/Explore.css";
import MediaPostContainer from "./MultipleUses/MediaPostContainer";
import NavigationTop from "./MultipleUses/NavigationTop";
import SearchBar from "./MultipleUses/SearchBar";
import Title from "./MultipleUses/Title";
import { IMediaPost } from "./MultipleUses/MediaPost";
import postOne from '../Assets/Images/posts/postOne.jpg';
import NavigationButton from "./MultipleUses/NavigationButton";
import TextPost, { ITextPost } from "./MultipleUses/TextPost";
import humanOne from '../Assets/Images/humans/human1.jpg';

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

    const [textPosts, setTextPosts] = useState<ITextPost[]>([
        {
            icon: humanOne,
            handle: "myhandle",
            text: "When life gives you lemons, don't make lemonade. " +
            "Make a lemon cake - it will make you happier."
        }
    ])

    return <main className="Explore">
        <Title ctx={{
            text: "Explore",
        }}/>
        <SearchBar/>
        <NavigationTop/>
        <MediaPostContainer ctx={mediaPosts}/>
        {textPosts.map((post, index) => 
        <TextPost key={index} ctx={{icon: post.icon, handle: post.handle, text: post.text}}/>)}
        <NavigationButton/>
    </main>
}
 
export default Explore;