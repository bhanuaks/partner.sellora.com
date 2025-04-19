import Link from 'next/link'
import React from 'react'

function Section1() {
  return (
    <div className="section_1">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4">
          <div className="content_fd">

            <h2>Ready to transform your potential into
              profit. Join the Sellora Affiliate and
              Associate Programs today and take your
              business growth to the next level!</h2>
            <p>Offer your professional services to 2M+ sellers with
              us. Grow your reach today!</p>
          </div>
          <div className="register"><Link href="#">Register for Affiliate Program →</Link></div>
          {" "}
          <div className="register"><Link href="#">Register for Associate Program →</Link></div>
        </div>
        <div className="col-lg-8"> </div>
      </div>
    </div>
  </div>

  )
}

export default Section1