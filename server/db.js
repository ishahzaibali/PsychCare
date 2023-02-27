import mongoose from 'mongoose';

const connection = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(process.env.DB, connectionParams);
		mongoose.set('strictQuery', false);
		console.log('Connected to Database...');
	} catch (error) {
		console.log(error);
		console.log('Disconnected...');
	}
};

export default connection;
