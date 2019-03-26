import React from "react";

import {
  getData,
  catPaises,
  getEntidadesFederativas,
  catEntidadesFederativas,
  getMunicipios,
  catMunicipios,
  getLocalidades,
  catLocalidades,
  catTipoVialidad,
  catAmbito,
  catNivelGobierno,
  catPoderJuridico,
  catSectorIndustria
} from "../../Funciones/";

import ExperienciaLaboralForm from "./ExperienciaLaboral";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class ExperienciaLaboral extends React.Component {
  constructor(props) {
    super(props);

    let info;

    info = clean;
    info = example;

    this.state = {
      datos_experiencia_laboral:
        info.informacion_personal.experiencia_laboral[0],
      catPaises: [],
      catEntidadesFederativas: [],
      catMunicipios: [],
      catLocalidades: [],
      catTipoVialidad: [],
      catAmbito: [],
      catNivelGobierno: [],
      catPoderJuridico: [],
      catSectorIndustria: []
    };

    console.log("state constructor", this.state);
  }

  componentDidMount() {
    catPaises().then(data => {
      this.setState({ catPaises: data });
    });
    catEntidadesFederativas().then(data => {
      this.setState({ catEntidadesFederativas: data });
    });
    catMunicipios().then(data => {
      this.setState({ catMunicipios: data });
    });
    catLocalidades().then(data => {
      this.setState({ catLocalidades: data });
    });
    catTipoVialidad().then(data => {
      this.setState({ catTipoVialidad: data });
    });
    catAmbito().then(data => {
      this.setState({ catAmbito: data });
    });
    catNivelGobierno().then(data => {
      this.setState({ catNivelGobierno: data });
    });
    catPoderJuridico().then(data => {
      this.setState({ catPoderJuridico: data });
    });
    catSectorIndustria().then(data => {
      this.setState({ catSectorIndustria: data });
    });
  }

  setDataExperienciaLaboral = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "ambito":
        data.datos_experiencia_laboral.ambito = getData(catAmbito, valor);
        break;
      case "nivel_gobierno":
        data.datos_experiencia_laboral.nivel_gobierno = getData(
          catNivelGobierno,
          valor
        );
        break;
      case "poder_ente":
        data.datos_experiencia_laboral.poder_ente = getData(
          catPoderJuridico,
          valor
        );
        break;
      case "nombre_institucion":
        data.datos_experiencia_laboral.nombre_institucion = valor;
        break;
      case "unidad_administrativa":
        data.datos_experiencia_laboral.unidad_administrativa = valor;
        break;
      case "sector_industria":
        data.datos_experiencia_laboral.sector_industria = getData(
          catSectorIndustria,
          valor
        );
        break;
      case "jerarquia_rango":
        data.datos_experiencia_laboral.jerarquia_rango = valor;
        break;

      case "cargo_puesto":
        data.datos_experiencia_laboral.cargo_puesto = valor;
        break;
      case "fecha_ingreso":
        data.datos_experiencia_laboral.fecha_ingreso = valor;
        break;
      case "fecha_salida":
        data.datos_experiencia_laboral.fecha_salida = valor;
        break;
      case "funciones_principales.codigo":
        data.datos_experiencia_laboral.funciones_principales[0].codigo = valor;
        break;
      /////////////////////////////  direccion  /////////////////////////////////////
      case "pais":
        data.datos_experiencia_laboral.direccion.pais = getData(
          catPaises,
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_experiencia_laboral.direccion.entidad_federativa = getEntidadesFederativas(
          catEntidadesFederativas,
          valor
        );
        break;
      case "municipio":
        data.datos_experiencia_laboral.direccion.municipio = getMunicipios(
          catMunicipios,
          valor
        );

        this.updateLocalidades(
          this.state.datos_experiencia_laboral.direccion.entidad_federativa
            .cve_agee,
          valor
        );
        break;
      case "cp":
        data.datos_experiencia_laboral.direccion.cp = valor;
        break;
      case "localidad":
        data.datos_experiencia_laboral.direccion.localidad = getLocalidades(
          catLocalidades,
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_experiencia_laboral.direccion.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_experiencia_laboral.direccion.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_experiencia_laboral.direccion.numExt = valor;
        break;
      case "numInt":
        data.datos_experiencia_laboral.direccion.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickExperienciaLaborar = () => {
    let data = Object.assign({}, this.state.datos_experiencia_laboral);
    let info = Object.assign(
      {},
      clean.informacion_personal.experiencia_laboral[0]
    );

    this.setState(
      {
        experiencia_laboral: [...this.state.experiencia_laboral, data],
        datos_experiencia_laboral: info
      },
      () => {
        console.log(this.state.experiencia_laboral);
      }
    );
  };

  removeClickExperienciaLaborar = index => event => {
    this.state.experiencia_laboral.splice(index, 1);
    this.setState(
      { experiencia_laboral: this.state.experiencia_laboral },
      () => {
        // console.log(this.state.experiencia_laboral);
      }
    );
  };

  render() {
    return (
      <ExperienciaLaboralForm
        data={this.state}
        handleChange={this.setDataExperienciaLaboral}
        addClick={this.addClickExperienciaLaborar}
        removeClick={this.removeClickExperienciaLaborar}
      />
    );
  }
}

export default ExperienciaLaboral;
