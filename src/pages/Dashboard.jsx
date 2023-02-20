import React from 'react'
import Header from '../components/Header'
import AppDashboard from '../components/App/AppDashboard'

export default function Dashboard({appToView}) {
  return (
    <div>
        {appToView.itsApp ? (
            <>
            <AppDashboard/>
            </>
        ):(
            <>
            <Header/>
            Dashboard
            </>
        )}
       
        </div>
  )
}
