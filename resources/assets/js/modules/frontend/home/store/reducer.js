import {SEND_APPPOINMENT} from "./action-types";

const initialState = {
    isAuthenticated: false,

};

function sendAppoinment(state, payload)
{

}

const reducer = (state = initialState, {type, payload = null}) => {
    switch (type) {
        case SEND_APPPOINMENT:
            return sendAppoinment(state, payload);
        default:
            return state;
    }
};



export default reducer;