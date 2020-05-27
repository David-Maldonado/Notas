import {Schema, model, Document} from 'mongoose';

const noteSchema = new Schema({

    title: String,
    description: String
}, {timestamps: true});

interface INote extends Document{
    title: string;
    description: string;
}

export default model<INote>('Note', noteSchema);
