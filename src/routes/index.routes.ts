import {Router} from 'express';
import { getNotes, getNote, CreateNote, updateNote, deleteNote } from '../controllers/note.controller';

class IndexRouter{

    public router: Router = Router();
    constructor(){

        this.config();
    }


    config(): void{

        this.router.route('/notes')
        .get(getNotes)
        .post(CreateNote)

        this.router.route('/notes/:id')
        .get(getNote)
        .put(updateNote)
        .delete(deleteNote)
    }
}

const indexRouter = new IndexRouter();

export default indexRouter.router;