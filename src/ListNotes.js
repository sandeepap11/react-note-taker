import React, {Component} from 'react'


class ListNotes extends Component{


  render(){

    const {notes, changeCurrentNote} = this.props
return(


    <ul className='list-notes'>
      { notes.map((note) => (

          <li key={ note.id } className='list-item' onClick={ () => changeCurrentNote(note) } >
            {note.heading}
          </li>

      )) }
    </ul>
)
}
}

export default ListNotes
