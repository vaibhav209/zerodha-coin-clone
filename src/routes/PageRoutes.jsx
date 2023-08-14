import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import FootBar from "../components/FootBar/FootBar";
import TopBar from "../components/TopBar/TopBar";
import CorporateB from "../pages/CorporateB";
import EtfSgb from "../pages/EtfSgb";
import Gsecs from "../pages/Gsecs";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MasterLayout from "../pages/MasterLayout";
import MutualF from "../pages/MutualF";
import routes from "./routes.json";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<MasterLayout />}>
          <Route index element={<Home />} />
          <Route path={routes.MUTUAL_FUNDS} element={<MutualF />} />
          <Route path={routes.G_SECS} element={<Gsecs />} />
          <Route path={routes.CORPORATE_BONDS} element={<CorporateB />} />
          <Route path={routes.ETF_SGB} element={<EtfSgb />} />
        </Route>
      </Routes>

      <Routes>
        <Route path={routes.LOGIN} element={<Login />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
