import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function DefaultLayout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </React.Fragment>
  );
}

export default DefaultLayout;
