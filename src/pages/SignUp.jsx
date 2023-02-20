import React, {useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Await, Link } from 'react-router-dom'
import { apiDataPost } from '../services/apiRepository';
import { createAppUrl } from '../services/api';

export default function SignUp({appToView}) {
    const [createApp,setCreateApp] = useState({
       name: '',
       phone: '',
       email: '',
       code: '',
    });
    const [loading,setLoading] = useState({
        isLoading: false
      });

    const handleChange = (e) => {
        e.preventDefault();

        setCreateApp({...createApp,[e.target.name]:e.target.value})
    }

  const createAppSent = async(e) => {
    e.preventDefault();
    setLoading({...loading, isLoading:true});


    var data = createApp;

    var getData = await apiDataPost(createAppUrl, data);

    if(getData){
    setLoading({...loading, isLoading:false});
        //setLodding False
    }

    if(getData.status === 200){
    //success message
    }else{
        //alert fail message
    }

  }

//   const registerSubmit =async (e) => {
//     e.preventDefault();
   
//     const formData = new FormData();
//     formData.append('token', registerInput.token);
//     formData.append('email', registerInput.email);
//     formData.append('name', registerInput.name);
//     formData.append('phone', registerInput.phone);
//     formData.append('description', registerInput.description);
//     formData.append('price', registerInput.price);
//     formData.append('role', registerInput.role);
//     formData.append('confirm_password', registerInput.confirm_password);
//     formData.append('password', registerInput.password);
//     formData.append('latitude', location.latitude);
//     formData.append('longitude', location.longitude);
//     formData.append('picture_law', file);
//     setLoading({...loading, isLoading:true});
   
//     let sendData = await apiDataPostForm(registerapi,formData);
//     if(sendData){
//       setLoading({...loading, isLoading:false});
//     }
//     if(sendData.status === 200){
//       setAuth_token(sendData.token);
//       setAuth_name(sendData.username);
//       setUser_Id(sendData.user_id);
//       localStorage.setItem('auth_token', sendData.token);
//       localStorage.setItem('auth_name', sendData.username);
//       localStorage.setItem('auth_user_id', sendData.user_id);
//        swal("Success", sendData.message,"success");
//       navigate('/');
//       setLoading({...loading, isLoading:false});
//     }else if(sendData.status === 401){
//       swal("Warning", sendData?.message,"warning");
//       setRegister({...registerInput, error_list: sendData?.message});

//     }else{
//       swal("Warning", sendData?.message,"warning");
     
//       setRegister({...registerInput, error_list: sendData?.errors});
//     }

//   }
  return (
    <div>
        <Header />
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
									<li><span>Create App</span></li>
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
						<div className="single-signup">
							<div className="sign-logo text-center">
								<a href="index.html"><img src="img/logo.jpg" style={{width: "100px"}} alt="" /></a>
							</div>
							<div className="sign-content">
								<p className="message-register">Create Your App</p>
							</div>
							<form id="contacts-form" onSubmit={createAppSent}>
								<label>Site Name</label>
								<div style={{display:'flex',flexDirection: 'row'}}><span>https://</span><input name='name' onChange={handleChange} value={createApp.name} type="text" placeholder="company name" /> <span>.riskcurb.com</span></div>
								<label>Email</label>
								<input type="text" onChange={handleChange} value={createApp.email} name='email' placeholder="email" />
								<label>phone</label>
								<input type="phone" onChange={handleChange} value={createApp.phone} name='phone' placeholder="phone" />
								<label>coupon code</label>
								<input type="code" name='code' onChange={handleChange} value={createApp.code} placeholder="code" />
								<div className="sign-text">
									<p>Registration confirmation will be emailed to you.</p>
								</div>
								<div className="register-button floatright">
									<button className="Register">Create Risk Management App</button>
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

        <Footer/>
    </div>
  )
}
