import {LOGIN} from "../constants/Login";

/**
 * Action creator for perform action
 * @param user
 * @returns {{type: string, user: *}}
 */
export const login = (user) => ({
 type: LOGIN,
 user
})