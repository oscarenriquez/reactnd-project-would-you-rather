import React, { useState } from "react";
import {Card, CardContent, CardHeader, CardMedia, Typography, FormControl, RadioGroup, FormControlLabel, Radio} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types"

/**
 * React Component to Save Answer
 * @type {React.NamedExoticComponent<object>}
 */
const AnswerQuestion = React.memo((props) => {
    const {question, author, handleSave} = props
    const [answer, setAnswer] = useState('optionOne')

    // handle answer change
    const handleChange = (event) => {
        const {value} = event.target
        setAnswer(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleSave(answer)
    }

    return (
        <div className="content">
            <Card className="question card">
                <CardHeader
                    className="card-header"
                    title={author.name + " asks: "}
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

AnswerQuestion.propTypes = {
    question: PropTypes.object,
    author: PropTypes.object,
    handleSave: PropTypes.func
}

export default AnswerQuestion

