import React, {useState} from "react";
import {Card, CardContent, CardHeader, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import {addQuestion} from "../actions/questionActions";
import Loading from "./Loading";
import {isInitialized} from "../utils/helpers";
import Login from "./Login";

const NewQuestion = (props) => {
    const {authedUser, isInitialized} = props

    const [optionOneText, setOptionOneText] = useState('')
    const [optionTwoText, setOptionTwoText] = useState('')

    if (!isInitialized) {
        return (
            <Loading />
        )
    }

    if(!authedUser){
        return (
            <Login />
        )
    }

    const handleAddQuestion = () => {
        if (optionTwoText && optionOneText) {
            props.dispatch(addQuestion({ optionOneText, optionTwoText, author: authedUser.id }))
            props.history.push('home')
        } else {
            alert("Please complete both answers")
        }

    }
    return (
        <div className="content">
            <Card className="question card">
                <CardHeader
                    className="card-header"
                    title={'Create New Question'}
                />
                <CardContent>
                    <Box>
                        Complete the question:
                    </Box>
                    <Typography component="h6" variant="h6">
                        Would you rather
                    </Typography>
                    <form className="form" noValidate autoComplete="off">
                        <TextField
                            required={true}
                            value={optionOneText}
                            onChange={(event) => setOptionOneText(event.target.value)}
                            id="option-one"
                            label="Enter Option One Text Here"
                            variant="outlined" />
                        <Box style={{textAlign: "center", padding: "1rem"}}>
                            Or
                        </Box>
                        <TextField
                            required={true}
                            value={optionTwoText}
                            onChange={(event) => setOptionTwoText(event.target.value)}
                            id="option-two"
                            label="Enter Option Two Text Here"
                            variant="outlined" />
                        <Button onClick={handleAddQuestion} className="form-button block" variant="contained" color="primary">
                            Submit
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

const mapStateToProps = ({authedUser, questions, users}) => {
    return {
        authedUser,
        isInitialized: isInitialized(questions, users, true)
    }
}

export default connect (mapStateToProps) ( NewQuestion )