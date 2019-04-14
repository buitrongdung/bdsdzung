import { combineReducers } from 'redux'

import auth from '../modules/frontend/auth/store/reducer'
import user from '../modules/frontend/users/store/reducer'
import home from '../modules/frontend/home/store/reducer'

export default combineReducers({auth, user, home})