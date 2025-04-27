import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log(`Count updated to: ${count}`);
    // This code runs only when `count` changes (not when `name` changes)
  }, [count]); // Dependency array has 'count'

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h2>Enter your name:</h2>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <p>Hello, {name}!</p>
    </div>
  );
}

export default Counter;