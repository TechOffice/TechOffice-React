import * as React from "react";
import { Paper, Grid, List, ListItem, ListItemText, Button, Popper, FormControl } from "@material-ui/core";
import BookingTimeslotDetailPopperComponent from "./BookingTimeslotDetailPopperComponent";
import BookingUnavailableTimeslotComponent from "./BookingUnavailableTimeslotComponent";
import BookingAvailableTimeslotComponent from "./BookingAvailableTimeslotComponent";
import { connect } from "react-redux";

@(connect(
    (state, ownProps)=>{
        return {
            bookingItem: state.bookingCalender.bookingItemList[ownProps.bookingItemIndex]
        };
    },
    (dispatch) => ({
        openTimeslotDetail: function(timeslotDetailTarget, selectedTimeslot){
            dispatch({
                type: "OPEN_TIMESLOT_DETAIL_POPPER",
                timeslotDetailTarget: timeslotDetailTarget.currentTarget,
                selectedTimeslot: selectedTimeslot
            })
        }
    })
))
export default class BookingItemComponent extends React.Component<any, any>{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Paper>
                <Grid container direction="column">
                    <Grid item>
                        <h1>{this.props.bookingItem.desc}</h1>
                    </Grid>
                    <Grid item>
                       <List>
                            {
                                this.props.bookingItem.timeslotList.map(timeslot => {
                                    return (
                                        <ListItem dense divider>
                                            <Button variant="contained" fullWidth color={timeslot.booked? "primary": "default"}
                                                onClick={(event)=>{this.props.openTimeslotDetail(event, timeslot)}}>
                                                <FormControl>
                                                    {timeslot.booked
                                                        ? 
                                                            <BookingUnavailableTimeslotComponent timeslot={timeslot}/>
                                                        : 
                                                            <BookingAvailableTimeslotComponent timeslot={timeslot}/>
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