import React from 'react'
import Dash_Header from './Dash_Header'
import Dash_top from './Dash_top'

export default function Dash_msgs({appToView,messages}) {
  return (
    <div>
        <Dash_Header appToView={appToView}/>
      <div id="page-wrapper" style={{ minHeight: "612px;" }}>
  <Dash_top/>

  <div className="row">
        <div className="col-sm-12">
          <table
            className="table  dataTable no-footer dtr-inline collapsed"
            id="dataTables-userlist"
            role="grid"
            aria-describedby="dataTables-userlist_info"
            style={{"width": "521px;"}}
          >
            <thead>
              <tr role="row">
                <th
                  className="sorting"
                  tabindex="0"
                  aria-controls="dataTables-userlist"
                  rowspan="1"
                  colspan="1"
                  aria-label="User : activate to sort column ascending"
                  style={{"width": "54px;"}}
                >
                  from{" "}
                </th>
               
                <th
                  className="sorting"
                  tabindex="0"
                  aria-controls="dataTables-userlist"
                  rowspan="1"
                  colspan="1"
                  aria-label="Project: activate to sort column ascending"
                  style={{"width": "63px;"}}
                >
                  subject
                </th>
                <th
                  className="sorting"
                  tabindex="0"
                  aria-controls="dataTables-userlist"
                  rowspan="1"
                  colspan="1"
                  aria-label="Project: activate to sort column ascending"
                  style={{"width": "63px;"}}
                >
                  email
                </th>
                <th
                  className="sorting"
                  tabindex="0"
                  aria-controls="dataTables-userlist"
                  rowspan="1"
                  colspan="1"
                  aria-label="Project: activate to sort column ascending"
                  style={{"width": "63px;"}}
                >
                  phone
                </th>
                <th
                  className="sorting"
                  tabindex="0"
                  aria-controls="dataTables-userlist"
                  rowspan="1"
                  colspan="1"
                  aria-label="status: activate to sort column ascending"
                  style={{"width": "82px;"}}
                >
                  message
                </th>
              </tr>
            </thead>
            <tbody>
              {messages?.map((data,index)=>{
                return (
                  <tr className="odd" key={index} role="row">
                  <td className="">
                   
                   {data.company_name}
                  </td>
          
                  <td className="center">{data.price}</td>
                  <td className="center">{data.plan}</td>
                  <td className="center">
                    <span className="status active">{data.status}</span>
                  </td>
                </tr>
                )
              })}
            
             
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  )
}
