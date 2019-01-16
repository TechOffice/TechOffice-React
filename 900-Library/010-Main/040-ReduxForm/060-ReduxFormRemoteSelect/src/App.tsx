import * as React from "react";
import * as ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { reducer } from 'redux-form';
import SimpleFormComponent from "./SimpleFormComponent";
import { Provider, connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";

const rootReducer = combineReducers({
    form: reducer.plugin({
        loading: (state, action) => {
            switch(action.type){
                case "LOADING":
                    if (!action.name){
                        return state;
                    }
                    if (!state){
                        state = {};
                    }
                    return  {
                        ...state,
                        loading: true
                    };
                case "COMPLETE_LOADING":
                    return {
                        ...state,
                        loading: false
                    }
                default:
                    return state;
            }
        }
    })
});

const store = createStore(rootReducer, {});

@(connect( 
    // map state to props
    function(state: any){
        // console.log(state);
        return {
            simple: state && state.form && state.form.simple && state.form.simple.values ? state.form.simple.values : {},
            form: state && state.form && state.form.simple ? state.form.simple : {}
        };
    } ,
    // map dispatch to props
    function(dispatch){
        return {};
    }    
) as any)
class App extends React.Component<any, any>{
    
    constructor(props){
        super(props);
        this.state = props;
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps', nextProps);        
    }

    render(){
        return (
            <div>
                {this.props.form.loading && <CircularProgress />}
                <h1>Hello World</h1>
                    <SimpleFormComponent/>
                <div>
                    {this.props.simple.simpleTextField1}
                </div>
                <div>
                    {this.props.simple.simpleSelectField}
                </div>
                <div>
                    {this.props.simple.remoteSelectField}
                </div>
            </div>            
        )
    }
}


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('app'));

    
