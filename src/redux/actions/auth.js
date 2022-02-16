import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from './types'
import { regSuccessMsg } from '../../utilities/messages';

import { AuthService } from '../../services/authservice'

export const register = (name, email, password, navigate) => async (dispatch) => {
    AuthService.register(name, email, password)
        .then((res) => {
            dispatch({
                type: REGISTER_SUCCESS
            });
            dispatch({
                type: SET_MESSAGE,
                payload: regSuccessMsg,
            });
            navigate('/auth/login', { replace: true })
        })
        .catch((error) => {
            dispatch({
                type: REGISTER_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: error.message,
            });
        })
};

export const login = (email, password, navigate) => async (dispatch) => {
    AuthService.login(email, password)
        .then((res) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res
            });
            navigate('/dashboard', { replace: true })
        })
        .catch((error) => {
            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: error.message,
            });
        })
}
export const loginWithGoogle = () => (dispatch) => {
    AuthService.loginWithGoogle()
        .then((data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });
        })
        .catch((error) => {
            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: error.message,
            });
        })
};

export const logout = (navigate) => (dispatch) => {
    AuthService
        .logout()
        .then(() => {
            navigate('/', { replace: true })
            dispatch({
                type: LOGOUT,
            });
        })
};