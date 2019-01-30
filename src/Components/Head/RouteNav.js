import React from 'react';
import { Switch, Route} from "react-router-dom";
// import Home from './Home';
import Blog from './Blog';
import Bio from './Bio';
import Shop from './Shop';
import Contact from "./Contact";
import CardList from '../Card/CardList'
import movies from '../movies'

const RouteNav = () => (
    <main>
        <Switch>
            {/*<Route path='/home' component={CardList}/>*/}
            <Route exact path='/' render={()=> <CardList moviesProp={movies}/>}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/bio' component={Bio}/>
            <Route path='/shop' component={Shop}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
    </main>
);

export default RouteNav;