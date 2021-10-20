import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(true)

  function increment() {
    setCount(count => ++count)
    setColor(color => !color)
  }

  const background = color?'skyblue':'#ffdb58'

  return <button onClick={increment} style={{background: background, fontSize: 450, color: "white"}}>{count}</button>;
}

export default Counter;
