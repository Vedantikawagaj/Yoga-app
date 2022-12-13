const { decryptWithAES } = require('./encDyc');
const { verifyUser } = require('./verifyUser');

module.exports = verifyToken = async (req, res, next) => {
    if (
        req.originalUrl.includes('/login') ||
        req.originalUrl.includes('/register')
    ) {
        return next();
    }
    const authorizationHeader = req.header('authorization');
    if (!authorizationHeader) {
        return res.status(403).json({
            status: 'Error',
            message: 'A token is required for authentication',
        });
    } else {
        try {
            console.log(authorizationHeader)
            const token = decryptWithAES(authorizationHeader)
            req.token = token;
            const isValid = await verifyUser(token);
            if (!isValid) {
                return res
                    .status(401)
                    .json({ status: 'Error', message: 'Invalid User' });
            }
        } catch (e) {
            return res
                .status(401)
                .json({ status: 'Error', message: 'Invalid Token' });
        }
    }
    return next();
};
