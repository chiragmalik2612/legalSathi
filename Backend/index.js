require('dotenv').config();

const express = require( "express");
const mongoose = require( 'mongoose');
const lawyersRoute = require( './Routes/lawyersRoute.js');
const usersRoute = require( './Routes/usersRoute.js');
const cors = require( "cors");


const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})


app.use('/lawyers', lawyersRoute);
app.use('/users', usersRoute);



mongoose
  .connect(process.env.MONGODBURL)
  .then(() =>{
    console.log('connected to database');
    app.listen(process.env.PORT, () => {
        console.log(`App is listening to port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

