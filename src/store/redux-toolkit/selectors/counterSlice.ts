import { RootState } from "../index";

// 返回 count 属性的选择器
export const selectCount = (state: RootState) => state.count;
