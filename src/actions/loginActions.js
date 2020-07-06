import {LOGIN, LOGOUT} from "../constants/Login";

/**
 * Action creator to perform Login action
 * @param user
 * @returns {{type: string, user: *}}
 */
export const login = (user) => ({
 type: LOGIN,
 user
})

/**
 * Action creator to perform Log out
 * @type {{type: string}}
 */
export const logout = {
 type: LOGOUT
}