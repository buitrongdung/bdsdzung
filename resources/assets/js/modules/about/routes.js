import Loadable from 'react-loadable'

// import components
import LoadingComponent from '../../common/loader/index'

export default [
    {
        path: '/about',
        exact: true,
        component: Loadable({
            loader: () => import('./pages/index'),
            loading: LoadingComponent,
        }),
    }
]
