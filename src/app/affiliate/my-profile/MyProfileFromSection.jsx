'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import FileUpload from './FileUpload'
import { userAppContaxt } from '@/app/contaxtData/userContaxtData';
import { baseUrl } from '@/Http/helper';
import $ from 'jquery'
import '../../../../public/front/loader.css'
import { ToastContainer, toast } from 'react-toastify';
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { citizenshipList } from '@/Http/citizenList';

function MyProfileFromSection() {
  
  
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
      first_name:'',
      last_name:'',
      mobile:'',
      email:'',
      password:'',
      confirm_password:'',
      program:'',
      country:'',
      mobile_code:'1',
      country_s_name:'us',
      tax_name:'EIN No.' 
  })
  const formRef = useRef(null);  
  const [citizenship, setCitizenship] = useState([])
    
  const handleFileChange = (event) => {
    const { name} = event.target;
    const file = event.target.files[0];
    if (file && name=="photo") setFileName(file.name);
    if (file && name=="photo_close") setFileNameClose(file.name);
    
    setUserData((prevData)=>({
      ...prevData,
      [name]:file
  }))

  };

  const handleButtonClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };
  const handleButtonClickClose = () => {
    if (fileInputCloseRef.current) fileInputCloseRef.current.click();
  };    
    
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
        
        if(name=='business_name'){ } else {
        setErrors((preError)=>({
          ...preError,
          [name]:!value?`${capitalizeFirstLetter(name).replace('_', ' ')} is required`:''
      }))
    }

                   

    }

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const fetchUserData = (user_id) => {
      $('.loaderouter').css('display', 'flex') 
      fetch(`${baseUrl}api/aff-user/user-detail?user_id=${user_id}`,{
        method:"GET"
      }).then((response)=>{
  
        if(!response.ok){
          $('.loaderouter').css('display', 'none') 
          throw new Error("Network Error")
        }
        return response.json();
      }).then((res)=>{
        if(res.status){
          //console.log(res.data.user)
          setUserData(res.data.user)
        }
        $('.loaderouter').css('display', 'none') 
      })
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
      formDataToSubmit.append('first_name', userData.first_name || "");
      formDataToSubmit.append('last_name', userData.last_name || "");

      formDataToSubmit.append('mobile', userData.mobile || "");
      formDataToSubmit.append('mobile_code', userData.mobile_code || "");
      formDataToSubmit.append('country_s_name', userData.country_s_name || "");
      formDataToSubmit.append('sex', userData.sex || "");
      formDataToSubmit.append('birth_date', userData.birth_date || "");
      formDataToSubmit.append('nationality', userData.nationality || "");
      formDataToSubmit.append('business_name', userData.business_name || "");
      formDataToSubmit.append('tax_id', userData.tax_id || "");
      formDataToSubmit.append('tax_name', userData.tax_name || "");
      formDataToSubmit.append('education', userData.education || "");
      formDataToSubmit.append('emp_status', userData.emp_status || "");
      formDataToSubmit.append('household_income', userData.household_income || "");
      formDataToSubmit.append('language', userData.language || "");
      formDataToSubmit.append('contact_lense', userData.contact_lense || "");
      
      if (userData.photo) formDataToSubmit.append('photo', userData.photo);
      if (userData.photo_close) formDataToSubmit.append('photo_close', userData.photo_close);
      
  
      const url = '/api/aff-user/user-update';
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
          toast.success("Profile updated successfully.");
          $('.loaderouter').css('display', 'none')
          // unselect all selected values
          
  
          if(fileInputRef.current){
            fileInputRef.current = null;
          }
          if(fileInputCloseRef.current){
            fileInputCloseRef.current = null;
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
            <h3 className="text-center">My Profile</h3>
          </div> 
          <form onSubmit={handleSubmit} encType="multypart/form-data" ref={formRef}>
          <div className="form-container">
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="sku">Name<span className='error_message'>*</span> : </label>
                </div>
                <div className="col-lg-4 col-6">
                  <input 
                  type="text" 
                  placeholder="First Name" 
                  name='first_name'
                  onChange={(e)=>hendleInputs(e)}
                  value={userData.first_name} />
                  {errors.first_name && ( 
                                              <div className='error_message'>{errors.first_name}</div>
                                          )}
                </div>
                <div className="col-lg-4 col-6">
                  <input 
                  type="text" 
                  placeholder="Last Name" 
                  name='last_name'
                  onChange={(e)=>hendleInputs(e)}
                  value={userData.last_name} 
                  
                  />
                  {errors.last_name && ( 
                                              <div className='error_message'>{errors.last_name}</div>
                                          )}
                </div>
              </div>
            </div>
            { /* <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="sale-price">Email ID :</label>
                </div>
                <div className="col-lg-8">
                  <input 
                  type="text"
                  name='email'
                  onChange={(e)=>hendleInputs(e)} 
                  value={userData.email} />
                  {errors.email && ( 
                      <div className='error_message'>{errors.email}</div>
                                          )}
                </div>
              </div>
            </div>
            */ }
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="msrp">Mobile Number<span className='error_message'>*</span> :</label>
                </div>
                <div className="col-lg-8">

                  <div className="country_code_outer">
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
              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="business-price">Sex<span className='error_message'>*</span> :</label>
                </div>
                <div className="col-lg-8">
                  <div className="discount-type">
                    <label>
                      <input type="radio" name="sex" value="Male" onChange={(e)=>hendleInputs(e)} checked={userData.sex=='Male'?'checked':''}   />
                      &nbsp; Male</label>
                    <label>
                      <input type="radio" name="sex" value="Female" onChange={(e)=>hendleInputs(e)} checked={userData.sex=='Female'?'checked':''} />
                      &nbsp; Female</label>
                  </div>
                  {errors.sex && ( 
                                              <div className='error_message'>{errors.sex}</div>
                                          )}
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="listing-status">Date Of Birth<span className='error_message'>*</span> :</label>
                </div>
                <div className="col-lg-8">
                  <input 
                  type="date"           
                  name='birth_date'
                  onChange={(e)=>hendleInputs(e)} 
                  value={formatDate(userData.birth_date)} />
                  {errors.birth_date && ( 
                      <div className='error_message'>{errors.birth_date}</div>
                  )}
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="listing-status">Nationality<span className='error_message'>*</span> :</label>
                </div>
                <div className="col-lg-8">
                  <select 
                  name="nationality" 
                  value={userData.nationality}
                  onChange={(e)=>hendleInputs(e)}
                  >
                    <option value="">Select</option>
                      {citizenship && citizenshipList.map((list, index) => {

                      return (
                      <option value={list}>{list}</option>
                      )})}
                  </select>
                  {errors.nationality && ( 
                      <div className='error_message'>{errors.nationality}</div>
                  )}
                </div>

              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="listing-status">Business Name: (Optional)
                  </label>
                </div>
                
                
                
                <div className="col-lg-8">
                  <input type="text" 
                  name='business_name'
                  onChange={(e)=>hendleInputs(e)} 
                  value={userData.business_name} />
                  {errors.business_name && ( 
                      <div className='error_message'>{errors.business_name}</div>
                  )}
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="listing-status">Tax ID<span className='error_message'>*</span> :</label>
                </div>
                <div className="col-lg-6 col-6" style={{paddingRight:'0px', marginRight: '-7px', background: '#fff'}}>

                  <input 
                  type="text" 
                  name='tax_id'
                  onChange={(e)=>hendleInputs(e)} 
                  value={userData.tax_id} />
                  {errors.tax_id && ( 
                      <div className='error_message'>{errors.tax_id}</div>
                  )}


                </div>

                <div className="col-lg-2 col-2" style={{paddingLeft: '0px', background:'#fff'}}>


                  <select style={{borderRadius: '0px 6px 6px 0px !important'}}
                  name='tax_name'
                  onChange={(e)=>hendleInputs(e)} 
                  value={userData.tax_name}
                  >
                    
                    <option value="EIN No.">EIN No.</option>
                    <option value="TIN No.">TIN No.</option>
                    <option value="GSTIN / PAN CARD">GSTIN / PAN CARD</option>
                  </select>
                  
                </div>

                

              </div>
              {errors.tax_name && ( 
                      <div className='error_message'>{errors.tax_name}</div>
                  )}
            </div>
            { /* <FileUpload heading={"Attach Document"}/> */ }
            <div className="form-group">
      <div className="row align-items-center">
        <div className="col-lg-4">
          <label htmlFor="listing-status">Attach Document<span className='error_message'>*</span> :</label>
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
            
            


            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="listing-status">Education<span className='error_message'>*</span> :</label>
                </div>
                <div className="col-lg-8">
                  <div className="form-group">
                    <input 
                    type="text" 
                    name='education'
                  onChange={(e)=>hendleInputs(e)} 
                  value={userData.education} />
                  {errors.education && ( 
                      <div className='error_message'>{errors.education}</div>
                  )}
                  </div>
                </div>
              </div>
            </div>



            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="listing-status">Employment Status<span className='error_message'>*</span> :</label>
                </div>
                <div className="col-lg-8">
                  <div className="form-group">
                    <input 
                    type="text" 
                    name='emp_status'
                  onChange={(e)=>hendleInputs(e)} 
                  value={userData.emp_status} />
                  {errors.emp_status && ( 
                      <div className='error_message'>{errors.emp_status}</div>
                  )}
                  </div>
                </div>
              </div>
            </div>



            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="listing-status">Annual Household Income<span className='error_message'>*</span> :</label>
                </div>
                <div className="col-lg-8">
                  <div className="form-group">
                    <input 
                    type="text" 
                    name='household_income'
                  onChange={(e)=>hendleInputs(e)} 
                  value={userData.household_income} />
                  {errors.household_income && ( 
                      <div className='error_message'>{errors.household_income}</div>
                  )}
                  </div>
                </div>
              </div>
            </div>


            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="listing-status">Language<span className='error_message'>*</span> :</label>
                </div>
                <div className="col-lg-8">
                  <div className="form-group">
                    <input 
                    type="text" 
                    name='language'
                    onChange={(e)=>hendleInputs(e)} 
                    value={userData.language} />
                    {errors.language && ( 
                        <div className='error_message'>{errors.language}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="business-price">Wear spectacles/Contact
                    lenses<span className='error_message'>*</span> :</label>
                </div>
                <div className="col-lg-8">
                  <div className="discount-type">
                    <label>
                      <input type="radio" name="contact_lense" value="Yes" onChange={(e)=>hendleInputs(e)} checked={userData.contact_lense=='Yes'?'checked':''}   />
                      Yes</label>
                    <label>
                      <input type="radio" name="contact_lense" value="No" onChange={(e)=>hendleInputs(e)} checked={userData.contact_lense=='No'?'checked':''} />
                      No</label>
                  </div>
                  {errors.contact_lense && ( 
                                              <div className='error_message'>{errors.contact_lense}</div>
                                          )}
                </div>
              </div>
            </div>


            { /* <FileUpload heading={"Close-up Photo"}/> */ }
            <div className="form-group">
      <div className="row align-items-center">
        <div className="col-lg-4">
          <label htmlFor="listing-status">Close-up Photo<span className='error_message'>*</span> :</label>
        </div>
        <div className="col-lg-8">
          <div className="form-group">
            <input
              type="file"
              ref={fileInputCloseRef}
              name="photo_close"
              onChange={handleFileChange}
              className="d-none"
            />
            <input
              type="text"
              className="form-control form-control-lg"
              value={fileNameClose}
              readOnly
              style={{ float: 'left', width: '70%', marginRight: '-5px' }}
            />
            <button
              className="browse btn-primary"
              type="button"
              onClick={handleButtonClickClose}
              style={{ float: 'left', width: '30%', height: '40px' }}
            >
              Upload
            </button>
          </div>
          <span class="text-danger"><strong>Note:</strong> Allowed file types: .jpg, .png. Maximum file size: 10MB.</span>
          <br></br>
          {userData.photo_close && typeof userData.photo_close ==="string" ?( 
                          <a href={`${baseUrl}${userData.photo_close}`} target="_blank" style={{color:'#333383'}}>View Image</a>
                          ):''}

{errors.photo_close && (
                            <span className="error_message">{errors.photo_close}</span>
                          )}
        </div>
      </div>
    </div>        
            {/* <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="listing-status">Close-up Photo :</label>
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
            </div> */}
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

export default MyProfileFromSection