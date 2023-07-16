import { ADDPERSON } from "../constant";
import { Person } from "../types";

// 普通action的值为object `{type: INCREMENT, data }`
export const addPerospn = (person: Person) => ({ type: ADDPERSON, person });
