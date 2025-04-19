import Link from 'next/link'
import React from 'react'

function HeaderSecond() {
  return (
    <div id="side-bar" className="side-bar header-two">
    <button className="close-icon-menu">
      <i className="far fa-times" />
    </button>
    <div className="mobile-menu-nav-area tab-nav-btn mt--20">
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          {/* <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Menu</button> */}
          {/* <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Demo</button> */}
        </div>
      </nav>
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
      </div>
    </div>
  </div>
  
  )
}

export default HeaderSecond