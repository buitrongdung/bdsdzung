// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import TopMenu from './components/TopMenu'
import {logout} from '../../modules/frontend/auth/service';

class Header extends Component
{
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        user: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired,
    };

    constructor(props)
    {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(e)
    {
        e.preventDefault();
        this.props.dispatch(logout());
    }

    render ()
    {
        return (
            this.props.isAuthenticated ? <TopMenu
                user={this.props.user}
                logout={this.logout}
            /> : ''
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        user: state.user
    }
};

export default connect(mapStateToProps)(Header);