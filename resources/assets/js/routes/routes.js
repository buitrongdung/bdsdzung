import usersRoute from '../modules/frontend/users/routes'
import auth from '../modules/frontend/auth/routes'
import homePage from '../modules/frontend/home/routes'
import contact from '../modules/frontend/contact/routes'

//admin
import authAdmin from '../modules/admin/auth/routes'

export default [...auth,...usersRoute,...homePage, ...contact, ...authAdmin]
