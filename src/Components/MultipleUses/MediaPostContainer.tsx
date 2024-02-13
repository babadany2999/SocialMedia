import "../../Styles/MultipleUses/MediaPostContainer.css";
import MediaPost, { IMediaPost } from "./MediaPost";

const MediaPostContainer = ({ctx}: {ctx: IMediaPost[]}) => {
    return <div className="MediaPostContainer">
        {ctx.map((mediaPost, index) => 
            <MediaPost key={index} ctx={mediaPost}/>)}
    </div>
}
 
export default MediaPostContainer;