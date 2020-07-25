import React, { Component } from 'react';
import * as firebase from 'firebase';

export class Notes extends Component {
  removeNote(id) {
    firebase.database().ref('notes').child(id).remove();
  }

  render() {
    return (
      <section className='notes-wrapper'>
        <h3>Notes</h3>
        <div className='notes'>
          {this.props.notes.map((note) => (
            <div className='note' key={note.id}>
              <div className='note-title'>
                <h4>
                  {note.title}
                  <span
                    className='remove'
                    onClick={() => this.removeNote(note.id)}
                  >
                    Delete
                  </span>
                </h4>

                <div className='note-content'>
                  <p>{note.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Notes;
