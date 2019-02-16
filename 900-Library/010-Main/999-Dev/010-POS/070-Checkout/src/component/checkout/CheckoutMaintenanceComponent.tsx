import * as React from "react";
import { List, ListItem, ListItemText, Typography, ListItemIcon, SvgIcon, FormLabel, Grid, Fab, TextField, Paper, BottomNavigation, BottomNavigationAction, Card, CardContent, Button, Select, MenuItem} from "@material-ui/core";
import { connect} from "react-redux";
import CheckoutItemComponent from "./CheckoutItemComponent";
import CheckoutDialog from "./CheckoutDialog";


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
        this.state = {isCheckoutDialogOpen: false}
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps', nextProps);        
    }

    render(){
        return (
            <Paper style={{position: "relative", minHeight: 90, paddingBottom: 90}}>
                <Paper>
                    <Grid container>
                        <Grid item>
                            <Select>
                                <MenuItem>Testing Hair Stylist 1</MenuItem>
                                <MenuItem>Testing Hair Stylist 2</MenuItem>
                                <MenuItem>Testing Hair Stylist 3</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper>
                    {
                        this.props.checkoutItems && this.props.checkoutItems.length > 0 &&
                        <Paper style={{maxHeight: 300, overflow: "auto"}}>
                            <List>
                                {
                                    this.props.checkoutItems.map(
                                        (checkoutItem, index)=>{
                                            return (
                                                <CheckoutItemComponent index={index}/> 
                                            );
                                        }
                                            
                                    )
                                }
                            </List>
                        </Paper>
                    }
                    <Paper style={{position: "absolute", bottom: 0, height: 90, width: "100%"}}>
                        <List>
                            <ListItem>
                                <Button onClick={()=>{this.setState({isCheckoutDialogOpen: true})}}
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
                    <CheckoutDialog open={this.state.isCheckoutDialogOpen} 
                        onClose={()=>{this.setState({isCheckoutDialogOpen: false})}}/>
                </Paper>
            </Paper>
        );
    }
}