import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ good, bad, neutral, total }) => {
  const calculateAverage = (a, b, c) => (a - b) / c;
  const average = calculateAverage(good, bad, total);

  const calculatePositive = (a, b) => (a * 100) / b;
  const positive = calculatePositive(good, total);

  if (good === 0 && neutral === 0 && bad === 0) {
    return <h3>No feedback given</h3>;
  }

  return (
    <div>
      <h1>statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>
        <strong>Total: {total}</strong>
      </p>
      <p>
        <strong>Average: {isNaN(average) ? 0 : average}</strong>
      </p>
      <p>
        <strong>Positive: {isNaN(positive) ? 0 : positive} %</strong>
      </p>
    </div>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + bad + neutral;

  const addOne = (n) => n + 1;

  const handleGood = () => setGood(addOne);
  const handleBad = () => setBad(addOne);
  const handleNeutral = () => setNeutral(addOne);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="Good" />
      <Button handleClick={handleNeutral} text="Neutral" />
      <Button handleClick={handleBad} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
}

export default App;
