"use client"
import { baseUrl } from '@/Http/helper'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import $ from 'jquery'

function page() {
          const [showPassword, setShowPassword] = useState(false)
          const [errors, setErrors] = useState({})
          const route = useRouter(); 
          const [loginData, setLoginData] = useState({
            username:'',
            password:'',
            program:''
          })
  
          const updateLoginData=(e)=>{  
  
            const {name, value} = e.target;
            if(value ==""){
                setErrors((preError)=>({
                    ...preError,
                    [name]:`${name} is required`
                }))
            }else{
              setErrors((preError)=>({
                  ...preError,
                  [name]:``
              }))
            } 
            setLoginData((preData)=>({
                ...preData,
                [name]:value
              })) 
          }
  const fetchUserDataAssociate = (user_id) => {
        // console.log('userssss', user_id)      
            //$('.loaderouter').css('display', 'flex') 
              try{
              fetch(`${baseUrl}api/associate-get-detail?user_id=${user_id}`,{
                method:"GET"
              }).then((response)=>{
                return response.json();
              }).then((res)=>{
                if(res.status){
                //console.log('okkkkkkkkk', res.data.user.store)
                  
                  if(res.data.user.store?.finish == 1){
                    //setProfileShow(true);
                    window.location.href=`${baseUrl}associate/profit-summary`;
                  } else {
                    window.location.href=`${baseUrl}associate/account-information`;
                    
                    //setProfileShow(false);
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
          
    function loginSubmit(e){
      setErrors({});
      e.preventDefault();
      $('.loaderouter').css('display','flex')
        fetch(`${baseUrl}api/aff-user-login`,{
          method:"POST",
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(loginData)
        }).then((response)=>{ 
          if(!response.ok){
          $('.loaderouter').css('display','none') 
            throw new Error("Network Error")
          }
          return response.json()
        }).then((res)=>{
          $('.loaderouter').css('display','none')  
          if(res.status){
            toast.success('Success! Login successfully.'); 
            sessionStorage.setItem('affiliateUserAuthToken', res.token) 
            //console.log('kkkkk', res.user)
            setTimeout(() => {  
              if(res.user.program == 1){
                window.location.href=`${baseUrl}affiliate/dashboard`;
              } else {
                
                
                fetchUserDataAssociate(res.user._id)
                
                
                //window.location.href=`${baseUrl}associate/account-information`;
              } 
            }, 300);
          }else if(res.data.status_code==403){
            setErrors(res.data.errors)
            $('.loaderouter').css('display','none')
          }
        })
    }
  
  
          return (
    <div className="rts-register-area rts-section-gap login_outer">
      <ToastContainer 
                      position="top-center"
                      autoClose={3000} // Toast disappears after 3 seconds
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
      <div className="col-lg-4 offset-lg-4">
        <div className="login_logo">
          <img src={`${baseUrl}front/assets/images/logo_login.png`} />
        </div>
        <div className="margin_rl">
          <div className="registration-wrapper-1 mb--40">
            <div className="row">
              <div className="col-lg-12">
                <div className="custom-form mt--20 mb--40">
                  <p className="log_in_account mb--20">
                    Login to Sellora Partner Network Panel
                  </p>
                  {/* checkout.html */}
                  <form
                    
                    className="registration-form"
                    onSubmit={(e)=>loginSubmit(e)}
                  >
                    <div className="input-wrapper job-input-wrapper">
                      <div className="row align-items-center">
                        <div className="col-lg-12 pb_20">
                          <div className="login2">
                            <input
                              type="email"
                              className="form-control"
                              id="name"
                              placeholder=" "
                              name="username" 
                              value={loginData.username}
                              onChange={(e)=>updateLoginData(e)}
                            />
                            <label htmlFor="name">Email Id</label>
                            {errors.username && errors.username != ""? ( 
                                  <span id="name_error" className="input-error-tip error_message" style={{display: 'inline-block'}}>{errors.username}</span>
                              ):''}
                          </div>
                        </div>
                        <div className="col-lg-12 pb_20">
                          <div className="lable">
                            <input
                              type={!showPassword?"password":"text"}
                              className="form-control"
                              placeholder="Enter Password"
                              name='password' 
                              value={loginData.password}
                              onChange={(e)=>updateLoginData(e)}
                            />
                              <i className={`toggle-password fa fa-fw fa-eye${!showPassword?"-slash":""}`} 
                              onClick={()=>setShowPassword(!showPassword)}/>
                          </div>
                          {errors.password && errors.password != ""? ( 
                                  <span id="name_error" className="input-error-tip error_message" style={{display: 'inline-block'}}>{errors.password}</span>
                              ):''}
                        </div>
                        <div className="col-lg-12">
                          <div className="lable">
                            <select
                            name="program"
                            value={loginData.program}
                            onChange={(e)=>updateLoginData(e)}
                            >
                              <option value="">Select Program</option>
                              <option value="1">Sellora Affiliate Program</option>
                              <option value="2">Sellora Associate Program</option>
                            </select>
                            {errors.program && errors.program != ""? ( 
                                  <span id="name_error" className="input-error-tip error_message" style={{display: 'inline-block'}}>{errors.program}</span>
                              ):''}
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="rts-btn btn-primary">Login</button>
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

export default page