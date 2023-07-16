import React, { FC, useEffect, useState } from "react";
import {
  incremented,
  decremented,
  addCountAsync,
} from "../../store/redux-toolkit/feathers";
import {
  useAppDispatch,
  useAppSelector,
} from "../../store/redux-toolkit/hooks";
import { selectCount } from "../../store/redux-toolkit/selectors/counterSlice";
interface DemoProps {}

const Demo5: FC<DemoProps> = (props: DemoProps) => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <>
      {count}
      <button onClick={() => dispatch(incremented({ count: 2 }))}>加2</button>
      <button onClick={() => dispatch(decremented({ count: 1 }))}>减2</button>
      <button onClick={() => dispatch(addCountAsync(2))}>延迟2s +2</button>
    </>
  );
};

export default Demo5;
