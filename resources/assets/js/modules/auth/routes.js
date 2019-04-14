import Loadable from 'react-loadable'

// import components
import LoadingComponent from '../../common/loader/index'

export default [
    {
        path: '/dang-nhap',
        exact: true,
        component: Loadable({
            loader: () => import('./pages/login/index'),
            loading: LoadingComponent,
            delay: 60
        }),
    },
    {
        path: '/dang-ky',
        exact: true,
        component: Loadable({
            loader: () => import('./pages/register/index'),
            loading: LoadingComponent,
            delay: 60
        }),
    }

]
