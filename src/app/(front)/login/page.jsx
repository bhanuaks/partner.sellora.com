"use client"
import { baseUrl } from '@/Http/helper'
import React, { useState } from 'react'

function page() {
          const [showPassword, setShowPassword] = useState(false)
    
  return (
    <div className="rts-register-area rts-section-gap login_outer">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 offset-lg-4">
        <div className="login_logo">
          <img src={`${baseUrl}front/assets/images/logo_login.png`} />
        </div>
        <div className="margin_rl">
          <div className="registration-wrapper-1 mb--40">
            <div className="row">
              <div className="col-lg-12">
                <div className="custom-form mt--20 mb--40">
                  <p className="log_in_account mb--20">
                    Login to Sellora Partner Network Panel
                  </p>
                  {/* checkout.html */}
                  <form
                    action="affiliate-dashboard.html"
                    className="registration-form"
                  >
                    <div className="input-wrapper job-input-wrapper">
                      <div className="row align-items-center">
                        <div className="col-lg-12 pb_20">
                          <div className="login2">
                            <input
                              type="email"
                              className="form-control"
                              name="name"
                              id="name"
                              placeholder=" "
                            />
                            <label htmlFor="name">Email Id</label>
                          </div>
                        </div>
                        <div className="col-lg-12 pb_20">
                          <div className="lable">
                            <input
                              type={!showPassword?"password":"text"}
                              className="form-control"
                              placeholder="Enter Password"
                            />
                              <i className={`toggle-password fa fa-fw fa-eye${!showPassword?"-slash":""}`} 
                              onClick={()=>setShowPassword(!showPassword)}/>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="lable">
                            <select>
                              <option>Select Program</option>
                              <option>Sellora Affiliate Program</option>
                              <option>Sellora Associate Program</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="rts-btn btn-primary">Login</button>
                  </form>
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

export default page