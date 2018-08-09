import React, { Component } from "react";
import './messages.scss'
import Message from "./Message/Message";

class Messages extends Component {

      render(){

        return(
          <div class="messages">
            <ul>
                <Message/>
            </ul>    

          </div>
        )
      }
}


export default Messages;
