const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const path = require("path");
const errorMiddleware = require('./middlewares/error');

const app = express();

//Configuring the backend
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true },{limit : '50mb'}));

//Defining the routes
const userRoutes = require('./routes/userRoutes');
const entryRoutes = require('./routes/entryRoutes');

// Using the routes
app.use("/api/v1" , entryRoutes);
app.use("/api/v1" , userRoutes);

app.use(errorMiddleware);

module.exports= app;