import React, { FC, useEffect, useState } from "react";
import { useStore } from "../../store/mobx";
import { observer } from "mobx-react-lite";

interface DemoProps {}

const Demo8: FC<DemoProps> = (props: DemoProps) => {
  const [state] = useState(null);
  const { counterStore } = useStore();

  useEffect(() => {
    console.log("init");
  }, []);

  return <>{counterStore.counter}</>;
};

export default observer(Demo8);
