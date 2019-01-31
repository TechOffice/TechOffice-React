import { combineReducers } from "redux";
import bookingItemListReducer from "./booking/bookingItemListReducer";
import bookingTimeslotDetailPopperReducer from "./booking/bookingTimeslotDetailPopperReducer";

export default combineReducers({
    bookingItemList: bookingItemListReducer,
    bookingTimeslotDetailPopper: bookingTimeslotDetailPopperReducer
});