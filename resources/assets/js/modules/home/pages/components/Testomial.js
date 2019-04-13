import React from 'react';
import PropTypes from 'prop-types'
import OwlCarousel from 'react-owl-carousel2';

import { withRouter } from "react-router-dom";

const displayName = 'Testomial';
const options = {
    items: 3,
    loop: true,
    margin: 30,
    dots: true,
    autoplayHoverPause: true,
    smartSpeed: 650,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1,
        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
        }
    }
};
const Testomial = () => (
    <section className="testomial-area section-gap">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="menu-content pb-60 col-lg-8">
                    <div className="title text-center">
                        <h1 className="mb-10">Feedback from our real clients</h1>
                        <p>It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <OwlCarousel options={options}>
                    <div className="single-testimonial item">
                        <img className="mx-auto rounded-circle" src="img/t1.png" alt="" />
                            <p className="desc">
                                Accessories Here you can find the best computer accessory for your laptop, monitor,
                                printer, scanner, speaker, projector,
                                hardware and more. laptop
                            </p>
                            <h4>Helena Phillips</h4>
                            <p>
                                CEO at Facebook
                            </p>
                    </div>
                    <div className="single-testimonial item">
                        <img className="mx-auto rounded-circle" src="img/t2.png" alt="" />
                            <p className="desc">
                                It won’t be a bigger problem to find one video game lover in your neighbor. Since the
                                introduction of Virtual Game, it has
                                been achieving great heights so far.
                            </p>
                            <h4>Cordelia Barton</h4>
                            <p>
                                CEO at Twitter
                            </p>
                    </div>
                    <div className="single-testimonial item">
                        <img className="mx-auto rounded-circle" src="img/t3.png" alt="" />
                            <p className="desc">
                                About 64% of all on-line teens say that do things online that they wouldn’t want their
                                parents to know about. 11% of all
                                adult internet users visit dating websites.
                            </p>
                            <h4>Carrie Reese</h4>
                            <p>
                                CEO at Google
                            </p>
                    </div>
                    <div className="single-testimonial item">
                        <img className="mx-auto rounded-circle" src="img/t1.png" alt="" />
                            <p className="desc">
                                Accessories Here you can find the best computer accessory for your laptop, monitor,
                                printer, scanner, speaker, projector,
                                hardware and more. laptop
                            </p>
                            <h4>Helena Phillips</h4>
                            <p>
                                CEO at Facebook
                            </p>
                    </div>
                    <div className="single-testimonial item">
                        <img className="mx-auto rounded-circle" src="img/t2.png" alt="" />
                            <p className="desc">
                                It won’t be a bigger problem to find one video game lover in your neighbor. Since the
                                introduction of Virtual Game, it has
                                been achieving great heights so far.
                            </p>
                            <h4>Cordelia Barton</h4>
                            <p>
                                CEO at Twitter
                            </p>
                    </div>
                    <div className="single-testimonial item">
                        <img className="mx-auto rounded-circle" src="img/t3.png" alt="" />
                            <p className="desc">
                                About 64% of all on-line teens say that do things online that they wouldn’t want their
                                parents to know about. 11% of all
                                adult internet users visit dating websites.
                            </p>
                            <h4>Carrie Reese</h4>
                            <p>
                                CEO at Google
                            </p>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    </section>
);

Testomial.displayName = displayName;
export default Testomial;