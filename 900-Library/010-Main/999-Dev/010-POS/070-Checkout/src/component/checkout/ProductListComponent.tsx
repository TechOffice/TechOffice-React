import * as React from 'react';
import { Grid, Paper } from '@material-ui/core';
import ProductComponent from './ProductComponent';

export default class ProductListComponent extends React.Component<any, any>{
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Paper style={{position: "relative"}}>
                {
                    this.props.productList && 
                    <Grid container spacing={40}>
                        {this.props.productList.map(product=><Grid item><ProductComponent product={product}/></Grid>)}          
                    </Grid>
                }        
            </Paper>
        )
    }
}