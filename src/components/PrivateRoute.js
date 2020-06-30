import * as React from "react";
import { Route } from "react-router-dom";
import {connect} from "react-redux";

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
        if (isAuthenticated) {
            return;
        }
        window.location.href = '/'
    }, [isAuthenticated]);

    const render = (props) =>
        isAuthenticated ? <Component {...props} /> : null;

    return <Route path={path} render={render} {...rest} />;
};

const mapStateToProps = ({user}) => ({
    isAuthenticated: !!user
})

export default connect (mapStateToProps) ( PrivateRoute );