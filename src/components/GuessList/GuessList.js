import React from 'react';

const GuessList = ({ guesses }) => {
  console.log('[guesses]', guesses);

  return (
    <>
      <h3>LIST OF GUESSES...</h3>
      <div className='guess-result'>{guesses}</div>
    </>
  );
};

export default GuessList;
