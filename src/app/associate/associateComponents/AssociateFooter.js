import { baseUrl } from "@/Http/helper";
import React from "react";

function AssociateFooter() {
  return (
    <div className="rts-footer-area pt--50 pb--90">

    <div className="container">
      <div className="col-lg-10 offset-lg-1">
        <hr />
        <div className="footer_link">
          <ul>
            <li><a href="#">Term & Conditions</a></li>
            <li><a href="#">Privacy & Policy</a></li>
            <li><a href="#">Operating Agreement</a></li>

          </ul>
        </div>
        <div className="second_footer_link">
          <p>© 2024-2025 Sellora, LLC. All Rights Reserved</p>
        </div>
      </div>
    </div>

  </div>
  );
}

export default AssociateFooter;
