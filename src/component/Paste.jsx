import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div className="min-h-screen bg-black p-6 text-white flex flex-col items-center">
      {/* Search Bar */}
      <input
        className="p-3 rounded-xl w-full md:w-[600px] mt-5 bg-gray-900 text-white mr-29 focus:outline-none focus:ring-2 focus:ring-gray-500"
        type="search"
        placeholder="Search Here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Paste Cards */}
      <div className="flex flex-col gap-5 mt-5 w-full max-w-[720px] ml-1">
        {filterData.length > 0 &&
          filterData.map((paste) => (
            <div
              className="border border-gray-900 p-4 rounded-lg bg-gray-900 mr-29 mt-5" 
              key={paste.id}
            >
              <div className="text-xl font-bold">{paste.title}</div>
              <div className="text-gray-400">{paste.content}</div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href={`/?pasteId=${paste.id}`}
                  className="font-bold px-4 py-2 bg-gray-800 text-white rounded-lg transition hover:bg-gray-700"
                >
                  Edit
                </a>

                <a
                  href={`/pastes/${paste.id}`}
                  className="font-bold px-4 py-2 bg-gray-800 text-white rounded-lg text-center transition hover:bg-gray-700"
                >
                  View
                </a>

                <button
                  onClick={() => handleDelete(paste.id)}
                  className="font-bold px-4 py-2 bg-gray-800 text-white rounded-lg transition hover:bg-gray-700"
                >
                  Delete
                </button>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(paste.content);
                    toast.success('Copied To Clipboard');
                  }}
                  className="font-bold px-4 py-2 bg-gray-800 text-white rounded-lg transition hover:bg-gray-700"
                >
                  Copy
                </button>

                <button className="font-bold px-4 py-2 bg-gray-800 text-white rounded-lg transition hover:bg-gray-700">
                  Share
                </button>
              </div>

              {/* Created At */}
              <div className="text-gray-500 mt-2 text-sm">{paste.createdAt}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Paste;