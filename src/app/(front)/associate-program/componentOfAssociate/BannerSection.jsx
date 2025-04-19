import { baseUrl } from '@/Http/helper'
import React from 'react'

function BannerSection() {
  return (
    <div className="section_30439">
  <div className="container">
    <div className="row">
      <div className="col-lg-7">
        <div className="sellora_affiliate_program">
          <h3>Sellora Associate Program</h3>
          <p>
            The Sellora Associate Program is a dynamic influencer marketing
            initiative designed to empower individuals, businesses, blogger and
            influencers to promote products available on the Sellora
            marketplace. This Associate program provides a unique opportunity
            for Associates to earn commissions by referring new customers,
            driving sales, and enhancing Sellora’s reach across different
            product categories.
          </p>
          <p>
            The Sellora Associate Program is built to help Associates earn
            income by sharing Sellora products with their audience. Associates
            will have access to marketing tools, product links, and promotional
            resources to facilitate their success in generating sales. The
            program is simple, flexible, and designed to benefit everyone from
            individual, bloggers to large-scale marketing agencies.
          </p>
        </div>
      </div>
      <div className="col-lg-5">
        <img src={`${baseUrl}front/images/sellora-associate.jpg`} />
      </div>
    </div>
  </div>
</div>

  )
}

export default BannerSection