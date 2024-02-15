import {useEffect, useRef, useState } from "react";
import "../../Styles/MultipleUses/ImageLoader.css";
import uploadIcon from '../../Assets/Images/upload.svg';

interface IImageLoader {
    type: "image" | "video" | "text";
}

const ImageLoader = ({ctx}: {ctx: IImageLoader}) => {

    const [image, setImage] = useState<null | string>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputVal, setInputVal] = useState(null);

    useEffect(()=>{
        // Remove image when changing medias
        setImage(null);
    }, [ctx.type])

    const handleUploadClick = () => {
        if(inputRef.current) {
            inputRef.current.click();
        }
    }
    
    const handleInputChange = 
        (event: React.ChangeEvent<HTMLInputElement>) => 
    {
        const files = event.target.files;
        if(!files) throw new Error("Not yet implemented!");
        setImage(URL.createObjectURL(files[0]));
    }

    return <div className="ImageLoader">
        <img src={uploadIcon}
            alt="Upload Button"
            onClick={handleUploadClick}
            className="ImageLoader-Upload"
        />
        {image && <img 
                    src={image}
                    alt="Your image couldn't load. Please refresh."
                    className={"ImageLoader-Image"}
        />}
        <input accept={
            `${ctx.type === "image" ? "image/*" : ctx.type === "video" ? "video/*" : ""}`
        } onChange={handleInputChange} ref={inputRef} type="file"/>
    </div>
}
 
export default ImageLoader;