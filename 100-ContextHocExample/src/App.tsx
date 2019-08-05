import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContext } from "./AppContext";
import Header from "./withContext";
import Example1WithoutProvider from "./Example1WithoutProvider";
import Example2WithProvider from "./Example2WithProvider";
import Example3WithContextDecorator from "./Example3WithContextDecorator";

class App extends React.Component{
    
    render(){
        return (
            <div>
                <h1>Context Example</h1>
                <Example1WithoutProvider></Example1WithoutProvider>
                <Example2WithProvider></Example2WithProvider>
                <Example3WithContextDecorator></Example3WithContextDecorator>
            </div>            
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));

    
