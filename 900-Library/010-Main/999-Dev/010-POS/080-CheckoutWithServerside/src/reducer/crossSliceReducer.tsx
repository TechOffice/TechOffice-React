
export default (state, action) => {
    switch (action.type) {
        case 'UPDATE_TOTAL_DISCOUNT': {
          return {
              ...state
          };
        }
        default:
          return state
      }
}