import express from "express";
import { Request, Response } from "express";
import cors from 'cors';
import axios from 'axios';

const app = express();
const port = 3000;

/**
 * As it is a simple example, no database will be used.
 */

app.use(express.json());
app.use(cors());

app.get('/', (req : Request, res : Response) => {
    return res.json({ message: `🚀 API for event bus` });
});

app.post('/events', (req : Request, res : Response) => {
    const event = req.body;
    console.log("🚀 ~ file: index.ts ~ line 22 ~ app.post ~ event", event);

    // axios.post('http://localhost:3000/events', event);
    // axios.post('http://localhost:3001/events', event);
    // axios.post('http://localhost:3002/events', event);

    res.send({ status : 'OK' });
});

app.listen(port, () => {
    console.log(`🚀 ~ Server started on port ~ ${port}`);
});