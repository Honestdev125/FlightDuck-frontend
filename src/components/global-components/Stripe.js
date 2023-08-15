// @noflow

import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import API_URL, { hotelBookingAPI } from '../auth/helper';
import { withRouter } from "react-router-dom";
import './stripe.css';
import { sendEmailAPI } from './api';
import { Component } from 'react';


//this is the third
// booking page,used as a component

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: { line1: null, city: null, state: null, country: null, postal_code: null },
      fullname: '',
      phone: '',
      email: '',
      stripeToken: {},
      booking: {},
      loading: false
    }
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    // Save Database.
    const roomName = localStorage.getItem("hotel_room_name");
    const roomDetails = JSON.parse(localStorage.getItem("hotel_room_details"));
    const packageDetails = JSON.parse(localStorage.getItem("packageDetails"));
    console.log(roomName, roomDetails['net']);
    const data = {
      fullname : this.state.fullname,
      email : this.state.email,
      phone: this.state.phone,
      room : roomName,
      rate : roomDetails['net'],
      check_in: packageDetails['inbounddate'],
      check_out : packageDetails['outbounddate']
    }
    fetch(`${API_URL}booking/add`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => {
        console.log(response.json());
      })
      .catch((err) => console.log(err));
    //End

    const { stripe, elements } = this.props;
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const result = await stripe.createToken(cardElement);
    if (!!result) {
      console.log("THIS IS TSTRIPE", result)
      this.setState({ stripeToken: result.token.id });
      let b = localStorage.getItem('bookingDetails')
      if (!!b) {
        this.setState({ booking: JSON.parse(b) })
      }
      let data = {
        "stripeToken": this.state.stripeToken || '',
        "rateKey": this.state.booking.rateKey || '',
        "adults": this.state.booking.adults || 1,
        "children": this.state.booking.children || 0,
        "users": this.state.booking.users || [],
        address: this.state.address || null
      }
      this.setState({ loading: true });

      hotelBookingAPI(data)
          .then((res) => {
            this.setState({ loading: true });
            if (localStorage.getItem("only_hotel") == 'false') {
              let flightBookingUrl = localStorage.getItem('flight_booking_url');
              //window.location.href = flightBookingUrl;
            }
            window.location.href = '#destination-details'

            // Sending an email after a successful booking
              sendEmailAPI("bishop.alexander@gmail.com", {})
                  .then((res) => console.log('Email sent successfully'))
                  .catch((err) => console.error('Failed to send email:', err));

          })
          .catch((e) => {
            this.setState({ loading: false });
          });
    }
  };

  handleAddress = async (event) => {
    event.preventDefault();
    let addr = this.state.address;
    addr[event.target.name] = event.target.value
    this.setState({ address: addr })
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    const { stripe } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className="jumbotron">
        <p><b>Personal details</b></p>
        {/* <div className="form-group">
          <lable>Email</lable>
          <input className="form-control" name="email" />
        </div> */}

        <div className="form-group">
          <label>Full Name</label>
          <input className="form-control" name="fullname" onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input className="form-control" name="email" onChange={this.handleChange} />
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label>Phone</label>
            <input className="form-control" name="phone" onChange={this.handleChange} />
          </div>
          <div className="form-group col-md-6">
            <label>Country</label>
            <input className="form-control" name="country" onChange={this.handleAddress} />
          </div>
        </div>
        <p><b>Credit Card details</b></p>


        <div className="form-group">
          <label>Card Holder Name</label>
          <input className="form-control" required name="name" onChange={this.handleAddress} />
        </div>
        <div className="form-group">
          <label>Card Details</label>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input className="form-control" name="line1" onChange={this.handleAddress} />
        </div>
        <div className="row">
          <div className="form-group col-md-3" >
            <label>City</label>
            <input className="form-control" name="city" onChange={this.handleAddress} />
          </div>
          <div className="form-group col-md-3">
            <label>State</label>
            <input className="form-control" name="state" onChange={this.handleAddress} />
          </div>
          <div className="form-group col-md-3">
            <label>Country</label>
            <input className="form-control" name="country" onChange={this.handleAddress} />
          </div>
          <div className="form-group col-md-3">
            <label>ZIP</label>
            <input className="form-control" name="postal_code" onChange={this.handleAddress} />
          </div>
        </div>




        {
          !!!this.state.loading ?

            <div className="row">

              <button type="submit" disabled={!stripe} >
                Pay Now
              </button>
            </div>
            :
            <div className="row" style={{ textAlign: 'center', marginTop: "20px" }}>
              <div className="col-12">
                <i className="fa fa-refresh fa-2x fa-spin"></i>
              </div>
              <p className="col-12">Don't Refresh page while loading payment</p>
            </div>
        }
      </form>



    );
  }
}

const InjectedCheckoutForm = () => {
  return (
    <ElementsConsumer>
      {({ elements, stripe }) => (
        <CheckoutForm elements={elements} stripe={stripe} />
      )}
    </ElementsConsumer>
  );
};

const stripePromise = loadStripe('pk_test_51IHEQ8IZl69pMaQienjOVfzufNB2dkbuwLFuYgnTivJwb0FhSi3hTxA80Mb39lJcqn3sfGFXOXDOrfgBzsm7kBR6002I2qh0op');

const Stripe = ({ usersDetailsList }) => {
  return (
    <Elements stripe={stripePromise} usersDetailsList={usersDetailsList}>
      <InjectedCheckoutForm />
    </Elements>
  );
};

export default withRouter(Stripe);