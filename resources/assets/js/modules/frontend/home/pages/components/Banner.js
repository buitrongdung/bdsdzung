import React from 'react';
import PropTypes from 'prop-types'
import Slider from 'ion-rangeslider'
import SeachBox from './SeachBox'
import { withRouter } from "react-router-dom";

const displayName = 'Banner';

const Banner = () => (
    <section className="home-banner-area relative" id="home">
        <div className="overlay overlay-bg"></div>
        <div className="container">
            <div className="row fullscreen align-items-end justify-content-center">
                <div className="banner-content col-lg-12 col-md-12">
                    <h1>We’re Real Estate King</h1>
                    <SeachBox/>
                </div>
            </div>
        </div>
    </section>
);

Banner.displayName = displayName;
export default Banner;