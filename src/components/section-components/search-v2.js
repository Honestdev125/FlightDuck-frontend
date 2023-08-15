import React, { useState, useEffect /*, useCallback, useRef */ } from 'react'
import { Link, useHistory } from 'react-router-dom'

// import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import 'react-dropdown/style.css'
import SweetAlert from 'react-bootstrap-sweetalert'
import { DebounceInput } from 'react-debounce-input'
import Moment from 'moment'
// import parse from 'html-react-parser';
import { addDays } from 'date-fns'

// Load Mui Components
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { DatePicker } from '@mui/lab'
import { TextField } from '@material-ui/core'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
// import { makeStyles } from '@material-ui/core/styles';

import API_URL /* , { getFlightsDestinationAutoSuggestion, searchHotelBeds } */ from '../auth/helper'
import { savePackageSearchDataToLocalStorage } from '../auth/helper/index'
import { setGlobalState, useGlobalState } from '../../index'
import LoadingBox from './loading-box'
import './search-option.css'
import { Fighter_List } from './fighter-list'
import { useRef } from 'react'

const printGlobalState = (destination, origin, departureDate, returnDate, adults, children, days) => {
  console.log('destination is ' + destination)
  console.log('origin is ' + origin)
  console.log('return_date is ' + returnDate)
  console.log('adults is ' + adults)
  console.log('chuldren is ' + children)
  console.log('departureDate is ' + departureDate)
  console.log('days is ' + days)
}

const printGlobalState2 = (isReturn) => {
  console.log('return is ' + isReturn)
}

const Search2 = () => {
  localStorage.setItem('cachedHotelFlightPackageList', null)
  localStorage.setItem('packageDetails', null)
  setGlobalState('hotelFlightPackageList', [])

  const [destination, setDestination] = useState('')
  const [origin, setOrigin] = useState('')
  const [departure_date] = useGlobalState('departure_date')
  const [return_date] = useGlobalState('return_date')
  const [adults_num] = useGlobalState('adults')
  const [children_num] = useGlobalState('children')
  const [days_num] = useGlobalState('days')
  const [currency_format] = useGlobalState('selectedCurrency')
  const [isReturn] = useGlobalState('isReturn')
  
  // const classes = useStyles();

  const [searchForMonths, setSearchForMonths] = useState(false)
  const [originList, setOriginList] = useState([])
  const [destinationList, setDestinationList] = useState([])
  const [isLocal] = useGlobalState('isLocal')
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false)
  const [hoverItem, setHoverItem] = useState(-1)

  const originRef = useRef(null);
  const destinationRef = useRef(null);

  const [values, setValues] = useState({
    origin: '',
    departureDate: '',
    returnDate: '',
    selectedOption: 'flight',
    numberOfRooms: '',
    suggestions: [],
    keyValue: '',
    destinationName: '',
    error: '',
    errorMessage: 'Check all fields again',
    alert: null,
    adults: 0,
    children: 0,
    starRating: '',
    days: 1,
    daysUnit: 'days',
    // originList: []
  })

  const {
    daysOptions,
    selectedDayOption,
    numberOfRooms,
    suggestions,
    departureDate,
    returnDate,
    adults,
    children,
    days,
    daysUnit,
    starRating,
    keyValue,
    error,
    errorMessage,
    alert /* originList */,
  } = values

  // console.log('globalstate print in SEARCH function')
  printGlobalState(
    destination,
    origin,
    departure_date,
    return_date,
    adults_num,
    children_num,
    days_num,
    currency_format,
  )
  printGlobalState2(isReturn)

  useEffect(() => {
    setGlobalState('liveFlightsList', [])
    if (!isLocal) {
      const country_code = localStorage.getItem('country_code')
      if (country_code === null) return

      const url = `${API_URL}flights/get-airport-code/?country=${country_code}`
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((resp) => {
          setOriginList(resp['list'])
          setDestinationList(resp['list'])
        })
    }
  }, [])

  const hideAlert = (event) => {
    setValues({ ...values, error: false, alert: null })
  }

  const errorAlertDialog = () => {
    return (
      error && (
        <SweetAlert danger title='Error' onConfirm={hideAlert}>
          {errorMessage}
        </SweetAlert>
      )
    )
  }

  function updateOriginList() {
    fetch(`${API_URL}flights/get-airport-code/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setValues({ ...values, error: false, originList: resp['list'] })
      })
  }

  const handleDate = (date) => {
    setGlobalState('departure_date', date)
    setValues({ ...values, error: false, departureDate: date })
  }

  const handleAdultsNum = (value) => {
    let n = adults + value

    if (n < 0) {
      return
    }

    setValues({ ...values, error: false, adults: n })
  }

  const handleChildrenNum = (value) => {
    let n = children + value

    if (n < 0) {
      return
    }

    setValues({ ...values, error: false, children: n })
  }

  const handleAccept = () => {
    setGlobalState('adults', adults)
    setGlobalState('children', children)
    setGlobalState('starRating', starRating)
    setOpen(false)
  }

  const date = new Date()
  const minDate = new Date()
  const maxDate = date.setMonth(date.getMonth() + 24)

  // const date = new Date();
  // const minDate = new Date(date.getFullYear(), date.getMonth(), 1);
  // const maxDate = date.setMonth(date.getMonth() + 24);

  const handleSearch = (field, value) => {
    console.log('ran once')
    setValues({ ...values, error: false, [field]: value })
    handleChange(field)({ target: { value } })
    // Add the search function here that updates the originList or destinationList based on the input
  }

  function debounce(func, wait) {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

  const handleStar = (event) => {
    setValues({ ...values, starRating: event.target.value })
  }

  const handleDays = (event) => {
    var d = event.target.value
    var period = d

    if (daysUnit === 'weeks') {
      period = d * 7
    } else if (daysUnit === 'month') {
      period = d * 30
    } else if (daysUnit === 'year') {
      period = d * 365
      setValues({ ...values, error: false, days: period * 365 })
    }

    // var r_date = new Date(departureDate);
    // setValues({...values, error: false, days: period});
    // setValues({...values, error: false, returnDate: r_date});
    // window.alert(r_date.toString("MM/dd/yyyy"));
  }

  const handleDaysUnit = (event) => {
    setValues({ ...values, error: false, daysUnit: event.target.value })
  }

  const debouncedHandleSearch = debounce(handleSearch, 300)


  const handleChange = (name) => (event) => {
    setOriginList([]);
    setDestinationList([]);
    setGlobalState(name, event.target.value)
    setValues({ ...values, error: false, [name]: event.target.value })

    if (name === "destination") {
      setDestination(event.target.value);
      console.log("this is pre destination API req")
      const url = `https://www.skyscanner.com/g/autosuggest-search/api/v1/search-flight/US/en-GB/${event.target.value}?isDestination=true&enable_general_search_v2=true&autosuggestExp=ranking_v2`
      fetch(
        url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resp => resp.json())
        .then((resp) => {
          setDestinationList(resp);
          console.log(resp);
          // setDestinationList(resp['list'])
        })
    }
    else if (name === "origin") {
      setOrigin(event.target.value);
      const url = `https://www.skyscanner.com/g/autosuggest-search/api/v1/search-flight/US/en-GB/${event.target.value}?isDestination=false&enable_general_search_v2=true&autosuggestExp=ranking_v2`
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
          setOriginList(resp);
          console.log(resp);
          // setOriginList(resp['list'])
        })
    }
  }

  const selectFighter = (name, item) => {
    console.log(name, item);
    if (name === 'origin') {
      setOrigin(`${item.PlaceName} (${item.PlaceId})`);
      setOriginList([])
    }
    else {
      setDestination(`${item.PlaceName} (${item.PlaceId})`);
      setDestinationList([]);
    }
  }
  const clearFighter = (name) => {
    if(name === 'origin'){
      setOrigin('');
      originRef.current.focus();
    }
    else{
      setDestination('');
      destinationRef.current.focus();
    }
  }
  const onSearchInfoSubmit = (event) => {
    // /

    event.preventDefault()

    // if (destination === origin) {
    // 	setValues({
    // 		...values,
    // 		error: true,
    // 		errorMessage: "Destination and Origin cannot be same"
    // 	});
    // 	return;
    // }

    // if (returnDate < departureDate) {
    // 	setValues({
    // 		...values,
    // 		error: true,
    // 		errorMessage: "Return Date should be greater than Departure Date"
    // 	});
    // 	return;
    // } else {
    // const destinationCode = destinationList.find((dest) => dest.airport_name === destination).airport_code;
    // const originCode = originList.find((org) => org.airport_name === origin).airport_code;
    // const hotelDestinationCode = destinationList.find((dest) => dest.airport_name === destination).city__city_code;

    const destinationCode = ''
    const originCode = ''
    const hotelDestinationCode = ''
    const updatedDepartureDate = Moment(departureDate).format(Moment.HTML5_FMT.DATE)
    const updatedReturnDate = Moment(returnDate).format(Moment.HTML5_FMT.DATE)

    // setGlobalState("destination_code", destinationCode)
    // setGlobalState("origin", originCode)
    setGlobalState('hotel_destination', hotelDestinationCode)
    setGlobalState('departure_date', updatedDepartureDate)
    setGlobalState('return_date', updatedReturnDate)
    setGlobalState('days', days)

    console.log('This is the currecny format')
    console.log(currency_format)

    savePackageSearchDataToLocalStorage({
      destinationCode,
      originCode,
      updatedDepartureDate,
      hotelDestinationCode,
      updatedReturnDate,
      adults,
      children,
      searchForMonths,
      days,
      currency_format,
    })
    // localStorage.removeItem("only_hotel");
    // localStorage.removeItem("only_flight");
    // localStorage.setItem("only_hotel", "false");

    // history.push("/flight-hotel-package");

    setLoading(true)
  }

  const customerDialogHtml = (
    <div className='adults-dialog' style={{ padding: 0, margin: 0, width: '100%' }}>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <div className='container form-wrap'>
            <div className='row'>
              <div className='col-sm-12' style={{ padding: '0px', margin: '15px auto' }}>
                <label for='starRating'>Hotel Rating</label>
                <select clssName='form-control' name='starRating' onChange={handleStar}>
                  <option value='Any'>Any</option>
                  <option value='Un stared'>Un stared</option>
                  <option value='1 Star'>1 Star</option>
                  <option value='2 Star'>2 Star</option>
                  <option value='3 Star'>3 Star</option>
                  <option value='4 Star'>4 Star</option>
                  <option value='5 Star'>5 Star</option>
                </select>
              </div>
            </div>
            <div className='row' style={{ marginTop: 10 }}>
              <div style={{ width: '40%' }}>
                <div>Adults &nbsp;{adults}</div>
                <div>Age 16+</div>
              </div>
              <div className='item-wrapper' style={{ width: '60%' }}>
                <div className='adult-dig-item'>
                  <button className='btn-adult' onClick={() => handleAdultsNum(-1)}>
                    -
                  </button>
                </div>
                <div className='adult-dig-item' style={{ paddingTop: 20 }}>
                  {adults}
                </div>
                <div className='adult-dig-item'>
                  <button className='btn-adult' onClick={() => handleAdultsNum(1)}>
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className='row' style={{ marginTop: 10 }}>
              <div style={{ width: '40%' }}>
                <div>Children &nbsp;{children}</div>
                <div>Aged 0 to 15</div>
              </div>
              <div className='item-wrapper' style={{ width: '60%' }}>
                <div className='adult-dig-item'>
                  <button className='btn-adult' onClick={() => handleChildrenNum(-1)}>
                    -
                  </button>
                </div>
                <div className='adult-dig-item' style={{ paddingTop: 20 }}>
                  {children}
                </div>
                <div className='adult-dig-item'>
                  <button className='btn-adult' onClick={() => handleChildrenNum(1)}>
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className='row' style={{ marginTop: 15 }}>
              <p>
                Your age at tiem of travel must be valid for the age category booked. Airlines have restrictions on
                under 18s travelling alone.
                <br />
                Age limits and policies for travelling with children may vary so please check with the airline before
                booking.
              </p>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button
            className='btn btn-primary btnAccept'
            onClick={handleAccept}
            style={{ padding: 'auto', margin: '0 auto 10px auto', height: 50, width: '90%' }}>
            Apply
          </button>
        </DialogActions>
      </Dialog>
    </div>
  )

  function getCustomerDialog() {
    return customerDialogHtml
  }

  let logoUrl = process.env.PUBLIC_URL + '/' + 'assets/img/others/new.png'

  return (
    <div className='banner-area banner-area-option viaje-go-top'>
      <div className='banner-slider-option'>
        <div className='search-page-container'>
          <div>
            <LoadingBox
              open={loading}
              onClose={() => {
                setLoading(false)
              }}
              timeout={5000}
              url={'/flight-hotel-package'}
            />
          </div>
          <div className='search-page-logo'>
            <Link className='ads-thumb' to=''>
              <img src={logoUrl} alt='ads' />
            </Link>
          </div>
          <div className='search-page-header'>
            <div className='col-12'>
              <h1 className='search-page-header main-title'>Travel smarter</h1>
            </div>
            <div className='col-12'>
              <h3 className='search-page-header sub-title'>
                Flight Duck uses AI to combine flight and hotel data to find you the best travel deals
              </h3>
            </div>
          </div>
          <div className='search-form-group1'>
            <div className='row'>
              <div className='col-lg-3 col-md-6 col-sm-12 search-form-item-wrap'>
                <div className='search-form-item'>
                  <div style={{ height: '50px', display: 'flex', flexDirection: 'row' }}>
                    <input
                      minLength={1}
                      debounceTimeout={400}
                      input
                      type='text'
                      list='data1'
                      placeholder='From'
                      value={origin}
                      ref={originRef}
                      onChange={handleChange('origin')}
                      required
                    />

                    {origin && <svg onClick={() => clearFighter('origin')} style={{ height: '15px', marginTop: '20px', marginRight: '15px' }} className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>}
                  </div>

                  <div>
                    <div style={{ width: '300px', backgroundColor: 'white', borderRadius: '6px', cursor: 
                    'pointer', position: 'relative', zIndex: '10' }}>
                      {
                        originList.map((item, key) => (
                          <div key={key} onMouseEnter =  {()=>setHoverItem(key)} 
                          style={{ padding: '5px', display: 'flex', justifyContent: 'center', fontSize: '15px', borderBottom: '1px dashed grey', backgroundColor:hoverItem===key?'#f0f5f5':'white' }} onClick={() => selectFighter('origin', item)}>{`${item.PlaceName} (${item.PlaceId})`}</div>
                        ))
                      }
                    </div>
                  </div>
                  <i className='fa-sharp fa-solid fa-location-dot' />
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12 search-form-item-wrap'>
                <div className='search-form-item'>
                  <div style={{ height: '50px', display: 'flex', flexDirection: 'row' }}>
                    <input
                      minLength={1}
                      debounceTimeout={400}
                      input
                      type='text'
                      list='data1'
                      placeholder='To'
                      ref={destinationRef}
                      value={destination}
                      onChange={handleChange('destination')}
                      required
                    />

                    {destination && <svg onClick={() => clearFighter('destination')} style={{ height: '15px', marginTop: '20px', marginRight: '15px' }} className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>}
                  </div>

                  <div>
                    <div style={{ width: '300px', backgroundColor: 'white', borderRadius: '6px', cursor: 'pointer', zIndex:'10', position: 'relative' }}>
                      {
                        destinationList.map((item, key) => (
                          <div key={key} onMouseEnter =  {()=>setHoverItem(key)} 
                          style={{ padding: '5px', display: 'flex', justifyContent: 'center', fontSize: '15px', borderBottom: '1px dashed grey', backgroundColor:hoverItem===key?'#f0f5f5':'white' }} 
                          onClick={() => selectFighter('destination', item)}>{`${item.PlaceName} (${item.PlaceId})`}</div>
                        ))
                      }
                    </div>
                  </div>
                  <i className='fa-regular fa-circle-dot' />
                </div>
              </div>
              <div className='col-lg-2 col-md-6 col-sm-12 search-form-item-wrap'>
                <div className='search-form-item'>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      open={show}
                      onOpen={() => setShow(true)}
                      onClose={() => setShow(false)}
                      views={['year', 'month']}
                      openTo='month'
                      minDate={minDate}
                      maxDate={maxDate}
                      value={departure_date}
                      onChange={handleDate}
                      // renderInput={(params) => <TextField {...params} helperText={null} InputProps={{
                      //   ...params.InputProps,
                      //   readOnly: true, // Prevents direct input
                      //   style: { cursor: "pointer" }, // Set cursor style to pointer
                      // }} onClick={(e) => setShow(true)} />}

                      renderInput={(params) => (
                        <TextField
                          {...params}
                          helperText={null}
                          onClick={(e) => setShow(true)}
                        />
                      )}
                      inputProps={{
                        autoComplete: "off",
                        readOnly: true,
                        // style: { cursor: "pointer" },
                      }}
                    />
                  </LocalizationProvider>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-12 search-form-item-wrap'>
                <div className='search-form-item' onClick={() => setOpen(true)}>
                  <div className='search-form-adult-wrap'>
                    <div className='search-form-adult-sub-wrap' style={{ width: '55%' }}>
                      <i className='fa fa-suitcase-rolling icon-suitcase' style={{ marginLeft: -15 }} />
                      <span className='text'>
                        {adults !== null ? adults : '0'} Adults {children !== null ? children : '0'} Children
                      </span>
                    </div>
                    <span className='vertical-line'></span>
                    <div className='search-form-adult-sub-wrap' style={{ width: '35%' }}>
                      <span style={{ width: '10%' }}>
                        <i className='fa fa-star icon-star' />
                      </span>
                      <span className='text' style={{ width: '80%' }}>
                        {values.starRating === '' ? 'Any' : values.starRating}
                      </span>
                      <span style={{ width: '10%', padding: 'auto' }}>
                        <i className='fa-solid fa-sort-down' />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='search-form-group2'>
            <div className='row'>
              <div className='col-md-4 col-sm-12' style={{ paddingLeft: 0 }}>
                <div className='search-title-item search'>
                  <p>I want to go away for</p>
                </div>
              </div>
              <div className='col-md-4 col-sm-12' style={{ padding: 0 }}>
                <div className='row' style={{ padding: 0 }}>
                  <div className='col-md-5 col-sm-12 search-fg-wrap'>
                    <div className='search-form-item' style={{ padding: '0px 15px 0 10px', zIndex:'0' }}>
                      <select name='duration' onChange={handleDays}>
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
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                        <option value={13}>13</option>
                        <option value={14}>14</option>
                        <option value={15}>15</option>
                        <option value={16}>16</option>
                        <option value={17}>17</option>
                        <option value={18}>18</option>
                        <option value={19}>19</option>
                        <option value={20}>20</option>
                        <option value={21}>21</option>
                        <option value={22}>22</option>
                        <option value={23}>23</option>
                        <option value={24}>24</option>
                        <option value={25}>25</option>
                        <option value={26}>26</option>
                        <option value={27}>27</option>
                        <option value={28}>28</option>
                        <option value={29}>29</option>
                        <option value={30}>30</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-md-7 col-sm-12 search-fg-wrap'>
                    <div className='search-form-item' style={{ padding: '0 15px 0 10px' }}>
                      <select onChange={handleDaysUnit}>
                        <option value='days'>Days</option>
                        <option value='weeks'>Weeks</option>
                        <option value='month'>Monthes</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-12 search-fg-wrap'>
                <input
                  type='button'
                  className='search-button'
                  value='SEARCH THE BEST DEAL'
                  onClick={onSearchInfoSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {getCustomerDialog()}
    </div>
  )
}

export default Search2
