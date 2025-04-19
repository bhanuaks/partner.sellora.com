import React from "react";

function Footer() {
  return (
    <div className="rts-footer-area pb--90">
      <div className="container">
        <div className="col-lg-6 offset-lg-3 mb--50">
          <div className="row ">
            <div className="col-lg-2" />
            <div className="col-lg-4">
              <h2 className="font-size">Customer Support</h2>
              <ul className="support_1">
                <li>
                  <a href="#"> Help</a>
                </li>
                <li>
                  <a href="#">Performance Tips</a>
                </li>
                <li>
                  <a href="#">Excluded Products </a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h2 className="font-size">Legal</h2>
              <ul className="support_1">
                <li>
                  <a href="#">Term &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy &amp; Policy</a>
                </li>
                <li>
                  <a href="#">Excluded Products </a>
                </li>
                <li>
                  <a href="#">Operating Agreement</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2" />
          </div>
        </div>
        <div className="col-lg-10 offset-lg-1">
          <div className="second_footer_link">
            <p>© 2024-2025 Sellora, LLC. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
