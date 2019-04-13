import { combineReducers } from 'redux'

import auth from '../modules/auth/store/reducer'
import user from '../modules/users/store/reducer'
import home from '../modules/home/store/reducer'

export default combineReducers({auth, user, home})