import React, { FC, useEffect, useState } from "react";
import { increment } from "../../store/redux/actions/count";
import { connect } from "react-redux";

class Demo4 extends React.Component {
  props: any;

  render(): React.ReactNode {
    return <>{this.props?.count}</>;
  }
}

//Map Redux state to component props
const mapStateToProps = (state: { count: any }) => {
  return {
    count: state.count,
  };
};

// Map Redux actions to component props
const mapDispatchToProps = (dispatch: (arg0: any) => any) => {
  return {
    increment: () => dispatch(increment),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Demo4);
