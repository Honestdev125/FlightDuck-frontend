import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Package extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="package-area pd-top-108 mg-bottom-92">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-xl-6 col-lg-8">
			        <div className="section-title text-center">
			          <h2 className="title wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.1s">Best Packages For You</h2>
			          <p className="wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.2s">Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices quis non mauris. Aenean scelerisque, sem eu dictum commodo, velit nisi</p>
			        </div>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-xl-3 col-sm-6">
			        <div className="single-package-card wow animated fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.1s">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/destination-list/28.png"} alt="img" />
			          </div>
			          <div className="details">
			            <div className="location">
			              <span className="location-name"><img src={publicUrl+"assets/img/icons/1.png"} alt="img" />Africa</span>
			              <span className="tp-review-meta float-right">
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <span>4.0</span>
			              </span>
			            </div> 
			            <h3>Amazon</h3> 
			            <ul className="package-meta">
			              <li className="tp-price-meta">
			                <p><i className="fa fa-clock-o" /></p>
			                <p>Duration</p>
			                <h2>4 Days</h2>
			              </li>
			              <li className="tp-price-meta">
			                <p><i className="fa fa-users" /></p>
			                <p>Person</p>
			                <h2>2 Adult</h2>
			              </li>
			              <li className="tp-price-meta">
			                <p><i className="fa fa-tag" /></p>
			                <p>Price</p>
			                <h2>620 <span>$</span></h2>
			              </li>
			            </ul> 
			          </div>
			        </div>
			      </div>
			      <div className="col-xl-3 col-sm-6">
			        <div className="single-package-card wow animated fadeInUp" data-wow-duration="0.7s" data-wow-delay="0.2s">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/destination-list/29.png"} alt="img" />
			          </div>
			          <div className="details">
			            <div className="location">
			              <span className="location-name"><img src={publicUrl+"assets/img/icons/1.png"} alt="img" />Peru</span>
			              <span className="tp-review-meta float-right">
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <span>4.0</span>
			              </span>
			            </div> 
			            <h3>British Islands</h3> 
			            <ul className="package-meta">
			              <li className="tp-price-meta">
			                <p><i className="fa fa-clock-o" /></p>
			                <p>Duration</p>
			                <h2>4 Days</h2>
			              </li>
			              <li className="tp-price-meta">
			                <p><i className="fa fa-users" /></p>
			                <p>Person</p>
			                <h2>2 Adult</h2>
			              </li>
			              <li className="tp-price-meta">
			                <p><i className="fa fa-tag" /></p>
			                <p>Price</p>
			                <h2>720 <span>$</span></h2>
			              </li>
			            </ul> 
			          </div>
			        </div>
			      </div>
			      <div className="col-xl-3 col-sm-6">
			        <div className="single-package-card wow animated fadeInUp" data-wow-duration="1.0s" data-wow-delay="0.3s">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/destination-list/30.png"} alt="img" />
			          </div>
			          <div className="details">
			            <div className="location">
			              <span className="location-name"><img src={publicUrl+"assets/img/icons/1.png"} alt="img" />Peru</span>
			              <span className="tp-review-meta float-right">
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <span>4.0</span>
			              </span>
			            </div> 
			            <h3>Great Barrier Reef</h3> 
			            <ul className="package-meta">
			              <li className="tp-price-meta">
			                <p><i className="fa fa-clock-o" /></p>
			                <p>Duration</p>
			                <h2>4 Days</h2>
			              </li>
			              <li className="tp-price-meta">
			                <p><i className="fa fa-users" /></p>
			                <p>Person</p>
			                <h2>2 Adult</h2>
			              </li>
			              <li className="tp-price-meta">
			                <p><i className="fa fa-tag" /></p>
			                <p>Price</p>
			                <h2>310 <span>$</span></h2>
			              </li>
			            </ul> 
			          </div>
			        </div>
			      </div>
			      <div className="col-xl-3 col-sm-6">
			        <div className="single-package-card wow animated fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/destination-list/31.png"} alt="img" />
			          </div>
			          <div className="details">
			            <div className="location">
			              <span className="location-name"><img src={publicUrl+"assets/img/icons/1.png"} alt="img" />Peru</span>
			              <span className="tp-review-meta float-right">
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <i className="ic-yellow fa fa-star" />
			                <span>4.0</span>
			              </span>
			            </div> 
			            <h3>Hurawalhi Island</h3> 
			            <ul className="package-meta">
			              <li className="tp-price-meta">
			                <p><i className="fa fa-clock-o" /></p>
			                <p>Duration</p>
			                <h2>4 Days</h2>
			              </li>
			              <li className="tp-price-meta">
			                <p><i className="fa fa-users" /></p>
			                <p>Person</p>
			                <h2>2 Adult</h2>
			              </li>
			              <li className="tp-price-meta">
			                <p><i className="fa fa-tag" /></p>
			                <p>Price</p>
			                <h2>540 <span>$</span></h2>
			              </li>
			            </ul> 
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default Package