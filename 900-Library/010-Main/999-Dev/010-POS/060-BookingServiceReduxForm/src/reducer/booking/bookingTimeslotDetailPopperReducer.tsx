const defaultState = {
    timeslotDetailOpen: false,
    timeslotDetailTarget: null
};

export default (state = defaultState, action)=>{
    switch(action.type){
        case "OPEN_TIMESLOT_DETAIL_POPPER":
            var timeslotDetailOpen = false 
            var timeslotDetailTarget = null
            if (action.timeslotDetailTarget != state.timeslotDetailTarget){
                timeslotDetailTarget = action.timeslotDetailTarget
                timeslotDetailOpen = true;
            }
            return {
                timeslotDetailOpen: timeslotDetailOpen,
                timeslotDetailTarget: timeslotDetailTarget,
                selectedTimeslot: action.selectedTimeslot
            };
        default: 
            return state;
    }
}