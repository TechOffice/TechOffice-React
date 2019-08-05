import { PureComponent } from "react";
import * as React from "react";
import withContext from "./withContext";

@(withContext() as any)
export default class extends PureComponent<any>{

    render(){
        const {authenticated} = this.props;

        console.log(this.props);
        return (
            <div>
                <h1>Example 3</h1>
                <p>Context Consumer by HOC Decorator</p>
                {
                    authenticated ? "Logged in!"  : "You need to sign in"
                }
            </div>
        )
    }
}