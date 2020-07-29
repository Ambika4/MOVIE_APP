import React from 'react';

import css from '../index.css';

class Navbar extends React.Component{

  render(){
      return(
          <div className={css.nav}>
              <input/>
              <button className ={css.searchBtn}>Search</button>

          </div>
      )
  }
 
}

export default Navbar;