import { Schema } from 'mongoose';

const questionAnswerSchema = new Schema({
	answer: {
		type: [String],
		required: true,
	},
});

const responseSchema = new Schema({
	respondeeEmail: {
		type: String,
		required: true,
	 },
	formId: {
		type: String,
		required: true,
	},
	answers: {
		type: Map,
		of: questionAnswerSchema,
		required: true,
	},
});

export default responseSchema;
