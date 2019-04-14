import React, {Component} from 'react'
import ReeValidate from 'ree-validate'
import PropTypes from "prop-types";
import _ from 'lodash'
import { withRouter, Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'



import Form from './components/Form'
import { register } from "../../service";

class Register extends Component
{
    static displayName = 'RegisterPage';
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired
    };
    constructor(props)
    {
        super(props);

        this.validator = new ReeValidate({
            'name': 'required',
            'email': 'required|email',
            'firstName': 'required',
            'lastName': 'required',
            'password': 'required',
            'passConfirm': 'required'
        });

        this.state = {
            formRegister: {
                name: '',
                email: '',
                firstName: '',
                lastName: '',
                password: '',
                passConfirm: ''
            },
            errors: this.validator.errors,
            fields: this.validator.fields
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(name, value)
    {
        const { errors } = this.validator;

        errors.remove(name);
        this.setState({
            formRegister: {...this.state.formRegister, [name]: value}
        });

        this.validator.validate(name, value)
        .then(() => {
            this.setState({errors});
        })
    }

    handleSubmit(e)
    {
        e.preventDefault();
        const { formRegister } = this.state;
        const { errors } = this.state;

        this.validator.validateAll(formRegister)
            .then((success) => {
                if (success) {
                    this.submit(formRegister);
                } else {
                    this.setState({errors});
                }
            })

    }

    submit(frmRegister)
    {
        this.props.dispatch(register(frmRegister))
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

    render ()
    {
        if(this.props.isAuthenticated) {
            return <Redirect to="/"/>
        } else {

        }
        const {name, email, lastName, firstName, password, passConfirm} = this.state.formRegister;
        const props = {
            name,
            email,
            firstName,
            lastName,
            password,
            passConfirm,
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit,
            errors: this.state.errors
        };
        return (
            <div className="container py-5">
                <Link to="/contact" className="navbar-brand">Contact Us</Link>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card has-shadow">
                            <div className="card-body">
                                <Form {...props}  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default withRouter(Register)