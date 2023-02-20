import React,{useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Login() {
    const [loading,setLoading] = useState({
        isLoading: false
      });
  return (
    <div>
        <Header/>
        <div className={loading.isLoading ? "auth-body page-loading" : "page-loading-false"}>
        <div className={loading.isLoading ? "auth-body page-loading-content" : "page-loading-content-false"}>

        </div>
    </div>
        <div className="breadcrumb-banner-area bg-img-2 bg-opacity-2 ptb-100">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="breadcrumb-text">
							<div className="breadcrumb-menu">
								<ul>
									<li><Link to="/">home</Link></li>
									<li><span>login</span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        <div className="signup-area ptb-80">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="single-signup">
							<form id="login-form" action="#">
								<h1>Site Login</h1>
								<label>Username</label>
								<input type="text" placeholder="" />
								<label>password</label>
								<input type="password" placeholder="" />
								<a className="lost" href="#">Lost your password?</a>
								<button className="login">login</button>
								<a className="clos" href="#">(close)</a>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

        <Footer/>
    </div>
  )
}
