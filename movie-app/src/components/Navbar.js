import React from 'react';
import {data} from '../data';
import {addMovieToList,handleMovieSearch} from '../actions/index'
import css from '../index.css';
import { StoreContext } from '..';


class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            searchText:''
        };
    }

    handleAddToMovies=(movie)=>{
        this.props.dispatch(addMovieToList(movie));
        this.setState({
            showSearchResults:false
        });
    }
    handleSearch=()=>{
        const {searchText}=this.state;
        this.props.dispatch(handleMovieSearch(searchText))
    };
    handleChange=(e)=>{
        this.setState({
            searchText:e.target.value
        })
    }
  render(){
      
      const {result,showSearchResults}=this.props.search;
      return(
          <div className="nav">
              <div className="search-container">
              <input onChange={this.handleChange}/>
              <button className ={css.searchBtn}>Search</button>
              <button id="search-btn" onClick={this.handleSearch}>Search</button>
              {showSearchResults&&
              <div className="search-results">
                  <div className="search-result">
                      <img src={data[0].Poster} alt="search-pic"/>

                      <div className="movie-info">
                         <span>{data[0].Title}</span>
                         <button onClick={()=>this.handleAddToMovies(data[0])}>
                             Add to Movies
                         </button>
                         
                  </div>

              </div>
              </div>

              }
              </div>
          </div>
      )
  }
 
}
class NavbarWrapper extends React.Component{
    render(){
        return(
            <StoreContext.Consumer>
            {(store)=><Navbar dispatch={store.dispatch} searh={this.props.search}/>}
        </StoreContext.Consumer>
        )
    }
  
}
export default NavbarWrapper;