import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counter/slice";

const RootReducer = combineReducers({
  counter: CounterReducer,
});

export const store = configureStore({
  reducer: RootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
