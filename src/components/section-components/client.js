import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Client extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="client-area pd-top-108 pd-bottom-120 jarallax" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/10.png)'}}>
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-xl-6 col-lg-8">
			        <div className="section-title text-center style-two">
			          <h2 className="title">What Our Clicnts Say</h2>
			          <p>Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices quis non mauris. Aenean scelerisque, sem eu dictum commodo, velit nisi</p>
			        </div>
			      </div>
			    </div>
			    <div className="swiper-container client-slider-two">
			      <div className="swiper-wrapper">
			        {/* item */}
			        <div className="swiper-slide">
			          <div className="client-slider-item">
			            <div className="row">
			              <div className="col-lg-5 thumb" style={{backgroundImage: 'url('+publicUrl+'assets/img/tour/10.png)'}}>
			                <div className="title-meta">
			                  <p>Travel Reviews</p>
			                  <h3>Rome Italy</h3>
			                </div>
			              </div>
			              <div className="col-lg-7">
			                <div className="details">
			                  <div className="tp-review-meta">
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <span>4.0</span>
			                  </div>
			                  <h4>Jasmine Woodkin</h4>
			                  <span>TOURIST</span>
			                  <p>The largest country in the world, Russia offers a broad array of travel experiences, from treks up the slopes of glacier-capped mountains to strolls along the shoreline of Earth’s oldest lake. Historical sites and cultural activities in the country’s great cities abound</p>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			        {/* item */}
			        <div className="swiper-slide">
			          <div className="client-slider-item">
			            <div className="row">
			              <div className="col-lg-5 thumb" style={{backgroundImage: 'url('+publicUrl+'assets/img/tour/11.png)'}}>
			                <div className="title-meta">
			                  <p>Travel Reviews</p>
			                  <h3>Iseland</h3>
			                </div>
			              </div>
			              <div className="col-lg-7">
			                <div className="details">
			                  <div className="tp-review-meta">
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <span>4.0</span>
			                  </div>
			                  <h4>Jasmine Woodkin</h4>
			                  <span>TOURIST</span>
			                  <p>The largest country in the world, Russia offers a broad array of travel experiences, from treks up the slopes of glacier-capped mountains to strolls along the shoreline of Earth’s oldest lake. Historical sites and cultural activities in the country’s great cities abound</p>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			        {/* item */}
			        <div className="swiper-slide">
			          <div className="client-slider-item">
			            <div className="row">
			              <div className="col-lg-5 thumb" style={{backgroundImage: 'url('+publicUrl+'assets/img/tour/12.png)'}}>
			                <div className="title-meta">
			                  <p>Travel Reviews</p>
			                  <h3>Africa</h3>
			                </div>
			              </div>
			              <div className="col-lg-7">
			                <div className="details">
			                  <div className="tp-review-meta">
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <i className="ic-yellow fa fa-star" />
			                    <span>4.0</span>
			                  </div>
			                  <h4>Jasmine Woodkin</h4>
			                  <span>TOURIST</span>
			                  <p>The largest country in the world, Russia offers a broad array of travel experiences, from treks up the slopes of glacier-capped mountains to strolls along the shoreline of Earth’s oldest lake. Historical sites and cultural activities in the country’s great cities abound</p>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/* Add Pagination */}
			      <div className="tp-control-nav text-center">
			        <div className="slick-arrow swiper-buttons-prev"><i className="la la-long-arrow-left" /></div>
			        <div className="slick-arrow swiper-buttons-next"><i className="la la-long-arrow-right" /></div>
			      </div>
			      {/* /.end carousel */}                    
			    </div>
			  </div>
			</div>



        }
}

export default Client