import {connect} from 'react-redux'

import Contact from './Contact'

const mapStatetoProps = state => {
    return  {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStatetoProps)(Contact)
