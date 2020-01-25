import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reducer from './reducers'
// import { getApi } from './constants';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
// const pokeData = async () => await fetch('https://pokeapi.co/api/v2/pokemon');

// async function getUserAsync() {
//     let response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
//     let data = await response.json();
//     return data;
// }

const initialState = {
    'api': 'https://pokeapi.co/api/v2/pokemon',
    'pokeList': null,
    'list': [],
    'search': ''
}

const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();