import React, { useState } from "react";
import {Card, CardContent, CardHeader, CardMedia, Typography, FormControl, RadioGroup, FormControlLabel, Radio} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {saveAnswer} from "../actions/questionActions";

/**
 * React Component to Save Answer
 * @type {React.NamedExoticComponent<object>}
 */
const AnswerQuestion = React.memo((props) => {
    const {question, user, authedUser} = props
    const [answer, setAnswer] = useState('optionOne')

    // validate if the user was loaded
    if(!question || !user) {
        return (
            <div>
                loading
            </div>
        )
    }

    // handle answer change
    const handleChange = (event) => {
        const {value} = event.target
        setAnswer(value)
    }

    // handle answer submit and disptach action
    const handleSubmit = (event) => {
        event.preventDefault()
        props.dispatch(saveAnswer({ authedUser, qid: question.id, answer }))
        props.history.push(`/ViewResult/${question.id}`)
    }

    return (
        <div className="content">
            <Card className="question card">
                <CardHeader
                    className="card-header"
                    title={user.name + " asks: "}
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
                        <Typography component="h6" variant="h6">
                            Would you rather
                        </Typography>
                        <FormControl component="fieldset">
                            <RadioGroup aria-label="gender" name="gender1" value={answer} onChange={handleChange}>
                                <FormControlLabel value={"optionOne"} control={<Radio />} label={question.optionOne.text} />
                                <FormControlLabel value={"optionTwo"} control={<Radio />} label={question.optionTwo.text} />
                            </RadioGroup>
                        </FormControl>
                        <div>
                            <Button className="form-button block" onClick={handleSubmit} variant="contained" color="primary">
                                Submit
                            </Button>
                        </div>
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
        user: users[question.author],
        question,
        authedUser: user
    }
}

export default connect(mapStateToProps)( AnswerQuestion )

