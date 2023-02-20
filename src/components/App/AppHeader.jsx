import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

export default function AppHeader() {
    const [getElements,setGetElements] = useState({})
    const loadPage = () =>{
        setGetElements({scrollView: 'page'})
    }
    useEffect(()=>{
   const rows = document.querySelectorAll('.row');

   rows.forEach((row, index)=>{
        // alert(index)
   })
    },[getElements])

    useEffect(()=>{
        window.$('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "767"
        });
    },[]);

    var linksMenu = "";
    const loggedIn = localStorage.getItem('auth_token');
    linksMenu = (
    <>
    {
        loggedIn ? (
         <>
            <li><Link to="/dashboard"><i className="fa fa-lock"></i>Dashboard</Link></li>
            <li style={{cursor:'pointer'}}><i className="fa fa-unlock"></i>Logout</li>
         </>
        ):(
<>
            <li><Link to="/login"><i className="fa fa-key"></i>Login</Link></li>
			<li><Link to="/sign-up"><i className="fa fa-lock"></i>Sign up</Link></li>
</>
        )
    }
    </>
    );
  return (
    <div>
<header onMouseMove={loadPage}>
			<div className="header-top-area blue-bg">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-8">
							<ul className="header-left text-center text-md-start">
								<li className="header-middle">Your Logo</li>
								<li>
									<a target='_blank' href="https://facebook.com/"><i className="fa fa-facebook"></i></a>
									<a target='_blank' href="https://twitter.com/"><i className="fa fa-twitter"></i></a>
									<a target='_blank' href="https://pinterest.com/"><i className="fa fa-pinterest-p"></i></a>
									<a target='_blank' href="https://linkedin.com/"><i className="fa fa-linkedin"></i></a>
									<a target='_blank' href="https://vimeo.com/"><i className="fa fa-youtube-square"></i></a>
								</li>
							</ul>
						</div>
						<div className="col-lg-6 col-md-4">
							<ul className="header-right text-center text-md-end">
                                <>
								{linksMenu}
                                </>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="main-menu-area">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-3 col-md-2">
							<div className="logo">
								<Link to="/"><img src="img/logo.jpg" style={{height: "100px"}} alt="" /></Link>
							</div>
						</div>
						<div className="col-lg-9 col-md-10">
							<div className="menu-area text-end d-none d-md-block">
								<nav>
									<ul>
										<li><Link to="/">Home<i className="fa" aria-hidden="true"></i></Link>
										</li>
										<li><Link to="/about">About</Link></li>
									
										<li><Link to="/contact">Contact</Link></li>
									</ul>
								</nav>
							</div>
							<div className="mobile-menu-area d-block d-md-none">
								<div className="container">
									<div className="mobile-menu">
										<div id="mobile-menu">
											<nav>
												<ul>
													<li><Link to="/about">About</Link></li>
												
													<li><Link to="/pricing">Events</Link></li>
													
													<li><Link to="/contact">Contact</Link></li>
												</ul>
											</nav>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>

    </div>
  )
}
