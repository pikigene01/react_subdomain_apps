import React from "react";
import Dash_Header from "./Dash_Header";
import Dash_top from "./Dash_top";
import Dash_Users from "./Dash_Users";

export default function Dash_user_get({appToView,users}) {
  return (
    <div>
      <Dash_Header />

      <div id="page-wrapper" style={{ minHeight: "612px;" }}>
        <Dash_top />

        <Dash_Users users={users}/>
      </div>
    </div>
  );
}
