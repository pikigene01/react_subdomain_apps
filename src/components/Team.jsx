import React from 'react'

export default function Team() {
  return (
    <div>
        	<div className="teacher-area pb-70">
			<div className="container">
				<div className="section-title text-center">
					<h3>Our Team</h3>
					<p>Stay up to date with all our latest news and launches. Only the best quality makes it onto our blog!</p>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="single-teacher mb-30">
							<div className="teacher-img">
							<img src="img/teacher/1.jpg" alt="" />
							</div>
							<div className="teacher-text text-center">
								<h4>Robert Alexander</h4>
								<span>CEO, Founder</span>
								<div className="social-links">
									<a href="#"><i className="fa fa-facebook"></i></a>
									<a href="#"><i className="fa fa-twitter"></i></a>
									<a href="#"><i className="fa fa-google-plus"></i></a>
									<a href="#"><i className="fa fa-linkedin"></i></a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="single-teacher mb-30">
							<div className="teacher-img">
								<img src="img/cto.jpg" alt="" />
							</div>
							<div className="teacher-text text-center">
								<h4>Gene Piki</h4>
								<span>CTO</span>
								<div className="social-links">
									<a href="#"><i className="fa fa-facebook"></i></a>
									<a href="#"><i className="fa fa-twitter"></i></a>
									<a href="#"><i className="fa fa-google-plus"></i></a>
									<a href="#"><i className="fa fa-linkedin"></i></a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="single-teacher mb-30">
							<div className="teacher-img">
								<img src="img/teacher/3.jpg" alt="" />
							</div>
							<div className="teacher-text text-center">
								<h4>kohinur tabassum</h4>
								<span>Professor, Harvard College</span>
								<div className="social-links">
									<a href="#"><i className="fa fa-facebook"></i></a>
									<a href="#"><i className="fa fa-twitter"></i></a>
									<a href="#"><i className="fa fa-google-plus"></i></a>
									<a href="#"><i className="fa fa-linkedin"></i></a>
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
