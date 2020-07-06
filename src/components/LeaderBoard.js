import React from "react";
import {connect} from "react-redux";
import Leader from "./Leader";
import CircularProgress from "@material-ui/core/CircularProgress";
import {isInitialized} from "../utils/helpers";

const LeaderBoard = (props) => {
    const {users, isInitialized} = props

    if(!isInitialized) {
        return (
            <CircularProgress />
        )
    }

    const getTotal = (user) => {
        return Object.keys(user.answers).length +
        user.questions.length
    }
    return (
        <div className="content">
            {
                Object.keys(users)
                    .map((key) => {
                        return users[key]
                    }).sort((a, b) => {
                        return getTotal(b) - getTotal(a)
                    }).map((user) => {
                        return (
                            <Leader key={user.id} user={user} />
                        )
                })
            }
        </div>
    )
}

const mapStateToProps = ({users, questions, authedUser}) => ({
    users,
    isInitialized: isInitialized(questions, users, authedUser)
})

export default connect(mapStateToProps) ( LeaderBoard )