import React, {Component, Fragment} from 'react';
import Header from "./Head/Header";
import SearchField from "./Search/SearchField";
import CardList from "./Card/CardList";
import movies from './movies';
// import RouteNav from "./Head/RouteNav";
import {Route, Switch} from "react-router-dom";
import Blog from "./Head/Blog";
import Bio from "./Head/Bio";
import Shop from "./Head/Shop";
import Contact from "./Head/Contact";
import {Movie} from "./Movie";


//"= (filter) =>" this is Public class field
const filterMovieName = (item) => movies.filter(movies => movies.title.toLocaleLowerCase().includes(item.toLowerCase()));

/*STATEFUL COMPONENT*/
export class App extends Component {
    //declare state
    state = {
        filter: '', //hold filtered values
    };

    //Public class field:  https://youtu.be/cUPZFk_wbks?t=1655
    handleFilter = event => { //Public class field "= event =>"
        this.setState({ //method modify state
            filter: event.target.value //take value from input field
        });
    };

    render() {
        const {filter} = this.state; //destructuring assignment
        const filterMovies = filterMovieName(filter);

        return (
            <Fragment>
                <Header/>
                <SearchField filterProp={filter}
                             onChangeFilterProp={this.handleFilter}
                />
                <Switch>
                    {/*<Route path='/home' component={CardList}/>*/}
                    <Route exact path='/' render={()=> <CardList moviesProp={filterMovies} />}/>
                    <Route path='/:id' component={Movie}/>
                    <Route path='/blog' component={Blog}/>
                    <Route path='/bio' component={Bio}/>
                    <Route path='/shop' component={Shop}/>
                    <Route path='/contact' component={Contact}/>
                </Switch>
                {/*<RouteNav/> /!*description of 'Home', 'Blog', 'Photo', 'Bio', 'Shop', 'Contact'*!/*/}
                {/*<CardList moviesProp={filterMovies}/>*/}
            </Fragment>
        );
    }
}
