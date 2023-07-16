import React, { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../store/redux-toolkit/hooks";
import { selectCount } from "../../store/redux-toolkit/selectors";

interface DemoProps {}

const Demo6: FC<DemoProps> = (props: DemoProps) => {
  const count = useAppSelector(selectCount);

  useEffect(() => {
    console.log("init");
  }, []);

  return <>{count}</>;
};

export default Demo6;
