import "../../Styles/MultipleUses/SlideEditor.css";

const SlideEditor = () => {
    return <div className="SlideEditor">
        <input type="range"
                min={0}
                max={100}
                step={1}/>
    </div>
}
 
export default SlideEditor;