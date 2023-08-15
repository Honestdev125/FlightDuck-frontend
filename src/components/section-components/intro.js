import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Intro extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="intro-area pd-top-112">
				  <div className="container">
				    <div className="row footer-container">
				      <div className="col-md-4">
				        <div className="single-intro wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.1s">
				          <h4 className="intro-title">
				            <span className="intro-count">01</span>
				            <Link className="intro-cat" to="/about">Travel</Link>
				          </h4>
				          <p>Sponsorships are like unicorns or leprechauns, talked about often but they don’t actually exist. There is only dollars and cents, the ...</p>
				        </div>
				      </div>
				      <div className="col-md-4">
				        <div className="single-intro wow animated fadeInUp" data-wow-duration="1.0s" data-wow-delay="0.2s">
				          <h4 className="intro-title">
				            <span className="intro-count">02</span>
				            <Link className="intro-cat" to="/about">Experience</Link>
				          </h4>
				          <p>My response is usually harsh. Offended at the suggestion that a career that’s taken more than a decade to create could be...</p>
				        </div>
				      </div>
				      <div className="col-md-4">
				        <div className="single-intro wow animated fadeInUp" data-wow-duration="1.6s" data-wow-delay="0.3s">
				          <h4 className="intro-title">
				            <span className="intro-count">03</span>
				            <Link className="intro-cat" to="/about">Relax</Link>
				          </h4>
				          <p>I have always made a living to make movies, never the other way around. When I first started I washed in a seafood restaurant....</p>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>

        }
}

export default Intro