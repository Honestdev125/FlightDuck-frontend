import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class VideoV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="video-area tp-video-area pd-top-50">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-xl-6 col-lg-10 text-center">
			        <div className="section-title text-center viaje-go-top">
			          <h2 className="title">What Do You Know <br /> About US</h2>
			          <p>Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices quis non mauris. Aenean scelerisque, sem eu dictum commodo, velit nisi</p>
			          <Link className="btn btn-yellow" to="/about"><span>Read More<i className="la la-arrow-right" /></span></Link>
			        </div>
			      </div>
			      <div className="col-xl-8 col-lg-9 text-center">
			        <div className="video-popup-wrap style-two">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/video2.png"} alt="video" />
			          </div>
			          <div className="video-popup-btn">
			            <a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>


        }
}

export default VideoV2