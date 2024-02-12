"use client"
import React from 'react';

import { useState } from 'react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedNames, setSelectedNames] = useState([]);

  const data = [
    "John",
    "Jane",
    "Michael",
    "Sarah",
    "David"
  ];

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term === '') {
      setSuggestions([]);
    } else {
      const filteredSuggestions = data.filter((nom) =>
        nom.toLowerCase().includes(term.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
  };

  const addToCart = (name) => {
    setSelectedNames([...selectedNames, name]);
  };

  const removeFromCart = (name) => {
    const updatedNames = selectedNames.filter((selectedName) => selectedName !== name);
    setSelectedNames(updatedNames);
  };

  return (
    <div className="max-w-md mx-auto p-4 relative">
      <input
        type="text"
        placeholder="Rechercher un nom..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 z-10 bg-white border border-gray-300 rounded">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="flex justify-between items-center py-2 px-4">
              <span>{suggestion}</span>
              <button
                onClick={() => addToCart(suggestion)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Ajouter au panier
              </button>
            </li>
          ))}
        </ul>
      )}
      <h2 className="mt-4 mb-2 text-xl font-bold text-white">Panier :</h2>
      <ul>
        {selectedNames.map((name, index) => (
          <li key={index} className="flex justify-between items-center py-2">
            <span>{name}</span>
            <button
              onClick={() => removeFromCart(name)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}