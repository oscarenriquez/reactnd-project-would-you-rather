import {FETCH_USERS, RECEIVE_USERS} from "../constants/User";

/**
 * Action Creator receiveUsers
 * @param payload
 * @returns {{payload: *, type: string}}
 */
export const receiveUsers = (payload) => ({
    type: RECEIVE_USERS,
    payload
})

/**
 * Action
 * @type {{type: string}}
 */
export const fetchUsers = {
    type: FETCH_USERS
}