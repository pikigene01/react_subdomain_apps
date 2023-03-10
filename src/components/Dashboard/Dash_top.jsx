import React,{useEffect} from 'react'
import useLocalStorage from '../../services/useLocalStorage';
import { useNavigate } from 'react-router-dom';

export default function Dash_top() {
  const navigate = useNavigate();
const [user,setUser] = useLocalStorage('user');
const [token,setToken] = useLocalStorage('token');

useEffect(()=>{
  if(!token){
      navigate('/login');
  }
  },[token]);

const logoutFromsystem = (e) => {
  setToken(false);
  setUser(false);
}
  return (
    <div>
        <div className="row">
      <nav className="navbar navbar-default navbar-static-top" style={{"marginBottom":"0"}}>
        <button className="menubtn pull-left btn "><i className="glyphicon  glyphicon-th"></i></button>
        {/* <div className="searchwarpper">
          <div className="input-group searchglobal">
            <input type="text" className="form-control" placeholder="Search for..." autofocus=""/>
            <span className="input-group-btn">
            <button className="btn btn-default" type="button"><i className="fa fa-search"></i></button>
            </span> </div>
        </div> */}
        <ul className="nav navbar-top-links navbar-right">
         
          <li className="dropdown"> <a className="dropdown-toggle userdd" data-toggle="dropdown" href="javascript:void(0)" aria-expanded="false">
            <div className="userprofile small "> <span className="userpic"> <img src={user?.picture} alt="" className="userpicimg"/> </span>
              <div className="textcontainer">
                <h3 className="username">{user?.name}</h3>
                <p onClick={logoutFromsystem}>logout</p>
              </div>
            </div>
            <i className="caret"></i> </a>
            <ul className="dropdown-menu dropdown-user">
              <li> <a href="socialprofile.html"><i className="fa fa-user fa-fw"></i> User Profile</a> </li>
              <li> <a href="javascript:void(0)"><i className="fa fa-gear fa-fw"></i> Settings</a> </li>
              <li> <a href="login.html"><i className="fa fa-sign-out fa-fw"></i> Logout</a> </li>
            </ul>
    
          </li>
         
        </ul>
       
      </nav>
    </div>
    </div>
  )
}
