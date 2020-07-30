import React from 'react';
import {data} from '../data';
import {addMovieToList,handleMovieSearch} from '../actions/index'
import css from '../index.css';


class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showSearchResults:true,
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
      return(
          <div className="nav">
              <input onChange={this.handleChange}/>
              <button className ={css.searchBtn}>Search</button>

          </div>
      )
  }
 
}

export default Navbar;