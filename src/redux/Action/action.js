import { ADD_TODO,DELETE_TODO,REMOVE_TODO } from "../constant/constant";

export const addData = (payload) => {
    console.log(">>>>>action is calling",payload)
  return { type: ADD_TODO, payload };
};
export const deleteData = (id) => {
    console.log(">>>>>action is calling",id)
  return { type: DELETE_TODO, id };
};
export const removeData = () => {
  console.log(">>>>>action is calling")
return { type: REMOVE_TODO };
};
