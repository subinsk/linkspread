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

export const register = (name, email, password) => async (dispatch) => {
    AuthService.register(name, email, password)
        .then((res) => {
            console.log(res)
            dispatch({
                type: REGISTER_SUCCESS
            });
            dispatch({
                type: SET_MESSAGE,
                payload: regSuccessMsg,
            });
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

export const login = (email, password) => async (dispatch) => {
    AuthService.login(email, password)
        .then((res) => {
            console.log(res)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.user
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
}
export const loginWithGoogle = () => (dispatch) => {
    return AuthService.loginWithGoogle()
        .then((data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });
        },
            (error) => {
                const message =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                dispatch({
                    type: LOGIN_FAIL,
                });

                dispatch({
                    type: SET_MESSAGE,
                    payload: message,
                });

                return Promise.reject();
            }
        );
};

export const logout = () => (dispatch) => {
    AuthService
        .logout()
        .then(() => {
            dispatch({
                type: LOGOUT,
            });
        })
};