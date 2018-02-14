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

  saveNote = (note) =>{

    this.setState((state) => { state.notes.concat([note]) })
    this.setState({ currentNote: note })

  }

  addNew = () =>{

    console.log('add')

    const note = {id: this.state.notes.length + 1, heading: '', value: ' '}
    this.setState((state) => ({ notes: state.notes.concat([note]) }))
    this.setState({ currentNote: note })

    console.log(this.state.notes)


  }

  render() {


      this.state.notes.sort((a, b) => {return b.id-a.id})
    return (
      <div className="App">
        <p className="App-intro">
          To get started, just start.
        </p>
        <div className='notes-wrapper'>
        <div className='list-notes-top'>
          <ListNotes notes={this.state.notes} changeCurrentNote={this.changeCurrentNote}/>
        </div>
        <div className='current-note'>
        {( this.state.currentNote !== null ) && ( <Note note={this.state.currentNote} savenote={this.saveNote}/> )}
        </div>

        </div>
        <button onClick={this.addNew}>Add</button>
      </div>
    );
  }
}

export default App;
