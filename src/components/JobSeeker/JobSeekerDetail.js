import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router';
import JobSeekerService from '../../services/JobSeekerService'
import ResumeService from '../../services/ResumeService'
import { Link } from 'react-router-dom';
export default function JobSeekerDetail() {

	let { id } = useParams();
   
    const [resume, setResume] = useState([])
    useEffect(() => {
        let resumeService = new ResumeService()
        resumeService.getAllByJobSeekerId(id).then(result => setResume(result.data.data))
    }, [])
    return (
        <section className="mt70 bgc-fa mt50">
		<div className="container">
			<div className="row candidate_grid">
				<div className="col-lg-8 col-xl-8">
					<div className="candidate_personal_info">
						<div className="thumb">
							<img className="img-fluid rounded-circle" src="" alt="cs2.jpg"/>
						</div>
						<div className="details">
							<h3>{resume.jobSeekerFirstName} {resume.jobSeekerLastName} <small className="verified"><i className="fa fa-check-circle"></i></small></h3>
							<p>{resume.jobSeekerJob}</p>
							<ul className="address_list">
								<li className="list-inline-item"><a href="#">{resume.jobSeekerEmail}</a></li>
								<li className="list-inline-item"><a href="#">Doğum Tarihi: {resume.jobSeekerDateOfBirth}</a></li>
							</ul>
						</div>
					</div>
				</div>
				
				<div className="candidate_social_widget">
                                <ul>
                                    <li>Sosyal Medya : </li>
								<li><a href={resume.linkedLink}><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href=" "><i className="fa fa-github"></i></a></li>
                                   
                                </ul>
                            </div>
				
			</div>
			<div className="row">
				<div className="col-xl-8">
					<div className="row">
						<div className="col-lg-12">
							<div className="candidate_about_info">
								<h4 className="fz20 mb30">About Me</h4>
								<p className="mb30">I’m top rated, highly client-oriented and self-organized UX/UI designer with 3+ years of comprehensive experience working across UX/UI, Web and Graphic Design. Have huge working experience in international teams in collaboration with art director and front-end devs. Have successful experience in startups as well as award-winning redesigns of existing projects.</p>
								<p className="mb40">I take personal responsibility and pay attention to any detail of my work and can greatly help you with:</p>
								<p>-- creating UX/UI for highloaded interface systems: CRM, SaaS, B2B, ERP systems, enterprise solutions and analytical systems with administration panels, dashboards, infographics and compex data</p>
								<p>-- information architecting and creating UX/UI from scratch or low-fidelity wireframes to final visual UI design for web, mobile (iOS, Android) and desktop</p>
								<p>-- product design for large international projects: monitoring and management web applications in health product design for large international projects: monitoring and management web applications in health analytics</p>
								<p className="mt30">The better I do - the better I feel. My aim is to help you to convert the idea into successful product with the most effective, clean and aesthetic design. I'm passionately interested in challenging tasks and researching for intricate results.</p>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="my_resume_eduarea style2">
								<h4 className="title">Education</h4>
								<div className="content">
									<div className="circle"></div>
									<p className="edu_center">Walters University <small>2002 - 2004</small></p>
									<h4 className="edu_stats">Masters In Fine Arts</h4>
									<p className="mb0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
								</div>
								<div className="content">
									<div className="circle"></div>
									<p className="edu_center">Bachlors in Fine Arts <small>2012 - 2015</small></p>
									<h4 className="edu_stats">Tombers Collage</h4>
									<p className="mb0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
								</div>
								<div className="content">
									<div className="circle"></div>
									<p className="edu_center">Imperieal Institute of Art Direction <small>2014 - 2015</small></p>
									<h4 className="edu_stats">Diploma In Fine Arts</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="my_resume_eduarea style2">
								<h4 className="title">Work & Experience</h4>
								<div className="content">
									<div className="circle"></div>
									<p className="edu_center">Inwave Studio <small>2008 - 2012</small></p>
									<h4 className="edu_stats">Masters In Fine Arts</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
								</div>
								<div className="content style2">
									<div className="circle"></div>
									<p className="edu_center">Wiggle CRC <small>2012 - 2015</small></p>
									<h4 className="edu_stats">CEO Founder</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
								</div>
							</div>
						</div>
					
						<div className="col-lg-12">
							<div className="candidate_single_skill">
								<h4 className="title">Skills</h4>
				                <div className="skill_tag">
				                	<ul className="tag_list">
									{resume.map((resume) => (
				                		<li key={resume.technologies.id} className="list-inline-item"><a href="#">{resume.technologies.description}</a></li>
										))}
				                	</ul>
				                </div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="my_resume_eduarea style2">
								<h4 className="title">Awards</h4>
								<div className="content">
									<div className="circle"></div>
									<p className="edu_center">Jan 2018</p>
									<h4 className="edu_stats">Perfect Attendance Programs</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
								</div>
								<div className="content style2">
									<div className="circle"></div>
									<p className="edu_center">Dec 2019</p>
									<h4 className="edu_stats">Top Performer Recognition</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
								</div>
							</div>
						</div>
						
					
					</div>
				</div>
				<div className="col-xl-4">
					<div className="candidate_working_widget">
						<div className="icon text-thm"><span className="flaticon-controls"></span></div>
						<div className="details">
							<h4>Experience</h4>
							<p>6-9 Years</p>
						</div>
						<div className="icon text-thm"><span className="flaticon-old-age-man"></span></div>
						<div className="details">
							<h4>Age</h4>
							<p>27 Years</p>
						</div>
						<div className="icon text-thm"><span className="flaticon-paper"></span></div>
						<div className="details">
							<h4>Languages</h4>
							<p>English, Turkish, Hindi</p>
						</div>
						<div className="icon text-thm"><span className="flaticon-mortarboard"></span></div>
						<div className="details">
							<h4>Education</h4>
							<p>Certificate</p>
						</div>
					</div>
					<div className="candidate_social_widget">
						<ul>
							<li>Social Profiles</li>
							<li><a href="#"><i className="fa fa-facebook"></i></a></li>
							<li><a href="#"><i className="fa fa-twitter"></i></a></li>
							<li><a href="#"><i className="fa fa-google"></i></a></li>
							<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
						</ul>
					</div>
					<h4 className="fz20 mb30">Attachments</h4>
					<div className="candidate_document_widget">
						<div className="details">
						<div className="icon"><span className="flaticon-doc"></span></div>
							<h4 className="title">Cover Letter</h4>
							<p>PDF</p>
						</div>
					</div>
					<div className="candidate_document_widget">
						<div className="icon"><span className="flaticon-doc"></span></div>
						<div className="details">
							<h4 className="title">Contrac</h4>
							<p>DOCX</p>
						</div>
					</div>
					<h4 className="fz20 mb30">Contact Martha Griffin</h4>
					<div className="candidate_contact_form">
						<form>
							<div className="form-group">
							    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Your Name"/>
							</div>
						  	<div className="form-group">
						    	<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Your Email"/>
						  	</div>
							<div className="form-group">
							    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Subject"/>
							</div>
							<div className="form-group">
							    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Message"></textarea>
							</div>
						  	<button type="submit" className="btn btn-block btn-thm">Send Now <span className="flaticon-right-arrow"></span></button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}
