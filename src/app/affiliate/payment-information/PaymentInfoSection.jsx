'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { userAppContaxt } from '@/app/contaxtData/userContaxtData';
import { baseUrl } from '@/Http/helper';
import $ from 'jquery'
import '../../../../public/front/loader.css'
import { ToastContainer, toast } from 'react-toastify';
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import { useRouter } from 'next/navigation';
import FileUpload from '../my-profile/FileUpload'
import Link from 'next/link';
import { citizenshipList } from '@/Http/citizenList';

function PaymentInfoSection() {
  
  
  const {globalUser} = useContext(userAppContaxt);
    const [user, setUser] = useState({})
    const [showPassword, setShowPassword] = useState(false)
        const [showConfirmPassword, setConfirmShowPassword] = useState(false)
        const router = useRouter();
      const phoneInputRef = useRef(null);   
      const [sendOtp, setSendOtp] = useState(0)
      const [errors, setErrors] = useState({})
      const [otpTime, setOtpTime] = useState(0)
      const [otpMinTime, setOtpMinTime] = useState(5)
      const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState('');
    const fileInputCloseRef = useRef(null);
    const [fileNameClose, setFileNameClose] = useState('');
     const [userData, setUserData] = useState({
        acc_holder_name:'',
        address:'',
        city:'',
        pin_code:'',
        country:'',
        account_no:'',
        ifsc_no:'',
        paypal_id:'',
        photo:'',
         
    })
    const formRef = useRef(null);
    const [citizenship, setCitizenship] = useState([])  
      
    const handleFileChange = (event) => {
      const { name} = event.target;
      const file = event.target.files[0];
      if (file && name=="photo") setFileName(file.name);
      //if (file && name=="photo_close") setFileNameClose(file.name);
      
      setUserData((prevData)=>({
        ...prevData,
        [name]:file
    }))
  
    };
  
    const handleButtonClick = () => {
      if (fileInputRef.current) fileInputRef.current.click();
    };
        
      
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

          if(name=='paypal_id'){ } else {
            setErrors((preError)=>({
              ...preError,
              [name]:!value?`${capitalizeFirstLetter(name).replace('_', ' ').replace('_', ' ')} is required`:''
          }))
        }
  
                     
  
      }

      function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
  
      const fetchUserData = (user_id) => {
        $('.loaderouter').css('display', 'flex') 
        try{
        fetch(`${baseUrl}api/aff-user/user-payment?user_id=${user_id}`,{
          method:"GET"
        }).then((response)=>{
    
          if(!response.ok){
            $('.loaderouter').css('display', 'none') 
            //throw new Error("Network Error")
          }
          return response.json();
        }).then((res)=>{
          if(res.status){
            //console.log(res.data.user)
            setUserData(res.data.user)
          }
          $('.loaderouter').css('display', 'none') 
        })
      } catch (error) {
        //console.error('Error saving profile:', error);
        //setMessage({ type: 'error', text: 'An unexpected error occurred.' });
        //toast.error(`Error: ${error.message}`);
      }
      }
      
      
      const handleSubmit = async (e) => {
        e.preventDefault(); 
        setErrors({})
        
        /* const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }
      */
        const formDataToSubmit = new FormData();
        formDataToSubmit.append('id', userData._id);
        formDataToSubmit.append('user_id', userData.user_id || globalUser.user._id);
        formDataToSubmit.append('acc_holder_name', userData.acc_holder_name || "");
        formDataToSubmit.append('address', userData.address || "");
        formDataToSubmit.append('pin_code', userData.pin_code || "");
        formDataToSubmit.append('city', userData.city || "");
        formDataToSubmit.append('country', userData.country || "");
        formDataToSubmit.append('account_no', userData.account_no || "");
        formDataToSubmit.append('ifsc_no', userData.ifsc_no || "");
        formDataToSubmit.append('paypal_id', userData.paypal_id || "");
                
        if (userData.photo) formDataToSubmit.append('photo', userData.photo);
        
        
    
        const url = '/api/aff-user/user-payment';
        const method = 'POST';
        $('.loaderouter').css('display', 'flex')
        try {
          const response = await fetch(url, {
            method,
            body: formDataToSubmit,
          });
    
          const result = await response.json();
    
          
         
    
          if (response.ok) {
             
             if(!result.success && result.data.status_code && result.data.status_code == 400){
                setErrors(result.data.errors);
                $('.loaderouter').css('display', 'none');
                return
             }
    
            
            //setMessage({ type: 'success', text: result.message });
            fetchUserData(globalUser.user._id)
            //setFormData({ id: null, title: '', subtitle:'',  url:'', pid:'', photo: null,   status: 'Active', dropdownValues: {} });
            toast.success("Payment information updated successfully.");
            $('.loaderouter').css('display', 'none')
            // unselect all selected values
            
    
            if(fileInputRef.current){
              fileInputRef.current = null;
            }
            
            
    
          } else {
            $('.loaderouter').css('display', 'none')
            setMessage({ type: 'error', text: result.message || 'Failed to save profile.' });
            toast.error(result.message);
          }
        } catch (error) {
          console.error('Error saving profile:', error);
          setMessage({ type: 'error', text: 'An unexpected error occurred.' });
          toast.error(`Error: ${error.message}`);
        }
      };
    
      function formatDate(dateStr) {
        if(dateStr){
        const date = new Date(dateStr);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
        const year = date.getFullYear();
      
        return `${year}-${month}-${day}`;
        }
      }
    useEffect(()=>{
            
      if(globalUser.user){ 
        fetchUserData(globalUser.user._id)
        
    }
       
    },[globalUser.user])
  
    useEffect(() => {
        setCitizenship(citizenshipList)
      },[])
  
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
            <h3 className="text-center">Payment Information</h3>
          </div> 
          <form onSubmit={handleSubmit} encType="multypart/form-data" ref={formRef}>
          <div className="form-container">
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="sku">Account Holder Name<span className='error_message'>*</span> : </label>
                </div>
                <div className="col-lg-8">
                <input 
                  type="text" 
                  name='acc_holder_name'
                  onChange={(e)=>hendleInputs(e)}
                  value={userData.acc_holder_name} />
                  {errors.acc_holder_name && ( 
                                              <div className='error_message'>{errors.acc_holder_name}</div>
                                          )}
                </div> 
              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="sale-price">Address<span className='error_message'>*</span> :</label>
                </div>
                <div className="col-lg-8">
                <input 
                  type="text" 
                  name='address'
                  onChange={(e)=>hendleInputs(e)}
                  value={userData.address} />
                  {errors.address && ( 
                                              <div className='error_message'>{errors.address}</div>
                                          )}
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="msrp">City<span className='error_message'>*</span> :</label>
                </div>
                <div className="col-lg-8">

                <input 
                  type="text" 
                  name='city'
                  onChange={(e)=>hendleInputs(e)}
                  value={userData.city} />
                  {errors.city && ( 
                                              <div className='error_message'>{errors.city}</div>
                                          )}

                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label>PIN Code<span className='error_message'>*</span> :</label>
                </div>
                <div className="col-lg-8">
                <input 
                  type="number" 
                  name='pin_code'
                  onChange={(e)=>hendleInputs(e)}
                  value={userData.pin_code} />
                  {errors.pin_code && ( 
                                              <div className='error_message'>{errors.pin_code}</div>
                                          )}
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="listing-status">Country<span className='error_message'>*</span> :</label>
                </div>
                <div className="col-lg-8">
                <select 
                  name="country" 
                  value={userData.country}
                  onChange={(e)=>hendleInputs(e)}
                  >
                    <option value="">Select</option>
                      {citizenship && citizenshipList.map((list, index) => {
                      
                                            return (
                                            <option value={list}>{list}</option>
                                            )})}
                  </select>
                  {errors.country && ( 
                      <div className='error_message'>{errors.country}</div>
                  )}
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="listing-status">Bank A/C Number<span className='error_message'>*</span> :</label>
                </div>
                <div className="col-lg-8">
                <input 
                  type="number" 
                  name='account_no'
                  onChange={(e)=>hendleInputs(e)}
                  value={userData.account_no} />
                  {errors.account_no && ( 
                                              <div className='error_message'>{errors.account_no}</div>
                                          )}
                </div>

              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="listing-status">IFSC Number<span className='error_message'>*</span> :</label>
                </div>
                <div className="col-lg-8">
                <input 
                  type="text" 
                  name='ifsc_no'
                  onChange={(e)=>hendleInputs(e)}
                  value={userData.ifsc_no} />
                  {errors.ifsc_no && ( 
                                              <div className='error_message'>{errors.ifsc_no}</div>
                                          )}
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="listing-status">PayPal Id :</label>
                </div>
                <div className="col-lg-8">
                <input 
                  type="text" 
                  name='paypal_id'
                  onChange={(e)=>hendleInputs(e)}
                  value={userData.paypal_id} />
                  {errors.paypal_id && ( 
                                              <div className='error_message'>{errors.paypal_id}</div>
                                          )}
                </div>
              </div>
            </div>

            <div className="form-group">
                  <div className="row align-items-center">
                    <div className="col-lg-4">
                      <label htmlFor="listing-status">Bank Statement<span className='error_message'>*</span> :</label>
                    </div>
                    <div className="col-lg-8">
                      <div className="form-group">
                        <input
                          type="file"
                          ref={fileInputRef}
                          name="photo"
                          onChange={handleFileChange}
                          className="d-none"
                        />
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          value={fileName}
                          readOnly
                          style={{ float: 'left', width: '70%', marginRight: '-5px' }}
                        />
                        <button
                          className="browse btn-primary"
                          type="button"
                          onClick={handleButtonClick}
                          style={{ float: 'left', width: '30%', height: '40px' }}
                        >
                          Upload
                        </button>
                      </div>
                      <span class="text-danger"><strong>Note:</strong> Allowed file types: .jpg, .png, .pdf. Maximum file size: 10MB.</span>
                      <br></br>      
                      {userData.photo && typeof userData.photo ==="string" ?( 
                                      <a href={`${baseUrl}${userData.photo}`} target="_blank" style={{color:'#333383'}}>View Image</a>
                                      ):''}
            
            {errors.photo && (
                                        <span className="error_message">{errors.photo}</span>
                                      )}
                    </div>
                  </div>
                </div>
            {/* <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="listing-status">Bank Statement :</label>
                </div>
                <div className="col-lg-8">
                  <div className="form-group" x-data="{ fileName: '' }">
                    <input type="file" x-ref="file" @change="fileName = $refs.file.files[0].name" name="img[]"
                      className="d-none">
                    <input type="text" className="form-control form-control-lg" x-model="fileName"
                      style="float: left; width: 70%; margin-right: -5px;">
                    <button className="browse btn-primary" type="button" x-on:click.prevent="$refs.file.click()"
                      style="float: left; width: 30%; height: 50px;"> Upload</button>
                  </div>
                </div>
              </div>
            </div>  */}
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4"> </div>
                <div className="col-lg-8">
                  <div className="blue_button">
                    <ul>
                      <li><button className='profile_button'  type="submit">Update</button></li>
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

export default PaymentInfoSection