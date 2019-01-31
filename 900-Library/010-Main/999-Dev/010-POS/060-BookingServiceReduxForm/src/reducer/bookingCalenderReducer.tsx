import { combineReducers } from "redux";
import bookingItemListReducer from "./booking/bookingItemListReducer";

export default combineReducers({
    bookingItemList: bookingItemListReducer
});