import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p.id === id);

  if (!paste) {
    return (
      <div className="min-h-screen bg-black p-6 text-white flex items-center justify-center">
        <p className="text-2xl font-bold">Paste not found!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black p-6 text-white">
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-3 rounded-2xl w-full md:w-[66%] bg-gray-800 text-white font-bold focus:outline-none focus:ring-2 focus:ring-gray-500"
          type="text"
          placeholder="ENTER TITLE HERE"
          value={paste.title}
          disabled
        />
      </div>

      <div className="mt-8">
        <textarea
          className="rounded-2xl w-full md:min-w-[500px] p-4 mt-4 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          value={paste.content}
          disabled
          placeholder="ENTER CONTENT HERE"
          rows={20}
        />
      </div>
    </div>
  );
};

export default ViewPaste;