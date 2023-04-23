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
  const [defaultFontColor, setDefaultFontColor] = useState(true);

  function changeColor() {
    const chooseIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[chooseIndex]);
    setCounter(counter + 1);

  }

  function resetCounter() {
    setCounter(0)
  }

  function toggleFontColor() {
    setDefaultFontColor(!defaultFontColor);
  }

  return (
    <div style={{ height: "100vh", backgroundColor: color }}>
      <button onClick={changeColor}>Change color</button>
      <h2>{color}</h2>
      {/* <h3>The color has been changed {counter} times</h3> */}
      
      <h3 style={defaultFontColor ? { color: "black" } : { color: "white" }}>
      The color has been changed {counter} times
      </h3>
      <button onClick={resetCounter}>Reset Counter</button>
      <button onClick={toggleFontColor}>Toggle font color</button>

      </div>
  );
}

export default App;
