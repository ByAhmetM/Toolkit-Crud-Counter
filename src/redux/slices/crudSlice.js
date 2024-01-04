import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
const initialState = {
  tasks: [
    {
      id: "asdadas",
      title: "Navbar Animasyonu",
      author: "Ahmet",
      assigned_to: "Mehmet",
      end_date: "2024-01-01",
    },
  ],
};
export const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addTask: (state, action) => {
      action.payload.id = v4();
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const i = state.tasks.findIndex((t) => t.id === action.payload.id);
      console.log(action);
      state.tasks[i] = action.payload;
    },
    removeTask: (state, action) => {
      const filtred = state.tasks.filter((task) => task.id !== action.payload);
      state.tasks = filtred;
    },
  },
});

export const { addTask, editTask, removeTask } = crudSlice.actions;

export default crudSlice.reducer;
