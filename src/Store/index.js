import { configureStore, createSlice } from "@reduxjs/toolkit"; 

const initialState = {count : 0 } 
//ReduxToolkit
const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers : {
    increment(state , action){ 
      state.count = state.count + action.payload
    },
    decrement(state, action){ 
      state.count = state.count - action.payload
    },
    reset(state , action){
      state.count = action.payload
    },
  }
}) 

const Store = configureStore({
  reducer : counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default Store; 
 