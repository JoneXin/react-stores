import { ADDPERSON } from "../constant";

const initState = [{ id: "001", name: "jona", age: 23 }];

export function persons(
  preState = initState,
  action: { type: any; data: any }
) {
  const { type, data } = action;
  switch (type) {
    case ADDPERSON:
      // return preState.unshift(data) // 此处不可以这样写，这样会导致preState被改写了，personReducer就不是纯函数了，redux识别不到状态改变，视图不会更新了
      return [data, ...preState];
    default:
      return preState;
  }
}
