const Batch = require('../models/Batch');

exports.getBatch = async (req, res, next) => {
	try {
		const batch = await Batch.findOne({
			where: {
				'id': req.query.id
			}
		})
		const response = {
			status: 'Success',
			message: 'Fetched Successfully',
			data: batch
		}
		return res.status(200).json(response);
	} catch (e) {
		next(e);
	}
};

exports.getAllBatch = async (req, res, next) => {
	try {
		const batches = await Batch.findAll();
		const response = {
			status: 'Success',
			message: 'Fetched Successfully',
			data: batches
		}
		return res.status(200).json(response);
	} catch (e) {
		next(e);
	}
};

exports.postBatch = async (req, res, next) => {
	try {
		const { instructorName, startTime, endTime, fee } = req.body;
		const batch = await Batch.create({
			instructorName,
			startTime,
			endTime,
			fee
		});

		const response = {
			status: 'Success',
			message: `Batch Created with id : ${batch.id}`
		}
		return res.status(201).json(response);
	}
	catch (e) {
		next(e);
	}
};