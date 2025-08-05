function WinBanner({ winStatus, numOfTries, answer }) {
  switch (winStatus) {
    case "running":
      return <></>;
    case "won":
      return (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{numOfTries} guess{numOfTries>1 && 'es'}</strong>.
          </p>
        </div>
      );
    case "lost":
      return (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      );
    default:
      return <></>;
  }
}

export default WinBanner;
