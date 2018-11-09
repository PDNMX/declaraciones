import React from "react";
import Mensaje from "./Mensaje";

const mensaje = {
  mensaje: "ups no deberias estar aqui, continua tu camino!!!!",
  type: "danger"
};

class P404 extends React.Component {
  render() {
    return <Mensaje mensaje={mensaje} />;
  }
}

export default P404;
