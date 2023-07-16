import { legacy_createStore as createStore, applyMiddleware } from "redux";
// 用于支持异步action
import thunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));
export { store };
