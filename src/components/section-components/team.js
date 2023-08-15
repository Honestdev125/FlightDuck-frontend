import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Team extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="team-newslater-bg" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/4.png)'}}>
			  {/* team area end */}
			  <div className="team-area pd-top-70">
			    <div className="container">
			      <div className="row justify-content-center">
			        <div className="col-lg-6">
			          <div className="section-title text-center">
			            <h2 className="title">Our Team</h2>
			            <p>Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula. Quisque quis pharetra felis. Ut quis consequat orci, at consequat felis.</p>
			          </div>
			        </div>
			      </div>
			      <div className="row">
			        <div className="col-lg-3 col-sm-6">
			          <div className="single-team text-center">
			            <div className="thumb">
			              <img src={publicUrl+"assets/img/team/1.png"} alt="team" />
			            </div>
			            <h3 className="name"><a href="#">Amber Reid</a></h3>
			            <span>Creative Director</span>
			            <ul className="team-social">
			              <li><a href="#"><i className="fa fa-facebook" /></a></li>
			              <li><a href="#"><i className="fa fa-twitter" /></a></li>
			              <li><a href="#"><i className="fa fa-instagram" /></a></li>
			              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
			            </ul>
			          </div>
			        </div>
			        <div className="col-lg-3 col-sm-6">
			          <div className="single-team text-center">
			            <div className="thumb">
			              <img src={publicUrl+"assets/img/team/2.png"} alt="team" />
			            </div>
			            <h3 className="name"><a href="#">Bruce Pearson</a></h3>
			            <span>Creative Director</span>
			            <ul className="team-social">
			              <li><a href="#"><i className="fa fa-facebook" /></a></li>
			              <li><a href="#"><i className="fa fa-twitter" /></a></li>
			              <li><a href="#"><i className="fa fa-instagram" /></a></li>
			              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
			            </ul>
			          </div>
			        </div>
			        <div className="col-lg-3 col-sm-6">
			          <div className="single-team text-center">
			            <div className="thumb">
			              <img src={publicUrl+"assets/img/team/3.png"} alt="team" />
			            </div>
			            <h3 className="name"><a href="#">Amber Griffin</a></h3>
			            <span>Creative Director</span>
			            <ul className="team-social">
			              <li><a href="#"><i className="fa fa-facebook" /></a></li>
			              <li><a href="#"><i className="fa fa-twitter" /></a></li>
			              <li><a href="#"><i className="fa fa-instagram" /></a></li>
			              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
			            </ul>
			          </div>
			        </div>
			        <div className="col-lg-3 col-sm-6">
			          <div className="single-team text-center">
			            <div className="thumb">
			              <img src={publicUrl+"assets/img/team/4.png"} alt="team" />
			            </div>
			            <h3 className="name"><a href="#">Abedin Abed</a></h3>
			            <span>Creative Director</span>
			            <ul className="team-social">
			              <li><a href="#"><i className="fa fa-facebook" /></a></li>
			              <li><a href="#"><i className="fa fa-twitter" /></a></li>
			              <li><a href="#"><i className="fa fa-instagram" /></a></li>
			              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
			            </ul>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			  {/* team area end */}
			  {/* newslatter area Start */}
			  <div className="newslatter-area pd-top-80">
			    <div className="container">
			      <div className="newslatter-area-wrap border-tp-solid">
			        <div className="row">
			          <div className="col-xl-3 col-lg-6 col-md-5 offset-xl-2">
			            <div className="section-title mb-md-0">
			              <h2 className="title">Newsletter</h2>
			              <p>Sign up to receive the best offers</p>
			            </div>
			          </div>
			          <div className="col-xl-4 col-lg-6 col-md-7 align-self-center offset-xl-1">
			            <div className="input-group newslatter-wrap">
			              <div className="input-group-prepend">
			                <span className="input-group-text"><i className="fa fa-envelope" /></span>
			              </div>
			              <input type="text" className="form-control" placeholder="Email" />
			              <div className="input-group-append">
			                <button className="btn btn-yellow" type="button">Subscribe</button>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			  {/* newslatter area End */}
			</div>

        }
}

export default Team