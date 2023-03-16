import React from 'react';

const GuessInput = () => {
  return (
    <form className='guess-input-wrapper'>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input type='text' id='guess-input' name='guess' />
    </form>
  );
};

export default GuessInput;
