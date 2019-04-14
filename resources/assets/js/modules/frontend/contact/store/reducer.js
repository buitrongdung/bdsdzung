import {SEND_CONTACT} from "./action-types";
import Http from '../../../../utils/Http'

const initialState = {};

function sendContact()
{

}

const reducer = (state = initialState, {type, payload = null}) => {
    switch (type) {
        case SEND_CONTACT:
            return sendContact();
        default:
            return state;
    }
};

export default reducer;