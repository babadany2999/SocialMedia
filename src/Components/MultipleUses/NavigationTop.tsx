import {useEffect, useState } from "react";
import "../../Styles/MultipleUses/NavigationTop.css";
import { useNavigate, useParams } from "react-router-dom";

interface INavigationTopButton {
    isActive: boolean;
    text: string;
    handleClick: () => void;
}

const NavigationTopButton = ({ctx}: {ctx:INavigationTopButton}) => {


    return <button className={`${ctx.isActive ? "NavigationTop-Active" : ""}`}
    onClick={ctx.handleClick}>{ctx.text}</button>
}


const NavigationTop = () => {

    const navigate = useNavigate();

    const {type} = useParams();

    const [activeRoute, setActiveRoute] = useState("top");
    const possibleRoutes = ["top", "users", "hashtags", "posts", "events"];

    useEffect(()=>{
        switch(type) {
            case "top": return setActiveRoute(type);
            case "users": return setActiveRoute(type);
            case "hashtags": return setActiveRoute(type);
            case "posts": return setActiveRoute(type);
            case "events": return setActiveRoute(type);
            default: setActiveRoute("top");
        }
    }, [type])

    const handleClick = (type: string) => {
        console.log("Hey!!");
        // check if we're not currently on same path
        if(activeRoute === type) return;
        // Here we also replace history stack since it doesn't make sense
        // for the user to have to press back button 10 times to go back to
        // another page
        navigate(`/explore/${type}`, {
            replace: true,
        })
    }

    return <nav className="NavigationTop">
        {possibleRoutes.map((route, index) => {
            return <NavigationTopButton key={index} ctx={{
                isActive: activeRoute === route,
                text: route,
                handleClick: () => handleClick(route)
            }}/>
        })}
        {/* <NavigationTopButton ctx={{
            isActive: isActiveTop,
            handleClick: () => handleClick("top"),
            text: "Top"
        }}/>
        <NavigationTopButton ctx={{
            isActive: activePage === "users",
            handleClick: () => handleClick("users"),
            text: "Users"
        }}/>
        <NavigationTopButton ctx={{
            isActive: activePage === "hashtags",
            handleClick: () => handleClick("hashtags"),
            text: "Hashtags"
        }}/>
        <NavigationTopButton ctx={{
            isActive: activePage === "posts",
            handleClick: () => handleClick("posts"),
            text: "Posts"
        }}/>
        <NavigationTopButton ctx={{
            isActive: activePage === "events",
            handleClick: () => handleClick("events"),
            text: "Events"
        }}/> */}

    </nav>
}
 
export default NavigationTop;