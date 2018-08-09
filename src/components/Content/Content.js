import React, { Component } from "react";
import './content.scss'
import ContactProfile from "./ContactProfile/ContactProfile";
import Messages from "./Messages/Messages";
import MessageInput from "./MessageInput/MessageInput";


class Content extends Component {

      render(){

        return(
          <div  className="content">
            
            <ContactProfile/>
            <Messages/>
            <MessageInput/>

          </div>
        )
      }
}


export default Content;
