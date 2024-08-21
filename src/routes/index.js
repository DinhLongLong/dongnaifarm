import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Login from "../pages/Login";
import OnlyLayout from "../components/Layout/OnlyLayout";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/detail", component: Detail },
  { path: "/contact", component: Contact },
  { path: "/register", component: Register, layout: null },
  { path: "/login", component: Login, layout: OnlyLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
