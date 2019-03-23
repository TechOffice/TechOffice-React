import combinedReducer from "./combinedReducer";
import crossSliceReducer from "./crossSliceReducer";


export default (state, action) => {
    const immediateState = combinedReducer(state, action);
    const finalState = crossSliceReducer(immediateState, action);
    return finalState;
}

