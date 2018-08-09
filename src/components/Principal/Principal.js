import React, { Component } from "react";
import './principal.scss'
import Sidepanel from "../Sidepanel/Sidepanel";
import Content from "../Content/Content";
import { ButtonToolbar, Button } from 'react-bootstrap';

class Principal extends Component {

  abrirChat(){
    console.log("abrir")
  }

     

      render(){

        return(
        <div className="container">
            <div className="row">
                <div id="Smallchat">

                  <div className="Layout Layout-open Layout-expand Layout-right">
                      <div className="Messenger_messenger">
                      <div className="Messenger_header" >
                            <h4 className="Messenger_prompt">How can we help you?</h4> <span className="chat_close_icon"><i className="fa fa-window-close" aria-hidden="true"></i></span> 
                      </div>

                      </div>

                      <ButtonToolbar>
                          <Button href="#">Link</Button>
                          <Button>Button</Button>
                      </ButtonToolbar>;
                  </div>

                  


                </div>
            </div>
        
        
        </div>

        
        )

      }
}


export default Principal;
