import React, {useState} from "react";
import {connect} from "react-redux";
import { Grid, Tabs, Tab } from "@material-ui/core";
import Questions from "./Questions";

/**
 * Home Component
 * @param props
 * @returns {*}
 * @constructor
 */
const Home = (props) => {
    const {isAuthenticated, questions, user} = props
    const [tab, setTab] = useState(0)

    if(!isAuthenticated) {
        props.history.push('Login')
    }

    const handleChange = (event, tab) => {
        setTab(tab);
    }

    const handleViewResult = (question) => {
        if(question.answered) {
            props.history.push(`ViewResult/${question.id}`)
        } else {
            props.history.push(`AnswerQuestion/${question.id}`)
        }
    }

    const filteredQuestions = () => {
        if(tab === 0) {
            return Object.keys(questions)
                .map(k => questions[k])
                .filter(question => {
                    if (question.author !== user && question.optionOne.votes.indexOf(user) < 0 &&
                        question.optionTwo.votes.indexOf(user) < 0
                    ) {
                        return true
                    }
                })
                .map(q => {
                    return {
                        ...q,
                        answered: false
                    }
                })
        } else {
            return Object.keys(questions)
                .map(k => questions[k])
                .filter(question => {
                    if (question.optionOne.votes.indexOf(user) >= 0 ||
                        question.optionTwo.votes.indexOf(user) >= 0
                    ) {
                        return true
                    }
                })
                .map(q => {
                    return {
                        ...q,
                        answered: true
                    }
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

const mapStateToProps = ({questions, user}) => {
    return {
        questions,
        isAuthenticated: user !== '',
        user
    }
}

export default connect(mapStateToProps)(Home)