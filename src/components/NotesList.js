import React from 'react';
import NotesItem from './NotesItem';

function NotesList({ notes, onDelete, onArchive }) {
  if (!notes.length) {
    return <p className="notes-list__empty-message">No notes found</p>;
  }

  return (
    <div className="notes-list">
      {notes.map(note => (
        <NotesItem
          key={note.id}
          id={note.id}
          onDelete={onDelete}
          onArchive={onArchive}
          {...note}
        />
      ))}
    </div>
  );
}

export default NotesList;
