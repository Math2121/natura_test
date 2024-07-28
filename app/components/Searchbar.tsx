'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(`/search/${searchTerm}`);
  };

  const handleKeyDown = (event:React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };
  return (
    <div className="relative w-full">
      <input
        type="text"
        className="w-full pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-200"
        placeholder="O que esta buscando hoje?"
        onKeyDown={handleKeyDown}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="absolute left-3 top-2 h-4 w-4 text-gray-400">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  );
}

export default SearchBar;