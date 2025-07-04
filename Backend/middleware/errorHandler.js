
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : err.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: err.stack
    })
};

module.exports = errorHandler;