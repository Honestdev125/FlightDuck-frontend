import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { isAuthenticated, signout } from '../auth/helper/index'
import { setGlobalState, useGlobalState } from '../../index'

const Navbar = ({homepage}) => {
  let publicUrl = process.env.PUBLIC_URL + '/'
  let imgattr = 'logo'
  let anchor = '#'

  /*	const selected = useGlobalState.currencyOptions[0].value;*/

  const [currencyOptions] = useGlobalState('currencyOptions')
  console.log('CURRENCYOPTIONS')
  console.log(currencyOptions)

  const [selected] = useGlobalState('selectedCurrency')
  console.log('SELECTED CURRENCY')
  console.log(selected)

  /*		const [selected, setSelected] = [currencyOptions[0]]*/
  /*		const setSelected = setGlobalState(currencyOptions[0].value);*/

  const currencyHandleChange = (e) => {
    console.log('CAT')
    console.log(selected)
    setGlobalState('selectedCurrency', e.target.value)
  }

  const mobileLogo = () => {
    if (homepage === false || homepage === undefined) {
      return (
        <div className='mobile-logo'>
          <Link to='/home-v2'>
            <img src={publicUrl + 'assets/img/others/small-logo.png'} alt={imgattr} />
          </Link>
        </div>
      )
    }
  }

  const showCurrency = () => {
    if (homepage === false || homepage === undefined) {
      return (
        <div className='tp-currency-wrap'>
          {/*						<select className="select single-select" onChange={currencyHandleChange}>*/}
          <select className='cat' value={selected} onChange={currencyHandleChange}>
            {currencyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
        </div>
      )
    }
  }

  return (
    <nav className='navbar navbar-area navbar-expand-lg nav-style-01 viaje-go-top navbar-area'>
      <div className='container nav-container'>
        <div className='responsive-mobile-menu'>
          {mobileLogo()}
          <button
            className='navbar-toggler float-right'
            type='button'
            data-toggle='collapse'
            data-target='#tp_main_menu'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggle-icon' style={{ backgroundColor: 'white' }}>
              <span className='line' style={{ backgroundColor: 'white' }} />
              <span className='line' style={{ backgroundColor: 'white' }} />
              <span className='line' style={{ backgroundColor: 'white' }} />
            </span>
          </button>
        </div>

        <div className='collapse navbar-collapse' id='tp_main_menu'>
          <div className='logo-wrapper desktop-logo'>{mobileLogo()}</div>
          <ul className='navbar-nav'>
            <li>
              <Link to='/' style={{ color: 'white' }}>
                Home
              </Link>
            </li>

            <li>
              <Link to='/about' style={{ color: 'white' }}>
                About Us
              </Link>
            </li>
            <li>
              <Link to='/contact' style={{ color: 'white' }}>
                Support
              </Link>
            </li>
          </ul>
        </div>
        {showCurrency()}
      </div>
    </nav>
  )
}

export default Navbar
