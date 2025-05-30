"use client"
import React, { useRef, useState } from 'react'

function CheckGSTRegistered() {

      const formRef = useRef(null); 
      const [isLoading, setIsLoading] = useState(false);
      const [errors, setErrors] = useState({});
     const [formData, setFormData] = useState({
            gstin_no:"", 
            email:"", 
        });

  const hendleInput=(e)=>{
        const {name, value} = e.target;  
        setFormData((preData)=>({
            ...preData,
            [name]:value
        }))
    }

    // const hendle submit
    function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true) 
        setErrors({}) 

        fetch('/api/affiliate/check-gstin-register',{
            method:"POST",
            body:JSON.stringify(formData)
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
              <h3>Check if EIN/GSTIN is registered on Sellora</h3>
              <div className="registration_form_single-input">
                <input type="text" placeholder="Enter EIN/GSTIN"
                name='gstin_no'
                value={formData?.gstin_no || ""}
                onChange={(e)=>hendleInput(e)}
                />
                 
              </div>

               <div className="registration_form_single-input"> 
                    <h5 className='' style={{color:'#ff6e35', fontWeight:700}}>OR</h5> 
              </div>
              <div className="registration_form_single-input">
                <input type="email" placeholder="Enter Email Id" 
                 name='email'
                value={formData?.email || ""}
                onChange={(e)=>hendleInput(e)}
                />
              
              </div>

               <div className="registration_form_single-input">
                {errors.error && ( 
                    <div className='error_message' style={{width:'100%'}}>{errors.error}</div>
                )} 
              </div>
                
               
              <button className="save" disabled={isLoading}>{isLoading?"Submiting..":"Submit"}</button>
            </div>
             </form>
          </div>
  )
}

export default CheckGSTRegistered