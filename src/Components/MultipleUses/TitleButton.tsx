import "../../Styles/MultipleUses/TitleButton.css";

export interface ITitleButton {
    icon: string;
    left?: true;
    right?: true;
}

const TitleButton = ({ctx}: {ctx: ITitleButton}) => {
    return <button className={`TitleButton ${ctx.left ? "TitleButton-Left": ctx.right ? "TitleButton-Right" : ""}`}>
        <img src={ctx.icon} alt=""/>
    </button>
}
 
export default TitleButton;