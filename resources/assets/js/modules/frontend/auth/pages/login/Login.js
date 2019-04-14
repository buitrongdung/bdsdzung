import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import ReeValidate from 'ree-validate'

import Form from './components/Form';
import { login } from '../../service'


class Login extends Component
{
    static displayName = 'LoginPage';
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired
    };
    constructor(props) {
        super(props);

        this.validator = new ReeValidate({
           'name': 'required',
           'password': 'required'
        });

        this.state = {
            frmLogin: {
                name: '',
                password: ''
            },
            errors: this.validator.errors,
            fields: this.validator.fields
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange (name, value)
    {
        const {errors} = this.validator;
        errors.remove(name);
        this.setState({
           frmLogin: {...this.state.frmLogin, [name]: value}
        });

        this.validator.validate(name, value)
            .then(() => {
                this.setState({errors})
            })
    }

    handleSubmit (e)
    {
        e.preventDefault();
        const {frmLogin} = this.state;
        const {errors} = this.state;

        this.validator.validateAll(frmLogin)
            .then ((success) => {
                if (success) {
                    this.submit(frmLogin);
                } else {
                    this.setState({errors});
                }
            })
    }

    submit (frmLogin)
    {
        this.props.dispatch(login(frmLogin))
            .catch(({ error, statusCode }) => {
                const { errors } = this.validator;

                if (statusCode === 422) {
                    _.forOwn(error, (message, field) => {
                        errors.add(field, message);
                    });
                } else if (statusCode === 401) {
                    errors.add('password', error);
                }

                this.setState({ errors });
            })
    }

    render () {
        const {name, password} = this.state.frmLogin;
        const props = {
            name,
            password,
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit,
            errors: this.state.errors
        };

        return (
            <div className="login-page">
                <section className="banner-area relative about-banner" id="home">
                    <div className="overlay overlay-bg"></div>
                    <div className="container">
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="about-content col-lg-12">
                                <h1 className="text-white">
                                    Login
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="login-box">
                    <div className="container">
                        <div className="row pt-20">
                            <div className="col-sm-6">
                                <Form {...props} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}

export default Login