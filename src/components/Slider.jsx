import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function Slider() {
     useEffect(()=>{
        window.$('.slider-active').owlCarousel({
            loop:true,
            nav:true,
            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })
     },[])
  return (
    <div>
          <div className="slider-area">
			<div className="slider-active owl-carousel">
				<div className="single-slider ptb-150 bg-opacity" style={{"backgroundImage": "url(img/slider/1.jpg)"}}>
					<div className="container">
						<div className="slider-text">
							<h3>Get Risk Management App</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum massa.<br/> Pellentesque mollis eros vel mattis tempor. Aliquam eu efficitur enim</p>
							<Link to="/create-app">Create App</Link>
						</div>
					</div>
				</div>
				<div className="single-slider ptb-150 bg-opacity" style={{"backgroundImage": "url(img/slider/2.jpg)"}}>
					<div className="container">
						<div className="slider-text text-center">
							<h3>Try trial month with us</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum massa.<br/> Pellentesque mollis eros vel mattis tempor. Aliquam eu efficitur enim</p>
							<Link to="/pricing">See Prices</Link>
						</div>
					</div>
				</div>
				<div className="single-slider ptb-150 bg-opacity" style={{"backgroundImage":"url(img/slider/1.jpg)"}}>
					<div className="container">
						<div className="slider-text">
							<h3>We will guide you</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum massa.<br/> Pellentesque mollis eros vel mattis tempor. Aliquam eu efficitur enim</p>
							<Link to="#">Read More</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}
