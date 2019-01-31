import * as React from "react";
import { Paper, Grid, List, ListItem, ListItemText, Button, Popper, FormControl } from "@material-ui/core";
import BookingTimeslotPopperComponent from "./BookingTimeslotPopperComponent";
import BookingTimeslotComponent from "./BookingTimeSlotComponent";

export default class BookingItemComponent extends React.Component<any, any>{

    bookingTimeslotPopperComponent: any;

    constructor(props){
        super(props);
        var timeslotList = this.getDefaultTimeslotList()
        timeslotList[3].booked = true;
        this.state = {
            ...props.bookingItem,
            timeslotList
        }
        this.bookingTimeslotPopperComponent = React.createRef();
    }

    private getDefaultTimeslotList() : any[]{
        var defaultTimeslotList = [];
        var startTime = 10;
        var endTime = 21;
        var totalTimeslot = (endTime - startTime) * 2;   
        for (var i=0; i<totalTimeslot; i++){
            var timeslot = i/2;
            var startHourTimeslot = Math.floor(timeslot);
            var startMinuteTimeslot = timeslot -  Math.floor(timeslot);
            var endHourTimmeslot = Math.floor(timeslot + 0.5);
            var endMinuteTImeslot = (timeslot + 0.5) - Math.floor(timeslot + 0.5)
            var timeslotDesc = "";
            if (startMinuteTimeslot > 0 ){
                timeslotDesc = (startHourTimeslot + startTime) + ":30 - " + (endHourTimmeslot + startTime) + ":00"; 
            } else {
                timeslotDesc = (startHourTimeslot + startTime) + ":00 - " + (endHourTimmeslot + startTime) + ":30";
            }
            defaultTimeslotList.push(
                {
                    id: i,
                    timeslotDesc
                }
            )
        }
        return defaultTimeslotList;
    }

    openTimeslotDetail(event, timeslot){
        this.bookingTimeslotPopperComponent.selectTimeslot(event, timeslot);
    }

    render(){
        return (
            <Paper>
                <BookingTimeslotPopperComponent ref={instance => {this.bookingTimeslotPopperComponent = instance}}/>
                <Grid container direction="column">
                    <Grid item>
                        <h1>{this.state.desc}</h1>
                    </Grid>
                    <Grid item>
                       <List>
                            {
                                this.state.timeslotList.map(timeslot => {
                                    return (
                                        <ListItem dense divider>
                                            <Button variant="contained" fullWidth color={timeslot.booked? "primary": "default"}
                                                onClick={(event)=>{this.openTimeslotDetail(event, timeslot)}}>
                                                <FormControl>
                                                    {timeslot.booked
                                                        ? 
                                                            <Grid container>
                                                                <Grid item>
                                                                    <Grid container>
                                                                        <Grid item>
                                                                            {timeslot.timeslotDesc}
                                                                        </Grid>
                                                                    </Grid>
                                                                    <Grid container>
                                                                        <Grid item>
                                                                            Name:
                                                                        </Grid>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        : 
                                                            <Grid container>
                                                                <Grid item>
                                                                    {timeslot.timeslotDesc}
                                                                </Grid>
                                                            </Grid>
                                                    }
                                                </FormControl>
                                            </Button>
                                        </ListItem>
                                    )
                                })
                            }
                       </List>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}