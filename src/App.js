import React, { Component } from 'react'
import './assets/reset.less'
import './assets/iconfont.css'
import {HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import {routesConfig} from './pages/users/routeConfig'

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    {routesConfig.map(item => {
                        return <Route exact path={item.path} title={item.name} component={item.component} />
                    })}
                </Switch>
            </HashRouter>
        )
    }
}
export default App
