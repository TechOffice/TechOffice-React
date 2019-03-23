import * as React from "react";
import { Paper, List, ListItem, Button, Grid } from "@material-ui/core";
import { connect } from "react-redux";

@(connect(
    (state: any, ownProps: any) => {
        return {
            checkoutItems: state.checkoutItems,
            model: state,
            ownProps: ownProps.openCheckoutDialog
        }
    },
    undefined
) as any)
export default class CheckoutMaintenanceFooterComponent extends React.Component<any, any>{
    
    calcRemainingPayment(){
        let payment = 0;
        for( var i=0; i<this.props.checkoutItems.length; i++){
            const currentValue = this.props.checkoutItems[i]; 
            if (currentValue.type == "product"){
                payment = Number(payment) + 
                    Number((
                        ( currentValue.price ? currentValue.price : 0 ) * 
                        ( currentValue.quantity ? currentValue.quantity : 1 ) * 
                        (1 - (currentValue.discountPct ? currentValue.discountPct : 0)/100 )                              
                    ).toFixed(1));
            }else {
                payment = Number(payment) + 
                    Number((
                        ( currentValue.price ? currentValue.price : 0 ) * 
                        (1 - (currentValue.discountPct ? currentValue.discountPct : 0)/100 )                              
                    ).toFixed(1));
            }
        }

        return payment;
    }

    render(){
        return (
            <ListItem>
                <Button onClick={()=>{this.props.openCheckoutDialog()}}
                    disabled={this.calcRemainingPayment() <= 0}
                    variant="contained" color="primary" 
                    style={{textTransform: 'none', width: "100%"}}>
                    <Grid container>
                        <Grid item xs={6}>
                            Checkout
                        </Grid>
                        <Grid item xs={4}>
                            Total {this.props.checkoutItems.length} items
                        </Grid>
                        <Grid item xs={2}>
                            $ {
                                this.props.checkoutItems.reduce(
                                    (accumulator, currentValue) => {
                                        if (currentValue.type == "product"){
                                            return Number(accumulator) + 
                                            Number((
                                                ( currentValue.price ? currentValue.price : 0 ) * 
                                                ( currentValue.quantity ? currentValue.quantity : 1 ) * 
                                                (1 - (currentValue.discountPct ? currentValue.discountPct : 0)/100 )                              
                                            ).toFixed(1))
                                        }
                                        return Number(accumulator) + 
                                            Number((
                                                ( currentValue.price ? currentValue.price : 0 ) * 
                                                (1 - (currentValue.discountPct ? currentValue.discountPct : 0)/100 )                              
                                            ).toFixed(1))
                                    }, 0
                                ) + Number(this.props.model.tip?this.props.model.tip:0) - Number(this.props.model.discount?this.props.model.discount:0)
                            }
                        </Grid>
                    </Grid>
                </Button>
            </ListItem>
        );
    }
}