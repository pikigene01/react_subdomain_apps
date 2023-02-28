import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import swal from 'sweetalert';
import { Link,useNavigate } from 'react-router-dom';
import { apiDataPost } from '../services/apiRepository';
import { createAppUrl } from '../services/api';
import useLocalStorage from '../services/useLocalStorage';

export default function Register({appToView}) {
	const navigate = useNavigate();
    const [token,setToken] = useLocalStorage('token');
    const [user,setUser] = useLocalStorage('user');
    const [registerUser,setRegisterUser] = useState({
        name: '',
        phone: '',
        email: '',
        plan: '',
        password: '',
        role: '2'//1 thats for site creation
     });
     const [loading,setLoading] = useState({
        isLoading: false
      });
useEffect(()=>{
if(token){
    navigate('/dashboard');
}
},[token]);
      const handleChange = (e) => {
        e.preventDefault();

        setRegisterUser({...registerUser,[e.target.name]:e.target.value})
    }

    const registerUserSent = async(e) => {
        e.preventDefault();
        setLoading({...loading, isLoading:true});
    
        var data = registerUser;
    
        var getData = await apiDataPost(createAppUrl, data);
    
        if(getData){
        setLoading({...loading, isLoading:false});
            //setLodding False
        }
    
        if(getData.status === 200){
        //success message
        swal('Success', getData.message, 'success');
        //set values to local storage
        setToken(getData.token);
        setUser(getData.user);
        }else if(getData.status === 404){
            //alert fail message
            setRegisterUser(prev=>{
                return {...prev, errors: getData.errors}
            })
            swal('Warning', getData.message, 'warning');
        }else{
            swal('Warning', getData.message, 'warning');
    
        }
    
      }
  return (
    <div>
        <Header appToView={appToView}/>
        <div
        className={
          loading.isLoading ? "auth-body page-loading" : "page-loading-false"
        }
      >
        <div
          className={
            loading.isLoading
              ? "auth-body page-loading-content"
              : "page-loading-content-false"
          }
        ></div>
      </div>
        <div className="breadcrumb-banner-area bg-img-2 bg-opacity-2 ptb-100">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="breadcrumb-text">
							<div className="breadcrumb-menu">
								<ul>
									<li><Link to="/">home</Link></li>
									<li><span>Register</span></li>
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
					<div className="col-12">
						<div className="single-signup" style={{width:'55%'}}>
							<div className="sign-logo text-center">
								<Link to="/"><img src="img/logo.jpg" style={{width: "100px"}} alt="" /></Link>
							</div>
							<div className="sign-content">
								<p className="message-register">Register</p>
							</div>
							<form id="contacts-form" onSubmit={registerUserSent}>
								<label>Name</label>
								<input name='name' onChange={handleChange} value={registerUser.name} type="text" placeholder="user name" /> 
								<label>Email</label>
								<input type="text" onChange={handleChange} value={registerUser.email} name='email' placeholder="email" />
								<p style={{color:'red'}}>{registerUser?.errors?.email}</p>
								<label>phone</label>
								<input type="phone" onChange={handleChange} value={registerUser.phone} name='phone' placeholder="phone" />
								<p style={{color:'red'}}>{registerUser?.errors?.phone}</p>
						
								<label>password</label>
								<input type="text" onChange={handleChange} value={registerUser.password} name='password' placeholder="choose password" />
								<p style={{color:'red'}}>{registerUser?.errors?.password}</p>
						
								<div className="sign-text">
									<p>Registration confirmation will be emailed to you.</p>
								</div>
								
								<div className="register-button floatright">
									<button className="btn btn-success">Register</button>
								</div>
							</form>
							<p id="nav">
								<Link to="/">Home</Link> 
								
							</p>
							
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}
