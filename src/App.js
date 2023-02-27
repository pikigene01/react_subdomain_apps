import React,{useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { apihost } from "./services/api";
import WholeApp from "./pages/WholeApp";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

axios.defaults.baseURL = apihost;
// axios.defaults.headers.post["content-type"] = "application/json";
// // axios.defaults.headers.post["content-type"] = "multipart/form-data: boundary=add-random-characters";
// axios.defaults.headers.post["Accept"] = "application/json";

axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
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
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<WholeApp appToView={appToView} />}/>
        <Route exact path="/about" element={<About appToView={appToView}/>}/>
        <Route exact path="/blog" element={<About appToView={appToView}/>}/>
        <Route exact path="/blog/:id" element={<About appToView={appToView}/>}/>
        <Route exact path="/contact" element={<Contact appToView={appToView}/>}/>
        <Route exact path="/login" element={<Login appToView={appToView}/>}/>
        <Route exact path="/sign-up" element={<SignUp appToView={appToView}/>}/>
        <Route exact path="/dashboard" element={<Dashboard appToView={appToView}/>}/>
        <Route exact path="/dashboard/messages" element={<Dashboard appToView={appToView}/>}/>

        {!appToView.itsApp && (
          <>
        <Route exact path="/dashboard/subscriptions" element={<Dashboard appToView={appToView}/>}/>
        <Route exact path="/dashboard/reports" element={<Dashboard appToView={appToView}/>}/>
        <Route exact path="/dashboard/funds" element={<Dashboard appToView={appToView}/>}/>
        <Route exact path="/dashboard/password" element={<Dashboard appToView={appToView}/>}/>
        <Route exact path="/blogs/news" element={<Dashboard appToView={appToView}/>}/>
        <Route exact path="/contact/details" element={<Dashboard appToView={appToView}/>}/>

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

