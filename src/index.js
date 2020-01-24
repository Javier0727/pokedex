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
const request = async () => {
    const pokeData = await fetch('https://pokeapi.co/api/v2/pokemon')
    const pokeDataJSON = await pokeData.json()
    console.log(pokeData)
    // return pokeDataJSON;
    // return 'Si'
}
// const coso = async () => await request()
// console.log(request())
const initialState = {
    'api': 'https://pokeapi.co/api/v2/pokemon',
    'pokeList': fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(r => r.results.map(res => res))
        .catch(err => null),
    'search': ''
}

const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();