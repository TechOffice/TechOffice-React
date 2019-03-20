import * as _ from "lodash";

export default (reducerFunc, namePrefix, defaultValue) => {
    return (form = defaultValue, action)=>{
        if (action.type == "UPDATE_FIELD"){
            let name    =   action.event.target.name;
            let value   =   action.event.target.value;
            if (namePrefix && name.startsWith(namePrefix)){
                name = name.substring(namePrefix.length);
            }
            if (action.inputType == 'integer'){
                if (!isNaN(Number(value))){
                    if (name){
                        return _.set(_.clone(form), name,value);
                    }else {
                        return value;
                    }
                }else {
                    return form;
                }
            }
            if (name){
                return _.set(_.clone(form), name,value);
            }else {
                return value;
            }
        }
        // 
        if (reducerFunc){
            return reducerFunc(form, action);
        }else {
            return form;
        }
    };    
}

