import React from "react";
import RepresentacionActivaForm from "./RepresentacionActiva";
import {
  getData,
  catTipoRepresentacion,
  catSectorIndustria,
  catEntidadesFederativas,
  catPaises
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class RepresantacionActiva extends React.Component {
  constructor(props) {
    super(props);

    let info;

    info = clean;
    info = example;

    this.state = {
      datos_representacion_activa: info.intereses.representacion_activa[0],
      catTipoRepresentacion: [],
      catSectorIndustria: [],
      catEntidadesFederativas: [],
      catPaises: []
    };

    // console.log("state constructor", this.state);
  }

  componentDidMount() {
    catTipoRepresentacion().then(data => {
      this.setState({ catTipoRepresentacion: data });
    });
    catSectorIndustria().then(data => {
      this.setState({ catSectorIndustria: data });
    });
    catEntidadesFederativas().then(data => {
      this.setState({ catEntidadesFederativas: data });
    });
    catPaises().then(data => {
      this.setState({ catPaises: data });
    });
    catTipoRepresentacion().then(data => {
      this.setState({ catTipoRepresentacion: data });
    });
  }

  setDataRepresentacionActiva = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp_parte":
        data.datos_representacion_activa.curp_parte = valor;
        break;
      case "fecha_inicio":
        data.datos_representacion_activa.fecha_inicio = valor;
        break;
      case "fecha_nacimiento_parte":
        data.datos_representacion_activa.fecha_nacimiento_parte = valor;
        break;
      case "id":
        data.datos_representacion_activa.id = valor;
        break;
      case "nombre_parte_representada":
        data.datos_representacion_activa.nombre_parte_representada = valor;
        break;
      case "observaciones":
        data.datos_representacion_activa.observaciones = valor;
        break;
      case "ocupacion_profesion_parte":
        data.datos_representacion_activa.ocupacion_profesion_parte = valor;
        break;
      case "pagado":
        data.datos_representacion_activa.pagado = !data
          .datos_representacion_activa.pagado;
        break;
      case "rfc_parte":
        data.datos_representacion_activa.rfc_parte = valor;
        break;
      case "sector_industria":
        data.datos_representacion_activa.sector_industria = getData(
          catSectorIndustria,
          valor
        );
        break;
      case "tipo_representacion":
        data.datos_representacion_activa.tipo_representacion = getData(
          catTipoRepresentacion,
          valor
        );
        // data.datos_representacion_activa.tipo_representacion = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };
  addClickRepresentacionActiva = () => {
    let data = Object.assign({}, this.state.datos_representacion_activa);
    let info = Object.assign({}, clean.intereses.representacion_activa[0]);

    this.setState(
      {
        representacion_activa: [...this.state.representacion_activa, data],
        datos_representacion_activa: info
      },
      () => {
        console.log(this.state.representacion_activa);
      }
    );
  };

  removeClickRepresentacionActiva = index => event => {
    this.state.representacion_activa.splice(index, 1);
    this.setState(
      { representacion_activa: this.state.representacion_activa },
      () => {
        // console.log(this.state.representacion_activa);
      }
    );
  };

  render() {
    return (
      <RepresentacionActivaForm
        data={this.state}
        handleChange={this.setDataRepresentacionActiva}
        addClick={this.addClickRepresentacionActiva}
        removeClick={this.removeClickRepresentacionActiva}
      />
    );
  }
}

export default RepresantacionActiva;
