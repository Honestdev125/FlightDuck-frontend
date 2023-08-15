import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import parse from 'html-react-parser';
// import API_URL, { getFlightsDestinationAutoSuggestion, searchHotelBeds } from '../auth/helper';
import API_URL from '../auth/helper';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Card from '@material-ui/core/Card';
import { Select, MenuItem } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import {
	saveFlightsSearchDataToLocalStorage,
	savePackageSearchDataToLocalStorage,
	saveHotelSearchDataToLocalStorage
} from "../auth/helper/index";
import 'react-dropdown/style.css';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
// import { addMonths } from 'date-fns';
import Moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import SweetAlert from 'react-bootstrap-sweetalert';
import { DebounceInput } from 'react-debounce-input';
import { setGlobalState, useGlobalState } from '../../index';
import "./search-option.css";

const printGlobalState = (destination, origin, departureDate, returnDate, adults, children, days) => {

	console.log("destination is " + destination)
	console.log("origin is " + origin)
	console.log("return_date is " + returnDate)
	console.log("adults is " + adults)
	console.log("chuldren is " + children)
	console.log("departureDate is " + departureDate)
	console.log("days is " + days)
}

const printGlobalState2 = (isReturn) => {
	console.log("return is " + isReturn)
}

const Search3 = () => {
	localStorage.setItem("cachedHotelFlightPackageList", null);
	localStorage.setItem("packageDetails", null);
	setGlobalState("hotelFlightPackageList", [])
	const [destination] = useGlobalState("destination")
	const [origin] = useGlobalState("origin")
	const [departureDate] = useGlobalState("departure_date")
	const [returnDate] = useGlobalState("return_date")
	const [adults] = useGlobalState("adults")
	const [children] = useGlobalState("children")
	const [days] = useGlobalState("days")
	const [currency_format] = useGlobalState("selectedCurrency")
	const [isReturn] = useGlobalState("isReturn")
	console.log('globalstate print in SEARCH function')
	printGlobalState(destination, origin, departureDate, returnDate, adults, children, days, currency_format)
	printGlobalState2(isReturn)

	const useStyles = makeStyles((theme) => ({
		paper: {
			marginTop: theme.spacing(8),
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		avatar: {
			margin: theme.spacing(1),
			backgroundColor: theme.palette.secondary.main,
		},
		form: {
			width: '100%', // Fix IE 11 issue.
			marginTop: theme.spacing(1),

		},
		submit: {
			margin: theme.spacing(3, 0, 2),
		},
	}));


	let history = useHistory();
	const classes = useStyles();
	const [searchForMonths, setSearchForMonths] = useState(false);
	const [originList, originListData] = useState([]);
	const [destinationList, destinationListData] = useState([]);
	const [open, setOpen] = useState(false);
	//const [departureDate, setDepartureDate] = useState(null);
	// const [returnDate, setReturnDate] = useState(null);
	const [isLocal] = useGlobalState("isLocal")

	useEffect(() => {
		setGlobalState("liveFlightsList", [])
		if (!isLocal) {
			const country_code = localStorage.getItem("country_code")
			const url = `${API_URL}flights/get-airport-code/?country=${country_code}`
			fetch(
				url, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			}
			).then(resp => resp.json()).then((resp) => {
				originListData(resp['list'])
				destinationListData(resp['list'])
			})
		}
	}, []);

	const [values, setValues] = useState({
		origin: "",
		departure_date: "",
		returnDate: "",
		selectedOption: "flight",
		adults: "",
		numberOfRooms: "",
		suggestions: [],
		keyValue: "",
		destinationName: "",
		error: "",
		errorMessage: "Check all fields again",
		alert: null,
		days: null,
		// originList: []
	});

	const { daysOptions, selectedDayOption,
		numberOfRooms, suggestions, keyValue,
		error, errorMessage, alert
		// originList
	} = values;

	const hideAlert = (event) => {
		setValues({ ...values, error: false, alert: null, });
	}

	const errorAlertDialog = () => {
		return (
			error && (
				<SweetAlert
					danger
					title="Error"
					onConfirm={hideAlert}
				>
					{errorMessage}
				</SweetAlert>
			)
		);
	};

	function updateOriginList() {
		fetch(
			`${API_URL}flights/get-airport-code/`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}
		)
			.then(resp => resp.json()
			)
			.then((resp) => {
				setValues({ ...values, error: false, originList: resp['list'] });
			})
	}

	const handleChange = (name) => (event) => {
		console.log("execution of Handlechange")
		console.log(name, event.target.value)
		setGlobalState(name, event.target.value)
		setValues({ ...values, error: false, [name]: event.target.value });
		if (!isLocal) {
			if (name === "destination") {
				console.log("this is pre destination API req")
				const url = `${API_URL}flights/get-airport-code/?query=${event.target.value}`
				fetch(
					url, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				}
				)
					.then(resp => resp.json()
					)
					.then((resp) => {
						destinationListData(resp['list'])
					})
			} else if (name === "origin") {
				console.log("this is origin API fetch")
				const url = `${API_URL}flights/get-airport-code/?query=${event.target.value}`
				fetch(
					url, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				}
				)
					.then(resp => resp.json()
					)
					.then((resp) => {
						originListData(resp['list'])
					})
			}
			console.log("this is post ALL API CALL")
		}
	};

	const handleOpen = () => {
		if (open === true)
			return;

		setOpen(true);
	}

	const handleClose = () => {
		setOpen(false);
	}

	const handleAccept = () => {
		setOpen(false);
	}

	const onFlightSearchFormSubmit = (event) => {
		event.preventDefault();
		if (returnDate != null) {
			// if (returnDate < departureDate) {
			// 	setValues({
			// 		...values,
			// 		error: true,
			// 		errorMessage: "Return Date should be greater than Departure Date"
			// 	});
			// 	return;
			// } else {
			const destination_code = destinationList.find((dest) => dest.airport_name === destination).airport_code;
			const origin_code = originList.find((org) => org.airport_name === origin).airport_code;
			const updatedDepartureDate = Moment(departureDate).format(Moment.HTML5_FMT.DATE);
			const updatedReturnDate = Moment(returnDate).format(Moment.HTML5_FMT.DATE);

			saveFlightsSearchDataToLocalStorage({
				destination_code, origin_code, updatedDepartureDate,
				updatedReturnDate, adults, children, currency_format
			});
			localStorage.removeItem("only_flight");
			localStorage.setItem("only_flight", "true");
			history.push("/tour-list-v2");
			// }
		}
		else {
			const destination_code = destinationList.find((dest) => dest.airport_name === destination).airport_code;
			const origin_code = originList.find((org) => org.airport_name === origin).airport_code;
			const updatedDepartureDate = Moment(departureDate).format(Moment.HTML5_FMT.DATE);

			saveFlightsSearchDataToLocalStorage({
				destination_code, origin_code,
				updatedDepartureDate, adults, children, currency_format
			});
			localStorage.removeItem("only_flight");
			localStorage.setItem("only_flight", "true");
			history.push("/tour-list-v2");
		}
	};

	const onHotelSearchFormSubmit = (event) => {
		event.preventDefault();
		if (returnDate != null) {
			// if (returnDate < departureDate) {
			// 	setValues({
			// 		...values,
			// 		error: true,
			// 		errorMessage: "Return Date should be greater than Departure Date"
			// 	});
			// 	return;
			// } else {
			const hotelDestinationCode = destinationList.find((dest) => dest.city__city_name === destination).city__city_code;
			const updatedDepartureDate = Moment(departureDate).format(Moment.HTML5_FMT.DATE);
			const updatedReturnDate = Moment(returnDate).format(Moment.HTML5_FMT.DATE);

			saveHotelSearchDataToLocalStorage({
				hotelDestinationCode,
				updatedDepartureDate, updatedReturnDate,
				adults, numberOfRooms, currency_format
			});
			localStorage.removeItem("only_hotel");
			localStorage.setItem("only_hotel", "true");
			history.push("/hotel-list");
			// }
		}
		else {
			const hotelDestinationCode = destinationList.find((dest) => dest.city__city_name === destination).city__city_code;
			const updatedDepartureDate = Moment(departureDate).format(Moment.HTML5_FMT.DATE);

			saveHotelSearchDataToLocalStorage({
				hotelDestinationCode, updatedDepartureDate, adults,
				children, numberOfRooms, currency_format
			});
			localStorage.removeItem("only_hotel");
			localStorage.setItem("only_hotel", "true");
			history.push("/hotel-list");
		}

	};

	const onSearchFlightHotelPackageFormSubmit = (event) => {
		event.preventDefault();
		if (destination === origin) {
			setValues({
				...values,
				error: true,
				errorMessage: "Destination and Origin cannot be same"
			});
			return;
		}
		// if (returnDate < departureDate) {
		// 	setValues({
		// 		...values,
		// 		error: true,
		// 		errorMessage: "Return Date should be greater than Departure Date"
		// 	});
		// 	return;
		// } else {
		const destinationCode = destinationList.find((dest) => dest.airport_name === destination).airport_code;
		const originCode = originList.find((org) => org.airport_name === origin).airport_code;
		const hotelDestinationCode = destinationList.find((dest) => dest.airport_name === destination).city__city_code;
		const updatedDepartureDate = Moment(departureDate).format(Moment.HTML5_FMT.DATE);
		const updatedReturnDate = Moment(returnDate).format(Moment.HTML5_FMT.DATE);

		setGlobalState("destination_code", destinationCode)
		setGlobalState("origin", originCode)
		setGlobalState("hotel_destination", hotelDestinationCode)
		setGlobalState("departure_date", updatedDepartureDate)
		setGlobalState("return_date", updatedReturnDate)
		console.log("This is the currecny format")
		console.log(currency_format)

		savePackageSearchDataToLocalStorage({
			destinationCode, originCode,
			updatedDepartureDate, hotelDestinationCode,
			updatedReturnDate, adults, children,
			searchForMonths, days, currency_format
		});
		localStorage.removeItem("only_hotel");
		localStorage.removeItem("only_flight");
		localStorage.setItem("only_hotel", "false");

		history.push("/flight-hotel-package");
		// }
	};

	const date = new Date();
	const minDate = new Date(date.getFullYear(), date.getMonth(), 1);
	const maxDate = date.setMonth(date.getMonth() + 24);

	const handleSearch = (field, value) => {
		console.log("ran once")
		setValues({ ...values, error: false, [field]: value });
		handleChange(field)({ target: { value } });
		// Add the search function here that updates the originList or destinationList based on the input
	};

	function debounce(func, wait) {
		let timeout;
		return function executedFunction(...args) {
			const later = () => {
				clearTimeout(timeout);
				func(...args);
			};
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
		};
	}

	const debouncedHandleSearch = debounce(handleSearch, 300);

	const customerDialogHtml =
		<div className='container' style={{ padding: 0, margin: 0, width: '100%' }}>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="Flight Customers Number"
				PaperProps={{ sx: { width: "333px" } }}
			>
				<DialogContent>
					<Card className={classes.hotelbox}>
						<label className={classes.hotel}>Hotel Class
							<select className={classes.hoteltype}>
								<option>Any</option>
								<option>1 star</option>
								<option>2 stars</option>
								<option>3 stars</option>
								<option>4 stars</option>
								<option>5 stars</option>
							</select>
						</label>
					</Card>
					<Card className={classes.detailbox}>
						<label className={classes.adult}>Adults</label>
						<label className={classes.child}>Childs</label> <br />
						<select className={classes.adultbox}>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</select>
						<select className={classes.childbox}>
							<option>0</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
						</select>
						<label className={classes.age}>Age Below 12 Years</label> <br />
						<select className={classes.agebox}>
							<option>11</option>
							<option>10</option>
							<option>9</option>
							<option>8</option>
							<option>7</option>
							<option>6</option>
							<option>5</option>
						</select>
					</Card>
					<Button className={classes.button} onClick={handleAccept}>DONE</Button>
				</DialogContent>
			</Dialog>
		</div>

	function getCustomerDialog() {
		return (customerDialogHtml);
	}

	const logoUrl = process.env.PUBLIC_URL + "/assets/img/others/site-logo.png";

	return (
		<div className="banner-area banner-area-option viaje-go-top">
			<div className="banner-slider-option">
				<div className="banner-slider-item-option">
					<div className="container">
						<div className="row option">
							<div className="col-xl-8 col-md-10 offset-xl-2 offset-md-1 site-logo-title">
								<h1>Travel smarter</h1>
								<h3>Flight Duck uses AI to combine flight and hotel data to find you the best travel deals</h3>
							</div>
							<div className="col-xl-10 col-lg-10 offset-xl-1 offset-lg-1" style={{marginTop: 50}}>
								<div className='row search-main-wrapper-option'>
									<div className='col-xl-3 col-lg-6 col-md-6 search-single-wrap-option'>
										<DebounceInput
											minLength={1}
											debounceTimeout={400}
											input type="text"
											list="data1" placeholder="From?"
											value={destination}
											onChange={handleChange("destination")}
											required
										/>
										<datalist id="data1">
											<select>
												{
													destinationList.map(originItem => {
														return (
															<option key={`o3${originItem.airport_name}`}>
																{originItem.airport_name}
															</option>
														)
													})
												}
											</select>
										</datalist>
										<i className='fa-sharp fa-solid fa-location-dot' />
									</div>
									<div className='col-xl-3 col-lg-6 col-md-6 search-single-wrap-option'>
										<DebounceInput
											minLength={1}
											debounceTimeout={400}
											input type="text"
											list="data1" placeholder="To?"
											value={origin}
											onChange={handleChange("destination")}
											required
										/>
										<datalist id="data1">
											<select>
												{
													originList.map(originItem => {
														return (
															<option key={`o3${originItem.airport_name}`}>
																{originItem.airport_name}
															</option>
														)
													})
												}
											</select>
										</datalist>
										<i className='fa-regular fa-circle-dot' />
									</div>
									<div className='col-xl-2 col-lg-4 col-md-6 search-single-wrap-option'>
										<LocalizationProvider dateAdapter={AdapterDateFns}>
											<DatePicker
												format="MM/dd/yyyy"
												views={['year', 'month']}
												openTo="month"
												variant="inline"
												minDate={minDate}
												maxDate={maxDate}
												value={departureDate}
												className="w-100"

												onChange={(date) => setGlobalState("departure_date", date)}
												renderInput={(params) => (
													<TextField placeholder='yyyy.MM.dd'
														variant='standard'
														{...params}
													/>
												)}
												InputAdornmentProps={{ position: "start" }}
											/>
										</LocalizationProvider>
										{/* <i className='fa-regular fa-calendar-range' /> */}
									</div>
									<div className='col-xl-4 col-lg-8 col-md-12 search-single-wrap-option no-right-padding'>
										<div className='adult-wrapper-option' >
											<div className='search-single-wrap-option' style={{ width: '50%', paddingRight: 0 }}>
												<input type='button' value={`${adults !== null ? adults : ''} Adults ${children !== null ? children : ''} Children`} style={{ width: '100%', textAlign: 'left' }} onClick={handleOpen} />
												<i className='fa fa-suitcase-rolling' />
											</div>
											<span className='spliter-option'>
												|
											</span>
											<div className='search-single-wrap-option' style={{ width: '45%', paddingRight: 10 }}>
												<i className="fa fa-star" />
												<select style={{ width: '100%' }}>
													<option value={1}>any</option>
													<option value={2}>1 star</option>
													<option value={3}>2 stars</option>
													<option value={4}>3 stars</option>
													<option value={5}>4 stars</option>
													<option value={5}>5 stars</option>
												</select>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-6 col-lg-8 offset-xl-3 offset-lg-2" style={{ marginTop: 20 }}>
								<div className='row search-main-wrapper-option'>
									<div className='col-xl-3 col-md-12 search sub-title' style={{ paddingLeft: 10 }}>
										<p>I want to go away for</p>
									</div>
									<div className='col-xl-4 col-md-12'>
										<div className='row'>
											<div className='col-xl-5 search-single-wrap-option padding-left-20'>
												<select>
													<option value={1}>1</option>
													<option value={2}>2</option>
													<option value={3}>3</option>
													<option value={4}>4</option>
													<option value={5}>5</option>
													<option value={6}>6</option>
													<option value={7}>7</option>
													<option value={8}>8</option>
													<option value={9}>9</option>
													<option value={10}>10</option>
												</select>
											</div>
											<div className='col-xl-7 search-single-wrap-option'>
												<select style={{ width: '100%', paddingLeft: 30 }}>
													<option value={1}>Days</option>
													<option value={2}>Weeks</option>
													<option value={3}>Monthes</option>
													<option value={4}>Years</option>
												</select>
											</div>
										</div>
									</div>
									<div className='col-xl-5 col-md-12 search-single-wrap' style={{paddingRight: '20px !important'}} >
										<input type='button' className='btn btn-search' value='SEARCH THE BEST DEAL' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{getCustomerDialog()}
		</div >
	)
};

export default Search3;
