import { Schema, model } from 'mongoose';

const user_schema = new Schema({
	first_name: String,
	last_name: String,
	email: {
		type: String,
		required: true
	},
	password: String,
	role: ['ADMIN', 'MODERATOR']
});

const User = model('User', user_schema);
export default User;
