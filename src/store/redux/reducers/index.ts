// src/store/reducers/index.js
import { combineReducers } from "redux";
import { count } from "./count";
import { persons } from "./person";

export default combineReducers({
  count,
  persons,
});
