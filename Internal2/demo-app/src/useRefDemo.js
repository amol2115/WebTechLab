import React, {useRef} from 'react'

export default function useRefDemo() {
    const inputRef = useRef(null);
    const handleInput = () => {
        inputRef.current.focus();
    };
  return (
    <div>
      <input type='text' ref = {inputRef}/>
      <button onClick={handleInput}>Focus</button>
    </div>
  )
}

function Timer() {
    const timerId = useRef(null);
  
    function startTimer() {
      timerId.current = setInterval(() => {
        console.log('Timer running...');
      }, 1000);
    }
  
    function stopTimer() {
      clearInterval(timerId.current);
    }
  
    return (
      <>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
      </>
    );
  }
export {Timer};  
