import React from "react";
import {connect} from "react-redux";
import {isInitialized, isQuestionAnswered} from "../utils/helpers";
import AnswerQuestion from "./AnswerQuestion";
import ViewResult from "./ViewResult";
import {saveAnswer} from "../actions/questionActions";
import Loading from "./Loading";

const ViewQuestion = React.memo((props) => {
    const {questions, users, question_id, authedUser, isInitialized, dispatch} = props

    if(!isInitialized) {
        return (
            <Loading />
        )
    }

    const question = questions[question_id]
    const answered = isQuestionAnswered(question, authedUser)
    const author = users[question.author]

    // handle answer submit and disptach action
    const handleSave = (answer) => {
        dispatch(saveAnswer({ authedUser: authedUser.id, qid: question.id, answer }))
    }

    if(answered) {
        return (
            <ViewResult question={question} authedUser={authedUser} author={author} />
        )
    } else {
        return <AnswerQuestion handleSave={handleSave} author={author} question={question} authedUser={authedUser} />
    }
})

const mapStateToProps = ({questions, authedUser, users}, ownProps) => {
    const { question_id } = ownProps.match.params
    return {
        question_id,
        questions,
        users,
        authedUser,
        isInitialized: isInitialized(questions, users, authedUser)
    }
}

export default connect(mapStateToProps)(ViewQuestion)