import React from 'react'

function ProgramOverview() {
  return (
    <div className="section_program_overview">
  <div className="container">
    <div className="text-center program_overview">
      <h3>Program Overview</h3>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="sellora_affiliate_program">
          <h3>Sellora Affiliates Program: Eligibility &amp; Registration</h3>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="eligibility-criteria">
          <h2 className="text-center">Eligibility Criteria:</h2>
          <p>
            The Sellora Affiliates Program is tailored for professionals,
            agencies, and individuals who are passionate about helping
            businesses expand their online selling ventures by onboarding
            sellers onto the Sellora.com marketplace. To qualify, you must meet
            the following criteria:
          </p>
          <ul>
            <li>Experience in seller onboarding, or e commerce consulting.</li>
            <li>
              A strong network of potential sellers, including manufacturers,
              MSMEs, wholesalers, and retailers.
            </li>
            <li>
              Ability to effectively communicate the advantages of selling on
              Sellora.com to prospective sellers.
            </li>
            <li>
              Compliance with Selloras affiliate terms and ethical practices.
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="eligibility-criteria">
          <h2 className="text-center">Registration Process:</h2>
          <ul>
            <li>
              <strong>Apply Online:</strong> Submit your application on Selloras
              official website.
            </li>
            <li>
              <strong>Approval:</strong> Applications are reviewed, and approved
              affiliates receive a confirmation email.
            </li>
            <li>
              <strong>Access Resources:</strong> Gain access to your affiliate
              dashboard, complete with referral links and onboarding guides.
            </li>
            <li>
              <strong>Start Onboarding:</strong> Begin onboarding sellers and
              earn rewards for every successful referral.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="text-center role_of_affiliates">
      <h3>Role of Affiliates</h3>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="eligibility-criteria">
          <h2>Onboarding New Sellers</h2>
          <ul>
            <li>
              Assist new sellers in setting up their accounts on Sellora,
              ensuring a smooth registration process
            </li>
            <li>
              Provide guidance on the necessary documentation and compliance
              requirements.
            </li>
          </ul>
          <h2>Catalog Management</h2>
          <ul>
            <li>
              Guide new sellers in creating optimized, accurate, and attractive
              product listings.
            </li>
          </ul>
          <h2> Training and Guidance</h2>
          <ul>
            <li>
              {" "}
              Educate sellers about Sellora policies, programs (such as Sellora
              Promotions, Advertising), and best practices for e-commerce
              success
            </li>
            <li>
              Provide ongoing training on how to Sellora tools and features
              effectively.
            </li>
          </ul>
          <h2>Marketing and Sales Growth</h2>
          <ul>
            <li>
              Assist sellers in creating and managing advertising campaigns on
              Sellora, such as Sponsored Products or Promotions
            </li>
            <li>
              Suggest strategies to increase sales, such as promotions, deals,
              or participating in sales events.
            </li>
            <li>
              Foster trust by providing personalized assistance to sellers and
              helping them achieve sustainable growth on the platform.
            </li>
            <li>Guide sellers on Selloras policies and tools.</li>
            <li>Educate sellers on boosting sales and daily operations.</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <div className="row">
          <div className="col-lg-6">
            <div className="box2342 box_height">
              <h3 className="text-center">Affiliate Support</h3>
              <ul className="list">
                <li>Dedicated training from Selloras onboarding team</li>
                <li>Access to marketing resources and tools.</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="box2342 box_height">
              <h3 className="text-center">Benefits</h3>
              <ul className="list">
                <li>
                  Competitive commissions for each seller successfully onboarded
                  to Sellora.
                </li>
                <li>
                  Exclusive tools and resources for streamlined onboarding.
                </li>
                <li>Real time tracking to monitor performance and earnings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center role_of_affiliates">
      <h3 className="orange_1">Sellora Affiliate Payout Structure</h3>
    </div>
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <div className="table-responsive">
          <table className="table table-bordered sellora-affiliate-program_table">
            <tbody>
              <tr>
                <th width="50%">Category</th>
                <th>Details</th>
              </tr>
              <tr>
                <td>Payout for SKU Launch</td>
                <td>
                  <ul className="list2">
                    <li>10-19 SKUs: $21 per launch</li>
                    <li>20-29 SKUs: $29 per launch</li>
                    <li>30+ SKUs: $39 per launch</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Additional Payout</td>
                <td>
                  $2 per fulfilled order (capped at 10 orders, max $20 per
                  seller)
                </td>
              </tr>
              <tr>
                <td>Affiliate Bonus Commission</td>
                <td>
                  Get a 3% bonus commission on ad spend during the first 3
                  months with a minimum of $5,000 in sales.
                </td>
              </tr>
              <tr>
                <td>Penalty</td>
                <td>
                  Sellers with fewer than 10 buyable listings on the last day of
                  launch + 1 month (due to suspension or listing reduction) will
                  have the corresponding amount deducted from their next payout.
                </td>
              </tr>
              <tr>
                <td>Minimum Threshold</td>
                <td>The minimum threshold for launch is 10 SKUs.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ProgramOverview