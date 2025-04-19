"use client"
import { baseUrl } from '@/Http/helper'
import React, { useState } from 'react'

function page() {

      const [showPassword, setShowPassword] = useState(false)
      const [showConfirmPassword, setConfirmShowPassword] = useState(false)


  return (
    <div className="rts-register-area rts-section-gap login_outer">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="login_logo">
            <img src={`${baseUrl}front/assets/images/logo_login.png`} alt='' />
          </div>
          <div className="margin_rl">
            <div className="registration-wrapper-1 mb--40">
              <div className="row">
                <div className="col-lg-12">
                  <div className="custom-form mt--20 mb--40">
                    <p className="log_in_account mb--20">
                      Create Affiliate Partner Account
                    </p> 
                    <form
                      action="affiliate-dashboard.html"
                      className="registration-form"
                    >
                      <div className="input-wrapper job-input-wrapper">
                        <div className="row align-items-center">
                          <div className="col-lg-6 pb_20">
                            <div className="login2">
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="First Name"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 pb_20">
                            <div className="login2">
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Last Name"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 pb_20">
                            <div className="login2">
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Mobile Number"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 pb_20">
                            <div className="login2">
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 pb_20">
                            <div className="lable">
                              <input
                                type={!showPassword?"password":"text"}
                                className="form-control"
                                placeholder="Password"
                              />
                              <i className={`toggle-password fa fa-fw fa-eye${!showPassword?"-slash":""}`} 
                              onClick={()=>setShowPassword(!showPassword)}/>
                            </div>
                          </div>
                          <div className="col-lg-6 pb_20">
                            <div className="lable">
                              <input
                                type={!showConfirmPassword?"password":"text"}
                                className="form-control"
                                placeholder="Confirm Password"
                              />
                              <i className={`toggle-password fa fa-fw fa-eye${!showConfirmPassword?"-slash":""}`}  
                              onClick={()=>setConfirmShowPassword(!showConfirmPassword)}/>
                            </div>
                          </div>
                          <div className="col-lg-12 pb_20">
                            <div className="lable">
                              <select>
                                <option>Select Program</option>
                                <option>Sellora Affiliate Program</option>
                                <option>Sellora Associate Program</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="lable">
                              <select>
                                <option>United States</option>
                                <option>Canada</option>
                                <option>India</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="rts-btn btn-primary">Register</button>
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: 14,
                          marginTop: 30,
                          color: "#000"
                        }}
                      >
                        Already a registered partner?{" "}
                        <a href="/login">
                          Log in
                        </a>
                      </p>
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