import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({});
  const pasteId = searchParams.get('pasteId');

  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p.id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      } else {
        console.error('Paste not found', pasteId);
      }
    }
  }, [pasteId, allPastes]);

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    setTitle('');
    setValue('');
    setSearchParams({});
  }

  return (
    <div className="min-h-screen bg-black p-6 text-white flex flex-col items-center ml-20">
      {/* Title Input and Create/Update Button */}
      <div className="flex w-full max-w-[600px] gap-4 mt-7 justify-center mr-50">
        <input
          className="p-2 rounded-2xl w-full h-11 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          type="text"
          placeholder="ENTER TITLE HERE"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          onClick={createPaste}
          className="p-2 rounded-2xl h-11 w-40 bg-gray-800 text-white font-bold hover:bg-gray-700 transition whitespace-nowrap"
        >
          {pasteId ? 'Update Paste' : 'Create Paste'}
        </button>
      </div>

      {/* Textarea for Content */}
      <div className="mt-8 w-full max-w-[800px]">
        <textarea
          className="rounded-2xl w-[600px] min-h-[500px] p-4 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          value={value}
          placeholder="ENTER CONTENT HERE"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home;