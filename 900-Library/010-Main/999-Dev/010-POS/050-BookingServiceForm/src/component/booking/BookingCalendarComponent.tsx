import { Paper, Grid } from '@material-ui/core';
import BookingItemComponent from './BookingItemComponent';
import * as React from 'react';

export default class BookingCalenderComponent extends React.Component<any, any>{

    constructor(props){
        super(props);
        this.state = {
            bookingItems: [
                {
                    id: 1,
                    desc: "Testing 1"
                },
                {
                    id: 2,
                    desc: "Testing 2"
                }
            ]
        };
    }

    render(){
        return (
            <Paper>
                <Grid container spacing={8}>
                    {
                        this.state.bookingItems.map((item)=>{
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