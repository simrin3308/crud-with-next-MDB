import React from "react";
import Note from "../model/note";
import dbConnect from "../dbConnect";

const Show = async () => {
  dbConnect();
  const notes = await Note.find();
  console.log(notes);

  return (
    <main className="m-10 space-y-5">
      <h1 className="text-xl font-bold">Notes</h1>
      <div>
        <ul className="flex font-bold">
          <li className="flex-1">Title</li>
          <li className="flex-1">Note</li>
          <li className="flex-1">Options</li>
        </ul>
        <hr />
        {notes.map((note) => {
          return (
            <>
              <ul key={note._id} className="flex">
                <li className="flex-1">{note.title}</li>
                <li className="flex-1">{note.note}</li>
                <li className="flex-1">
                  <div className="flex">
                    <button>Delete</button>
                    <button>Edit</button>
                  </div>
                </li>
              </ul>
              <hr />
            </>
          );
        })}
      </div>
    </main>
  );
};

export default Show;
