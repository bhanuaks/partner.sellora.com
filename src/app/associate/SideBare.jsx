"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { userAppContaxt } from '../contaxtData/userContaxtData';
import { baseUrl } from '@/Http/helper';

function SideBare() {
    const pathname = usePathname();
    const {globalUser} = useContext(userAppContaxt);
    const [websiteShow, setWebsiteShow] = useState(false)
    const [profileShow, setProfileShow] = useState(false)
    const fetchUserData = (user_id) => {
      // console.log('userssss', user_id)      
          //$('.loaderouter').css('display', 'flex') 
            try{
            fetch(`${baseUrl}api/associate-get-detail?user_id=${user_id}`,{
              method:"GET"
            }).then((response)=>{
              return response.json();
            }).then((res)=>{
              if(res.status){
              //console.log('okkkkkkkkk', res.data.user)
                if(res.data.user.info.website?.length > 0 && res.data.user.info.mobileApp?.length > 0 && res.data.user.info.socialMedia?.length > 0){
                  setWebsiteShow(true);
                } else {
                  setWebsiteShow(false);
                }
                if(res.data.user.info.website?.length > 0 && res.data.user.info.mobileApp?.length > 0 && res.data.user.info.socialMedia?.length > 0 && res.data.user.store){
                  setProfileShow(true);
                } else {
                  setProfileShow(false);
                }


                //setWebsite(res.data.user[0])
                
              }
              //$('.loaderouter').css('display', 'none') 
            })
          } catch (error) {
            //console.error('Error saving profile:', error);
            //setMessage({ type: 'error', text: 'An unexpected error occurred.' });
            //toast.error(`Error: ${error.message}`);
          }
          }
  
    useEffect(()=>{
          //console.log('kkkkkkkkk')      
          if(globalUser.user){ 
            //console.log('okkkkkkkkk')
            fetchUserData(globalUser.user._id)
            
        }
           
        },[globalUser.user])

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
          <Link href={websiteShow ? '/associate/website-n-mobile-aap':'#'}>
            <i className="fa fa-check-square" />
            Website and Mobile Aap List
          </Link>
        </li>
        
        <li className={`${[  "/associate/profile",  "/associate/start-using-associate-central" ].includes(pathname) ? "active":""}`} >
          <Link href={profileShow ? '/associate/profile' : '#'}>
            <i className="fa fa-check-square" />
            Profile
          </Link>
        </li>
        
        <li className={`${[ "/profit-summary" ].includes(pathname) ? "active":""}`}>
          <Link href={profileShow ? "/profit-summary" : "#"}>
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