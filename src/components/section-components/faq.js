import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Faq extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<div className="faq-page-area pd-top-110">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-9 col-lg-8">
                      <div className="row">
                        <div className="col-xl-8">
                          <div className="section-title mb-0">
                            <h2 className="title">Frequently Asked Questions</h2>
                            <p>Aenean non accumsan ante. Duis et risus accumsan sem tempus porta nec sit amet est. Sed ut euismod quam. Suspendisse potenti. Aliquam fringilla</p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-5">
                          <ul className="nav nav-tabs tp-tabs">
                            <li className="nav-item">
                              <a className="nav-link active" data-toggle="tab" href="#tabs_1">Trip style</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-toggle="tab" href="#tabs_2">Travelling in a group</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-toggle="tab" href="#tabs_3">Travelling with children</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-toggle="tab" href="#tabs_4">Travelling solo</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-toggle="tab" href="#tabs_5">I have a disability – can I join an trip?</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-toggle="tab" href="#tabs_6">Are Intrepid trips suitable for LGBTQI?</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-toggle="tab" href="#tabs_7">Room types</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-7">
                          <div className="tab-content faq-tab-content" style={{backgroundImage: 'url('+publicUrl+'assets/img/others/12.png)'}}>
                            <div className="tab-pane fade show active" id="tabs_1">
                              <div className="faq-details">
                                <h6>01 I have special dietary requirements – will they be catered for?</h6>
                                <p>We will try our very hardest to accommodate all dietary requirements but in some out-of-the-way places it can be very difficult to guarantee. We will let you know if there are places on your itinerary where this is the case. Please let us know at the time of booking of any food requirements or allergies and we’ll pass the information</p>
                                <h6>What will the food be like on my trip?</h6>
                                <p className="mb-0">Food is one of the most exciting parts of travel. There may be some familiar fare but often you’ll be confronted with the new, interesting and downright weird of the culinary world but we like to think of it as an adventure for all the senses. In addition to this, our flexible itineraries often</p>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="tabs_2">
                              <div className="faq-details">
                                <h6>02 I have special dietary requirements – will they be catered for?</h6>
                                <p>We will try our very hardest to accommodate all dietary requirements but in some out-of-the-way places it can be very difficult to guarantee. We will let you know if there are places on your itinerary where this is the case. Please let us know at the time of booking of any food requirements or allergies and we’ll pass the information</p>
                                <h6>What will the food be like on my trip?</h6>
                                <p className="mb-0">Food is one of the most exciting parts of travel. There may be some familiar fare but often you’ll be confronted with the new, interesting and downright weird of the culinary world but we like to think of it as an adventure for all the senses. In addition to this, our flexible itineraries often</p>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="tabs_3">
                              <div className="faq-details">
                                <h6>03 I have special dietary requirements – will they be catered for?</h6>
                                <p>We will try our very hardest to accommodate all dietary requirements but in some out-of-the-way places it can be very difficult to guarantee. We will let you know if there are places on your itinerary where this is the case. Please let us know at the time of booking of any food requirements or allergies and we’ll pass the information</p>
                                <h6>What will the food be like on my trip?</h6>
                                <p className="mb-0">Food is one of the most exciting parts of travel. There may be some familiar fare but often you’ll be confronted with the new, interesting and downright weird of the culinary world but we like to think of it as an adventure for all the senses. In addition to this, our flexible itineraries often</p>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="tabs_4">
                              <div className="faq-details">
                                <h6>04 I have special dietary requirements – will they be catered for?</h6>
                                <p>We will try our very hardest to accommodate all dietary requirements but in some out-of-the-way places it can be very difficult to guarantee. We will let you know if there are places on your itinerary where this is the case. Please let us know at the time of booking of any food requirements or allergies and we’ll pass the information</p>
                                <h6>What will the food be like on my trip?</h6>
                                <p className="mb-0">Food is one of the most exciting parts of travel. There may be some familiar fare but often you’ll be confronted with the new, interesting and downright weird of the culinary world but we like to think of it as an adventure for all the senses. In addition to this, our flexible itineraries often</p>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="tabs_5">
                              <div className="faq-details">
                                <h6>05 I have special dietary requirements – will they be catered for?</h6>
                                <p>We will try our very hardest to accommodate all dietary requirements but in some out-of-the-way places it can be very difficult to guarantee. We will let you know if there are places on your itinerary where this is the case. Please let us know at the time of booking of any food requirements or allergies and we’ll pass the information</p>
                                <h6>What will the food be like on my trip?</h6>
                                <p className="mb-0">Food is one of the most exciting parts of travel. There may be some familiar fare but often you’ll be confronted with the new, interesting and downright weird of the culinary world but we like to think of it as an adventure for all the senses. In addition to this, our flexible itineraries often</p>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="tabs_6">
                              <div className="faq-details">
                                <h6>06 I have special dietary requirements – will they be catered for?</h6>
                                <p>We will try our very hardest to accommodate all dietary requirements but in some out-of-the-way places it can be very difficult to guarantee. We will let you know if there are places on your itinerary where this is the case. Please let us know at the time of booking of any food requirements or allergies and we’ll pass the information</p>
                                <h6>What will the food be like on my trip?</h6>
                                <p className="mb-0">Food is one of the most exciting parts of travel. There may be some familiar fare but often you’ll be confronted with the new, interesting and downright weird of the culinary world but we like to think of it as an adventure for all the senses. In addition to this, our flexible itineraries often</p>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="tabs_7">
                              <div className="faq-details">
                                <h6>07 I have special dietary requirements – will they be catered for?</h6>
                                <p>We will try our very hardest to accommodate all dietary requirements but in some out-of-the-way places it can be very difficult to guarantee. We will let you know if there are places on your itinerary where this is the case. Please let us know at the time of booking of any food requirements or allergies and we’ll pass the information</p>
                                <h6>What will the food be like on my trip?</h6>
                                <p className="mb-0">Food is one of the most exciting parts of travel. There may be some familiar fare but often you’ll be confronted with the new, interesting and downright weird of the culinary world but we like to think of it as an adventure for all the senses. In addition to this, our flexible itineraries often</p>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="tabs_8">
                              <div className="faq-details">
                                <h6>08 I have special dietary requirements – will they be catered for?</h6>
                                <p>We will try our very hardest to accommodate all dietary requirements but in some out-of-the-way places it can be very difficult to guarantee. We will let you know if there are places on your itinerary where this is the case. Please let us know at the time of booking of any food requirements or allergies and we’ll pass the information</p>
                                <h6>What will the food be like on my trip?</h6>
                                <p className="mb-0">Food is one of the most exciting parts of travel. There may be some familiar fare but often you’ll be confronted with the new, interesting and downright weird of the culinary world but we like to think of it as an adventure for all the senses. In addition to this, our flexible itineraries often</p>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="tabs_9">
                              <div className="faq-details">
                                <h6>09 I have special dietary requirements – will they be catered for?</h6>
                                <p>We will try our very hardest to accommodate all dietary requirements but in some out-of-the-way places it can be very difficult to guarantee. We will let you know if there are places on your itinerary where this is the case. Please let us know at the time of booking of any food requirements or allergies and we’ll pass the information</p>
                                <h6>What will the food be like on my trip?</h6>
                                <p className="mb-0">Food is one of the most exciting parts of travel. There may be some familiar fare but often you’ll be confronted with the new, interesting and downright weird of the culinary world but we like to think of it as an adventure for all the senses. In addition to this, our flexible itineraries often</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>   
                    <div className="col-xl-3 col-lg-4">
                      <aside className="sidebar-area">
                        <div className="widget widget_search bg-none pd-none">
                          <form className="search-form">
                            <div className="form-group">
                              <input type="text" placeholder="Search" />
                            </div>
                            <button className="submit-btn" type="submit"><i className="ti-search" /></button>
                          </form>
                        </div>
                        <div className="widget widget_categories mb-0">
                          <h2 className="widget-title">Category</h2>
                          <ul>
                            <li><a href="#">Software</a> 33</li>
                            <li><a href="#">App Landing</a> 81</li>
                            <li><a href="#">Saas Landing</a> 12</li>
                            <li><a href="#">Design Studio</a> 17</li>
                            <li><a href="#">Product Showcase</a> 62</li>
                          </ul>
                        </div>
                      </aside>
                    </div>
                  </div>
                </div>
              </div>
        }
}

export default Faq