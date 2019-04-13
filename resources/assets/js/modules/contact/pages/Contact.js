import React, {Component}from 'react';
import ReeValidate from 'ree-validate'
import PropTypes from "prop-types";
import _ from 'lodash'
import { withRouter, Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

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
        if (document.getElementById("map")) {
            google.maps.event.addDomListener(window, 'load', init);

            function init() {
                var mapOptions = {
                    zoom: 11,
                    center: new google.maps.LatLng(40.6700, -73.9400), // New York
                    styles: [{
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#e9e9e9"
                        }, {
                            "lightness": 17
                        }]
                    }, {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#f5f5f5"
                        }, {
                            "lightness": 20
                        }]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#ffffff"
                        }, {
                            "lightness": 17
                        }]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "color": "#ffffff"
                        }, {
                            "lightness": 29
                        }, {
                            "weight": 0.2
                        }]
                    }, {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#ffffff"
                        }, {
                            "lightness": 18
                        }]
                    }, {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#ffffff"
                        }, {
                            "lightness": 16
                        }]
                    }, {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#f5f5f5"
                        }, {
                            "lightness": 21
                        }]
                    }, {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#dedede"
                        }, {
                            "lightness": 21
                        }]
                    }, {
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                            "visibility": "on"
                        }, {
                            "color": "#ffffff"
                        }, {
                            "lightness": 16
                        }]
                    }, {
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "saturation": 36
                        }, {
                            "color": "#333333"
                        }, {
                            "lightness": 40
                        }]
                    }, {
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#f2f2f2"
                        }, {
                            "lightness": 19
                        }]
                    }, {
                        "featureType": "administrative",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#fefefe"
                        }, {
                            "lightness": 20
                        }]
                    }, {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "color": "#fefefe"
                        }, {
                            "lightness": 17
                        }, {
                            "weight": 1.2
                        }]
                    }]
                };
                var mapElement = document.getElementById('map');
                var map = new google.maps.Map(mapElement, mapOptions);
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(10.822942, 106.685319),
                    map: map,
                    title: 'Snazzy!'
                });
            }
        }
    }

    render() {
        return (
            <div>
                <section className="banner-area relative about-banner" id="home">
                    <div className="overlay overlay-bg"></div>
                    <div className="container">
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="about-content col-lg-12">
                                <h1 className="text-white">
                                    Contact Us
                                </h1>
                                <p className="text-white link-nav">
                                    <Link to="/">Home</Link>
                                    <span className="lnr lnr-arrow-right"></span>
                                    <Link to="/contact">Contact Us</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-page-area section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="map-wrap" style={styleMap} id="map"></div>
                            <div className="col-lg-4 d-flex flex-column address-wrap">
                                <div className="single-contact-address d-flex flex-row">
                                    <div className="icon">
                                        <span className="lnr lnr-home"></span>
                                    </div>
                                    <div className="contact-details">
                                        <h5>Binghamton, New York</h5>
                                        <p>
                                            4343 Hinkle Deegan Lake Road
                                        </p>
                                    </div>
                                </div>
                                <div className="single-contact-address d-flex flex-row">
                                    <div className="icon">
                                        <span className="lnr lnr-phone-handset"></span>
                                    </div>
                                    <div className="contact-details">
                                        <h5>00 (958) 9865 562</h5>
                                        <p>Mon to Fri 9am to 6 pm</p>
                                    </div>
                                </div>
                                <div className="single-contact-address d-flex flex-row">
                                    <div className="icon">
                                        <span className="lnr lnr-envelope"></span>
                                    </div>
                                    <div className="contact-details">
                                        <h5>support@colorlib.com</h5>
                                        <p>Send us your query anytime!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <form className="form-area contact-form text-right" id="myForm" action="mail.php" method="post">
                                    <div className="row">
                                        <div className="col-lg-6 form-group">
                                            <input name="name" placeholder="Enter your name" className="common-input mb-20 form-control" required="" type="text" />

                                                <input name="email" placeholder="Enter email address" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" className="common-input mb-20 form-control" required="" type="email" />

                                                    <input name="subject" placeholder="Enter subject" className="common-input mb-20 form-control" required="" type="text" />
                                        </div>
                                        <div className="col-lg-6 form-group">
                                            <textarea className="common-textarea form-control" name="message" placeholder="Enter Messege" required=""></textarea>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="alert-msg" style={buttonStyle}></div>
                                            <button className="genric-btn primary circle" >Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default withRouter(Contact);