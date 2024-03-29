const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const routes = require('./routes/index');

const app = express();

// Hack; delete when ready to use express correctly
app.use(express.static('./'));

// Configure templating engine
// Register '.html' extension with The Mustache Express
app.engine('html', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

// Configure favicon
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));

// Configure logging
app.use(logger('dev'));

// Configure parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// Configure static files
app.use('/public', express.static(path.join(__dirname, 'public')));

routes.configureForApp(app);

module.exports = app;
