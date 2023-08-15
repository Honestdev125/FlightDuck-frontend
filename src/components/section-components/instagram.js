import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Instagram extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="instagram-area pd-top-100">
			  <div className="section-title text-center">
			    <h2 className="title">Instagram Post</h2>
			  </div>
			  <div className="instagram-slider">
			    <div className="instagram-slider-item"><a href="#"><img src={publicUrl+"assets/img/tour/1.png"} alt="img" /></a></div>
			    <div className="instagram-slider-item"><a href="#"><img src={publicUrl+"assets/img/tour/2.png"} alt="img" /></a></div>
			    <div className="instagram-slider-item"><a href="#"><img src={publicUrl+"assets/img/tour/3.png"} alt="img" /></a></div>
			    <div className="instagram-slider-item"><a href="#"><img src={publicUrl+"assets/img/tour/4.png"} alt="img" /></a></div>
			    <div className="instagram-slider-item"><a href="#"><img src={publicUrl+"assets/img/tour/5.png"} alt="img" /></a></div>
			    <div className="instagram-slider-item"><a href="#"><img src={publicUrl+"assets/img/tour/6.png"} alt="img" /></a></div>
			    <div className="instagram-slider-item"><a href="#"><img src={publicUrl+"assets/img/tour/1.png"} alt="img" /></a></div>
			  </div>
			</div>



        }
}

export default Instagram