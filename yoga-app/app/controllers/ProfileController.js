const User = require('../models/User');

exports.getProfile = async (req, res, next) => {
	try {
		const user = await User.findOne({
			where: {
				'email': req.token
			}
		})
        if (!user) {
            return res.status(404).json({
                status: 'Bad Request',
                message: 'User Not Found'
            })
        }
		const response = {
			status: 'Success',
			message: 'Fetched Successfully',
			data: user
		}
		return res.status(200).json(response);
	} catch (e) {
		next(e);
	}
};


exports.updateProfile = async (req, res, next) => {
	try {
		const body = req.body;
		console.log(body)
		await User.update({...body}, {
            where: {
				email: req.token
            }
          });
          
		const response = {
			status: 'Success',
			message: `User Data Updated`
		}
		return res.status(200).json(response);
	}
	catch (e) {
		next(e);
	}
};

exports.completePayment = async (req, res, next) => {
	try {
		const user = await User.findOne({
			where: {
				'email': req.token
			}
		})
        if (!user) {
            return res.status(404).json({
                status: 'Bad Request',
                message: 'User Not Found'
            })
        }
		// if (user.currBatchId===null) {
        //     return res.status(404).json({
        //         status: 'Bad Request',
        //         message: 'Not enrolled in any batch'
        //     })
        // }
		const response = {
			status: 'Success',
			message: 'Payment successful'
		}
		return res.status(200).json(response);
	} catch (e) {
		next(e);
	}
};

