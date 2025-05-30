"use client"
import React, { useEffect, useRef, useState } from 'react'
import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import 'parsleyjs';
import 'parsleyjs/src/parsley.css';

const SupplierInvite = React.memo(() => {

     const phoneInputRef = useRef(null);   
      const formRef = useRef(null);
     const [isLoading, setIsLoading] = useState(false);
      const [errors, setErrors] = useState({});
    const [inviteData, setInviteData] = useState({
        name:"",
        mobile:"",
        email:"",

        country_s_name:"us",
        mobile_code:"1"
    });


      useEffect(() => {
        const input = document.querySelector('#phone');
    
        if (input) {
        const iti = intlTelInput(phoneInputRef.current, {
            initialCountry: inviteData && inviteData.country_s_name?inviteData.country_s_name:'us',
            separateDialCode: true,
            // utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js', 
        });
    
        
        const onCountryChange = () => {
            const selectedCountryData = iti.getSelectedCountryData();  
            setInviteData((preData)=>({
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
    }, [setInviteData, inviteData?.country_s_name]);


    const hendleInput=(e)=>{
        const {name, value} = e.target; 

            if(name == "mobile"){
            const numericValue = value.replace(/[^0-9]/g, "");
                setInviteData((preData)=>({
                ...preData,
                [name]:numericValue
            })) 
           
                setErrors((prevData)=>({
                    ...prevData,
                    [name]:!numericValue?`${name} is required.`:""
                }))
         
            return
        }

        setInviteData((preData)=>({
            ...preData,
            [name]:value
        }))

         setErrors((prevData)=>({
            ...prevData,
            [name]:!value?`${name} is required.`:""
        }))
    }


    // parsley validation
     useEffect(() => {
        if (formRef.current) {
        window.$(formRef.current).parsley();
        }
    }, []);

    // const hendle submit
    function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true) 
        setErrors({}) 

        fetch('/api/affiliate/supplier-invite',{
            method:"POST",
            body:JSON.stringify(inviteData)
        }).then((response)=>{
            if(!response.ok){
                 setIsLoading(false)
                throw new Error("Network Error");
            }
            return response.json();
        }).then((res)=>{
             setIsLoading(false)
             if(res.status){

             }else if(res.data.status_code == 400){
                setErrors(res.data.errors)
             }
        })

    }
  return (
      <div className="col-lg-4">
        <form ref={formRef} onSubmit={(e)=>handleSubmit(e)}>

            <div className="form_outer_23458">
              <h3>Invite supplier to Sellora</h3>
              <div className="registration_form_single-input">
                <input type="text" 
                placeholder="First Name" 
                name='name'
                value={inviteData?.name || ""}
                onChange={(e)=>hendleInput(e)} 
                
                />
                {errors.name && ( 
                    <span className='error_message'>{errors.name}</span>
                )}
              </div>
              <div className="registration_form_single-input">
                <input type="text" placeholder="Mobile Number" 
                ref={phoneInputRef}
                 id="phone"
                 name='mobile'
                value={inviteData?.mobile || ""}
                onChange={(e)=>hendleInput(e)} 
                
                />
                  {errors.mobile && ( 
                    <span className='error_message'>{errors.mobile}</span>
                )}
              </div>
              <div className="registration_form_single-input">
                <input type="email" placeholder="Email Id" 
                name='email'
                value={inviteData?.email || ""}
                onChange={(e)=>hendleInput(e)} 
                
                />
                
                  {errors.email && ( 
                    <span className='error_message' >{errors.email}</span>
                )}
              </div>
              <div className="mt-5 d-flex" >
              <button className="save" disabled={isLoading}> {isLoading?"Sending..":"Send Invite"}</button>
              </div>  
            </div>
            </form>
          </div>
  )
});

export default SupplierInvite