import express from "express";
import { Request, Response } from "express";
import { randomBytes } from 'crypto';

const app = express();
const port = 3000;

/**
 * As it is a simple example, no database will be used.
 */
const posts = {};

app.get('/', (req : Request, res : Response) => {
    return res.json({ message: `🚀 API for posts services` });
});

app.post('/posts', (req : Request, res : Response) => {
    const id = randomBytes(4).toString('hex');

    const { context } = req.body;

    Object.assign(posts, {
        id,
        context
    })
});

app.get('/posts', (req : Request, res : Response) => {
    return res.json({ message: `🚀 API for posts services` });
});

app.listen(port, () => {
    console.log(`🚀 ~ Server started on port ~ ${port}`);
})