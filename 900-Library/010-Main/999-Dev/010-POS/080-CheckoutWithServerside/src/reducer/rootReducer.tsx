import { combineReducers } from "redux";
import checkoutItmesRedcuer from "./checkout/checkoutItmesRedcuer";
import createFormReducer from "./createFormReducer";

export default combineReducers({
    checkoutItems: checkoutItmesRedcuer,
    tip: createFormReducer(null, "tip", ""),
    discount: createFormReducer(null, "discount", "")
});