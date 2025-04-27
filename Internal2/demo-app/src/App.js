import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import UseRefDemo from './useRefDemo';
import Counter from './useEffectDemo';
import CounterUseState from './useStateDemo';
import ThemeContext from './ThemeContext';
import ThemedComponent from './ThemedComponent';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };  
  return (
    <>
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to='/'>Use State</Link></li>
          <li><Link to='/effect'>Use Effect</Link></li>
          <li><Link to='/ref'>Use Ref</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<CounterUseState />} />
        <Route path='/effect' element={<Counter />} />
        <Route path='/ref' element={<UseRefDemo />} />
        <Route path='*' element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>

    <ThemeContext.Provider value={theme}>
      <div>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ThemedComponent />
      </div>
    </ThemeContext.Provider>
    
    </>

  );
}

export default App;