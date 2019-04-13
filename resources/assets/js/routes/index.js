import React from 'react'
import {Router, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'

import routes from './routes'
import PublicRoutes from './Public'
import Layout from '../layouts/index'
const history = createBrowserHistory()

const Routes = () => (
    <Router history={history} >
        <Layout>
            <Switch>
                {
                    routes.map((route, i) => {
                        if (route.auth) {
                            console.log(route)
                        }
                        return <PublicRoutes key={i} {...route} />
                    })
                }
            </Switch>
        </Layout>
    </Router>
);

export default Routes
