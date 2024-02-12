import { SomeDate, SomeID } from "./utils";

interface IConversation {
    _id: SomeID;
    // Contains messager 1 id and messager 2 id
    between: {_id1: string; _id2: string};
    // Points to different messages id
    messages: SomeID[],
    conversationStarted: SomeDate;
}