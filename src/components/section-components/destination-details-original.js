import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class DestinatioDetails extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<div>
              <div className="destinations-details-page mt-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-xl-10">
                      <div className="destinations-details-main-slider-wrap">
                        <div className="destinations-details-main-slider" style={{backgroundColor: '#efefef'}}>
                          <div className="d-details-main-slider-item" style={{padding: '18px'}}>
                            <center><img src={publicUrl+"assets/img/others/checkbox.png"} alt="img" style={{marginTop: '20px'}}/></center>
                            <center><h3>Congratulations</h3></center>
                            <center>
                              <p>Your Hotel booking has been successful. A confirmation mail has been sent to you already.
                                <br></br>Your booking reference number is : <b>STNW2340</b>
                              </p>
                            </center>
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td className="title">Country</td>
                                  <td className="title">Room</td>
                                  <td className="title">Duration</td>
                                  <td className="title">Price</td>
                                </tr>
                                <tr>
                                  <td>
                                    <i className="fa fa-map-marker"></i> Maldives
                                    <h4 className="mt-2">Spanish Steps</h4>
                                  </td>
                                  <td>
                                    <p>3 days 2 person</p>
                                    <h4>Studio Queen</h4>
                                  </td>
                                  <td>
                                    <p>8 Oct to 10 Oct</p>
                                    <h4>3 Days</h4>
                                  </td>
                                  <td>
                                    <h3><span>$</span>320</h3>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div style={{backgroundColor: 'white', margin: '20px', padding: '20px', borderRadius: '10px'}}>
                              <center>
                                <b>Now, all you have to do is book the flights - </b>
                              </center>
                              <br></br>
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <td className="title">From</td>
                                    <td className="title">To</td>
                                    <td className="title">Flight Type</td>
                                    <td className="title">Price</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h4>New York(JKF)</h4>
                                      <p>17:30</p>
                                    </td>
                                    <td>
                                      <h4>Tel Aviv(TLV)</h4>
                                      <p>19:50</p>
                                    </td>
                                    <td>
                                      <h4>Layover</h4>
                                      <p>(2 hours and 15 minutes) Moscow</p>
                                    </td>
                                    <td>
                                      <h3><span>$</span>320</h3>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        {/* <div className="destinations-details-main-slider-controls">
                          <div className="slider-nav tp-control-nav" />
                          <div className="slider-extra tp-slider-extra">
                            <div className="text">
                              <span className="first">01 </span>
                              <span className="last">05</span>
                            </div>
                            <div className="d-list-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
                              <span className="slider__label sr-only" />
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="row destinations-details-location-name">
                    <div className="col-lg-12">
                      <h3>Africa</h3>
                      <p>Continen</p>
                    </div>
                    <div className="col-lg-6">
                      <p>Africa is the world's second largest and second most-populous continent. At about 30.3 million km² including djacent islands, it covers 6% of Earth's total surface area and 20% of its land area. With 1.2 billion people as of 2016, it accounts for about 16% of the world's human population</p>
                    </div>
                    <div className="col-lg-6">
                      <p>It accounts for about 16% of the world's human population. The continent is surrounded by the Mediterranean Sea to the Africa is the world's second largest and second most-populous continent. At about 30.3 million km² including djacent islands.</p>
                    </div>
                  </div>
                  {/* destinations-client-review-slider start */}
                  <h4 className="single-page-small-title">Based On Traveller Visits and Local Insights</h4>
                  <div className="destinations-client-review-slider tp-common-slider-style">
                    <div className="d-client-review-slider-item">
                      <div className="single-destination-grid text-center">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/destination-list/8.png"} alt="img" />
                        </div>
                        <div className="details">
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" />
                            <span>4.0</span>
                          </div>
                          <h4 className="title">Africa</h4>
                          <p className="content">Africa is the world's second largest and second most-populous continent, being behind Asia in both categories. At about 30.3 million km² including adjacent islands, it</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-client-review-slider-item">
                      <div className="single-destination-grid text-center">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/destination-list/9.png"} alt="img" />
                        </div>
                        <div className="details">
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" />
                            <span>4.0</span>
                          </div>
                          <h4 className="title">Thailand</h4>
                          <p className="content">Thailand is the world's second largest and second most-populous continent, being behind Asia in both categories. At about 30.3 million km² including adjacent islands, it</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-client-review-slider-item">
                      <div className="single-destination-grid text-center">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/destination-list/10.png"} alt="img" />
                        </div>
                        <div className="details">
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" />
                            <span>4.0</span>
                          </div>
                          <h4 className="title">Thailand</h4>
                          <p className="content">Africa is the world's second largest and second most-populous continent, being behind Asia in both categories. At about 30.3 million km² including adjacent islands, it</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-client-review-slider-item">
                      <div className="single-destination-grid text-center">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/destination-list/11.png"} alt="img" />
                        </div>
                        <div className="details">
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" />
                            <span>4.0</span>
                          </div>
                          <h4 className="title">France</h4>
                          <p className="content">Africa is the world's second largest and second most-populous continent, being behind Asia in both categories. At about 30.3 million km² including adjacent islands, it</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-client-review-slider-item">
                      <div className="single-destination-grid text-center">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/destination-list/12.png"} alt="img" />
                        </div>
                        <div className="details">
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" />
                            <span>4.0</span>
                          </div>
                          <h4 className="title">Mexico</h4>
                          <p className="content">Africa is the world's second largest and second most-populous continent, being behind Asia in both categories. At about 30.3 million km² including adjacent islands, it</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* destinations-client-review-slider end */}
                  {/* trip-plan start */}
                  <div className="trip-plan-area">
                    <h4 className="single-page-small-title">Plan a trip</h4>
                    <div className="row justify-content-center">
                      <div className="col-lg-4 col-md-6">
                        <div className="single-trip-plan">
                          <div className="thumb single-trip-plan-left">
                            <img src={publicUrl+"assets/img/others/6.png"} alt="blog" />
                          </div>
                          <div className="single-trip-plan-right">
                            <ul className="tp-list-meta border-bt-dot">
                              <li><i className="fa fa-calendar-o" /> 8oct</li>
                              <li><i className="fa fa-clock-o" /> 4 days</li>
                              <li><i className="fa fa-star" /> 4.3</li>
                            </ul>
                            <div className="tp-price-meta tp-price-meta-cl">
                              <p>Price</p>
                              <h2>620 <small>$</small></h2>
                              <del>620<span>$</span></del>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="single-trip-plan">
                          <div className="thumb single-trip-plan-left">
                            <img src={publicUrl+"assets/img/others/7.png"} alt="blog" />
                          </div>
                          <div className="single-trip-plan-right">
                            <ul className="tp-list-meta border-bt-dot">
                              <li><i className="fa fa-calendar-o" /> 8oct</li>
                              <li><i className="fa fa-clock-o" /> 4 days</li>
                              <li><i className="fa fa-star" /> 4.3</li>
                            </ul>
                            <div className="tp-price-meta tp-price-meta-cl">
                              <p>Price</p>
                              <h2>620 <small>$</small></h2>
                              <del>620<span>$</span></del>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="single-trip-plan">
                          <div className="thumb single-trip-plan-left">
                            <img src={publicUrl+"assets/img/others/6.png"} alt="blog" />
                          </div>
                          <div className="single-trip-plan-right">
                            <ul className="tp-list-meta border-bt-dot">
                              <li><i className="fa fa-calendar-o" /> 8oct</li>
                              <li><i className="fa fa-clock-o" /> 4 days</li>
                              <li><i className="fa fa-star" /> 4.3</li>
                            </ul>
                            <div className="tp-price-meta tp-price-meta-cl">
                              <p>Price</p>
                              <h2>620 <small>$</small></h2>
                              <del>620<span>$</span></del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* trip-plan End */}
                  {/* location-details start */}
                  <div className="location-details">
                    <h4 className="single-page-small-title">Good To Know</h4>
                    <div className="row">
                      <div className="col-lg-7">
                        <div className="location-details-table">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td className="title">Country</td>
                                <td>Africa</td>
                              </tr>
                              <tr>
                                <td className="title">Visa Requirements</td>
                                <td>Visa Requirements</td>
                              </tr>
                              <tr>
                                <td className="title">Languages Spoken</td>
                                <td>Afroasiatic languages</td>
                              </tr>
                              <tr>
                                <td className="title">Currency Used</td>
                                <td>Rant</td>
                              </tr>
                              <tr>
                                <td className="title">Ares (km2)</td>
                                <td>30.37 million km²</td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="btn-wrap text-center">
                            <a className="btn btn-yellow" href><span>Pdf Download<i className="ti-download" /></span></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="location-details-map">
                        <div style={{maxWidth: '100%', listStyle: 'none', transition: 'none', overflow: 'hidden', width: '654px', height: '400px'}}><div id="display-googlemap" style={{height: '100%', width: '100%', maxWidth: '100%'}}><iframe style={{height: '100%', width: '100%', border: 0}} frameBorder={0} src="https://www.google.com/maps/embed/v1/place?q=london&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" /></div><a className="googlehtml" rel="nofollow" href="https://www.embed-map.com" id="get-mapdata">https://www.embed-map.com</a><style dangerouslySetInnerHTML={{__html: "#display-googlemap img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}" }} /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* location-details end */}
                  {/* location-review-area start */}
                  <div className="location-review-area">
                    <div className="row">
                      <div className="col-lg-8">
                        <form className="tp-form-wrap bg-gray tp-form-wrap-one">
                          <div className="row">
                            <div className="col-md-12">
                              <h4 className="single-page-small-title">Payment Details</h4>
                            </div>
                            <div className="col-md-6">
                              <label className="single-input-wrap">
                                <span className="single-input-title">First Name</span>
                                <input type="text" />
                              </label>
                            </div>
                            <div className="col-md-6">
                              <label className="single-input-wrap">
                                <span className="single-input-title">Last Name</span>
                                <input type="text" />
                              </label>
                            </div>
                            <div className="col-md-6">
                              <label className="single-input-wrap">
                                <span className="single-input-title">Email</span>
                                <input type="email" />
                              </label>
                            </div>
                            <div className="col-md-6">
                              <label className="single-input-wrap">
                                <span className="single-input-title">Phone Number</span>
                                <input type="phone" />
                              </label>
                            </div>
                            <div className="col-lg-12">
                              <label className="single-input-wrap">
                                <span className="single-input-title">Address</span>
                                <textarea defaultValue={""} />
                              </label>
                            </div>
                            <br></br>
                            <div className="col-md-12 mt-5">
                              <h4 className="single-page-small-title">Credit Card Details</h4>
                            </div>
                            <div className="col-md-6">
                              <label className="single-input-wrap">
                                <span className="single-input-title">Name on Card</span>
                                <input type="text" className="form-control cc-name valid" data-val="true" data-val-required="Please enter the name on card" autocomplete="cc-name" aria-required="true" aria-invalid="false" aria-describedby="cc-name-error"/>
                              </label>
                            </div>
                            <div className="col-md-6">
                              <label className="single-input-wrap">
                                <span className="single-input-title">Card Number</span>
                                <input type="tel" className="form-control cc-number identified visa" value="" data-val="true" data-val-required="Please enter the card number" data-val-cc-number="Please enter a valid card number" autocomplete="cc-number"/>
                              </label>
                            </div>
                            <div className="col-md-6">
                              <label className="single-input-wrap">
                                <span className="single-input-title">Validity</span>
                                <input type="tel" data-val="true" data-val="true" data-val-required="Please enter the card expiration" data-val-cc-exp="Please enter a valid month and year" placeholder="MM / YY" autocomplete="cc-exp"/>
                              </label>
                            </div>
                            <div className="col-md-6">
                              <label className="single-input-wrap">
                                <span className="single-input-title">CVC</span>
                                <input type="tel" value="" data-val="true" data-val-required="Please enter the security code" data-val-cc-cvc="Please enter a valid security code" autocomplete="off"/>
                              </label>
                            </div>
                            
                            <div className="col-12">
                              <a className="btn btn-yellow" href="#">Pay Now</a>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="col-xl-3 col-lg-4 offset-xl-1 mt-5 mt-lg-0 hidden-md">
                        <a href="#">
                          <img src={publicUrl+"assets/img/others/01.png"} alt="ads" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* location-review-area start */}
                </div>
              </div>
              <div className="destination-area pd-top-120">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                      <div className="single-destination-grid text-center">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/destination-list/8.png"} alt="img" />
                        </div>
                        <div className="details">
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" />
                            <span>4.0</span>
                          </div>
                          <h3 className="title">Africa</h3>
                          <p className="content">Africa is the world's second largest and second most- populous continent, being behind Asia in both categories. At about 30.3 million km² including adjacent islands, it covers 6% Earth's total surface area and 20% land area.</p>
                          <a className="btn btn-gray" href="#"><span>Explore<i className="la la-arrow-right" /></span></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="single-destination-grid text-center">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/destination-list/9.png"} alt="img" />
                        </div>
                        <div className="details">
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" />
                            <span>4.0</span>
                          </div>
                          <h3 className="title">Africa</h3>
                          <p className="content">Africa is the world's second largest and second most- populous continent, being behind Asia in both categories. At about 30.3 million km² including adjacent islands, it covers 6% Earth's total surface area and 20% land area.</p>
                          <a className="btn btn-gray" href="#"><span>Explore<i className="la la-arrow-right" /></span></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="single-destination-grid text-center">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/destination-list/10.png"} alt="img" />
                        </div>
                        <div className="details">
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" />
                            <span>4.0</span>
                          </div>
                          <h3 className="title">Africa</h3>
                          <p className="content">Africa is the world's second largest and second most- populous continent, being behind Asia in both categories. At about 30.3 million km² including adjacent islands, it covers 6% Earth's total surface area and 20% land area.</p>
                          <a className="btn btn-gray" href="#"><span>Explore<i className="la la-arrow-right" /></span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        }
}

export default DestinatioDetails