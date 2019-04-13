import React from 'react';
import PropTypes from 'prop-types'

import { withRouter } from "react-router-dom";

const displayName = 'Team';

const Team = () => (
    <section className="team-area section-gap" id="team">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="menu-content pb-70 col-lg-8">
                    <div className="title text-center">
                        <h1 className="mb-10">Our Consultants</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center d-flex align-items-center">
                <div className="col-lg-3 col-md-6 single-team">
                    <div className="thumb">
                        <img className="img-fluid" src="img/t1.jpg" alt="" />
                        <div className="align-items-end justify-content-center d-flex">
                            <p>
                                inappropriate behavior
                            </p>
                            <h4>Andy Florence</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 single-team">
                    <div className="thumb">
                        <img className="img-fluid" src="img/t2.jpg" alt="" />
                        <div className="align-items-end justify-content-center d-flex">
                            <p>
                                inappropriate behavior
                            </p>
                            <h4>Andy Florence</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 single-team">
                    <div className="thumb">
                        <img className="img-fluid" src="img/t3.jpg" alt="" />
                        <div className="align-items-end justify-content-center d-flex">
                            <p>
                                inappropriate behavior
                            </p>
                            <h4>Andy Florence</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 single-team">
                    <div className="thumb">
                        <img className="img-fluid" src="img/t4.jpg" alt="" />
                        <div className="align-items-end justify-content-center d-flex">
                            <p>
                                inappropriate behavior
                            </p>
                            <h4>Andy Florence</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

Team.displayName = displayName;
export default Team;