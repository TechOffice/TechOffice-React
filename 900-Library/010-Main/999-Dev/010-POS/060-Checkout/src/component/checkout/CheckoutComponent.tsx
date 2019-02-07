import * as React from "react";
import { Paper, Grid } from "@material-ui/core";
import CheckoutMaintenanceComponent from "./CheckoutMaintenanceComponent";
import ProductListComponent from "./ProductListComponent";
import CheckoutMockDataService from "../../service/mock/CheckoutMockDataService";


export default class CheckoutComponent extends React.Component<any, any>{
    
    componentWillMount(){
        var data = CheckoutMockDataService.getMockData();
        this.setState({productList: data});
    }

    render(){
        return (
            <Paper>
                <Grid container spacing={40}>
                    <Grid item md={7}>
                        <Paper>
                            {this.state.productList && <ProductListComponent productList={this.state.productList}/>}
                        </Paper>
                    </Grid>
                    <Grid item md={5}>
                        <CheckoutMaintenanceComponent />
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}