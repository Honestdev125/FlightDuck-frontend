import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class HolidayFun extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="holiday-plan-area tp-holiday-plan-area mg-top-96" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/8.png)'}}>
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-xl-6 col-lg-9">
			        <div className="section-title text-center">
			          <h2 className="title wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.1s">Perfect Holiday Plan</h2>
			          <p className="wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.2s">No vis fastidii accumsan, ignota postulant ea mea. Vis et prima integre, ei vis ridens moderatius reformidans cu vim doctus accumsan ignota.</p>
			        </div>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.1s">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/destination-list/4.png"} alt="list" />
			          </div>
			          <div className="details">
			            <p className="location"><img src={publicUrl+"assets/img/icons/1.png"} alt="map" />Maldives</p>
			            <h4 className="title">Hurawalhi Island</h4>
			            <p className="content">7 Days Tour on 2 person</p>
			            <div className="tp-price-meta">
			              <h2>620 <small>$</small></h2>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.7s" data-wow-delay="0.2s">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/destination-list/5.png"} alt="list" />
			          </div>
			          <div className="details">
			            <p className="location"><img src={publicUrl+"assets/img/icons/1.png"} alt="map" />Indonesia</p>
			            <h4 className="title">Bali Province</h4>
			            <p className="content">4 days 2 person</p>
			            <div className="tp-price-meta">
			              <h2>780 <small>$</small></h2>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.9s" data-wow-delay="0.3s">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/destination-list/6.png"} alt="list" />
			          </div>
			          <div className="details">
			            <p className="location"><img src={publicUrl+"assets/img/icons/1.png"} alt="map" />Bangladesh</p>
			            <h4 className="title">Cox's bazar Sea Beach</h4>
			            <p className="content">4 days 4 person</p>
			            <div className="tp-price-meta">
			              <h2>850 <small>$</small></h2>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-sm-6">
			        <div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="1.1s" data-wow-delay="0.4s">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/destination-list/7.png"} alt="list" />
			          </div>
			          <div className="details">
			            <p className="location"><img src={publicUrl+"assets/img/icons/1.png"} alt="map" />Spain</p>
			            <h4 className="title">Barcelona city beach</h4>
			            <p className="content">3 days 2 person</p>
			            <div className="tp-price-meta">
			              <h2>620 <small>$</small></h2>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default HolidayFun