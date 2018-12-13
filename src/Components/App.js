import React, {Component, Fragment} from 'react';
import {Header} from "./Head/Header";
import {SearchField} from "./Search/SearchField";
import {CardList} from "./Card/CardList";
import movies from './movies'

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
                <CardList moviesProp={filterMovies}/>
            </Fragment>
        );
    }
}
