import React, { Component } from 'react';
import Note from './Note'
import ListNotes from './ListNotes'
import './App.css';

const notesArray= [{id: 1, heading:'Note Uno', value:'This is a note'},
              {id: 2, heading:'Note Dos', value:'This is another note'},
              {id: 3, heading:'Note Tres', value:'This is the third note'}]

class App extends Component {

  state = {

    currentNote: null,

    notes: notesArray
  }

  changeCurrentNote = (note) =>{

    this.setState({ currentNote: note })
  }

  deletenote = (note) =>{


    this.setState((state) => ({ notes: state.notes.filter(noteIterator => (noteIterator.id !== note.id)) }))
    this.setState({ currentNote: null })


  }

  saveNote = (note) =>{

    this.setState((state) => { state.notes.concat([note]) })
    this.setState({ currentNote: note })

  }

  addNew = () =>{



    const note = {id: this.state.notes.length + 1, heading: '', value: ' '}
    this.setState((state) => ({ notes: state.notes.concat([note]) }))
    this.setState({ currentNote: note })



  }

  render() {


      this.state.notes.sort((a, b) => {return b.id-a.id})
    return (
      <div className="App">
      <button className='add-note' onClick={this.addNew}>+</button>
        <div className='notes-wrapper'>
        <div className='list-notes-top'>
          <ListNotes notes={this.state.notes} changeCurrentNote={this.changeCurrentNote} deletenote={this.deletenote}/>
        </div>
        <div className='current-note'>
        {( this.state.currentNote !== null ) && ( <Note note={this.state.currentNote} savenote={this.saveNote}/> )}
        </div>

        </div>

      </div>
    );
  }
}

export default App;
