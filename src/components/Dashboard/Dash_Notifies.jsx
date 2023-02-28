import React from "react";

export default function Dash_Notifies({sites_count,users_count,subscriptions}) {
  return (
    <div>
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="panel panel-green">
            <div className="panel-heading">
              <div className="row">
                <div className="col-xs-3">
                  {" "}
                  <i className="fa fa-tasks fa-2x"></i>{" "}
                </div>
                <div className="col-xs-9 text-right">
                  <div className="huge">{sites_count}</div>
                  <div>Sites</div>
                </div>
              </div>
            </div>
            <a href="javascript:void(0)">
              <div className="panel-footer">
                {" "}
                <span className="pull-left">View Details</span>{" "}
                <span className="pull-right">
                  <i className="fa fa-arrow-circle-right"></i>
                </span>
                <div className="clearfix"></div>
              </div>
            </a>{" "}
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="panel panel-yellow">
            <div className="panel-heading">
              <div className="row">
                <div className="col-xs-3">
                  {" "}
                  <i className="fa fa-shopping-cart fa-2x"></i>{" "}
                </div>
                <div className="col-xs-9 text-right">
                  <div className="huge">{subscriptions.length}</div>
                  <div>New Orders!</div>
                </div>
              </div>
            </div>
            <a href="javascript:void(0)">
              <div className="panel-footer">
                {" "}
                <span className="pull-left">View Details</span>{" "}
                <span className="pull-right">
                  <i className="fa fa-arrow-circle-right"></i>
                </span>
                <div className="clearfix"></div>
              </div>
            </a>{" "}
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="panel panel-red">
            <div className="panel-heading">
              <div className="row">
                <div className="col-xs-3">
                  {" "}
                  <i className="fa fa-support fa-2x"></i>{" "}
                </div>
                <div className="col-xs-9 text-right">
                  <div className="huge">0</div>
                  <div>Earnings!</div>
                </div>
              </div>
            </div>
            <a href="javascript:void(0)">
              <div className="panel-footer">
                {" "}
                <span className="pull-left">View Details</span>{" "}
                <span className="pull-right">
                  <i className="fa fa-arrow-circle-right"></i>
                </span>
                <div className="clearfix"></div>
              </div>
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
