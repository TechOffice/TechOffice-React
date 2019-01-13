
export default (state: any, action: any): any => {
    if (action.type == "ADD_PRODUCT"){
        state.checkoutItem.append(action.product);
    }
    return state;
}