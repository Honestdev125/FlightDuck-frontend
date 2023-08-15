import React, {Component, useEffect, useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Button from '@material-ui/core/Button';
import FlightHotelPackageItem from '../flights/flight_hotel_package_item';
import paginate from '../flights/paginate_flight_hotel_package';

import { setGlobalState, useGlobalState } from '../../index'
import API_URL from "../auth/helper";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CustomPagination from '../flights/pagination';

const HotelFlightPackageList = () => {
  const [values, setValues] = useState({
    loading: false,
    starRating: 'default',
    accommodationType: 'default',
    hotelName: 'default',
    pageNumber: 0,
    priceRange: [10, 5001],
  });
  
  const { loading, starRating, accommodationType, hotelName, pageNumber, priceRange
  } = values;

    const [isLocal] = useGlobalState("isLocal")


  useEffect(() => {
    
    // setValues({ ...values, error: false, destination: destination, origin: origin,
    //   departure_date: departureDate, return_date: return_date })

      console.log(isLocal)
      if(hotelFlightPackageList.length==0)
        searchCacheFlightHotelsPackage(isLocal)


    console.log("inside useEffect paginated")
    console.log(paginated_data)


  }, [])

  useEffect(() => {
    setGlobalState("destination", null)
    setGlobalState("origin", null)
    setGlobalState("adults", null)
    setGlobalState("children", null)
    setGlobalState("days", null)
    setGlobalState("departure_date", null)
    setGlobalState("liveFlightsList", [])
    localStorage.setItem("packageDetails", null);

    if(starRating !== "default") {
      filterAndSort()
   }

    if(accommodationType !== "default") {
      filterAndSort()
    }
  }, [starRating, accommodationType, hotelName])

  useEffect(() => {

    if(hotelName !== "default") {
      console.log("hotel being run")
      filterAndSort()
    }

  }, [hotelName])

  useEffect(() => {

    const start = [10, 5001];
    if(priceRange.toString() !== start.toString()) {
      console.log("pricerange is " + priceRange)
      filterAndSort()
    }

  }, [priceRange])

  useEffect(() => {
    if (hotelFlightPackageList.length > 0) {
      console.log("inside use effect pagenumber is " + pageNumber)
      setGlobalState("hotelFlightPackageList", paginated_data[pageNumber])
    }

  }, [pageNumber])


  const toggleLoading = () => {
    // setState(state => ({
    //   loading: !state.loading
    // }));
    
    console.log("toggleloading ran")
    setValues({ ...values, error: false, loading: !loading});
  }

  const zeroIfNull = (val) => {
    if (typeof val === "undefined" || val == "undefined") {
      return 0;
    }
    console.debug(typeof val, "is expecting a string")
    return Number(val);
  }

  const [destination] = useGlobalState("destination_code")
  const [origin] = useGlobalState("origin")
  const [return_date] = useGlobalState("return_date")
  const [adults] = useGlobalState("adults")
  const [children] = useGlobalState("children")
  const [days] = useGlobalState("days")
  const [departureDate] = useGlobalState("departure_date");
  const [countryCode] = useGlobalState("country_code");
  const [currency] = useGlobalState("currency");
  const [selectedCurrency] = useGlobalState("selectedCurrency");
  const [destinationCode] = useGlobalState("destination_code");
  const [hotelCode] = useGlobalState("hotel_destination")
  let [hotelFlightPackageList] = useGlobalState("hotelFlightPackageList")
  let [paginated_data] = useGlobalState("paginated_data")
  let [completeList] = useGlobalState("completeList")
  let [filteredData] = useGlobalState("filteredData")
  let [price_sort] = useGlobalState("price_sort")
  let [price_sort_text] = useGlobalState("price_sort_text")
  let [departure_time_sort] = useGlobalState("departure_time_sort")
  let [departure_time_sort_text] = useGlobalState("departure_time_sort_text");
  const [isReturn] = useGlobalState("isReturn")



  const addDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  const convertDate = (newDate) => {
	let today = new Date(newDate);


    let MyDateString = today.getFullYear() + '-' + ('0' + (today.getMonth()+1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);

    return MyDateString
}

  const getCacheFlightHotelsPackageLocal=()=>{
    return fetch('cachePackageResponse.json'
    ,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
      )
        .then(function(response){
          return response.json();
        })
        .catch((err) => { return err });
  }


  const getCacheFlightHotelsPackage = () => {
    const updatedInbound = addDays(departureDate,days);
    var user_details = localStorage.getItem("jwt");
    var user_id = 1;
    if (user_details) {
      user_id = JSON.parse(user_details)["id"];
    }

    console.log({
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "originplace": origin,
        "destinationplace": destination,
        "outbounddate": convertDate(departureDate),
        ...(isReturn && { "inbounddate": convertDate(departureDate) }),
        "rooms": 1,
        "adults": zeroIfNull(adults),
        "children": children,
        "country": countryCode,
        "currency_format": selectedCurrency,
        "locale": "EN",
        "destination_code": hotelCode,
        "trip_days":  zeroIfNull(days),
        "number_of_extended_months": localStorage.getItem("searchForMonths") == 'true' ? 2 : 0,
        "user_id": user_id
      })
    })

    return fetch(`${API_URL}flights/cache-flight-hotels-package/`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "originplace": origin,
        "destinationplace": destination,
        // "outbounddate": departureDate,
        "outbounddate": convertDate(departureDate),
        ...(isReturn && { "inbounddate": convertDate(departureDate) }),
        "rooms": 1,
        "adults": zeroIfNull(adults),
        "children": zeroIfNull(children),
        "country": countryCode,
        "currency_format": selectedCurrency,
        "locale": "EN",
        "destination_code": hotelCode,
        "trip_days":  days,
        "number_of_extended_months": localStorage.getItem("searchForMonths") == 'true' ? 2 : 0,
        "user_id": user_id,
        // 'bestDeal': bestDeal
      })
    })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Network response was not ok.');
          }
        })
        .catch((err) => { return err })
  }

  const getCacheFlightHotelsPackageSwitch = () => {
    if (isLocal) {
      return getCacheFlightHotelsPackageLocal();
    } else {
      const cachedDataString = localStorage.getItem("cachedHotelFlightPackageList");
      console.log("cachedDataString",cachedDataString)
      let cachedData = null;
      try {
        cachedData = cachedDataString ? JSON.parse(cachedDataString) : null
      } catch (error) {
        console.error("Invalid JSON in localStorage:", error);
      }

      if (cachedData && cachedData.length > 0) {
        setGlobalState("hotelFlightPackageList", cachedData)
        console.log("below is hotelFlightPackageList")
        console.log(hotelFlightPackageList)
        return Promise.resolve({ list: cachedData }); // Return a resolved promise with the cached data
      } else {
        return getCacheFlightHotelsPackage().then((data) => {
          return data;
        }).catch((err) => {
          return Promise.reject(err);
        });
      }
    }
  }


  const searchCacheFlightHotelsPackage = () => {
    setValues({ ...values, loading: true });
    let result = null;
    console.log("loading at start is" + loading);

    if(hotelFlightPackageList.length==0)
    getCacheFlightHotelsPackageSwitch()
        .then((data) => {
          if (data && data.list && data.list.length > 0) {
            result = paginate(data.list);

            for (let i = 0; i < data.list.length; i++) {
              completeList.push(data.list[i]);
              filteredData.push(data.list[i]);
            }

            for (let i = 0; i < result[pageNumber].length; i++) {
              hotelFlightPackageList.push(result[pageNumber][i]);
            }

            for (let i = 0; i < result.length; i++) {
              paginated_data.push(result[i]);
            }

            // Save the processed data to localStorage
            localStorage.setItem("cachedHotelFlightPackageList", JSON.stringify(hotelFlightPackageList));
          } else {
            console.log("sorry no packages found========");
          }

          setValues({ ...values, loading: false });
        })
        .catch((e) => {
          if (e === "No cached data available") {
            getCacheFlightHotelsPackage()
                .then((data) => {
                  // Process the data similar to the code in the .then() block above
                })
                .catch((error) => {
                  console.log("packages data error=======", error);
                  setValues({ ...values, loading: false });
                });
          } else {
            console.log("packages data error=======", e);
            setValues({ ...values, loading: false });
          }
        });
  };


  const loadingMessage = () => {
    return (
      loading && (
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

  const inputChangedHandler = (event) => {
    //setValues({ ...values, error: false, [event.target.name]: event.target.value });
    setGlobalState([event.target.name], event.target.value)
  }

  const handleSliderChange = (e, val) => {
    console.log("this is the price val" + val)
    console.log("this is being run")
    // const handleChange = (event, newValue) => {
    //   setValue(newValue);
    // };
    setValues({ ...values, error: false, priceRange: val });
  }
  const [searchText, setSearchText] = useState('');
  const handleFilter = (e) => {
    //setValues({ ...values, error: false, [e.target.name]: e.target.value });
    console.log("this is " + [e.target.name][0])
    const text=e.target.value
    
    setValues({ ...values, error: false, [[e.target.name][0]]: e.target.value});

    //filterAndSort()
  }

  const handleChangeFilter = (event) => {
    console.log("nameanemee",[event.target.name][0])
    setSearchText(event.target.value)
    
    setValues({ ...values, error: false, [[event.target.name][0]]: event.target.value });
    filterAndSort()
  };

  const sortSearchResultsBasedOnPrices = (rule) => {
    setTimeout(() => {
      let price = rule;
      const newList = filteredData;
      console.log("below is list after being updated by price sort")
      console.log(newList)
      if (price === "low") {
        //setValues({ ...values, error: false, price_sort_text: "Price Low to High", price_sort: "up" });
        setGlobalState("price_sort_text", "Price Low to High")
        setGlobalState("price_sort", "up")
        newList.sort((first, second) => (first.deal_price > second.deal_price ? 1 : -1));
      }
      if (price === "high") {
        //setValues({ ...values, error: false, price_sort: "down", price_sort_text: "Price High to Low" });
        setGlobalState("price_sort", "down")
        setGlobalState("price_sort_text", "Price High to Low")
        newList.sort((first, second) => (first.deal_price < second.deal_price ? 1 : -1));
      }
      // newList.unshift(topArrState)
      let bestindex =0
      let cheapindex =0
      const besttop=newList.filter((b,index)=> {
        if(b.bestDeal==true) bestindex=index
        return b.bestDeal==true
      } )
      const cheapesttop=newList.filter((b,index)=>{
        if(b.cheapest==true) cheapindex=index
        return b.cheapest==true
        })
      newList.splice(cheapindex,1)
      newList.splice(bestindex-1,1)
      newList.unshift(besttop[0])
      newList.unshift(cheapesttop[0])
      
      filteredData = newList;
      const result = paginate(newList);
      setGlobalState("paginated_data", result)
      console.log("below is result",result)
     
      

      setValues({ ...values, error: false, pageNumber: 0 });
      //setGlobalState("pageNumber", 0)
      //setValues({ ...values, error: false, hotelFlightPackageList: (result[0] || []) });



      console.log("this is result 0",result[0])
     
      setGlobalState("hotelFlightPackageList", (result[0] || []))
      console.log("after setting global state",hotelFlightPackageList)
      
      //hotelFlightPackageList = (result[0] || []);
      flight()

    }, 100)
  }

  
  const filterAndSort = () => {
    setTimeout(() => {
      let star = '';
      // let type = accommodationType;
      let name = hotelName;

      if(starRating === "default") {
        star = '';
      } else {
        star = starRating;
      }

      // if(accommodationType === "default") {
      //   type = '';
      // } else {
      //   type = accommodationType;
      // }

      if(hotelName === "default") {
        name = '';
      } else {
        name = hotelName;
      }

      let list = completeList || [];
      console.log('list is' + list)
      console.log("starrating is" + star)
      // console.log("accommodationType is " + accommodationType)
      let alist = list.filter(r =>
        parseFloat(r.deal_price) <= parseInt(priceRange[1])
        && parseFloat(r.deal_price) >= parseInt(priceRange[0])
        && (r.hotel_object.rating || '').toString().includes(`${star}`)
        && (r.hotel_object.hotel || '').toLowerCase().includes((name || '').toLocaleLowerCase())
      )
      //TODO BELOW IS A VERY DIRTY FIX TO GET the cheapest prices showing for hotels
      // alist.sort((first, second) => (first.deal_price > second.deal_price ? 1 : -1));
      filteredData = alist;
      console.log("filter list is now")
      console.log(alist)
      const result = paginate(alist);
      setGlobalState("paginated_data", result)
      
      setGlobalState("hotelFlightPackageList", (result[0] || []))



    }, 100)
  }

  const handlePage = (event, index) => {
    console.log("we are going to page number " + index)
    setValues({ ...values, error: false, pageNumber: index-1, });
   
    console.log("we are on page number " + pageNumber)
   
  }

 

  const flight = () => {
 
    const list = getCacheFlightHotelsPackageLocal()
    console.log("list", list)
    let arr = [];
    let topArr = []
    
    let pan=0
    console.log("testbest",hotelFlightPackageList.length, " arr", arr)
    if (hotelFlightPackageList && hotelFlightPackageList.length > 0) {
      // setTopState(()=> 'a'  )
      for (let i = 0; i < hotelFlightPackageList.length; i++) {
        let tempState = [] 
        if (hotelFlightPackageList[i].hotel_object) {  // check if hotel_object exists
          
          if(pan!=2 && hotelFlightPackageList[i].bestDeal) {
              tempState.push(hotelFlightPackageList[i])
              console.log("tempstate",tempState)
              
              topArr.push(<FlightHotelPackageItem
                    key={hotelFlightPackageList[i].outbounddate + i}
                    {...hotelFlightPackageList[i]}
                    name='single-destinations-list style-three best'
                />)
           
              pan=2
            }
          else if(hotelFlightPackageList[i].cheapest) {
              
            if(pan==0)
              topArr.push(<FlightHotelPackageItem
                        key={hotelFlightPackageList[i].outbounddate + i}
                        {...hotelFlightPackageList[i]}
                        name='single-destinations-list style-three best low'
                        />)
            else topArr.unshift(<FlightHotelPackageItem
                    key={hotelFlightPackageList[i].outbounddate + i}
                    {...hotelFlightPackageList[i]}
                    name='single-destinations-list style-three best low'
                    />)
            pan=1
            
          }
          else
            arr.push(
                <FlightHotelPackageItem
                    key={hotelFlightPackageList[i].outbounddate + i}
                    {...hotelFlightPackageList[i]}
                    name='single-destinations-list style-three'
                />
            );
        }
      }
    }
    console.log("below is arr",arr)
    
    console.log("below is topState",'')
    // setGlobalState('topState',topState)
    return (
        <div className="tour-list-area">
          {topArr.map((packageDetails,index) => {
            if(index==0)
             return (<>
                  <div className='cheast-mark'><span>Cheapest Deal</span></div>
                  <div className='top cheast'> {packageDetails}</div>
                </>
              )
            else 
                return (<>
                  <div className='top-mark'><span>Best Value</span></div>
                  <div className='top best'> {packageDetails}</div>
                </>
              )
            
           
          })}
          {arr.map((packageDetails) => {
            return packageDetails
          })}
        </div>

    )
  }


  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handle low top", event.target.value)
    if(event.target.value=='low') 
    { console.log('low')
      sortSearchResultsBasedOnPrices('low')
    }
    if(event.target.value=='high') {
      sortSearchResultsBasedOnPrices('high')
    }
   
  }

 
  const handleChange = (event, newValue) => {
    // setValue(newValue);
    setValues({ ...values, error: false, priceRange: [newValue] });
  };
  
  return(

    <div className="tour-list-area pd-top-120 viaje-go-top">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8 order-lg-12">
            <div className="tp-tour-list-search-area">
              <div className="row d-flex justify-content-end">
                
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    
                    onChange={handleOptionChange}
                  >
                    
                    <div className="col-xl-6 col-sm-12 text-right">
                      <FormControlLabel value="low" control={<Radio />} label="Price Low to High" />
                    </div>
                    <div className="col-xl-6 col-sm-12 text-right">
                      <FormControlLabel value="high" control={<Radio />} label="Price High to Low" />
                    </div>
                   
                    
                  </RadioGroup>
                </FormControl>
                
              </div>
            </div>
            {flight()}
            <div className="text-md-center text-left">
            
            
              <div className="tp-pagination text-md-center text-left d-inline-block mt-4">
                <CustomPagination 
                  count = {paginated_data}
                  onChange={handlePage}
                  siblingCount = {1}
                />
            
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 order-lg-1">
            <div className="widget tour-list-widget">
              <div className="form-group has-success has-feedback" style={{ position: 'relative'}}>
           
                
                <input type="text" 
                  className="form-control" 
                  id="inputSuccess2" 
                  name="hotelName" 
                  value={searchText} 
                  placeholder='Hotel Name' 
                  onChange={handleChangeFilter} />
                {/* <div class="MuiInputAdornment-root MuiInputAdornment-positionEnd MuiInputAdornment-outlined MuiInputAdornment-sizeMedium css-1laqsz7-MuiInputAdornment-root"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SearchIcon"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></div> */}
                <div className='my-search-icon'>
                <SearchIcon id="search"/>
                </div>
                <span className="glyphicon glyphicon-ok form-control-feedback"></span>
              </div>
              <div className="form-group has-success has-feedback my-select-container">
                <label ><i className="fa fa-star" /> Hotel Rating</label>
                <select className="form-control my-select" name="starRating" onChange={handleFilter}>
                  <option value="">All</option>
                  <option value="0">Un stared</option>
                  <option value="1">1 Star</option>
                  <option value="2">2 Star</option>
                  <option value="3">3 Star</option>
                  <option value="4">4 Star</option>
                  <option value="5">5 Star</option>
                </select>
                <div className='mySelectIcon my-icon'>
                  <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.84542 0.733887H14.0506C14.8949 0.733887 15.3171 1.75375 14.7194 2.35144L8.61921 8.45639C8.24922 8.82639 7.64679 8.82639 7.27679 8.45639L1.17658 2.35144C0.578894 1.75375 1.00107 0.733887 1.84542 0.733887Z" fill="#333333"/>
                  </svg>

                </div>
              </div>
              
              <div className="form-group has-success has-feedback">
                <label >Price Filter</label>
                 <Box >
                    <Slider 
                      key={`slider-${priceRange}`}
                      // getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                      value={priceRange}
                      aria-labelledby="range-slider"
                      // getAriaValueText={'valuetext'}
                      name="priceRange" 
                      onChange={handleSliderChange}
                      min={10}
                      max={5000}
                       aria-label="Default" 
                       valueLabelDisplay="auto" />
              </Box> 
              
            
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default HotelFlightPackageList

