import { baseUrl } from '@/Http/helper'
import React from 'react'

function page() {
  return (
    <>
  <div id="side-bar" className="side-bar header-two">
    <button className="close-icon-menu">
      <i className="far fa-times" />
    </button>
    <div className="mobile-menu-nav-area tab-nav-btn mt--20">
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
          tabIndex={0}
        >
          <div className="mobile-menu-main">
            <nav className="nav-main mainmenu-nav mt--30">
              <ul className="mainmenu metismenu" id="mobile-menu-active">
                <li>
                  <a href="#" className="main">
                    Home
                  </a>{" "}
                </li>
                <li className="has-droupdown">
                  <a href="#" className="main">
                    Product Linking
                  </a>
                  <ul className="submenu mm-collapse">
                    <li>
                      <a href="#" className="mobile-menu-link">
                        Category
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="#" className="main">
                    Tools
                  </a>
                </li>
                <li className="has-droupdown">
                  <a href="#" className="main">
                    Report
                  </a>
                  <ul className="submenu mm-collapse">
                    <li>
                      <a href="#" className="mobile-menu-link">
                        Earning Report
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mobile-menu-link">
                        Payout Structure
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <a href="#" className="main">
                    Help
                  </a>
                  <ul className="submenu mm-collapse">
                    <li>
                      <a href="#" className="mobile-menu-link">
                        Operating Agreement
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mobile-menu-link">
                        Advertisement Commission Schedule{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mobile-menu-link">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/*   <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"
              tabindex="0">
              <div class="category-btn category-hover-header menu-category">
                  <ul class="category-sub-menu" id="category-active-menu">

                      <li class="parent"> <a href="career.html">Careers</a> </li>
                      <li class="parent"> <a href="about-us.html">About Sellora</a> </li>
                      <li class="parent"><a href="culture.html">Culture</a></li>
                      <li class="parent"><a href="jobs.html">Jobs</a></li>

                  </ul>
              </div>
          </div> */}
      </div>
    </div>
  </div>
  <div className="_sbg">
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <div className="profit_summary">
            <h4>Profit Summary</h4>
          </div>
          <div className="summry_box">
            <img src={`${baseUrl}front/images/fees.jpg`} />
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="summry_box">
                <ul className="sum">
                  <li className="total">
                    Total Fees{" "}
                    <span className="total-clicks">Total Clicks</span>
                  </li>
                  <li>
                    $0.00 <span>0</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="col-lg-3">
          <div className="profit_summary">
            <h4>Summary for This Month</h4>
          </div>
          <div className="breadcrumb_dashboard_right_box">
            <ul className="sum_add">
              <li>
                Total Items Shipped: <span>0</span>
              </li>
              <li>
                Total Earnings: <span>$0.00</span>
              </li>
              <li>
                Total Ordered Items:<span>0</span>
              </li>
              <li>
                Clicks: <span>0</span>
              </li>
              <li>
                Conversion: <span>0.00%</span>
              </li>
            </ul>
            <div className="view_repoart">
              <a href="#"> View Full Repoart </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default page