import { useState } from 'react';
import send from '../img/send-message.png'

export function AddNode({update}) {
  const [newPost, setPost] = useState({
    text: ''
  })
  const hundlerOnSubmit = (event) => {
    event.preventDefault();
    const apiUrl = 'http://localhost:7070/notes'
    fetch(apiUrl, 
      {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.status===204 ? update() : alert('Request Error'))
  }

  const hundlerOfChange = ({target}) => {
    const {value} = target;
    setPost({text: value})
  }

  return (
    <form action="" className="add-post-form" onSubmit={hundlerOnSubmit}>
      <label htmlFor="note">New Note</label>
      <textarea type="text" name="note" id="note" onChange={hundlerOfChange}/>
      <button type="submit"><img src={send} alt="" /></button>
    </form>
  )
}
