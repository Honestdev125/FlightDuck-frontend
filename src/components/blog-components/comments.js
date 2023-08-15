import React, { Component } from 'react';



class Comments extends Component {
  render() {
   let anchor = '#'
   let imagealt = 'image'
   let publicUrl = process.env.PUBLIC_URL+'/'
    return (
      <div className="comment-area">
	          <h2 className="comment-title">Client’s Comments</h2>
	          <ul className="comment-list">
	            <li>
	              <div className="comment-autor">
	                <img src={publicUrl+"assets/img/blog-details/04.jpg"} alt="Comment" />
	              </div>
	              <div className="comment-desc">
	                <h6>Alexzeder Alex <span className="comment-date"> 25 Feb 2020</span></h6>
	                <p>But I must explain to you how all this mistaken idea of denouncing pleasure
	                  and praising pain was born and I will give you a complete account</p>
	                <a href="#" className="reply-comment">Reply Commets <i className="far fa-long-arrow-right" /></a>
	              </div>
	              <ul className="children">
	                <li>
	                  <div className="comment-autor">
	                    <img src={publicUrl+"assets/img/blog-details/05.jpg"} alt="Comment" />
	                  </div>
	                  <div className="comment-desc">
	                    <h6>Alexzeder Alex <span className="comment-date"> 25 Feb 2020</span></h6>
	                    <p>But I must explain to you how all this mistaken idea of denouncing
	                      pleasure and praising pain was born and I will give you a complete
	                      account</p>
	                    <a href="#" className="reply-comment">Reply Commets <i className="far fa-long-arrow-right" /></a>
	                  </div>
	                </li>
	              </ul>
	            </li>
	            <li>
	              <div className="comment-autor">
	                <img src={publicUrl+"assets/img/blog-details/06.jpg"} alt="Comment" />
	              </div>
	              <div className="comment-desc">
	                <h6>Alexzeder Alex <span className="comment-date"> 25 Feb 2020</span></h6>
	                <p>But I must explain to you how all this mistaken idea of denouncing pleasure
	                  and praising pain was born and I will give you a complete account</p>
	                <a href="#" className="reply-comment">Reply Commets <i className="far fa-long-arrow-right" /></a>
	              </div>
	            </li>
	          </ul>
	        </div>
    )
  }
}

export default Comments;
