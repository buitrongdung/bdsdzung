import React, {Component} from "react";
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const displayName = 'Manager';
const propTypes = {
    children: PropTypes.node.isRequired
};

function Manager ({children})
{
    return <div>
        <Header/>
        <main style={{ minHeight: '100vh'}}>
            {children}
        </main>
        <Footer/>
    </div>

}

Manager.propTypes = propTypes;
Manager.dispatch = displayName;

export default Manager;


