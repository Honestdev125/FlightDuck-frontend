import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { signin, authenticate, isAuthenticated } from "../auth/helper/index";

class UserProfile extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="user-profile-area pd-top-120">
			  <div className="container">
			    <div className="row">
			      <div className="col-xl-10 col-lg-12">
			        <div className="row">
			          <div className="col-lg-4">
			            <ul className="nav nav-tabs tp-tabs style-two">
			              <li className="nav-item">
			                <a className="nav-link active" data-toggle="tab" href="#tabs_1"><i className="fa fa-user" />Profile</a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" data-toggle="tab" href="#tabs_2"><i className="fa fa-check-square-o" />Verifications</a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" data-toggle="tab" href="#tabs_3"><i className="fa fa-cog" />Settings</a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" data-toggle="tab" href="#tabs_4"><i className="fa fa-recycle" />Recently Viewed</a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" data-toggle="tab" href="#tabs_5"><i className="fa fa-credit-card-alt" />Payment Methods</a>
			              </li>
			              {/* <li className="text-center">
			                <a className="btn btn-yellow" href="#"><i className="fa fa-sign-in" aria-hidden="true" /> <span>Log Out</span></a>
			              </li> */}
			            </ul>
			          </div>
			          <div className="col-xl-7 col-lg-8 offset-xl-1">
			            <div className="tab-content user-tab-content">
			              <div className="tab-pane fade show active" id="tabs_1">
			                <div className="user-details">
			                  <h3 className="user-details-title">Profile</h3>
			                  {/* <div className="tp-img-upload">
			                    <div className="tp-avatar-preview">
			                      <div id="tp_imagePreview" style={{backgroundImage: 'url('+publicUrl+'assets/img/team/1.png)'}}>
			                      </div>
			                    </div>
			                    <div className="tp-avatar-edit">
			                      <input type="file" id="tp_imageUpload" accept=".png, .jpg, .jpeg" />
			                      <label className="btn btn-transparent" htmlFor="tp_imageUpload"><i className="fa fa-picture-o" />Change Photo</label>
			                      <h4 className="name">Afsar Hossen</h4>
			                    </div>
			                  </div> */}
			                  <form className="tp-form-wrap">
			                    <div className="row">
			                      <div className="col-md-6">
			                        <label className="single-input-wrap style-two">
			                          <span className="single-input-title">First Name</span>
			                          {/* <input type="text" name="first-name" value = {isAuthenticated().user.name}/> */}
			                          <input type="text" name="first-name" value = {isAuthenticated().first_name}/>
			                        </label>
			                      </div>
			                      <div className="col-md-6">
			                        <label className="single-input-wrap style-two">
			                          <span className="single-input-title">Last Name</span>
			                          <input type="text" name="last-name" value = {isAuthenticated().last_name}/>
			                        </label>
			                      </div>
			                      <div className="col-lg-12">
			                        <label className="single-input-wrap style-two">
			                          <span className="single-input-title">Tell us about yourself.</span>
			                          <textarea defaultValue={""} name="message" />
			                        </label>
			                      </div>
			                      <div className="col-md-7">
			                        <label className="single-input-wrap style-two">
			                          <span className="single-input-title">Country</span>
			                          <input type="text"  name="country"/>
			                        </label>
			                      </div>
			                      <div className="col-md-6">
			                        <label className="single-input-wrap style-two">
			                          <span className="single-input-title">Email Address</span>
			                          {/* <input type="text" name="email" value = {isAuthenticated().user.email} /> */}
			                          <input type="text" name="email" value = {isAuthenticated().email} />
			                        </label>
			                      </div>
			                      <div className="col-md-6">
			                        <label className="single-input-wrap style-two">
			                          <span className="single-input-title">Other Phone</span>
			                          {/* <input type="text" placeholder={+880} name="phone"  value = {isAuthenticated().user.phone}/> */}
			                          <input type="text" placeholder={+880} name="phone"  value = {isAuthenticated().phone}/>
			                        </label>
			                      </div>
			                      <div className="col-12">
			                        <input className="btn btn-yellow mt-3 text-center" type="submit" />
			                      </div>
			                    </div>
			                  </form>
			                </div>
			              </div>
			              <div className="tab-pane fade" id="tabs_2">
			                <div className="user-verification">
			                  <div className="row">
			                    <div className="col-lg-7">
			                      <h3 className="user-details-title">Verification</h3>
			                      <div className="notice"><i className="fa fa-exclamation-triangle" /> Your email hasn't been verified.</div>
			                      <span>imshuvo97@gmail.com</span>
			                    </div>
			                  </div>
			                </div>
			              </div>
			              <div className="tab-pane fade" id="tabs_3">
			                <div className="user-settings">
			                  <h3 className="user-details-title">Settings</h3>
			                  <div className="row">
			                    <div className="col-lg-7">
			                      <label className="single-input-wrap style-two">
			                        <span className="single-input-title mb-3">Change your password</span>
			                        <input type="text" placeholder="Old password" />
			                      </label>
			                    </div>
			                    <div className="col-lg-7">
			                      <label className="single-input-wrap style-two">
			                        <input type="text" placeholder="New password" />
			                      </label>
			                    </div>
			                    <div className="col-lg-7">
			                      <label className="single-input-wrap style-two">
			                        <input type="text" placeholder="New password" />
			                      </label>
			                    </div>
			                  </div>
			                </div>
			              </div>
			              <div className="tab-pane fade" id="tabs_4">
			                <div className="user-recent-view">
			                  <h3 className="user-details-title">Recently Viewed</h3>
			                  <div className="row">
			                    <div className="col-sm-6">
			                      <div className="single-destinations-list style-two">
			                        <div className="thumb">
			                          <img src={publicUrl+"assets/img/destination-list/4.png"} alt="list" />
			                        </div>
			                        <div className="details">
			                          <p className="location"><img src={publicUrl+"assets/img/icons/1.png"} alt="map" />Maldives</p>
			                          <h4 className="title"><a href="#">Hurawalhi Island</a></h4>
			                          <p className="content">7Days Tour on 2 person</p>
			                          <div className="tp-price-meta">
			                            <h2>620 <small>$</small></h2>
			                          </div>
			                        </div>
			                      </div>
			                    </div>
			                    <div className="col-sm-6">
			                      <div className="single-destinations-list style-two">
			                        <div className="thumb">
			                          <img src={publicUrl+"assets/img/destination-list/5.png"} alt="list" />
			                        </div>
			                        <div className="details">
			                          <p className="location"><img src={publicUrl+"assets/img/icons/1.png"} alt="map" />Indonesia</p>
			                          <h4 className="title"><a href="#">Bali Province</a></h4>
			                          <p className="content">4days 2 person</p>
			                          <div className="tp-price-meta">
			                            <h2>780 <small>$</small></h2>
			                          </div>
			                        </div>
			                      </div>
			                    </div>
			                  </div>
			                </div>
			              </div>
			              <div className="tab-pane fade" id="tabs_5">
			                <div className="user-payment-method">
			                  <div className="location-review-area">
			                    <h3 className="user-details-title">Payment Methods</h3>
			                    <form className="tp-form-wrap bg-gray tp-form-wrap-one">
			                      <div className="row">
			                        <div className="col-lg-7">
			                          <label className="single-input-wrap">
			                            <span className="single-input-title">Credit card number</span>
			                            <input type="text" />
			                          </label>
			                          <label className="single-input-wrap">
			                            <span className="single-input-title">Card holder name</span>
			                            <input type="text" />
			                          </label>
			                          <label className="single-input-wrap">
			                            <span className="single-input-title">Expiry date (Example: 01/17)</span>
			                            <input type="text" />
			                          </label>
			                          <label className="single-input-wrap">
			                            <span className="single-input-title">Issuing bank</span>
			                            <input type="text" />
			                          </label>
			                        </div>
			                        <div className="col-lg-5">
			                          <div className="user-payment-card">
			                            <img src={publicUrl+"assets/img/others/16.png"} alt="img" />
			                            <span>Available payment method:</span>
			                            <div className="payment-card">
			                              <i className="fa fa-cc-paypal" />
			                              <i className="fa fa-cc-visa" />
			                              <i className="fa fa-cc-mastercard" />
			                              <i className="fa fa-credit-card-alt" />
			                            </div>
			                            <a className="btn btn-transparent" href="#">Cancel</a>
			                            <a className="btn btn-yellow" href="#">Save</a>
			                          </div>
			                        </div>
			                      </div>
			                    </form>
			                  </div>
			                </div>
			              </div>
			              <div className="tab-pane fade" id="tabs_6">
			                <div className="user-tour-details">
			                  <h3 className="user-details-title">Reviews</h3>
			                  <span className="user-tour-details-title">Reviews About You</span>
			                  <span>| Reviews By You</span>
			                  <div className="comments-area tour-details-review-area">
			                    <ul className="comment-list mb-0">
			                      <li>
			                        <div className="single-comment-wrap">
			                          <div className="thumb">
			                            <img src={publicUrl+"assets/img/client/2.png"} alt="img" />
			                          </div>
			                          <div className="content">
			                            <h4 className="title">Tyler Bailey</h4>
			                            <span className="date">13 August 2019</span>
			                            <div className="tp-review-meta">
			                              <i className="ic-yellow fa fa-star" />
			                              <i className="ic-yellow fa fa-star" />
			                              <i className="ic-yellow fa fa-star" />
			                              <i className="ic-yellow fa fa-star" />
			                              <i className="ic-yellow fa fa-star" />
			                            </div>
			                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>
			                          </div>
			                        </div>
			                      </li>
			                    </ul>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div> 
			    </div>
			  </div>
			</div>

        }
}

export default UserProfile