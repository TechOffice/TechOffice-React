import { combineReducers } from "redux";
import checkoutItmesRedcuer from "./checkout/checkoutItmesRedcuer";
import createFormReducer from "./createFormReducer";

const combinedReducer = combineReducers({
    checkoutItems: checkoutItmesRedcuer,
    tip: createFormReducer(null, "tip", ""),
    discount: createFormReducer(null, "discount", "")
});

function crossSliceReducer(state, action) {
    switch (action.type) {
      case 'UPDATE_TOTAL_DISCOUNT': {
        return {
            ...state
        };
      }
      default:
        return state
    }
}
  
export default (state, action) => {
    const immediateState = combinedReducer(state, action);
    const finalState = crossSliceReducer(immediateState, action);
    return finalState;
}

