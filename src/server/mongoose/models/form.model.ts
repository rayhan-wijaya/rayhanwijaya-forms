import mongoose from 'mongoose';
import formSchema from 'server/mongoose/schemas/form.schema';

const formModel = mongoose.model('Form', formSchema);

export default formModel;
