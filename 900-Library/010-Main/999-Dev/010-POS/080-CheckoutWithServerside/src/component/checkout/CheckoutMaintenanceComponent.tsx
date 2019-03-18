import * as React from "react";
import { List, Paper} from "@material-ui/core";
import { connect} from "react-redux";
import CheckoutProductItemComponent from "./CheckoutProductItemComponent";
import CheckoutDialog from "./CheckoutDialog";
import CheckoutMaintenanceFooterComponent from "./maintenance/CheckoutMaintenanceFooterComponent";
import CheckoutMaintenanceHeaderComponent from "./maintenance/CheckoutMaintenanceHeaderComponent";
import CheckoutServiceItemComponent from "./CheckoutServiceItemComponent";


@(connect( 
    (state: any) => {
        return {
            checkoutItems: state.checkoutItems,
        }
    },
    (dispatch) => ({

    })
) as any)
export default class CheckoutMaintenanceComponent extends React.Component<any, any>{

    constructor(props){
        super(props);
        this.state = {isCheckoutDialogOpen: false}
    }
    
    render(){
        return (
            <Paper style={{position: "relative", minHeight: 90, paddingBottom: 90}}>
                <CheckoutMaintenanceHeaderComponent/>
                <Paper>
                    {
                        this.props.checkoutItems && this.props.checkoutItems.length > 0 &&
                        <Paper style={{maxHeight: 300, overflow: "auto"}}>
                            <List>
                                {
                                    this.props.checkoutItems.map(
                                        (checkoutItem, index)=>{
                                            if (checkoutItem.type == "service"){
                                                return (
                                                    <CheckoutServiceItemComponent index={index}/> 
                                                );
                                            }
                                            return (
                                                <CheckoutProductItemComponent index={index}/> 
                                            );
                                        }
                                            
                                    )
                                }
                            </List>
                        </Paper>
                    }
                    <CheckoutMaintenanceFooterComponent 
                        checkoutItems={this.props.checkoutItems}
                        openCheckoutDialog={()=>{this.setState({isCheckoutDialogOpen: true})}}/>
                    <CheckoutDialog open={this.state.isCheckoutDialogOpen} 
                        onClose={()=>{this.setState({isCheckoutDialogOpen: false})}}/>
                </Paper>
            </Paper>
        );
    }
}