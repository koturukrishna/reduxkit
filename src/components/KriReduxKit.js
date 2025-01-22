import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

export const formSlicer = createSlice({
  name: "form",
  initialState: {
    value: 8,
  },
  reducers: {
    increment: (state, action) => {
      state.value = state.value + 2;
    },
    decrement: (state, action) => {
      state.value = state.value - 2;
    },
  },
});

export const { increment, decrement } = formSlicer.actions;

export const store = configureStore({
  reducer: {
    form: formSlicer.reducer,
  },
});

const KriReduxKit = () => {
  return (
    <Provider store={store}>
      <h5>Redux Kit</h5>
      <KriRedux />
    </Provider>
  );
};

const KriRedux = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.form.value);
  return (
    <div>
      <h6>Nice to Meet You</h6>
      <h1>Value: {value}</h1>
      <br />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <br />
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default KriReduxKit;
