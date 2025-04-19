import { baseUrl } from "@/Http/helper";
import React from "react";

function Footer() {
  return (
    <footer className="footer_sellora-affiliate-program">
      <div className="top_footer">
        <div className="container">
          <div className="col-lg-10 offset-lg-1">
            <div className="text-center ">
              <h3>CONTACT US</h3>
              <p>For all your queries you can reach us at</p>
              <ul>
                <li>partnerservices@Sellora.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="footer_logo">
                <img src={`${baseUrl}front/images/affiliate_program_logo.png`} />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="copyright">© 2024 2025 Sellora, LLC</div>
            </div>
            <div className="col-lg-4">
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
