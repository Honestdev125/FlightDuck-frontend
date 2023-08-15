import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { setGlobalState } from "../../index";

import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import StarIcon from '@mui/icons-material/Star'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import HotelMap from './tour-details-map';
import LoadingBox from './loading-box';

class TourDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      searchTerm: "",
      kidsCount: 0,
      adultsCount: 0,
      startDate: null,
      endDate: null,
      focusedInput: null,
      guestsInputBorderFocused: false,
      redirectToSearchIdx: false,
      loading: false,
      roomsList: [],
      checkedRoomKey: "",
      currentPage: 0
    };

    this.inputNode = React.createRef();
    this.dropdownNode = React.createRef();
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
    this.handleSearchUpdate = this.handleSearchUpdate.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.makeSingleGuestsInputString = this.makeSingleGuestsInputString.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.slideShow = this.slideShow.bind(this);
    this.mobileMode = this.mobileMode.bind(this)
    this.desktopMode = this.desktopMode.bind(this);
  }

  componentDidMount() {
    setGlobalState("liveFlightsList", [])
    document.addEventListener('mousedown', this.handleClick, false)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false)
    // this.props.clearTreehouseState();
  }

  handleClick(e) {
    // this.toggleDropdown();
  }

  handleSearchUpdate() {
    return (e) => {
      this.setState({
        searchTerm: e.currentTarget.value
      });
    };
  }

  handleSearchSubmit(e) {
    e.preventDefault();
    let startDate = null;
    let endDate = null;
    if (this.state.startDate && this.state.endDate) {
      startDate = this.state.startDate.format('YYYY/MM/DD');
      endDate = this.state.endDate.format('YYYY/MM/DD');
    }
    this.props.fetchTreehouseSearchResults(this.state.searchTerm, startDate, endDate);
    this.setState({ redirectToSearchIdx: true })
  }

  toggleDropdown() {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  openDropdown() {
    this.setState({ dropdownOpen: true });
  }

  closeDropdown() {
    this.setState({ dropdownOpen: false });
  }

  toggleGuestsInputBorderColor() {
    this.setState({ guestsInputBorderFocused: !this.state.guestsInputBorderFocused });
  }

  increaseCount(type) {
    let newVal = this.state[type] + 1;
    this.setState({ [type]: newVal })
  }

  decreaseCount(type) {
    // e.stopPropagation();
    let newVal = this.state[type] - 1;
    if (this.state[type] > 0) {
      this.setState({ [type]: newVal })
    }
  }

  slideShow(step) {
    const localStorageData = localStorage.getItem("packageDetails");
    const packageDetails = localStorageData ? JSON.parse(localStorageData) : null;

    if (packageDetails === null) {
      this.setState({ currentPage: 0 });
      return;
    }

    const images = packageDetails.hotel_object.images;
    let curPage = this.state.currentPage;
    let totalPage = Math.ceil(images.length / 5.0);
    curPage += step;

    if (curPage >= totalPage || curPage < 0)
      return;

    this.setState({ currentPage: curPage });
  }

  makeSingleGuestsInputString(type, stateName) {
    let num = this.state[stateName];
    if (num === 0) return null;
    if (num === 1) {
      return `${num} ${type}`
    } else {
      return `${num} ${type}s`
    }
  };
  // FIX THIS. WHOLE FILE NEEDS TO BE REFACTORED SO CAN GRAB FROM STATE RATHER THAN LOCALSTORAGE
  createHotelRoomsRateList() {
    const packageDetails = JSON.parse(localStorage.getItem("packageDetails"));

    return packageDetails.hotel_object.rooms.map((room, i) => {
      return (
        <div className="col-xl-12 col-md-12" key={`a${i}`} style={{ padding: '0px 0px 0px 0px' }}>
          <div className="single-package-included-heading">
            <p className="title">{room.name}</p>
          </div>
          <div className="single-package-included">
            {room.rates.map((details, j) => {
              return (
                <div className='row single-package-included-item' key={`j${j}`}>
                  <div className='col-md-2 col-sm-4' style={{ margin: 'auto', textAlign: 'center' }}>
                    <h5>{details.boardCode}</h5>
                  </div>
                  <div className='col-md-5 col-sm-8' style={{ margin: 'auto' }}>
                    <div style={{ width: '100%' }}>
                      <i className='fa fa-check' />
                      &nbsp;&nbsp;33% Cancellation fees
                    </div>
                    <div style={{ width: '100%' }}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Product for Packaging<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className='fa fa-plane-up' style={{ transform: 'rotate(-45deg)' }} />
                    </div>
                  </div>
                  <div className='col-md-2 col-sm-4' style={{ margin: 'auto' }}>
                    <p className='price'>
                      ${details.net}
                    </p>
                  </div>
                  <div className='col-md-3 col-sm-8' style={{ margin: 'auto' }}>
                    <button className="btn-select"
                      onClick={
                        () => {
                          localStorage.setItem("hotel_room_details", JSON.stringify(details));
                          localStorage.setItem("hotel_details", JSON.stringify(packageDetails.hotel_object));
                          localStorage.setItem("hotel_room_name", room.name);
                          this.setState({ loading: true });
                        }
                      }
                    >
                      Select
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )
    });
  }

  fetchBookableRateKey(rooms) {
  }

  desktopMode() {
    const packageDetails = localStorage.getItem("packageDetails") ? JSON.parse(localStorage.getItem("packageDetails")) : null;

    if (packageDetails === null || packageDetails === undefined) {
      withRouter("/*");
      return;
    }

    const images = packageDetails.hotel_object.images;

    return (
      <div className='row'>
        <div className='col-md-4 image-wrap'>
          <div className='image-item' style={{ backgroundImage: `url('${packageDetails.hotel_object.images[0]}')` }} />
        </div>
        <div className='col-md-3 image-wrap'>
          <div className='image-item' style={{ backgroundImage: `url('${images[this.state.currentPage * 5 + 1]}')` }} />
        </div>
        <div className='col-md-5' style={{ padding: '0px 0px 0px 0px' }}>
          <div className='row'>
            <div className='image-wrap col-md-6'>
              <div className='image-item' style={{ backgroundImage: `url('${images[this.state.currentPage * 5 + 2]}')` }} />
            </div>
            <div className='image-wrap col-md-6'>
              <div className='image-item' style={{ backgroundImage: `url('${images[this.state.currentPage * 5 + 3]}')` }} />
            </div>
            <div className='image-wrap col-md-6'>
              <div className='image-item' style={{ backgroundImage: `url('${images[this.state.currentPage * 5 + 4]}')` }} />
            </div>
            <div className='image-wrap col-md-6'>
              <div className='image-item' style={{ backgroundImage: `url('${images[this.state.currentPage * 5 + 5]}')` }} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  mobileMode() {
    const packageDetails = localStorage.getItem("packageDetails") ? JSON.parse(localStorage.getItem("packageDetails")) : null;
    const images = packageDetails.hotel_object.images;

    return (
      <div className='row'>
        <div className='col-sm-12'>
          <Slide>
            {
              images.map((img, index) => {
                return (
                  <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${img})` }} key={index} />
                  </div>
                )
              })
            }
          </Slide>
        </div>
      </div>
    )
  }

  hotelData() {
    const packageDetails = localStorage.getItem("packageDetails") ? JSON.parse(localStorage.getItem("packageDetails")) : null;
    const adults = JSON.parse(localStorage.getItem("adults"));
    const children = JSON.parse(localStorage.getItem("children"));
    const days = JSON.parse(localStorage.getItem("days"));

    const labels = {
      '0 STARS AND A HALF': '0.5',
      '1 STARS': '1',
      '1 STARS AND A HALF': '1.5',
      '2 STARS': '2',
      '2 STARS AND A HALF': '2.5',
      '3 STARS': '3',
      '3 STARS AND A HALF': '3.5',
      '4 STARS': '4',
      '4 STARS AND A HALF': '4.5',
      '5 STARS': '5',
    }

    const dateFormat = (date) => {
      const dateObj = new Date(date);

      const formattedDate = dateObj.toLocaleString('default', {
        day: 'numeric',
        month: 'short',
      }).toUpperCase();

      return formattedDate;
    }

    return <div>
      <div className="tour-details-container">
        <div className="container-bg-tour-details bg-gray">
          <div className="container">
            <div className='desktop-mode'>
              {this.desktopMode()}
            </div>
            <div className='mobile-mode'>
              {this.mobileMode()}
            </div>
            <div className="row">
              <div className='col-md-1' style={{ paddingTop: 50 }}>
                <button className='round-button' onClick={() => this.slideShow(-1)}><i className='fa-solid fa-chevron-left' /></button>
              </div>
              <div className="col-md-6">
                <div className="details">
                  <p className="location mb-0" style={{ color: '#26A9DE' }}><i className="fa fa-map-marker" style={{ color: '#26A9DE' }} />&nbsp;&nbsp;{packageDetails.hotel_object.city}</p>
                  <h4 className="title">{packageDetails.hotel_object.hotel}</h4>
                  <div className="tp-review-meta">
                    <span>{`${days} days ${adults + children} persons`}</span>
                    <Box
                      sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'left',
                      }}>
                      <Rating
                        name='text-feedback'
                        value={labels[packageDetails.hotel_object.rating]}
                        readOnly
                        precision={0.5}
                        emptyIcon={<StarIcon style={{ opacity: 0.2 }} fontSize='inherit' />}
                      />
                      <Box sx={{ ml: 2 }}>{labels[packageDetails.hotel_object.rating]}</Box>
                    </Box>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className='tp-details-book-wrap'>
                  <h4>Price</h4>
                </div>
                <div className='tp-details-book-wrap' style={{ display: 'flex', textAlign: 'right' }}>
                  <div className='col-md-5 col-sm-7'>
                    Flights ${packageDetails.flight_price}, Hotel ${packageDetails.hotel_price}
                  </div>
                  <div className='col-md-7 col-sm-5'>
                    <span style={{ verticalAlign: 'top' }}>Total:&nbsp;&nbsp;</span>
                    <span className='total-price'>{packageDetails.flight_price + packageDetails.hotel_price}</span>$
                  </div>
                </div>
                <div className='tp-details-book-wrap border-tp-solid' style={{ marginTop: 20 }}>
                  <i className='fa-regular fa-calendar-range' />&nbsp;&nbsp;
                  {dateFormat(packageDetails.outbounddate)} to {dateFormat(packageDetails.inbounddate)}
                </div>
              </div>
              <div className='col-md-1' style={{ paddingTop: 50 }}>
                <button className='round-button' onClick={() => this.slideShow(1)} style={{ marginLeft: 'auto' }}><i className='fa-solid fa-chevron-right' /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{padding: 0}}>
        <div className="row">
          <div className="col-lg-8 col-md-12 room-details-wrap">
            <div className="tour-details-wrap bordered description-wrap">
              <h4 className="single-page-small-title">Description</h4>
              <p>{packageDetails.hotel_object.description}</p>
            </div>
            <div className="tour-details-wrap">
              <div className="package-included-area">
                <div className="row">
                  {this.createHotelRoomsRateList()}
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-12 map-wrap'>
            <HotelMap center={{ lat: packageDetails.hotel_object.latitude, lng: packageDetails.hotel_object.longitude }} />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='container' style={{padding: 0}}>
          <div className='back-button'>
            <i className='fa-solid fa-chevron-left' style={{marginRight: 15}} />
            <Link to="/flight-hotel-package">Back</Link>
          </div>
        </div>
      </div>
    </div>
  }

  loadingMessage() {
    if (!this.state.loading) {
      return (
        this.state.loading && (
          <div className="preloader" id="preloader">
            <div className="preloader-inner">
              <div className="spinner">
                <div className="dot1"></div>
                <div className="dot2"></div>
              </div>
            </div>
          </div>
        )
      );
    }

  };

  render() {

    return <div className="tour-details-area mg-top-70">
      {this.loadingMessage()}
      {this.hotelData()}
      <LoadingBox open={this.state.loading} onClose={() => { this.setState({ loading: false }) }} timeout={5000} url={'/tour-list-v2'} />
    </div>
  }
}

export default TourDetails