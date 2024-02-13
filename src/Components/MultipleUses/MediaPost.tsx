import "../../Styles/MultipleUses/MediaPost.css";
import playIcon from '../../Assets/Images/play.svg';

export interface IMediaPost {
    playable?: true;
    media: string;
    bigFlex?: true;
}

const MediaPost = ({ctx}: {ctx: IMediaPost}) => {
    return <div className={`MediaPost 
    ${ctx.bigFlex ? "MediaPost-FlexBig" : ""}`}>
        <img src={ctx.media} alt=""/>
        {ctx.playable ? 
        <img src={playIcon} alt=""
            className="MediaPost-Playable"/> : "" }
    </div>;
}


export default MediaPost;