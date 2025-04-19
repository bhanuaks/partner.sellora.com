"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function SideBare() {
    const pathname = usePathname();

  return (
    <div className="col-lg-3">
    <div className="left_link_box">
      <ul>
        <li className={`${['/associate/account-information', "/associate/profile", "/associate/website-n-mobile-aap", "/associate/start-using-associate-central" ].includes(pathname) ? "active":""}`} >
          <Link href="/associate/account-information">
            <i className="fa fa-check-square" />
            Account Information
          </Link>
        </li>
        <li className={`${[ "/associate/profile", "/associate/website-n-mobile-aap", "/associate/start-using-associate-central" ].includes(pathname) ? "active":""}`}   >
          <Link href="/associate/website-n-mobile-aap">
            <i className="fa fa-check-square" />
            Website and Mobile Aap List
          </Link>
        </li>
        <li className={`${[  "/associate/profile",  "/associate/start-using-associate-central" ].includes(pathname) ? "active":""}`} >
          <Link href="/associate/profile">
            <i className="fa fa-check-square" />
            Profile
          </Link>
        </li>
        <li className={`${[ "/profit-summary" ].includes(pathname) ? "active":""}`}>
          <Link href="/profit-summary">
            <i className="fa fa-check-square" />
            Start Using Associate Central
          </Link>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default SideBare