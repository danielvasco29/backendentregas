import express from 'express'
import 'dotenv/config';
import cors from 'cors';
import { router } from './routes';



const app = express();
app.use(express.json());
app.use(router);
app.use(express.urlencoded({ extended: true }));
app.use(cors());



export { app }
