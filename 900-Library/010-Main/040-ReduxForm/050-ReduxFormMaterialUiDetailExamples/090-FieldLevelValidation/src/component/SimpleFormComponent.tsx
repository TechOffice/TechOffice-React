import * as React from 'react';
import { Field, reduxForm, FormProps, FormErrors, InjectedFormProps } from 'redux-form';
import TextField from '../form/TextField';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import required from '../validation/required';
import AsyncValidateTextField from '../form/AsyncValidateTextField';

/**
 * Simple Form Component 
 */
@(reduxForm({form : 'simple'}) as any)
export default class SimpleFormComponent extends React.Component<InjectedFormProps | any , any >{

    constructor(props: any){
        super(props);
    }

    render(){
        return (
            <form noValidate onSubmit={this.props.handleSubmit}>
                {JSON.stringify(this.props.asyncValidating)}
                <Grid container>
                    <Grid item>
                        <Field name="simpleTextField1" label="Simple Text Field 1" component={TextField}/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <Field name="asyncValidateTextField1" label="Async Validate Text Field 1" component={AsyncValidateTextField}/>
                    </Grid>
                </Grid>
                
                <Grid container>
                    <Grid item>
                        <Field name="requiredTextField1" label="Required Text Field 1" component={TextField} 
                            required validate={[required]}/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <Field name="disabledTextField1" label="Disabled Text Field 1" component={TextField} disabled/>
                    </Grid>
                </Grid>
                {JSON.stringify(this.props)}
            </form>
        );
    }
}



