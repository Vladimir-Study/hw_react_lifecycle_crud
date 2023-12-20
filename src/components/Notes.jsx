import { useEffect, useState } from "react";
import { Note } from "./Note"

export function Notes({notes, update}) {
  const show_notes = notes.map(note => 
    <Note key={note.id} text={note.text} id={note.id} update={update}/>
  )
  return (
    <div className="show_notes">
      {show_notes}
    </div>
  )
}
