import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class History extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="destination-grid-area pd-top-105 viaje-go-top">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-6">
			        <div className="section-title text-center">
			          <h2 className="title">Our History</h2>
			          <p>Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula. Quisque quis pharetra felis. Ut quis consequat orci, at consequat felis.</p>
			        </div>
			      </div>
			    </div>
			    <div className="row justify-content-center">
			      <div className="col-lg-4 col-md-6">
			        <div className="single-destination-grid style-two">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/destination-list/17.png"} alt="img" />
			          </div>
			          <div className="details">
			            <ul className="d-list-meta">
			              <li className="date">2019</li>
			              <li><img src={publicUrl+"assets/img/icons/13.png"} alt="img" /> 550+ Tour Complite</li>
			              <li><img src={publicUrl+"assets/img/icons/14.png"} alt="img" /> 25+ Awards Win</li>
			            </ul>
			            <h3 className="title"><Link to="/destination-details">The Best Travel Places In The World 2019</Link></h3>
			            <p className="content">Africa is the world's second largest and second most- populous continent, being behind Asia in both categories. At about 30.3 million km² including adjacent islands, it covers 6% Earth's total suyface area and 20% land area.</p>
			          </div>
			        </div>
			      </div>  
			      <div className="col-lg-4 col-md-6">
			        <div className="single-destination-grid style-two">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/destination-list/18.png"} alt="img" />
			          </div>
			          <div className="details">
			            <ul className="d-list-meta">
			              <li className="date">2019</li>
			              <li><img src={publicUrl+"assets/img/icons/13.png"} alt="img" /> 120+ Tour Complite</li>
			              <li><img src={publicUrl+"assets/img/icons/14.png"} alt="img" /> 25+ Awards Win</li>
			            </ul>
			            <h3 className="title"><Link to="/destination-details">The Best Travel Places In The World 2018</Link></h3>
			            <p className="content">Africa is the world's second largest and second most- populous continent, being behind Asia in both categories. At about 30.3 million km² including adjacent islands, it covers 6% Earth's total suyface area and 20% land area.</p>
			          </div>
			        </div>
			      </div> 
			      <div className="col-lg-4 col-md-6">
			        <div className="single-destination-grid style-two">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/destination-list/19.png"} alt="img" />
			          </div>
			          <div className="details">
			            <ul className="d-list-meta">
			              <li className="date">2019</li>
			              <li><img src={publicUrl+"assets/img/icons/13.png"} alt="img" /> 130+ Tour Complite</li>
			              <li><img src={publicUrl+"assets/img/icons/14.png"} alt="img" /> 25+ Awards Win</li>
			            </ul>
			            <h3 className="title"><Link to="/destination-details">The Best Travel Places In The World 2017</Link></h3>
			            <p className="content">Africa is the world's second largest and second most- populous continent, being behind Asia in both categories. At about 30.3 million km² including adjacent islands, it covers 6% Earth's total suyface area and 20% land area.</p>
			          </div>
			        </div>
			      </div> 
			    </div>
			  </div>
			</div>
        }
}

export default History