import React from "react";
import { useContext, useReducer } from "react";
import { StoreContext, actions } from "./store";
import { Routes, Route, Link } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import { publicRoutes } from "./routes";
import DefaultLayout from "./components/Layout/DefaultLayout";

function App() {
  return (
    <GlobalStyles>
      <div className="app">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/detail">Detail</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = React.Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </GlobalStyles>
  );
}

export default App;
