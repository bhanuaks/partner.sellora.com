"use client"
import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react'
import $ from 'jquery'
import '../../../../public/front/loader.css'
import { ToastContainer, toast } from 'react-toastify';
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import { useRouter, useSearchParams } from 'next/navigation'



function CreateAccount() {

    const searchParams = useSearchParams(); 
    const reg = searchParams.get("reg") || null;
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setConfirmShowPassword] = useState(false)
    const router = useRouter();
    const phoneInputRef = useRef(null);   
    const [sendOtp, setSendOtp] = useState(0)
    const [errors, setErrors] = useState({})
    const [otpTime, setOtpTime] = useState(0)
    const [otpMinTime, setOtpMinTime] = useState(5)

    const [userData, setUserData] = useState({
      first_name:'',
      last_name:'',
      mobile:'',
      email:'',
      password:'',
      confirm_password:'',
      program:reg == "Associate" ? 2 : 1 ,
      country:'',
      mobile_code:'1',
      country_s_name:'us', 
  })  
    
    
    
    useEffect(() => {
        const input = document.querySelector('#mobile_code');
    
        if (input) {
          const iti = intlTelInput(phoneInputRef.current, {
            initialCountry: userData && userData.country_s_name?userData.country_s_name:'us',
            separateDialCode: true,
            // utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js', 
          });
    
         
          const onCountryChange = () => {
            const selectedCountryData = iti.getSelectedCountryData();  
            setUserData((preData)=>({
                ...preData,
                mobile_code:selectedCountryData.dialCode,
                country_s_name:selectedCountryData.iso2,
            }))
          }; 
          phoneInputRef.current.addEventListener('countrychange', onCountryChange);
          
          return () => {
            iti.destroy();  
          };
        }
      }, [setUserData, userData?.country_s_name]);
  
      function hendleInputs(e){
        const {name, value, checked } = e.target
        

        if(name == "mobile"){
             const numericValue = value.replace(/[^0-9]/g, '')
            setUserData((prevData)=>({
                ...prevData,
                [name]:numericValue
            }))
            setErrors((preError)=>({
                ...preError,
                [name]:!numericValue?`${name.replace('_', ' ')} is required`:''
            }))
            return
        }
        setUserData((prevData)=>({
            ...prevData,
            [name]:value
        }))

                   

    }

    const saveAffiliateUser = (e) => {

      setErrors({}) 
        e.preventDefault();
        $('.loaderouter').css('display','flex')  
        fetch(`${baseUrl}api/aff-registration`,{
            method:"POST",
            body:JSON.stringify({...userData})
        }).then((response)=>{
            if(!response.ok){
                $('.loaderouter').css('display','none') 

                throw new Error("Network Error")
            }
            return response.json()
        }).then((res)=>{
            if(res.status){
                 
                   //console.log(res)
                   sessionStorage.setItem('affiliateUserAuthToken', res.token)
                   if(res.user.program == 1){
                    window.location.href=`${baseUrl}affiliate/dashboard`;
                   } else {
                    window.location.href=`${baseUrl}associate/account-information`;
                   } 
                    // router.push(`${baseUrl}user/my-profile`)
                
            }else if(res.data.status_code && res.data.status_code == 400){
                setErrors(res.data.errors) 
                const inputElement = document.querySelector(`input[name="${Object.keys(res.data.errors)[0]}"]`);
                const selectElement = document.querySelector(`select[name="${Object.keys(res.data.errors)[0]}"]`);
                if (inputElement) {
                    inputElement.focus();
                }
                 if (selectElement) {
                    selectElement.focus();

                }
                
            }
            $('.loaderouter').css('display','none') 
            
        }).catch((err)=>{
            console.log(err);
        })

    }
  
  
      return (
    <div className="rts-register-area rts-section-gap login_outer">
    
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
                    <div className="loaderouter"><div className="loader"></div></div>
    
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="login_logo">
            <img src={`${baseUrl}front/assets/images/logo_login.png`} alt='' />
          </div>
          <div className="margin_rl">
            <div className="registration-wrapper-1 mb--40">
              <div className="row">
                <div className="col-lg-12">
                  <div className="custom-form mt--20 mb--40">
                    <p className="log_in_account mb--20">
                      Create Affiliate Partner Account
                    </p> 
                    <form  className="registration-form" onSubmit={(e)=>saveAffiliateUser(e)}>
                    
                      <div className="input-wrapper job-input-wrapper">
                        <div className="row align-items-center">
                          <div className="col-lg-6 pb_20">
                            <div className="login2">
                              <input
                                type="text"
                                className="form-control"
                                name="first_name"
                                placeholder="First Name"
                                value={userData.first_name}
                                onChange={(e)=>hendleInputs(e)}
                              />
                              {errors.first_name && ( 
                                        <div className='error_message'>{errors.first_name}</div>
                                    )}
                            </div>
                          </div>
                          <div className="col-lg-6 pb_20">
                            <div className="login2">
                              <input
                                type="text"
                                className="form-control"
                                name="last_name"
                                placeholder="Last Name"
                                value={userData.last_name}
                                onChange={(e)=>hendleInputs(e)}
                              />
                              {errors.last_name && ( 
                                        <div className='error_message'>{errors.last_name}</div>
                                    )}
                            </div>
                          </div>
                          <div className="col-lg-12 pb_20">
                            <div className="login2">
                              
                            <input
                                      type="text"
                                      id="mobile_code"
                                      placeholder="Mobile Number"
                                      name='mobile'
                                      
                                      //onChange={(e)=>hendleInputs(e)}
                                      //disabled={sendOtp != 0?true:false}
                                      ref={phoneInputRef}
                                      value={userData.mobile}
                                      onChange={(e)=>hendleInputs(e)}
                                    />
                                    {errors.mobile && ( 
                                              <div className='error_message'>{errors.mobile}</div>
                                          )}
                              
                            </div>
                          </div>
                          <div className="col-lg-12 pb_20">
                            <div className="login2">
                              <input
                                type="text"
                                className="form-control"
                                name="email"
                                placeholder="Email"
                                value={userData.email}
                                onChange={(e)=>hendleInputs(e)}
                              
                              />
                              {errors.email && ( 
                                        <div className='error_message'>{errors.email}</div>
                                    )}
                            </div>
                          </div>
                          <div className="col-lg-6 pb_20">
                            <div className="lable">
                              <input
                                type={!showPassword?"password":"text"}
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                value={userData.password}
                                onChange={(e)=>hendleInputs(e)}
                              />
                              {errors.password && ( 
                                        <div className='error_message'>{errors.password}</div>
                                    )}
                              <i className={`toggle-password fa fa-fw fa-eye${!showPassword?"-slash":""}`} 
                              onClick={()=>setShowPassword(!showPassword)}/>
                            </div>
                          </div>
                          <div className="col-lg-6 pb_20">
                            <div className="lable">
                              <input
                                type={!showConfirmPassword?"password":"text"}
                                className="form-control"
                                placeholder="Confirm Password"
                                name="confirm_password"
                                value={userData.confirm_password}
                                onChange={(e)=>hendleInputs(e)}
                              />
                              {errors.confirm_password && ( 
                                        <div className='error_message'>{errors.confirm_password}</div>
                                    )}
                              <i className={`toggle-password fa fa-fw fa-eye${!showConfirmPassword?"-slash":""}`}  
                              onClick={()=>setConfirmShowPassword(!showConfirmPassword)}/>
                            </div>
                          </div>
                          <div className="col-lg-12 pb_20">
                            <div className="lable">
                              <select 
                              name="program" 
                              value={userData.program}
                              onChange={(e)=>hendleInputs(e)}
                              >
                                <option value="">Select Program</option>
                                <option value="1">Sellora Affiliate Program</option>
                                <option value="2">Sellora Associate Program</option>
                              </select>
                              {errors.program && ( 
                                        <div className='error_message'>{errors.program}</div>
                                    )}
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="lable">
                              <select
                              name="country"
                              value={userData.country}
                              onChange={(e)=>hendleInputs(e)}
                              >
                                <option value="">Select Country</option>
                                <option value="United States">United States</option>
                                <option value="Canada">Canada</option>
                                <option value="India">India</option>
                              </select>
                              {errors.country && ( 
                                        <div className='error_message'>{errors.country}</div>
                                    )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="rts-btn btn-primary">Register</button>
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: 14,
                          marginTop: 30,
                          color: "#000"
                        }}
                      >
                        Already a registered partner?{" "}
                        <a href="/login">
                          Log in
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

function page(){
  return (
    <Suspense fallback={<></>}>
       <CreateAccount />
    </Suspense>
  )
}

export default page