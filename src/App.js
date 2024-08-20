import { useContext, useReducer } from "react";
import { StoreContext, actions } from "./store";
import { Routes, Route, Link } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Contact from "./pages/Contact";

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
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </GlobalStyles>
  );
}

export default App;
