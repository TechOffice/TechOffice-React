import * as React from "react";
import * as ReactDOM from "react-dom";
import i18n from "./i18n";


class App extends React.Component<any, any>{
    
    render(){
        const { t } = this.props;

        return (
            <div>
                <h1>{i18n.t('name.label')}</h1>
                <h1>{i18n.t('no transalate')}</h1>
            </div>            
        )
    }

}


ReactDOM.render(
    <App/>
, document.getElementById('app'));

    
