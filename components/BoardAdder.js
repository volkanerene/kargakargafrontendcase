import React, { useState } from 'react';

const BoardAdder = ({ onAdd }) => {
  const [boardName, setBoardName] = useState('');

  const handleAdd = () => {
    if (boardName.trim()) {
      onAdd({ name: boardName, items: [], id: Date.now() });
      setBoardName('');
    }
  };

  return (
    <div className="bg-white rounded-md p-3 m-3 mt-0 last:mb-0 shadow-md">
      <h4 className="text-lg mb-2">Add New Board</h4>
      <input
        type="text"
        placeholder="Board Name"
        value={boardName}
        onChange={(e) => setBoardName(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-2"
      />
      <button
        onClick={handleAdd}
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Add Board
      </button>
    </div>
  );
};

export default BoardAdder;
