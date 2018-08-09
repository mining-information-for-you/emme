import React, { Component } from "react";
import './message.scss'

class Message extends Component {

      render(){

        return(
            <div>
            <li className="sent">
            <img src="https://cdn.xl.thumbs.canstockphoto.com.br/usu%C3%A1rio-sinal-icon-pessoa-s%C3%ADmbolo-human-avatar-imagem_csp43862271.jpg" alt="" />
            <p>Emme, tell me about the relationship between genes and targets that are published from 2015</p>
        </li>
        <li className="replies">
            <img src="https://www.simtechdev.com/docs/_images/User_Profile_Page_008.png" alt="" />
            <p>
               <img src="https://brainstormdeti.files.wordpress.com/2010/11/grafo.gif"/>
            
            </p>
        </li>
        
        </div>
        )
      }
}


export default Message;
