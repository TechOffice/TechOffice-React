import * as React from "react";
import { Paper, Grid } from "@material-ui/core";
import {connect} from 'react-redux';

@(connect(
    (state: any)=>{
        return state;
    },
    (dispatch)=>({

    })
) as any)
export default class BookingTimeslotDetailViewComponent extends React.Component<any, any>{
    
    render(){
        return (
            <Paper>
                <h5>Basic Infromation</h5>
                <Grid container>
                    <Grid item>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}