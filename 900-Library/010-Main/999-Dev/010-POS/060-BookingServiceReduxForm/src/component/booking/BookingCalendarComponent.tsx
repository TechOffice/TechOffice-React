import { Paper, Grid } from '@material-ui/core';
import BookingItemComponent from './BookingItemComponent';
import * as React from 'react';
import { connect } from "react-redux";
import bookingCalenderMockDataService from '../../service/mock/bookingCalenderMockDataService';
import BookingTimeslotDetailPopperComponent from './BookingTimeslotDetailPopperComponent';

@(connect(
    (state)=>{
        return {
            bookingCalender: state.bookingCalender
        }
    },
    (dispatch)=>({
        updateBookingItemList: function(bookingItemList){
            dispatch({
                type: "UPDATE_BOOKING_ITEM_LIST",
                bookingItemList: bookingItemList
            })
        }
    })
))
export default class BookingCalenderComponent extends React.Component<any, any>{
    bookingTimeslotPopperComponent: any;

    constructor(props){
        super(props);
    }

    componentDidMount(){
        setTimeout(()=>{
            this.props.updateBookingItemList(bookingCalenderMockDataService.getMockData());
        }, 1000);
    }

    render(){
        return (
            <Paper>
                <BookingTimeslotDetailPopperComponent />
                <Grid container spacing={8}>
                    {
                        this.props.bookingCalender.bookingItemList.map((item, index)=>{
                            return (
                                <Grid item id={item.id}>
                                    <BookingItemComponent bookingItemIndex={index} />
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </Paper>
        );
    }
}