import Loadable from 'react-loadable'

// import components
import LoadingComponent from '../../common/loader/index'

export default [
    {
        path: '/',
        exact: true,
        component: Loadable({
            loader: () => import('./pages/index'),
            loading: LoadingComponent,
            delay: 60
        }),
    },

]