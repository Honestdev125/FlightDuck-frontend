import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomeV1 from './pages/home-v1';
import HomeV2 from './pages/home-v2';
import HomeV3 from './pages/home-v3';
import AboutUs from './pages/about';
import TourList from './pages/tour-list';
import TourListV2 from './pages/tour-list-v2';
import HotelListPage from './pages/hotel-list';
import FlightHotelPackage from './pages/flight-hotel-package';
import TourListV3 from './pages/tour-list-v3';
import TourDetails from './pages/tour-details';
import DestinationLIst from './pages/destination-list';
import DestinationLIstV2 from './pages/destination-list-v2';
import DestinationDetails from './pages/destination-details';
import Gallery from './pages/gallery';
import GalleryDetails from './pages/gallery-details';
import Faq from './pages/faq';
import Contact from './pages/contact';
import Error from './pages/error';
import CommingSoon from './pages/comming-soon';
import UserProfile from './pages/user-profile';
import Blog from './pages/blog';
import BlogV2 from './pages/blog-v2';
import BlogV3 from './pages/blog-v3';
import BlogDetails from './pages/blog-details';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import ForgotPassword from './components/auth/forgotpassword';
import PrivateRoutes from "./components/auth/helper/PrivateRoutes";
import HotelBooking from './components/section-components/hotel-booking';
import BookingConfirmationDetailsPage from './pages/booking-confirmation-details';
import { BasicProvider } from "./BasicContext";
import { createGlobalState } from 'react-hooks-global-state';

export const { setGlobalState, useGlobalState } = createGlobalState({
	country_code: '',
	currency: '',
	destination: "",
	destination_code: "",
	hotel_destination: "",
	origin: "",
	departure_date: "",
	return_date: "",
	adults: null,
	children: null,
	days: null,
	isReturn: true,
	paginated_data: [],
	completeList: [],
	filteredData: [],
	hotelFlightPackageList: [],
	price_sort: "down",
	price_sort_text: "Price High to Low",
	departure_time_sort: "down",
	departure_time_sort_text: "Departure Time High to Low",
	pageNumber: 0,
	priceRange: [10, 5000],
	hotelName: '',
	accommodationType: '',
	currencySymbol: "",
	flightsPaginated_data: [],
	flightsFilteredData: [],
	flightsCompleteList: [],
	liveFlightsList: [],
	flights_price_sort: "down",
	flights_price_sort_text: "Price High to Low",
	currencyOptions: [
		{ value: 'AUD' },
		{ value: 'USD' },
		{ value: 'NZD' },
		{ value: 'EUR' },
		{ value: 'GPB' },
		{ value: 'CAN' },
		{ value: 'JPY' },
		{ value: 'INR' },
		{ value: 'CNY' },

	],
	selectedCurrency: "AUD",
	liveFlightAttempts: 0,
	isLocal: true,
	topState:[],
	starRating:''
});

class Root extends Component {

	componentDidMount() {
		fetch(
			'https://ipapi.co/json/', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}
		)
		.then(resp => resp.json())
		.then((resp) => {
			localStorage.setItem("country_code", resp.country_code);
			localStorage.setItem("currency", resp.currency);
			setGlobalState("country_code", resp.country_code)
			setGlobalState("currency", resp.currency)
		})
		.catch(()=>{
			
			console.log("index failed")
		})
	}

	render() {
		return (
			<HashRouter basename="/">
				<BasicProvider>
					<div>
						<Switch>
							<Route exact path="/" component={HomeV2} />
							<Route path="/home-v2" component={HomeV2} />
							<Route path="/home-v3" component={HomeV3} />
							<Route path="/about" component={AboutUs} />
							<Route path="/tour-list" component={TourList} />
							<Route path="/tour-list-v2" component={TourListV2} />
							<Route path="/hotel-list" component={HotelListPage} />
							<Route path="/hotel-booking" component={HotelBooking} />
							<Route path="/flight-hotel-package" component={FlightHotelPackage} />
							<Route path="/tour-list-v3" component={TourListV3} />
							<Route path="/tour-details" component={TourDetails} />
							<Route path="/destination-list" component={DestinationLIst} />
							<Route path="/destination-list-v2" component={DestinationLIstV2} />
							<Route path="/destination-details" component={DestinationDetails} />
							<Route path="/gallery" component={Gallery} />
							<Route path="/gallery-details" component={GalleryDetails} />
							<Route path="/faq" component={Faq} />
							<Route path="/contact" component={Contact} />
							<Route path="/error" component={Error} />
							<Route path="/comming-soon" component={CommingSoon} />
							<Route path="/blog" component={Blog} />
							<Route path="/blog-v2" component={BlogV2} />
							<Route path="/blog-v3" component={BlogV3} />
							<Route path="/blog-details" component={BlogDetails} />
							<Route path="/signin" component={SignIn} />
							<Route path="/signup" component={SignUp} />
							<Route path="/forgot-password" component={ForgotPassword} />
							<Route path="/booking-confirmation" component={BookingConfirmationDetailsPage} />
							<Route path="*" component={Error} />
							<PrivateRoutes path="/user-profile" component={UserProfile} />
						</Switch>
					</div>
				</BasicProvider>
			</HashRouter>
		)
	}
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('viaje'));
