import * as React from "react";
import { Paper, Grid } from "@material-ui/core";
import ProductListComponent from "./ProductListComponent";
import CheckoutMockDataService from "../../service/mock/CheckoutMockDataService";
import { reduxForm, FieldArray } from "redux-form";

@(reduxForm({
    form: "checkout",
    initialValues: null,
    enableReinitialize: true,
    keepDirtyOnReinitialize : false
}) as any)
export default class CheckoutComponent extends React.Component<any, any>{

    private productList: any[];

    componentWillMount(){
        var data = CheckoutMockDataService.getMockData();
        this.props.initialize({productList: data});
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps', nextProps);        
    }

    render(){
        return (
            <Paper>
                <Grid container spacing={40}>
                    <Grid item md={7}>
                        <FieldArray name="productList" component={ProductListComponent}/>
                    </Grid>
                    <Grid item md={5}>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}