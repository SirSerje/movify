import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './Components/App';
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        {/*<Route component={<App/>}/>*/}
        <App/>
    </BrowserRouter>,
    document.querySelector('#root')
);
