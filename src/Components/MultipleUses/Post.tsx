import "../../Styles/MultipleUses/Post.css";
import dotsIcon from '../../Assets/Images/dots.svg';
import commentIcon from '../../Assets/Images/comment.svg';
import heartIcon from '../../Assets/Images/heart.svg';
import playIcon from '../../Assets/Images/play.svg';

interface IPost {
    icon: string;
    handle: string;
    media?: string;
    text?: string;
    playable?: true;
}

const Post = ({ctx}: {ctx: IPost}) => {
    return <div className="Post">
        <div className="Post-Header">
            <div className="Post-Header-Left">
                <img src={ctx.icon} alt=""/>
                <span>{ctx.handle}</span>
            </div>
            <button>
                <img src={dotsIcon} alt=""/>
            </button>
        </div>
        <div className="Post-Main">
            <div className="Post-Main-Media">
                <img src={ctx.media} alt="/"/>
                {ctx.playable ? 
                <img src={playIcon} alt="" className="Post-Main-Media-Playable"></img> : ""}
            </div>
            <span>{ctx.text}</span>
        </div>
        <div className="Post-Footer">
            <div className="Post-Footer-Comments">
                <img src={commentIcon} alt=""/>
                <span>{20} comments</span>
            </div>
            <div className="Post-Footer-Likes">
                <span>{"You & "}{300} others</span>
                <img src={heartIcon} alt=""/>
            </div>
        </div>
    </div>
}
 
export default Post;