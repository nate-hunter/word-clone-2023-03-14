import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

// Using arrow functions as that is what I tend to use personally / professionally.
// Also, using as a way to track files I touch - maybe helpful, maybe not
const Game = () => {
  const [guess, setGuess] = useState('');

  const handleGuessChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <GuessInput guess={guess} handleChange={handleGuessChange} handleSubmit={handleSubmit} />
    </>
  );
};

export default Game;
