import { INCREMENT, DECREMENT } from "../constant";

// 普通action的值为object `{type: INCREMENT, data }`
export const increment = (data: number) => ({ type: INCREMENT, data });
export const decrement = (data: number) => ({ type: DECREMENT, data });

// 异步action的值为函数 redux-thunk 支持这种异步写法
export const incrementAsync = (data: number, time: number) => {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(increment(data));
    }, time);
  };
};
