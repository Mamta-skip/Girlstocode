import React, { useState, useEffect } from 'react';

function Numberg() {
  const [secretNumber, setSecretNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const checkInput = () => {
      const userGuess = parseInt(guess, 10);

      if (userGuess === secretNumber) {
        setMessage(`Congratulations! You guessed the correct number.`);
      } else if (userGuess < secretNumber) {
        setMessage('Try a higher number.');
      } else {
        setMessage('Try a lower number.');
      }
    };

    checkInput();
  }, [guess, secretNumber]);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
  }

  function handleInput(e) {
    setGuess(e.target.value);
  }

  return (
    <div>
      <h1>Guess a number between 1 to 20!!</h1>
      <input
        type="number"
        placeholder="Enter your number"
        min={0}
        max={20}
        onChange={handleInput}
        value={guess}
      />
      <p>{message}</p>
    </div>
  );
}

export default Numberg;
