import "../../Styles/MultipleUses/StoryCircle.css";

export interface IStoryCircle {
    _self?: true;
    isUnread: boolean;
    // No icon if _self
    icon?: string;
}

const StoryCircle = ({ctx}: {ctx: IStoryCircle}) => {
    return <button className={`StoryCircle 
    ${ctx.isUnread ? "StoryCircle-Unread" : ""}
    ${ctx._self ? "StoryCircle-Self" : ""}`}>
        <img src={ctx.icon} className="StoryCircle-Inner">
        </img>
    </button>
}
 
export default StoryCircle;