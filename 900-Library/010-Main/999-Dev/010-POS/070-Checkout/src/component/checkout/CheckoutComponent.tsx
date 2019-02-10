import * as React from "react";
import { Paper, Grid } from "@material-ui/core";
import CheckoutMaintenanceComponent from "./CheckoutMaintenanceComponent";
import ProductListComponent from "./ProductListComponent";
import CheckoutMockDataService from "../../service/mock/CheckoutMockDataService";


export default class CheckoutComponent extends React.Component<any, any>{

    private productList: any[];

    componentWillMount(){
        var data = CheckoutMockDataService.getMockData();
        this.productList = data;
    }

    render(){
        return (
            <Paper>
                <Grid container spacing={40}>
                    <Grid item md={7}>
                        <ProductListComponent productList={this.productList}/>
                    </Grid>
                    <Grid item md={5}>
                        <CheckoutMaintenanceComponent />
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}