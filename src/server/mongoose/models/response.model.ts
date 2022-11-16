import mongoose from 'mongoose';
import responseSchema from 'server/mongoose/schemas/response.schema';

const responseModel = mongoose.model('Response', responseSchema);

export default responseModel;
