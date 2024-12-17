import React from 'react';

function NotesSearch({ keyword, onSearch }) {
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Search notes..."
        value={keyword}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default NotesSearch;