import Home from "../components/Home";
import Login from "../components/Login/";

const routes = [
  {
    path: "/",
    component: Home,
    private: true,
    key: 0
  },
  {
    path: "/login",
    component: Login,
    private: false,
    key: 1
  }
];

export default routes;
