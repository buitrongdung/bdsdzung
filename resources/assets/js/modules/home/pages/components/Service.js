import React from 'react';
import PropTypes from 'prop-types'

import { withRouter } from "react-router-dom";

const displayName = 'Service';

const Service = () => (
    <section className="service-area section-gap">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12 pb-40 header-text text-center">
                    <h1 className="pb-10">What we Offer to our Customers</h1>
                    <p>
                        Who are in extremely love with eco friendly system.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="single-service">
                        <img className="img-fluid" src="img/s1.jpg" alt="" />
                        <a href="#"><h4>Popular Use Of The Internet</h4></a>
                        <p>
                            inappropriate behavior is oftenlaug hed off as “boys will be boys,” women face higher conduct women face higher conduct.
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-service">
                        <img className="img-fluid" src="img/s2.jpg" alt="" />
                        <a href="#"><h4>Protective Preventative</h4></a>
                        <p>
                            inappropriate behavior is oftenlaug hed off as “boys will be boys,” women face higher conduct women face higher conduct.
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-service">
                        <img className="img-fluid" src="img/s3.jpg" alt="" />
                        <a href="#"><h4>Download Free Songs</h4></a>
                        <p>
                            inappropriate behavior is oftenlaug hed off as “boys will be boys,” women face higher conduct women face higher conduct.
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-service">
                        <img className="img-fluid" src="img/s4.jpg" alt="" />
                        <a href="#"><h4>A Discount Toner Cartridge</h4></a>
                        <p>
                            inappropriate behavior is oftenlaug hed off as “boys will be boys,” women face higher conduct women face higher conduct.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

Service.displayName = displayName;

export default Service;