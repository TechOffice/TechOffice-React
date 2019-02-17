import * as React from "react";
import { Paper, Grid, MenuItem, Select } from "@material-ui/core";

export default class CheckoutMaintenanceHeaderComponent extends React.Component<any, any>{

    render(){
        return (
            <Paper>
                <Grid container>
                    <Grid item>
                        <Select>
                            <MenuItem>Testing Hair Stylist 1</MenuItem>
                            <MenuItem>Testing Hair Stylist 2</MenuItem>
                            <MenuItem>Testing Hair Stylist 3</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}