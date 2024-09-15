import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
	},
	ingredients: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Ingredient',
		},
	],
	instructions: {
		type: String,
		required: true,
	},
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
