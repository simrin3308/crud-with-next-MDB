import React from "react";
import Note from "@/app/model/note";
import dbConnect from "@/app/dbConnect";
import { redirect, useParams } from "next/navigation";



const Edit = async ({ params }) => {
  dbConnect();
  const notes = await Note.findById(params.id);
  console.log(notes.title);

  const updateNote = async (e) => {
    "use server";
    const title = e.get("title")?.valueOf();
    const note = e.get("note")?.valueOf();

    await Note.findByIdAndUpdate(params.id, {
      title,
      note,
    });
    redirect("/show");
  };
  return (
    <main className="m-10 space-y-5">
      <h1 className="text-xl font-bold">Edit Note</h1>
      <form action={updateNote}>
        <div>
          <label className="text-lg ">Title</label>
          <br />
          <input
            type="text"
            name="title"
            className="w-[100%] md:w-[50%] bg-slate-200 h-10 p-3"
            defaultValue={notes?.title}
          />
        </div>
        <div>
          <label>Note</label>
          <br />
          <textarea
            type="text"
            name="note"
            rows="3"
            className="w-[100%] md:w-[50%] bg-slate-200 p-3"
            defaultValue={notes?.note}
          ></textarea>
        </div>
        <button
          type="submit"
          className="p-3 bg-yellow-400 font-bold hover:bg-orange-500 hover:text-white"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default Edit;
