import { Schema } from 'mongoose';

const formSchema = new Schema({
	id: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	description: String,
	bannerUrl: String,
});

export default formSchema;
