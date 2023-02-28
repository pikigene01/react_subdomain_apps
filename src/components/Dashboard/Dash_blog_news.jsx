import React from 'react'
import Dash_Header from './Dash_Header'
import Dash_top from './Dash_top'

export default function Dash_blog_news({appToView}) {
  return (
    <div>
        <Dash_Header appToView={appToView}/>
      <div id="page-wrapper" style={{ minHeight: "612px;" }}>
  <Dash_top/>
      </div>
    </div>
  )
}
