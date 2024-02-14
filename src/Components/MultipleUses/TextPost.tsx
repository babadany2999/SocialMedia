import "../../Styles/MultipleUses/TextPost.css";

export interface ITextPost {
    icon: string;
    handle: string;
    text: string;
}

const TextPost = ({ctx}: {ctx:ITextPost}) => {
    return <div className="TextPost">
        <div className="TextPost-Header">
            <img src={ctx.icon} alt=""/>
            <span>{ctx.handle}</span>
        </div>
        <span>{ctx.text}</span>
    </div>
}
 
export default TextPost;