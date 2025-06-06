import { baseUrl } from '@/Http/helper'
import React from 'react'

function BannerSection() {
  return (
    <div className="section_30439">
  <div className="container">
    <div className="row">
      <div className="col-lg-7">
        <div className="sellora_affiliate_program">
          <h3>
            Sellora Affiliate Program<span>for Seller Onboarding</span>
          </h3>
          <p>
            Sellora, a leading B2B and B2C marketplace platform, offers an
            exclusive Affiliate Program for Seller Onboarding to expand its
            seller network. This program allows affiliates, including
            individuals, agencies, and businesses, to earn commissions by
            onboarding new sellers and helping them succeed on Sellora s
            platform. The program provides affiliates with tools, resources, and
            attractive incentives to support sellers in establishing and growing
            their businesses.
          </p>
        </div>
      </div>
      <div className="col-lg-5">
        <img src={`${baseUrl}front/images/sellora-affiliate-program.jpg`} />
      </div>
    </div>
  </div>
</div>

  )
}

export default BannerSection