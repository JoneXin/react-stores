import React, { FC, useEffect, useState } from "react";
import { useStore } from "../../store/mobx/index";
import { observer } from "mobx-react-lite";
interface DemoProps {}

const Demo7: FC<DemoProps> = (props: DemoProps) => {
  const { counterStore } = useStore();

  useEffect(() => {
    console.log("init");
  }, []);

  return (
    <>
      {counterStore.counter}
      <button onClick={() => counterStore.addCounter(2)}>加2</button>
      <button onClick={() => counterStore.addCounter(-2)}>减2</button>
      <button onClick={() => counterStore.addCounterAsync(2, 2000)}>
        延迟2s +2
      </button>
    </>
  );
};

export default observer(Demo7);
