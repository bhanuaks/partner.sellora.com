import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import React from 'react'

function LoginHeader() {
  return (
    <div className="rts-header-one-area-one career-header light-bg">
  <div className="rts-header-nav-area-one header--sticky careerheader-sticky">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="nav-and-btn-wrapper">
            <div className="nav-area-bottom-left-header-four career-head">
              {" "}
              <Link href="/dashboard" className="logo-area">
                {" "}
                <img
                  src={`${baseUrl}front/images/affiliate_logo.jpg`}
                  alt="logo-main"
                  className="seller-page-logo"
                />{" "}
              </Link>{" "}
            </div>
            {/*     <div class="nav-area dash_board_top_menu">
        <nav>
          <ul>
            
            <li class="parent has-dropdown"><a href="#">Listing</a>
              <ul class="submenu">
                <li><a href="#">My Listing</a></li>
                <li><a href="#">Add Catalog </a></li>
                
              </ul>
            </li>
            
          </ul>
        </nav>
      </div> */}
            <div className="right-btn-area right-btn-area2 header-five">
              <div className="dropdown_login">
                <li className="seller-login-profile black_text">
                  Ayesha Ali &nbsp; &nbsp;
                  <i className="fa fa-user user_bg text-white" />
                  <i className="fa fa-chevron-down doted_l" />
                  <div className="dropdown mr_10_login">
                    <div className="affiliate-dashboard-profile">
                      <Link className="drop-link" href="/my-profile">
                        My Profile
                      </Link>
                      <Link className="drop-link" href="/payment-information">
                        Payment Information
                      </Link>
                      <Link className="drop-link" href="/my-payments">
                        My Payments
                      </Link>
                      <Link className="drop-link" href="/change-password">
                        Change password
                      </Link>
                      <Link
                        className="drop-link"
                        href="/"
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                </li>
              </div>
            </div>
            {/* button-area end */}
          </div>
        </div>
        <div className="col-lg-12">
          <div className="logo-search-category-wrapper after-md-device-header header-mid-five-call light-bg">
            {" "}
            <a href="index.html" className="logo-area">
              {" "}
              <img
                src={`${baseUrl}front/images/affiliate_logo.jpg`}
                alt="logo-main"
                className="seller-page-logo"
              />{" "}
            </a>
            <div className="main-wrapper-action-2 d-flex">
              <div className="dropdown_login pt--10">
                <li className="seller-login-profile black_text">
                  Ayesha Ali &nbsp; &nbsp;
                  <i className="fa fa-user user_bg text-white" />
                  <i className="fa fa-chevron-down doted_l" />
                  <div className="dropdown mr_10_login">
                    <div className="affiliate-dashboard-profile">
                      <Link className="drop-link" href="/my-profile">
                        My Profile
                      </Link>
                      <Link className="drop-link" href="/payment-information">
                        Payment Information
                      </Link>
                      <Link className="drop-link" href="/my-payments">
                        My Payments
                      </Link>
                      <Link className="drop-link" href="/change-password">
                        Change password
                      </Link>
                      <Link
                        className="drop-link"
                        href="/"
                      >
                        Logout
                      </Link>
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

export default LoginHeader