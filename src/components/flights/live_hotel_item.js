import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import parse from 'html-react-parser';

const LiveHotelItem = (hotelDetails) => {
  let history = useHistory();
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  function hotelImage() {
    let image = '';
    if (hotelDetails.images) {
      image = hotelDetails.images[0];
    }
    return <img src={image} alt={hotelDetails.hotel} style={{"objectFit": "scale-down"}} />
  }

  const handleClick = () => {
    history.push({
      pathname: "/tour-details",
      hotelDetails: hotelDetails
    });
  };

  return (
    <div className="single-destinations-list style-three">
      <div className="thumb">
        {hotelImage()}
      </div>
      <div className="details" onClick={handleClick}>
        <div className="row">
          <div className="col-sm-10 mt-3">
            <h3 className="title"><i className="fa fa-bed" />  {hotelDetails.hotel}</h3>
          </div>
          <div className="col-sm-2 mt-4">
            <i className="fa fa-map-marker fa-4x" aria-hidden="true"></i>
          </div>
        </div>
        <p className="content">Accomodation Type - {hotelDetails.type} </p>

        <div className="row">
          <div className="col-sm-6">
            <div className="list-price-meta">
              <div className="tp-list-meta d-inline-block">
                <p><i className="fa fa-shield" /> Safety Rating - {hotelDetails.health_safety_code}</p>
                <p><i className="fa fa-star" /> Rating - {hotelDetails.rating}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="list-price-meta">
              <div className="tp-list-meta d-inline-block">
                <h3>Total Price</h3>
                <h5><span>$</span> {hotelDetails.rate}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveHotelItem