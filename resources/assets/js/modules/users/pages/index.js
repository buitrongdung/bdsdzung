/* ============
 * Container
 * ============.
 *
 * Containers are used fetch the data from state
 * and disperse to the components.
 */

// import libs
import { connect } from 'react-redux'
import User from '../User'

// import components
import Users from './Users'

// map store state as properties of the component
const mapStateToProps = state => {
    return {
        name: state.name
    }
}

// binding store with component
export default connect(mapStateToProps)(Users)
