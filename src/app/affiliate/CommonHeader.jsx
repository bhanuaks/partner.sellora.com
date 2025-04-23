import React from 'react'

function CommonHeader() {
  return (
    <div className="rts-navigation-area-breadcrumb pb--10 mb--20">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <div className="dropdown dropdown-txt-custom">
              <button
                className="dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Help
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Payout Structure
                  </a>
                </li>
              </ul>
            </div>
            {/*  <ul>
<li><a class="nav-link user_panel_active collapsed" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Help <i class="fa fa-chevron-down doted_l text-black"></i></a> </li>
<ul class="collapse" id="collapseExample" style="">
<li><a class="nav-link2" href="#"><i class="far fa-angle-right"></i> Payout Structure</a></li>
</ul>
       
    </ul>
 */}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CommonHeader