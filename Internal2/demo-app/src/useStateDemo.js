// Save as: CounterUseState.jsx

import React, { useState } from 'react';

function CounterUseState() {
  const [count, setCount] = useState(0); // Initial value is 0

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default CounterUseState;