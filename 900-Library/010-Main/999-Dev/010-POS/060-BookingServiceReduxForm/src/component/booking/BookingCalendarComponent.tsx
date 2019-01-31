import { Paper, Grid } from '@material-ui/core';
import BookingItemComponent from './BookingItemComponent';
import * as React from 'react';
import { connect } from "react-redux";
import bookingCalendarService from '../../service/bookingCalendarService';

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

    constructor(props){
        super(props);
    }

    componentDidMount(){
        var mockBookingItemList = [
            {
                id: 1,
                desc: "Tester 1",
                bookedTimeslotList: [
                    {
                        id: 1,
                        startTime: new Date(2019, 0, 31, 11),
                        endTime: new Date(2019, 0, 31, 11, 30)
                    },
                    {
                        id: 2,
                        startTime: new Date(2019, 0, 31, 13),
                        endTime: new Date(2019, 0, 31, 15, 30)
                    }
                ],
                timeslotList: []
            },
            {
                id: 2,
                desc: "Tester 2"
            }
        ];
        
        mockBookingItemList.forEach(function(bookingItem){
            bookingItem.timeslotList = bookingCalendarService.getTimeslotList(bookingItem.bookedTimeslotList);
        });

        this.props.updateBookingItemList(mockBookingItemList);
    }

    render(){
        return (
            <Paper>
                <Grid container spacing={8}>
                    {
                        this.props.bookingCalender.bookingItemList.map((item)=>{
                            return (
                                <Grid item id={item.id}>
                                    <BookingItemComponent bookingItem={item}/>
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </Paper>
        );
    }
}