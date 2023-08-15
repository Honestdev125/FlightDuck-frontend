import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class UpcomingTour extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="upcomming-tour upcomming-tour-bg pd-top-75 pd-bottom-120 viaje-go-top" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/11.png)'}}>
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-4">
		        <div className="section-title">
		          <h2 className="title">Upcoming Tours</h2>
		          <p>Mauris neque nisi, faucibus non elementum in, convallis et eros. Sed pretium sem libero, vel pellentesque purus ultrices ut.</p>
		        </div>
		        <div className="row">
		          <div className="col-lg-8">
		            <form className="search-form">
		              <div className="form-group">
		                <input type="text" placeholder="Search" />
		              </div>
		              <button className="submit-btn" type="submit"><i className="ti-search" /></button>
		            </form>
		          </div>   
		        </div>
		      </div>
		      <div className="col-lg-8">
		        <div className="upcomming-card-slider upcomming-card-slider-2 tp-common-slider-style">
		          <div className="single-upconing-card">
		            <div className="shadow" style={{backgroundImage: 'url('+publicUrl+'assets/img/tour/8.png)'}}>
		              <img src={publicUrl+"assets/img/tour/8.png"} alt="img" />
		            </div>
		            <div className="tp-price-meta">
		              <h2>620 <small>$</small></h2>
		              <p>Price</p>
		            </div>
		            <div className="details">
		              <h3 className="title"><Link to="/tour-details">Rome</Link></h3>
		              <p><i className="fa fa-map-marker" /> Italy</p>
		              <div className="tp-review-meta">
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <span>4.0</span>
		              </div>
		            </div>
		          </div>
		          <div className="single-upconing-card">
		            <div className="shadow" style={{backgroundImage: 'url('+publicUrl+'assets/img/tour/9.png)'}}>
		              <img src={publicUrl+"assets/img/tour/9.png"} alt="img" />
		            </div>
		            <div className="tp-price-meta">
		              <h2>675 <small>$</small></h2>
		              <p>Price</p>
		            </div>
		            <div className="details">
		              <h3 className="title"><Link to="/tour-details">Great Barrier</Link></h3>
		              <p><i className="fa fa-map-marker" /> Australia</p>
		              <div className="tp-review-meta">
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <span>4.0</span>
		              </div>
		            </div>
		          </div>
		          <div className="single-upconing-card">
		            <div className="shadow" style={{backgroundImage: 'url('+publicUrl+'assets/img/tour/3.png)'}}>
		              <img src={publicUrl+"assets/img/tour/3.png"} alt="img" />
		            </div>
		            <div className="tp-price-meta">
		              <h2>350 <small>$</small></h2>
		              <p>Price</p>
		            </div>
		            <div className="details">
		              <h3 className="title"><Link to="/tour-details">Barrier Reef</Link></h3>
		              <p><i className="fa fa-map-marker" /> Peru</p>
		              <div className="tp-review-meta">
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <span>4.0</span>
		              </div>
		            </div>
		          </div>
		          <div className="single-upconing-card">
		            <div className="shadow" style={{backgroundImage: 'url('+publicUrl+'assets/img/tour/7.png)'}}>
		              <img src={publicUrl+"assets/img/tour/7.png"} alt="img" />
		            </div>
		            <div className="tp-price-meta">
		              <h2>620 <small>$</small></h2>
		              <p>Price</p>
		            </div>
		            <div className="details">
		              <h3 className="title"><Link to="/tour-details">Machu Picchu</Link></h3>
		              <p><i className="fa fa-map-marker" /> Peru</p>
		              <div className="tp-review-meta">
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <i className="ic-yellow fa fa-star" />
		                <span>4.0</span>
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

export default UpcomingTour