import React, { Component, setState, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Navbar from '../global-components/navbar';
import PageHeader from '../global-components/page-header';
import Subscribe from '../section-components/subscribe';
import Footer from '../global-components/footer';
import { hotelBookingAPI } from '../auth/helper';
import SweetAlert from 'react-bootstrap-sweetalert';
import Stripe from '../global-components/Stripe';
// import Navbar from '../global-components/navbar';

const HotelBooking = (props) => {

  //this is second booking page

  let publicUrl = process.env.PUBLIC_URL + '/'
  let imagealt = 'image'
  console.log("hotel booking page=========");
  console.log(props);
  console.log("props ended=======");
  const [usersList, setUsersList] = useState([]);
  const [checkout, setCheckout] = useState(false);

  const [values, setValues] = useState({
    gender: "male",
    name: "",
    surname: "",
    age: 0,
    success: false,
    alert: null
  });

  const { gender, name, surname, age, success, alert } = values;

  const [usersDetailsList, setUsersDetailsList] = useState([
    {
      "gender": gender,
      "name": name,
      "surname": surname,
      "age": Number(age),
      "personType": 'AD',
      roomId: 1
    }
  ]);
  const handleChange = (i) => (event) => {
    if (event.target.name == 'age') {
      if (event.target.value >= 18) {
        usersDetailsList[i].personType = "AD";
      } else {
        usersDetailsList[i].personType = "CH";
      }
    }
    usersDetailsList[i][event.target.name] = event.target.value;
    setUsersDetailsList(usersDetailsList);
  };

  const userForm = (e) => {
    e.preventDefault();
    let obj = {};
    console.log(props.location)
    if (!!props.location && !!props.location.state && !!props.location.state.room) {
      obj = {
        users: usersDetailsList,
        rateKey: props.location.state.room.rateKey,
        adults: props.location.state.room.adults,
        children: props.location.state.room.children,
        flight: props.location.state.carrier_name,
        hotelDetails: props.location.state.hotelDetails
      }
      localStorage.setItem('bookingDetails', JSON.stringify(obj))
      setCheckout(true);
    }
  };

  const hideAlert = (event) => {
    setValues({ ...values, success: false });
  }

  const successAlertDialog = () => {
    return (
      success && (
        <SweetAlert
          success
          title="Success"
          onConfirm={hideAlert}
        >
          "Your booking has been confirmed and mail has been sent on given email address"
        </SweetAlert>
      )
    );
  };

  const handleAddRow = () => {
    var personType = "CH";
    let ud = usersDetailsList;
    var userDetails = {
      "gender": gender,
      "name": name,
      "surname": surname,
      "age": Number(age),
      "personType": personType
    }
    ud.push(userDetails)
    ud.map((e, i) => e.rooId = i + 1)
    setUsersDetailsList(ud);
    setUsersList([
      ...usersList,
      "1"
    ])

  };

  const removeRow = (i) => (e) => {
    let u = [...usersDetailsList]
    u.splice(i, 1);
    setTimeout(() => {
      setUsersDetailsList(u)
    }, 200)
  };

  const bookingDetailsForm = () => {
    // let roomKey = props.location.state.roomKey;
    return (
      <>
        <div className="row">
          <div className="col-md-12">
            <h4 className="single-page-small-title">Booking Details</h4>
          </div>
        </div>
        <form className="tp-form-wrap bg-gray tp-form-wrap-one"
          onSubmit={userForm}>
          {usersDetailsList.map((row, i) => {
            return (
              <div className="row" key={`ch-${i}`}>
                <div className="col-md-2">
                  <div className="form-group">
                    <label>Gender</label>
                    <select name="gender" className="form-control" onChange={handleChange(i)} >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" required className="form-control" name="name" onChange={handleChange(i)} />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" name="surname" onChange={handleChange(i)} />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form-group">
                    <label>Age</label>
                    <input type="number" required min={0} className="form-control" name="age" onChange={handleChange(i)} />
                  </div>
                </div>
                <div className="col-md-1">
                  <div className="form-group">
                    <label>&emsp;</label>
                    <a className="form-control text-center btn-yellow" onClick={handleAddRow}>
                      <i className="fa fa-plus" />
                    </a>
                  </div>
                </div>
                {
                  i > 0 ?
                    <div className="col-md-1">
                      <div className="form-group">
                        <label>&emsp;</label>
                        <a className="form-control text-center btn-default" onClick={removeRow(i)}>
                          <i className="fa fa-times" />
                        </a>
                      </div>
                    </div>

                    : ''
                }

              </div>

            );
          })}
          <br />
          <div className="row">
            <div className="col-md-3" style={{ margin: "auto" }}>
              <button className="form-control" style={{ background: "#f3941e", color: "white" }}>Book Now</button>
            </div>
          </div>
        </form>
      </>
    );
  }

  let view = bookingDetailsForm()
  if (!!checkout) {
    view = <div className="stripe "> <Stripe usersDetailsList={usersDetailsList} /> </div>
  }

  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Booking Details" />
      {successAlertDialog()}
      <div className="destinations-details-page mt-5">
        <div className="container">

          <div className="location-review-area">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {view}
              </div>
            </div>
          </div>
          {/* location-review-area start */}
        </div>
      </div>

      {/* <Subscribe /> */}
      <Footer />
    </div>
  )
}
export default HotelBooking