import { PureComponent } from "react";
import { AppContext } from "./AppContext";
import * as React from "react";

export default class extends PureComponent {

    render(){
        return (
            <div>
                <h1>Example2</h1>
                <p>Context Consumer with Provider. The Provider would overrivde the default value of context</p>
                <AppContext.Provider value={{authenticated: false}}>
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
                </AppContext.Provider>
            </div>
        )
    }
}