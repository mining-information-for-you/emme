import React, { Component } from "react";
import './contact.scss'


class Contact extends Component {

      render(){

        return(
            <div className="wrap">
						<span className="contact-status online"></span>
						<img src="http://emilcarlsson.se/assets/louislitt.png" alt="" />
						<div className="meta">
							<p className="name">Louis Litt</p>
							<p className="preview">You just got LITT up, Mike.</p>
						</div>
			</div>
        )
      }
}


export default Contact;
