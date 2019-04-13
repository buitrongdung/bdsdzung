// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import $ from 'jquery'
import  'superfish'

import TopMenu from './components/TopMenu'
import {logout} from '../../modules/auth/service';

class Header extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        user: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(e) {
        e.preventDefault();
        this.props.dispatch(logout());
    }

    componentDidMount()
    {
        $('.nav-menu').superfish({
            animation: {
                opacity: 'show'
            },
            speed: 400
        });
        if ($('#nav-menu-container').length) {
            var $mobile_nav = $('#nav-menu-container').clone().prop({
                id: 'mobile-nav'
            });
            $mobile_nav.find('> ul').attr({
                'class': '',
                'id': ''
            });
            $('body').append($mobile_nav);
            $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="lnr lnr-menu"></i></button>');
            $('body').append('<div id="mobile-body-overly"></div>');
            $('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down"></i>');

            $(document).on('click', '.menu-has-children i', function(e) {
                $(this).next().toggleClass('menu-item-active');
                $(this).nextAll('ul').eq(0).slideToggle();
                $(this).toggleClass("lnr-chevron-up lnr-chevron-down");
            });

            $(document).on('click', '#mobile-nav-toggle', function(e) {
                $('body').toggleClass('mobile-nav-active');
                $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
                $('#mobile-body-overly').toggle();
            });

            $(document).click(function(e) {
                var container = $("#mobile-nav, #mobile-nav-toggle");
                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    if ($('body').hasClass('mobile-nav-active')) {
                        $('body').removeClass('mobile-nav-active');
                        $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
                        $('#mobile-body-overly').fadeOut();
                    }
                }
            });


        } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
            $("#mobile-nav, #mobile-nav-toggle").hide();
        }
    }

    render ()
    {
        return (
            <TopMenu/>
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