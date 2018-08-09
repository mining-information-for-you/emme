import React, { Component } from "react";
import './contacts.scss'
import Contact from "./Contact/Contact";


class Contacts extends Component {

      render(){

        return(
            <div id="contacts">
			    <ul>
				    <li className="contact">
                    <div className="wrap">
						<span className="contact-status away"></span>
						<img src="https://media.istockphoto.com/vectors/user-icon-vector-male-person-symbol-profile-circle-avatar-sign-in-vector-id951315950" alt="" />
						<div className="meta">
							<p className="name">Pesquisador 02</p>
							<p className="preview">......</p>
						</div>
			</div>
                    </li>
                    <li className="contact active">
                    <div className="wrap">
						<span className="contact-status online"></span>
						<img src="https://cdn.xl.thumbs.canstockphoto.com.br/usu%C3%A1rio-sinal-icon-pessoa-s%C3%ADmbolo-human-avatar-imagem_csp43862271.jpg" alt="" />
						<div className="meta">
							<p className="name">Pesquisador 01</p>
							<p className="preview">......</p>
						</div>
			</div>
                    </li>
                    <li className="contact">
                    <div className="wrap">
						<span className="contact-status busy"></span>
						<img src="https://media.istockphoto.com/vectors/user-icon-vector-male-person-symbol-profile-circle-avatar-sign-in-vector-id951315950" alt="" />
						<div className="meta">
							<p className="name">Pesquisador 03</p>
							<p className="preview">.....</p>
						</div>
			</div>
                    </li>
                    <li className="contact">
                    <div className="wrap">
						<span className="contact-status online"></span>
						<img src="https://media.istockphoto.com/vectors/user-icon-vector-male-person-symbol-profile-circle-avatar-sign-in-vector-id951315950" alt="" />
						<div className="meta">
							<p className="name">Pesquisador 04</p>
							<p className="preview">.......</p>
						</div>
			</div>
                    </li>
                    <li className="contact">
                    <div className="wrap">
						<span className="contact-status online"></span>
						<img src="https://media.istockphoto.com/vectors/user-icon-vector-male-person-symbol-profile-circle-avatar-sign-in-vector-id951315950" alt="" />
						<div className="meta">
							<p className="name">Pesquisador 05</p>
							<p className="preview">.......</p>
						</div>
			</div>
                    </li>
                    <li className="contact">
                    <div className="wrap">
						<span className="contact-status away"></span>
						<img src="https://media.istockphoto.com/vectors/user-icon-vector-male-person-symbol-profile-circle-avatar-sign-in-vector-id951315950" alt="" />
						<div className="meta">
							<p className="name">Pesquisador 06</p>
							<p className="preview">.......</p>
						</div>
			</div>
                    </li>
                    <li className="contact">
                    <div className="wrap">
						<span className="contact-status away"></span>
						<img src="https://media.istockphoto.com/vectors/user-icon-vector-male-person-symbol-profile-circle-avatar-sign-in-vector-id951315950" alt="" />
						<div className="meta">
							<p className="name">Pesquisador 07</p>
							<p className="preview">....</p>
						</div>
			</div>
                    </li> 
                </ul>
            </div>
        )
      }
}




export default Contacts;
