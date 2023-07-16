import React, { FC, useEffect, useState } from "react";
import { increment, incrementAsync } from "../../store/redux/actions/count";
import { connect } from "react-redux";

class Demo3 extends React.Component {
  props: any;

  render(): React.ReactNode {
    return (
      <>
        {this.props?.count}
        <button onClick={() => this.props?.increment(2)}>加2</button>
        <button onClick={() => this.props?.incrementDelay(4, 1000)}>
          异步延迟1s + 4
        </button>
      </>
    );
  }
}

//Map Redux state to component props
const mapStateToProps = (state: { count: any }) => {
  return {
    count: state.count,
  };
};

// Map Redux actions to component props
const mapDispatchToProps = (dispatch: any) => {
  return {
    increment: (num: number) => dispatch(increment(num)),
    incrementDelay: (num: number, delay: number) =>
      dispatch(incrementAsync(num, delay)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Demo3);
