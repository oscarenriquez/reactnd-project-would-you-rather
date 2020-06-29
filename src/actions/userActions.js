import {FETCH_USERS, RECEIVE_USERS} from "../constants/User";


export const receiveUsers = (payload) => ({
    type: RECEIVE_USERS,
    payload
})

export const fetchUsers = {
    type: FETCH_USERS
}