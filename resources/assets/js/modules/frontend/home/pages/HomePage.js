import React from 'react';
import PropTypes from 'prop-types'
import $ from 'jquery'
import ReeValidate from 'ree-validate'
import moment from 'moment';

import Banner from './components/Banner';
import OpenHour from './components/OpenHour';
import Service from './components/Service';
import HomeAbout from './components/HomeAbout';
import Testomial from './components/Testomial';
import Team from './components/Team';
import Feature from './components/Feature';
import Appoinment from './components/Appoinment';
import Blog from './components/Blog';
import {sendAppoinment} from "../service";

class HomePage extends React.Component
{
    static displayName = 'HomePage';
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor (props) {
        super(props)

        this.validator = new ReeValidate({
            'name': 'required',
            'phone': 'required',
            'email': 'required|email',
            'message': 'required'
        });

        this.state = {
            frmAppoinment: {
                name: '',
                phone: '',
                birthDate: moment(),
                appoinmentDate: moment(),
                email: '',
                message: ''
            },
            // birthDate: moment(),
            // appoinmentDate: moment(),
            errors: this.validator.errors,
            fields: this.validator.fields
        };

        this.handleChange = this.handleChange.bind(this);
        this.dateChange = this.dateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(name, value) {
        const {errors} = this.validator;

        errors.remove(name);
        this.setState({
            frmAppoinment: {...this.state.frmAppoinment, [name]: value}
        });
        console.log(this.state.frmAppoinment);
        this.validator.validate(name, value)
            .then(() => {errors});
    }

    dateChange(date)
    {
        this.setState({
           birthDate: date
        });

        console.log(this.state.birth);
    }

    handleSubmit(e)
    {
        // e.preventDefault();
        const {frmAppoinment} = this.state;
        const { errors } = this.state;

        this.validator.validateAll()
            .then((success) => {
                if (success) {
                    this.submit(frmAppoinment);
                } else {
                    this.setState({errors});
                }
            });
    }

    submit(frmAppoinment)
    {
        // console.log(frmAppoinment);
        this.props.dispatch(sendAppoinment(frmAppoinment))
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

    componentDidMount()
    {

        let window_height = window.innerHeight;

        $(".fullscreen").css("height", window_height);

    }

    render(){
        const {name, phone, email, message, appoinmentDate, birthDate} = this.state.frmAppoinment;
        const props = {
            name,
            phone,
            email,
            message,
            appoinmentDate,
            birthDate,
            handleSubmit: this.handleSubmit,
            handleChange: this.handleChange,
            errors: this.state.errors,
            moment: moment()
        };
        return (
        <div>

            <Banner/>
            <Testomial/>

        </div>
        )
    }
}

export default HomePage;
