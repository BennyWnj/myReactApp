const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const todosRouter = require('./routes/todos');
const mongoose = require('mongoose');
const result = require('dotenv').config();

// console.log(result);

// console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on(
    "error",
    console.error.bind(
        console,
        "connection error. did you remember to create env.sh?"
    )
);
db.once("open", function() {
    // connected!
    // console.log("here");
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/', indexRouter);
app.use('/todos', todosRouter);
app.use('/users', usersRouter);


// Render React page
app.use(express.static(path.join(__dirname, "../client/build/")));
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = app;
