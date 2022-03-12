import express from "express";
import { Request, Response } from "express";
import { randomBytes } from 'crypto';
import cors from 'cors';
import axios from 'axios';

const app = express();
const port = 4001;

/**
 * As it is a simple example, no database will be used.
 */
let posts : any = {};

app.use(express.json());
app.use(cors());

app.get('/', (req : Request, res : Response) => {
    return res.json({ message: `🚀 API for posts service` });
});

app.post('/posts', (req : Request, res : Response) => {
    const id = randomBytes(4).toString('hex');

    const { content } = req.body;

    posts[`${id}`] = {
        id,
        content
    };

    axios.post('http://localhost:3000/events', {
        type : 'PostCreated',
        data : {
            id,
            content
        }
    });

    return res.json({
        id,
        content
    })
});

app.get('/posts', (req : Request, res : Response) => {
    return res.json(posts);
});

app.listen(port, () => {
    console.log(`🚀 ~ Server started on port ~ ${port}`);
})