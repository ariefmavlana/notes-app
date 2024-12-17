import React, { useState } from 'react';
import NotesList from './components/NotesList';
import NotesInput from './components/NotesInput';
import NotesSearch from './components/NotesSearch';
import { getInitialData } from './utils';

function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchKeyword, setSearchKeyword] = useState('');

  const addNote = ({ title, body }) => {
    setNotes([
      ...notes,
      {
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date().toISOString()
      }
    ]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const toggleArchive = (id) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, archived: !note.archived } : note
    ));
  };

  const getFilteredNotes = () => {
    return notes.filter(note => 
      note.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  };

  const activeNotes = getFilteredNotes().filter(note => !note.archived);
  const archivedNotes = getFilteredNotes().filter(note => note.archived);

  return (
    <div className="note-app">
      <div className="note-app__header">
        <h1>Notes App</h1>
        <NotesSearch 
          keyword={searchKeyword} 
          onSearch={setSearchKeyword} 
        />
      </div>
      <div className="note-app__body">
        <NotesInput addNote={addNote} />
        <h2>Active Notes</h2>
        <NotesList 
          notes={activeNotes}
          onDelete={deleteNote}
          onArchive={toggleArchive}
        />
        <h2>Archived Notes</h2>
        <NotesList 
          notes={archivedNotes}
          onDelete={deleteNote}
          onArchive={toggleArchive}
        />
      </div>
    </div>
  );
}

export default App;