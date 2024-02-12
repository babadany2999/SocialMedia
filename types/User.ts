import { SomeID, SomeDate } from "./utils";

interface IUser {
    _id: SomeID;
    username: string;
    password: string;  
    name: string;
    email: string;
    dateOfCreation: SomeDate;
    // Points to different users id
    friends: SomeID[];
    // Points to different conversations id
    conversations: SomeID[];
    calls: SomeID[];
    // Points to different posts id
    posts: SomeID[];
    handle: string;
    following: SomeID[];
    followers: SomeID[];
    notifications: SomeID[];
    lastActive: SomeDate;
    isIncognito: boolean;
}
 