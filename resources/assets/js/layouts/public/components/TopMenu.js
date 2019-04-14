import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const displayName = 'PublicTopMenu';
const toggle = {
    display: 'none'
};

const PublicTopMenu = () => (
    <header className="default-header">
        <div className="menutop-wrap">
            <div className="menu-top container">
                <div className="d-flex justify-content-end align-items-center">
                    <ul className="list nav">
                        <li><a href="tel:++880 1234 654 953">+880 1234 654 953</a></li>
                        <li><a href="#" className="genric-btn primary"><i className="fa fa-plus" aria-hidden="true"></i>&nbsp;Đăng tin</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Đăng nhập <b className="caret"></b></a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to={'/dang-nhap'}>Đăng nhập</Link>
                                </li>
                                <li>
                                    <Link to={'/dang-ky'}>Đăng ký</Link>
                                </li>
                            </ul>
                        </li>

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
                            <li className="menu-active">
                                <Link to={'/'}>Trang chủ</Link>
                            </li>
                            <li>
                                <Link to={'/lien-he'}>Liên hệ</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
);
PublicTopMenu.displayName = displayName;

export default PublicTopMenu;