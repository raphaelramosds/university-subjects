import express, { json } from 'express';
import { db } from './database/db';
import { router } from './routes';
import cors from 'cors';

const app = express();

app.use(cors(
    // a definir
    
));
app.use(json());
app.use(router);

app.listen(3333, async () => {
    await db.sync();
    console.log(`🚀 ${process.env.PROJECT_NAME} is running`)
})