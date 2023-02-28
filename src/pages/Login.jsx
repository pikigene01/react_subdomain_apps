import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link,useNavigate } from 'react-router-dom'
import { apiDataPost } from '../services/apiRepository'
import { login_clientapi, loginapi } from '../services/api'
import swal from 'sweetalert'
import useLocalStorage from '../services/useLocalStorage'

export default function Login({appToView}) {
	const navigate = useNavigate();
    const [token,setToken] = useLocalStorage('token');
    const [user,setUser] = useLocalStorage('user');
	const [loginData,setLoginData] = useState({
		email: '',
		password: ''
	});
    const [loading,setLoading] = useState({
        isLoading: false
      });
	  useEffect(()=>{
		if(token){
			navigate('/dashboard');
		}
		},[token]);
	  const handleChange = e =>{

		setLoginData({...loginData,[e.target.name]:e.target.value});
	  }
	  const loginRequest = async(e) =>{
		e.preventDefault();
    setLoading({...loading, isLoading:true});

	let dataLoginurl = "";
	if(!appToView.itsApp){
     dataLoginurl = loginapi;
	}else{
    dataLoginurl = login_clientapi;
	}

       
   let getData = await apiDataPost(
	
	dataLoginurl
	
	,loginData);

   if(getData){
    setLoading({...loading, isLoading:false});

   }

   if(getData.status === 200){
	swal('Success', getData.message, 'success');
	setToken(getData.token);
	setUser(getData.user);
   }else if(getData.status === 404){
	//alert fail message
	setLoginData(prev=>{
		return {...prev, errors: getData.errors}
	})
	swal('Warning', getData.message, 'warning');
}else{
	swal('Warning', getData.message, 'warning');
   }
	  }
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
							<form id="login-form" onSubmit={loginRequest}>
								<h1>Site Login</h1>
								<label>email</label>
								<input value={loginData.email} name='email' onChange={handleChange} type="email" placeholder="" />
								<p style={{color:'red'}}>{loginData?.errors?.email}</p>
								<label>password</label>
								<input type="password" value={loginData.password} name='password' onChange={handleChange} placeholder="" />
								<p style={{color:'red'}}>{loginData?.errors?.password}</p>
								<a className="lost" href="#">Lost your password?</a>
								<button className="login" type='submit'>login</button>
								<Link className="clos" to="/">(close)</Link>
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
