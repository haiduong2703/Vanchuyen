import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Routes from "../routes/Routes";
import Footer from "./Footer";
const Layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div>
            <Header />
            <div className="container">
              <div className="main">
                <Routes />
              </div>
            </div>
            <Footer />
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
