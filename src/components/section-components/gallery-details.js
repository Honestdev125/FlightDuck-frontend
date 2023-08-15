import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class GalleryDetails extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<div className="gallery-area pd-top-108">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-7">
                    <div className="section-title text-center">
                      <h2 className="title">Beautiful Beach of Greece</h2>
                      <p>Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet et leo in vulputate. Sed eleifend lacus eu posuere viverra. Vestibulum id turpis lectus. Donec rhoncus quis elit</p>
                    </div>
                  </div>
                </div>
                {/* Gallery area start */}
                <div className="gallery-area">
                  <div className="container">
                    <div className="gallery-filter-area row">
                      <div className="gallery-sizer col-1" />
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-md-4 col-12 mb-10">
                        <div className="tp-gallery-item-img">
                          <a className="popup-thumb" href={publicUrl+"assets/img/gallery/1.png"} data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/gallery/1.png"} alt="image" />
                          </a>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-md-4 col-12">
                        <div className="tp-gallery-item-img">
                          <a className="popup-thumb" href={publicUrl+"assets/img/gallery/2.png"} data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/gallery/2.png"} alt="image" />
                          </a>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-md-4 col-12">
                        <div className="tp-gallery-item-img">
                          <a className="popup-thumb" href={publicUrl+"assets/img/gallery/3.png"} data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/gallery/3.png"} alt="image" />
                          </a>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-md-4 col-12">
                        <div className="tp-gallery-item-img">
                          <a className="popup-thumb" href={publicUrl+"assets/img/gallery/4.png"} data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/gallery/4.png"} alt="image" />
                          </a>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-md-4 col-12">
                        <div className="tp-gallery-item-img">
                          <a className="popup-thumb" href={publicUrl+"assets/img/gallery/2.png"} data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/gallery/2.png"} alt="image" />
                          </a>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-md-7 col-12">
                        <div className="tp-gallery-item-img">
                          <a className="popup-thumb" href={publicUrl+"assets/img/gallery/6.png"} data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/gallery/6.png"} alt="image" />
                          </a>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-md-5 col-12">
                        <div className="tp-gallery-item-img">
                          <a className="popup-thumb" href={publicUrl+"assets/img/gallery/7.png"} data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/gallery/7.png"} alt="image" />
                          </a>
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

export default GalleryDetails