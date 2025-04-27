// ThemedComponent.jsx

import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemedComponent() {
  const theme = useContext(ThemeContext); // consume the context

  return (
    <div style={{
      backgroundColor: theme === 'dark' ? '#333' : '#eee',
      color: theme === 'dark' ? '#eee' : '#333',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</h1>
    </div>
  );
}

export default ThemedComponent;
