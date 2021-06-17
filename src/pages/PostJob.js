import React from 'react'
import { Formik } from 'formik'

export default function PostJob() {
    return (
        <div>
            <section className="our-dashbord dashbord">
                <div className="container">
                    <div className="row">
                       
                        <div className="col-sm-12 col-lg-8 col-xl-9">
                            <div className="my_profile_form_area">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h4 className="fz20 mb20">Post a New Job</h4>
                                    </div>
                                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="icon_boxs">
                                            <div className="icon"><span className="flaticon-work"></span></div>
                                            <div className="details"><h4>2 Job Posted</h4></div>
                                        </div>
                                    </div>

                                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="icon_boxs">
                                            <div className="icon style3"><span className="flaticon-work"></span></div>
                                            <div className="details"><h4>1 Active Jobs</h4></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mt30">
                                        <div className="my_profile_thumb_edit"></div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="my_profile_input form-group">
                                            <label for="formGroupExampleInput2">Job Title</label>
                                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="UX/UI Desginer" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="my_resume_textarea">
                                            <div className="form-group">
                                                <label for="exampleFormControlTextarea1">Job Description</label>
                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="9">Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present
                                                </textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-12">
                                        <div className="my_profile_input form-group">
                                            <label for="formGroupExampleInputDate">Application Deadline Date</label>
                                            <input type="number" className="form-control" id="formGroupExampleInputDate" placeholder="22/05/2010" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <div className="my_profile_input form-group">
                                            <label for="exampleFormControlInput1">Email address</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <div className="my_profile_input form-group">
                                            <label for="formGroupExampleInput1">Username</label>
                                            <input type="text" className="form-control" id="formGroupExampleInput1" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <div className="my_profile_select_box form-group">
                                            <label for="formGroupExampleInput1">Job Type</label><br />
                                            <select className="selectpicker">
                                                <option>Basic</option>
                                                <option>Standard</option>
                                                <option>Advance</option>
                                                <option>Expert</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <div className="my_profile_select_box form-group">
                                            <label for="formGroupExampleInput1">Specialisms</label><br />
                                            <select className="selectpicker" multiple data-actions-box="true">
                                                <option>Basic</option>
                                                <option>Standard</option>
                                                <option>Advance</option>
                                                <option>Expert</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <div className="my_profile_select_box form-group">
                                            <label for="exampleFormControlInput3">Offerd Salary</label><br />
                                            <select className="selectpicker">
                                                <option>25-30 K</option>
                                                <option>25-35 K</option>
                                                <option>25-40 K</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <div className="my_profile_select_box form-group">
                                            <label for="exampleFormControlInput4">Career Level</label><br />
                                            <select className="selectpicker">
                                                <option>45-85 K</option>
                                                <option>45-85 K</option>
                                                <option>45-85 K</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <div className="my_profile_select_box form-group">
                                            <label for="formGroupExampleInput1">Experience</label><br />
                                            <select className="selectpicker">
                                                <option>1Year to 2Year</option>
                                                <option>2Year to 3Year</option>
                                                <option>3Year to 4Year</option>
                                                <option>4Year to 5Year</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <div className="my_profile_select_box form-group">
                                            <label for="formGroupExampleInput1">Gender</label><br />
                                            <select className="selectpicker">
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <div className="my_profile_select_box form-group">
                                            <label for="formGroupExampleInput1">Industry</label><br />
                                            <select className="selectpicker">
                                                <option>Industry1</option>
                                                <option>Industry2</option>
                                                <option>Industry3</option>
                                                <option>Industry4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <div className="my_profile_select_box form-group">
                                            <label for="formGroupExampleInput1">Qualification</label><br />
                                            <select className="selectpicker">
                                                <option>Qualification1</option>
                                                <option>Qualification2</option>
                                                <option>Qualification3</option>
                                                <option>Qualification4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <h4 className="fz18 mb20">Address / Location</h4>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <div className="my_profile_select_box form-group">
                                            <label for="exampleFormControlInput9">Country</label><br />
                                            <select className="selectpicker">
                                                <option>United Kingdom</option>
                                                <option>United State</option>
                                                <option>Ukraine</option>
                                                <option>Uruguay</option>
                                                <option>UK</option>
                                                <option>Uzbekistan</option>
                                                <option>Uganda</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* <div class="col-md-6 col-lg-6">
                                        <div class="my_profile_select_box form-group">
                                            <label for="exampleFormControlInput4">Career Level</label><br/>
                                                <div class="dropdown bootstrap-select show"><select class="selectpicker" tabindex="-98">
                                                    <option>45-85 K</option>
                                                    <option>45-85 K</option>
                                                    <option>45-85 K</option>
                                                </select>
                                                <button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="button" title="45-85 K" aria-expanded="true"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">45-85 K</div></div> </div></button><div class="dropdown-menu show" role="combobox" x-placement="bottom-start" ><div class="inner show" role="listbox" aria-expanded="true" tabindex="-1" ><ul class="dropdown-menu inner show"><li class="selected active"><a role="option" class="dropdown-item selected active" aria-disabled="false" tabindex="0" aria-selected="true"><span class=" bs-ok-default check-mark"></span><span class="text">45-85 K</span></a></li><li><a role="option" class="dropdown-item" aria-disabled="false" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">45-85 K</span></a></li><li><a role="option" class="dropdown-item" aria-disabled="false" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">45-85 K</span></a></li></ul></div></div></div>
								</div>
                                        </div> */}
                                        <div className="col-lg-12">
                                            <div className="my_resume_textarea">
                                                <div className="form-group">
                                                    <label for="exampleFormControlTextarea2">Full Address</label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea2" rows="3">London, United Kingdom</textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                            <div className="my_profile_input form-group">
                                                <label for="exampleInputLat">Latitude</label>
                                                <input type="email" className="form-control" id="exampleInputLat" aria-describedby="latNumber" placeholder="51.5073509" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                            <div className="my_profile_input form-group">
                                                <label for="exampleInputLat2">Longitude</label>
                                                <input type="email" className="form-control" id="exampleInputLat2" aria-describedby="latNumber" placeholder="-0.12775829999998223" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                            <div className="my_profile_input form-group">
                                                <label for="exampleInputLat3">Zoom</label>
                                                <input type="email" className="form-control" id="exampleInputLat3" aria-describedby="latNumber" placeholder="16" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="h300" id="map-canvas"></div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="my_profile_input">
                                                <a className="btn btn-lg btn-thm" href="#">Save Changes</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>


                <a className="scrollToHome text-thm" href="#"><i className="flaticon-rocket-launch"></i></a>
        </div>
            )
}
