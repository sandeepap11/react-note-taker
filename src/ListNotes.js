import React, {Component} from 'react'


class ListNotes extends Component{


  render(){

    const {notes, changeCurrentNote, deletenote} = this.props
return(


    <ul className='list-notes'>
      { notes.map((note) => (
        <div  className='list-item-top' key={ note.id }>
          <li className='list-item' onClick={ () => changeCurrentNote(note) } >
            {note.heading}

          </li>
          <button className='delete-note' onClick={ () => deletenote(note)}>X</button>
          </div>

      )) }
    </ul>
)
}
}

export default ListNotes
