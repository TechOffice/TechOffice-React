import { combineReducers } from "redux";

function checkoutItems(state: any = [], action: any){
    switch(action.type){
        case "ADD_PRODUCT":
            let checkoutItems = state.slice();
            checkoutItems.push(action.product);
            console.log(checkoutItems);
            return checkoutItems;
        default: 
            return state;
    }
}


export default combineReducers({
    checkoutItems
});