import React, { useEffect,useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import AppDashboard from "../components/App/AppDashboard";
import Invoice from "../components/Invoice";
import Dash_Header from "../components/Dashboard/Dash_Header";
import Dash_breadcumb from "../components/Dashboard/Dash_breadcumb";
import Dash_Users from "../components/Dashboard/Dash_Users";
import Dash_Notifies from "../components/Dashboard/Dash_Notifies";
import Dash_top from "../components/Dashboard/Dash_top";
import Dash_Title from "../components/Dashboard/Dash_Title";
import useLocalStorage from "../services/useLocalStorage";
import { apiDataPost } from "../services/apiRepository";
import { getDataSites } from "../services/api";

export default function Dashboard({ appToView,sites_count,users_count,subscriptions,users }) {
  const navigate = useNavigate();
  const [token, setToken] = useLocalStorage("token");
  const [user, setUser] = useLocalStorage("user");


  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

     
  return (
    <div>
      {appToView.itsApp ? (
        <>
          {/* <AppDashboard/> */}

          <div id="wrapper">
            <Dash_Header appToView={appToView} />
          </div>
        </>
      ) : (
        <>
          {/* <Header/> */}
          <div id="wrapper">
            <Dash_Header appToView={appToView} />
            <div id="page-wrapper" style={{ minHeight: "612px;" }}>
              <Dash_top />
              <Dash_Title />
              <Dash_breadcumb />
              <Dash_Notifies sites_count={sites_count} users_count={users_count} subscriptions={subscriptions}/>
              <Dash_Users users={users}/>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
