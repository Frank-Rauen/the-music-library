const express = require('express');
const morgan = require('morgan');
const port = 3000;

require('./config/database');

const indexRouter = require('./routes/index');
const artistsRouter = require('./routes/artists');
const albumsRouter = require('./routes/albums');

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/artists', artistsRouter);
app.use('/', albumsRouter);

app.listen(port, () => {
    console.log(`Express is Listening on port ${port}`);
});