import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import React from 'react'

function AssociateHeader() {
  return (
    <div className="rts-header-one-area-one career-header light-bg">
    <div className="rts-header-nav-area-one header--sticky careerheader-sticky">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="nav-and-btn-wrapper">
              <div className="nav-area-bottom-left-header-four career-head"> <a href="#" className="logo-area">
                 <img src={`${baseUrl}front/images/affiliate_logo.jpg`} alt="logo-main" className="seller-page-logo" /> </a> </div>
           
              <div className="right-btn-area right-btn-area2 header-five">
                <div className="dropdown22">
                  <img src={`${baseUrl}front/images/world.png`} alt="India Flag" className="flag" />
                  <div className="arrow"></div>
                </div>

                <div className="dropdown_login">
                  <li className="seller-login-profile black_text">Ayesha Ali &nbsp; &nbsp;<i
                      className='fa fa-user user_bg text-white'></i>
                    <i className="fa fa-chevron-down doted_l"></i>
                    <div className='dropdown mr_10_login'>

                      <div className="affiliate-dashboard-profile">

                        <a className='drop-link' href='/associate/my-profile'>My Profile</a>
                        <a className='drop-link' href='/associate/payment-information'>Payment Information</a>
                        <a className='drop-link' href='/associate/my-payments'>My Payments</a>
                        <a className='drop-link' href='/associate/change-password'>Change password</a>
                        <a className='drop-link' href='#'>Logout</a>
                      </div>
                    </div>
                  </li>
                </div>
              </div>
              
            </div>
          </div>
          <div className="col-lg-12">
            <div className="logo-search-category-wrapper after-md-device-header header-mid-five-call"> <a href="index.html"
                className="logo-area">
                 <img src={`${baseUrl}front/images/affiliate_logo.jpg`} alt="logo-main" className="seller-page-logo" /> </a>
              <div className="main-wrapper-action-2 d-flex">
                <div className="dropdown_login pt--10">
                  <li className="seller-login-profile">Ayesha Ali &nbsp; &nbsp;<i className='fa fa-user user_bg text-white'></i>
                    <i className="fa fa-chevron-down doted_l"></i>
                    <div className='dropdown mr_10_login'> 
                      <div className="affiliate-dashboard-profile">
                        <a className='drop-link' href='/associate/my-profile'>My Profile</a>
                        <a className='drop-link' href='/associate/payment-information'>Payment Information</a>
                        <a className='drop-link' href='/associate/my-payments'>My Payments</a>
                        <a className='drop-link' href='/associate/change-password'>Change password</a>
                        <a className='drop-link' href='#'>Logout</a>
                      </div> 
                    </div>
                  </li>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default AssociateHeader