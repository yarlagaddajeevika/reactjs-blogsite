// Calculator.tsx

import React, { useState } from 'react';

type Operator = '+' | '-' | '*' | '/' | 'sqrt' | '^' | 'sin' | 'cos' | 'tan';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [operator, setOperator] = useState<Operator | null>(null);

  const handleNumberClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleOperatorClick = (value: Operator) => {
    if (input !== '') {
      if (operator) {
        calculateResult();
      } else {
        setResult(parseFloat(input));
      }
      setOperator(value);
      setInput('');
    }
  };

  const handleEqualsClick = () => {
    if (input !== '' && operator) {
      calculateResult();
      setOperator(null);
      setInput('');
    }
  };

  const handleClearClick = () => {
    setInput('');
    setResult(null);
    setOperator(null);
  };

  const calculateResult = () => {
    const currentInput = parseFloat(input);
    if (!isNaN(currentInput)) {
      switch (operator) {
        case '+':
          setResult(result! + currentInput);
          break;
        case '-':
          setResult(result! - currentInput);
          break;
        case '*':
          setResult(result! * currentInput);
          break;
        case '/':
          setResult(result! / currentInput);
          break;
        case 'sqrt':
          setResult(Math.sqrt(currentInput));
          break;
        case '^':
          setResult(result! ** currentInput);
          break;
        case 'sin':
          setResult(Math.sin(currentInput));
          break;
        case 'cos':
          setResult(Math.cos(currentInput));
          break;
        case 'tan':
          setResult(Math.tan(currentInput));
          break;
        default:
          break;
      }
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div>
        <input type="text" value={input} readOnly />
      </div>
      <div>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={handleClearClick}>C</button>
        <button onClick={handleEqualsClick}>=</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
      </div>
      <div>
        <button onClick={() => handleOperatorClick('sqrt')}>√</button>
        <button onClick={() => handleOperatorClick('sin')}>sin</button>
        <button onClick={() => handleOperatorClick('cos')}>cos</button>
        <button onClick={() => handleOperatorClick('tan')}>tan</button>
        <button onClick={() => handleOperatorClick('^')}>^</button>
      </div>
      <div>
        <p>Result: {result !== null ? result : 'N/A'}</p>
      </div>
    </div>
  );
};

export default Calculator;
