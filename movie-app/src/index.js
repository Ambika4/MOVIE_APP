import React,{createContext} from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import './index.css';
import App from './components/App';
//import movies from './reducers/index';
import thunk  from 'redux-thunk'
import rootReducer from './reducers'
// //function logger (obk,next,action)
// //logger(obj)(next)(action)
// const logger=function({dispatch,getState}){
//   return function(next){

//     return function(action){
//       //middleware code
     
//     }
//   }

// }

const logger =({dispatch,getState})=>(next) =>(action)=>{
  //logger code
  if(typeof action!=="function"){
  console.log('ACTION_TYPE =',action.type);}
  next(action);
}
// const thunk =({dispatch,getState})=>(next) =>(action)=>{
//   if(typeof action ==="function")
//   {
//     action(dispatch);
//     return;
//   }
//   //logger code
//   //console.log('ACTION_TYPE =',action.type);
//   next(action);
// }
//store requires movie argument as reducer
const store =createStore(rootReducer,applyMiddleware(logger,thunk));
// console.log('store',store);
// console.log('STATE',store.getState());
// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman '}]
// }); 
class Provider extends React.Component{
  render(){
    const {store}= this.props;
    <StoreContext.Provider value={store}></StoreContext.Provider>
    //whatever in betwwen tag of storecontext.provider will be children here
    {this.props.children}

  }
}
export const StoreContext= createContext
ReactDOM.render(
 <StoreContext.Provider value={store}> <App /></StoreContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

