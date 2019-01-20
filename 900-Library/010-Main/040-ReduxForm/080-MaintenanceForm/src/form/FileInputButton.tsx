import * as React from 'react';
import { Button } from '@material-ui/core';

export default class FileInputButton extends React.Component<any, any>{
    
    render(){
        return(
            <Button
                variant="contained"
                component="label">
                Upload File
                <input
                    type="file"
                    style={{ display: "none" }}/>
            </Button>
        );
    }
}