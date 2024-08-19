import React from 'react';
import { Link } from 'react-router-dom';

const BrowseCharacters = () => {
  const characters = [ /* Array of characters */ ];

  return (
    <div>
      <h2>Browse Characters</h2>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <Link to={`/character/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseCharacters;
