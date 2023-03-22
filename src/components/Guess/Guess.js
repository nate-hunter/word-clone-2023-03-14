import React from 'react';
import { checkGuess } from '../../game-helpers';

const Guess = ({ guess, answer }) => {
  const checkedGuess = checkGuess(guess, answer);

  if (guess) console.log({ checkedGuess });

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
