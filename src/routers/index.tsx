import * as React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import { Provider } from 'mobx-react';

import stores from '../stores/stores';
import indexRoutes from './indexRouter';
import UnDefined from '~/views/UnDefined';

const hist = createBrowserHistory();

class Routers extends React.Component {
    render() {
        return (
            <Provider {...stores}>
                <Router history={hist}>
                    <Switch>
                        {indexRoutes.map(prop => {
                            return <Route path={prop.path} key={prop.key} component={prop.component} />;
                        })}
                        <Route path='*' component={UnDefined} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}
export default Routers;
