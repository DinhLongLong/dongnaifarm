import { SETINPUT_ACTION, ADDINPUT_ACTION } from "./constants";

export const setInput = (payload) => ({ type: SETINPUT_ACTION, payload });
export const addInput = (payload) => ({ type: ADDINPUT_ACTION, payload });
