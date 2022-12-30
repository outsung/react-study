import React from "react";
import { Outlet } from "react-router-dom";

import { Header, Sidebar } from "../../components/common";

export function MainScreen() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ padding: "32px", width: "100%" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
