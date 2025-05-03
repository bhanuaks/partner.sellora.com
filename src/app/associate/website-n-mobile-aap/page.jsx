"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import SideBare from "../SideBare";
import { toast, ToastContainer } from "react-toastify";
import "../../../../public/front/loader.css";
import { userAppContaxt } from "@/app/contaxtData/userContaxtData";
import $ from "jquery";
import { baseUrl } from "@/Http/helper";
import { useRouter } from "next/navigation";

function page() {
  const {globalUser} = useContext(userAppContaxt);
  const [user, setUser] = useState({});
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    store_id: "",
    web_about: "",
    web_type: "",
    web_hear: "",
    agree:""
    
  });
  const [checkBoxVal, setCheckBoxVal] = useState([])
  
  const formRef = useRef(null);
  

  function hendleInputs(e) {
    const { name, value, checked } = e.target;
    
    //console.log(checked)
    
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));

//console.log(userData)
    
  }
  function hendleInputsCheckbox(e) {
    const { name, value, checked } = e.target;
    
    //console.log(checked)
    if(checked){
    setCheckBoxVal(prevData => ([
      ...prevData, value
    ]));

  } else {
    let data = checkBoxVal.filter((list) => list != value)
    setCheckBoxVal(data);
  }

//console.log(userData)
    
  }



  const fetchUserData = user_id => {
    $(".loaderouter").css("display", "flex");
    try {
      fetch(`${baseUrl}api/associate-acc-store?user_id=${user_id}`, {
        method: "GET"
      })
        .then(response => {
          if (!response.ok) {
            $(".loaderouter").css("display", "none");
            //throw new Error("Network Error")
          }
          return response.json();
        })
        .then(res => {
          if (res.status) {
            //console.log('kkkkkkkkkkkkkkkkkk', res.data.user.web_type)
            setUserData(res.data.user);
            if(res.data.user.web_type){
            setCheckBoxVal(res.data.user.web_type)
            }
          }
          $(".loaderouter").css("display", "none");
        });
    } catch (error) {
      
      //console.error('Error saving profile:', error);
      //setMessage({ type: 'error', text: 'An unexpected error occurred.' });
      //toast.error(`Error: ${error.message}`);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setErrors({});
    //console.log(checkBoxVal)
    /* const validationErrors = validate();
          if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
          }
        */
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("id", userData._id);
    formDataToSubmit.append("user_id", userData.user_id || globalUser.user._id);
    formDataToSubmit.append("store_id", userData.store_id || "");
    formDataToSubmit.append("web_about", userData.web_about || "");
    formDataToSubmit.append("web_hear", userData.web_hear || "");
    formDataToSubmit.append("web_type", checkBoxVal || "");
    formDataToSubmit.append("agree", userData.agree || "");
    const url = "/api/associate-acc-store";
    const method = "POST";
    $(".loaderouter").css("display", "flex");
    try {
      const response = await fetch(url, {
        method,
        body: formDataToSubmit
      });

      const result = await response.json();

      if (response.ok) {
        if (
          !result.success &&
          result.data.status_code &&
          result.data.status_code == 400
        ) {
          setErrors(result.data.errors);
          $(".loaderouter").css("display", "none");
          return;
        }

        //setMessage({ type: 'success', text: result.message });
        fetchUserData(globalUser.user._id);
        //setFormData({ id: null, title: '', subtitle:'',  url:'', pid:'', photo: null,   status: 'Active', dropdownValues: {} });
        toast.success("Profile information updated successfully.");
        $(".loaderouter").css("display", "none");
        // unselect all selected values
        router.push("/associate/profile")

        
      } else {
        $(".loaderouter").css("display", "none");
        setMessage({
          type: "error",
          text: result.message || "Failed to save profile."
        });
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error saving profile:", error);
      setMessage({ type: "error", text: "An unexpected error occurred." });
      toast.error(`Error: ${error.message}`);
    }
  };

  
  useEffect(() => {
      if (globalUser.user) {
        fetchUserData(globalUser.user._id);
      }
    },
    [globalUser.user]
  );

  const handleBack = (e) => {
    e.preventDefault()
    router.push("/associate/account-information")
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
              <form onSubmit={handleSubmit} encType="multypart/form-data" ref={formRef}>
                <div className="right_box">
                  <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                      <div className="text-center websit_heading">
                        Profile
                        <p>
                          Important: Please read these instructions before you
                          fill this form
                        </p>
                      </div>
                    </div>
                    <div className="form-container55 mt--10">
                      <div className="form-group">
                        <div className="row">
                          <div className="col-lg-8">
                            <label htmlFor="sku">
                              What is your preferred Associates Store ID?{" "}
                              <span>*</span>
                            </label>
                          </div>
                          <div className="col-lg-8">
                            <input type="text" placeholder="Sellora"
                            
                            name='store_id'
                            onChange={(e)=>hendleInputs(e)}
                            value={userData.store_id} />
                            {errors.store_id && ( 
                                              <div className='error_message'>{errors.store_id}</div>
                                          )}
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row align-items-center">
                          <div className="col-lg-8">
                            <label htmlFor="sku">
                              What are your websites or mobile apps about?{" "}
                              <span>*</span>
                            </label>
                          </div>
                          <div className="col-lg-8">
                            <input type="text" name='web_about'
                            onChange={(e)=>hendleInputs(e)}
                            value={userData.web_about} />
                            {errors.web_about && ( 
                                              <div className='error_message'>{errors.web_about}</div>
                                          )}
                          </div>
                        </div>
                      </div>
                      <div className="text_e4r43">
                        <p>
                          What can users do on your website or mobile app, who
                          is it for, and
                          <br />
                          what kind of products do you intend to promote?
                        </p>
                      </div>
                      <p />
                      <div className="form-group">
                        <div className="row align-items-center">
                          <div className="col-lg-8">
                            <label htmlFor="sku">
                              What type are your websites or mobile apps?
                              <span>*</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <table className="table_34">
                        <tbody>
                          <tr>
                            <td><label><input type="checkbox" name="web_type" value="Blog" checked={checkBoxVal?.includes('Blog') ? 'checked': ''} onChange={(e)=>hendleInputsCheckbox(e)} /> Blog</label></td>
                            <td><label><input type="checkbox" name="web_type" value="Comparison Shopping Engine" onChange={(e)=>hendleInputsCheckbox(e)} checked={checkBoxVal?.includes('Comparison Shopping Engine') ? 'checked':''} /> Comparison Shopping Engine</label></td>
                          </tr>
                          <tr>
                            <td><label><input type="checkbox" name="web_type" value="Content Website" onChange={(e)=>hendleInputsCheckbox(e)} checked={checkBoxVal?.includes('Content Website') ? 'checked':''} /> Content Website</label></td>
                            <td><label><input type="checkbox" name="web_type" value="Coupons or Deals Website" onChange={(e)=>hendleInputsCheckbox(e)} checked={checkBoxVal?.includes('Coupons or Deals Website') ? 'checked':''} /> Coupons or Deals Website</label></td>
                          </tr>
                          <tr>
                            <td><label>
                            <input type="checkbox" name="web_type" value="Manufacturer/Author with Products Listed on sellora.com" onChange={(e)=>hendleInputsCheckbox(e)} checked={checkBoxVal?.includes('Manufacturer/Author with Products Listed on sellora.com') ? 'checked':''} /> Manufacturer/Author with Products Listed on
                              sellora.com</label>
                            </td>
                            <td><label><input type="checkbox" name="web_type" value="Non Profit or Charitable Organisation" onChange={(e)=>hendleInputsCheckbox(e)} checked={checkBoxVal?.includes('Non Profit or Charitable Organisation') ? 'checked':''} /> Non Profit or Charitable Organisation</label></td>
                          </tr>
                          <tr>
                            <td><label><input type="checkbox" name="web_type" value="Social Media Page/Group" onChange={(e)=>hendleInputsCheckbox(e)} checked={checkBoxVal?.includes('Social Media Page/Group') ? 'checked':''} /> Social Media Page/Group</label></td>
                            <td><label><input type="checkbox" name="web_type" value="Web browser" onChange={(e)=>hendleInputsCheckbox(e)} checked={checkBoxVal?.includes('Web browser') ? 'checked':''} /> Web browser</label></td>
                          </tr>
                        </tbody>

                       
                      </table>
                      {errors.web_type && ( 
                                              <div className='error_message'>{errors.web_type}</div>
                                          )}
                      <div className="form-group">
                        <div className="row align-items-center">
                          <div className="col-lg-8">
                            <label htmlFor="sku">
                              How did you hear about us? <span>*</span>
                            </label>
                          </div>
                          <div className="col-lg-8">
                            <select name='web_hear'
                            onChange={(e)=>hendleInputs(e)}
                            value={userData.web_hear}>
                              <option>Select</option>
                              <option value="Google">Google</option>
                              <option value="LinkedIn">LinkedIn</option>
                              <option value="Facebook">Facebook</option>
                            </select>
                          </div>
                          {errors.web_hear && ( 
                                              <div className='error_message'>{errors.web_hear}</div>
                                          )}
                        </div>
                      </div>
                      <div className="text_3448">
                        <p>
                          By entering the characters shown in the box, you help
                          Sellora prevent automated or scripted submissions.
                          This helps us safeguard against fraud and abuse,
                          ensuring we maintain a secure and high-quality
                          experience for all our users.
                        </p>
                        <div className="note_er">
                          <label>
                            <input
                              type="checkbox"
                              disabled=""
                              defaultChecked=""
                              name="agree"
                              value="1"
                              checked={userData.agree==1?'checked':''}
                              onChange={(e)=>hendleInputs(e)}
                            />{" "}
                            You agree to the terms and conditions of the
                            Associates Program Operating Agreement
                          </label>
                          {errors.agree && ( 
                                              <div className='error_message'>{errors.agree}</div>
                                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="button_outer">
                    <ul>
                      <li className="tranasparent_bg">
                        <a href="#" onClick={handleBack}>Previous</a>
                      </li> &nbsp;
                      <li>
                        <button type="submit" className="button_next">Save & Next</button>
                      </li>
                    </ul>
                  </div>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
