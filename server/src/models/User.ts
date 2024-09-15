import mongoose from 'mongoose';
import { Document } from 'mongoose';

export interface IUser extends Document {
	username: string;
	email: string;
	password: string;
	createdAt: Date;
}

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true,
	},
	password: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

export default mongoose.model('User', userSchema);
