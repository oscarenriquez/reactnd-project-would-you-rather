import React from "react";
import {connect} from "react-redux";
import Leader from "./Leader";

const LeaderBoard = (props) => {
    const {users} = props
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
                            <Leader user={user} />
                        )
                })
            }
        </div>
    )
}

const mapStateToProps = ({users}) => ({
    users
})

export default connect(mapStateToProps) ( LeaderBoard )