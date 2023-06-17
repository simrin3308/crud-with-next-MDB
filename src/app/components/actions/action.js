"use server"

import dbConnect from "@/app/dbConnect";
import Note from "@/app/model/note";

// function to save or create todo
export const newNote = async (e) => {
    let title = e.get("title")?.valueOf();
    let note = e.get("note")?.valueOf();


    try {
        dbConnect();
        const newNote = new Note({ title, note })
        await newNote.save()
        console.log(newNote);
    } catch (error) {
        console.error(error);
    }
}



