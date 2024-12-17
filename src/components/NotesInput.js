import React, { useState } from 'react';

function NotesInput({ addNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addNote({ title, body });
    setTitle('');
    setBody('');
  };

  const titleCharLimit = 50;
  const remainingChars = titleCharLimit - title.length;

  return (
    <div className="note-input">
      <h2>Create Note</h2>
      <form onSubmit={onSubmitHandler}>
        <p className="note-input__title__char-limit">
          Remaining characters: {remainingChars}
        </p>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            if (e.target.value.length <= titleCharLimit) {
              setTitle(e.target.value);
            }
          }}
          required
        />
        <textarea
          placeholder="Write your note here..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
}

export default NotesInput;