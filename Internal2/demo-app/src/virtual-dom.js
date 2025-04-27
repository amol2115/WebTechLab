// virtual-dom.js (Using React Virtual DOM)
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function VirtualDOMExample() {
  const [text, setText] = useState('Virtual DOM Text');

  return (
    <div>
      <button onClick={() => setText('Virtual DOM Text Updated!')}>
        Update Virtual DOM
      </button>
      <p>{text}</p>
    </div>
  );
}

export default VirtualDOMExample;