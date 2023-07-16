import { INCREMENT, DECREMENT } from "../constant";
// 初始化状态
const initState = 0;

export function count(preState = initState, action: { type: any; data: any }) {
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}
