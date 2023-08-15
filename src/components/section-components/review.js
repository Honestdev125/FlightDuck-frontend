import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Review extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="client-review-area client-review-area-home pd-top-70">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6 align-self-center">
			        <div className="thumb wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
			          <div className="client-review-thumb">
			            <img src={publicUrl+"assets/img/others/client-review.png" }alt="review" />
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-6">
			        <div className="single-client-review wow animated fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
			          <p className="sub-title">Travel Reviews</p>
			          <h3 className="location-name">Russia</h3>
			          <div className="tp-review-meta">
			            <i className="ic-yellow fa fa-star" />
			            <i className="ic-yellow fa fa-star" />
			            <i className="ic-yellow fa fa-star" />
			            <i className="ic-yellow fa fa-star" />
			            <i className="fa fa-star" />
			            <span>4.0</span>
			          </div>
			          <p>The largest country in the world, Russia offers a broad array of travel experiences, from treks up the slopes of glacier-capped mountains to strolls along the shoreline of Earth’s oldest lake. Historical sites and cultural activities in the country’s great cities abound as well. Whether you’re exploring the grounds of Moscow’s Kremlin or wandering through the steppes of Mongolia, a visit to Russia is an adventure not soon forgotten. These top tourists attractions in Russia can inspire a great Russian itinerary for a memorable trip.</p>
			          <div className="media">
			            <div className="media-left">
			              <img src={publicUrl+"assets/img/client/1.png"} alt="client" />
			            </div>
			            <div className="media-body">
			              <h6>Jasmine Woodkin</h6>
			              <p>Tourist</p>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default Review