import * as React from 'react';
import { Grid, Paper } from '@material-ui/core';
import ProductComponent from './ProductComponent';
import { FormSection } from 'redux-form';

export default class ProductListComponent extends React.Component<any, any>{
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Paper style={{position: "relative"}}>
                {
                    <Grid container spacing={40}>
                        {
                            this.props.fields.map(product=>
                                <Grid item>
                                    <FormSection name={`${product}`}>
                                        <ProductComponent/>
                                    </FormSection>
                                </Grid>
                            )
                        }          
                    </Grid>
                }        
            </Paper>
        )
    }
}