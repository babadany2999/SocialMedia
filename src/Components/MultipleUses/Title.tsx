import '../../Styles/MultipleUses/Title.css';
import TitleButton, { ITitleButton } from './TitleButton';

export interface ITitle {
    text: string;
    button?: ITitleButton;
}

const Title = ({ctx}: {ctx: ITitle}) => {
    return <div className="Title">
        <h1>{ctx.text}</h1>
        {ctx.button ? <TitleButton ctx={{
            icon: ctx.button.icon,
            left: ctx.button.left,
            right: ctx.button.right
        }}/> : ""}
    </div>;
}
 
export default Title;