import React from "react";
import OnlyHeader from "./OnlyHeader";

function OnlyLayout({ children }) {
  return (
    <React.Fragment>
      <OnlyHeader />
      <div className="content">{children}</div>
    </React.Fragment>
  );
}

export default OnlyLayout;
