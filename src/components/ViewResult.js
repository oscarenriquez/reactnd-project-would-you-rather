import React from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Typography, withStyles
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";
import Badge from "@material-ui/core/Badge";
import PropTypes from "prop-types"

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 20,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
    },
}))(LinearProgress);

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -295,
        top: -5,
        position: "relative",
        width: "40px",
        height: "40px",
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

function LinearProgressWithLabel(props) {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" style={{height: "30px"}}  mr={1}>
                <BorderLinearProgress
                    variant="determinate" {...props} />
            </Box>
            <Box minWidth={35} style={{height: "30px"}}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

const ViewResult = React.memo((props) => {
    const {question, author, authedUser} = props

    const isVoted = (option) => {
        return question[option].votes.indexOf(authedUser.id) >= 0
    }
    const getTotalVotes = () => {
        return question.optionOne.votes.length +
            question.optionTwo.votes.length;
    }
    const getVotesForOptionOne = () => {
        return question.optionOne.votes.length
    }
    const getVotesForOptionTwo = () => {
        return question.optionTwo.votes.length
    }
    const getPercentage = (votes) => {
        const total = getTotalVotes();
        return (votes / total) * 100
    }
    return (
        <div className="content">
            <Card className="question card">
                <CardHeader
                    className="card-header"
                    title={"Asked by: " + author.name}
                />
                <div className="card-content">
                    <CardMedia
                        className="card-content-media"
                        image={author.avatarURL}
                        title={author.id}
                    />
                    <CardContent
                        className="card-content-details"
                    >
                        <Typography component="h5" variant="h5">
                            Results:
                        </Typography>

                        <Paper className={ getVotesForOptionOne() >= getVotesForOptionTwo() ? 'result highlight' : 'result' } elevation={9}>
                            {
                                isVoted('optionOne') ?
                                    <StyledBadge badgeContent={"Your vote"} color={"primary"} />
                                    : null
                            }
                            <Box fontWeight="fontWeightBold">
                                Would you rather {question.optionOne.text}?
                            </Box>
                            <LinearProgressWithLabel value={getPercentage(getVotesForOptionOne())} />
                            <Box>
                                {getVotesForOptionOne() +' out of '+ getTotalVotes()}
                            </Box>
                        </Paper>

                        <Paper className={ getVotesForOptionTwo() > getVotesForOptionOne() ? 'result highlight' : 'result' } elevation={9}>
                            {
                                isVoted('optionTwo') ?
                                    <StyledBadge badgeContent={"Your vote"} color={"primary"} />
                                    : null
                            }
                            <Box fontWeight="fontWeightBold">
                                Would you rather {question.optionTwo.text}?
                            </Box>
                            <LinearProgressWithLabel value={getPercentage(getVotesForOptionTwo())} />
                            <Box>
                                {getVotesForOptionTwo() +' out of '+ getTotalVotes()}
                            </Box>
                        </Paper>

                    </CardContent>
                </div>
            </Card>
        </div>
    )
})

ViewResult.propTypes = {
    question: PropTypes.object,
    author: PropTypes.object,
    authedUser: PropTypes.object
}

export default ViewResult

