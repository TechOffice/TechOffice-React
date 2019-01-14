
export default (state: any, action: any): any => {
    console.log(action);
    if (action.type == "CHECKOUT"){
        let checkoutItem = state.checkoutItem;
        checkoutItem.push(action.product);
        return {
            checkoutItem: checkoutItem
        };
    }
    return state;
}