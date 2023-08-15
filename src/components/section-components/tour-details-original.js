import React, { Component, setState } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

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
        redirectToSearchIdx: false
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
  }

  componentDidMount() {
      document.addEventListener('mousedown', this.handleClick, false)
  }

  componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClick, false)
      this.props.clearTreehouseState();
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
      this.setState({ dropdownOpen: !this.state.dropdownOpen});
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
      if (this.state[type] > 0 ) {
          this.setState({ [type]: newVal })
      }
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

  render() {

    // Conditional to toggle color of minus sign on Guests dropdown
    let kidsMinusSignColorClass = (this.state.kidsCount === 0) ? "search-box-minus-circle" : "search-box-plus-circle";
    let adultsMinusSignColorClass = (this.state.adultsCount === 0) ? "search-box-minus-circle" : "search-box-plus-circle";

    // Create Guests input string
    let guestsInputContent = [
        this.makeSingleGuestsInputString("kid", "kidsCount"),
        this.makeSingleGuestsInputString("adult", "adultsCount")
    ].filter(type => type).join(", ");

    // Conditional for the Guests input chevron
    let chevronDirection;
    if (this.state.dropdownOpen) {
        chevronDirection = "fa fa-arrow-up";
    } else {
        chevronDirection = "fa fa-arrow-down";
    }

    const dropdownMenu = (
        <div className="search-box-dropdown-container">
            <ul>
                <li>
                    <div className="search-box-dropdown-label">
                        <div>Kids</div>
                    </div>
                    <div className="search-box-counter-container">
                        <div
                            className={`${kidsMinusSignColorClass}`}
                            onClick={() => this.decreaseCount("kidsCount")}>–</div>
                        <div className="search-box-dropdown-counter-num">{this.state.kidsCount}+</div>
                        <div 
                            className="search-box-plus-circle"
                            onClick={() => {
                                this.increaseCount("kidsCount");
                                }} >+</div>
                    </div>
                </li>
                <li>
                    <div className="search-box-dropdown-label">
                        <div>Adults</div>
                    </div>
                    <div className="search-box-counter-container">
                        <div
                            className={`${adultsMinusSignColorClass}`}
                            onClick={() => this.decreaseCount("adultsCount")}>–</div>
                        <div className="search-box-dropdown-counter-num">{this.state.adultsCount}+</div>
                        <div
                            className="search-box-plus-circle"
                            onClick={() => this.increaseCount("adultsCount")}>+</div>
                    </div>
                </li>
            </ul>
        </div>
    )

    let dropdownComponent = this.state.dropdownOpen ? dropdownMenu : <></>;

    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'
    let mapUrl = "https://maps.google.com/maps?q=" + this.props.hotelDetails.latitude + "," + this.props.hotelDetails.longitude + "&z=15&output=embed"

    return	<div className="tour-details-area mg-top--70">
        <div className="tour-details-gallery">
          <div className="container-bg bg-dark-blue">
            <div className="container">
              <div className="gallery-filter-area row">
                <div className="gallery-sizer col-1" />
                {/* gallery-item */}
                <div className="tp-gallery-item col-md-5 col-sm-6 mb-10">
                  <div className="tp-gallery-item-img">
                    <div className="thumbnails">
                      <img src={this.props.hotelDetails.images[0]} alt="image" />
                    </div>
                  </div>
                </div>
                {/* gallery-item */}
                <div className="tp-gallery-item col-md-3 col-sm-6">
                  <div className="tp-gallery-item-img">
                    <a href="#" data-effect="mfp-zoom-in">
                      <img src={this.props.hotelDetails.images[1]} alt="image" />
                    </a>
                  </div>
                </div>
                {/* gallery-item */}
                <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                  <div className="tp-gallery-item-img">
                    <a href="#" data-effect="mfp-zoom-in">
                      <img src={this.props.hotelDetails.images[2]} alt="image" />
                    </a>
                  </div>
                </div>
                {/* gallery-item */}
                <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                  <div className="tp-gallery-item-img">
                    <a href="#" data-effect="mfp-zoom-in">
                      <img src={this.props.hotelDetails.images[3]} alt="image" />
                    </a>
                  </div>
                </div>
                {/* gallery-item */}
                <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                  <div className="tp-gallery-item-img">
                    <a href="#" data-effect="mfp-zoom-in">
                      <img src={this.props.hotelDetails.images[4]} alt="image" />
                    </a>
                  </div>
                </div>
                {/* gallery-item */}
                <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                  <div className="tp-gallery-item-img">
                    <a href="#" data-effect="mfp-zoom-in">
                      <img src={this.props.hotelDetails.images[5]} alt="image" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-3 col-lg-4">
                  <div className="details">
                    <p className="location mb-0"><i className="fa fa-map-marker" />{this.props.hotelDetails.city}</p>
                    <h4 className="title">{this.props.hotelDetails.hotel}</h4>
                    <div className="tp-review-meta">
                      <i className="ic-yellow fa fa-star" />
                      <span>{this.props.hotelDetails.rating}</span>
                    </div>
                    <div className="all-tags">
                      <a>{this.props.hotelDetails.type}</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-8">
                  <div className="book-list-warp">
                    <p className="book-list-content">Get your spot before it's too late.</p>
                    <div className="tp-price-meta">
                      <p>Min. Price</p>
                      <h2><small>$</small> {this.props.hotelDetails.rate}</h2>
                    </div>
                  </div>
                  <ul className="tp-list-meta border-tp-solid">
                    <li className="ml-0"><i className="fa fa-calendar-o" /> 8 Oct</li>
                    <li><i className="fa fa-clock-o" /> 4 Days</li>
                    <li><i className="fa fa-users" />2 Person</li>
                    <li><i className="fa fa-medkit" /> {this.props.hotelDetails.health_safety_code}</li>
                  </ul>
                </div>   
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tour-details-wrap">
                <h4 className="single-page-small-title">Description</h4>
                <p>{this.props.hotelDetails.description}</p>
                {/* <div className="package-included-area">
                  <h4 className="single-page-small-title">Included</h4>
                  <div className="row">
                    {this.props.hotelDetails.facilities.map((facility) => {
                      let from = '';
                      let to = '';
                      let chargeable = '';
                      if (facility.facility_time_from != null) {
                        from = <p>From : {facility.facility_time_from}</p>
                      } 
                      if (facility.facility_time_to != null) {
                        to = <p>To : {facility.facility_time_to}</p>
                      }
                      if (facility.facility_chargeable == true) {
                        chargeable = <span>*</span>
                      }
                      if ((facility.facility_available == true) & (facility.facility_name != "hotel")) {
                        return (
                          <div className="col-xl-4 col-sm-6">
                            <div className="single-package-included">
                              <h6>{facility.facility_name}{chargeable}</h6>
                              {from}
                              {to}
                            </div>
                          </div>
                        )
                      }
                      else if (facility.facility_time_from != null) {
                        return (
                          <div className="col-xl-4 col-sm-6">
                            <div className="single-package-included">
                              <h6>{facility.facility_name}{chargeable}</h6>
                              {from}
                              {to}
                            </div>
                          </div>
                        )
                      }
                    })}
                  </div>
                </div> */}
                <div className="package-included-area">
                  <h4 className="single-page-small-title">Rooms</h4>
                  <div className="row">
                    {this.props.hotelDetails.rooms.map((room) => {
                      return (
                        <div className="col-xl-12 col-sm-12">
                          <div className="single-package-included-heading">
                            <p className="title">{room.name}</p>
                            <br></br>
                          </div>
                          <div className="single-package-included">
                            {room.rates.map((details) => {
                              return (
                                <div>
                                  <div className="row">
                                    <div className="col-xl-6">
                                      <div className="list-price-meta">
                                        <div className="tp-list-meta d-inline-block">
                                          <p>Code - {details.boardCode}</p>
                                          <p>Name - {details.boardName}</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-xl-6">
                                      <div className="row">
                                        <div className="col-xl-8">
                                          <div className="list-price-meta">
                                            <div className="tp-list-meta d-inline-block">
                                              <div className="text-lg-center text-left">
                                                {/* <a className="btn btn-yellow" href="#"><span>$</span> {details.net}</a> */}
                                                <h5>Booking Charges - <span>$</span> {details.net}</h5>
                                              </div>
                                              {/* <h5><span>$</span> {details.net}</h5> */}
                                              <p>Cancellation Charges - <span>$</span> {details.cancellationPolicies[0].amount}</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-xl-3">
                                          <div className="list-price-meta">
                                            <div className="tp-list-meta d-inline-block">
                                              <div className="text-lg-center text-left">
                                                <a className="btn btn-yellow" href="#">Book Now</a>
                                                {/* <h5>Booking Charges - <span>$</span> {details.net}</h5> */}
                                              </div>
                                              {/* <h5><span>$</span> {details.net}</h5> */}
                                              {/* <p>Cancellation Charges - <span>$</span> {details.cancellationPolicies[0].amount}</p> */}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <hr></hr>
                                </div>                                
                              )
                            })}
                          </div>
                          {/* {room.rates.map((details) => {
                            return (
                              <div className="single-package-included">
                                <div className="row">
                                  <div className="col-xl-6">
                                    <div className="list-price-meta">
                                      <div className="tp-list-meta d-inline-block">
                                        <p>Code - {details.boardCode}</p>
                                        <p>Name - {details.boardName}</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-6">
                                    <div className="list-price-meta">
                                      <div className="tp-list-meta d-inline-block">
                                        <h5><span>$</span> {details.net}</h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          })} */}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-area sidebar-area-4">
                <div className="widget tour-list-widget">
                  <div className="widget-tour-list-meta">
                    <div className="single-widget-search-input-title"><i className="fa fa-user" /> Name</div>
                    <div className="single-widget-search-input">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div className="single-widget-search-input-title"><i className="fa fa-envelope" /> Email</div>
                    <div className="single-widget-search-input">
                      <input type="text" placeholder="Email" />
                    </div>
                    <div className="single-widget-search-input-title"><i className="fa fa-phone" /> Phone</div>
                    <div className="single-widget-search-input">
                      <input type="text" placeholder="Phone" />
                    </div>
                    <div className="single-widget-search-input-title"><i className="fa fa-calendar-minus-o" /> Date</div>
                    <div className="single-widget-search-input">
                      <input type="text" className="departing-date custom-select" placeholder="Departing" />
                    </div>
                    <div className="single-widget-search-input-title"><i className="fa fa-calendar-minus-o" /> Date</div>
                    <div className="single-widget-search-input">
                      <input type="text" className="returning-date custom-select" placeholder="Returning" />
                    </div>
                    <div className="single-widget-search-input-title"><i className="fa fa-keyboard-o" /> Message</div>
                    <div className="single-widget-search-input">
                      <textarea placeholder="Type" defaultValue={""} />
                    </div>
                    <div className="single-widget-search-input-title"><i className="fa fa-users" /> Persons Details</div>
                    <div className="single-widget-search-input">
                      <input type="text" placeholder="Persons Details"
                        readOnly 
                        onClick={() => this.toggleDropdown()} 
                        value={guestsInputContent}
                        onFocus={() => this.toggleGuestsInputBorderColor()}
                        onBlur={() => this.toggleGuestsInputBorderColor()}
                      />
                    </div>
                    <div
                      ref={React.createRef()}
                    >{dropdownComponent}</div>
                    <br></br>
                    <br></br>
                    <div className="text-lg-center text-left">
                      <a className="btn btn-yellow" href="#">Book Now <i className="fa fa-paper-plane" /></a>
                    </div>
                  </div>
                </div>
                <div className="service-location-map">
                  <h4 className="single-page-small-title">Service Location</h4>
                  <div className="service-location-map">
                    <iframe src={mapUrl}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  }
}

export default TourDetails