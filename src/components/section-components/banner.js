import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Banner extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

		return  <div className="banner-area viaje-go-top">
					<div className="banner-slider">
						<div className="banner-slider-item banner-bg-1">
							<div className="container">
								<div className="row">
									<div className="tp-main-search col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
										<div>
											<div className="form-check form-check-inline">
												<input 
													className="form-check-input" type="radio" 
													name="inlineRadioOptions" value="flight"/>
												<label className="form-check-label" for="inlineRadio1">Flights</label>
											</div>
											<div className="form-check form-check-inline">
												<input 
													className="form-check-input" type="radio" 
													name="inlineRadioOptions" value="hotel"/>
												<label className="form-check-label">Hotels</label>
											</div>
											<div className="form-check form-check-inline">
												<input 
													className="form-check-input" type="radio" 
													name="inlineRadioOptions" value="package"/>
												<label className="form-check-label">Package</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
	}
}

export default Banner