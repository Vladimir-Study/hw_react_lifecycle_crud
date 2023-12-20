import './css/style.css'
import { Refresh } from './components/Refresh'
import { Notes } from './components/Notes'
import { useState } from 'react'
import { useEffect } from 'react'
import { AddNode } from './components/AddNode'

function App() {
  const [notes, setNotes] = useState([]);
  const loadNotes = () => {
    const apiUrl = 'http://localhost:7070/notes'
    fetch(apiUrl)
      .then(res=>res.json())
      .then(repos=>setNotes(repos))
  };
  useEffect(() => {
    loadNotes()
  }, [])
  return (
    <>
      <Refresh onLoad={loadNotes}/>
      <Notes notes={notes} update={loadNotes}/>
      <AddNode update={loadNotes}/>
    </>
  )
}

export default App
