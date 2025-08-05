import { range } from "../../utils";

function Guess({ value, checkedGuess }) {
  return (
    <div className="guess-results">
      <p className="guess">
        {range(5).map((num) => (
          <span
            className={`cell ${
              checkedGuess ? checkedGuess[num].status :''
            }`}
            key={num}
          >
            {value ? value[num] : undefined}
          </span>
        ))}
      </p>
    </div>
  );
}

export default Guess;
