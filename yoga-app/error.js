function handleRouteErrors(error, req, res, next) {
    if (error.stack) console.error(error.stack);
    res.status(error.statusCode).json(error);
}

module.exports = {
    handleRouteErrors,
};
