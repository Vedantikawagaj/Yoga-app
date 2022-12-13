const User = require('./../models/User');

exports.verifyUser = async (token) => {

    const user = await User.findOne({
        where: {
            email: token
        }
    })
    return user ? true : false;
}