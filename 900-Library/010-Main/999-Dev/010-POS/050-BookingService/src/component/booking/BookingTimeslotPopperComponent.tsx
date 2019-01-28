import * as React from "react";
import { Paper, Popper } from "@material-ui/core";


export default class BookingTimeslotPopperComponent extends React.Component<any, any>{
    
    constructor(props){
        super(props);
        this.state = {
            selectedTimeslot: props.selectedTimeslot,
            timeslotList: props.timeslotList,
            timeslotDetailOpen: false,
            timeslotDetailTarget: null
        }
    }

    selectTimeslot(event, selectedTimeslot){
        var timeslotDetailOpen = !this.state.timeslotDetailOpen;
        var timeslotDetailTarget = event.currentTarget;
        if (!timeslotDetailOpen){
            timeslotDetailTarget = null
        }
        this.setState({
            selectedTimeslot,
            timeslotDetailOpen,
            timeslotDetailTarget
        })
    }

    render(){
        return (
            <Popper open={this.state.timeslotDetailOpen} anchorEl={this.state.timeslotDetailTarget} placement="right-start" >
                <Paper>
                    <h1>Hello World</h1>
                </Paper>
            </Popper>
        );
    }
}