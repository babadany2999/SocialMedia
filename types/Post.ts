import { SomeDate, SomeID, SomeURL } from "./utils";

interface MultiPost {
    
}

interface Post {
    _id: SomeID;
    dateOfCreation: SomeDate;
    // Points to diffeent users id
    likedBy: SomeID[];
    // Store it here for efficiency
    // -- so we don't have to parse just to see if we self-liked --
    selfLike: boolean;
}

interface InteractivePost extends Post {
    URL: SomeURL;
    text?: string;
}

interface VideoPost extends InteractivePost {
    
}
interface PhotoPost extends InteractivePost {
    
}
interface TextPost extends Post {
    text: string;
}