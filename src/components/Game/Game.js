import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessList from '../GuessList/GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

// Using arrow functions as that is what I tend to use personally / professionally.
// Also, using as a way to track files I touch - maybe helpful, maybe not
const Game = () => {
  const [guess, setGuess] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const handleGuessChange = (e) => {
    setGuess(e.target.value.toUpperCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (guesses.includes(guess)) {
      setErrorMsg(`Try a new word. '${guess}' has already been guessed.`);
      setGuess('');
      return;
    }

    const updatedGuesses = [...guesses];
    updatedGuesses.push(guess);
    setGuesses(updatedGuesses);

    setGuess('');
  };

  return (
    <>
      <GuessList guesses={guesses} />
      <GuessInput guess={guess} handleChange={handleGuessChange} handleSubmit={handleSubmit} />
      <h4 style={{ color: 'red' }}>{errorMsg}</h4>
    </>
  );
};

export default Game;
