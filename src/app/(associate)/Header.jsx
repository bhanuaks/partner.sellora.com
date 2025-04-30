import { baseUrl } from '@/Http/helper'
import React from 'react'

function Header() {
  return (
    <div className="rts-header-one-area-one career-header light-bg">
  <div className="rts-header-nav-area-one header--sticky careerheader-sticky">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="nav-and-btn-wrapper">
            <div className="nav-area-bottom-left-header-four career-head">
              <a href="#" className="logo-area">
                {" "}
                <img
                  src={`${baseUrl}front/images/affiliate_logo.jpg`} 
                  alt="logo-main"
                  className="seller-page-logo"
                />{" "}
              </a>
              <div className="nav-area dash_board_top_menu summary_top_menu">
                <nav>
                  <ul>
                    <li className="parent">
                      <a href="#">Home</a>{" "}
                    </li>
                    <li className="parent has-dropdown">
                      <a href="#">Product Linking</a>
                      <ul className="submenu">
                        <li>
                          <a href="#">Category</a>
                        </li>
                      </ul>
                    </li>
                    <li className="parent">
                      {" "}
                      <a href="#"> Tools</a>
                    </li>
                    <li className="parent has-dropdown">
                      <a href="#">Report</a>
                      <ul className="submenu">
                        <li>
                          <a href="#">Earning Report</a>
                        </li>
                        <li>
                          <a href="#">Payout Structure</a>
                        </li>
                      </ul>
                    </li>
                    <li className="parent has-dropdown">
                      <a href="#">Help</a>
                      <ul className="submenu">
                        <li>
                          <a href="#">Operating Agreement</a>
                        </li>
                        <li>
                          <a href="#">Advertisement Commission Schedule </a>
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="right-btn-area right-btn-area2 header-five">
              <div className="dropdown22">
                <img src={`${baseUrl}front/images/world.png`} alt="India Flag" className="flag" />
                <div className="arrow" />
              </div>
              <div className="dropdown_login">
                <li className="seller-login-profile black_text">
                  Ayesha Ali &nbsp; &nbsp;
                  <i className="fa fa-user user_bg text-white" />
                  <i className="fa fa-chevron-down doted_l" />
                  <div className="dropdown mr_10_login">
                    <div className="affiliate-dashboard-profile">
                      <a className="drop-link" href="/associate/my-profile">
                        My Profile
                      </a>
                      <a className="drop-link" href="/associate/payment-information">
                        Payment Information
                      </a>
                      <a className="drop-link" href="/associate/my-payments">
                        My Payments
                      </a>
                      <a className="drop-link" href="/associate/change-password">
                        Change password
                      </a>
                      <a
                        className="drop-link"
                        href="#"
                      >
                        Logout
                      </a>
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
            <a href="/" className="logo-area">
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
                      <a className="drop-link" href="/my-profile">
                        My Profile
                      </a>
                      <a className="drop-link" href="/payment-information">
                        Payment Information
                      </a>
                      <a className="drop-link" href="/my-payments">
                        My Payments
                      </a>
                      <a className="drop-link" href="/change-password">
                        Change password
                      </a>
                      <a
                        className="drop-link"
                        href="/"
                      >
                        Logout
                      </a>
                    </div>
                  </div>
                </li>
              </div>
            </div>
            <div className="main-wrapper-action-2 d-flex">
              <div className="actions-area">
                <div className="menu-btn" id="menu-btn">
                  {" "}
                  <svg
                    width={20}
                    height={16}
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect y={14} width={20} height={2} fill="#1F1F25" />
                    <rect y={7} width={20} height={2} fill="#1F1F25" />
                    <rect width={20} height={2} fill="#1F1F25" />
                  </svg>{" "}
                </div>
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

export default Header