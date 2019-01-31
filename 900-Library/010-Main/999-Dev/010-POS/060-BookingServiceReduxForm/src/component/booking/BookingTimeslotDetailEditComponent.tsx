import * as React from "react";
import { Paper, Grid, RadioGroup, FormControlLabel, Radio, Checkbox, TextField } from "@material-ui/core";
import { DateTimePicker } from "material-ui-pickers";

export default class BookingTimeslotDetailEditComponent extends React.Component<any, any>{
    
    value;

    render(){
        return (
            <Paper>
                <Grid container>
                    <Grid item>
                        <RadioGroup row>
                            <FormControlLabel value="memeber" label="Member" control={<Radio/>}/>
                            <FormControlLabel value="walk-in" label="Walk-in" control={<Radio/>}/>
                        </RadioGroup>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <RadioGroup row>
                            <FormControlLabel value="male" label="Male" control={<Radio/>}/>
                            <FormControlLabel value="female" label="Female" control={<Radio/>}/>
                        </RadioGroup>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <FormControlLabel label="Multiple People" control={<Checkbox/>}/>
                    </Grid>
                    <Grid item>
                        <TextField/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <TextField label="Member Name"/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <TextField label="Contact Phone"/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <DateTimePicker value={this.value} onChange={(date)=>{this.value = date}}/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <DateTimePicker value={this.value} onChange={(date)=>{this.value = date}}/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <FormControlLabel label="Wash" control={<Checkbox/>}/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <TextField label="Remark" multiline/>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}