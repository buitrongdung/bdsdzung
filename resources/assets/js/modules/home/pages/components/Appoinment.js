import React from 'react';
import PropTypes from 'prop-types'
import ReeValidate from 'ree-validate'

import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

import { withRouter } from "react-router-dom";

const displayName = 'Appoinment';

const propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    email: PropTypes.string,
    birthDate: PropTypes.object.isRequired,
    appoinmentDate: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    dateChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}
const Appoinment = ({name, phone, email, message, birthDate, appoinmentDate, dateChange, handleChange, handleSubmit, errors}) => (
    <section className="appoinment-area section-gap relative">
        <div className="container">
            <div className="row align-items-center justify-content-end">
                <div className="col-lg-6 no-padding appoinment-right">
                    <h1 className="text-white">
                        Book an <br />
                        Appoinment
                    </h1>
                    <form className="appoinment-form" id="myForm" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-12 d-flex flex-column">
                                <input id="name"
                                       name="name"
                                       placeholder="Patient Name"
                                       className="form-control mt-20"
                                       required=""
                                       type="text"
                                       value={name||''}
                                       onChange={e=>handleChange(e.target.name, e.target.value)}
                                />
                                {errors.has('name') && <div className="invalid-feedback">{errors.first('name')}</div>}
                            </div>
                            <div className="col-lg-6 d-flex flex-column">
                                <input name="phone" id="phone" placeholder="Phone" className="form-control mt-20" required="" type="text"
                                       value={phone||''}
                                       onChange={e=>handleChange(e.target.name, e.target.value)}
                                />
                            </div>
                            <div className="col-lg-6 d-fl   ex flex-column">
                                <input name="email"
                                       id="email"
                                       placeholder="Email address" className="form-control mt-20" type="email"
                                       value={email||''}
                                       onChange={e=>handleChange(e.target.name, e.target.value)}
                                />
                            </div>
                            <div className="col-lg-6 d-flex flex-column">
                                <DatePicker
                                    name="birthDate"
                                    className="form-control mt-20"
                                    placeholderText="Date of birth"
                                    selected={birthDate}
                                    onChange={e=>handleChange(e.target.name, e.target.value)}
                                    peekNextMonth
                                    showMonthDropdown
                                    showYearDr  opdown
                                    dropdownMode="select"
                                    maxDate={moment()}
                                />
                            </div>
                            <div className="col-lg-6 d-flex flex-column">
                                <DatePicker
                                    name="appoinmentDate"
                                    className="form-control mt-20"
                                    placeholderText="Appoinment date"
                                    selected={appoinmentDate}
                                    onChange={e=>handleChange(e.target.name, e.target.value)}
                                    minDate={moment()}
                                    maxDate={moment().add(5, "months")}
                                    showDisabledMonthNavigation
                                />
                            </div>
                            <div className="col-lg-12 flex-column">
                                <textarea  rows="5" className="form-control mt-20"
                                           name="message"
                                           id="message"
                                           placeholder="Messege"
                                           value={message || ''}
                                           onChange={e=>handleChange(e.target.name, e.target.value)}
                                           required
                                ></textarea>
                            </div>

                            <div className="col-lg-12 d-flex justify-content-end send-btn">
                                <button className="primary-btn primary mt-20 text-uppercase " type="submit">Confirm booking</button>
                            </div>

                            <div className="alert-msg"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
);

Appoinment.displayName = displayName;
Appoinment.propTypes = propTypes

export default Appoinment;