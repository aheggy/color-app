import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// App.js
const colors = [
  "papayawhip",
  "thistle",
  "peachpuff",
  "lightgoldenrodyellow",
  "paleturquoise",
];

function App() {
  const [color, setColor] = useState("gold");
  const [counter, setCounter] = useState(0);

  function changeColor() {
    const chooseIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[chooseIndex]);
    setCounter(counter + 1);

  }

  function resetCounter() {
    setCounter(0)
  }

  return (
    <div style={{ height: "100vh", backgroundColor: color }}>
      <button onClick={changeColor}>Change color</button>
      <h2>{color}</h2>
      <h3>The color has been changed {counter} times</h3>
      <button onClick={resetCounter}>Reset Counter</button>
    </div>
  );
}

export default App;
