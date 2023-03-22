import React from 'react';
import { checkGuess } from '../../game-helpers';

const Guess = ({ guess, answer }) => {
  const checkedGuess = checkGuess(guess, answer);

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
        checkedGuess.map(({ letter, status }, i) => (
          <span key={`${i}-${letter}`} className={`cell ${status}`}>
            {letter}
          </span>
        ))
      )}
    </>
  );
};

export default Guess;
