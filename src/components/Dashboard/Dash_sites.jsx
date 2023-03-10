import React from "react";
import Dash_top from "./Dash_top";
import Dash_Header from "./Dash_Header";

export default function Dash_sites({appToView,sites}) {
  return (
    <div>
       <Dash_Header appToView={appToView}/>
      <div id="page-wrapper" style={{ minHeight: "612px;" }}>
        <Dash_top />

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
                  site url{" "}
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
                  EMAIL
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
                  PHONE
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
                  status
                </th>
              </tr>
            </thead>
            <tbody>
              {sites?.map((data,index)=>{
                return (
                  <tr className="odd" key={index} role="row">
                  <td className="">
                  <a target="_blank" href={"https://"+data.name+".riskcurb.com"}>Site Url</a>
                  
                  </td>
          
                  <td className="center">{data.email}</td>
                  <td className="center">{data.phone}</td>
                  <td className="center">
                
                    {data.isVerified == '1' ?(
                    <span className="status active">Activated</span>
                    ):(
                      <span className="status active">Deactivate</span>
                    )}
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
  );
}
