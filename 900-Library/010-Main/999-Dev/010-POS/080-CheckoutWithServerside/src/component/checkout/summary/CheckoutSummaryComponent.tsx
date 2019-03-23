import * as React from "react";
import { Paper, Grid, Table, TableBody, TableRow, TableCell, Divider, TextField, Button, IconButton, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import CheckoutSummaryTableComponent from "./CheckoutSummaryTableComponent";

@(connect( 
    (state: any) => {
        return {
            checkoutItems: state.checkoutItems,
            model: state
        }
    },
    undefined
) as any)
export default class extends React.Component<any, any>{
    
    render(){
        return (
            <Paper style={{padding: 10}}>
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <div style={{marginTop: 15,  marginLeft: 15 }}>
                            <Typography variant="title">
                                Checkout Summary
                            </Typography>
                        </div>
                        <CheckoutSummaryTableComponent/>
                    </Grid>
                    <Grid item xs={6}>
                        <div style={{marginTop: 15,  marginLeft: 15 }}>
                            <Typography variant="title">
                                Paid
                            </Typography>
                        </div>
                        <Paper>
                            <Grid container direction="column">
                                <Grid item>
                                    <div style={{float: 'right', marginRight: 30, marginTop: 30, marginBottom: 30}}>
                                        <TextField variant="outlined" style={{height:35}}/>
                                    </div>
                                </Grid>
                                <Grid item>
                                    <Grid container spacing={8} 
                                        style={{marginLeft: 30, marginRight: 30, marginBottom: 30}}>
                                        <Grid item xs={4}>
                                            <Button variant="contained" color="primary" 
                                                style={{textTransform: 'none', width: 120}}>
                                                Cash
                                            </Button>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Button variant="contained" color="primary" 
                                                style={{textTransform: 'none', width: 120}}>
                                                Credit Card
                                            </Button>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Button variant="contained" color="primary" 
                                                style={{textTransform: 'none', width: 120}}>
                                                eWallet
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}