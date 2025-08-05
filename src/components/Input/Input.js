import { useState } from "react";

function Input( { handleSubmitGuess, gameStatus}) {
  const [guess, setGuess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitGuess(guess);
    setGuess("");
  }

  //const winStatus = lastCheckedGuess ? lastCheckedGuess.every(value => (value.status === 'correct')):false; 

  return (
    <>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          disabled={gameStatus !== "running"}
          id="guess-input"
          type="text"
          name="input"
          value={guess}
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
        />
      </form>
    </>
  );
}

export default Input;
