const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Batch = sequelize.define('batch', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
		instructorName: DataTypes.STRING,
		startTime: DataTypes.STRING,
		endTime: DataTypes.STRING,
		fee: DataTypes.INTEGER
  	},
	{
		indexes: [
			{
				unique: true,
				fields: ['instructorName']
			}],
	});

module.exports = Batch;