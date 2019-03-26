import React from "react";

import DatosCurricularesForm from "./DatosCurriculares";

import {
  getData,
  catPaises,
  catEntidadesFederativas,
  getEntidadesFederativas,
  catEstatusEstudio,
  catDocumentoObtenido
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class DatosCurriculares extends React.Component {
  constructor(props) {
    super(props);

    let info;

    info = clean;
    info = example;

    this.state = {
      datos_curriculares_grados_academicos:
        info.informacion_personal.datos_curriculares.grados_academicos[0],
      catPaises: [],
      catEntidadesFederativas: [],
      catEstatusEstudio: [],
      catDocumentoObtenido: []
    };

    // console.log("state constructor", this.state);
  }

  componentDidMount() {
    catPaises().then(data => {
      this.setState({ catPaises: data });
    });
    catEntidadesFederativas().then(data => {
      this.setState({ catEntidadesFederativas: data });
    });
    catEstatusEstudio().then(data => {
      this.setState({ catEstatusEstudio: data });
    });
    catDocumentoObtenido().then(data => {
      this.setState({ catDocumentoObtenido: data });
    });
  }

  setDataDatosCurriculares = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "grado_obtenido":
        data.datos_curriculares_grados_academicos.grado_obtenido = valor;
        break;
      case "institucion_educativa":
        data.datos_curriculares_grados_academicos.institucion_educativa = valor;
        break;
      case "lugar_institucion_educativa.pais":
        data.datos_curriculares_grados_academicos.lugar_institucion_educativa.pais = getData(
          this.state.catPaises,
          valor
        );
        break;
      case "lugar_institucion_educativa.entidad_federativa":
        data.datos_curriculares_grados_academicos.lugar_institucion_educativa.entidad_federativa = getEntidadesFederativas(
          this.state.catEntidadesFederativas,
          valor
        );
        break;
      case "carrera":
        data.datos_curriculares_grados_academicos.carrera = valor;
        break;
      case "estatus":
        data.datos_curriculares_grados_academicos.estatus = getData(
          this.state.catEstatusEstudio,
          valor
        );
        break;
      case "ano_conclusion":
        data.datos_curriculares_grados_academicos.ano_conclusion = valor;
        break;
      case "documento_obtenido":
        data.datos_curriculares_grados_academicos.documento_obtenido = getData(
          this.state.catDocumentoObtenido,
          valor
        );
        break;
      case "cedula_profesional":
        data.datos_curriculares_grados_academicos.cedula_profesional = valor;
        break;
      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickDatosCurriculares = () => {
    let data = Object.assign(
      {},
      this.state.datos_curriculares_grados_academicos
    );
    let info = Object.assign(
      {},
      clean.informacion_personal.datos_curriculares.grados_academicos[0]
    );

    this.setState(
      {
        curriculares_grados_academicos: [
          ...this.state.curriculares_grados_academicos,
          data
        ],
        datos_curriculares_grados_academicos: info
      },
      () => {
        console.log(this.state.curriculares_grados_academicos);
      }
    );
  };

  removeClickDatosCurriculares = index => event => {
    this.state.curriculares_grados_academicos.splice(event.target.value, 1);
    this.setState(
      {
        curriculares_grados_academicos: this.state
          .curriculares_grados_academicos
      },
      () => {
        // console.log(this.state.datos_curriculares);
      }
    );
  };
  render() {
    return (
      <DatosCurricularesForm
        data={this.state}
        handleChange={this.setDataDatosCurriculares}
        addClick={this.addClickDatosCurriculares}
        removeClick={this.removeClickDatosCurriculares}
      />
    );
  }
}

export default DatosCurriculares;
