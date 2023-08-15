import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Subscribe extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="newslatter-area pd-top-120">
				  <div className="container">
				    <div className="newslatter-area-wrap border-tp-solid">
				      <div className="row">
				        <div className="col-xl-3 col-lg-6 col-md-5 offset-xl-2">
				          <div className="section-title mb-md-0">
				            <h2 className="title">Newsletter</h2>
				            <p>Sign up to receive the best offers</p>
				          </div>
				        </div>
				        <div className="col-xl-4 col-lg-6 col-md-7 align-self-center offset-xl-1">
				          	<form>
					          <div className="input-group newslatter-wrap">
					            <div className="input-group-prepend">
					              <span className="input-group-text"><i className="fa fa-envelope" /></span>
					            </div>
					            <input name="email" type="text" className="form-control" placeholder="Email" />
					            <div className="input-group-append">
					             <input type="submit" className="btn btn-yellow vaijesubmit" value="Subscribe" />
					            </div>
					          </div>
				            </form>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>

        }
}

export default Subscribe