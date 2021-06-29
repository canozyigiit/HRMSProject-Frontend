import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import JobSeekerService from '../../services/JobSeekerService'
import ResumeService from '../../services/ResumeService'
export default function JobSeekerDetail() {

	let { jobSeekerId } = useParams();
	const [resume, setResume] = useState({})
	const [jobSeeker, setJobSeeker] = useState({})

	useEffect(() => {
		let jobSeekerService = new JobSeekerService()
		jobSeekerService.getJobSeekerById(jobSeekerId).then(result => setJobSeeker(result.data.data))
	}, [])
	useEffect(() => {
		let resumeService = new ResumeService()
		resumeService.getByJobSeekerId(jobSeekerId).then(result => setResume(result.data.data))
	}, [])





	return (
		<section className="mt70 bgc-fa mt50">
			<section className="sticky_heading bgc-f3 h80 p0">
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							<div className="sticky-nav-tabs">
								<div className="sticky-nav-tabs-container">
									<li className="list-inline-item"><a className="sticky-nav-tab" href="#tab-1">Hakkında</a></li>
									<li className="list-inline-item"><a className="sticky-nav-tab" href="#tab-2">Eğitim</a></li>
									<li className="list-inline-item"><a className="sticky-nav-tab" href="#tab-3">Deneyim</a></li>
									<li className="list-inline-item"><a className="sticky-nav-tab" href="#tab-4">Yetenekler</a></li>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="container">
				<div className="row candidate_grid">
					<div className="col-lg-8 col-xl-8">
						<div className="candidate_personal_info">
							<div className="thumb">
								<img className="img rounded-circle" src={jobSeeker.photo} style={{ maxHeight: "150px" }} alt="cs2.jpg" />
							</div>
							<div className="details">
								<h3>{jobSeeker.firstName} {jobSeeker.lastName}  <small classNameName="verified"><i className="fa fa-check-circle"></i></small></h3>
								<p>{jobSeeker.job} <small className="verified"><i className="fi-rr-briefcase"></i></small></p>
								<ul className="address_list">
									<li className="list-inline-item"><a href="#"><i className="fi-rr-envelope"></i> {jobSeeker.email}</a></li>
									<li className="list-inline-item"><a href="#"> <i className="fi-rr-calendar"></i> Doğum Tarihi: {jobSeeker.dateOfBirth} </a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-xl-4">
						<div className="candidate_personal_overview">

							<div className="row mb10">
								<div className="candidate_social_widget">
									<ul>
										<li>Sosyal Profil: </li>
										<li><a href={resume.githubLink}><i className="fa fa-github"></i></a></li>
										<li><a href={resume.linkedLink}><i className="fa fa-linkedin"></i></a></li>
									</ul>
								</div>

							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-xl-8">
						<div className="row">
							<div id="tab-1" className="col-lg-12">
								<div className="candidate_about_info">
									<h4 className="fz20 mb30">Hakkında</h4>
									<p className="mt30">{resume.description}</p>
								</div>
							</div>
							<div id="tab-2" className="col-lg-12">
								<div className="my_resume_eduarea style2">

									<h4 className="title">Eğitim</h4>
									{resume.schools?.map((school) => (
										<div className="content">
											<div className="circle"></div>
											<p className="edu_center">{school.schoolName}<small>{school.startedDate} - {school.endedDate ? school.endedDate : <small>DevamEdiyor</small>}</small></p>
											<h4 className="edu_stats">{school.graduate.description}</h4>
											<p className="mb0">{school.schoolDepartment}</p>
										</div>
									))}
								</div>
								
							</div>
							<div id="tab-3" className="col-lg-12">
								<div className="my_resume_eduarea style2">

									<h4 className="title">Deneyim</h4>
									{resume.jobExperiences?.map((jobExperience) => (
										<div className="content">
											<div className="circle"></div>
											<p className="edu_center">{jobExperience.companyName}<small>{jobExperience.startedDate} - {jobExperience.endedDate ? jobExperience.endedDate : <small>DevamEdiyor</small>}</small></p>
											<h4 className="edu_stats">{jobExperience.position}</h4>
										</div>
									))}
								</div>
							</div>
							<div id="tab-4" className="col-lg-12">
								<div className="candidate_single_skill">
									<h4 className="title">Yetenekler</h4>
									<div className="skill_tag">
										<ul className="tag_list">
											{resume.technologies?.map((technology) => (
												<li className="list-inline-item"><a >{technology.description}</a></li>
											))}

										</ul>
									</div>
								</div>
							</div>



						</div>
					</div>
					<div className="col-xl-4">
						<div className="candidate_working_widget">
							<div className="icon text-thm"><span className="flaticon-old-age-man"></span></div>
							<div className="details">
								<h4>Yaş</h4>
								<p>20 Years</p>
							</div>
							<div className="icon text-thm"><span className="flaticon-paper"></span></div>
							<div className="details">
								<h4>Languages</h4>
								{resume.languages?.map((language) => (
									<p>{language.languageName}</p>
								))}
							</div>
						</div>

						<h4 className="fz20 mb30">Attachments</h4>
						<div className="candidate_document_widget">
							<div className="details">
								<div className="icon"><span className="flaticon-doc"></span></div>
								<h4 className="title">CV</h4>
								<p>PDF</p>
							</div>
						</div>

						<h4 className="fz20 mb30">{jobSeeker.firstName}  ile İletişime Geç</h4>
						<div className="candidate_contact_form">
							<form>
								<div className="form-group">
									<input type="text" className="form-control" id="formGroupExampleInput" placeholder="Your Name" />
								</div>
								<div className="form-group">
									<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Your Email" />
								</div>
								<div className="form-group">
									<input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Subject" />
								</div>
								<div className="form-group">
									<textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Message"></textarea>
								</div>
								<button type="submit" className="btn btn-block btn-thm">Gönder <span className="flaticon-right-arrow"></span></button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
