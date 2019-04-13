import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const displayName = 'TopMenu';
const propTypes = {
    logout: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};

const ManagerTopMenu = ({logout, user}) => (
    <div>
        <div id="header">
            <h1>afdfds</h1>
        </div>
        <div className="btn-group rightzero">
            <Link className="top_message tip-left" title="Manage Files" to={'/register'}>
                <i className="icon-file"></i>Manage Files<span className="fa fa-user-o" title="logout" aria-hidden="true"/> Profile
            </Link>
            <Link to={'/register'} className="top_message tip-bottom" title="Manage Users"><i className="icon-user"></i>Manage Files</Link>
             <Link to={'/register'} className="top_message tip-bottom" title="Manage Comments"><i className="icon-comment"></i>Manage Files<span className="label label-important">5</span></Link>
            <Link to={'/register'} className="top_message tip-bottom" title="Manage Orders"><i className="icon-shopping-cart"></i>Manage Files</Link>
        </div>
        <div id="user-nav" className="navbar navbar-inverse">
            <ul className="nav">
                <li ><a title="" href="#"><i className="icon icon-user"></i> <span className="text">{user.name}</span></a></li>
                <li className=" dropdown" id="menu-messages"><a href="#" data-toggle="dropdown" data-target="#menu-messages" className="dropdown-toggle"><i className="icon icon-envelope"></i> <span className="text">Messages</span> <span className="label label-important">5</span> <b className="caret"></b></a>
                    <ul className="dropdown-menu">
                        <li><a className="sAdd" title="" href="#">new message</a></li>
                        <li><a className="sInbox" title="" href="#">inbox</a></li>
                        <li><a className="sOutbox" title="" href="#">outbox</a></li>
                        <li><a className="sTrash" title="" href="#">trash</a></li>
                    </ul>
                </li>
                <li ><a title="" href="#"><i className="icon icon-cog"></i> <span className="text">Settings</span></a></li>
                <li><a title="" href="#" onClick={e => logout(e)}><i className="icon icon-share-alt"></i> <span className="text">Logout</span></a></li>
            </ul>
        </div>
        <div id="search">
            <input type="text" placeholder="Search here..."/>
            <button type="submit" className="tip-left" title="Search"><i className="icon-search icon-white"></i></button>
        </div>
        <div id="sidebar"><a href="#" className="visible-phone"><i className="icon icon-home"></i> Dashboard</a><ul>
            <li className="active"><a href="index.html"><i className="icon icon-home"></i> <span>Dashboard</span></a> </li>
            <li> <a href="charts.html"><i className="icon icon-signal"></i> <span>Charts &amp; graphs</span></a> </li>
            <li> <a href="widgets.html"><i className="icon icon-inbox"></i> <span>Widgets</span></a> </li>
            <li><a href="tables.html"><i className="icon icon-th"></i> <span>Tables</span></a></li>
            <li><a href="grid.html"><i className="icon icon-fullscreen"></i> <span>Full width</span></a></li>
            <li className="submenu"> <a href="#"><i className="icon icon-th-list"></i> <span>Forms</span> <span className="label label-important">3</span></a>
                <ul>
                    <li><a href="form-common.html">Basic Form</a></li>
                    <li><a href="form-validation.html">Form with Validation</a></li>
                    <li><a href="form-wizard.html">Form with Wizard</a></li>
                </ul>
            </li>
            <li><a href="buttons.html"><i className="icon icon-tint"></i> <span>Buttons &amp; icons</span></a></li>
            <li><a href="interface.html"><i className="icon icon-pencil"></i> <span>Eelements</span></a></li>
            <li className="submenu"> <a href="#"><i className="icon icon-file"></i> <span>Addons</span> <span className="label label-important">4</span></a>
                <ul>
                    <li><a href="index2.html">Dashboard2</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="calendar.html">Calendar</a></li>
                    <li><a href="chat.html">Chat option</a></li>
                </ul>
            </li>
        </ul>
        </div>
    </div>
    )
ManagerTopMenu.displayName = displayName;
    ManagerTopMenu.propTypes = propTypes;

export default ManagerTopMenu;