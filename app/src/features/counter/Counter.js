import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsAsync } from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  // const count = useSelector();
   const count = 10;
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  // const {} =fetchProductsAsync()

useEffect(()=>{
  dispatch(fetchProductsAsync())
},[])

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch()}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch()}
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
          onClick={() => dispatch()}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch()}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch()}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
