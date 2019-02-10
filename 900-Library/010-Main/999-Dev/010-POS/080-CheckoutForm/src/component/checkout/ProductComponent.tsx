import * as React from "react";
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, CardHeader } from "@material-ui/core";
import Label from "../../form/Label";
import { Field } from "redux-form";
import { connect } from "react-redux";

@(connect(
    (state) => {},
    (dispatch) => ({
        checkout: (product) => {dispatch({type: "ADD_PRODUCT", product: product })}
    })
) as any)
export default class ProductComponent extends React.Component<any, any>{
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Card style={{maxWidth: 180}}>
            <CardHeader style={{backgroundColor: "blue"}}/>
            <CardActionArea onClick={()=>{this.props.checkout(this.state.product)}}>
                <CardContent>
                    <Field name="name" component={Label}/>
                </CardContent>
            </CardActionArea>
        </Card>
        );
    }
}