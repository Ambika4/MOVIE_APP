import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import './index.css';
import App from './components/App';
import movies from './reducers/index';
//store requires movie argument as reducer
const store =createStore(movies);
// console.log('store',store);
// console.log('STATE',store.getState());
// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman '}]
// }); 
ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

