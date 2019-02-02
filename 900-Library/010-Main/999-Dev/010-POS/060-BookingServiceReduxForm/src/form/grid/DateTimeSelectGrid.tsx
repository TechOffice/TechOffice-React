
import { TextField, FormGroup, FormLabel, OutlinedInput, Grid, FormControl, Typography, Select } from "@material-ui/core";
import * as React from "react";

/**
 * Text Field 
 */
export default class DateTimeSelectGrid extends React.Component<any, any>{

    selects: any[];

    constructor(props){
        super(props);
        var startHour = props.startHour;
        var startMinute = props.startMinute;
        var endHour = props.endHour;
        var endMinute = props.endMinute;
        var interval = props.interval;
    }

    render(){
        return (
            <FormGroup row>
                <Typography>{this.props.label}</Typography>
                <Select {...this.props.input} 
                        input={
                            <OutlinedInput labelWidth={0}/>
                        }
                        required={this.props.required} disabled={this.props.disabled}
                        style={{height: 35}}>
                    {this.props.children}
                </Select>
            </FormGroup>
        );
    }
}

