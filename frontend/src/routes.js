import React from 'react'
import {Switch,BrowserRouter,Route} from 'react-router-dom'
import Home from './pages/Home'

import RegisterProducts from './pages/RegisterProducts'



export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/register" exact component={RegisterProducts}/>
            </Switch>
        </BrowserRouter>
    )
}