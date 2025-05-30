'use client'
import { userAppContaxt } from '@/app/contaxtData/userContaxtData';
import React, { useContext, useEffect } from 'react'
import SupplierInvite from './supplierInvite';
import CheckGSTRegistered from './CheckGSTRegistered';

function page() {
 
  const {globalUser} = useContext(userAppContaxt);

useEffect(() => {
  if(globalUser.user){

      
  }
  //console.log('globalllllllllllllllllll',globalUser.user)

}, [globalUser.user])
  return (
    <>
    
    <div className="">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="list-group">
              <div className="list-group-item d-flex justify-content-between align-items-center">
                Supplier Registration Status
                <div>
                  <a href="#" className="text-decoration-none me-3">
                    View
                  </a>
                  <a href="#" className="text-danger fw-bold">
                    Download <i className="fa fa-download" />
                  </a>
                </div>
              </div>
              <div className="list-group-item d-flex justify-content-between align-items-center">
                Milestones Achieved
                <div>
                  <a href="#" className="text-decoration-none me-3">
                    View
                  </a>
                  <a href="#" className="text-danger fw-bold">
                    Download <i className="fa fa-download" />
                  </a>
                </div>
              </div>
              <div className="list-group-item d-flex justify-content-between align-items-center">
                Support Tickets
                <div>
                  <a href="#" className="text-decoration-none me-3">
                    View
                  </a>
                  <a href="#" className="text-danger fw-bold">
                    Download <i className="fa fa-download" />
                  </a>
                </div>
              </div>
              <div className="list-group-item d-flex justify-content-between align-items-center">
                Payout Summary
                <div>
                  <a href="#" className="text-decoration-none me-3">
                    View
                  </a>
                  <a href="#" className="text-danger fw-bold">
                    Download <i className="fa fa-download" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <CheckGSTRegistered />
        <SupplierInvite />
        </div>
      </div>
    </div>
  </>
  
  )
}

export default page