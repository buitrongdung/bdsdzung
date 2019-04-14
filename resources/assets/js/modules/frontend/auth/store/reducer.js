import {AUTH_LOGIN, AUTH_CHECK, AUTH_LOGOUT} from "./action_types";
import Http from '../../../../utils/Http'


const initialState = {
    isAuthenticated: false,
    user_type: ''
};

function login(state, payload)
{
    // localStorage.setItem('access_token', payload);
    // Http.defaults.headers.common['Authorization'] = `Dzung ${payload}`;
    // return {
    //     ...state,
    //     isAuthenticated : true
    // }
}

function authCheck(state)
{
    state = Object.assign({}, state, {
        isAuthenticated: !!localStorage.getItem('access_token')
    });

    if (state.isAuthenticated) {
        Http.defaults.headers.common['Authorization'] = `Dzung ${localStorage.getItem('access_token')}`;
    }
    return state;
}

function logout (state)
{
    localStorage.removeItem('access_token');
    return {
        ...state,
        isAuthenticated: false
    }
}


const reducer = (state = initialState, {type, payload = null}) => {
    switch (type) {
        case AUTH_LOGIN:
            return login(state, payload);
        case AUTH_LOGOUT:
            return logout(state);
        case AUTH_CHECK:
            return authCheck(state);
        default:
            return state;
    }
};



export default reducer;