import React,{useEffect,useState} from 'react'
import { apiDataPost } from '../services/apiRepository';
import { getDataSites } from '../services/api';

export default function CounterSection() {
    const [dataGet,setDataGet] = useState({
     sites: 0,
     apps: '1',
     team: '20'
    });
    useEffect(()=>{
        // window.$('.counter').each(()=>{
        // window.$(this).counterUp(900);
        // })

    },[]);

     useEffect(()=>{

      async  function getRiskCurb(){
     let data = {
        id: ''
    }
     let getDataFetch = await apiDataPost(getDataSites, data);

    //  if(getData){
    //     //
    //  }

     if(getDataFetch.status === 200){
        setDataGet({...getDataFetch,sites:getDataFetch?.sites_count,team: getDataFetch?.users_count,apps:'1'})
     }
    }
    return ()=>{
        getRiskCurb();
    }

     },[]);


  return (
    <div>
        	<div className="counter-area bg-img bg-opacity-2 pt-60 pb-30">
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<div className="single-counter text-center mb-30">
							<div className="counter-icon">
								<i className="fa fa-bank"></i>
							</div>
							<div className="counter-text">
								<h2 className="counter">{dataGet.apps}</h2>
								<span>Apps</span>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="single-counter text-center mb-30">
							<div className="counter-icon">
								<i className="fa fa-user"></i>
							</div>
							<div className="counter-text">
								<h2 className="counter">{dataGet.sites}</h2>
								<span>Sites Created</span>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="single-counter text-center mb-30">
							<div className="counter-icon">
								<i className="fa fa-heart"></i>
							</div>
							<div className="counter-text">
								<h2 className="counter">{dataGet.team}</h2>
								<span>Team</span>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
    </div>
  )
}
