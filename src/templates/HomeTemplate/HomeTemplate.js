import React from "react";
import Header from "./Layout/Header/Header";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function HomeTemplate(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
}

export default HomeTemplate;
