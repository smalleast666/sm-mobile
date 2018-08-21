import * as React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import indexRoutes from "./indexRouter";

var hist = createBrowserHistory();

class Routers extends React.Component {
    render() {
        return (
            <Router history={hist}>
                <Switch>
                    {indexRoutes.map(prop => {
                        return <Route path={prop.path} key={prop.key} component={prop.component} />;
                    })}
                </Switch>
            </Router>
        );
    }
}
export default Routers;
