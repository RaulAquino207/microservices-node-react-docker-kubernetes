import express from "express";
import { Request, Response } from "express";
import { randomBytes } from 'crypto';
import cors from 'cors';

const app = express();
const port = 3001;

/**
 * As it is a simple example, no database will be used.
 */
let commentsByPostId : any = {};

app.use(express.json());
app.use(cors());

app.get('/', (req : Request, res : Response) => {
    return res.json({ message: `🚀 API for comments service` });
});

app.post('/:postId/comments', (req : Request, res : Response) => {
    const id = randomBytes(4).toString('hex');

    const { content } = req.body;
    const { postId } = req.params;

    const comments = commentsByPostId[postId] || [];
    comments.push({ 
        id,
        content
    });

    commentsByPostId[postId] = comments;

    return res.json({ 
        id,
        content
    });
});

app.get('/:postId/comments', (req : Request, res : Response) => {

    const { postId } = req.params;
    return res.json(commentsByPostId[postId] || []);
});

app.listen(port, () => {
    console.log(`🚀 ~ Server started on port ~ ${port}`);
})