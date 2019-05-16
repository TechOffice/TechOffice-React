import { ofType, Epic, combineEpics } from "redux-observable";
import { mergeMap } from "rxjs/operators";
import { Action } from "redux";

const pingEpic = (action$)=> action$.pipe(
    ofType('ADD_COUNTER'),
    mergeMap( async (action)=>{
        fetch("./data").then((res)=>{
            debugger;
        })
    })
);

export default combineEpics<Action, Action, any>(    
    pingEpic
);

