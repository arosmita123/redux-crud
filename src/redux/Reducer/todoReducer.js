import { ADD_TODO, DELETE_TODO, REMOVE_TODO } from "../constant/constant";

const initialState = [];

const todoReducer = (state = initialState, action) => {
  console.log(">>>reducer is calling", action);
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      const filtedTodo = state.filter((ele) => ele.id !== action.id);
      state = filtedTodo;
      return state;

    case REMOVE_TODO:
      return [];
    default:
      return state;
  }
};
export default todoReducer;
