import "../Styles/CreatePost.css";
import "../Styles/MainPageStyles.css";
import StickyHeader from "./MultipleUses/StickyHeader";
import Title from "./MultipleUses/Title";
import arrowLeft from '../Assets/Images/arrow-left.svg';
import ImageLoader from "./MultipleUses/ImageLoader";
import { useEffect, useState } from "react";
import ImageSettings, { IMediaSettings } from "./MultipleUses/ImageSettings";

interface ICreatePostChoose {
    handleClick: () => void;
    text: string;
    isActive: boolean;
}

const CreatePostChoose = ({ctx}: {ctx: ICreatePostChoose}) => {
    return <button onClick={ctx.handleClick}
    className={`${ctx.isActive ? "CreatePost-Choose-Active" :""}`}>{ctx.text}</button>
}

const CreatePost = () => {

    const [postType, setPostType] = useState<"image" | "video" | "text">();

    const [mediaSettings, setMediaSettings] = 
        useState<IMediaSettings>({
            exposure: 0,
            contrast: 0,
            warmth: 0,
            saturation: 0
        });

    const [activeMediaSetting, setActiveMediaSetting] = 
        useState<"exposure" | "contrast" | "warmth" | "saturation">(
            "exposure"
        )

    return <div className="CreatePost MainPageStyles">
        <StickyHeader ctx={<>
            <Title ctx={{
                text: "Make a post",
                button: {
                    icon: arrowLeft,
                    left: true
                }
            }}/>
        </>}/>
        <main>
            <div className="CreatePost-Choose">
                <CreatePostChoose ctx={{
                    handleClick: () => setPostType("image"),
                    text: "Image",
                    isActive: postType === "image"
                }}/>
                <CreatePostChoose ctx={{
                    handleClick: () => setPostType("video"),
                    text: "Video",
                    isActive: postType === "video"
                }}/>
                <CreatePostChoose ctx={{
                    handleClick: () => setPostType("text"),
                    text: "Text",
                    isActive: postType === "text"
                }}/>
            </div>
            {postType && postType !== "text" &&
            <ImageLoader ctx={{type: postType}}/>}
            {postType && postType !== "text" &&
            <ImageSettings ctx={{
                setActiveMediaSetting: setActiveMediaSetting,
                activeMediaSetting: activeMediaSetting
            }}/>}
        </main>
    </div>
}
 
export default CreatePost;