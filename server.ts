import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

const app = express();

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})


export default {}