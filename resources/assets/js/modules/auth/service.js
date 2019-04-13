import Http from '../../utils/Http'
import Transformer from '../../utils/Transformer'
import * as authActions from './store/actions'


export function register(frmRegister) {
    return dispatch => (
        new Promise((resolve, reject) => {
            Http.post('auth/register', frmRegister)
            .then((res) => {
                const data = Transformer.fetch(res.data);
                dispatch(authActions.authLogin(data.accessToken))
                return resolve()
            })
            .catch((err) => {
                console.log(err);
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

export function login (frmLogin)
{
    return dispatch => (
        new Promise((resolve, reject) => {
            Http.post('auth/login', frmLogin)
            .then ((res) => {
                console.log(res);
                const data = Transformer.fetch(res.data);
                dispatch(authActions.authLogin(data.accessToken));
                return resolve();
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
                return reject(data);
            })
        })
    )
}

export function logout ()
{
    return dispatch => (
        Http.delete('auth/logout')
            .then(() => {
                dispatch(authActions.authLogout());
            })
            .catch((err) => {
                console.log(err);
            })
    )
}