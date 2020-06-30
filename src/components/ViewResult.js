import React from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Typography, withStyles
} from "@material-ui/core";
import {connect} from "react-redux";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";
import Badge from "@material-ui/core/Badge";

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
    const {question, user, authedUser} = props
    if(!authedUser || !user) {
        props.history.push('/')
    }
    const isVoted = (option) => {
        return question[option].votes.indexOf(authedUser) >= 0
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
                    title={"Asked by: " + user.name}
                />
                <div className="card-content">
                    <CardMedia
                        className="card-content-media"
                        image={user.avatarURL}
                        title={user.id}
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

const mapStateToProps = ({questions, users, user}, ownProps) => {
    const { questionId } = ownProps.match.params
    const question = questions[questionId]
    return {
        user: question ? users[question.author] : null,
        question,
        authedUser: user
    }
}

export default connect(mapStateToProps)( ViewResult )

