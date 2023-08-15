import React, { Component, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import parse from 'html-react-parser'
import { red, blue, green } from '@material-ui/core/colors'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import StarIcon from '@mui/icons-material/Star'
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'
import defaultImage from './default.jpg' // Import your default image

const FlightHotelPackageItem = (flightDetails) => {
  const [handleOpen, setHandleOpen] = useState({ open: false })
  const history = useHistory()
  const labels: { [index: string]: string } = {
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
  
  const addDefaultSrc = (ev) => {
    ev.target.src = defaultImage
  }

  const 
  
  
  
  handleClick = () => {
    console.log('BELOW IS FLIGHT DETAILS')
    console.log(flightDetails)
    localStorage.setItem('packageDetails', JSON.stringify(flightDetails))
    history.push({
      pathname: '/tour-details',
      hotelDetails: {
        ...flightDetails.hotel_object,
        carrier_name: flightDetails.carrier_name,
        flightDetails: flightDetails,
        country: flightDetails.country,
        
      },
    })
  }
  const value = flightDetails.hotel_object.rating;
  const imageUrl =
    flightDetails.hotel_object && flightDetails.hotel_object.images && flightDetails.hotel_object.images.length > 0
      ? flightDetails.hotel_object.images[0]
      : defaultImage
  const dateStart = flightDetails.outbounddate
  const dateEnd = flightDetails.inbounddate
  const date1 = new Date(dateStart)
  const date2 = new Date(dateEnd)
  const formattedStartDate = date1.toLocaleString('default', { day: 'numeric', month: 'short' })
  const formattedEndDate = date2.toLocaleString('default', { day: 'numeric', month: 'short' })
  const sentences = flightDetails.hotel_object.description.split(". ");
  const selectedSentence = sentences[0]+'.';
  return (
    <div className='single-destinations-list style-three'>
      <div className='thumb'>
        <img src={imageUrl} onError={addDefaultSrc} alt='image' />
      </div>
      <div className='details'>
        <div className='row'>
          <Box
            sx={{
              width: 200,
              display: 'flex',
              alignItems: 'center',
            }}>
            <Rating
              name='text-feedback'
              value={labels[value]}
              readOnly
              precision={0.5}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
            />
            <Box sx={{ ml: 2 }}>{labels[value]}</Box>
          </Box>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <i className='fa-sharp fa-solid fa-location-dot fa-2x' aria-hidden='true'></i>
            <span>{flightDetails.country}</span>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            {/* <h4 className='title'> {flightDetails.carrier_name}</h4> */}
            <h4 className='title'> {flightDetails.hotel_object.hotel}</h4>
          </div>
        </div>
        <div className='row'>
          
            <p> {selectedSentence}</p>
         
        </div>
        <div className='row'>
          <div className='col-xl-3 col-sm-5'>
            <div className='list-price-meta'>
              <div className='tp-list-meta d-inline-block'>
                <p>
                  <i className='fa fa-calendar-o' /> {formattedStartDate} to {formattedEndDate}
                </p>
              </div>
            </div>
          </div>

          <div className='col-xl-6 col-sm-6'style={{paddingLeft:0}}>
            <div className='row list-price-meta'>
              <div className='col-xl-4 col-sm-5 tp-list-meta d-inline-block'>
                <p>Price</p>
                <h5>
                   {flightDetails.deal_price}<span>$</span>
                </h5>
              </div>
              <div className='col-xl-8 col-sm-5 tp-list-meta d-inline-block'>
                <p>(Including flights
                  + accommodation)</p>
                
              </div>
            </div>
          </div>
          <div className='col col-xl-3 col-sm-6' onClick={handleClick}>
            <a className='btn btn-yellow' style={{ color: 'white' }}>
              Book Now
            </a>
          </div>
        </div>
      </div>
      <AutoRotatingCarousel
        label='Get started'
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        autoplay={false}
        style={{ position: 'absolute' }}>
        {flightDetails.hotel_object.images.map((image, i) => {
          return <Slide key={`k${i}`} media={<img src={image} />} title={flightDetails.hotel} />
        })}
      </AutoRotatingCarousel>
    </div>
    // <h1>{flightDetails.carrier_name}</h1>
  )
}

export default FlightHotelPackageItem
