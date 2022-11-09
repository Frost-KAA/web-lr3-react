import Login from '../Login'
import Layout from '../layout'
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import RouteGuard from './RouteGuard';

const Routers = () => {
    return (
        <BrowserRouter >
            <Switch>
                <RouteGuard
                    exact
                    path="/"
                    component={Layout}
                />
                <Route
                    path="/login"
                    component={Login}
                />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
}
    

export default Routers;
  