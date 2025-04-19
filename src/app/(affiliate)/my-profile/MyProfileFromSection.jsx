import React from 'react'
import FileUpload from './FileUpload'

function MyProfileFromSection() {
  return (
    <div className="">
    <div className="container">
      <div className="row"> 
        <div className="col-lg-8 offset-lg-2"> 
          <div className="head_dfd">
            <h3 className="text-center">My Profile</h3>
          </div> 
          <div className="form-container">
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="sku">Name : </label>
                </div>
                <div className="col-lg-4 col-6">
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="col-lg-4 col-6">
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="sale-price">Email ID :</label>
                </div>
                <div className="col-lg-8">
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="msrp">Mobile Number :</label>
                </div>
                <div className="col-lg-8">

                  <div className="country_code_outer">
                    <input type="text" id="mobile_code" placeholder=" " name="name" />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="business-price">Sex :</label>
                </div>
                <div className="col-lg-8">
                  <div className="discount-type">
                    <label>
                      <input type="radio" name="discount-type3" value=""   />
                      Male</label>
                    <label>
                      <input type="radio" name="discount-type3" value="" />
                      Female</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="listing-status">Date Of Birth :</label>
                </div>
                <div className="col-lg-8">
                  <input type="date" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="listing-status">Nationality:</label>
                </div>
                <div className="col-lg-8">
                  <select>
                    <option value="">Select</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>India</option>
                  </select>
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
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="listing-status">Tax ID:</label>
                </div>
                <div className="col-lg-6 col-6" style={{paddingRight:'0px', marginRight: '-7px', background: '#fff'}}>

                  <input type="text" />


                </div>

                <div className="col-lg-2 col-2" style={{paddingLeft: '0px', background:'#fff'}}>


                  <select style={{borderRadius: '0px 6px 6px 0px !important'}}>

                    <option>EIN No.</option>
                    <option>TIN No.</option>
                    <option>GSTIN / PAN CARD</option>
                  </select>
                </div>



              </div>
            </div>
            <FileUpload heading={"Attach Document"}/>
            {/* <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="listing-status">Attach Document:</label>
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
                <div className="col-lg-4">
                  <label htmlFor="listing-status">Education:</label>
                </div>
                <div className="col-lg-8">
                  <div className="form-group">
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>



            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="listing-status">Employment Status :</label>
                </div>
                <div className="col-lg-8">
                  <div className="form-group">
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>



            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="listing-status">Annual Household Income :</label>
                </div>
                <div className="col-lg-8">
                  <div className="form-group">
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>


            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="listing-status">Language :</label>
                </div>
                <div className="col-lg-8">
                  <div className="form-group">
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="business-price">Wear spectacles/Contact
                    lenses :</label>
                </div>
                <div className="col-lg-8">
                  <div className="discount-type">
                    <label>
                      <input type="radio" name="discount-type3" value=""   />
                      Yes</label>
                    <label>
                      <input type="radio" name="discount-type3" value="" />
                      No</label>
                  </div>
                </div>
              </div>
            </div>


            <FileUpload heading={"Close-up Photo"}/>

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
                      <li><a href="#">Update</a></li>
                      <li><a href="#">Cancel</a></li>
                    </ul>
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

export default MyProfileFromSection