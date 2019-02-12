import React, {Component} from 'react';
import Header from "./Head/Header";
import SearchField from "./Search/SearchField";
import CardList from "./Card/CardList";
import {Route, Switch} from "react-router-dom";
import Blog from "./Head/Blog";
import Bio from "./Head/Bio";
import Shop from "./Head/Shop";
import Contact from "./Head/Contact";
// import {Movie} from "./Movie";
import {filterMovieName} from "../utils/filterMovie";
import {LoginForm} from "./Login/LoginForm";
// import axios from 'axios';

class App extends Component {

    componentDidMount() {
       /* axios.post('http://localhost:4000/data', { //address server http://localhost:4000 then / data - query
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
            .then((response) => {
                console.log("response", response);
                console.log("response.config.data", response.config.data);
            })
            .catch((error) => {
                console.log(error);
            });
*/
        /*axios.post('http://localhost:4000/data/user-3', {
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });*/
    }

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
        const {filter} = this.state;
        const filterMovies = filterMovieName(filter);
        return (
            <>
                <Header/>
                <SearchField filterProp={filter}
                             onChangeFilterProp={this.handleFilter}
                />
                <Switch>
                    <Route exact path='/' render={() => <CardList moviesProp={filterMovies}/>}/>
                    {/*<Route path='/:id' component={Movie}/>*/}
                    <Route path='/blog' component={Blog}/>
                    <Route path='/bio' component={Bio}/>
                    <Route path='/shop' component={Shop}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/login' component={LoginForm}/>
                </Switch>
            </>
        );
    }
}

export default App;