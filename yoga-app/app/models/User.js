const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Batch = require('./Batch');

const User = sequelize.define('users', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	fullName: DataTypes.STRING,
	currBatchId: DataTypes.INTEGER,
	nextBatchId: DataTypes.INTEGER,
	age: DataTypes.INTEGER,
	email: {
		type: DataTypes.STRING,
		allowNull: false
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	}
},
{
	indexes: [
		// Create a unique index on email
		{
			unique: true,
			fields: ['email']
		}],
});

User.belongsTo(Batch, { foreignKey: 'currBatchId' });
User.belongsTo(Batch, { foreignKey: 'nextBatchId' });

module.exports = User;
