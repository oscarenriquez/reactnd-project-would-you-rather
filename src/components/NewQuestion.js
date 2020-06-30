import React, {useState} from "react";
import {Card, CardContent, CardHeader, CardMedia, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import {addQuestion} from "../actions/questionActions";

const NewQuestion = (props) => {
    const {authedUser} = props
    const [optionOneText, setOptionOneText] = useState('')
    const [optionTwoText, setOptionTwoText] = useState('')

    const handleAddQuestion = () => {
        if (optionTwoText && optionOneText) {
            props.dispatch(addQuestion({ optionOneText, optionTwoText, author: authedUser }))
            props.history.push('Home')
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

const mapStateToProps = ({user}) => {
    return {
        authedUser: user
    }
}

export default connect (mapStateToProps) ( NewQuestion )