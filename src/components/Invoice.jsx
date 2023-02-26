import React from 'react'

export default function Invoice({id,name,plan,date,status}) {
  return (
    <div>
     
  
  <div id="page-wrapper">
    <div className="row">
      <nav className="navbar navbar-default navbar-static-top" style={{"marginBottom":"0"}}>
        <button className="menubtn pull-left btn "><i className="glyphicon  glyphicon-th"></i></button>
        <div className="searchwarpper">
          <div className="input-group searchglobal">
            <input type="text" className="form-control" placeholder="Search for..." autofocus/>
            <span className="input-group-btn">
            <button className="btn btn-default" type="button"><i className="fa fa-search"></i></button>
            </span> </div>
          
        </div>
        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown"> <a className="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)"> <i className="fa fa-envelope fa-fw"></i> </a>
            <ul className="dropdown-menu dropdown-messages">
              <li> <a href="javascript:void(0)">
                <div> <strong>John Smith</strong> <span className="pull-right text-muted"> <em>Yesterday</em> </span> </div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                </a> </li>
              <li> <a href="javascript:void(0)">
                <div> <strong>John Smith</strong> <span className="pull-right text-muted"> <em>Yesterday</em> </span> </div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                </a> </li>
              <li> <a href="javascript:void(0)">
                <div> <strong>John Smith</strong> <span className="pull-right text-muted"> <em>Yesterday</em> </span> </div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                </a> </li>
              <li> <a className="text-center" href="javascript:void(0)"> <strong>Read All Messages</strong> <i className="fa fa-angle-right"></i> </a> </li>
            </ul>
           
          </li>
         
          <li className="dropdown"> <a className="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)"> <i className="fa fa-tasks fa-fw"></i> <span className="count">9+</span> </a>
            <ul className="dropdown-menu dropdown-tasks">
              <li> <a href="javascript:void(0)">
                <div>
                  <p> <strong>Task 1</strong> <span className="pull-right text-muted">40% Complete</span> </p>
                  <div className="progress progress-striped active">
                    <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{"width": "40%"}}> <span className="sr-only">40% Complete (success)</span> </div>
                  </div>
                </div>
                </a> </li>
              <li> <a href="javascript:void(0)">
                <div>
                  <p> <strong>Task 2</strong> <span className="pull-right text-muted">20% Complete</span> </p>
                  <div className="progress progress-striped active">
                    <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{"width": "20%"}}> <span className="sr-only">20% Complete</span> </div>
                  </div>
                </div>
                </a> </li>
              <li> <a href="javascript:void(0)">
                <div>
                  <p> <strong>Task 3</strong> <span className="pull-right text-muted">60% Complete</span> </p>
                  <div className="progress progress-striped active">
                    <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{"width": "60%"}}> <span className="sr-only">60% Complete (warning)</span> </div>
                  </div>
                </div>
                </a> </li>
              <li> <a href="javascript:void(0)">
                <div>
                  <p> <strong>Task 4</strong> <span className="pull-right text-muted">80% Complete</span> </p>
                  <div className="progress progress-striped active">
                    <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{"width": "80%"}}> <span className="sr-only">80% Complete (danger)</span> </div>
                  </div>
                </div>
                </a> </li>
              <li> <a className="text-center" href="javascript:void(0)"> <strong>See All Tasks</strong> <i className="fa fa-angle-right"></i> </a> </li>
            </ul>
           
          </li>
         
          <li className="dropdown"> <a className="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)"> <i className="fa fa-bell fa-fw"></i> <span className="count">1</span> </a>
            <ul className="dropdown-menu dropdown-alerts">
              <li> <a href="javascript:void(0)">
                <div> <i className="fa fa-comment fa-fw"></i> New Comment <span className="pull-right text-muted small">4 minutes ago</span> </div>
                </a> </li>
              <li> <a href="javascript:void(0)">
                <div> <i className="fa fa-twitter fa-fw"></i> 3 New Followers <span className="pull-right text-muted small">12 minutes ago</span> </div>
                </a> </li>
              <li> <a href="javascript:void(0)">
                <div> <i className="fa fa-envelope fa-fw"></i> Message Sent <span className="pull-right text-muted small">4 minutes ago</span> </div>
                </a> </li>
              <li> <a href="javascript:void(0)">
                <div> <i className="fa fa-tasks fa-fw"></i> New Task <span className="pull-right text-muted small">4 minutes ago</span> </div>
                </a> </li>
              <li> <a href="javascript:void(0)">
                <div> <i className="fa fa-upload fa-fw"></i> Server Rebooted <span className="pull-right text-muted small">4 minutes ago</span> </div>
                </a> </li>
              <li> <a className="text-center" href="javascript:void(0)"> <strong>See All Alerts</strong> <i className="fa fa-angle-right"></i> </a> </li>
            </ul>
           
          </li>
         
          <li className="dropdown"> <a className="dropdown-toggle userdd" data-toggle="dropdown" href="javascript:void(0)">
            <div className="userprofile small "> <span className="userpic"> <img src="../img/pic4.png" alt="" className="userpicimg"/> </span>
              <div className="textcontainer">
                <h3 className="username">Lucky Sans</h3>
                <p>Gujarat, India</p>
              </div>
            </div>
            <i className="caret"></i> </a>
            <ul className="dropdown-menu dropdown-user">
              <li> <a href="socialprofile.html"><i className="fa fa-user fa-fw"></i> User Profile</a> </li>
              <li> <a href="javascript:void(0)"><i className="fa fa-gear fa-fw"></i> Settings</a> </li>
              <li> <a href="login.html"><i className="fa fa-sign-out fa-fw"></i> Logout</a> </li>
            </ul>
           
          </li>
         
        </ul>
        
        
      </nav>
    </div>
    <div className="row">
      <div className="col-md-12  header-wrapper" >
        <h1 className="page-header">Invoice</h1>
        <p className="page-subtitle">This is amazing template for all type of admin interfaces.</p>
      </div>
     
    </div>
   
    <ol className="breadcrumb">
      <li><a href="javascript:void(0)">Admin9</a></li>
      <li className="active">Invoice</li>
    </ol>
    <div className="row">
      <div className="col-xs-12">
        <div className="panel panel-default">
          <div className="panel-header border-bottom">
            <div className="col-xs-12 border-bottom">
              <h3 className="pull-left">INVOICE</h3>
              <h3 className="pull-right">Order # 12345</h3>
            </div>
          </div>
          <div className="panel-body">
            <div className="col-xs-12 "> <br/>
              <div className="row">
                <div className="col-xs-6">
                  <address>
                  <strong>Billed To:</strong><br/>
                  John Smith<br/>
                  1234 Main<br/>
                  Apt. 4B<br/>
                  Springfield, ST 54321
                  </address>
                </div>
                <div className="col-xs-6 text-right">
                  <address>
                  <strong>Shipped To:</strong><br/>
                  Jane Smith<br/>
                  1234 Main<br/>
                  Apt. 4B<br/>
                  Springfield, ST 54321
                  </address>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6">
                  <address>
                  <strong>Payment Method:</strong><br/>
                  Visa ending **** 4242<br/>
                  jsmith@email.com
                  </address>
                </div>
                <div className="col-xs-6 text-right">
                  <address>
                  <strong>Order Date:</strong><br/>
                  March 7, 2014<br/>
                  <br/>
                  </address>
                </div>
              </div>
            </div>
            <br/>
            <br/>
            <div className="col-xs-12">
              <h3 className="panel-title"><strong>Order summary</strong></h3>
              <br/>
              <div className="table-responsive">
                <table className="tablebordered">
                  <thead>
                    <tr>
                      <td><strong>Item</strong></td>
                      <td className="text-center"><strong>Price</strong></td>
                      <td className="text-center"><strong>Quantity</strong></td>
                      <td className="text-right"><strong>Totals</strong></td>
                    </tr>
                  </thead>
                  <tbody>
                   
                    <tr>
                      <td>BS-200</td>
                      <td className="text-center">$10.99</td>
                      <td className="text-center">1</td>
                      <td className="text-right">$10.99</td>
                    </tr>
                    <tr>
                      <td>BS-400</td>
                      <td className="text-center">$20.00</td>
                      <td className="text-center">3</td>
                      <td className="text-right">$60.00</td>
                    </tr>
                    <tr>
                      <td>BS-1000</td>
                      <td className="text-center">$600.00</td>
                      <td className="text-center">1</td>
                      <td className="text-right">$600.00</td>
                    </tr>
                    <tr>
                      <td className="thick-line"></td>
                      <td className="thick-line"></td>
                      <td className="thick-line text-center"><strong>Subtotal</strong></td>
                      <td className="thick-line text-right">$670.99</td>
                    </tr>
                    <tr>
                      <td className="no-line"></td>
                      <td className="no-line"></td>
                      <td className="no-line text-center"><strong>Shipping</strong></td>
                      <td className="no-line text-right">$15</td>
                    </tr>
                    <tr>
                      <td className="no-line"></td>
                      <td className="no-line"></td>
                      <td className="no-line text-center"><strong>Total</strong></td>
                      <td className="no-line text-right"><strong>$685.99</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-xs-12"> <br/>
              <br/>
              <div className="row">
                <div className="col-xs-6"> We recommend pwoer services for our customers </div>
                <div className="col-xs-6 text-right"> Authorized by,<br/>
                  <b>Admin9 user</b> </div>
              </div>
              <br/>
              <br/>
            </div>
          </div>
          <div className="panel-footer text-right"> <a href="#" className="btn btn-primary " role="button">Procced for payment</a> <a href="#" className="btn btn-default " role="button"><i className="fa fa-print"></i> Print</a> </div>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="row">
      <div className="col-xs-12">
        <div className="col-xs-12 no-padding  border-bottom">
          <h2 className="pull-left">INVOICE</h2>
          <h3 className="pull-right">Order # 12345</h3>
        </div>
        <div className="clearfix"></div>
        <br/>
        <br/>
        <div className="clearfix"></div>
        <div className="row">
          <div className="col-xs-6">
            <address>
            <strong>Billed To:</strong><br/>
            John Smith<br/>
            1234 Main<br/>
            Apt. 4B<br/>
            Springfield, ST 54321
            </address>
          </div>
          <div className="col-xs-6 text-right">
            <address>
            <strong>Shipped To:</strong><br/>
            Jane Smith<br/>
            1234 Main<br/>
            Apt. 4B<br/>
            Springfield, ST 54321
            </address>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <address>
            <strong>Payment Method:</strong><br/>
            Visa ending **** 4242<br/>
            jsmith@email.com
            </address>
          </div>
          <div className="col-xs-6 text-right">
            <address>
            <strong>Order Date:</strong><br/>
            March 7, 2014<br/>
            <br/>
            </address>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <div className="col-xs-12">
        <h3 className="panel-title"><strong>Order summary</strong></h3>
        <br/>
        <div className="table-responsive">
          <table className="tablebordered">
            <thead>
              <tr>
                <td><strong>Item</strong></td>
                <td className="text-center"><strong>Price</strong></td>
                <td className="text-center"><strong>Quantity</strong></td>
                <td className="text-right"><strong>Totals</strong></td>
              </tr>
            </thead>
            <tbody>
             
              <tr>
                <td>BS-200</td>
                <td className="text-center">$10.99</td>
                <td className="text-center">1</td>
                <td className="text-right">$10.99</td>
              </tr>
              <tr>
                <td>BS-400</td>
                <td className="text-center">$20.00</td>
                <td className="text-center">3</td>
                <td className="text-right">$60.00</td>
              </tr>
              <tr>
                <td>BS-1000</td>
                <td className="text-center">$600.00</td>
                <td className="text-center">1</td>
                <td className="text-right">$600.00</td>
              </tr>
              <tr>
                <td className="thick-line"></td>
                <td className="thick-line"></td>
                <td className="thick-line text-center"><strong>Subtotal</strong></td>
                <td className="thick-line text-right">$670.99</td>
              </tr>
              <tr>
                <td className="no-line"></td>
                <td className="no-line"></td>
                <td className="no-line text-center"><strong>Shipping</strong></td>
                <td className="no-line text-right">$15</td>
              </tr>
              <tr>
                <td className="no-line"></td>
                <td className="no-line"></td>
                <td className="no-line text-center"><strong>Total</strong></td>
                <td className="no-line text-right"><strong>$685.99</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-xs-12"> <br/>
        <br/>
        <div className="row">
          <div className="col-xs-6"> We recommend pwoer services for our customers </div>
          <div className="col-xs-6 text-right"> Authorized by,<br/>
            <b>Admin9 user</b> </div>
        </div>
        <br/>
        <br/>
      </div>
      <div className="col-xs-12 text-right padding"> <a href="#" className="btn btn-primary " role="button">Procced for payment</a> <a href="#" className="btn btn-default " role="button"><i className="fa fa-print"></i> Print</a> </div>
    </div>
  
    
  </div>
  
    </div>
  )
}
