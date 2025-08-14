'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { userAppContaxt } from '@/app/contaxtData/userContaxtData';
import { baseUrl } from '@/Http/helper';
import $ from 'jquery'
import '../../../../public/front/loader.css'
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link';


function ChangePassword() {
  
  
  const { globalUser, setsetGlobalUser } = useContext(userAppContaxt);
    const [user, setUser] = useState(null);
    const [isProccess, setIsProccess] = useState(false);
    
    const [errors, setErrors] = useState({})
    const [passwordData, setPasswordData] = useState({
      old_password:"",
      new_password:"",
      confirm_password:"",
    }) 
    
    
    useEffect(() => {
      if(globalUser.user){
      setUser(globalUser.user)
      }

    },[globalUser.user])

  


  function changeInputData(e){
    const {name, value} = e.target;
      setPasswordData((preData)=>({
        ...preData,
        [name]:value
      }))

      setErrors((preError)=>({
        ...preError,
        [name]:!value.toString().trim()?`${name.replace("_", " ")} is required`:''
      }))
  }

  function changePassword(e){
    e.preventDefault();
    // $('.loaderouter').css('display','flex')

    setIsProccess(true)
    fetch(`${baseUrl}api/aff-user/change-password`, {
      method:"POST",
      body:JSON.stringify({
        ...passwordData,
        user_id:user?user._id:''
      })
    }).then((response)=>{
      setIsProccess(false)
      if(!response.ok){ 
        $('.loaderouter').css('display','none')
        throw new Error(`Network Error! ${response.statusText}`)
      }
      return response.json()
    }).then((res)=>{
      $('.loaderouter').css('display','none')
      if(res.status){
        window.location.reload();
      }else if(res.data.status_code && res.data.status_code == "400"){
        setErrors(res.data.errors)
      }
    })
  }
  
  
  return (
    <div className="">
    <ToastContainer 
                          position="top-center"
                          autoClose={3000}  
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                          theme="colored"
                      />
    <div className="container">
      <div className="row"> 
        <div className="col-lg-8 offset-lg-2"> 
          <div className="head_dfd">
            <h3 className="text-center">Change Password</h3>
          </div> 
          <form onSubmit={(e)=>changePassword(e)} encType="multypart/form-data" >
          <div className="form-container">
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="sku">Old Password<span className='error_message'>*</span> : </label>
                </div>
                <div className="col-lg-8">
                <input type="password"  
                    name='old_password'
                    value={passwordData.old_password}
                    onChange={(e)=>changeInputData(e)}
                    />
                    {errors.old_password && ( 

                    <span id="name_error" className="input-error-tip error_message" style={{display: 'inline-block'}}>{errors.old_password}</span>
                      // <span className='error_message'>{errors.old_password}</span>
                    )}
                </div> 
              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="sale-price">New Password<span className='error_message'>*</span> :</label>
                </div>
                <div className="col-lg-8">
                <input type="password"  
                name='new_password'
                value={passwordData.new_password}
                onChange={(e)=>changeInputData(e)}
                />
                {errors.new_password && ( 
                      <span id="name_error" className="input-error-tip error_message" style={{display: 'inline-block'}}>{errors.new_password}</span>
                    )}
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="msrp">Confirm Password<span className='error_message'>*</span> :</label>
                </div>
                <div className="col-lg-8">

                <input type="password"  
                name='confirm_password'
                value={passwordData.confirm_password}
                onChange={(e)=>changeInputData(e)}/>
                {errors.confirm_password && ( 
                     <span id="name_error" className="input-error-tip error_message" style={{display: 'inline-block'}}>{errors.confirm_password}</span>
                    )}

                </div>
              </div>
            </div>
            
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4"> </div>
                <div className="col-lg-8">
                  <div className="blue_button">
                    <ul>
                      <li><button className='profile_button'  type="submit" disabled={isProccess}> {isProccess?"Please wait..":"Update"} </button></li>
                      <li>
                        
                      {globalUser.user?.program == 1 && 
                        <Link href="/affiliate/dashboard">Cancel</Link>
                        }
                        {globalUser.user?.program == 2 && 
                        <Link href="/associate/profit-summary">Cancel</Link>
                        }
                        
                        </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> 
          </div> 
          </form>
        </div> 
      </div> 
    </div>
  </div>
  )
}

export default ChangePassword