import { useState } from "react";
import "../../Styles/MultipleUses/Story.css";
import StoryCircle, { IStoryCircle } from "./StoryCircle";
import plusIcon from '../../Assets/Images/plus.svg';
import humanOne from '../../Assets/Images/humans/human1.jpg';
import humanTwo from '../../Assets/Images/humans/human2.jpg';
import humanThree from '../../Assets/Images/humans/human3.jpg';
import humanFour from '../../Assets/Images/humans/human4.jpg';
import humanFive from '../../Assets/Images/humans/human5.jpg';
import humanSix from '../../Assets/Images/humans/human6.jpg';

const Story = () => {

    const [stories, setStories] = useState<IStoryCircle[]>([
        {
            _self: true,
            isUnread: false,
            icon: plusIcon
        },
        {
            isUnread: true,
            icon: humanOne
        },
        {
            isUnread: true,
            icon: humanTwo,
        },
        {
            isUnread: true,
            icon: humanThree
        },
        {
            isUnread: true,
            icon: humanFour
        },
        {
            isUnread: false,
            icon: humanFive
        },
        {
            isUnread: false,
            icon: humanSix
        }
    ]);

    return <div className="Story">
        {stories.map((story, index) => <StoryCircle key={index} ctx={{
            _self: story._self,
            isUnread: story.isUnread,
            icon: story.icon
        }}/>)}
    </div>;
}
 
export default Story;