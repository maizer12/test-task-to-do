import mongoose from 'mongoose';

const ingredientSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

export default mongoose.model('Ingredient', ingredientSchema);
