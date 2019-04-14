import Loadable from 'react-loadable'

// import components
import LoadingComponent from '../../../common/loader'

export default [
    {
        path: '/dang-nhap',
        exact: true,
        component: Loadable({
            loader: () => import('./pages/login'),
            loading: LoadingComponent,
            delay: 60
        }),
    },
    {
        path: '/dang-ky',
        exact: true,
        component: Loadable({
            loader: () => import('./pages/register'),
            loading: LoadingComponent,
            delay: 60
        }),
    }

]
