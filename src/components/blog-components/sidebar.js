import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Sidebar extends Component {
  render() {
   let anchor = '#'
   let imagealt = 'image'
   let publicUrl = process.env.PUBLIC_URL+'/'
    return (
      <div className="col-lg-4">
            <aside className="sidebar-area sidebar-area-4">
              <div className="widget widget_search bg-none pd-none">
                <form className="search-form">
                  <div className="form-group">
                    <input type="text" placeholder="Search" />
                  </div>
                  <button className="submit-btn" type="submit"><i className="ti-search" /></button>
                </form>
              </div>
              <div className="widget widget_categories">
                <h2 className="widget-title">Category</h2>
                <ul>
                  <li><Link to="/blog-v2">Software</Link> 33</li>
                  <li><Link to="/blog-v2">App Landing</Link> 81</li>
                  <li><Link to="/blog-v2">Saas Landing</Link> 12</li>
                  <li><Link to="/blog-v2">Design Studio</Link> 17</li>
                  <li><Link to="/blog-v2">Business Studio</Link> 21</li>
                  <li><Link to="/blog-v2">Product Showcase</Link> 62</li>
                </ul>
              </div>
              <div className="widget widget-recent-post">
                <h2 className="widget-title">Recent Post</h2>
                <ul>
                  <li>
                    <div className="media">
                      <img src={publicUrl+"assets/img/blog-details/12.png"} alt="widget" />
                      <div className="media-body">
                        <span className="post-date">20 July 2019</span>
                        <h6 className="title"><Link to="/blog-details">Duis neque vel elit pharetra vestibulu</Link></h6>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <img src={publicUrl+"assets/img/blog-details/13.png"} alt="widget" />
                      <div className="media-body">
                        <span className="post-date">21 July 2019</span>
                        <h6 className="title"><Link to="/blog-details">Praesent eu dolor eu orci vehicula</Link></h6>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <img src={publicUrl+"assets/img/blog-details/14.png"} alt="widget" />
                      <div className="media-body">
                        <span className="post-date">14 July 2019</span>
                        <h6 className="title"><Link to="/blog-details">Aenean non accumsan ante. Duis</Link></h6>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <img src={publicUrl+"assets/img/blog-details/15.png"} alt="widget" />
                      <div className="media-body">
                        <span className="post-date">20 July 2019</span>
                        <h6 className="title"><Link to="/blog-details">Pellentesque habitant morbi</Link></h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="widget widget_tag_cloud">
                <h2 className="widget-title">Tags</h2>
                <div className="tagcloud">
                  <Link to="/blog-v2">Adbeger</Link>
                  <Link to="/blog-v2">Religion</Link>
                  <Link to="/blog-v2">Relax</Link>
                  <Link to="/blog-v2">Nature</Link>
                  <Link to="/blog-v2">Descover</Link>
                </div>
              </div>
              <div className="widget_ads">
                <Link to="/tour-details"><img className="w-100" src={publicUrl+"assets/img/others/01.png"} alt="img" /></Link>
              </div>
            </aside>
          </div>
    )
  }
}

export default Sidebar;
