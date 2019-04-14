import React from 'react'
import PropTypes from 'prop-types'

const displayName = 'Contact';
const propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    description: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const FormContact= ({handleSubmit, handleChange, name, email, subject, description, errors }) => {
    return (
        <form className="row contact_form" onSubmit={handleSubmit} id="frmContact" noValidate>
            <div className="col-md-6">
                <div className="form-group">
                    <input type="text" id="name" name="name" placeholder="Nhập tên của bạn"
                        className={`form-control ${errors.has('name') && 'is-invalid'}`}
                        value={name || ''}
                        onChange={e => handleChange(e.target.name, e.target.value)}
                        required
                        autoFocus
                    />
                    {errors.has('name') && <div className="invalid-feedback">{errors.first('name')}</div>}
                </div>
                <div className="form-group">
                    <input type="email" id="email" name="email" placeholder="Nhập email của bạn"
                           className={`form-control ${errors.has('email') && 'is-invalid'}`}
                           value={email || ''}
                           onChange={e => handleChange(e.target.name, e.target.value)}
                           required
                           autoFocus
                    />
                    {errors.has('email') && <div className="invalid-feedback">{errors.first('email')}</div>}

                </div>
                <div className="form-group">
                    <input type="text" id="subject" name="subject" placeholder="Nhập tiêu đề của bạn"
                           className={`form-control ${errors.has('subject') && 'is-invalid'}`}
                           value={subject || ''}
                           onChange={e => handleChange(e.target.name, e.target.value)}
                           required
                           autoFocus
                    />
                    {errors.has('subject') && <div className="invalid-feedback">{errors.first('subject')}</div>}

                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <textarea name="description" id="description" rows="1" placeholder="Nhập nội dung của bạn"
                              className='form-control'
                              value={description || ''}
                        onChange={e => handleChange(e.target.name, e.target.value)}
                    />
                </div>
            </div>
            <div className="col-md-12 text-right">
                <button type="submit" value="submit" className="btn primary-btn" disabled={errors.any()}>Gửi
                </button>
            </div>
        </form>
    )
};
FormContact.displayName = displayName;
FormContact.protoTypes = propTypes;

export default FormContact;