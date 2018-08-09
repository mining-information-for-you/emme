import React, { Component } from "react";
import './profile.scss'
import FaSearch from 'react-icons/lib/md/search'

class Profile extends Component {

      render(){

        return(
        <div id="profile">
        <div className="wrap">
            <img id="profile-img" src="https://cdn.xl.thumbs.canstockphoto.com.br/usu%C3%A1rio-sinal-icon-pessoa-s%C3%ADmbolo-human-avatar-imagem_csp43862271.jpg" className="online" alt="" />
            <p>Pesquisador 01</p>
            <i className="fa fa-chevron-down expand-button" aria-hidden="true"></i>
            <div id="status-options">
                <ul>
                    <li id="status-online" className="active"><span className="status-circle"></span> <p>Online</p></li>
                    <li id="status-away"><span className="status-circle"></span> <p>Away</p></li>
                    <li id="status-busy"><span className="status-circle"></span> <p>Busy</p></li>
                    <li id="status-offline"><span className="status-circle"></span> <p>Offline</p></li>
                </ul>
            </div>
            <div id="expanded">
                <label for="twitter"><i className="fa fa-facebook fa-fw" aria-hidden="true"></i></label>
                <input name="twitter" type="text" value="mikeross" />
                <label for="twitter"><i className="fa fa-twitter fa-fw" aria-hidden="true"></i></label>
                <input name="twitter" type="text" value="ross81" />
                <label for="twitter"><i className="fa fa-instagram fa-fw" aria-hidden="true"></i></label>
                <input name="twitter" type="text" value="mike.ross" />
            </div>
        </div>
    </div>
         
        )
      }
}


export default Profile;
