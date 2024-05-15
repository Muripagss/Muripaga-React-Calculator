import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const appendNumber = (number) => {
    setInput((prev) => prev + number);
  };

  const appendDecimal = () => {
    if (!input.includes('.')) {
      setInput((prev) => prev + '.');s
    }
  };

  const operation = (operator) => {
    setInput((prev) => prev + operator);
  };

  const deleteLast = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const clearInput = () => {
    setInput('');
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <input id="result" type="text" value={input} readOnly />
        <div className="buttons">
          <div className="row">
            <button onClick={clearInput}>AC</button>
            <button onClick={deleteLast}>Del</button>
            <button></button>
            <button onClick={() => operation('/')}>÷</button>
          </div>
          <div className="row">
            <button onClick={() => appendNumber('7')}>7</button>
            <button onClick={() => appendNumber('8')}>8</button>
            <button onClick={() => appendNumber('9')}>9</button>
            <button onClick={() => operation('*')}>*</button>
          </div>
          <div className="row">
            <button onClick={() => appendNumber('4')}>4</button>
            <button onClick={() => appendNumber('5')}>5</button>
            <button onClick={() => appendNumber('6')}>6</button>
            <button onClick={() => operation('-')}>-</button>
          </div>
          <div className="row">
            <button onClick={() => appendNumber('1')}>1</button>
            <button onClick={() => appendNumber('2')}>2</button>
            <button onClick={() => appendNumber('3')}>3</button>
            <button onClick={() => operation('+')}>+</button>
          </div>
          <div className="row">
            <button></button>
            <button onClick={() => appendNumber('0')}>0</button>
            <button onClick={appendDecimal}>.</button>
            <button onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
