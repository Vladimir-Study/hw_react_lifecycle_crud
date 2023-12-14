import refresh from '../img/refresh.png'

export function Refresh({onLoad}) {
  return (
    <div className="notes_header">
      <p>Notes</p>
      <img src={refresh} alt="" onClick={onLoad}/>
    </div>
  )
}
