import { IUser } from '../../models/User';
import User from '../../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface RegisterArgs {
	username: string;
	email: string;
	password: string;
}

interface LoginArgs {
	email: string;
	password: string;
}

const userResolver = {
	Query: {
		users: async (): Promise<IUser[]> => {
			return await User.find();
		},
		user: async (_: any, { id }: { id: string }): Promise<IUser | null> => {
			return await User.findById(id);
		},
	},
	Mutation: {
		register: async (_: any, { username, email, password }: RegisterArgs): Promise<IUser> => {
			const hashedPassword = await bcrypt.hash(password, 6);
			const newUser = new User({ username, email, password: hashedPassword });
			return await newUser.save();
		},
		login: async (_: any, { email, password }: LoginArgs): Promise<string> => {
			const user = await User.findOne({ email });
			if (!user) {
				throw new Error('User not found');
			}

			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) {
				throw new Error('Invalid password');
			}

			const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || 'secret', {
				expiresIn: '1h',
			});

			return token;
		},
	},
};

export default userResolver;
