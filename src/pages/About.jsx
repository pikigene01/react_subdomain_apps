import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FeaturedSection from '../components/FeaturedSection'
import AppAbout from '../components/App/AppAbout'

export default function About({appToView}) {
  return (
    <div>
        {appToView.itsApp ? (
        <>
        <AppAbout/>
        </>
        ): (
            <>
  <Header />
      <FeaturedSection/>

        <div className="media-area pb-80">
			<div className="container">
				<div className="section-title text-center">
					<h3>Our Services</h3>
					<p>Our services run deep and are backed by over ten years of experience.</p>
				</div>
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="single-media">
							<div className="media-text">
							<p><strong>Well come to Univ </strong>
							come with us, we also teach about the basic values of human beings as honesty, kindness, generosity, courage, freedom, equality and respect. Learn to celebrate diversity in a spirit of understanding and tolerance and develop a positive regard and awareness of other people. They are taught the and responsibilities needed to become active members of the community, tolerance</p>
							</div>
							<p>Adipiscing signiferumque vix. No alii docendi usu, pri graeco possim percipit ne.</p>
							<ul>
								<li>Nam gravida magna vitae ante dignissim</li>
								<li>Nam gravida magna vitae ante dignissim</li>
								<li>Nam gravida magna vitae ante dignissim</li>
								<li>Nam gravida magna vitae ante dignissim</li>
							</ul>
							<p>Snos trud exerci tation ullorper suscipit lobo maeisrn roester maeoirqs iserrtis nisl ut aliq poerwse thesr oper balinp asein hoinws mawsoib equat. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC</p>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="media-img">
							<img src="img/media/1.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>

        <div className="skill-area pb-60">
			<div className="container">
				<div className="section-title text-center">
					<h3>SKILLS AND EXPERIENCE </h3>
					<p>RiskCurb App developed for risk management apps</p>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className="single-about">
							<div className="our-skill">
								<h6 className="progress-title">Creation <span className="pull-right"><span>85</span>%</span></h6>
								<div className="progress">
									<div className="progress-bar wow fadeInLeft" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{"width": "85%;"}} data-wow-duration="2s" data-wow-delay=".5s">
									</div>
								</div>
								<h6 className="progress-title">Creation <span className="pull-right"><span>85</span>%</span></h6>
								<div className="progress">
									<div className="progress-bar wow fadeInLeft" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{"width": "85%;"}} data-wow-duration="2s" data-wow-delay=".5s">
									</div>
								</div>
							
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="single-about">
							<div className="our-skill">
								<h6 className="progress-title">Apps <span className="pull-right"><span>85</span>%</span></h6>
								<div className="progress">
									<div className="progress-bar wow fadeInLeft" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{"width": "85%;"}} data-wow-duration="2s" data-wow-delay=".5s">
									</div>
								</div>
								<h6 className="progress-title">Server Reliable<span className="pull-right"><span>75</span>%</span></h6>
								<div className="progress">
									<div className="progress-bar wow fadeInLeft" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{"width": "75%;"}} data-wow-duration="2s" data-wow-delay=".5s">
									</div>
								</div>
							
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        <div className="teachers-area pb-70">
			<div className="container">
				<div className="section-title text-center">
					{/* <h3>Our teacher</h3>
					<p>Stay up to date with all our latest news and launches. Only the best quality makes it onto our blog!</p> */}
				</div>
				<div className="space-24">
					<div className="teachers-active owl-carousel">
						<div className="single-teachers mb-30">
							<div className="teachers-img">
								<a href="teacher-details.html"><img src="img/teacher/1.jpg" alt="" /></a>
							</div>
							<div className="teachers-text text-center">
								<h4>ashim kumar</h4>
								<span>Professor, Dhaka University</span>
								<div className="social-link">
									<a href="#"><i className="fa fa-facebook"></i></a>
									<a href="#"><i className="fa fa-twitter"></i></a>
									<a href="#"><i className="fa fa-google-plus"></i></a>
									<a href="#"><i className="fa fa-linkedin"></i></a>
								</div>
							</div>
						</div>
						<div className="single-teachers mb-30">
							<div className="teachers-img">
								<a href="teacher-details.html"><img src="img/teacher/2.jpg" alt="" /></a>
							</div>
							<div className="teachers-text text-center">
								<h4>Archona Bala</h4>
								<span>Professor, Dhaka University</span>
								<div className="social-link">
									<a href="#"><i className="fa fa-facebook"></i></a>
									<a href="#"><i className="fa fa-twitter"></i></a>
									<a href="#"><i className="fa fa-google-plus"></i></a>
									<a href="#"><i className="fa fa-linkedin"></i></a>
								</div>
							</div>
						</div>
						<div className="single-teachers mb-30">
							<div className="teachers-img">
								<a href="teacher-details.html"><img src="img/teacher/3.jpg" alt="" /></a>
							</div>
							<div className="teachers-text text-center">
								<h4>kohinur tabassum</h4>
								<span>Professor, Harvard College</span>
								<div className="social-link">
									<a href="#"><i className="fa fa-facebook"></i></a>
									<a href="#"><i className="fa fa-twitter"></i></a>
									<a href="#"><i className="fa fa-google-plus"></i></a>
									<a href="#"><i className="fa fa-linkedin"></i></a>
								</div>
							</div>
						</div>
						<div className="single-teachers mb-30">
							<div className="teachers-img">
								<a href="teacher-details.html"><img src="img/teacher/1.jpg" alt="" /></a>
							</div>
							<div className="teachers-text text-center">
								<h4>ashim kumar</h4>
								<span>Professor, Dhaka University</span>
								<div className="social-link">
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
        <Footer/>
            </>
        )}
      
    </div>
  )
}
