import Home from "../components/Home";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Logout from "../components/Logout";
import DatosGenerales from "../components/DatosGenerales/Index";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/dashboard",
    component: Dashboard
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/logout",
    component: Logout
  },
  {
    path: "/datosgenerales",
    component: DatosGenerales
  }
];

export default routes;
