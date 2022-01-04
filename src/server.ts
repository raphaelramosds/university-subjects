import "express-async-errors";

import express, { json, Request, Response, NextFunction } from 'express';
import cors from 'cors';

import { db } from './database/db';
import { router } from './routes';

const app = express();

app.use(cors(
    // a definir

));
app.use(json());
app.use(router);

app.use((err: Error, req: Request, res: Response, next:NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        });
    }
    return res.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

app.listen(3333, async () => {
    await db.sync();
    console.log(`🚀 ${process.env.PROJECT_NAME} is running`)
})