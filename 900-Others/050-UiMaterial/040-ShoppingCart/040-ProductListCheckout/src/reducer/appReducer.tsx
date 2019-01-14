import { combineReducers } from "redux";

function checkoutItems(state: any = [], action: any){
    switch(action.type){
        case "ADD_PRODUCT":
            let checkoutItems = state.slice();

            for (var i=0; i<checkoutItems.length; i++){
                var checkoutItem = checkoutItems[i];
                if (checkoutItem.id == action.product.id){
                    checkoutItem.quantity = checkoutItem.quantity + 1;
                    checkoutItem.total = checkoutItem.quantity * checkoutItem.price;
                    return checkoutItems;
                }
            }
            var checkoutItem = action.product;
            checkoutItem.quantity = 1;
            checkoutItem.total = checkoutItem.quantity * checkoutItem.price;
            checkoutItems.push(checkoutItem);
            console.log(checkoutItems);
            return checkoutItems;
        default: 
            return state;
    }
}


export default combineReducers({
    checkoutItems
});