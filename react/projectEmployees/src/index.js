import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
 
 
ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
    , 
    document.getElementById('root')
)
//Удалить строгий режим если будет ломаться приложение во время разработки
 