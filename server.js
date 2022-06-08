var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
const port = 8000;


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// Browsersync
function startBrowserSync() {
  const browserSync = require('browser-sync');
  browserSync({
    ui: false,
    files: ['public'],
    proxy: 'localhost:' + port,
    port: port + 1,
    logLevel: 'debug',
    logPrefix: 'Expresso ☕️',
    logConnections: true,
    logFileChanges: true,
    // tunnel: 'expresso',
    online: true,
    open: true,
    browser: 'default',
    reloadOnRestart: true,
    notify: false
  });
}

app.listen(port, () => {
    console.log('⚡️ Expresso serving at: http://localhost:' + port + 1);
    startBrowserSync();
});


module.exports = app;
