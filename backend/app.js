const express = require('express');
const debug = require('debug');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('./models/User');
require('./models/Game');
require('./models/Binding');
require('./models/Like');
require('./models/Follow');
require('./config/passport'); 
// require('./models/Image');
const passport = require('passport');

const cors = require('cors');
const csurf = require('csurf');
const { isProduction } = require('./config/keys');


const usersRouter = require('./routes/api/users');
const bindingsRouter = require('./routes/api/bindings');
const gamesRouter = require('./routes/api/games');
const likesRouter = require('./routes/api/likes');
const followsRouter = require('./routes/api/follows');
const csrfRouter = require('./routes/api/csrf');
// const imagesRouter = require("./routes/api/images");

const app = express();




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());

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
app.use('/api/games', gamesRouter);
app.use('/api/likes', likesRouter);
app.use('/api/follows', followsRouter);
app.use('/api/csrf', csrfRouter);
// app.use('/api/images', imagesRouter)
if (isProduction) {
    const path = require('path');
    // Serve the frontend's index.html file at the root route
    app.get('/', (req, res) => {
        res.cookie('CSRF-TOKEN', req.csrfToken());
        res.sendFile(
            path.resolve(__dirname, '../frontend', 'build', 'index.html')
        );
    });

    // Serve the static assets in the frontend's build folder
    app.use(express.static(path.resolve("../frontend/build")));

    // Serve the frontend's index.html file at all other routes NOT starting with /api
    app.get(/^(?!\/?api).*/, (req, res) => {
        res.cookie('CSRF-TOKEN', req.csrfToken());
        res.sendFile(
            path.resolve(__dirname, '../frontend', 'build', 'index.html')
        );
    });
}
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
