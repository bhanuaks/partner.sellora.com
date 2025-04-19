import React from "react";
import SideBare from "../SideBare";

function page() {
  return (
    <div className="">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="head_dfd">
              <h3 className="text-center blue">
                Create your Sellora Associate Account
              </h3>
            </div>
            <div className="row">
              <SideBare />
              <div className="col-lg-7">
                <div className="right_box">
                  <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                      <div className="text-center websit_heading">
                        Website and mobile aaps{" "}
                      </div>
                      <div className="dflo9">
                        <div className="orange_2">
                          Important: Please read these instructions carefully
                          before filling out this form.
                        </div>
                        <p>
                          List all the top-level websites and/or mobile apps
                          where you intend to display banners, widgets, special
                          links, or other ads as part of the Amazon Associates
                          program. You must include at least one website or
                          mobile app. A maximum of 50 websites or mobile apps
                          can be added.
                        </p>
                      </div>
                    </div>
                    <div className="form-container123 mt--50">
                      <div className="form-group">
                        <div className="row align-items-center">
                          <div className="col-lg-4">
                            <label htmlFor="sku">Enter Your Website URL:</label>
                          </div>
                          <div className="col-lg-7 col-10">
                            <input type="text" />
                          </div>
                          <div className="col-lg-1 col-1">
                            <div className="add">
                              <a href="#">Add</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row align-items-center">
                          <div className="col-lg-4">
                            <label htmlFor="sku">
                              Enter Your Mobile App URL:
                            </label>
                          </div>
                          <div className="col-lg-7 col-10">
                            <input type="text" />
                          </div>
                          <div className="col-lg-1 col-1">
                            <div className="add">
                              <a href="#">Add</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row align-items-center">
                          <div className="col-lg-4">
                            <label htmlFor="sku">
                              Enter Your Social Media URL:
                            </label>
                          </div>
                          <div className="col-lg-7 col-10">
                            <input type="text" />
                          </div>
                          <div className="col-lg-1 col-1">
                            <div className="add">
                              <a href="#">Add</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="button_outer">
                    <ul>
                      <li className="tranasparent_bg">
                        <a href="#">Previous</a>
                      </li>
                      <li>
                        <a href="#">Next</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
