import * as React from "react";
import { connect} from "react-redux";
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, CardHeader } from "@material-ui/core";

@(connect( 
    undefined,
    (dispatch) => ({
        checkout: (product) => {dispatch({type: "ADD_PRODUCT", product: product })}
    })
) as any)
export default class ProductComponent extends React.Component<any, any>{
    
    constructor(props){
        super(props);
        this.state = {
            product: this.props.product
        };
        console.log(this.props.product);
    }

    render(){
        return(
            <Card style={{maxWidth: 150}}>
                <CardHeader style={{backgroundColor: "blue"}}/>
                <CardActionArea onClick={()=>{this.props.checkout(this.state.product)}}>
                    <CardContent>
                        <Typography gutterBottom variant="h6">
                            {this.state.product.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}