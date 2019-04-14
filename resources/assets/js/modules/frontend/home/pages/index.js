import { connect } from 'react-redux'
import HomePage from './HomePage';

const mapStateToProps = state => {
    return  {
        isAuthenticated: state.auth.isAuthenticated
    }
};

export default connect(mapStateToProps)(HomePage);