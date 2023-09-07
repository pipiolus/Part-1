import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>
        <strong>
          {text}: {value}
        </strong>
      </td>
    </tr>
  );
};

const Statistics = ({ good, bad, neutral, total }) => {
  const calculateAverage = (a, b, c) => (a - b) / c;
  const average = calculateAverage(good, bad, total).toFixed(6);

  const calculatePositive = (a, b) => (a * 100) / b;
  const positive = `${calculatePositive(good, total).toFixed(6)}%`;

  if (good === 0 && neutral === 0 && bad === 0) {
    return <h3>No feedback given</h3>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>STATISTICS</th>
        </tr>
      </thead>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="Total" value={total} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Positive" value={positive} />
      </tbody>
    </table>
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
      <h1>Give feedback</h1>
      <Button handleClick={handleGood} text="Good" />
      <Button handleClick={handleNeutral} text="Neutral" />
      <Button handleClick={handleBad} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
}

export default App;
