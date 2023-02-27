import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connection from './db.js';
import bodyParser from 'body-parser';

// middleware

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// connection

connection();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server port: ${port}`));
