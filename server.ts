import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
dotenv.config();

/* GraphQL */
import {graphqlHTTP} from 'express-graphql';
import {schema, root, checkEnv} from './setup';
/* MongoDB */
import mongoose from 'mongoose';

/* Environment variables */
const {
    NODE_ENV,
    MONGODB_URI
} = checkEnv();

const app = express();

const PORT = 5000;

app.use("/graphql", graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: NODE_ENV === "development"
}))

app.listen(PORT, async () => {
    console.log(`Server is listening on port ${PORT}`);
    await mongoose.connect(MONGODB_URI)
                    .then(() => console.log("Sucessfully connected to MongoDB."))
                    .catch((err) => console.log("Couldn't connect to MongoDB: " + err))
                    .finally(() => process.exit())
})


export default {}