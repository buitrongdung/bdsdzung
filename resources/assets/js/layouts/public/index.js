import React, {Component} from "react";
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';


const displayName = 'Public';
const propTypes = {
    children: PropTypes.node.isRequired
};

function Public ({children})
{
    return <div className="content-page">
        <Header/>
            <main style={{ minHeight: '100vh'}}>
                    {children}
            </main>
        <Footer/>
    </div>
}

Public.propTypes = propTypes;
Public.dispatch = displayName;

export default Public;


