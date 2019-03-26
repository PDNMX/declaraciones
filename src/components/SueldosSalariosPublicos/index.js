import React from "react";
import SueldosSalariosPublicos from "./SueldosSalariosPublicos";
import {
  getData,
catDependencias,
catTiposMonedas,
catMedidasPlazos,
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class SueldosSalariosPublicos extends React.Component {
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

setDataSueldosSalariosPublicos = field => event => {
  let valor = event.target.value;
  let data = this.state;

  switch (field) {
    case "ente_publico":
      data.datos_sueldos_salarios_publicos.ente_publico = getData(
        catDependencia,
        valor
      );
      break;
    case "id":
      data.datos_sueldos_salarios_publicos.id = valor;
      break;
    case "ingreso_bruto_anual.duracion_frecuencia":
      data.datos_sueldos_salarios_publicos.ingreso_bruto_anual.duracion_frecuencia = valor;
      break;
    case "ingreso_bruto_anual.fecha_transaccion":
      data.datos_sueldos_salarios_publicos.ingreso_bruto_anual.fecha_transaccion = valor;
      break;
    case "ingreso_bruto_anual.moneda":
      data.datos_sueldos_salarios_publicos.ingreso_bruto_anual.moneda = getData(
        catTipoMoneda,
        valor
      );
      break;
    case "ingreso_bruto_anual.unidad_temporal":
      data.datos_sueldos_salarios_publicos.ingreso_bruto_anual.unidad_temporal = getData(
        catMedidaPlazo,
        valor
      );
      break;
    case "ingreso_bruto_anual.valor":
      data.datos_sueldos_salarios_publicos.ingreso_bruto_anual.valor = valor;
      break;
    case "observaciones":
      data.datos_sueldos_salarios_publicos.observaciones = valor;
      break;
    case "rfc":
      data.datos_sueldos_salarios_publicos.rfc = valor;
      break;

    default:
      console.log(field);
  }

  this.setState(data);
};

addClickSueldosSalariosPublicos = () => {
  let data = Object.assign({}, this.state.datos_sueldos_salarios_publicos);
  let info = Object.assign({}, clean.ingresos.sueldos_salarios_publicos[0]);

  this.setState(
    {
      sueldos_salarios_publicos: [
        ...this.state.sueldos_salarios_publicos,
        data
      ],
      datos_sueldos_salarios_publicos: info
    },
    () => {
      console.log(this.state.sueldos_salarios_publicos);
    }
  );
};

removeClickSueldosSalariosPublicos = index => event => {
  this.state.sueldos_salarios_publicos.splice(index, 1);
  this.setState(
    { sueldos_salarios_publicos: this.state.sueldos_salarios_publicos },
    () => {
      // console.log(this.state.sueldos_salarios_publicos);
    }
  );
};

  render() {
    return (
      <SueldosSalariosPublicos
        data={this.state}
        handleChange={this.setDataSueldosSalariosPublicos}
        addClick={this.addClickSueldosSalariosPublicos}
        removeClick={this.removeClickSueldosSalariosPublicos}
      />
    );
  }
}

export default SueldosSalariosPublicos;
