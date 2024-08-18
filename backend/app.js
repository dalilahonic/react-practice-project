import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import Meal from './models/Meal.js';

dotenv.config();

const PORT = process.env.PORT || 3000;
const URI = process.env.URI;

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(URI).then(() => {
  console.log(`Server running on ${PORT}`);
  app.listen(3000);
});