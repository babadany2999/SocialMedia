import {SomeID, SomeDate} from './utils';

interface IMessage {
    _id: SomeID;
    // Sent by user with the same id
    // Corresponds to one of the two between._id1 or between._id2 
    senderId: SomeID;
    sentAt: SomeDate;
    // Read by opposite of senderId
    // senderId === between._id1 ? readAt by between._id2
    // if undefined -> hasn't been readden yet
    readAt?: SomeDate;
    // The actual message
    message: string;
}