import React from 'react';

const Guess = ({ guess }) => {
  return (
    <>
      {guess === undefined ? (
        <>
          <span className='cell'></span>
          <span className='cell'></span>
          <span className='cell'></span>
          <span className='cell'></span>
          <span className='cell'></span>
        </>
      ) : (
        guess.split('').map((letter, i) => (
          <span key={`${i}-${letter}`} className='cell'>
            {letter}
          </span>
        ))
      )}
    </>
  );
};

export default Guess;
