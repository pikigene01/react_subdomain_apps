import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>

<footer>
			<div className="footer-top-area black-bg pt-40 pb-10">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-4">
							<div className="footer-section mb-30">
								<Link to="/"><img src="img/logo.jpg" style={{height: "100px"}} alt="" /></Link>
								<p>There are many variations of passaes of Ipsum, but the majority have sueratio inome fornjected humour</p>
								<div className="social-icon">
									<a target="_blank" href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
									<a target="_blank" href="https://twitter.com/?lang=en"><i className="fa fa-rss"></i></a>
									<a target="_blank" href="https://twitter.com/?lang=en"><i className="fa fa-twitter"></i></a>
									<a target="_blank" href="https://twitter.com/?lang=en"><i className="fa fa-google-plus"></i></a>
									<a target="_blank" href="https://twitter.com/?lang=en"><i className="fa fa-pinterest"></i></a>
									<a target="_blank" href="https://twitter.com/?lang=en"><i className="fa fa-instagram"></i></a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-2">
							{/* <div className="single-footer mb-30">
								<h5>Link</h5>
								<ul className="footer-menu">
									<li><a href="#">Courses</a></li>
									<li><a href="#">Events</a></li>
									<li><a href="#">Gallery</a></li>
									<li><a href="#">About</a></li>
								</ul>
							</div> */}
						</div>
						<div className="col-lg-3 col-md-3">
							{/* <div className="single-footer mb-30">
								<h5>Support</h5>
								<ul className="footer-menu">
									<li><a href="#">Documentation</a></li>
									<li><a href="#">Forums</a></li>
									<li><a href="#">Language Packs</a></li>
									<li><a href="#">Release Status</a></li>
								</ul>
							</div> */}
						</div>
						<div className="col-lg-3 col-md-3">
							<div className="single-footer mb-30">
								<h5>Links</h5>
								<ul className="footer-menu">
									<li><Link to="/about">About</Link></li>
									<li><Link to="/news">News</Link></li>
									<li><Link to="/pricing">Pricing</Link></li>
									<li><Link to="/create-app">Create Risk Management App</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom-area default-bg ptb-20">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="copyright">
								<p>&copy; RiskCurb 2023 </p>
							</div>
						</div>
						<div className="col-md-6">
							<div className="footer-icon floatright">
								<a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
								<a href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a>
								<a href="https://twitter.com/?lang=en"><i className="fa fa-twitter"></i></a>
								<a href="https://plus.google.com/"><i className="fa fa-google-plus"></i></a>
								<a href="https://youtube.com/"><i className="fa fa-youtube-square"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
    </div>
  )
}
