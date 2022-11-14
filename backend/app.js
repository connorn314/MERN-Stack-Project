const express = require('express');
const debug = require('debug');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('./models/User');



const cors = require('cors');
const csurf = require('csurf');
const { isProduction } = require('./config/keys');


const usersRouter = require('./routes/api/users');
const bindingsRouter = require('./routes/api/bindings');
const csrfRouter = require('./routes/api/csrf');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

if (!isProduction) {
    // Enable CORS only in development because React will be on the React
    // development server (http://localhost:3000). (In production, the Express 
    // server will serve the React files statically.)
    app.use(cors());
}

app.use(
    csurf({
        cookie: {
        secure: isProduction,
        sameSite: isProduction && "Lax",
        httpOnly: true
        }
    })
);

app.use('/api/users', usersRouter);
app.use('/api/bindings', bindingsRouter);
app.use('/api/csrf', csrfRouter);


app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.statusCode = 404;
    next(err);
});

const serverErrorLogger = debug('backend:error');

app.use((err, req, res, next) => {
    serverErrorLogger(err);
    const statusCode = err.statusCode || 500;
    res.status(statusCode);
    res.json({
        message: err.message,
        statusCode,
        errors: err.errors
    })
});


module.exports = app;
