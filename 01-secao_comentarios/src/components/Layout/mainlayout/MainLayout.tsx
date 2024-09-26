import React from "react";
import "./MainLayout.css";

type props = {
  children: React.ReactNode;
};

const MainLayout = (props: props) => {
  return (
    <div className="container">
      <div className="main-layout">{props.children}</div>
    </div>
  );
};

export default MainLayout;
