import { SETINPUT_ACTION, ADDINPUT_ACTION } from "./constants";
const initState = {
  foods: [],
  foodInput: "",
};

function reducer(state, action) {
  switch (action.type) {
    case SETINPUT_ACTION:
      return { ...state, foodInput: action.payload };
    case ADDINPUT_ACTION:
      return { ...state, foods: [...state.foods, action.payload] };
    default:
      throw new Error("Avalid action");
  }
}

export { initState };
export default reducer;
