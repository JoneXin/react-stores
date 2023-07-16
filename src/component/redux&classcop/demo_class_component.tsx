import React from "react";
import { store } from "../../store/redux";
import { increment } from "../../store/redux/actions/count";

export class Demo2 extends React.Component {
  componentDidMount(): void {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  handleClick() {
    store.dispatch(increment(1));
  }

  render(): React.ReactNode {
    return (
      <>
        {store.getState().count}
        <button onClick={this.handleClick}>增加</button>
      </>
    );
  }
}
