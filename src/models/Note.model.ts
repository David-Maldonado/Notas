import {Schema, model, Document} from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const noteSchema = new Schema({

    title: String,
    description: String
}, {timestamps: true});

interface INote extends Document{
    title: string;
    description: string;
}

noteSchema.plugin(mongoosePaginate);
export default model<INote>('Note', noteSchema);

