import * as React from "react";
import { Route } from "react-router-dom";
import {connect} from "react-redux";
import {login} from "../actions/loginActions";

/**
 * Allow only routes with authentication
 * @param isAuthenticated
 * @param Component
 * @param path
 * @param rest
 * @returns {*}
 * @constructor
 */
const PrivateRoute = ({ isAuthenticated, Component, path, ...rest }) => {
    React.useEffect(() => {
        const authedUser = JSON.parse(sessionStorage.getItem('authedUser'))
        if (isAuthenticated) {
            return;
        }
        if (authedUser && authedUser.id) {
            rest.dispatch(login(authedUser))
            return;
        }
        window.location.href = '/'
    }, [isAuthenticated, rest]);

    const render = (props) =>
        isAuthenticated ? <Component {...props} /> : null;

    return <Route path={path} component={render} {...rest} />;
};

const mapStateToProps = ({authedUser}) => ({
    isAuthenticated: authedUser !== ''
})

export default connect (mapStateToProps) ( PrivateRoute );