import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class DestinationListV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return	<div className="destination-list-area pd-top-120 viaje-go-top">
              <div className="container">
                {/* destination-list gallery start */}
                <div className="gallery-area destination-list-gallery-area">
                  <div className="container">
                    <div className="gallery-filter-area row">
                      <div className="gallery-sizer col-1" />
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-8 col-md-6 col-12 mb-10">
                        <div className="tp-gallery-item-img">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/destination-list/21.png"} alt="image" />
                          </div>
                          <div className="details">
                            <h3>Africa</h3>
                            <p>Etiam convallis elementum sapien, aliquam turpis aliquam vitae Praese sollicitudin <br /> felis vel mi facilisis posuere. Nulla ultrices facilisis</p>
                            <Link className="btn-read-more" to="/destination-details"><span>Explore<i className="la la-arrow-right" /></span></Link>
                          </div>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-4 col-md-6 col-12">
                        <div className="tp-gallery-item-img">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/destination-list/20.png"} alt="image" />
                          </div>
                          <div className="details">
                            <h3>Africa</h3>
                            <p>Etiam convallis elementum sapien, a aliquam turpis aliquam vitae. Praesent</p>
                            <Link className="btn-read-more" to="/destination-details"><span>Explore<i className="la la-arrow-right" /></span></Link>
                          </div>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-4 col-md-6 col-12">
                        <div className="tp-gallery-item-img">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/destination-list/22.png"} alt="image" />
                          </div>
                          <div className="details">
                            <h3>Africa</h3>
                            <p>Etiam convallis elementum sapien, a aliquam turpis aliquam vitae. Praesent</p>
                            <Link className="btn-read-more" to="/destination-details"><span>Explore<i className="la la-arrow-right" /></span></Link>
                          </div>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-4 col-md-6 col-12">
                        <div className="tp-gallery-item-img">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/destination-list/23.png"} alt="image" />
                          </div>
                          <div className="details">
                            <h3>Africa</h3>
                            <p>Etiam convallis elementum sapien, a aliquam turpis aliquam vitae. Praesent</p>
                            <Link className="btn-read-more" to="/destination-details"><span>Explore<i className="la la-arrow-right" /></span></Link>
                          </div>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-4 col-md-6 col-12">
                        <div className="tp-gallery-item-img">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/destination-list/25.png"} alt="image" />
                          </div>
                          <div className="details">
                            <h3>Africa</h3>
                            <p>Etiam convallis elementum sapien, a aliquam turpis aliquam vitae. Praesent</p>
                            <Link className="btn-read-more" to="/destination-details"><span>Explore<i className="la la-arrow-right" /></span></Link>
                          </div>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-4 col-md-6 col-12">
                        <div className="tp-gallery-item-img">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/destination-list/24.png"} alt="image" />
                          </div>
                          <div className="details">
                            <h3>Africa</h3>
                            <p>Etiam convallis elementum sapien, a aliquam turpis aliquam vitae. Praesent</p>
                            <Link className="btn-read-more" to="/destination-details"><span>Explore<i className="la la-arrow-right" /></span></Link>
                          </div>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-4 col-md-6 col-12">
                        <div className="tp-gallery-item-img">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/destination-list/26.png"} alt="image" />
                          </div>
                          <div className="details">
                            <h3>Africa</h3>
                            <p>Etiam convallis elementum sapien, a aliquam turpis aliquam vitae. Praesent</p>
                            <Link className="btn-read-more" to="/destination-details"><span>Explore<i className="la la-arrow-right" /></span></Link>
                          </div>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-8 col-md-6 col-12">
                        <div className="tp-gallery-item-img">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/destination-list/27.png"} alt="image" />
                          </div>
                          <div className="details">
                            <h3>Africa</h3>
                            <p>Etiam convallis elementum sapien, aliquam turpis aliquam vitae Praese sollicitudin <br /> felis vel mi facilisis posuere. Nulla ultrices facilisis</p>
                            <Link className="btn-read-more" to="/destination-details"><span>Explore<i className="la la-arrow-right" /></span></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Gallery area end */}
              </div>
            </div>
        }
}

export default DestinationListV2