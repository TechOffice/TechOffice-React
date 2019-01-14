
export default (state: any, action: any): any => {
    console.log(action);
    if (action.type == "CHECKOUT"){

        let checkoutItem = state.checkoutItem.slice();
        checkoutItem.push(action.product);
        console.log(checkoutItem);
        return {
            ...state,
            "checkoutItem": checkoutItem
        };
    }
    return state;

}