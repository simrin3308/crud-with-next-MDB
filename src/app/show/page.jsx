import React from "react";
import Note from "../model/note";
import dbConnect from "../dbConnect";
import Link from "next/link";
import { deleteNote } from "../edit/[id]/page";
import { redirect } from "next/navigation";

const Show = async () => {
  dbConnect();
  const notes = await Note.find();
  // console.log(notes);

  async function deleteNote(data) {
    "use server";
    let id = JSON.parse(data.get("id")?.valueOf());

    await Note.deleteOne({ _id: id });
    redirect("/show");
  }

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
                    <form action={deleteNote}>
                      <input
                        type="hidden"
                        value={JSON.stringify(note._id)}
                        name="id"
                      />
                      <button className="p-2 m-2 bg-red-600 text-white hover:cursor-pointer">
                        Delete
                      </button>
                    </form>
                    <Link href={"/edit/" + note._id}>
                      <button className="p-2 m-2 bg-blue-600 text-white hover:cursor-pointer">
                        Edit
                      </button>
                    </Link>
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
