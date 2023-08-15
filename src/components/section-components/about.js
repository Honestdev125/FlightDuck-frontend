import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class About extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<div className="about-section pd-top-80">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 align-self-center">
                    <div className="section-title mb-lg-0">
                      <h2 className="title">Lets Go Travel <br /> with Us</h2>
                      <p>Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula. Quisque quis pharetra felis. Ut quis consequat orci, at consequat felis. Suspendisse auctor laoreet placerat. Nam et risus non lacus dignissim lacinia sit amet nec eros. Nulla vel urna quis libero pharetra varius. Nulla tellus nunc, malesuada at scelerisque eget, cursus at eros. Maecenas pellentesque lacus quis erat eleifend sagittis. Sed vel maximus ante, quis mattis neque. Nullam dapibus erat sed nulla cursus accumsan. Nulla volutpat libero lacinia venenatis sodales. Ut in pellentesque.</p>
                    </div>
                  </div>
                  <div className="col-lg-5 offset-lg-2">
                    <div className="thumb about-section-right-thumb">
                      <img src={publicUrl+"assets/img/others/9.png"} alt="img" />
                      <img className="about-absolute-thumb" src={publicUrl+"assets/img/others/10.png"} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

        }
}

export default About