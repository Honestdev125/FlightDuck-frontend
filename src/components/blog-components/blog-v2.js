import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';

class BlogV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'
    return (
      <div className="blog-list-area pd-top-120 viaje-go-top">
		  <div className="container">
		    <div className="row justify-content-center">
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/1.png"} alt="blog" />
		            <Link className="tag" to="/blog">Europe</Link>
		          </div>
		          <div className="single-blog-details">
		            <p className="date">19 September 2019</p>
		            <h4 className="title"><Link to="/blog-details">Why You Shouldn’t Ride France.</Link></h4>
		            <p className="content">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada</p>
		            <Link className="btn-read-more" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/2.png"} alt="blog" />
		            <Link className="tag" to="/blog">Africa</Link>
		          </div>
		          <div className="single-blog-details">
		            <p className="date">19 September 2019</p>
		            <h4 className="title"><Link to="/blog-details">Aliquam faucibus, nec commodo</Link></h4>
		            <p className="content">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada</p>
		            <Link className="btn-read-more" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/3.png"} alt="blog" />
		            <Link className="tag" to="/blog">Europe</Link>
		          </div>
		          <div className="single-blog-details">
		            <p className="date">19 September 2019</p>
		            <h4 className="title"><Link to="/blog-details">Why You Shouldn’t Ride France.</Link></h4>
		            <p className="content">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada</p>
		            <Link className="btn-read-more" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/4.png"} alt="blog" />
		            <Link className="tag" to="/blog">Iseland</Link>
		          </div>
		          <div className="single-blog-details">
		            <p className="date">19 September 2019</p>
		            <h4 className="title"><Link to="/blog-details">Duis pretium gravida enim, vel maximus</Link></h4>
		            <p className="content">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada</p>
		            <Link className="btn-read-more" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/5.png"} alt="blog" />
		            <Link className="tag" to="/blog">Europe</Link>
		          </div>
		          <div className="single-blog-details">
		            <p className="date">19 September 2019</p>
		            <h4 className="title"><Link to="/blog-details">Duis pretium gravida enim</Link></h4>
		            <p className="content">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada</p>
		            <Link className="btn-read-more" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/6.png"} alt="blog" />
		            <Link className="tag" to="/blog">Europe</Link>
		          </div>
		          <div className="single-blog-details">
		            <p className="date">19 September 2019</p>
		            <h4 className="title"><Link to="/blog-details">Why You Shouldn’t Ride France.</Link></h4>
		            <p className="content">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada</p>
		            <Link className="btn-read-more" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/7.png"} alt="blog" />
		            <Link className="tag" to="/blog">Europe</Link>
		          </div>
		          <div className="single-blog-details">
		            <p className="date">19 September 2019</p>
		            <h4 className="title"><Link to="/blog-details">Etiam convallis elementum sapien</Link></h4>
		            <p className="content">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada</p>
		            <Link className="btn-read-more" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/8.png"} alt="blog" />
		            <a className="tag" to="/blog">Asia</a>
		          </div>
		          <div className="single-blog-details">
		            <p className="date">19 September 2019</p>
		            <h4 className="title"><Link to="/blog-details">Duis porta, ligula rhoncus euismod</Link></h4>
		            <p className="content">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada</p>
		            <Link className="btn-read-more" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/9.png"} alt="blog" />
		            <Link className="tag" to="/blog">Europe</Link>
		          </div>
		          <div className="single-blog-details">
		            <p className="date">19 September 2019</p>
		            <h4 className="title"><Link to="/blog-details">Aliquam faucibus, nec commodo</Link></h4>
		            <p className="content">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada</p>
		            <Link className="btn-read-more" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-12  text-md-center text-left">
		        <div className="tp-pagination text-md-center text-left d-inline-block mt-4">
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
		</div>

    )
  }
}

export default BlogV2;
