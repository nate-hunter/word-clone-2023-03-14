import React from 'react';

const GuessResults = ({ guesses }) => {
  return (
    <div className='guess-result'>
      {guesses.map((guess) => (
        <p key={guess} className='guess'>
          {guess}
        </p>
      ))}
    </div>
  );
};

export default GuessResults;
