const path = require('path');
const env = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const auth = require('./app/middlewares/isAuth');
const { handleRouteErrors } = require('./error');
const cors = require('cors');
const app = express();

//Loading Routes
const webRoutes = require('./routes/web');
const sequelize = require('./config/database');

env.config();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({ extended: true, limit: '50mb' }));
app.use(cors());
app.use(auth);

app.use(webRoutes);

app.use((err, req, res, next) => {
	console.log('Global Handling', err);
	handleRouteErrors(err, req, res, next);
});

sequelize
	.sync()
	.then(() => {
		app.listen(process.env.PORT);
		//pending set timezone
		console.log("App listening on port " + process.env.PORT);
	})
	.catch(err => {
		console.log(err);
	});
