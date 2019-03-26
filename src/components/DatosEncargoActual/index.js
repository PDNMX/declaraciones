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
  catNivelGobierno,
  catPoderJuridico,
  catSectorIndustria
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

import EncargoActual from "./EncargoActual";

class DatosEncargoActual extends React.Component {
  constructor(props) {
    super(props);

    let info;

    info = clean;
    info = example;

    this.state = {
      datos_encargo_actual: info.informacion_personal.datos_encargo_actual,
      catPaises: [],
      catEntidadesFederativas: [],
      catMunicipios: [],
      catLocalidades: [],
      catTipoVialidad: [],
      catNivelGobierno: [],
      catPoderJuridico: [],
      catSectorIndustria: []
    };
  }

  setDataEncargoActual = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "ente_publico":
        data.datos_encargo_actual.ente_publico = valor;
        break;
      case "empleo_cargo_comision":
        data.datos_encargo_actual.empleo_cargo_comision = valor;
        break;
      case "nivel_gobierno":
        data.datos_encargo_actual.nivel_gobierno = getData(
          catNivelGobierno,
          valor
        );
        break;
      case "poder_juridico":
        data.datos_encargo_actual.poder_juridico = getData(
          catPoderJuridico,
          valor
        );
        break;
      case "contratado_honorarios":
        data.datos_encargo_actual.contratado_honorarios = !data
          .datos_encargo_actual.contratado_honorarios;
        break;
      case "nivel_encargo":
        data.datos_encargo_actual.nivel_encargo = valor;
        break;
      case "area_adscripcion":
        data.datos_encargo_actual.area_adscripcion = valor;
        break;
      case "fecha_posesion":
        data.datos_encargo_actual.fecha_posesion = valor;
        break;
      case "telefono_laboral.numero":
        data.datos_encargo_actual.telefono_laboral.numero = valor;
        break;
      case "telefono_laboral.extension":
        data.datos_encargo_actual.telefono_laboral.extension = valor;
        break;
      case "sector_industria":
        data.datos_encargo_actual.sector_industria = getData(
          catSectorIndustria,
          valor
        );
        break;
      case "funciones_principales.codigo":
        data.datos_encargo_actual.funciones_principales.codigo = valor;
        break;
      /////////////////////////////  direccion_encargo  /////////////////////////////////////
      case "pais":
        data.datos_encargo_actual.direccion_encargo.pais = getData(
          catPaises,
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_encargo_actual.direccion_encargo.entidad_federativa = getEntidadesFederativas(
          catEntidadesFederativas,
          valor
        );
        break;
      case "municipio":
        data.datos_encargo_actual.direccion_encargo.municipio = getMunicipios(
          catMunicipios,
          valor
        );

        this.updateLocalidades(
          this.state.datos_encargo_actual.direccion_encargo.entidad_federativa
            .cve_agee,
          valor
        );
        break;
      case "cp":
        data.datos_encargo_actual.direccion_encargo.cp = valor;
        break;
      case "localidad":
        data.datos_encargo_actual.direccion_encargo.localidad = getLocalidades(
          catLocalidades,
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_encargo_actual.direccion_encargo.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_encargo_actual.direccion_encargo.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_encargo_actual.direccion_encargo.numExt = valor;
        break;
      case "numInt":
        data.datos_encargo_actual.direccion_encargo.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  componentDidMount() {
    let {
      entidad_federativa,
      municipio,
      localidad
    } = this.state.datos_encargo_actual.direccion_encargo;

    console.log(this.state.datos_encargo_actual.direccion_encargo);

    catPaises().then(data => {
      this.setState({ catPaises: data });
    });
    catEntidadesFederativas().then(data => {
      this.setState({ catEntidadesFederativas: data });
    });

    catMunicipios(entidad_federativa.cve_agee).then(data => {
      this.setState({ catMunicipios: data });
    });

    catLocalidades(entidad_federativa.cve_agee, municipio.cve_mun).then(
      data => {
        this.setState({ catLocalidades: data });
      }
    );

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

  render() {
    return (
      <EncargoActual
        data={this.state}
        handleChange={this.setDataEncargoActual}
      />
    );
  }
}

export default DatosEncargoActual;
