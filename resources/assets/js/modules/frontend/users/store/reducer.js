import User from '../User'
import {LIST_USER} from "./action-types";

const initialState = Object.assign({}, new User({}));

const reducer = (state = initialState, {type, payload = null}) => {
    switch (type) {
        case LIST_USER:
            return list(state, payload)
        default:
            return state
    }

}

function list (state, payload)
{
    state = Object.assign({}, payload)
    return state
}

export default reducer