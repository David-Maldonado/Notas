import { Request, Response, json } from 'express';

import Note from '../models/Note.model';

export async function getNotes(req: Request, res: Response): Promise<Response>{

    const { page = 1 } = req.query;
    const notes = await Note.paginate({}, {page, limit:10});

    return res.json(notes);
} 


export async function getNote(req: Request, res: Response): Promise<Response>{

   const { id }= req.params;
   const notes = await Note.findById(id);
   
   return res.json(notes);
}


export async function CreateNote(req: Request, res: Response): Promise<Response>{


    const {title, description} = req.body;

    const newNote = {
        title,
        description
    }

    const note = new Note(newNote);

    await note.save();

    return res.json({
        message: 'Note successfully saved',
        note
    })

    
   
}

export async function deleteNote(req: Request, res: Response): Promise<Response>{

    const { id } = req.params;
    const note = await Note.findByIdAndRemove(id);

    return res.json({
        message: "Note Deleted",
        note
    });
}


export async function updateNote(req: Request, res: Response): Promise<Response>{

    const { id } = req.params;
    const { title, description} = req.body;

    console.log({id, title, description});

    const updateNote = await Note.findByIdAndUpdate(id, {
        title,
        description
    }, {new: true})

    


    return res.json({
        message: 'Successfully updated',
        updateNote
    });


}