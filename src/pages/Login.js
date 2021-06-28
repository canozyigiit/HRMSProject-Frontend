import React from 'react'
import { Link } from 'react-router-dom'
import loginImage from "../assets/images/team-building-importance-in-business-success-1862202.png"

export default function Login() {
    return (
        <div>
           <section className="inner_page_breadcrumb bgc-f0 pt30 pb30" aria-label="breadcrumb">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<h4 className="breadcrumb_title float-left">Login/Register</h4>
					<ol className="breadcrumb float-right">
					    <li className="breadcrumb-item"><a href="#">Home</a></li>
					    <li className="breadcrumb-item active" aria-current="page">Login/Register</li>
					</ol>
				</div>
			</div>
		</div>
	</section>

	<section className="our-log-reg bgc-fa">
		<div className="container">
			<div className="row">
				<div className="col-sm-12 col-lg-6">
					<div className="login_form">
						<form action="#">
							<div className="heading">
								<h3 className="text-center">Quick Login</h3>
								<p className="text-center">Don't have an account? <a className="text-thm" href="#">Sign Up!</a></p>
							</div>
							 <div className="form-group">
						    	<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
							</div>
							<div className="form-group">
						    	<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
							</div>
							<div className="form-group form-check">
								<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
								<label className="form-check-label" for="exampleCheck1">Remember me</label>
								<a className="tdu text-thm float-right" href="#">Forgot Password?</a>
							</div>
							<button type="submit" className="btn btn-log btn-block btn-thm">Login</button>
							<hr/>
						
						</form>
					</div>
				</div>
				{/* <div className="col-sm-12 col-lg-6">
					<div className="sign_up_form">
						<div className="heading">
							<h3 className="text-center">Create New Account</h3>
							<p className="text-center">Don't have an account? <a className="text-thm" href="#">Sign Up!</a></p>
						</div>
						<ul className="nav nav-pills mb-4" id="pills-tab" role="tablist">
							<li className="nav-item">
								<a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Candidate</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Employer</a>
							</li>
						</ul>
						<div className="tab-content" id="pills-tabContent">
							<div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
								<form action="#">
									<div className="form-group">
								    	<input type="text" className="form-control" id="exampleInputName1" placeholder="User Name"/>
									</div>
									 <div className="form-group">
								    	<input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email"/>
									</div>
									<div className="form-group">
								    	<input type="number" className="form-control" id="exampleInputPhone1" placeholder="Phone Number"/>
									</div>
									<div className="form-group">
										<select id="inputState1" className="form-control">
									        <option selected>Select Sector</option>
									        <option>Web Developer</option>
									        <option>Ui/Ux Designer</option>
									        <option>Photoeditor</option>
									        <option>Graphics Designer</option>
									    </select>
									</div>
									<div className="form-group">
								    	<input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password"/>
									</div>
								
									<button type="submit" className="btn btn-log btn-block btn-dark">Register</button>
									<hr/>
								
								</form>
							</div>
							<div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
								<form action="#">
									<div className="form-group">
								    	<input type="text" className="form-control" id="exampleInputName2" placeholder="User Name"/>
									</div>
									 <div className="form-group">
								    	<input type="email" className="form-control" id="exampleInputEmail3" placeholder="Email"/>
									</div>
									<div className="form-group">
								    	<input type="number" className="form-control" id="exampleInputPhone2" placeholder="Phone Number"/>
									</div>
									<div className="form-group">
										<select id="inputState2" className="form-control">
									        <option selected>Select Sector</option>
									        <option>Web Devesdfsloper</option>
									        <option>Ui/Ux Designer</option>
									        <option>Photoeditor</option>
									        <option>Graphics Designer</option>
									    </select>
									</div>
									<div className="form-group">
								    	<input type="password" className="form-control" id="exampleInputPassword3" placeholder="Password"/>
									</div>
									<div className="form-group form-check">
										<input type="checkbox" className="form-check-input" id="exampleCheck3"/>
										<label className="form-check-label" for="exampleCheck3">By Registering You Confirm That You Accept <a className="text-thm" href="page-terms-and-policies.html">Terms & Conditions</a> And <a className="text-thm" href="page-terms-and-policies.html">Privacy Policy</a></label>
									</div>
									<button type="submit" className="btn btn-log btn-block btn-dark">Register</button>
									<hr/>
								
								</form>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	</section>
        </div>

    )
}
