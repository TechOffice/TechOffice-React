import { AppContext } from "./AppContext";
import * as React from "react";

const withContent = () => (WrappedComponent) => {
  return class extends React.Component {
    render() {
        return (
            <AppContext.Consumer>
            {
              ({authenticated}) => {
                return (<WrappedComponent authenticated={authenticated}/>);
              }
            }
            </AppContext.Consumer>
        );
    }
  };
}
  
export default withContent;