/* GraphQL Setup */
import {buildSchema} from 'graphql';

const testSchema = `
    type Query {
        hello: String
    }
`

const schema = buildSchema(testSchema);

const root = {
    hello: () => {
        return "Hello world!"
    }
}

export {schema, root};

/* Check environment */
const checkEnv:(() => {[key: string]: string}) = () => {
    const {NODE_ENV, MONGODB_URI} = process.env;
    if(!NODE_ENV) throw new Error('No NODE_ENV key found in your environment');
    if(!MONGODB_URI) throw new Error('NO MONGODB_URI found in your environment');
    return {NODE_ENV, MONGODB_URI};
}

export {checkEnv};