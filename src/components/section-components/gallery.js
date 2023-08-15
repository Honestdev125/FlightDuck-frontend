import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Gallery extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<div className="main-gallery-area pd-top-120">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="single-gallery-area bg-gray">
                      <div className="gallery-title">
                        <p className="location"><img src={publicUrl+"assets/img/icons/1.png"} alt="img" />Maldives</p>
                        <h4><Link to="/gallery-details">Beautiful Beach of Greece</Link></h4>
                      </div>
                      <div className="gallery-slider">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/gallery/8.png"} alt="img" />
                        </div>
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/gallery/9.png"} alt="img" />
                        </div>
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/gallery/10.png"} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-gallery-area bg-gray">
                      <div className="gallery-title">
                        <p className="location"><img src={publicUrl+"assets/img/icons/1.png"} alt="img" />Madagascar</p>
                        <h4><Link to="/gallery-details">Underwater world</Link></h4>
                      </div>
                      <div className="gallery-slider">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/gallery/11.png"} alt="img" />
                        </div>
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/gallery/12.png"} alt="img" />
                        </div>
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/gallery/13.png"} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-gallery-area bg-gray">
                      <div className="gallery-title">
                        <p className="location"><img src={publicUrl+"assets/img/icons/1.png"} alt="img" />France</p>
                        <h4><Link to="/gallery-details">Underwater world</Link></h4>
                      </div>
                      <div className="gallery-slider">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/gallery/14.png"} alt="img" />
                        </div>
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/gallery/15.png"} alt="img" />
                        </div>
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/gallery/16.png"} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-gallery-area bg-gray">
                      <div className="gallery-title">
                        <p className="location"><img src={publicUrl+"assets/img/icons/1.png"} alt="img" />Arizona, United States</p>
                        <h4><Link to="/gallery-details">Grand Canyon</Link></h4>
                      </div>
                      <div className="gallery-slider">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/gallery/17.png"} alt="img" />
                        </div>
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/gallery/18.png"} alt="img" />
                        </div>
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/gallery/19.png"} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        }
}

export default Gallery