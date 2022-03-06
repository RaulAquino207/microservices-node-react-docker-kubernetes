import express from "express";
import { Request, Response } from "express";
import { randomBytes } from 'crypto';

const app = express();
const port = 3001;

/**
 * As it is a simple example, no database will be used.
 */
let commentsByPostId : any = {};

app.use(express.json());

app.get('/', (req : Request, res : Response) => {
    return res.json({ message: `🚀 API for posts services` });
});

app.post('/:id/comments', (req : Request, res : Response) => {
    const id = randomBytes(4).toString('hex');

    const { content } = req.body;
    const { postId } = req.params;

    commentsByPostId[`${id}`] = {
        id,
        content
    };

    return res.json({
        id,
        content
    })
});

app.get('/:id/comments', (req : Request, res : Response) => {
    return res.json(commentsByPostId);
});

app.listen(port, () => {
    console.log(`🚀 ~ Server started on port ~ ${port}`);
})