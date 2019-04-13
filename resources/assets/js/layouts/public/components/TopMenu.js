import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const displayName = 'PublicTopMenu';
const toggle = {
    display: 'none'
}

const PublicTopMenu = () => (
    <header className="default-header">
        <div className="menutop-wrap">
            <div className="menu-top container">
                <div className="d-flex justify-content-end align-items-center">
                    <ul className="list">
                        <li><a href="tel:++880 1234 654 953">+880 1234 654 953</a></li>
                        <li><a href="#" className="genric-btn primary"><i className="fa fa-plus" aria-hidden="true"></i>&nbsp;Đăng tin</a></li>
                        <li><a href="#">login / register</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="main-menu">
            <div className="container">
                <div className="row align-items-center justify-content-between d-flex">
                    <div id="logo">
                        <a href="index.html"><img src="img/logo.png" alt="" title="" /></a>
                    </div>
                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li className="menu-active"><a href="index.html">home</a></li>
                            <li><a href="properties.html">properties</a></li>
                            <li><a href="about.html">about</a></li>
                            <li className="menu-has-children"><a href="">blog</a>
                                <ul>
                                    <li><a href="blog-home.html">Blog Home</a></li>
                                    <li><a href="single-blog.html">Blog Single</a></li>
                                </ul>
                            </li>
                            <li className="menu-has-children"><a href="">Pages</a>
                                <ul>
                                    <li><a href="agents.html">Agents</a></li>
                                    <li><a href="elements.html">Elements</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
)
PublicTopMenu.displayName = displayName;

export default PublicTopMenu;