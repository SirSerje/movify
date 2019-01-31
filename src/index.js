import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './Components/App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.querySelector('#root')
);
//Горячая перезагрузка модулей (Hot Module Replacement, HMR)
// Браузер не выполняет обновление страницы.
if (module.hot) {
    module.hot.accept();
}
