import "../../Styles/MultipleUses/ImageSettings.css";
import contrastIcon from '../../Assets/Images/image/contrast.svg';
import exposureIcon from '../../Assets/Images/image/exposure.svg';
import saturationIcon from '../../Assets/Images/image/saturation.svg';
import termoIcon from '../../Assets/Images/image/termo.svg';


interface IImageSettingsButton extends IActiveMedia {
    type: keyof IMediaSettings;
    icon: string;
}
    
export interface IMediaSettings {
    exposure: number;
    contrast: number;
    warmth: number;
    saturation: number;
}
interface IActiveMedia {
    setActiveMediaSetting: 
    React.Dispatch<React.SetStateAction<
    "exposure" | "contrast" | "warmth" | "saturation">>;
    activeMediaSetting:
    "exposure" | "contrast" | "warmth" | "saturation";
}

const ImageSettingsButton = ({ctx}: {ctx: IImageSettingsButton}) => {
    return <div onClick={() => 
        ctx.setActiveMediaSetting(ctx.type)}
    className={`${ctx.activeMediaSetting === ctx.type ? "ImageSettings-Button-Active" : ""}`}>
        <img src={ctx.icon} alt="Exposure"/>
        <span>{ctx.type}</span>
    </div>
}

const ImageSettings = ({ctx}: {ctx: IActiveMedia}) => {

    return <div className="ImageSettings">
        <div className="ImageSettings-Buttons">
            <ImageSettingsButton ctx={{
                icon: exposureIcon,
                type: "exposure",
                setActiveMediaSetting: ctx.setActiveMediaSetting,
                activeMediaSetting: ctx.activeMediaSetting
            }}/>
             <ImageSettingsButton ctx={{
                icon: contrastIcon,
                type: "contrast",
                setActiveMediaSetting: ctx.setActiveMediaSetting,
                activeMediaSetting: ctx.activeMediaSetting
            }}/>
             <ImageSettingsButton ctx={{
                icon: termoIcon,
                type: "warmth",
                setActiveMediaSetting: ctx.setActiveMediaSetting,
                activeMediaSetting: ctx.activeMediaSetting
            }}/>
             <ImageSettingsButton ctx={{
                icon: saturationIcon,
                type: "saturation",
                setActiveMediaSetting: ctx.setActiveMediaSetting,
                activeMediaSetting: ctx.activeMediaSetting
            }}/>
        </div>
    </div>
}
 
export default ImageSettings;