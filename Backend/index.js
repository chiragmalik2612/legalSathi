import express from "express";
import mongoose from 'mongoose';
import {PORT, mongoDBURL} from "./config.js";
import lawyersRoute from './Routes/lawyersRoute.js';
import usersRoute from './Routes/usersRoute.js';
import cors from "cors";


const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    //console.log(request);
    return response.status(234).send('Welcome to Project');
});

app.use('/lawyers', lawyersRoute);
app.use('/users', usersRoute);



mongoose
  .connect(mongoDBURL)
  .then(() =>{
    console.log('connected to database');
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

