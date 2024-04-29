const { BaseError } = require("../errors");

function errorHandler(err, req, res, next) {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      message: err.message,
      success: false,
      error: err.details,
    });
  }
  return res.status(500).json({
    message: "Something Went Wrong",
    success: false,
    error: err,
  });
}

module.exports = errorHandler;
