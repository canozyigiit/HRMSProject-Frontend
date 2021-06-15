import React from 'react'
export default function Footer() {
  return (
  //       <div classNameName="bg-dark text-secondary px-4 py-5 text-center">
  //   <div classNameName="row g-4 py-5 row-cols-1 row-cols-lg-3">
  //     <div classNameName="col d-flex align-items-start">
  //       <div classNameName="icon-square bg-light text-dark flex-shrink-0 me-3">
  //       </div>
  //       <div>
  //         <h2 classNameName="display-7 fw-bold text-white">Featured title</h2>
  //         <p  classNameName="text-secondary" >Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
  //         <a href="#" classNameName="btn btn-secondary">
  //           Primary button
  //         </a>
  //       </div>
  //     </div>
  //     <div classNameName="col d-flex align-items-start">
  //       <div classNameName="icon-square bg-light text-dark flex-shrink-0 me-3">
  //       </div>
  //       <div>
  //         <h2 classNameName="display-7 fw-bold text-white">Featured title</h2>
  //         <p classNameName="text-secondary">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
  //         <a href="#" classNameName="btn btn-secondary">
  //           Primary button
  //         </a>
  //       </div>
  //     </div>
  //     <div classNameName="col d-flex align-items-start">
  //       <div classNameName="icon-square bg-light text-dark flex-shrink-0 me-3">
  //       </div>
  //       <div>
  //         <h2 classNameName="display-7 fw-bold text-white">Featured title</h2>
  //         <p classNameName="text-secondary" >Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
  //         <a href="#" classNameName="btn btn-secondary">
  //           Primary button
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  <section className="footer_one">
		<div className="container">
			<div className="row">
				<div className="col-sm-6 col-md-4 col-md-3 col-lg-2">
					<div className="quick_link_widget">
						<h4>Quick Links</h4>
						<ul className="list-unstyled">
							<li><a href=" ">Job Packages</a></li>
							<li><a href=" ">Post New Job</a></li>
							<li><a href=" ">Jobs Listing</a></li>
							<li><a href=" ">Jobs Style Grid</a></li>
							<li><a href=" ">Employer Listing</a></li>
							<li><a href=" ">Employers Grid</a></li>
						</ul>
					</div>
				</div>
				<div className="col-sm-6 col-md-4 col-md-3 col-lg-3">
					<div className="candidate_widget">
						<h4>For Candidates</h4>
						<ul className="list-unstyled">
							<li><a href=" ">User Dashboard</a></li>
							<li><a href=" ">CV Packages</a></li>
							<li><a href=" ">Candidate Listing</a></li>
							<li><a href=" ">Candidates Grid</a></li>
						</ul>
					</div>
				</div>
				<div className="col-sm-4 col-md-4 col-md-3 col-lg-3">
					<div className="employe_widget">
						<h4>For Employers</h4>
						<ul className="list-unstyled">
							<li><a href=" ">Post New</a></li>
							<li><a href=" ">Job Employer Listing</a></li>
							<li><a href=" ">Employers Grid</a></li>
							<li><a href=" ">Job Packages</a></li>
							<li><a href=" ">Jobs Listing</a></li>
							<li><a href=" ">Jobs Style Grid</a></li>
						</ul>
					</div>
				</div>
				<div className="col-sm-8 col-md-6 col-md-3 col-lg-4">
					<div className="newsletter_widget">
						<h4>Newsletter</h4>
						<p>Subscribe to CareerUp Pacific newsletter to get the latest jobs posted, candidates ,and other latest news stay updated.</p>
						<form className="form-inline mailchimp_form">
							<label className="sr-only" htmlFor="inlineFormInputMail2">Name</label>
							<input type="email" className="form-control mb-2 mr-sm-2" id="inlineFormInputMail2" placeholder="Enter your email address"/>
							<button type="submit" className="btn btn-primary mb-2"><span className="fa fa-paper-plane-o"></span></button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
  
	
    )
}
