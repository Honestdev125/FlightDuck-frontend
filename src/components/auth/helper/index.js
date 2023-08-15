import Moment from 'moment';
import paginate from '../../flights/paginate_flight_hotel_package';
import {useGlobalState} from "../../../index";

const API_URL = "http://127.0.0.1:8000/"
const HOTEL_BEDS_API_URL = "https://api.test.hotelbeds.com"



export const isAuthenticated = () => {
  // return true;
  if (typeof window == undefined) {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};

export const signin = (user) => {
  var formData = new FormData();

  formData.append('email', user.email);
  formData.append('password', user.password);

  return fetch(`${API_URL}users/login/`, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const bookableRateList = (finalRateKeysList) => {
  return fetch(`${API_URL}hotels/fetch-bookable-rate-key/`, {
    method: "POST",
    body: JSON.stringify({
      // "rate_key" : rateKey,
      "rate_key": finalRateKeysList,
    }),
    headers: { 'Content-Type': 'application/json' }
  })
    .then((response) => {
      // console.log("bookable response========", response.json());
      return response.json()
    })
    .catch((err) => console.log(err));
  // // console.log("bookableRateList========", bookableRateList);
  // const finalList = a
}

export const signup = (user) => {
  var formData = new FormData();

  formData.append('email', user.email);
  formData.append('password', user.password);
  formData.append('grant_type', 'password');
  formData.append('first_name', user.first_name);
  formData.append('last_name', user.last_name);
  formData.append('client_secret', '5n9VauZZdKfTd2s02wcHmG0O51Wmb2iWYhoRTpf5vA9ZjNT2hJNFmNAO4Ix5F0uTUxVxFNQfio3C6ifsFad0hI8RuX744PNYj7jYx0h77QOmMgqqmJDxpG2cy7PNFKO2');
  formData.append('client_id', '9nsQvEJzA3Rc4PPvnjFU3JIIiGHWOpjg5fvxnn6C');

  return fetch(`${API_URL}users/create/`, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const facebookSignIn = () => {

  return fetch(`${API_URL}user/rest-auth/facebook/`, {
    method: "POST",
    body: JSON.stringify({
      "access_token": 'EAAHESeSoiUsBABPNY3c7xPFPDM287XfIrVvy6ab1ZCAlqR26oWJBn5otUGl1MINVQm7QTVYnAVWRscQntTLK0XMT5NskQtLR7y9C950Sa3NEaPKXYUOHxWsrOhmaHsJyKGGOXZBzpgnxgDUq6aIUEoT7EZAMf0YdbHFceQm9wZDZD',
    }),
    headers: { 'Content-Type': 'application/json' }
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const authenticate = (data, next) => {
  if (typeof window !== undefined) {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const signout = (next) => {
  const userEmail = isAuthenticated() && isAuthenticated().email;

  if (typeof window !== undefined) {
    localStorage.removeItem("jwt");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    return fetch(`${API_URL}users/logout/${userEmail}/`, {
      method: "GET",
    })
      .then((response) => {
        next();
      })
      .catch((err) => console.log(err));
  }
};

export const getLiveHotelPricing = (details) => {

  var user_details = localStorage.getItem("jwt");
  var user_id = 1;
  if (user_details) {
    user_id = JSON.parse(user_details)["id"];
  }

  var returnDate = localStorage.getItem("return_date").toString().trim(' ');

  var hotelPricesDataBody = {
    "destination": localStorage.getItem("hotel_destination").toString(),
    "checkInDate": localStorage.getItem("departure_date").toString(),
    "rooms": Number(localStorage.getItem("rooms")),
    "adults": localStorage.getItem("adults"),
    "children": "0",
    "user_id": user_id,
     "currency_format": localStorage.getItem("currency_format").toString(),
  }

  if (returnDate !== 'undefined') {
    hotelPricesDataBody["checkOutDate"] = returnDate
  }

  return fetch(`${API_URL}hotels/live-hotel-prices/`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(hotelPricesDataBody)
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log("search hotel beds error====== ", err));
};

export const getFlightsDestinationAutoSuggestion = (details) => {
  var departure_date = details.departure_date.toString();
  departure_date = departure_date.replaceAll("/", "-");
  departure_date = Moment(departure_date, "MM-DD-YYYY")
  departure_date = departure_date.format('YYYY-MM-DD');

  return fetch(`${API_URL}flights/browse-routes/`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json', 'User-id': 1 },
    body: JSON.stringify({
      origin: details.origin,
      destination: details.destination,
      departureDate: departure_date,
      returnDate: details.return_date,
      currency_format: details.currency_format
    })
  })
    .then((response) => {
      return response.json();;
    })
    .catch((err) => { return err });
};

export const getLiveFlights = (details) => {
  var user_details = localStorage.getItem("jwt");
  var user_id = 1;
  if (user_details) {
    user_id = JSON.parse(user_details)["id"];
  }

  var jsonData = {
    "originplace": localStorage.getItem("origin"),
    "destinationplace": localStorage.getItem("destination"),
    "outbounddate": localStorage.getItem("departure_date").toString(),
    "children": Number(localStorage.getItem("children")),
    "adults": Number(localStorage.getItem("adults")),
    "country": localStorage.getItem("country_code"),
      "currency_format": localStorage.getItem("currency_format").toString(),
    "locale": "en-US",
    "user_id": user_id
  }
  if (localStorage.getItem("return_date").toString().trim(' ') != "") {
    jsonData['return_date'] = localStorage.getItem("return_date").toString()
  }

  return fetch(`${API_URL}flights/live-flight-prices/`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json', 'User-id': 1 },
    body: JSON.stringify(jsonData)
  })
    .then((response) => {
      return response.json();;
    })
    .catch((err) => { return err });
};

export const searchFlights = (details) => {

  return fetch(`${HOTEL_BEDS_API_URL}/hotel-content-api/1.0/hotels?fields=all&from=1&to=10`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const saveFlightsSearchDataToLocalStorage = (details) => {
  localStorage.setItem("destination", details.destination_code);
  localStorage.setItem("origin", details.origin_code);
  localStorage.setItem("departure_date", details.updatedDepartureDate);
    localStorage.setItem("currency_format", details.currencyFormat).toString();
  if (details.updatedReturnDate) {
    localStorage.setItem("return_date", details.updatedReturnDate);
  } else {
    localStorage.setItem("return_date", "");
  }
  localStorage.setItem("adults", details.adults);
  if (details.children == null) {
    localStorage.setItem("children", 0);
  }
  else {
    localStorage.setItem("children", details.children);
  }
};

export const saveHotelSearchDataToLocalStorage = (details) => {
  if (details.originCode !== "") {
    localStorage.setItem("origin", details.originCode);
  }

  localStorage.setItem("destination", details.destinationCode);
  localStorage.setItem("hotel_destination", details.hotelDestinationCode);
  localStorage.setItem("departure_date", details.updatedDepartureDate);
  localStorage.setItem("departure_date", details.updatedReturnDate);
  localStorage.setItem("adults", details.adults);
  localStorage.setItem("children", details.children);
  localStorage.setItem("days", details.days);
  localStorage.setItem("currency_format", details.currencyFormat);
};

export const savePackageSearchDataToLocalStorage = (details) => {
  saveHotelSearchDataToLocalStorage(details);
  localStorage.setItem("searchForMonths", details.searchForMonths);
};

const zeroIfNull = (val) => {
  if (typeof val === "undefined" || val == "undefined") {
    return 0;
  }
  console.debug(typeof val, "is expecting a string");
  return Number(val);
}

export const getCacheFlightHotelsPackage = () => {
  var user_details = localStorage.getItem("jwt");
  var user_id = 1;
  if (user_details) {
    user_id = JSON.parse(user_details)["id"];
  }

  return fetch(`${API_URL}flights/cache-flight-hotels-package/`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "origin": localStorage.getItem("origin"),
      "destination": localStorage.getItem("destination"),
      "outbound_date": localStorage.getItem("departure_date"),
      "adults": zeroIfNull(localStorage.getItem("adults")),
      "children": zeroIfNull(localStorage.getItem("children")),
      "country": localStorage.getItem("country_code"),
      "currency_format": localStorage.getItem("currency_format"),
      "locale": "EN",
      "destination_code": localStorage.getItem("hotel_destination"),
      "trip_days":  localStorage.getItem("days"),
      "number_of_extended_months": localStorage.getItem("searchForMonths") == 'true' ? 2 : 0,
      "user_id": user_id
    })
  })
      .then((response) => {
        return response.json();
      })
      .catch((err) => { return err });
};

export const hotelBookingAPI = (data) => {

  return fetch(`${API_URL}hotels/hotel-booking/`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => { return err });
};


export default API_URL