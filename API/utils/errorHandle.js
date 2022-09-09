const errorHandler = (error, _req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
  });
};
module.exports = errorHandler;
