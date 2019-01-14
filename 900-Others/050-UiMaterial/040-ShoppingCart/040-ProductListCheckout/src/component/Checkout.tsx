import * as React from "react";
import { Grid } from "@material-ui/core";
import { connect} from "react-redux";


@(connect( 
    (state) => {
        console.log("trigger map state to props");
        console.log(state.checkoutItems);
        return {
            checkoutItems: state.checkoutItems,
            name: state.name
        }
    },
    (dispatch) => {}
) as any)
export default class Checkout extends React.Component<any, any>{

    constructor(props){
        super(props);
        this.state = {checkoutItems: props.checkoutItems};

    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps', nextProps);        
    }

    render(){
        return (
            <div>
                <h1>Checkout</h1>
                <Grid container>

                </Grid>
                {
                    this.props.checkoutItems.map(
                        (checkoutItem)=>{
                            return (
                                <div id={checkoutItem.id}>
                                    {JSON.stringify(checkoutItem)}
                                </div>
                            );
                        }
                            
                    )
                }
                <div>
                    {this.props.name}
                </div>
            </div>
        );
    }
}