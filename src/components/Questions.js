import React from "react";
import PropTypes from "prop-types";
import Question from "./Question";

const Questions = (props) => {
    return (
        <ul className="question-list">
            {
                props.questions.map(q => (<Question className="question" key={q.id} question={q} handleViewResult={props.handleViewResult}/>))
            }
        </ul>
    )
}

Questions.propTypes = {
    questions: PropTypes.array
}

export default Questions