import React, { Component } from "react";
import './contactprofile.scss'

class ContactProfile extends Component {

      render(){

        return(
        <div className="contact-profile">
			<img src="https://www.simtechdev.com/docs/_images/User_Profile_Page_008.png" alt="" />
			<p>Emme</p>
			<div className="social-media">
				<i className="fa fa-facebook" aria-hidden="true"></i>
				<i className="fa fa-twitter" aria-hidden="true"></i>
				 <i className="fa fa-instagram" aria-hidden="true"></i>
			</div>
		</div>
        )
      }
}


export default ContactProfile;
