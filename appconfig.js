var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

/** app configration and modules indection */
module.exports = (app, express) => {
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
  
  app.use(function (err, req, res, next) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  });
}

/** pre app configurations */
module.exports.pre = (app) => {
  app.use(cors());
};

/** post app configurations */
module.exports.post = (app) => {
  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({
      success: false,
      message: "Specific resource not found.",
      error: err.message
    });
  });

  /** Error response to access from any class (res, error, custom code) */
  errorResponse = function (res, error, code = 500) {
    if (error instanceof Error) {
      res.status(code).json({
        success: false,
        message: error.original ? error.original.message : error.message
      });
    } else {
      res.status(error.code || code).json({
        success: false,
        message: error.message || error
      });
    }
  };

  /** Error type object with code and message to parse to the errorResponse function  */
  error = function (code, message) {
    return {
      code: code,
      message: message
    }
  };

  print = function (data) {
    console.log(data);
  };
}