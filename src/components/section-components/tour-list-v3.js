import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TourListV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<div className="tour-list-area pd-top-120 viaje-go-top">
              <div className="container">
                <div className="row">
                  <div className="col-xl-9 col-lg-8 order-lg-12">
                    <div className="tp-tour-list-search-area">
                      <div className="row">
                        <div className="col-xl-3 col-sm-6">
                          <label className="single-input-wrap">
                            <i className="fa fa-calendar-minus-o" />
                            <input type="text" className="departing-date" placeholder="Departing" />
                          </label>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <label className="single-input-wrap tour-list-search-icon">
                            <i className="la la-arrow-up" />
                            <input type="text" placeholder="Price Low to High" />
                          </label>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <label className="single-input-wrap tour-list-search-icon">
                            <i className="la la-arrow-down" />
                            <input type="text" placeholder="Price High to Low" />
                          </label>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                          <label className="single-input-wrap">
                            <i className="fa fa-paper-plane" />
                            <input type="text" placeholder="Name (A - Z)" />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-lg-4 col-sm-6">
                        <div className="single-destinations-list style-two">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/destination-list/4.png"} alt="list" />
                          </div>
                          <div className="details">
                            <p className="location"><img src={publicUrl+"assets/img/icons/1.png"} alt="map" />Maldives</p>
                            <h4 className="title"><Link to="/tour-details">Hurawalhi Island</Link></h4>
                            <p className="content">7 Days Tour on 2 person</p>
                            <div className="tp-price-meta">
                              <h2>620 <small>$</small></h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="single-destinations-list style-two">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/destination-list/5.png"} alt="list" />
                          </div>
                          <div className="details">
                            <p className="location"><img src={publicUrl+"assets/img/icons/1.png"} alt="map" />Indonesia</p>
                            <h4 className="title"><Link to="/tour-details">Bali Province</Link></h4>
                            <p className="content">4 days 2 person</p>
                            <div className="tp-price-meta">
                              <h2>780 <small>$</small></h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="single-destinations-list style-two">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/destination-list/6.png"} alt="list" />
                          </div>
                          <div className="details">
                            <p className="location"><img src={publicUrl+"assets/img/icons/1.png"} alt="map" />Bangladesh</p>
                            <h4 className="title"><Link to="/tour-details">Cox's bazar Sea Beach</Link></h4>
                            <p className="content">4 days 4 person</p>
                            <div className="tp-price-meta">
                              <h2>850 <small>$</small></h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="single-destinations-list style-two">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/destination-list/7.png"} alt="list" />
                          </div>
                          <div className="details">
                            <p className="location"><img src={publicUrl+"assets/img/icons/1.png"} alt="map" />Spain</p>
                            <h4 className="title"><Link to="/tour-details">Barcelona city beach</Link></h4>
                            <p className="content">3 days 2 person</p>
                            <div className="tp-price-meta">
                              <h2>620 <small>$</small></h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="single-destinations-list style-two">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/destination-list/8.png"} alt="list" />
                          </div>
                          <div className="details">
                            <p className="location"><img src={publicUrl+"assets/img/icons/1.png"} alt="map" />Africa</p>
                            <h4 className="title"><Link to="/tour-details">Amazon Africa</Link></h4>
                            <p className="content">5 days 2 person</p>
                            <div className="tp-price-meta">
                              <h2>620 <small>$</small></h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="single-destinations-list style-two">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/destination-list/9.png"} alt="list" />
                          </div>
                          <div className="details">
                            <p className="location"><img src={publicUrl+"assets/img/icons/1.png"} alt="map" />Thailand</p>
                            <h4 className="title"><Link to="/tour-details">Thailand beach</Link></h4>
                            <p className="content">4 days 3 person</p>
                            <div className="tp-price-meta">
                              <h2>620 <small>$</small></h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="single-destinations-list style-two">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/destination-list/10.png"} alt="list" />
                          </div>
                          <div className="details">
                            <p className="location"><img src={publicUrl+"assets/img/icons/1.png"} alt="map" />Bali</p>
                            <h4 className="title"><Link to="/tour-details">Bali Province</Link></h4>
                            <p className="content">3 days 2 person</p>
                            <div className="tp-price-meta">
                              <h2>620 <small>$</small></h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="single-destinations-list style-two">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/destination-list/11.png"} alt="list" />
                          </div>
                          <div className="details">
                            <p className="location"><img src={publicUrl+"assets/img/icons/1.png"} alt="map" />France</p>
                            <h4 className="title"><Link to="/tour-details">France eiffel tower</Link></h4>
                            <p className="content">1 days 2 person</p>
                            <div className="tp-price-meta">
                              <h2>620 <small>$</small></h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <div className="single-destinations-list style-two">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/destination-list/12.png"} alt="list" />
                          </div>
                          <div className="details">
                            <p className="location"><img src={publicUrl+"assets/img/icons/1.png"} alt="map" />Rome</p>
                            <h4 className="title"><Link to="/tour-details">Colosseum, Rome</Link></h4>
                            <p className="content">3 days 3 person</p>
                            <div className="tp-price-meta">
                              <h2>620 <small>$</small></h2>
                            </div>
                          </div>
                        </div>
                      </div>   
                      <div className="col-lg-12 text-center">
                        <div className="tp-pagination text-center d-inline-block mt-4">
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
                  <div className="col-xl-3 col-lg-4 order-lg-1">
                    <div className="sidebar-area sidebar-area-inner-page">
                      <div className="widget tour-list-widget">
                        <div className="widget-tour-list-search">
                          <form className="search-form">
                            <div className="form-group">
                              <input type="text" placeholder="Search" />
                            </div>
                            <button className="submit-btn" type="submit"><i className="ti-search" /></button>
                          </form>
                        </div>
                        <div className="widget-tour-list-meta">
                          <div className="single-widget-search-input-title"><i className="fa fa-dot-circle-o" /> Where From?</div>
                          <div className="single-widget-search-input">
                            <input type="text" placeholder="Tour List Destination" />
                          </div>
                          <div className="single-widget-search-input-title"><i className="fa fa-plus-circle" /> Travel Type</div>
                          <div className="single-widget-search-input">
                            <select className="select w-100 custom-select">
                              <option value={1}>Tour List Destination</option>
                              <option value={2}>two</option>
                              <option value={3}>Three</option>
                              <option value={3}>Four</option>
                            </select>
                          </div>
                          <div className="single-widget-search-input-title"><i className="fa fa-calendar-minus-o" /> Departing</div>
                          <div className="single-widget-search-input">
                            <input type="text" className="departing-date custom-select" placeholder="Departing" />
                          </div>
                          <div className="single-widget-search-input-title"><i className="fa fa-calendar-minus-o" /> Returning</div>
                          <div className="single-widget-search-input">
                            <input type="text" className="returning-date custom-select" placeholder="Returning" />
                          </div>
                          <div className="single-widget-search-input-title"><i className="fa fa-usd" /> Price Filter</div>
                          <div className="widget-product-sorting">
                            <div className="slider-product-sorting" />
                            <div className="product-range-detail">
                              <label htmlFor="amount">Price: </label>
                              <input type="text" id="amount" readOnly />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="widget_ads">
                        <a href="#"><img src={publicUrl+"assets/img/others/01.png"} alt="img" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        }
}

export default TourListV3