import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import React from 'react'

function HeaderFirst() {
  return (
    <div className="rts-header-one-area-one career-header">
  <div className="rts-header-nav-area-one header--sticky careerheader-sticky">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="nav-and-btn-wrapper">
            <div className="nav-area-bottom-left-header-four career-head">
              <Link
                href="/"
                className="logo-area"
              >
                {" "}
                <img
                  src={`${baseUrl}front/images/affiliate_program_logo.png`}
                  alt="logo-main"
                  className="seller-page-logo"
                />{" "}
              </Link>
              <div className="nav-area dash_board_top_menu affiliate_progrm">
                <nav>
                  <ul>
                    <li>
                      {" "}
                      <Link href="/affiliate-program" className="main">
                        Affiliate Program
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href="/associate-program" className="main">
                        Associate Program
                      </Link>{" "}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="right-btn-area right-btn-area2 header-five">
              <ul className="affiliate_program">
                <li>
                  <Link href="/create-account">
                    Register for Promgram
                  </Link>
                </li>
                {" "}
                <li>
                  <Link href="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
            {/* button-area end */}
          </div>
        </div>
        <div className="col-lg-12">
          <div className="logo-search-category-wrapper after-md-device-header header-mid-five-call">
            {" "}
            <a
              href="sellora-affiliate-program-index.html"
              className="logo-area"
            >
              {" "}
              <img
                src={`${baseUrl}front/images/affiliate_program_logo.png`}
                alt="logo-main"
                className="seller-page-logo"
              />{" "}
            </a>
            <div className="main-wrapper-action-2 d-flex">
              <div className="accont-wishlist-cart-area-header">
                <div className="after_login_seller">Register for Promgram</div>
              </div>
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

export default HeaderFirst