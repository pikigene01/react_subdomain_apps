import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AppContact from '../components/App/AppContact'
import { Link } from 'react-router-dom'
import GetInTouch from '../components/GetInTouch'
import Mailer from '../components/Mailer'

export default function Contact({appToView}) {
  return (
    <div>
        {appToView.itsApp ? (
         <>
         <AppContact/>
         </>
        ): (
            <>
        <Header/>
        <div className="breadcrumb-banner-area bg-img-2 bg-opacity-2 ptb-100">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="breadcrumb-text">
							<div className="breadcrumb-menu">
								<ul>
									<li><Link to="/">home</Link></li>
									<li><span>Contact Us</span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        <GetInTouch/>
        <Mailer/>
        <Footer/>
            </>
        )}
       
        </div>
  )
}
