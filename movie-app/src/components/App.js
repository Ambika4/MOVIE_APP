import React from 'react';
 import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import css from '../index.css';
import {addMovies,setShowFavourites} from '../actions/index';
import {StoreContext} from '../index';
class App extends React.Component {
  componentDidMount(){
    //make a api call in real world
    //dispatch action
    const {store}=this.props;
    store.subscribe(()=>{
      console.log('UPDATED');
      this.forceUpdate();
    })
    this.props.store.dispatch(addMovies(data));
  }
  isMovieFavourite=(movie)=>{
    const {movies}=this.props.store.getState();
    const {favourites} =movies
    const index=favourites.indexOf(movie);

    if(index!==-1){
      //found the movie
      return  true;
    }
    return false;
  }
  onChangeTab=(val)=>{
    this.props.store.dispatch(setShowFavourites(val))
  }
  render(){
  const {movies,search}=this.props.store.getState();
  const {list,favourites,showFavourites} =movies
  console.log(this.props.store.getState());
  const displayMovies=showFavourites?favourites:list;
  
    return (

      <div className={css.App}>
        <Navbar  search={search}/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites?'':'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites?'active-tabs':''}`}onClick={()=>this.onChangeTab(true)}>Favourites</div>
          </div>

        </div>
        <div className="list">
          {displayMovies.map((movie,index)=>(
            <MovieCard movie={movie} key={`movies-${index}`} 
            dispatch={this.props.store.dispatch}
            isFavourite={this.isMovieFavourite}/>
          ))}
        </div>
        {displayMovies.length===0?<div className="no-movies">No Movies to display</div>:null}
      </div>
    );
  }
}

class AppWrapper extends React.Component{
  render(){
    return(
      <StoreContext.Consumer>
        {(store)=><App store={store}/>}
      </StoreContext.Consumer>
    );
  }
}
export default AppWrapper;