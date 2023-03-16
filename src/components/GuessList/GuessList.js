import React from 'react';

const GuessList = ({ guesses }) => {
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

export default GuessList;
