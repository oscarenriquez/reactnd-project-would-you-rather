import React, {useState} from "react";
import {connect} from "react-redux";
import { Grid, Tabs, Tab } from "@material-ui/core";
import Questions from "./Questions";
import {isInitialized, isQuestionAnswered} from "../utils/helpers";
import Loading from "./Loading";

/**
 * Home Component
 * @param props
 * @returns {*}
 * @constructor
 */
const Home = (props) => {
    const {questions, authedUser, isInitialized} = props
    const [tab, setTab] = useState(0)

    if (!isInitialized) {
        return (
            <Loading />
        )
    }

    const handleChange = (event, tab) => {
        setTab(tab);
    }

    const handleViewResult = (question) => {
        props.history.push(`questions/${question.id}`)
    }

    const filteredQuestions = () => {
        if(tab === 0) {
            // Unanswered questions
            return Object.keys(questions)
                .map(k => questions[k])
                .filter(question => {
                    return !isQuestionAnswered(question, authedUser)
                })

        } else {
            // Answered questions
            return Object.keys(questions)
                .map(k => questions[k])
                .filter(question => {
                    return isQuestionAnswered(question, authedUser)
                })
        }
    }

    return (
        <Grid container justify={"center"}>
            <Grid item xs={8}>
                <div className="questions">
                    <Tabs
                        value={tab}
                        onChange={handleChange}
                        variant="fullWidth"
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab label="Unanswered Questions" value={0} />
                        <Tab label="Answered Questions" value={1}/>
                    </Tabs>
                    <Questions questions={filteredQuestions()} handleViewResult={handleViewResult}/>
                </div>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = ({questions, authedUser, users}) => {
    return {
        questions,
        authedUser,
        isInitialized: isInitialized(questions, users, authedUser)
    }
}

export default connect(mapStateToProps)(Home)