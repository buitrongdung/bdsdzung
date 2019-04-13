import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../../../../../../../../public/img/logo.png'

const displayName = 'LoginForm';

const propTypes = {
    name: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

const Form = ({name, password, handleChange, handleSubmit}) => {
    return (
    <div className="login">
        <form id="frmLogin" className="form-vertical" onSubmit={handleSubmit}>
            <div className="control-group">
                <div className="controls">
                    <div className="main_input_box">
                        <span className="add-on"><i className="icon-user"></i></span>
                        <input type="text"
                               placeholder="Username"
                               id="name"
                               name="name"
                               value={name || ''}
                               onChange={e => handleChange(e.target.name, e.target.value)}
                               required
                               autoFocus
                        />
                    </div>
                </div>
            </div>
            <div className="control-group">
                <div className="controls">
                    <div className="main_input_box">
                        <span className="add-on"><i className="icon-lock"></i></span>
                        <input type="password"
                               placeholder="Password"
                               id="password"
                               name="password"
                               value={password || ''}
                               onChange={e => handleChange(e.target.name, e.target.value)}
                               required
                               autoFocus
                        />
                    </div>
                </div>
            </div>
            <div className="form-actions">
                <span className="pull-left"><a href="#" className="flip-link btn btn-inverse" id="to-recover">Lost password?</a></span>
                <span className="pull-right"><input type="submit" className="btn btn-success" value="Login" /></span>
            </div>
        </form>
        <form id="recoverform" action="#" className="form-vertical">
            <p className="normal_text">Enter your e-mail address below and we will send you instructions how to recover a password.</p>

            <div className="controls">
                <div className="main_input_box">
                    <span className="add-on"><i className="icon-envelope"></i></span><input type="text" placeholder="E-mail address" />
                </div>
            </div>

            <div className="form-actions">
                <span className="pull-left"><a href="#" className="flip-link btn btn-inverse" id="to-login">&laquo; Back to login</a></span>
                <span className="pull-right"><input type="submit" className="btn btn-info" value="Recover" /></span>
            </div>
        </form>
    </div>
    )
};

Form.displayName = displayName;
Form.propTypes = propTypes;

export default Form;