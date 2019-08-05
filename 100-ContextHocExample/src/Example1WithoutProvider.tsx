import { PureComponent } from "react";
import { AppContext } from "./AppContext";
import * as React from "react";

export default class extends PureComponent {

    render(){
        return (
            <div>
                <h1>Example1</h1>
                <p>Context Consumer wihtout Provider</p>
                <AppContext.Consumer>
                {
                ({authenticated}) => {
                    if(authenticated) {
                    return <div>Logged in!</div>
                    }
                    return <div>You need to sign in</div>
                }
                }
                </AppContext.Consumer>
            </div>

        )
    }
}