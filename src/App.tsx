import { useEffect, useReducer } from "react";
import { store } from "./store/redux";
import { store as rtkStore } from "./store/redux-toolkit";
import { increment } from "./store/redux/actions/count";
import { Demo2 } from "./component/redux&classcop/demo_class_component";
import { Demo1 } from "./component/redux&classcop/demo_class_c_2";
import "./App.css";
import Demo4 from "./component/redux&react_redux/demo4";
import Demo3 from "./component/redux&react_redux/demo3";
import { Provider } from "react-redux";
import Demo5 from "./component/redux_toolkit/demo5";
import Demo6 from "./component/redux_toolkit/demo6";
import Demo7 from "./component/mobx/Demo7";
import Demo8 from "./component/mobx/Demo8";

function App() {
  const handleClick = () => {
    store.dispatch(increment(1));
  };

  useEffect(() => {}, [store.getState().count]);

  return (
    <div
      className="App"
      style={{ margin: "100px auto", width: 800, textAlign: "center" }}
    >
      {/* <Demo></Demo> */}
      <div className="class-redux">
        <p>redux + redux-thunk + class component</p>
        <Demo2></Demo2>
        <Demo1></Demo1>
      </div>
      {/* react-redux + redux + redux-thunk*/}
      <Provider store={store}>
        <div className="class-redux">
          <p>redux + react-redux + redux-thunk + class component</p>
          <Demo3></Demo3>
          <Demo4></Demo4>
        </div>
      </Provider>
      <Provider store={rtkStore}>
        <div className="class-redux">
          <p>RTK = @redux/toolkit + react-redux + hooks component</p>
          <Demo5></Demo5>
          <Demo6></Demo6>
        </div>
      </Provider>
      <div className="class-redux">
        <p>mobx + mox-react-lite</p>
        <Demo7></Demo7>
        <Demo8></Demo8>
      </div>
    </div>
  );
}

export default App;
