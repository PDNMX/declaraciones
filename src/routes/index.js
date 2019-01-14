// import Home from "../components/Home";
import Login from "../components/Login";
import Logout from "../components/Logout";
import DatosGenerales from "../components/DatosGenerales/Index";

const routes = [
  {
    path: "/",
    component: DatosGenerales
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
