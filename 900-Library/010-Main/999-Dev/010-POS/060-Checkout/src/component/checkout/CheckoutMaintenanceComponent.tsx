import * as React from "react";
import { List, ListItem, ListItemText, Typography, ListItemIcon, SvgIcon, FormLabel, Grid, Fab, TextField, Paper, BottomNavigation, BottomNavigationAction, Card, CardContent, Button} from "@material-ui/core";
import { connect} from "react-redux";
import CheckoutItemComponent from "./CheckoutItemComponent";


@(connect( 
    (state: any) => {
        return {
            checkoutItems: state.checkoutItems,
        }
    },
    (dispatch) => ({
        addQuantity: (checkoutItem: any) => {
            dispatch({type: "ADD_QUANTITY", checkoutItem: checkoutItem})
        },
        removeQuantity: (checkoutItem: any) => {
            dispatch({type: "REMOVE_QUANTITY", checkoutItem: checkoutItem})
        },
        updateQuantity: (checkoutItem: any, quantity: any) => {
			dispatch({type: "UPDATE_QUANTITY", checkoutItem: checkoutItem, quantity: quantity})
		}
    })
) as any)
export default class CheckoutMaintenanceComponent extends React.Component<any, any>{

    constructor(props){
        super(props);
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps', nextProps);        
    }

    render(){
        return (
            <Paper style={{position: "relative", minHeight: 300, paddingBottom: 90}}>
                <List>
                    {
                        this.props.checkoutItems.map(
                            (checkoutItem)=>{
                                return (
                                    <CheckoutItemComponent checkoutItem={checkoutItem}/> 
                                );
                            }
                                
                        )
                    }
                </List>
                <Paper style={{position: "absolute", bottom: 0, height: 90, width: "100%"}}>
                    <List>
                        <ListItem>
                            <Button variant="contained" color="primary" style={{textTransform: 'none', width: "100%"}}>
                                <Grid container>
                                    <Grid item xs={6}>
                                        Checkout
                                    </Grid>
                                    <Grid item xs={4}>
                                        Total {this.props.checkoutItems.length} items
                                    </Grid>
                                    <Grid item xs={2}>
                                        {
                                            this.props.checkoutItems.reduce(
                                                (accumulator, currentValue) => accumulator + currentValue.total
                                                , 0
                                            )
                                        }
                                    </Grid>
                                </Grid>
                            </Button>
                        </ListItem>
                    </List>
                </Paper>
            </Paper>
        );
    }
}