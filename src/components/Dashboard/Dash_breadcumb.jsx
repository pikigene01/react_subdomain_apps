import React from 'react'
import { Link } from 'react-router-dom'

export default function Dash_breadcumb() {
  return (
    <div>
        <ol class="breadcrumb">
      <li><Link to="/">RiskCurb</Link></li>
      <li class="active">Dashboard</li>
    </ol>
    </div>
  )
}
