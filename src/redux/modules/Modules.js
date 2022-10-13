import { combineReducers, createStore } from "redux";
import todos from "../store/store.js";
const rootReducer = combineReducers({
  todos,
});
const store = createStore(rootReducer);

export default store;
