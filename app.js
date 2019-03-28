import express from 'express';
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import routes from './routes/index';
import cors from 'cors';

const app = express();

app.use(cors());
const www = process.env.WWW || './';
console.log(`serving ${www}`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(www));
app.use('/', routes);

module.exports = app;