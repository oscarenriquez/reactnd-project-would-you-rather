import React from "react";
import {Grid} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

export default () => {
    return (
        <Grid container justify={"center"}>
            <Grid item xs={1}>
                <CircularProgress />
            </Grid>
        </Grid>
    )
}