import * as React from "react";
import { Paper, Grid, TextField, FormLabel, FormGroup, OutlinedInput, InputAdornment, IconButton, Typography } from "@material-ui/core";
import CheckoutMaintenanceComponent from "./CheckoutMaintenanceComponent";
import ProductListComponent from "./ProductListComponent";
import CheckoutMockDataService from "../../service/mock/CheckoutMockDataService";
import SearchIcon from '@material-ui/icons/Search';

export default class CheckoutComponent extends React.Component<any, any>{

    private productList: any[];
    private serviceList: any[];

    componentWillMount(){
        var prodcutData = CheckoutMockDataService.getMockProductData();
        var serviceData = CheckoutMockDataService.getMockServiceData();
        this.productList = prodcutData;
        this.serviceList = serviceData;
    }

    render(){
        return (
            <Paper>
                <Grid container spacing={40}>
                    <Grid item md={7}>
                        <Grid container spacing={8}>
                            <Grid item xs={12}>
                                <FormGroup style={{width: "100%"}}>
                                    <FormLabel>
                                        <Typography variant="h5">
                                            Search Product / Service
                                        </Typography>
                                    </FormLabel>
                                    <TextField 
                                        variant="outlined"
                                        style={{height:35}}
                                        placeholder="Search"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton>
                                                        <SearchIcon/>
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}                    
                                    />
                                </FormGroup>
                            </Grid>
                            <Grid item>
                                <ProductListComponent 
                                    productList={this.productList}
                                    serviceList={this.serviceList}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={5}>
                        <CheckoutMaintenanceComponent />
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}