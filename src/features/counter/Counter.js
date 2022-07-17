import React, { useState } from 'react';
import styles from './Counter.module.css';

export function Counter() {
  const [count, setCount] = useState(0); 
  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;
  const incrementAsync = (amount = 1)=>{
    return new Promise((resolve) =>
      setTimeout(() => setCount(prevCount=>prevCount+amount), 500)
    );
  }
  const incrementIfOdd = ()=>{
    if(count%2){
      setCount(prevCount=>prevCount+1);
    }
  }
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => setCount(prevCount=>prevCount-1)}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => setCount(prevCount => prevCount + 1)}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => setCount(prevCount => prevCount + incrementValue)}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => incrementAsync(incrementValue)}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => incrementIfOdd(incrementValue)}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
