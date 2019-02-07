import { combineReducers } from "redux";
import { reducer } from "redux-form";
import bookingCalenderReducer from "./booking/bookingCalenderReducer";
import checkoutItmesRedcuer from "./checkout/checkoutItmesRedcuer";

export default combineReducers({
    form: reducer,
    bookingCalender: bookingCalenderReducer,
    checkoutItems: checkoutItmesRedcuer
});