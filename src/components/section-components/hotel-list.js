import React, { Component, setState } from 'react';
import { getLiveHotelPricing } from '../auth/helper';
import LiveHotelItem from '../flights/live_hotel_item';
import LiveHotelItemCheapest from '../flights/live_hotel_item_cheapest';
import LiveHotelItemBest from '../flights/live_hotel_item_best';
import paginate from '../flights/paginate_flight_hotel_package';
import { Slider } from '@material-ui/core';
import './hotel-list.css'

class HotelList extends Component {

  constructor() {
    super();
    this.state = {
      destination: "",
      origin: "",
      departure_date: "",
      return_date: "",
      price_sort: "down",
      price_sort_text: "Price High to Low",
      loading: false,
      liveHotelsList: [],
      filteredData: [],
      pageNumber: 0,
      paginated_data: [],
      completeList: [],
      currencySymbol: "",
      priceRange: [10, 500],
      starRating: '',
      hotelName: '',
      accomodationType: ''
    };
  };

  componentDidMount() {
    const destination = localStorage.getItem("flight_destination");
    const origin = localStorage.getItem("flight_origin");
    const departure_date = localStorage.getItem("flight_departure_date");
    const return_date = localStorage.getItem("flight_return_date");
    this.setState({
      destination: destination, origin: origin,
      departure_date: departure_date, return_date: return_date
    });
    this.searchLiveHotels();

  }

  toggleLoading() {
    this.setState(state => ({
      loading: !state.loading
    }));
  }

  searchLiveHotels() {
    this.toggleLoading();
    getLiveHotelPricing()
      .then((data) => {
        if (data.length > 0) {
          let result = data
          if (result.length > 10) {
            result = paginate(data);
            this.setState({
              completeList: data,
              filteredData: data,
              paginated_data: result,
              liveHotelsList: result[this.state.pageNumber]
            });
          } 
          else {
            this.setState({
              completeList: data,
              filteredData: data,
              paginated_data: [result],
              liveHotelsList: result
            });
          }
        } 
        this.toggleLoading();
      })
      .catch((e) => {
        this.toggleLoading();
      });
  }



  loadingMessage = () => {
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
  };

  inputChangedHandler = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  }

  handlePage(index) {
    this.setState({
      pageNumber: index,
      liveHotelsList: this.state.paginated_data[this.state.pageNumber]
    });
  }

  nextPage = () => {
    let nextPage = this.state.pageNumber + 1
    if (nextPage > this.state.paginated_data.length - 1) {
      nextPage = 0
    }
    this.setState({
      pageNumber: nextPage,
      liveHotelsList: this.state.paginated_data[nextPage]
    })
  }
  prevPage = () => {
    let prevPage = this.state.pageNumber - 1
    if (prevPage < 0) {
      prevPage = this.state.paginated_data.length - 1
    }
    this.setState({
      pageNumber: prevPage,
      liveHotelsList: this.state.paginated_data[prevPage]
    })
  }

  sortSearchResultsBasedOnPrices = (event) => {
    setTimeout(() => {
      let price = this.state.price_sort;
      const newList = this.state.filteredData;
      if (price === "down") {
        this.setState({ price_sort: "up", price_sort_text: "Price Low to High" });
        newList.sort((newList, second) => (newList.rate > second.rate ? 1 : -1));
      }
      if (price === "up") {
        this.setState({ price_sort: "down", price_sort_text: "Price High to Low" });
        newList.sort((newList, second) => (newList.rate < second.rate ? 1 : -1));
      }
      const result = paginate(newList);
      this.setState({ paginated_data: result });
      this.setState({ pageNumber: 0 });
      this.setState({ liveHotelsList: (result[0] || []) });
    }, 100)
  }



  filterAndSort() {
    setTimeout(() => {
      let priceRange = this.state.priceRange;
      let star = this.state.starRating;
      let type = this.state.accomodationType;
      let name = this.state.hotelName;
      let list = this.state.completeList || [];
      let alist = list.filter(r =>
        parseFloat(r.rate) <= parseInt(priceRange[1])
        && parseFloat(r.rate) >= parseInt(priceRange[0])
        && (r.type || '').toUpperCase().includes(type)
        && (r.rating || '').toString().includes(`${star}`)
        && (r.hotel || '').toLowerCase().includes((name || '').toLocaleLowerCase())
      )
      this.setState({ filteredData: alist });
      this.sortSearchResultsBasedOnPrices();
    }, 100)
  }
  handleSliderChange = (e, val) => {
    this.setState({ priceRange: val });
    this.filterAndSort();
  }
  handleFilter = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.filterAndSort()
  }

  render() {
    const {
      destination, origin, departure_date, return_date
    } = this.state;
    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'
    let hotels = (
      <div className="tour-list-area">
        {this.state.liveHotelsList.map((hotelDetails, i) => {
          if (hotelDetails.cheapest != null) {
            return <LiveHotelItemCheapest key={hotelDetails.id + `${i}`} {...hotelDetails} />
          }
          else if (hotelDetails.best_value != null) {
            return <LiveHotelItemBest key={hotelDetails.id + `${i}`} {...hotelDetails} />
          }
          else {
            return <LiveHotelItem key={hotelDetails.id + `${i}`} {...hotelDetails} />
          }
        })}
      </div>
    );
    let hotelsPageNumbersListing;
    if (this.state.completeList.length>10) {
      hotelsPageNumbersListing = 
        <div>
          {this.state.paginated_data.map((item, index) => {
            return (
              <li key={`iteem${index}`}><a className={"page-numbers " + (this.state.pageNumber == index ? "current" : "")} onClick={() => this.handlePage(index)}>{index + 1}</a></li>
            )
          })}
        </div>;
    }


    return <div className="tour-list-area pd-top-120 viaje-go-top">
      <div className="container">
        {this.loadingMessage()}
        <div className="row">
          <div className="col-xl-9 col-lg-8 order-lg-12">
            <div className="tp-tour-list-search-area">
              <div className="row">
                <div className="col-xl-4 col-sm-6">
                  <a className="btn btn-yellow" style={{ color: 'white' }}
                    onClick={this.sortSearchResultsBasedOnPrices}>
                    <i className={"la la-arrow-" + this.state.price_sort} />
                    {this.state.price_sort_text}
                  </a>
                </div>
              </div>
            </div>
            {hotels}
            <div className="text-md-center text-left">
              <div className="tp-pagination text-md-center text-left d-inline-block mt-4">
                <ul>
                  <li><a className="prev page-numbers" onClick={this.prevPage}><i className="la la-long-arrow-left" /></a></li>
                  {hotelsPageNumbersListing}
                  <li><a className="next page-numbers" onClick={this.nextPage}><i className="la la-long-arrow-right" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 order-lg-1">
            <div className="sidebar-area">
              <div className="widget tour-list-widget">
                <div className="form-group has-success has-feedback">
                  <label>Search Hotel Name</label>
                  <input type="text" className="form-control" id="inputSuccess2" name="hotelName" onChange={this.handleFilter} />
                  <span className="glyphicon glyphicon-ok form-control-feedback"></span>
                </div>
                <div className="form-group has-success has-feedback">
                  <label ><i className="fa fa-star" /> Hotel Rating</label>
                  <select className="form-control" name="starRating" onChange={this.handleFilter}>
                    <option value="">All</option>
                    <option value="0">Un stared</option>
                    <option value="1">1 Start</option>
                    <option value="2">2 Start</option>
                    <option value="3">3 Start</option>
                    <option value="4">4 Start</option>
                    <option value="5">5 Start</option>
                  </select>
                </div>
                <div className="form-group has-success has-feedback">
                  <label >Price Filter</label>
                  <Slider
                    getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                    defaultValue={this.state.priceRange}
                    name="priceRange" onChange={this.handleSliderChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    // getAriaValueText={'valuetext'}
                    min={10}
                    max={2000}
                  />
                </div>
                <div className="form-group has-success has-feedback">
                  <label>Accomodation Type</label>
                  <select className="form-control" name="accomodationType" onChange={this.handleFilter}>
                    <option value="">All</option>
                    <option value="HOTEL">Hotel</option>
                    <option value="HOSTEL">Hostel</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>

  }
}

export default HotelList