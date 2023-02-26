import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Await, Link } from 'react-router-dom'
import { apiDataPost } from '../services/apiRepository';
import { createAppUrl } from '../services/api';
import Chip from '../img/chip.png';
import Visa from '../img/visa.png';
import './Visa.css';
import swal from 'sweetalert';


export default function SignUp({appToView}) {
	const [plan,setPlan] = useState('trial');
    const [createApp,setCreateApp] = useState({
       name: '',
       phone: '',
       email: '',
	   plan: '',
	   password: ''
    });
    const [loading,setLoading] = useState({
        isLoading: false
      });
	  useEffect(()=>{
		var planMethod = (window.location.pathname.toString().split('/'));
		var actualPlan = planMethod[2];
       setPlan(actualPlan?actualPlan:'trial');
	   if(actualPlan == 'trial'){
		setCreateApp(prev=>{
			return {...prev,plan:actualPlan?actualPlan:'trial',pay:false,price:'0'}
		   });
	   }else if(actualPlan == 'monthly'){
		setCreateApp(prev=>{
			return {...prev,plan:actualPlan?actualPlan:'trial',pay:true,price:'129'}
		   });
	   }else if(actualPlan == 'yearly'){
		setCreateApp(prev=>{
			return {...prev,plan:actualPlan?actualPlan:'trial',pay:true,price:'1290'}
		   });
	   }else{
		setCreateApp(prev=>{
			return {...prev,plan:actualPlan?actualPlan:'trial',pay:false,price:'0'}
		   });
	   }
	   
	  },[])

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
	swal('Success', getData.message, 'success');

    }else if(getData.status === 404){
        //alert fail message
		setCreateApp(prev=>{
			return {...prev, errors: getData.errors}
		})
		swal('Warning', getData.message, 'warning');
    }else{
		swal('Warning', getData.message, 'warning');

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
const updateVisa = (e) => {
  
   const cvv_input = document.querySelectorAll('.cvv-input');
   cvv_input.forEach((cvv)=>{
	cvv.onmouseenter = () =>{
	  const front = document.querySelectorAll('.front');
	  front.forEach((fr)=>{
		fr.style.transform = 'perspective(1000px) rotateY(-180deg)';
	  })
	  const back = document.querySelectorAll('.back');
	  back.forEach((bk)=>{
		bk.style.transform = 'perspective(1000px) rotateY(0deg)';
	  })
  
	  cvv.onmouseleave = () =>{
		const front = document.querySelectorAll('.front');
		front.forEach((fr)=>{
		  fr.style.transform = 'perspective(1000px) rotateY(0deg)';
		})
		const back =  document.querySelectorAll('.back');
		back.forEach((bk)=>{
		  bk.style.transform = 'perspective(1000px) rotateY(180deg)';
		})
	}
  
  
  
  }
   });
  
  };
const BuyTokenVisa =(e)=>{
	e.preventDefault()
}
var visa_form = "";
visa_form = (
	<div className="visa-container">

    <div className="card-visa-container">

        <div className="front">
            <div className="image">
                <img src={Chip} alt="" />
                <img src={Visa} alt="" />
            </div>
            <div className="card-number-box">{createApp.card_number?createApp.card_number:'################'}</div>
            <div className="flexbox">
                <div className="box">
                    <span>card holder</span>
                    <div className="card-holder-name">{createApp.card_holder?createApp.card_holder:'full name'}</div>
                </div>
                <div className="box">
                    <span>expires</span>
                    <div className="expiration">
                        <span className="exp-month">{createApp.month?createApp.month:'mm'}</span>
                        <span className="exp-year">{createApp.year_input?createApp.year_input:'yy'}</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="back">
            <div className="stripe"></div>
            <div className="box">
                <span>cvv</span>
                <div className="cvv-box">{createApp.cvv_value}</div>
                <img src={Visa} alt=""/>
            </div>
        </div>

    </div>

    <form className="payment-form" onSubmit={BuyTokenVisa}>
        <div className="inputBox">
            <span>card number</span>
            <input type="text" maxlength="16" value={createApp.card_number} onChange={(e)=>setCreateApp({...createApp,card_number:e.target.value})} className="card-number-input"/>
        </div>
        <div className="inputBox">
            <span>card holder</span>
            <input type="text" name="card_holder" value={createApp.card_holder} onChange={(e)=>setCreateApp({...createApp,card_holder:e.target.value})} className="card-holder-input"/>
        </div>
        <div className="flexbox">
            <div className="inputBox">
                <span>expiration mm</span>
                <select name="month" value={createApp.month} onChange={(e)=>setCreateApp({...createApp,month:e.target.value})} className="month-input">
                    <option value="month" selected disabled>month</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
            </div>
            <div className="inputBox">
                <span>expiration yy</span>
                <select name="year_input" value={createApp.year_input} onChange={(e)=>setCreateApp({...createApp,year_input:e.target.value})} id="" className="year-input">
                    <option value="year" selected disabled>year</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                </select>
            </div>
            <div className="inputBox">
                <span>cvv</span>
                <input type="text" maxlength="4" value={createApp.cvv_value} onMouseEnter={updateVisa} onChange={(e)=>setCreateApp({...createApp,cvv_value:e.target.value})} className="cvv-input"/>
            </div>
        </div>

    </form>

</div>  
)
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
									<li><span>Create App / {plan}</span></li>
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
								<a href="index.html"><img src="img/logo.jpg" style={{width: "100px"}} alt="" /></a>
							</div>
							<div className="sign-content">
								<p className="message-register">Create Your App / {plan} / USD {createApp?.price}</p>
							</div>
							<form id="contacts-form" onSubmit={createAppSent}>
								<label>Site Name</label>
								<div style={{display:'flex',flexDirection: 'row'}}><span>https://</span><input name='name' onChange={handleChange} value={createApp.name} type="text" placeholder="company name" /> <span>.riskcurb.com</span></div>
								<label>Email</label>
								<input type="text" onChange={handleChange} value={createApp.email} name='email' placeholder="email" />
								<p style={{color:'red'}}>{createApp?.errors?.email}</p>
								<label>phone</label>
								<input type="phone" onChange={handleChange} value={createApp.phone} name='phone' placeholder="phone" />
								<p style={{color:'red'}}>{createApp?.errors?.phone}</p>
						
								<label>password</label>
								<input type="text" onChange={handleChange} value={createApp.password} name='password' placeholder="choose password" />
								<p style={{color:'red'}}>{createApp?.errors?.password}</p>
						
								<div className="sign-text">
									<p>Registration confirmation will be emailed to you.</p>
								</div>
								{createApp?.pay && (
									<>
								{visa_form}
									</>
								)}
								<div className="register-button floatright">
									<button className="btn btn-success">Create Risk Management App</button>
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
