import React, {Component}from 'react';
import ReeValidate from 'ree-validate'
import PropTypes from "prop-types";
import { withRouter, Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

import FormContact from './components/FormContact'

const styleMap = {
    width: '100%',
    height: '445px'
}

const buttonStyle = {
    textAlign: 'left'
}

class Contact extends Component
{

    componentDidMount()
    {

    }
    handleSubmit () {

    }

    render() {
        return (
            <div id="contact-page">
                <section className="banner-area relative" id="home">
                    <div className="overlay overlay-bg"></div>
                    <div className="container">
                        <div className="row d-flex text-center align-items-center justify-content-center">
                            <div className="about-content col-lg-12">
                                <p className="text-white link-nav"><Link to={'/'}>Trang chủ</Link>
                                    <span className="lnr lnr-arrow-right"></span> <Link to={'/lien-he'}>Liên hệ</Link></p>
                                <h1 className="text-white">
                                    Liên hệ
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-page-area section-gap">
                    <div className="container">
                        <div className="map-wrap" id="map"></div>
                        <div className="row mt-80">
                            <div className="col-lg-3">
                                <div className="contact_info">
                                    <div className="info_item">
                                        <i className="lnr lnr-home"></i>
                                        <h6>California, United States</h6>
                                        <p>Santa monica bullevard</p>
                                    </div>
                                    <div className="info_item">
                                        <i className="lnr lnr-phone-handset"></i>
                                        <h6><a href="#">00 (440) 9865 562</a></h6>
                                        <p>Mon to Fri 9am to 6 pm</p>
                                    </div>
                                    <div className="info_item">
                                        <i className="lnr lnr-envelope"></i>
                                        <h6><a href="#">support@colorlib.com</a></h6>
                                        <p>Send us your query anytime!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                               <FormContact/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default withRouter(Contact);