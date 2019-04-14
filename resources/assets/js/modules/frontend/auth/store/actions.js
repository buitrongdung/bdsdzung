import {AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_REGISTER} from "./action_types";


export function authLogout (payload) {
    return {
        type: AUTH_LOGOUT,
        payload
    }
}
export function authLogin(payload) {
    return {
        type: AUTH_LOGIN,
        payload,
    };
}
export function authCheck ()
{
    return {
        type: AUTH_CHECK
    }
}

export function register()
{
    return {
        type: AUTH_REGISTER
    }
}
