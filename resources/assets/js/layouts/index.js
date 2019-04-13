import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'


import Manager from './manager/index';
import Public from './public/index';

class Layout extends Component
{
    static displayName = 'Layout';
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        children: PropTypes.node.isRequired,
        dispatch: PropTypes.func.isRequired,
    };

    render ()
    {
        const {children, ...props} = this.props;
        if (this.props.isAuthenticated) {
            return <Manager {...props}> {children} </Manager>
        }
        return <Public {...props}> {children} </Public>
    }

}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        user: state.user
    }
};

export default withRouter(connect(mapStateToProps)(Layout));