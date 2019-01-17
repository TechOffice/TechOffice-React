import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect, Provider, DispatchProp } from "react-redux";
import store from "./store/store";
import httpClient from "./http/httpClient";


@(connect( 
    // map state to props
    function(state: any){
        return {
            counter: state.counter
        }
    },
    // map dispatch to props
    function(dispatch){
        return {
            onClick: function(n){
                dispatch({
                    type: "ADD",
                    data: n
                })
            }
        }
    }
) as any)
class App extends React.Component<any, any>{

    constructor(props){
        super(props);
        this.state = {counter: props.counter};
    }
    
    componentDidMount(){
        httpClient.get("static/data/test.json").then((response => {
            console.log(response);
        }));
        httpClient.get("static/data/test.json").then((response => {
            console.log(response);
        }));
    }

    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <div>
                    <button onClick={this.props.onClick.bind(this, 1)}>Add</button>
                </div>
                <div>Number: {this.props.counter}</div>
            </div>            
        )
    }

}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('app'));


