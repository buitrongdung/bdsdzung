import React from 'react'
import PropTypes from 'prop-types'

const displayName = 'Contact';
const propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

const FormContact= ({handleSubmit }) => {
    return (
        <form className="row contact_form" onSubmit={handleSubmit} method="post" id="contactForm" noValidate>
            <div className="col-md-6">
                <div className="form-group">
                    <input type="text" className="form-control" id="name" name="name"
                           placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" id="email" name="email"
                           placeholder="Enter email address" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="subject" name="subject"
                           placeholder="Enter Subject" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <textarea className="form-control" name="message" id="message" rows="1" placeholder="Enter Message" />
                </div>
            </div>
            <div className="col-md-12 text-right">
                <button type="submit" value="submit" className="btn primary-btn">Send Message
                </button>
            </div>
        </form>
    )
};
FormContact.displayName = displayName;
FormContact.protoTypes = propTypes;

export default FormContact;