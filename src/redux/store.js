import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import crudReducer from "./slices/crudSlice";

export const store = configureStore({
  reducer: { counter: counterReducer, crud: crudReducer },
});
