import React from 'react';

function SearchBar() {
  return (
    <div className="relative w-full">
      <input
        type="text"
        className="w-full pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-200"
        placeholder="O que esta buscando hoje?"
      />
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="absolute left-3 top-2 h-4 w-4 text-gray-400">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  );
}

export default SearchBar;