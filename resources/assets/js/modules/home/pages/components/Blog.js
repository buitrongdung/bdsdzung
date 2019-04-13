import React from 'react';
import PropTypes from 'prop-types'

import { withRouter } from "react-router-dom";

const displayName = '';

const Blog  = () => (
    <section className="blog-area section-gap" id="blog">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="menu-content pb-70 col-lg-8">
                    <div className="title text-center">
                        <h1 className="mb-10">Latest From Our Blog</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 single-blog">
                    <div className="thumb">
                        <img className="img-fluid" src="img/b1.jpg" alt="" />
                    </div>
                    <p className="date">10 Jan 2018</p>
                    <a href="blog-single.html"><h4>Addiction When Gambling
                        Becomes A Problem</h4></a>
                    <p>
                        inappropriate behavior ipsum dolor sit amet, consectetur.
                    </p>
                    <div className="meta-bottom d-flex justify-content-between">
                        <p><span className="lnr lnr-heart"></span> 15 Likes</p>
                        <p><span className="lnr lnr-bubble"></span> 02 Comments</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 single-blog">
                    <div className="thumb">
                        <img className="img-fluid" src="img/b2.jpg" alt="" />
                    </div>
                    <p className="date">10 Jan 2018</p>
                    <a href="blog-single.html"><h4>Addiction When Gambling
                        Becomes A Problem</h4></a>
                    <p>
                        inappropriate behavior ipsum dolor sit amet, consectetur.
                    </p>
                    <div className="meta-bottom d-flex justify-content-between">
                        <p><span className="lnr lnr-heart"></span> 15 Likes</p>
                        <p><span className="lnr lnr-bubble"></span> 02 Comments</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 single-blog">
                    <div className="thumb">
                        <img className="img-fluid" src="img/b3.jpg" alt="" />
                    </div>
                    <p className="date">10 Jan 2018</p>
                    <a href="blog-single.html"><h4>Addiction When Gambling
                        Becomes A Problem</h4></a>
                    <p>
                        inappropriate behavior ipsum dolor sit amet, consectetur.
                    </p>
                    <div className="meta-bottom d-flex justify-content-between">
                        <p><span className="lnr lnr-heart"></span> 15 Likes</p>
                        <p><span className="lnr lnr-bubble"></span> 02 Comments</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 single-blog">
                    <div className="thumb">
                        <img className="img-fluid" src="img/b4.jpg" alt="" />
                    </div>
                    <p className="date">10 Jan 2018</p>
                    <a href="blog-single.html"><h4>Addiction When Gambling
                        Becomes A Problem</h4></a>
                    <p>
                        inappropriate behavior ipsum dolor sit amet, consectetur.
                    </p>
                    <div className="meta-bottom d-flex justify-content-between">
                        <p><span className="lnr lnr-heart"></span> 15 Likes</p>
                        <p><span className="lnr lnr-bubble"></span> 02 Comments</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

Blog.displayName = displayName;
export default Blog;