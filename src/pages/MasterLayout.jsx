import React from "react";
import { Outlet } from "react-router-dom";
import FootBar from "../components/FootBar/FootBar";
import TopBar from "../components/TopBar/TopBar";

const MasterLayout = () => {
  return (
    <>
      <TopBar />
      <main>
        <Outlet />
      </main>
      <FootBar />
    </>
  );
};

export default MasterLayout;
