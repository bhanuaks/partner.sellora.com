import React from 'react'
import SideBare from '../SideBare'

function page() {
  return (
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
                <div className="col-lg-10 offset-lg-1">
                  <div className="text-center websit_heading">
                    Profile
                    <p>
                      Important: Please read these instructions before you fill
                      this form
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
                        <input type="text" placeholder="Sellora" />
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
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="text_e4r43">
                    <p>
                      What can users do on your website or mobile app, who is it
                      for, and
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
                        <td>Blog</td>
                        <td>Comparison Shopping Engine</td>
                      </tr>
                      <tr>
                        <td>Content Website</td>
                        <td>Coupons or Deals Website</td>
                      </tr>
                      <tr>
                        <td>
                          Manufacturer/Author with Products Listed on
                          sellora.com
                        </td>
                        <td>Non Profit or Charitable Organisati</td>
                      </tr>
                      <tr>
                        <td>Social Media Page/Group</td>
                        <td>Web browser</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="form-group">
                    <div className="row align-items-center">
                      <div className="col-lg-8">
                        <label htmlFor="sku">
                          How did you hear about us? <span>*</span>
                        </label>
                      </div>
                      <div className="col-lg-8">
                        <select>
                          <option>Select</option>
                          <option />
                          <option />
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="text_3448">
                    <p>
                      By entering the characters shown in the box, you help
                      Sellora prevent automated or scripted submissions. This
                      helps us safeguard against fraud and abuse, ensuring we
                      maintain a secure and high-quality experience for all our
                      users.
                    </p>
                    <div className="note_er">
                      <label>
                        <input type="checkbox" disabled="" defaultChecked="" />{" "}
                        You agree to the terms and conditions of the Associates
                        Program Operating Agreement
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="button_outer">
                <ul>
                  <li className="tranasparent_bg">
                    <a href="#">Previous</a>
                  </li>
                  <li>
                    <a href="#">Next</a>
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

  )
}

export default page