import React from "react";
import Header from "./Header";
import PermanentHeader from "./PermanentHeader";
import Footer from "./Footer";
import Modal from "./Modal";

function DefaultLayout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <PermanentHeader />
      <div className="content">{children}</div>
      <Footer />
      <Modal />
    </React.Fragment>
  );
}

export default DefaultLayout;
