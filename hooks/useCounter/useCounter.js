import { useState } from "react";
const initial = 1;
export const useCounter = (initialState = initial) => {
  const [state, setState] = useState(initialState);

  const increment = () => {
    setState(state + 1);
  };

  const decrement = () => {
    setState(state - 1);
  };

  const reset = () => {
    setState(initialState);
  };

  return { state, increment, decrement, reset };
};
