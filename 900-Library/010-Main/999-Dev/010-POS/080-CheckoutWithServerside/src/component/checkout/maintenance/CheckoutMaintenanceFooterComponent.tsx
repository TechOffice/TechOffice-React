import * as React from "react";
import { Paper, List, ListItem, Button, Grid } from "@material-ui/core";


export default class CheckoutMaintenanceFooterComponent extends React.Component<any, any>{
    
    render(){
        return (
            <ListItem>
                <Button onClick={()=>{this.props.openCheckoutDialog()}}
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
                                ) + Number(this.props.model.tip) - Number(this.props.model.discount)
                            }
                        </Grid>
                    </Grid>
                </Button>
            </ListItem>
        );
    }
}