'use client'
import React, { useContext, useEffect, useState } from "react";
import SideBare from "../SideBare";
import { toast, ToastContainer } from "react-toastify";
import '../../../../public/front/loader.css'
import { userAppContaxt } from "@/app/contaxtData/userContaxtData";
import $ from 'jquery'
import { baseUrl } from "@/Http/helper";
import { useRouter } from "next/navigation";

function page() {
  const {globalUser} = useContext(userAppContaxt);
  const [website, setWebsite] = useState([])
  const [mobileApp, setMobileApp] = useState([])
  const [socialMedia, setSocialMedia] = useState([])
  const [userData, setUserData] = useState({
    website:'',
    mobile:'',
    social:''
  })
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [showSideBar, setShowSideBar] = useState({})
  const [showSideBarStatus, setShowSideBarStatus] = useState(false)
  
  const handleWebsiteChange = (e) => {
    e.preventDefault()
    if (!website.includes(userData.website)) {
      setWebsite(prevData => [userData.website, ...prevData]);
      
    } else {
      setErrors((prev) => ({...prev, website:'Website URL already exist.'}))
    }

  setUserData((prevData)=>({
    ...prevData,
    website:''
  }))

  }

  const removeButton = (e, value) => {
    e.preventDefault()
    let data = website.filter((list) => list != value)

    setWebsite(data);

  }


  const handleMobileChange = (e) => {
    e.preventDefault()
    if (!mobileApp.includes(userData.mobile)) {
      setMobileApp(prevData => [userData.mobile, ...prevData]);
    } else {
      setErrors((prev) => ({...prev, mobileApp:'Mobile URL already exist.'}))
    }

  setUserData((prevData)=>({
    ...prevData,
    mobile:''
  }))

  }
  const removeButtonMob = (e, value) => {
    e.preventDefault()
    let data = mobileApp.filter((list) => list != value)

    setMobileApp(data);

  }
  const handleSocialChange = (e) => {
    e.preventDefault()
    if (!socialMedia.includes(userData.social)) {
      setSocialMedia(prevData => [userData.social, ...prevData]);
    } else {
      setErrors((prev) => ({...prev, socialMedia:'Social media URL already exist.'}))
    }

  setUserData((prevData)=>({
    ...prevData,
    social:''
  }))

  }
  const removeButtonSoc = (e, value) => {
    e.preventDefault()
    let data = socialMedia.filter((list) => list != value)

    setSocialMedia(data);

  }

  const handleChange = (e) => {
    e.preventDefault()
    const {name, value } = e.target
        
    setUserData((prevData)=>({
      ...prevData,
      [name]:value
  }))

  setErrors({})
  if(value !=''){
    setErrors((prev) => ({...prev, [name]:''}))
  }

  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setErrors({})

    if(website.length > 0) { } else {
      setErrors((prev) => ({...prev, website:'Website is required'}))
      return;
    }
    if(mobileApp.length > 0) { } else {
      setErrors((prev) => ({...prev, mobileApp:'Mobile app is required'}))
      return;
    }
    if(socialMedia.length > 0) { } else {
      setErrors((prev) => ({...prev, socialMedia:'Social media is required'}))
      return;
    }
    
    const url = '/api/associate-acc-info';
    const method = 'POST';
    $('.loaderouter').css('display', 'flex')
    const data = 
      {
        website:website, 
        mobileApp:mobileApp, 
        socialMedia:socialMedia, 
        user_id:globalUser.user._id

      }
    
    try {
      const response = await fetch(url, {
        method,
        body: JSON.stringify(data),
      });

      const result = await response.json();

      
     //console.log(result)

      if (response.ok) {
         
         if(!result.success && result.data.status_code && result.data.status_code == 400){
           // setErrors(result.data.errors);
            $('.loaderouter').css('display', 'none');
            return
         }

        
        //setMessage({ type: 'success', text: result.message });
        //fetchUserData(globalUser.user._id)
        //setFormData({ id: null, title: '', subtitle:'',  url:'', pid:'', photo: null,   status: 'Active', dropdownValues: {} });
        //toast.success(result.message);
        $('.loaderouter').css('display', 'none')
        // unselect all selected values

        router.push("/associate/website-n-mobile-aap")

        
        

      } else {
        $('.loaderouter').css('display', 'none')
        //setMessage({ type: 'error', text: result.message || 'Failed to save account information.' });
        toast.error(result.message);
      }
    } catch (error) {
      console.error('Error saving account information:', error);
      //setMessage({ type: 'error', text: 'An unexpected error occurred.' });
      toast.error(`Error: ${error.message}`);
    }
  };

  const fetchUserData = (user_id) => {
    //console.log('userssss', user_id)      
        $('.loaderouter').css('display', 'flex') 
          try{
          fetch(`${baseUrl}api/associate-acc-info?user_id=${user_id}`,{
            method:"GET"
          }).then((response)=>{
      
            if(!response.ok){
              //console.log('errrrrrrrrrrrr')
              $('.loaderouter').css('display', 'none') 
              //throw new Error("Network Error")
            }
            return response.json();
          }).then((res)=>{
            if(res.status){
              //console.log('okkkkkkkkk', res)
              //setUserData(res.data.user)
              setWebsite(res.data.user[0].website)
              setMobileApp(res.data.user[0].mobileApp)
              setSocialMedia(res.data.user[0].socialMedia)
              setShowSideBar(res.data.user[0]);
              setShowSideBarStatus(true)
            }
            $('.loaderouter').css('display', 'none') 
          })
        } catch (error) {
          console.error('Error saving profile:', error);
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
                        <div className="loaderouter"><div className="loader"></div></div> 
      
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="head_dfd">
              <h3 className="text-center blue">
                Create your Sellora Associate Account
              </h3>
            </div>
            <div className="row">
              
              <SideBare />
              
              
              <div className="col-lg-7">
                <div className="right_box">
                  <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                      <div className="text-center websit_heading">
                        Website and mobile aaps{" "}
                      </div>
                      <div className="dflo9">
                        <div className="orange_2">
                          Important: Please read these instructions carefully
                          before filling out this form.
                        </div>
                        <p>
                          List all the top-level websites and/or mobile apps
                          where you intend to display banners, widgets, special
                          links, or other ads as part of the Amazon Associates
                          program. You must include at least one website or
                          mobile app. A maximum of 50 websites or mobile apps
                          can be added.
                        </p>
                      </div>
                    </div>
                    <div className="form-container123 mt--50">
                      <div className="form-group">
                      <form onSubmit={handleWebsiteChange}>
                        <div className="row align-items-center">
                          
                          <div className="col-lg-4">
                            <label htmlFor="sku">Enter Your Website URL:</label>
                          </div>
                          <div className="col-lg-6 col-10">
                            <input type="url" name="website" id="website" value={userData.website}  onChange={handleChange} required />
                            {errors.website && ( 
                                              <div className='error_message'>{errors.website}</div>
                                          )}
                          </div>
                          <div className="col-lg-2 col-1">
                            <div className="add">
                              <button type="submit" className="button_next">Add</button>
                            </div>
                          </div>
                          

                        </div>
                        </form>
                        {website.length > 0 && 
                        <div className="row mt-3">
                                                
                          <div className="col-lg-4"> &nbsp; </div>
                          <div className="col-lg-8"> 
                            
                            {website.map((websiteList, index) => {
                              return (
                                <>

                                
                                <div style={{ display: 'ruby' }} key={`webb${index}`}>
                                <div className="select_values break_next" key={`web${index}`}>{websiteList} <span  onClick={(e) => removeButton(e, websiteList)}><i className="fa fa-trash"></i></span></div>
                                </div>
                                
                                
                                
                            </>
                              )

                            })}
                            
                            
                            
                            
                        </div>
             
                        </div>
                        }

                      </div>
                      <div className="form-group">
                      <form onSubmit={handleMobileChange}>
                        <div className="row align-items-center">
                          <div className="col-lg-4">
                            <label htmlFor="sku">
                              Enter Your Mobile App URL:
                            </label>
                          </div>
                          <div className="col-lg-6 col-10">
                            <input type="url" name="mobile" id="mobile" value={userData.mobile}  onChange={handleChange} required />
                            {errors.mobileApp && ( 
                                              <div className='error_message'>{errors.mobileApp}</div>
                                          )}
                          </div>
                          <div className="col-lg-2 col-1">
                            <div className="add">
                            <button type="submit" className="button_next">Add</button>
                            </div>
                          </div>
                        </div>
                        </form>
                        {mobileApp.length > 0 && 
                        <div className="row mt-3">
                                                
                          <div className="col-lg-4"> &nbsp; </div>
                          <div className="col-lg-8"> 
                            {mobileApp.map((mobileList, index) => {
                              return (
                                <>
                                 <div style={{ display: 'ruby' }} key={`mobB${index}`}>
                                <div className="select_values break_next" key={`mob${index}`}>{mobileList} <span  onClick={(e) => removeButtonMob(e, mobileList)}><i className="fa fa-trash"></i></span></div>
                                </div>
                            </>
                              )

                            })}
                            
                            
                            
                            
                        </div>
             
                        </div>
                        }
                      </div>
                      <div className="form-group">
                      <form onSubmit={handleSocialChange}>
                        <div className="row align-items-center">
                          <div className="col-lg-4">
                            <label htmlFor="sku">
                              Enter Your Social Media URL:
                            </label>
                          </div>
                          <div className="col-lg-6 col-10">
                            <input type="url" name="social" id="social" value={userData.social}  onChange={handleChange} required />
                            {errors.socialMedia && ( 
                                              <div className='error_message'>{errors.socialMedia}</div>
                                          )}
                          </div>
                          <div className="col-lg-2 col-1">
                            <div className="add">
                              <button type="submit" className="button_next">Add</button>
                            </div>
                          </div>
                        </div>
                        </form>
                        {socialMedia.length > 0 && 
                        <div className="row mt-3">
                                                
                          <div className="col-lg-4"> &nbsp; </div>
                          <div className="col-lg-8"> 
                            {socialMedia.map((socialList, index) => {
                              return (
                                <>
                                <div style={{ display: 'ruby' }} key={`socS${index}`}>
                                <div className="select_values break_next" key={`soc${index}`}>{socialList} <span  onClick={(e) => removeButtonSoc(e, socialList)}><i className="fa fa-trash"></i></span></div>
                                </div>
                            </>
                              )

                            })}
                            
                            
                            
                            
                        </div>
             
                        </div>
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="button_outer">
                    <ul>
                      <li className="tranasparent_bg">
                        <a href="#">Previous</a>
                      </li> &nbsp;
                      <li>
                        <a href="#" onClick={handleSubmit}>Save & Next</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
