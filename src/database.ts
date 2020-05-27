import { connect } from 'mongoose';

export async function startConnection(){
    await connect('mongodb://localhost/notes-db', {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

    console.log('Base de datos conectada');
}