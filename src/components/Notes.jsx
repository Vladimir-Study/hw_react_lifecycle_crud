import { useEffect, useState } from "react";
import { Note } from "./Note"

export function Notes({notes}) {
  const show_notes = notes.map(note => 
    <Note key={note.id} text={note.text} id={note.id}/>
  )
  return (
    <div className="show_notes">
      {show_notes}
    </div>
  )
}
