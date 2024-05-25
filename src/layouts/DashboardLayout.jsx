import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div>

<div className="relative min-h-screen md:flex">
<Sidebar></Sidebar>
</div>




      {/*  SIdebar*/}
      <div className="flex-1 md:ml-64">

      </div>
      {/* outlet */}
      <Outlet></Outlet>

  
    </div>
  );
};

export default DashboardLayout;
