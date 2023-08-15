import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v1 extends Component {

    componentDidMount() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);
    }

    render() {

        // let publicUrl = process.env.PUBLIC_URL+'/';
        // let imgattr = "Footer logo";
		// let logoUrl = process.env.PUBLIC_URL+'/'+"assets/img/others/Small_logo.png"
		// let logoUrl = process.env.PUBLIC_URL+'/'+"assets/img/others/small-logo.png"
		let logoUrl = process.env.PUBLIC_URL + '/' + "assets/img/others/new.png"


        return (
  				<footer className="footer-area style-two">
				  <div style={{width: '100%'}}>
				    <div className="row footer-wrap">
				      <div className="col-lg-6 col-md-6">
				        <div className="footer-widget widget">
				          <div className="about_us_widget">
				            <Link to="/" className="footer-logo"> 
				              <img src={logoUrl} alt="footer logo" />
				            </Link>
				            <p>We believe brand interaction is key in commu- nication. Real innovations and a positive customer experience are the heart of successful communication.</p>
				            <ul className="social-icon">
				              <li>
				                <a className="facebook" href="https://www.facebook.com/codingeek.net/" target="_blank"><i className="fa-brands fa-facebook-f" /></a>
				              </li>
				              <li>
				                <a className="twitter" href="https://twitter.com/codingeeknet" target="_blank"><i className="fa-brands fa-twitter" /></a>
				              </li>
				              <li>
				                <a className="pinterest" href="https://www.instagram.com/codingeeknet/" target="_blank"><i className="fa-brands fa-instagram" /></a>
				              </li>
				            </ul>
				          </div>
				        </div>
				      </div>
				      <div className="col-lg-3 col-md-6">
				        <div className="footer-widget widget ">
				          <div className="widget-contact">
				            <h4 className="widget-title">Contact us</h4>
				            <p>
				              <i className="fa fa-map-marker" /> 
				              <span>Manama Tower, Badda Link Road, Badda Dhaka, Bangladesh</span>
				            </p>
				            <p className="location"> 
				              <i className="fa fa-envelope-o" />
				              <span>travelpoint@gmail.com</span>
				            </p>
				            <p className="telephone">
				              <i className="fa fa-phone base-color" /> 
				              <span>
				                +088 012121240
				              </span>
				            </p>
				          </div>
				        </div>
				      </div>
				      <div className="col-lg-3 col-md-6">
				        <div className="footer-widget widget">
				          <h4 className="widget-title">Quick Link</h4>
				          <ul className="widget_nav_menu  viaje-go-top" style={{height: 200}}>
				            <li><Link to="/home-v2">Home</Link></li>
				            <li><Link to="/about">About Us</Link></li>
				            <li><Link to="/contact">Support</Link></li>
				          </ul>
				        </div>
				      </div>
				    </div>
				  </div>
				  <div className="copyright-inner">
				    <div className="copyright-text">
				      © Viaje 2019 All rights reserved. Powered with by <a href="https://codingeek.net/" target="_blank"><i className="fa fa-heart" /><span>Codingeek.</span></a>
				    </div>
				  </div>
				</footer>


        )
    }
}


export default Footer_v1