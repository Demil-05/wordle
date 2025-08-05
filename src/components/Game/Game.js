import { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input/Input";
import WinBanner from "../WinBanner";
import GuessResults from "../GuessResults/GuessResults";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [checkedGuesses, setCheckedGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");

  const handleSubmitGuess = (guess) => {
    const result = checkGuess(guess, answer);
    const newCheckedGuesses = [...checkedGuesses, result];
    setCheckedGuesses(newCheckedGuesses);
    console.log(newCheckedGuesses);

    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);

    if (guess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    } else {
      setGameStatus("running");
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} checkedGuesses={checkedGuesses} />
      <Input handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus}/>
      {gameStatus !== "running" && (
        <WinBanner
          winStatus={gameStatus}
          numOfTries={checkedGuesses.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
