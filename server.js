const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const port = 3000;

require('./config/database');
require('./config/passport');

const indexRouter = require('./routes/index');
const artistsRouter = require('./routes/artists');
const albumsRouter = require('./routes/albums');
const musiciansRouter = require('./routes/musicians');
const usersRouter = require('./routes/users');

const app = express();
require('dotenv').config();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(session({
    secret: 'Project2',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.session());

app.use('/', indexRouter);
app.use('/artists', artistsRouter);
app.use('/', albumsRouter);
app.use('/', musiciansRouter);
app.use('/', usersRouter);

app.listen(port, () => {
    console.log(`Express is Listening on port ${port}`);
});