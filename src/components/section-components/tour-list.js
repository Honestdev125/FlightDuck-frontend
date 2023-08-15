import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TourList extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<div className="tour-list-area pd-top-120 viaje-go-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="single-destinations-list style-four">
                      <div className="blur-thumb" style={{backgroundImage: 'url('+publicUrl+'assets/img/destination-list/16.png)'}} />
                      <div className="details">
                        <div className="tp-review-meta">
                          <i className="ic-yellow fa fa-star" />
                          <i className="ic-yellow fa fa-star" />
                          <i className="ic-yellow fa fa-star" />
                          <i className="ic-yellow fa fa-star" />
                          <i className="fa fa-star" />
                          <span>4.0</span>
                        </div>
                        <p className="location"><img src={publicUrl+"assets/img/icons/1.png"} alt="map" />Dubai</p>
                        <h4 className="title"><Link to="/tour-details">Dubai City</Link></h4>
                        <p className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                        <div className="list-price-meta">
                          <ul className="tp-list-meta d-inline-block">
                            <li><i className="fa fa-calendar-o" /> 8oct</li>
                            <li><i className="fa fa-clock-o" /> 4 days</li>
                            <li><i className="fa fa-star" /> 4.3</li>
                          </ul>
                          <div className="tp-price-meta d-inline-block">
                            <p>Price</p>
                            <h2>620 <span>$</span></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-destinations-list style-four">
                      <div className="blur-thumb" style={{backgroundImage: 'url('+publicUrl+'assets/img/destination-list/11.png)'}} />
                      <div className="details">
                        <div className="tp-review-meta">
                          <i className="ic-yellow fa fa-star" />
                          <i className="ic-yellow fa fa-star" />
                          <i className="ic-yellow fa fa-star" />
                          <i className="ic-yellow fa fa-star" />
                          <i className="fa fa-star" />
                          <span>4.0</span>
                        </div>
                        <p className="location"><img src={publicUrl+"assets/img/icons/1.png"} alt="map" />France</p>
                        <h4 className="title"><Link to="/tour-details">Eiffel Tower</Link></h4>
                        <p className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                        <div className="list-price-meta">
                          <ul className="tp-list-meta d-inline-block">
                            <li><i className="fa fa-calendar-o" /> 8oct</li>
                            <li><i className="fa fa-clock-o" /> 4 days</li>
                            <li><i className="fa fa-star" /> 4.3</li>
                          </ul>
                          <div className="tp-price-meta d-inline-block">
                            <p>Price</p>
                            <h2>620 <span>$</span></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-destinations-list style-four">
                      <div className="blur-thumb" style={{backgroundImage: 'url('+publicUrl+'assets/img/destination-list/12.png)'}} />
                      <div className="details">
                        <div className="tp-review-meta">
                          <i className="ic-yellow fa fa-star" />
                          <i className="ic-yellow fa fa-star" />
                          <i className="ic-yellow fa fa-star" />
                          <i className="ic-yellow fa fa-star" />
                          <i className="fa fa-star" />
                          <span>4.0</span>
                        </div>
                        <p className="location"><img src={publicUrl+"assets/img/icons/1.png"} alt="map" />Italy</p>
                        <h4 className="title"><Link to="/tour-details">Colosseum, Rome</Link></h4>
                        <p className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                        <div className="list-price-meta">
                          <ul className="tp-list-meta d-inline-block">
                            <li><i className="fa fa-calendar-o" /> 8oct</li>
                            <li><i className="fa fa-clock-o" /> 4 days</li>
                            <li><i className="fa fa-star" /> 4.3</li>
                          </ul>
                          <div className="tp-price-meta d-inline-block">
                            <p>Price</p>
                            <h2>620 <span>$</span></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-destinations-list style-four">
                      <div className="blur-thumb" style={{backgroundImage: 'url('+publicUrl+'assets/img/destination-list/5.png)'}} />
                      <div className="details">
                        <div className="tp-review-meta">
                          <i className="ic-yellow fa fa-star" />
                          <i className="ic-yellow fa fa-star" />
                          <i className="ic-yellow fa fa-star" />
                          <i className="ic-yellow fa fa-star" />
                          <i className="fa fa-star" />
                          <span>4.0</span>
                        </div>
                        <p className="location"><img src={publicUrl+"assets/img/icons/1.png"} alt="map" />Indonesia</p>
                        <h4 className="title"><Link to="/tour-details">Bali Province</Link></h4>
                        <p className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                        <div className="list-price-meta">
                          <ul className="tp-list-meta d-inline-block">
                            <li><i className="fa fa-calendar-o" /> 8oct</li>
                            <li><i className="fa fa-clock-o" /> 4 days</li>
                            <li><i className="fa fa-star" /> 4.3</li>
                          </ul>
                          <div className="tp-price-meta d-inline-block">
                            <p>Price</p>
                            <h2>620 <span>$</span></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-destinations-list style-four">
                      <div className="blur-thumb" style={{backgroundImage: 'url('+publicUrl+'assets/img/destination-list/7.png)'}} />
                      <div className="details">
                        <div className="tp-review-meta">
                          <i className="ic-yellow fa fa-star" />
                          <i className="ic-yellow fa fa-star" />
                          <i className="ic-yellow fa fa-star" />
                          <i className="ic-yellow fa fa-star" />
                          <i className="fa fa-star" />
                          <span>4.0</span>
                        </div>
                        <p className="location"><img src={publicUrl+"assets/img/icons/1.png"} alt="map" />Spain</p>
                        <h4 className="title"><Link to="/tour-details">Barcelona city beach</Link></h4>
                        <p className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                        <div className="list-price-meta">
                          <ul className="tp-list-meta d-inline-block">
                            <li><i className="fa fa-calendar-o" /> 8oct</li>
                            <li><i className="fa fa-clock-o" /> 4 days</li>
                            <li><i className="fa fa-star" /> 4.3</li>
                          </ul>
                          <div className="tp-price-meta d-inline-block">
                            <p>Price</p>
                            <h2>620 <span>$</span></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-destinations-list style-four">
                      <div className="blur-thumb" style={{backgroundImage: 'url('+publicUrl+'assets/img/destination-list/9.png)'}} />
                      <div className="details">
                        <div className="tp-review-meta">
                          <i className="ic-yellow fa fa-star" />
                          <i className="ic-yellow fa fa-star" />
                          <i className="ic-yellow fa fa-star" />
                          <i className="ic-yellow fa fa-star" />
                          <i className="fa fa-star" />
                          <span>4.0</span>
                        </div>
                        <p className="location"><img src={publicUrl+"assets/img/icons/1.png"} alt="map" />Maldives</p>
                        <h4 className="title"><Link to="/tour-details">Hurawalhi Island</Link></h4>
                        <p className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                        <div className="list-price-meta">
                          <ul className="tp-list-meta d-inline-block">
                            <li><i className="fa fa-calendar-o" /> 8oct</li>
                            <li><i className="fa fa-clock-o" /> 4 days</li>
                            <li><i className="fa fa-star" /> 4.3</li>
                          </ul>
                          <div className="tp-price-meta d-inline-block">
                            <p>Price</p>
                            <h2>620 <span>$</span></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 text-md-center text-left">
                    <div className="tp-pagination text-md-center text-left d-inline-block mt-4">
                      <ul>
                        <li><a className="prev page-numbers" href="#"><i className="la la-long-arrow-left" /></a></li>
                        <li><span className="page-numbers">1</span></li>
                        <li><span className="page-numbers current">2</span></li>
                        <li><a className="page-numbers" href="#">3</a></li>
                        <li><a className="page-numbers" href="#">4</a></li>
                        <li><a className="next page-numbers" href="#"><i className="la la-long-arrow-right" /></a></li>
                      </ul>                          
                    </div>
                  </div>
                </div>
              </div>
            </div>


        }
}

export default TourList