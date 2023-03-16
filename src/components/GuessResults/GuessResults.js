import React from 'react';
import Guess from '../Guess';

const GuessResults = ({ guesses }) => {
  return (
    <div className='guess-results'>
      {guesses.map((guess) => (
        <p key={guess} className='guess'>
          {guess}
        </p>
      ))}
    </div>
  );
};

export default GuessResults;
