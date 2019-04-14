import Http from '../../../utils/Http'
import Transformer from '../../../utils/Transformer'
import * as sendContactAction from './store/action'

export function sendContact (params)
{
    return dispatch => (
        new Promise((resolve, reject) => {
            console.log(params);
            Http.post('contact/insert', Transformer.send(params))
                .then((res) => {
                    const data = Transformer.fetch(res.data);
                    dispatch(sendContactAction.sendContact(data));
                    return resolve;
                })
                .catch((err) => {
                    const statusCode = err.response.status;
                    const data = {
                        error: null,
                        statusCode,
                    };
                    if (statusCode === 422) {
                        const resetErrors = {
                            errors: err.response.data.errors,
                            replace: false,
                            searchStr: '',
                            replaceStr: '',
                        };
                        data.error = Transformer.resetValidationFields(resetErrors);
                    } else if (statusCode === 401) {
                        data.error = err.response.data.message;
                    }
                    console.log(data);
                    return reject(data);
                })
        })
    )
}