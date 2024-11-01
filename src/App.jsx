import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './slices/plusmins';
import { multiply, divide } from './slices/multidivid';

function App() {
  const count1 = useSelector((state) => state.plsmincount.value); 
  const count2 = useSelector((state) => state.muldivcount.value); 
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const plus = () => {
    dispatch(increment());
  };

  const mins = () => {
    dispatch(decrement());
  };

  const mul = () => {
    dispatch(multiply(2)); 
  };

  const divd = () => {
    dispatch(divide(2)); 
  };

  return (
    <>
    <p>
      <span>Inc/Dec : <b>{count1}</b> </span> <span>  |  </span>
      <span>Mul/Dev: <b>{count2}</b></span>
      </p>
      <button onClick={plus}>Increment</button> 
      <button onClick={mins}>Decrement</button> 
      <button onClick={mul}>Multiply</button> 
      <button onClick={divd}>Divide</button> 
    </>
  );
}

export default App;
