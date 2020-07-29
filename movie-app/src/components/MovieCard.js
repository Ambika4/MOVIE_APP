import React from 'react';
import css from '../index.css';
import {addFavourite, removeFromFavourite} from '../actions';

class MovieCard extends React.Component{

   handleFavouriteClick=()=>{
       const {movie}=this.props;
       this.props.dispatch(addFavourite(movie));
   }
   handleUnFavouriteClick=()=>{
       const{movie}=this.props;
       this.props.dispatch(removeFromFavourite(movie));
   }
  render(){
    const {movie,isFavourite}=this.props;
      return(
          <div className={css.movieCard}>
           
              <div className="left">
                  <img alt="movie-poster" src={movie.Poster}/>
              </div>
              <div className="right">
                  <div className="title">{movie.Title}</div>
                  <div className={css.plot}>{movie.Plot}</div>
                  <div className={css.footer}></div>
                  <div className={css.rating}>{movie.imdbRating}</div>
                  {
                      isFavourite?<button onClick={this.handleUnFavouriteClick} className={css.favouriteBtn}>UnFavourite</button>
                      : <button onClick={this.handleUnFavouriteClick} className={css.favouriteBtn}>Favourite</button>
                  }
                 
              </div>
              
              

          </div>
      )
  }
 
}

export default MovieCard;