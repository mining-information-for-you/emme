import React, { Component } from "react";
import './sidepanel.scss'
import Profile from "./Profile/Profile";
import Search from "./Search/Search";
import Contacts from "./Contacts/Contacts";
import BottomBar from "./BottomBar/BottomBar";


class Sidepanel extends Component {

      render(){

        return(
         <div id="sidepanel">
            
            <Profile/>
            <Search/>
            <Contacts/>
            <BottomBar/>
          </div>
        )
      }
}


export default Sidepanel;
