const bcrypt = require('bcryptjs');
const validator = require('validator');
const { encryptWithAES } = require('../middlewares/encDyc');
const User = require('../models/User');

exports.login = async (req, res, next) => {
	const user = await User.findOne({
		where: {
			email: req.body.email
		}
	})

	if (user) {
		const isValid = bcrypt.compare(req.body.password, user.password)
		if (!isValid) {
			return res.status(404).json({
				status: 'Bad Request',
				message: 'Password Email Combination is wrong'
			})
		}
	} else {
		return res.status(404).json({
			status: 'Bad Request',
			message: 'User Not Found'
		})
	}
	return res.status(200).json({
		status: 'Success',
		message: 'User Login Successfully',
		token: encryptWithAES(req.body.email)
	})
};

exports.register = async (req, res, next) => {
	const user = await User.findOne({
		where: {
			email: req.body.email
		}
	});

	if (user) {
		return res.status(404).json({
			status: 'Bad Request',
			message: 'User Already Registered'
		})
	} else {
		const hashedPassword = await bcrypt.hash(req.body.password, 12);

		await User.create({
			fullName: req.body.fullName,
			email: req.body.email,
			age: req.body.age,
			password: hashedPassword,
		});

		return res.status(200).json({
			status: 'Success',
			message: 'User Registered Successfully.You can login',
		})
	}
};
