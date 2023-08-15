import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BlogSectionV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'

    return (
      <div className="blog-area pd-top-108 viaje-go-top">
		  <div className="container">
		    <div className="row justify-content-center">
		      <div className="col-xl-6 col-lg-8">
		        <div className="section-title text-center">
		          <h2 className="title wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.1s">Recent Blog Posts</h2>
		          <p className="wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.2s">Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
		        </div>
		      </div>
		    </div>
		    <div className="row justify-content-center">
		      <div className="col-lg-4 col-sm-6">
		        <div className="single-blog wow animated fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.1s">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/1.png" }alt="blog" />
		            <Link className="tag" to="/blog-details">Europe</Link>
		          </div>
		          <div className="single-blog-details">
		            <p className="date">19 September 2019</p>
		            <h4 className="title">Shouldn’t Ride Elephants France.</h4>
		            <p className="content">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada</p>
		            <Link className="btn-read-more" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4 col-sm-6">
		        <div className="single-blog wow animated fadeInUp" data-wow-duration="0.7s" data-wow-delay="0.2s">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/2.png"} alt="blog" />
		            <Link className="tag" to="/blog-details">Europe</Link>
		          </div>
		          <div className="single-blog-details">
		            <p className="date">19 September 2019</p>
		            <h4 className="title">Aliquam faucibus, nec commodo</h4>
		            <p className="content">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada</p>
		            <Link className="btn-read-more" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4 col-sm-6">
		        <div className="single-blog wow animated fadeInUp" data-wow-duration="1.0s" data-wow-delay="0.3s">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/5.png"} alt="blog" />
		            <Link className="tag" to="/blog-details">Europe</Link>
		          </div>
		          <div className="single-blog-details">
		            <p className="date">19 September 2019</p>
		            <h4 className="title">Why You Shouldn’t Ride France.</h4>
		            <p className="content">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada</p>
		            <Link className="btn-read-more" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>

    )
  }
}

export default BlogSectionV2;
