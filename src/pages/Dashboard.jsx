import React from 'react'
import Header from '../components/Header'
import AppDashboard from '../components/App/AppDashboard'
import Invoice from '../components/Invoice'
import Dash_Header from '../components/Dashboard/Dash_Header'
import Dash_breadcumb from '../components/Dashboard/Dash_breadcumb'
import Dash_Users from '../components/Dashboard/Dash_Users'
import Dash_Notifies from '../components/Dashboard/Dash_Notifies'
import Dash_top from '../components/Dashboard/Dash_top'
import Dash_Title from '../components/Dashboard/Dash_Title'

export default function Dashboard({appToView}) {
  return (
    <div>
        {appToView.itsApp ? (
            <>
            {/* <AppDashboard/> */}

            <div id="wrapper">
            <Dash_Header appToView={appToView}/>

            </div>
            </>
        ):(
            <>
            {/* <Header/> */}
            <div id="wrapper">
            <Dash_Header appToView={appToView}/>
            <div id="page-wrapper" style={{"minHeight":"612px;"}}>
              <Dash_top/>
              <Dash_Title/>
            <Dash_breadcumb/>
            <Dash_Notifies/>
            <Dash_Users/>
            </div>
            </div>
            </>
        )}
       
        </div>
  )
}
