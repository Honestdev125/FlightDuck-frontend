import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class VideoBanner extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="video-banner-area youtube-bg">
			  <div className="video-banner-content-wrap">
			    <div className="container">    
			      <div className="video-banner-content text-center">
			        <h2>Nature Awaits</h2>
			        <h2 className="main-title">Explore The World With Us!</h2>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default VideoBanner