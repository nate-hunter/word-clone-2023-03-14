import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

import Guess from '../Guess';

const GuessResults = ({ guesses, answer }) => {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((guess, i) => (
        <p key={guess} className='guess'>
          <Guess guess={guesses[i]} answer={answer} />
        </p>
      ))}
    </div>
  );
};

export default GuessResults;
