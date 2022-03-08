import {createStore} from "redux";

const initState = {count : 0 }

const counterReducer = (state = initState , action) => {
  if(action.type === "increment"){
     return{
      ...state, count: state.count + action.payload
     };
  }

  if(action.type === "decrement"){
    return{
      ...state,count: state.count - action.payload 
    }
  }

  if(action.type === "reset"){
    return{
      ...state,count: state.count = action.payload
    }
  }
  return state;
}

const Store = createStore(counterReducer);

export default Store;