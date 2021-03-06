import React, { Component } from 'react';
import * as firebase from 'firebase';

export class NotesForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      note: '',
    };

    this.createNote = this.createNote.bind(this);
  }

  onChangeHandler(evt, key) {
    this.setState({
      [key]: evt.target.value,
    });
  }

  createNote() {
    if (this.state.title !== '' && this.state.note !== '') {
      firebase.database().ref('notes').push({
        title: this.state.title,
        note: this.state.note,
      });
    }
  }

  render() {
    return (
      <section className='noteform'>
        <h2>Create New Note</h2>
        <div className='form-group'>
          <input
            type='text'
            id='noteform-title'
            name='noteform-title'
            value={this.state.title}
            onChange={(evt) => this.onChangeHandler(evt, 'title')}
            placeholder='Title'
          />
        </div>
        <div className='form-group'>
          <textarea
            name='noteform-note'
            id='noteform-note'
            value={this.state.note}
            onChange={(evt) => this.onChangeHandler(evt, 'note')}
            placeholder='Note'
            rows='10'
          ></textarea>
        </div>
        <button onClick={this.createNote}>Create</button>
      </section>
    );
  }
}

export default NotesForm;
