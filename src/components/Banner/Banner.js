import React from 'react';

function Banner({ isGameWon, answer, numOfGuesses }) {
  const bannerType = isGameWon ? 'happy' : 'sad';
  const guessText = numOfGuesses === 1 ? `guess` : `guesses`;
  const text = isGameWon ? (
    <p>
      <strong>Congratulations!</strong> Got it in{' '}
      <strong>
        {numOfGuesses} {guessText}
      </strong>
      .
    </p>
  ) : (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  );

  return <div className={`${bannerType} banner`}>{text}</div>;
}

export default Banner;
