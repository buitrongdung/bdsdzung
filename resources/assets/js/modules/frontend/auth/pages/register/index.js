import {connect} from 'react-redux'

import Register from './Register'

const mapStatetoProps = state => {
    return  {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStatetoProps)(Register)
