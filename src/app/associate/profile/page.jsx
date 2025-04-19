import React from "react";
import SideBare from "../SideBare";

function page() {
  return (
    <>
      <div className="pull-right position_absolute">Store:sellera04-21</div>
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
                      <div className="col-lg-8 offset-lg-2">
                        <div className="text-center websit_heading">
                          Congrats, Ayesha Ali
                          <p>
                            Thank you for applying to the Sellora Associates
                            Program Your unique Associate ID is{" "}
                            <span>sellera04-21.</span> Keep this ID secure, as
                            you may need it to verify your account.
                          </p>
                        </div>
                      </div>
                      <div className="list-group_3463478">
                        <ul>
                          <li>
                            Your application will be reviewed after you have
                            referred the required number of qualified sales to
                            Sellora.com
                          </li>
                          <li>
                            In the meantime, you now have full access to the
                            Associates Central platform 24/7
                          </li>
                          <li>
                            Important: If your affiliate links do not generate
                            the minimum qualified sales within 180 days, your
                            application and access to the Associates Program
                            will be withdrawn.
                          </li>
                        </ul>
                        <div className="started_we">
                          <p>
                            Get started today, and we look forward to seeing
                            Sellera grow with the Associates Program!
                          </p>
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
                          <a href="#">Finish</a>
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
    </>
  );
}

export default page;
