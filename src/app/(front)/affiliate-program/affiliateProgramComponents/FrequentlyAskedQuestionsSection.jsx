import { baseUrl } from '@/Http/helper'
import React from 'react'

function FrequentlyAskedQuestionsSection() {
  return (
    <div className="bg-white">
  <div className="container">
    <h3 className="text-center">Frequently Asked Questions</h3>
    <div className="row">
      <div className="col-lg-10 offset-lg-1 mb--30">
        <div className="f_one">
          <h2>
            How does the Sellora Affiliate Program help with seller onboarding?{" "}
          </h2>
          <p>
            The Sellora Affiliate Program streamlines the seller onboarding
            process by providing affiliates with tools and resources to guide
            sellers effectively. Affiliates can connect with potential sellers,
            assist them in setting up their accounts, and ensure they are ready
            to start selling on Sellora with ease. It s a simple way to help
            sellers get started while earning rewards for every successful
            onboarding!
          </p>
        </div>
        <div className="f_one">
          <h2>
            What benefits do affiliates receive in the Sellora Affiliate
            Program?
          </h2>
          <p>
            Affiliates in the Sellora Affiliate Program enjoy several benefits,
            including earning commissions for successful seller sign ups, access
            to exclusive tools and resources for efficient onboarding, and the
            opportunity to expand their network by helping more sellers succeed.
            Plus, affiliates can grow their earnings as more sellers join and
            thrive on the platform.
          </p>
        </div>
        <div className="f_one">
          <h2>
            Do I need to pay for the services in the Sellora Affiliate Program?
          </h2>
          <p>
            Joining the Sellora Affiliate Program is absolutely free, with no
            hidden costs or fees. By participating, you have the opportunity to
            earn rewards simply by helping sellers onboard and empowering them
            to grow their businesses successfully!
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="row">
            <div className="col-lg-6">
              <div className="sellora-associate-program">
                <h2>Sellora Associate Program</h2>
                <p>
                  The Sellora Associate Program is a dynamic influencer
                  marketing initiative designed to empower individuals,
                  businesses, blogger and influencers to promote products
                  available on the Sellora marketplace. This Associate program
                  provides a unique opportunity for Associates to earn
                  commissions by referring new customers, driving sales, and
                  enhancing Sellora’s reach across different product categories.
                </p>
                <p>
                  The Sellora Associate Program is built to help Associates earn
                  income by sharing Sellora products with their audience.
                  Associates will have access to marketing tools, product links,
                  and promotional resources to facilitate their success in
                  generating sales. The program is simple, flexible, and
                  designed to benefit everyone from individual, bloggers to
                  large-scale marketing agencies.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="view_img">
                <img src={`${baseUrl}front/images/sellora-associate-program.jpg`} />
              </div>
            </div>
            <div className="mt--100">
              <div className="text-center role_of_affiliates">
                <h3 className="orange_1">Key Features</h3>
              </div>
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-lg-4">
                  <div className="box2342 box2390">
                    <h4>Diverse Product Catalog</h4>
                    <p>
                      Promote products across categories like electronics,
                      fashion, beauty, home decor, and more.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="box2342 box2390">
                    <h4>Easy-to-Use Dashboard</h4>
                    <p>
                      Track sales, commissions, and performance in real time
                      with a user-friendly interface.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="box2342 box2390">
                    <h4>Marketing Resources</h4>
                    <p>
                      Access professionally designed banners, ads, and tools for
                      effective promotion.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="box2342 box2390">
                    <h4>Flexible Payout Options</h4>
                    <p>
                      Choose payout methods like bank transfers, digital
                      wallets, or PayPal.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="box2342 box2390">
                    <h4>Custom Referral Links</h4>
                    <p>
                      Use unique links to track individual sales and commissions
                      effortlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <div className="commission-structure">
          <h2>Commission Structure</h2>
          <p>
            Associates earn a percentage of sales generated through their
            referral links. Here is the commission breakdown by category:
          </p>
          <table className="table table-bordered table-striped br-none table_commission_structure">
            <tbody>
              <tr>
                <th className="text-left">Product Category</th>
                <th className="text-left">Commission Rate</th>
              </tr>
              <tr>
                <td>Fashion &amp; Apparel </td>
                <td>Up to 5%</td>
              </tr>
              <tr>
                <td>Electronics &amp; Gadgets</td>
                <td>Up to 4%</td>
              </tr>
              <tr>
                <td>Home &amp; Kitchen</td>
                <td>Up to 5%</td>
              </tr>
              <tr>
                <td>Beauty &amp; Personal Care</td>
                <td>Up to 5%</td>
              </tr>
              <tr>
                <td>Health &amp; Wellness</td>
                <td>3%</td>
              </tr>
              <tr>
                <td>Premium Services (Subscriptions, etc.)</td>
                <td>5%</td>
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

export default FrequentlyAskedQuestionsSection