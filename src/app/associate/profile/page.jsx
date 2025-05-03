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
  const [userData, setUserData] = useState({});
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
            //console.log(res.data.user)
            setUserData(res.data.user);
            //setCheckBoxVal(res.data.user.web_type)
          }
          $(".loaderouter").css("display", "none");
        });
    } catch (error) {
      //console.error('Error saving profile:', error);
      //setMessage({ type: 'error', text: 'An unexpected error occurred.' });
      //toast.error(`Error: ${error.message}`);
    }
  };

  const fetchUserDetail = (user_id) => {
        //$('.loaderouter').css('display', 'flex') 
        fetch(`${baseUrl}api/aff-user/user-detail?user_id=${user_id}`,{
          method:"GET"
        }).then((response)=>{
    
          if(!response.ok){
            //$('.loaderouter').css('display', 'none') 
            throw new Error("Network Error")
          }
          return response.json();
        }).then((res)=>{
          if(res.status){
            //console.log(res.data.user)
            setUser(res.data.user)
          }
          $('.loaderouter').css('display', 'none') 
        })
      }

  useEffect(() => {
        if (globalUser.user) {
          //console.log(globalUser.user)
          fetchUserData(globalUser.user._id);
          fetchUserDetail(globalUser.user._id)

        }
      },
      [globalUser.user]
    );

    const handleBack = (e) => {
      e.preventDefault();
      router.push("/associate/website-n-mobile-aap")
    }

    const handleFinish = async (e) => {
      e.preventDefault();

      const url = '/api/associate-store-finish';
          const method = 'POST';
          $('.loaderouter').css('display', 'flex')
          const data = 
            {
               
              id:userData._id
      
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
      
              
              
              $('.loaderouter').css('display', 'none')
              // unselect all selected values
      
              router.push("/associate/profit-summary")
      
              
              
      
            } else {
              $('.loaderouter').css('display', 'none')
              //setMessage({ type: 'error', text: result.message || 'Failed to save account information.' });
              //toast.error(result.message);
            }
          } catch (error) {
            //console.error('Error saving account information:', error);
            //setMessage({ type: 'error', text: 'An unexpected error occurred.' });
            //toast.error(`Error: ${error.message}`);
          }
    }

  return (
    <>
      <div className="pull-right position_absolute">Store:{userData.store_id}</div>
      
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
      <div className="">
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
                      <div className="col-lg-8 offset-lg-2">
                        <div className="text-center websit_heading">
                          Congrats, {user.first_name} {user.last_name}
                          <p>
                            Thank you for applying to the Sellora Associates
                            Program Your unique Associate ID is{" "}
                            <span>{userData.store_id}</span> Keep this ID secure, as
                            you may need it to verify your account.
                          </p>
                        </div>
                      </div>
                      <div className="list-group_3463478">
                        <ul>
                          <li>
                            Your application will be reviewed after you have
                            referred the required number of qualified sales to
                            Sellora.com
                          </li>
                          <li>
                            In the meantime, you now have full access to the
                            Associates Central platform 24/7
                          </li>
                          <li>
                            Important: If your affiliate links do not generate
                            the minimum qualified sales within 180 days, your
                            application and access to the Associates Program
                            will be withdrawn.
                          </li>
                        </ul>
                        <div className="started_we">
                          <p>
                            Get started today, and we look forward to seeing
                            Sellera grow with the Associates Program!
                          </p>
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
                          <a href="#" onClick={handleFinish}>Finish</a>
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
    </>
  );
}

export default page;
