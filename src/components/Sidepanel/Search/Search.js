import React, { Component } from "react";
import './search.scss'
import FaSearch from 'react-icons/lib/md/search'

class Search extends Component {

      render(){

        return(
          
        <div id="search">
			    <label for=""><i class="fa fa-search" aria-hidden="true"><FaSearch size={"20"}/></i></label>
			    <input type="text" placeholder="Search contacts..." />
		    </div>

         
        )
      }
}


export default Search;
