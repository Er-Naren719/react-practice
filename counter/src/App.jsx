import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(10);

  const incrementHandler = () => {
    if (counter >= 20) {
      alert('Counter cannot exceed 20');
      return;
    }
    setCounter(counter + 1);
  }

  const decrementHandler = () => {
    if (counter <= 0) {
      alert('Counter cannot be less than 0');
      return;
    }
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </>
  )
}

export default App
