import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Box from "@material-ui/core/Box";

export default (props) => {
    const {user} = props
    const score = Object.keys(user.answers).length +
        user.questions.length;
    return (
        <Card className="leader card">
            <div className="card-content">
                <CardMedia
                    className="card-content-media"
                    image={user.avatarURL}
                    title={user.id}
                />
                <CardContent className="card-content-details">
                    <Typography component="h6" variant="h6">
                        {user.name}
                    </Typography>
                    <Grid container alignItems="center">
                        <Grid container item justify="space-between">
                            <Grid item xs={10}>Answered questions</Grid>
                            <Grid item xs={2}>{Object.keys(user.answers).length}</Grid>
                        </Grid>
                        <hr/>
                        <Grid container item justify="space-between">
                            <Grid item xs={10}>Created questions</Grid>
                            <Grid item xs={2}>{user.questions.length}</Grid>
                        </Grid>
                    </Grid>
                </CardContent>
                <Card className="card">
                    <CardHeader
                        className="card-header"
                        subheader="Score"
                    />
                    <CardContent>
                        <Box className="circle">
                            {score}
                        </Box>
                    </CardContent>
                </Card>
            </div>
        </Card>
    )
}