import React from 'react';
import PropTypes from 'prop-types'

import { withRouter } from "react-router-dom";

const displayName = 'HomeAbout';

const HomeAbout = () => (
    <section className="home-about-area section-gap relative">
        <div className="container">
            <div className="row align-items-center justify-content-end">
                <div className="col-lg-6 no-padding home-about-right">
                    <h1 className="text-white">
                        Who we are <br />
                        to Serve the nation
                    </h1>
                    <p>
                        inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.
                    </p>
                    <div className="row no-gutters">
                        <div className="single-services col">
                            <span className="lnr lnr-diamond"></span>
                            <a href="#">
                                <h4 className="text-white">Expert Services</h4>
                            </a>
                            <p>
                                Usage of the Internet is becoming more common due to rapid advancement of technology.
                            </p>
                        </div>
                        <div className="single-services col">
                            <span className="lnr lnr-phone"></span>
                            <a href="#">
                                <h4 className="text-white">Great Support</h4>
                            </a>
                            <p>
                                Usage of the Internet is becoming more common due to rapid advancement of technology.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

HomeAbout.displayName = displayName;
export default HomeAbout;