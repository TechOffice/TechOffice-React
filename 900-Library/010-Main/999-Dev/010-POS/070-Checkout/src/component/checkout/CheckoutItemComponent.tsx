import * as React from "react";
import { ListItem, ListItemText, Grid, Fab, SvgIcon, Collapse, CardContent, Card, Typography, IconButton } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckoutItemTextField from "./form/CheckoutItemTextField";
import { connect } from "react-redux";

@(connect(
    (state: any, ownProps: any)=>({
        checkoutItem: state.checkoutItems[ownProps.index]
    }),
    (dispatch)=>({
        updateField: function(index, event, inputType){
            dispatch({
                type: "UPDATE_CHECKOUT_ITEM_FIELD",
                index: index,
                event: event,
                inputType: inputType
            });
        } 
    })
) as any)
export default class CheckoutItemComponent extends React.Component<any, any>{
    
    constructor(props){
        super(props);
        this.state = {
            expanded: false
        };
    }

    render(){
        let checkoutItem = this.props.checkoutItem;
        return(
            <ListItem id={checkoutItem.id}>
                <Card style={{minWidth: 350}}>
                   <CardContent>
                        <Grid container alignItems="center">
                            <Grid item xs={2}>
                                <IconButton onClick={()=>{this.setState({expanded: !this.state.expanded})}}>
                                    <ExpandMoreIcon />
                                </IconButton>
                            </Grid>
                            <Grid item xs={7}>
                                {checkoutItem.name} 
                            </Grid>
                            <Grid item xs={1}>
                                {checkoutItem.total}
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <CheckoutItemTextField {...this.props} name="quantity" label="Quantity" inputType="integer"/>
                        </CardContent>
                    </Collapse>
                </Card>
            </ListItem>
        )
    }
}