import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CommingSoon extends Component {

	 componentDidMount() {

	 	const $ = window.$;
    
	      $(window).on('load', function () {

	      	var preLoder = $("#preloader");
	        preLoder.fadeOut(0);

	     });
      // countdown 
   		const countdown = document.querySelector(".countdown");

		//Set Launch Date
		const launchDate = new Date("May 28, 2021 13:00:00").getTime();

		//Update every second
		const intvl = setInterval(function() {
		    //Get todays date and time (ms)
		    const now = new Date().getTime();

		    //Distance from now to the launch date
		    const distance = launchDate - now;

		    //Time calculation
		    const days = Math.floor(distance / (8000 * 60 * 60 * 24));
		    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		    const sec = Math.floor((distance % (1000 * 60)) / 1000);

		    //Display Result
		    countdown.innerHTML = `
		        <div className="countdown-item"><h2 className="countdown-number">${days}</h2><span className="countdown-text">Days</span></div>
		        <div className="countdown-item"><h2 className="countdown-number">${hours}</h2><span className="countdown-text">Hour</span></div>
		        <div className="countdown-item"><h2 className="countdown-number">${mins}</h2><span className="countdown-text">Minutes</span></div>
		        <div className="countdown-item"><h2 className="countdown-number">${sec}</h2><span className="countdown-text">Seconds</span></div>
		    `;

		    //If launch date passed
		    if (distance < 0) {
		        //Stop countdown
		        clearInterval(intvl);
		        //Style and ouput text
		        countdown.style.color = "#17a2b8";
		        countdown.innerHTML = "Launched!";
		    }
		}, 1000);
  }


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="comming-soon-page" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/12.png)'}}>
			  <div className="container">
			    <div className="logo-wrapper">
			      <Link to="/">
			        <img src={publicUrl+"assets/img/logo.png"} alt="logo" />
			      </Link>
			    </div>
			    <div className="row justify-content-center">
			      <div className="col-12 comming-soon-info-wrap text-center">
			        <div className="comming-soon-info m-auto">
			          <h1 className="comming-soon-title">COMING SOON</h1>
			          <div className="comming-soon-wrap">
			            <div className="countdown countdown--alt" />
			          </div>
			          <div className="btn-wrapper">
			            <Link className="btn btn-transparent" to="/contact">You Are Contact With Us</Link>
			          </div>
			          <ul className="social-icon">
			            <li>
			              <a className="facebook" href="https://www.facebook.com/codingeek.net/" target="_blank"><i className="fa fa-facebook  " /></a>
			            </li>
			            <li>
			              <a className="twitter" href="https://twitter.com/codingeeknet" target="_blank"><i className="fa fa-twitter  " /></a>
			            </li>
			            <li>
			              <a className="pinterest" href="https://www.instagram.com/codingeeknet/" target="_blank"><i className="fa fa-instagram" /></a>
			            </li>
			            <li>
			              <a className="linkedin" href="https://www.linkedin.com/company/codingeek/about/" target="_blank"><i className="fa fa-linkedin" /></a>
			            </li>
			          </ul>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>


        }
}

export default CommingSoon