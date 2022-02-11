import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from './types'

import AuthService from '../../services/AuthService'

export const register = (name, email, password) => (dispatch) => {
    return AuthService.register(name, email, password)
        .then((res) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });
            dispatch({
                type: REGISTER_SUCCESS,
            });
        })

}