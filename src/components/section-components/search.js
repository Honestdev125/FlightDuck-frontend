import React, { useState, useEffect /*, useCallback, useRef */ } from 'react';
import { Link /*, Redirect, withRouter, Route, useHistory */ } from 'react-router-dom';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


// import parse from 'html-react-parser';
import API_URL /* , { getFlightsDestinationAutoSuggestion, searchHotelBeds } */ from '../auth/helper';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { savePackageSearchDataToLocalStorage } from "../auth/helper/index";
import 'react-dropdown/style.css';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Moment from 'moment';
import SweetAlert from 'react-bootstrap-sweetalert';
import { DebounceInput } from 'react-debounce-input';
import { setGlobalState, useGlobalState } from '../../index';

import LoadingBox from './loading-box';
import "./search.css";

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

const Search = () => {
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

	localStorage.setItem("cachedHotelFlightPackageList", null);
	localStorage.setItem("packageDetails", null);
	setGlobalState("hotelFlightPackageList", []);

	const [destination] = useGlobalState("destination");
	const [origin] = useGlobalState("origin");
	const [departureDate] = useGlobalState("departure_date");
	const [returnDate] = useGlobalState("return_date");
	const [adults] = useGlobalState("adults");
	const [children] = useGlobalState("children");
	const [days] = useGlobalState("days");
	const [currency_format] = useGlobalState("selectedCurrency");
	const [isReturn] = useGlobalState("isReturn");

	const classes = useStyles();

	const [searchForMonths, setSearchForMonths] = useState(false);
	const [originList, originListData] = useState([]);
	const [destinationList, destinationListData] = useState([]);

	const [isLocal] = useGlobalState("isLocal");
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);

	const [values, setValues] = useState({
		origin: "",
		departureDate: "",
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

	const { daysOptions, selectedDayOption, numberOfRooms, suggestions, keyValue, error, errorMessage, alert /* originList */ } = values;

	// console.log('globalstate print in SEARCH function')
	printGlobalState(destination, origin, departureDate, returnDate, adults, children, days, currency_format)
	printGlobalState2(isReturn);

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
		.then(resp => resp.json())
		.then((resp) => {
			setValues({ ...values, error: false, originList: resp['list'] });
		})
	}

	const handleChange = (name) => (event) => {
		console.log("execution of Handlechange");
		console.log(name, event.target.value);

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
				}).then(resp => resp.json())
					.then((resp) => {
						destinationListData(resp['list'])
					})
			}
			else if (name === "origin") {
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

	const handleAccept = () => {
		setOpen(false);
	}

	const onSearchInfoSubmit = (event) => {
		event.preventDefault();

		if (destination === origin) {
			setValues({
				...values,
				error: true,
				errorMessage: "Destination and Origin cannot be same"
			});
			return;
		}

		const destinationCode = destinationList.find((dest) => dest.airport_name === destination).airport_code;
		const originCode = originList.find((org) => org.airport_name === origin).airport_code;
		const hotelDestinationCode = destinationList.find((dest) => dest.airport_name === destination).city__city_code;
		const updatedDepartureDate = Moment(departureDate).format(Moment.HTML5_FMT.DATE);
		let updatedReturnDate = null;

		if (returnDate !== null) {
			if (returnDate < departureDate) {
				setValues({
					...values,
					error: true,
					errorMessage: "Return Date should be greater than Departure Date"
				});

				return;
			}

			updatedReturnDate = Moment(returnDate).format(Moment.HTML5_FMT.DATE);
		}

		setGlobalState("destination_code", destinationCode);
		setGlobalState("origin", originCode);
		setGlobalState("hotel_destination", hotelDestinationCode);
		setGlobalState("departure_date", updatedDepartureDate);
		setGlobalState("return_date", updatedReturnDate);

		console.log("This is the currecny format")
		console.log(currency_format)

		savePackageSearchDataToLocalStorage({
			destinationCode, originCode,
			updatedDepartureDate, hotelDestinationCode,
			updatedReturnDate, adults, children,
			searchForMonths, days, currency_format
		});

		setLoading(true);
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

	// const debouncedHandleSearch = debounce(handleSearch, 300);

	const customerDialogHtml =
		<div className='container' style={{ padding: 0, margin: 0, width: '100%' }}>
			<Dialog
				open={open}
				onClose={() => setOpen(false)}
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
						<select className={classes.adultbox} onChange={handleChange('adults')}>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</select>
						<select className={classes.childbox} onChange={handleChange('children')}>
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
					<Button className={classes.button} onClick={() => handleAccept}>DONE</Button>
				</DialogContent>
			</Dialog>
		</div>

	function getCustomerDialog() {
		return (customerDialogHtml);
	}

	const logoUrl = process.env.PUBLIC_URL + "/assets/img/others/site-logo.png";

	return (
		<div className="banner-area viaje-go-top">
			<div className="banner-slider">
				<div className="banner-slider-item banner-bg-1">
					<div className="container">
						<div>
							<LoadingBox open={loading} onClose={() => { setOpen(false) }} timeout={5000} url={'/flight-hotel-package'} />
						</div>
						<div className="row">
							<div className="col-xl-4 col-lg-9 offset-xl-4 offset-lg-1 site-logo">
								<Link className="ads-thumb" to="">
									<img src={logoUrl} alt="ads" />
								</Link>
							</div>
							<div className="col-xl-10 col-lg-10 offset-xl-1 offset-lg-1">
								<div className='row search-main-wrapper'>
									<div className='col-xl-2 col-lg-4 col-md-6 search-single-wrap'>
										<DebounceInput
											minLength={1}
											debounceTimeout={400}
											input type="text"
											list="data1" placeholder="Where To?"
											value={origin}
											onChange={handleChange("origin")}
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
									<div className='col-xl-2 col-lg-4 col-md-6 search-single-wrap'>
										<DebounceInput
											minLength={1}
											debounceTimeout={400}
											input type="text"
											list="data1" placeholder="Where To?"
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
									<div className='col-xl-2 col-lg-4 col-md-6 search-single-wrap'>
										<LocalizationProvider dateAdapter={AdapterDateFns}>
											<DatePicker
												format="MM/dd/yyyy"
												views={['year', 'month']}
												openTo="month"
												variant="inline"
												minDate={minDate}
												maxDate={maxDate}
												value={departureDate}
												onChange={(date) => setGlobalState("departure_date", date)}
											/>
										</LocalizationProvider>
										<i className='fa-regular fa-calendar-range' />
									</div>
									<div className='col-xl-2 col-lg-4 col-md-6 search-single-wrap'>
										<LocalizationProvider dateAdapter={AdapterDateFns}>
											<DatePicker
												format="MM/dd/yyyy"

												minDate={minDate}
												maxDate={maxDate}
												value={returnDate}

												showMonthYearPicker
												showYearDropdown
												scrollableMonthYearDropdown

												onChange={(date) => setGlobalState("return_date", date)}
											/>
										</LocalizationProvider>
										<i className='fa-regular fa-calendar-range' />
									</div>
									<div className='col-xl-4 col-lg-8 col-md-12 search-single-wrap' style={{ paddingRight: 0 }}>
										<div className='adult-wrapper'>
											<div className='search-single-wrap' style={{ width: '45%' }}>
												<input type='button' value={`${adults !== null ? adults : ''} Adults ${children !== null ? children : ''} Children`} style={{ width: '100%', textAlign: 'left' }} onClick={() => setOpen(true)} />
												<i className='fa fa-suitcase-rolling' />
											</div>
											<span className='spliter'>
												|
											</span>
											<div className='search-single-wrap' style={{ width: '45%', paddingRight: 10 }}>
												<i className="fa fa-star" />
												<select style={{ width: '100%', border: 'none' }}>
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
							<div className='col-xl-10 col-lg-10 offset-xl-1 offset-lg-1'>
								<span style={{ color: 'yellow' }}>
									<i className="fa-thin fa-circle-check" style={{ fontSize: 22 }} />&nbsp;Hostels&nbsp;
								</span>
								<span style={{ color: 'white' }}>
									(want the cheapest price? Include hostels in search)
								</span>
							</div>
							<div className="col-xl-6 col-lg-8 offset-xl-3 offset-lg-2">
								<div className='row search-main-wrapper'>
									<div className='col-xl-3 col-md-12 search sub-title padding-left-10'>
										<p>I want to go away for</p>
									</div>
									<div className='col-xl-4 col-md-12'>
										<div className='row'>
											<div className='col-xl-5 search-single-wrap padding-left-20 padding-right-10'>
												<select name='days' onChange={handleChange}>
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
											<div className='col-xl-7 search-single-wrap'>
												<select style={{ width: '100%', border: 'none', paddingLeft: 10 }}>
													<option value={1}>Days</option>
													<option value={2}>Weeks</option>
													<option value={3}>Monthes</option>
													<option value={4}>Years</option>
												</select>
											</div>
										</div>
									</div>
									<div className='col-xl-5 col-md-12 search-single-wrap' style={{ paddingRight: '20px !important' }} >
										<input type='button' className='btn btn-search' value='SEARCH THE BEST DEAL' onClick={onSearchInfoSubmit} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{getCustomerDialog()}
			{errorAlertDialog()}
		</div >
	)
};

export default Search;
