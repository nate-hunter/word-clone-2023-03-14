import React from 'react';

function Banner({ gameResult }) {
  const bannerType = gameResult === 'win' ? 'happy' : 'sad';
  const text =
    gameResult === 'win' ? (
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>3 guesses</strong>.
      </p>
    ) : (
      <p>
        Sorry, the correct answer is <strong>LEARN</strong>.
      </p>
    );

  return <div className={`${bannerType} banner`}>{text}</div>;
}

export default Banner;
