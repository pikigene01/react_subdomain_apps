import React,{useState,useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { apihost, getDataSites } from "./services/api";
import WholeApp from "./pages/WholeApp";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import useLocalStorage from "./services/useLocalStorage";
import Dash_subscriptions from "./components/Dashboard/Dash_subscriptions";
import { apiDataPost } from "./services/apiRepository";
import Dash_password from "./components/Dashboard/Dash_password";
import Dash_sites from "./components/Dashboard/Dash_sites";
import Dash_Users from "./components/Dashboard/Dash_Users";
import Dash_user_get from "./components/Dashboard/Dash_user_get";
import Dash_contacts from "./components/Dashboard/Dash_contacts";
import Dash_msgs from "./components/Dashboard/Dash_msgs";
import Dash_blog_news from "./components/Dashboard/Dash_blog_news";

axios.defaults.baseURL = apihost;
// axios.defaults.headers.post["content-type"] = "application/json";
// // axios.defaults.headers.post["content-type"] = "multipart/form-data: boundary=add-random-characters";
// axios.defaults.headers.post["Accept"] = "application/json";

axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("saasapp-token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});



function App() {
  const [appToView,setAppToView] = useState(()=>{
    let objectApp = {}
    const website = 'http://localhost:3000/'
    var appName = (website.toString().split('.'));
    if(appName.length == 1){
    objectApp = {itsApp: false, appName: ''};
    return objectApp 
  
    }else{
      objectApp = {itsApp: true, appName: appName[0].split('//')[1]}
      return objectApp 
    }
});
const [user,setUser] = useLocalStorage('user');
const [sites_count,setSites_count] = useState('0');
const [users_count,setUsers_count] = useState('0'); 
const [users,setUsers] = useState([]); 
const [subscriptions,setSubscriptions] = useState([]); 
const [sites,setSites] = useState([]); 


useEffect(()=>{
  const getDashBoardData = async()=>{
     const data = {
       user_id: user?.id
     }

    let response = await apiDataPost(getDataSites,data);

    if(response){

    }

    if(response.status === 200){
       setSites_count(response?.sites_count);
       setUsers_count(response?.users_count);
       setSites(response?.sites);
       setUsers(response?.users);
       setSubscriptions(response?.subsriptions);
    }
  }

  getDashBoardData();
  },[user]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<WholeApp appToView={appToView} />}/>
        <Route exact path="/about" element={<About appToView={appToView}/>}/>
        <Route exact path="/blog" element={<About appToView={appToView}/>}/>
        <Route exact path="/blog/:id" element={<About appToView={appToView}/>}/>
        <Route exact path="/contact" element={<Contact appToView={appToView}/>}/>
        <Route exact path="/login" element={<Login appToView={appToView}/>}/>
        <Route exact path="/register" element={<Register appToView={appToView}/>}/>
        <Route exact path="/sign-up" element={<SignUp appToView={appToView}/>}/>
        <Route exact path="/dashboard" element={<Dashboard appToView={appToView} users={users} sites_count={sites_count} users_count={users_count} subscriptions={subscriptions}/>}/>
        <Route exact path="/dashboard/messages" element={<Dash_msgs appToView={appToView}/>}/>

        {!appToView.itsApp && (
          <>
          {user?.role == 'admin' &&(
            <>
 <Route exact path="/dashboard/subscriptions" element={<Dash_subscriptions appToView={appToView} sites_count={sites_count} users_count={users_count} subscriptions={subscriptions}/>}/>
 <Route exact path="/dashboard/reports" element={<Dashboard appToView={appToView} sites_count={sites_count} users_count={users_count} subscriptions={subscriptions}/>}/>
 <Route exact path="/dashboard/sites" element={<Dash_sites appToView={appToView} sites={sites} sites_count={sites_count} users_count={users_count} subscriptions={subscriptions}/>}/>
 <Route exact path="/dashboard/users" element={<Dash_user_get appToView={appToView} sites={sites} sites_count={sites_count} users_count={users_count} subscriptions={subscriptions}/>}/>
 <Route exact path="/blogs/news" element={<Dash_blog_news appToView={appToView}/>}/>
  <Route exact path="/contact/details" element={<Dash_contacts appToView={appToView}/>}/>

 </>
          )}
       
        <Route exact path="/dashboard/password" element={<Dash_password appToView={appToView}/>}/>
       
        <Route exact path="/pricing" element={<Pricing appToView={appToView}/>}/>
        <Route exact path="/create-app/:plan" element={<SignUp appToView={appToView}/>}/>
        <Route exact path="/create-app" element={<SignUp appToView={appToView}/>}/>
          </>
        )}
        <Route exact path="*" element={<WholeApp appToView={appToView}/>}/>
       </Routes>
    </Router>
  );
}

export default App;

