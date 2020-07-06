import React from "react";
import {connect} from "react-redux";
import Leader from "./Leader";
import {isInitialized} from "../utils/helpers";
import Loading from "./Loading";

const LeaderBoard = (props) => {
    const {users, isInitialized} = props

    if(!isInitialized) {
        return (
            <Loading />
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