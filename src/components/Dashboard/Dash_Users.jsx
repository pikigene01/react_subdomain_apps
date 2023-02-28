import React from "react";

export default function Dash_Users({users}) {
  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <div className="dataTables_length" id="dataTables-userlist_length">
            <label>
              Show{" "}
              <select
                name="dataTables-userlist_length"
                aria-controls="dataTables-userlist"
                className="form-control input-sm"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>{" "}
              entries
            </label>
          </div>
        </div>
        <div className="col-sm-6">
          <div id="dataTables-userlist_filter" className="dataTables_filter">
            <label>
              Search:
              <input
                type="search"
                className="form-control input-sm"
                placeholder=""
                aria-controls="dataTables-userlist"
              />
            </label>
          </div>
        </div>
      </div>
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
                  className="sorting_asc"
                  tabindex="0"
                  aria-controls="dataTables-userlist"
                  rowspan="1"
                  colspan="1"
                  aria-label="Email: activate to sort column descending"
                  style={{"width": "114px;"}}
                  aria-sort="ascending"
                >
                  Email
                </th>
                <th
                  className="sorting"
                  tabindex="0"
                  aria-controls="dataTables-userlist"
                  rowspan="1"
                  colspan="1"
                  aria-label="Phone: activate to sort column ascending"
                  style={{"width": "58px;"}}
                >
                  Phone
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
                  Plan
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
              {users?.map((user,index)=>{
                return (
                  <tr className="odd" key={index} role="row">
                  <td className="">
                   
                   {user.name}
                  </td>
                  <td className="sorting_1">{user.email}</td>
                  <td>{user.phone}</td>
                  <td className="center">Yearly</td>
                  <td className="center">
                    <span className="status active">Active</span>
                  </td>
                </tr>
                )
              })}
            
             
            </tbody>
          </table>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <div
            className="dataTables_info"
            id="dataTables-userlist_info"
            role="status"
            aria-live="polite"
          >
            Showing 1 to 10 of 12 entries
          </div>
        </div>
        <div className="col-sm-6">
          <div
            className="dataTables_paginate paging_full_numbers"
            id="dataTables-userlist_paginate"
          >
            <ul className="pagination">
              <li
                className="paginate_button first disabled"
                aria-controls="dataTables-userlist"
                tabindex="0"
                id="dataTables-userlist_first"
              >
                <a href="#">&lt;&lt;</a>
              </li>
              <li
                className="paginate_button previous disabled"
                aria-controls="dataTables-userlist"
                tabindex="0"
                id="dataTables-userlist_previous"
              >
                <a href="#">&lt;</a>
              </li>
              <li
                className="paginate_button active"
                aria-controls="dataTables-userlist"
                tabindex="0"
              >
                <a href="#">1</a>
              </li>
              <li
                className="paginate_button "
                aria-controls="dataTables-userlist"
                tabindex="0"
              >
                <a href="#">2</a>
              </li>
              <li
                className="paginate_button next"
                aria-controls="dataTables-userlist"
                tabindex="0"
                id="dataTables-userlist_next"
              >
                <a href="#">&gt;</a>
              </li>
              <li
                className="paginate_button last"
                aria-controls="dataTables-userlist"
                tabindex="0"
                id="dataTables-userlist_last"
              >
                <a href="#">&gt;&gt;</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
