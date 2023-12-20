import closeIcon from '../img/remove.png'

export function Note({text, id, update}) {
  const hundlerClickDelete = () => {
    const apiUrl = `http://localhost:7070/notes/${id}`;
    fetch(apiUrl, {
      method: 'DELETE',
    })
    .then(response => response.status===204 ? update() : alert('Request Error'))
  }
  return (
    <div className="show_note">
      <img src={closeIcon} alt="close-icon" onClick={hundlerClickDelete}/>
      <p>{text}</p>
    </div>
  )
}
