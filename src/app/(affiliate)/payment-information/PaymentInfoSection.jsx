import React from 'react'
import FileUpload from '../my-profile/FileUpload'

function PaymentInfoSection() {
  return (
    <div className="">
    <div className="container">
      <div className="row"> 
        <div className="col-lg-8 offset-lg-2"> 
          <div className="head_dfd">
            <h3 className="text-center">Payment Information</h3>
          </div> 
          <div className="form-container">
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="sku">Account Holder Name: </label>
                </div>
                <div className="col-lg-8">
                  <input type="text" placeholder="First Name" />
                </div> 
              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="sale-price">Address :</label>
                </div>
                <div className="col-lg-8">
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="msrp">City :</label>
                </div>
                <div className="col-lg-8">

                  <input type="text" />

                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label>PIN Code :</label>
                </div>
                <div className="col-lg-8">
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="listing-status">Country :</label>
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
                  <label htmlFor="listing-status">Bank A/C Number :</label>
                </div>
                <div className="col-lg-8">
                  <input type="text" />
                </div>

              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="listing-status">IFSC Number :</label>
                </div>
                <div className="col-lg-8">
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <label htmlFor="listing-status">PayPal Id :</label>
                </div>
                <div className="col-lg-8">
                  <input type="text" />
                </div>
              </div>
            </div>

            <FileUpload heading={"Bank Statement"} />
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

export default PaymentInfoSection