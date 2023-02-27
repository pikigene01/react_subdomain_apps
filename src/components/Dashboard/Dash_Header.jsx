import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function Dash_Header({appToView}) {

    useEffect(() => {
            /* url  navigation active */
            var url = window.location;
            // var element = window.$('.sidebar ul.nav a').filter(function() {
            //     return this.href == url;
            // }).addClass('active').parent().addClass('in').parent().parent().addClass('active');
            
            // while (true) {
            //     if (element.is('li')) {
            //         element = element.parent().addClass('in').parent();
            //     } else {
            //         break;
            //     }
            // }
            
            
            
            /* Side menu drop down code */
        window.$(".menudropdown").on('click',function(){
            if( window.$(this).parent().hasClass("active")==true){
                 window.$(this).next("ul.nav").slideUp();
                window.$("ul.nav").parent().removeClass("active");
            }else{
                window.$(".sidebar-nav ul.nav ul.nav").slideUp();
                window.$("ul.nav").parent().removeClass("active");
                window.$(this).next("ul.nav").slideToggle();
                // window.$(this).parent().toggleClass("active");
            }   
        });
            window.$(".menudropdown2").on('click',function(){
            if( window.$(this).parent().hasClass("active")==true){
                window.$(this).next("ul.nav").slideUp();
                window.$(this).parent().removeClass("active");
            }else{
                window.$(this).next("ul.nav").slideDown();
                window.$(this).parent().addClass("active");
            }   
        });
        
        /* Chat icon click show chat window*/
        window.$(".chatbtn").on('click',function(event){
            window.$(this).toggleClass("active");
            window.$(".chat-panel").toggleClass("active");
            
        });
        
        
        
        
        /* Search width increase decrease */
        window.$(".searchglobal .form-control").focusin(function(){
            window.$(this).parent().addClass("active");  
        });
        window.$(".searchglobal .form-control").focusout(function(){
            window.$(this).parent().removeClass("active");  
        });
        
        
        
        /* Hide count on click top navigation*/
        window.$(".navbar-top-links li a").on('click',function(){
            window.$(this).find(".count").fadeOut();
        
        });
        
        
        /* Hide sidebar on click square icon */
        window.$(".menubtn").on('click',function(){
            window.$(this).toggleClass("active");
            // window.$("body").toggleClass("menuclose");
        
        });
        
        /* small sidebar on click top menu icons*/
        window.$(".navbar-toggle-dashboard").on('click',function(){
            window.$(this).toggleClass("active");
            // window.$("body").toggleClass("menusmall");
        
        });
        
        /* small sidebar on click top menu icons*/
        window.$(".mailclose").on('click',function(){
            window.$('.mailcompose').removeClass("active");
        
        });
        
            
        /* Create mail popup */
        window.$(".mailbtn, .compose").on('click',function(){
            window.$('.mailcompose').addClass("active");
        
        });
        
        /* Fedback popover */
        window.$(".feedbackbtn").on('click',function(){
            window.$(this).parent().toggleClass("active");
        
        });
        
        
        /* Tool tip execution*/
         window.$('[data-toggle="tooltip"]').tooltip();
        
            
            /* Small menu on load while screen size is smaller tahn 1180*/
            if( window.$(window).width() <= 1180){
                    window.$("body").addClass("menusmall");
                    
                }else {
                    window.$("body").removeClass("menusmall");           
            }
            
            
            // window.$(window).on("load resize", function(){
            //     var topOffset = 50;
            //     var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
            //     if (width < 768) {
            //         window.$('div.navbar-collapse').addClass('collapse');
            //         topOffset = 100; // 2-row-menu
            //     } else {
            //         window.$('div.navbar-collapse').removeClass('collapse');
            //     }
        
            //     var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
            //     height = height - topOffset; 
            //     if (height < 1) height = 1;
            //     if (height > topOffset) {
            //         window.$("#page-wrapper").css("min-height", (height) + "px");
            //     }
                
            //     if( window.$(window).width() <= 1180){
            //         window.$("body").addClass("menusmall");
            //     }else {
                    
            //     }
            //     /* loading screen */
            //     window.$(".loader").fadeOut("slow");
            // });
            
        
    }, [])
  
    
      


  return (
    <div>
          <div className="navbar-default sidebar" >
    <div className="navbar-header-dash">
      <button className="navbar-toggle-dashboard" >
        <Link to="/" style={{color:'#333'}}> RiskCurb</Link>
      </button>
       </div>
    <div className="clearfix"></div>
    <div className="sidebar-nav navbar-collapse"> 
      
     
      <div className="userprofile text-center">
        <div className="userpic"> <img src="../img/pic4.png" alt="" className="userpicimg"/> <a href="#" className="btn btn-primary settingbtn"><i className="fa fa-gear"></i></a> </div>
        <h3 className="username">{appToView?.appName}</h3>
        <p>{appToView?.appName}</p>
      </div>
      <div className="clearfix"></div>
      
      
      <ul className="nav" id="side-menu">
        <li> <Link to="/dashboard"><i className="fa fa-dashboard fa-fw"></i> Dashboard</Link> </li>
        <li><Link to="/dashboard/subscriptions"><i className="fa fa-money fa-fw"/> subscriptions</Link></li>
         <li><Link to="/dashboard/funds"><i className="fa fa-tv fa-fw"/> sites</Link></li>        
         <li><Link to="/dashboard/password"><i className="fa fa-lock fa-fw"/>password</Link></li>        
         <li><Link to="/dashboard/users"><i className="fa fa-users fa-fw"/>users</Link></li>        
         <li><Link to="/blogs/news"><i className="fa fa-book fa-fw"/>blogs & news</Link></li>        
         <li><Link to="/contact/details"><i className="fa fa-phone fa-fw"/>contact details</Link></li>        
         <li><Link to="/dashboard/messages"><i className="fa fa-envelope fa-fw"/>messages</Link></li>        
                
      </ul>
    </div>
  
  </div>
    </div>
  )
}
