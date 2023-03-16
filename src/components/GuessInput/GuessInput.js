import React from 'react';

const GuessInput = ({ guess, handleChange, handleSubmit }) => {
  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input type='text' id='guess-input' name='guess' value={guess} onChange={handleChange} />
    </form>
  );
};

export default GuessInput;
