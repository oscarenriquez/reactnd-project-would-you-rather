import React from "react";
import {connect} from "react-redux";
import Leader from "./Leader";
import {isInitialized} from "../utils/helpers";
import Loading from "./Loading";
import Login from "./Login";

const LeaderBoard = (props) => {
    const {users, isInitialized, authedUser} = props

    if(!isInitialized) {
        return (
            <Loading />
        )
    }

    if(!authedUser){
        return (
            <Login />
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
    authedUser,
    isInitialized: isInitialized(questions, users, true)
})

export default connect(mapStateToProps) ( LeaderBoard )