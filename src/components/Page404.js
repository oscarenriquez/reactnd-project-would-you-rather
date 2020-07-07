import React from "react";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const Page404 = () => {
    return (
        <Grid container justify={"center"}>
            <Grid item xs={6}>
                <Typography variant="h3" component="h4">
                    Error 404, page not found!
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Page404