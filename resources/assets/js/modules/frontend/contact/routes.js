import Loadable from 'react-loadable'

// import components
import LoadingComponent from '../../../common/loader'

export default [
    {
        path: '/lien-he',
        exact: true,
        component: Loadable({
            loader: () => import('./pages'),
            loading: LoadingComponent,
            delay: 60
        }),
    }
]
