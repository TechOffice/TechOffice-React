import * as React from 'react';
import { Grid } from '@material-ui/core';
import ProductComponent from './ProductComponent';

export default class ProductListComponent extends React.Component<any, any>{
    
    constructor(props){
        super(props);
        this.state = {
            productList: this.props.productList
        };
    }

    render(){
        return(
            <div>
                <Grid container spacing={40}>
                    {this.state.productList.map(product=><Grid item><ProductComponent product={product}/></Grid>)}          
                </Grid>            
            </div>
        )
    }
}