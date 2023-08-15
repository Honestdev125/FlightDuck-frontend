import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';

class TourHeader extends Component {
	
	render() {

		// let publicUrl = process.env.PUBLIC_URL + '/';
		const logoUrl = process.env.PUBLIC_URL + '/' + "assets/img/others/Big_logo.png"
		return <div>
		<div className="banner-area viaje-go-top">
			<div className="banner-slider">
				<div className="banner-slider-item banner-bg-1">
					<div className="container">
						<div className="row">
							<div className="col-xl-4 col-lg-6 col-md-8 offset-xl-4 offset-lg-3 offset-md-2" style={{ height: '200px', marginBottom: 54 }}>
								<Link className="ads-thumb" to="">
									<img src={logoUrl} alt="ads" />
								</Link>
							</div>
							
						</div>
						
					</div>
				</div>
			</div>
			<div>
				{/* {errorAlertDialog()} */}
			</div>
		</div>
	</div>
	}
}

export default TourHeader