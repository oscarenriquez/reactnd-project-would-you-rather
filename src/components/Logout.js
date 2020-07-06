import React, {useEffect} from "react";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {logout} from "../actions/loginActions";
import {connect} from "react-redux";

const Logout = (props) => {
    useEffect(() => {
        sessionStorage.clear()
        props.dispatch(logout)
        props.history.push('/login')
    })

    return (
        <Grid container>
            <Grid item xs={3}>
                <Typography variant="h4" component="h5">
                    Closing Session
                </Typography>
            </Grid>
        </Grid>
    )
}

export default connect() (Logout)