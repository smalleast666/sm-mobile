import * as React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import indexRoutes from "./contentRouter";
import Header from "components/Header";
import Footer from "components/Footer";

var hist = createBrowserHistory();

class Routers extends React.Component {
    render() {
        return [
            <Header key="Header" />,
            <Router key="content" history={hist}>
                <Switch>
                    {indexRoutes.map(prop => {
                        return <Route path={prop.path} key={prop.key} component={prop.component} />;
                    })}
                </Switch>
            </Router>,
            <Footer key="Footer" />
        ];
    }
}

export default Routers;
