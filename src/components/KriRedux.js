import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCR_TWO":
      return { count: state.count + 2 };
    case "DECR_TWO":
      return { count: state.count - 2 };
    default:
      return state;
  }
};

const KriRedux = () => {
  debugger;
  const [state, dispatch] = useReducer(reducer, { count: 8 });
  return (
    <div>
      <h6>KriSupriya</h6>
      <h1>Value: {state.count}</h1>
      <br />
      <button onClick={() => dispatch({ type: "INCR_TWO" })}>Increment</button>
      <br />
      <br />
      <button onClick={() => dispatch({ type: "DECR_TWO" })}>Decrement</button>
    </div>
  );
};

export default KriRedux;
