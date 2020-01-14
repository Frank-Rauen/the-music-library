const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const methodoverride = require('method-override');
const port = 3000;

const app = express();

require('./config/database');
require('./config/passport')

const indexRouter = require('./routes/index');
const artistsRouter = require('./routes/artists');
const albumsRouter = require('./routes/albums');
const musiciansRouter = require('./routes/musicians');
const googlersRouter = require('./routes/googlers')


require('dotenv').config();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(session({
    secret: 'SEIRFlexRocks!',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodoverride('_method'));

app.use('/', indexRouter);
app.use('/artists', artistsRouter);
app.use('/', albumsRouter);
app.use('/', musiciansRouter);
app.use('/', googlersRouter);

app.listen(port, () => {
    console.log(`Express is Listening on port ${port}`);
});