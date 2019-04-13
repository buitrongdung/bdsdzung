import usersRoute from '../modules/users/routes'
import auth from '../modules/auth/routes'
import homePage from '../modules/home/routes'
import contact from '../modules/contact/routes'

export default [...auth,...usersRoute,...homePage, ...contact]
