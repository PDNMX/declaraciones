import React from "react";
import Fideicomisos from "./Fideicomisos";
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
catTipoOperacion,
catTiposFideicomisos,
catPaises,
catTiposMonedas,
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class Fideicomisos extends React.Component {

  constructor(props) {
  super(props);

  let info;

  info = clean;
  info = example;

  // this.state = data;
  // this.state.informacion_general =
  //   info.informacion_personal.informacion_general;
  // this.state.entidad_federativa=getSectorIndustria();
  // let catEntidadesFederativas_data = catEntidadesFederativas();

  this.state = {
    datos_curriculares_grados_academicos:
      info.informacion_personal.datos_curriculares.grados_academicos[0],
    catEntidadesFederativas: [],
    catPaises: [],
    catEstatusEstudio: [],
    catDocumentoObtenido: [],
    curriculares_grados_academicos: []
  };

  // console.log("state constructor", this.state);
}

componentDidMount() {
  catEntidadesFederativas().then(data => {
    this.setState({ catEntidadesFederativas: data });
  });
  catPaises().then(data => {
    this.setState({ catPaises: data });
  });
}

setDataFideicomisos = field => event => {
  let valor = event.target.value;
  let data = this.state;

  switch (field) {
    case "id":
      data.datos_fideicomisos.id = valor;
      break;
    case "tipo_operacion":
      data.datos_fideicomisos.tipo_operacion = getData(
        catTipoOperacion,
        valor
      );
      break;
    case "identificador_fideicomiso":
      data.datos_fideicomisos.identificador_fideicomiso = valor;
      break;
    case "tipo_fideicomiso":
      data.datos_fideicomisos.tipo_fideicomiso = getData(
        catTipoFideicomiso,
        valor
      );
      break;
    case "objetivo":
      data.datos_fideicomisos.objetivo = valor;
      break;
    case "numero_registro":
      data.datos_fideicomisos.numero_registro = valor;
      break;
    case "fecha_creacion":
      data.datos_fideicomisos.fecha_creacion = valor;
      break;
    case "vigencia":
      data.datos_fideicomisos.vigencia = valor;
      break;
    case "residencia":
      data.datos_fideicomisos.residencia = getData(catPaises, valor);
      break;
    case "valor":
      data.datos_fideicomisos.valor = valor;
      break;
    case "moneda":
      data.datos_fideicomisos.moneda = getData(catTipoMoneda, valor);
      break;
    case "porcentaje_propiedad_derechos_fiduciarios":
      data.datos_fideicomisos.porcentaje_propiedad_derechos_fiduciarios = valor;
      break;
    case "ingreso_monetario_obtenido":
      data.datos_fideicomisos.ingreso_monetario_obtenido = valor;
      break;
    case "institucion_fiduciaria":
      data.datos_fideicomisos.institucion_fiduciaria = valor;
      break;
    case "observaciones":
      data.datos_fideicomisos.observaciones = valor;
      break;

    case "fideicomitente.nombre":
      data.datos_fideicomisos.fideicomitente.nombre = valor;
      break;
    case "fideicomitente.rfc":
      data.datos_fideicomisos.fideicomitente.rfc = valor;
      break;
    case "fideicomitente.curp":
      data.datos_fideicomisos.fideicomitente.curp = valor;
      break;
    case "fideicomitente.fecha_constitucion":
      data.datos_fideicomisos.fideicomitente.fecha_constitucion = valor;
      break;

    case "fideicomisario.nombre":
      data.datos_fideicomisos.fideicomisario.nombre = valor;
      break;
    case "fideicomisario.rfc":
      data.datos_fideicomisos.fideicomisario.rfc = valor;
      break;
    case "fideicomisario.curp":
      data.datos_fideicomisos.fideicomisario.curp = valor;
      break;
    case "fideicomisario.fecha_constitucion":
      data.datos_fideicomisos.fideicomisario.fecha_constitucion = valor;
      break;

    case "fiduciario.nombre":
      data.datos_fideicomisos.fiduciario.nombre = valor;
      break;
    case "fiduciario.rfc":
      data.datos_fideicomisos.fiduciario.rfc = valor;
      break;
    case "fiduciario.curp":
      data.datos_fideicomisos.fiduciario.curp = valor;
      break;
    case "fiduciario.fecha_constitucion":
      data.datos_fideicomisos.fiduciario.fecha_constitucion = valor;
      break;

    default:
      console.log(field);
  }

  this.setState(data);
};


addClickFideicomisos = () => {
  let data = Object.assign({}, this.state.datos_fideicomisos);
  let info = Object.assign({}, clean.activos.fideicomisos[0]);

  this.setState(
    {
      fideicomisos: [...this.state.fideicomisos, data],
      datos_fideicomisos: info
    },
    () => {
      console.log(this.state.fideicomisos);
    }
  );
};


removeClickFideicomisos = index => event => {
  this.state.fideicomisos.splice(index, 1);
  this.setState({ fideicomisos: this.state.fideicomisos }, () => {
    // console.log(this.state.fideicomisos);
  });
};


setDataDireccionFideicomitente = field => event => {
  let valor = event.target.value;
  let data = this.state;

  switch (field) {
    /////////////////////////////  domicilio  /////////////////////////////////////
    case "pais":
      data.datos_fideicomisos.fideicomitente.domicilio.pais = getData(
        catPaises,
        valor
      );
      break;
    case "entidad_federativa":
      data.datos_fideicomisos.fideicomitente.domicilio.entidad_federativa = getEntidadesFederativas(
        catEntidadesFederativas,
        valor
      );
      break;
    case "municipio":
      data.datos_fideicomisos.fideicomitente.domicilio.municipio = getMunicipios(
        catMunicipios,
        valor
      );

      this.updateLocalidades(
        this.state.datos_fideicomisos.fideicomitente.domicilio
          .entidad_federativa.cve_agee,
        valor
      );
      break;
    case "cp":
      data.datos_fideicomisos.fideicomitente.domicilio.cp = valor;
      break;
    case "localidad":
      data.datos_fideicomisos.fideicomitente.domicilio.localidad = getLocalidades(
        catLocalidades,
        valor
      );
      break;
    case "vialidad.tipo_vial":
      data.datos_fideicomisos.fideicomitente.domicilio.vialidad.tipo_vial = valor;
      break;
    case "vialidad.nom_vial":
      data.datos_fideicomisos.fideicomitente.domicilio.vialidad.nom_vial = valor;
      break;
    case "numExt":
      data.datos_fideicomisos.fideicomitente.domicilio.numExt = valor;
      break;
    case "numInt":
      data.datos_fideicomisos.fideicomitente.domicilio.numInt = valor;
      break;

    default:
      console.log(field);
  }

  this.setState(data);
};

setDataDireccionFideicomisario = field => event => {
  let valor = event.target.value;
  let data = this.state;

  switch (field) {
    /////////////////////////////  domicilio  /////////////////////////////////////
    case "pais":
      data.datos_fideicomisos.fideicomisario.domicilio.pais = getData(
        catPaises,
        valor
      );
      break;
    case "entidad_federativa":
      data.datos_fideicomisos.fideicomisario.domicilio.entidad_federativa = getEntidadesFederativas(
        catEntidadesFederativas,
        valor
      );
      break;
    case "municipio":
      data.datos_fideicomisos.fideicomisario.domicilio.municipio = getMunicipios(
        catMunicipios,
        valor
      );

      this.updateLocalidades(
        this.state.datos_fideicomisos.fideicomisario.domicilio
          .entidad_federativa.cve_agee,
        valor
      );
      break;
    case "cp":
      data.datos_fideicomisos.fideicomisario.domicilio.cp = valor;
      break;
    case "localidad":
      data.datos_fideicomisos.fideicomisario.domicilio.localidad = getLocalidades(
        catLocalidades,
        valor
      );
      break;
    case "vialidad.tipo_vial":
      data.datos_fideicomisos.fideicomisario.domicilio.vialidad.tipo_vial = valor;
      break;
    case "vialidad.nom_vial":
      data.datos_fideicomisos.fideicomisario.domicilio.vialidad.nom_vial = valor;
      break;
    case "numExt":
      data.datos_fideicomisos.fideicomisario.domicilio.numExt = valor;
      break;
    case "numInt":
      data.datos_fideicomisos.fideicomisario.domicilio.numInt = valor;
      break;

    default:
      console.log(field);
  }

  this.setState(data);
};

setDataDireccionFiduciario = field => event => {
  let valor = event.target.value;
  let data = this.state;

  switch (field) {
    /////////////////////////////  domicilio  /////////////////////////////////////
    case "pais":
      data.datos_fideicomisos.fiduciario.domicilio.pais = getData(
        catPaises,
        valor
      );
      break;
    case "entidad_federativa":
      data.datos_fideicomisos.fiduciario.domicilio.entidad_federativa = getEntidadesFederativas(
        catEntidadesFederativas,
        valor
      );
      break;
    case "municipio":
      data.datos_fideicomisos.fiduciario.domicilio.municipio = getMunicipios(
        catMunicipios,
        valor
      );

      this.updateLocalidades(
        this.state.datos_fideicomisos.fiduciario.domicilio.entidad_federativa
          .cve_agee,
        valor
      );
      break;
    case "cp":
      data.datos_fideicomisos.fiduciario.domicilio.cp = valor;
      break;
    case "localidad":
      data.datos_fideicomisos.fiduciario.domicilio.localidad = getLocalidades(
        catLocalidades,
        valor
      );
      break;
    case "vialidad.tipo_vial":
      data.datos_fideicomisos.fiduciario.domicilio.vialidad.tipo_vial = valor;
      break;
    case "vialidad.nom_vial":
      data.datos_fideicomisos.fiduciario.domicilio.vialidad.nom_vial = valor;
      break;
    case "numExt":
      data.datos_fideicomisos.fiduciario.domicilio.numExt = valor;
      break;
    case "numInt":
      data.datos_fideicomisos.fiduciario.domicilio.numInt = valor;
      break;

    default:
      console.log(field);
  }

  this.setState(data);
};


  render() {
    return (
      <Fideicomisos
        data={this.state}
        handleChange={this.setDataFideicomisos}
        addClick={this.addClickFideicomisos}
        removeClick={this.removeClickFideicomisos}
        setDataDireccionFideicomitente={this.setDataDireccionFideicomitente}
        setDataDireccionFideicomisario={this.setDataDireccionFideicomisario}
        setDataDireccionFiduciario={this.setDataDireccionFiduciario}
      />
    );
  }
}

export default Fideicomisos;
