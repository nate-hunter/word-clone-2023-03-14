import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner/Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

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

  const [isGameActive, setIsGameActive] = useState(true);
  const [isGameWon, setIsGameWon] = useState(false);

  const handleGuessChange = (e) => {
    setGuess(e.target.value.toUpperCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (guess === answer) {
      setIsGameActive(false);
      setIsGameWon(true);
    }

    if (guesses.length + 1 === NUM_OF_GUESSES_ALLOWED) {
      setIsGameActive(false);
    }

    if (guesses.includes(guess)) {
      setErrorMsg(`Try a new word. '${guess}' has already been guessed.`);
      setGuess('');
      return;
    }

    const updatedGuesses = [...guesses];
    updatedGuesses.push(guess);
    setGuesses(updatedGuesses);

    setGuess('');
    setErrorMsg('');
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        guess={guess}
        handleChange={handleGuessChange}
        handleSubmit={handleSubmit}
        isGameActive={isGameActive}
      />
      {!isGameActive && (
        <Banner isGameWon={isGameWon} answer={answer} numOfGuesses={guesses.length} />
      )}
      {errorMsg && <h4 style={{ color: 'red' }}>{errorMsg}</h4>}
    </>
  );
};

export default Game;
