import React from "react";
import EfectivoMetales from "./EfectivoMetales";
import {
  getData,
catTipoOperacion,
catTiposMonedas,
catTiposMetales,
catFormaAdquision,
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class EfectivoMetales extends React.Component {

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


setDataEfectivoMetales = field => event => {
  let valor = event.target.value;
  let data = this.state;

  switch (field) {
    case "forma_adquisicion":
      data.datos_efectivo_metales.forma_adquisicion = getData(
        catFormaAdquision,
        valor
      );
      break;
    case "id":
      data.datos_efectivo_metales.id = valor;
      break;
    case "monto_moneda":
      data.datos_efectivo_metales.monto_moneda = valor;
      break;
    case "observaciones_comentarios":
      data.datos_efectivo_metales.observaciones_comentarios = valor;
      break;
    case "tipo_metal":
      data.datos_efectivo_metales.tipo_metal = getData(catTipoMetal, valor);
      break;
    case "tipo_moneda":
      data.datos_efectivo_metales.tipo_moneda = getData(catTipoMoneda, valor);
      break;
    case "tipo_operacion":
      data.datos_efectivo_metales.tipo_operacion = getData(
        catTipoOperacion,
        valor
      );
      break;
    case "unidades":
      data.datos_efectivo_metales.unidades = valor;
      break;
    case "monto_metal":
      data.datos_efectivo_metales.monto_metal = valor;
      break;
    default:
      console.log(field);
  }

  this.setState(data);
};


addClickEfectivoMetales = () => {
  let data = Object.assign({}, this.state.datos_efectivo_metales);
  let info = Object.assign({}, clean.activos.efectivo_metales[0]);

  this.setState(
    {
      efectivo_metales: [...this.state.efectivo_metales, data],
      datos_efectivo_metales: info
    },
    () => {
      console.log(this.state.efectivo_metales);
    }
  );
};

removeClickEfectivoMetales = index => event => {
  this.state.efectivo_metales.splice(index, 1);
  this.setState({ efectivo_metales: this.state.efectivo_metales }, () => {
    // console.log(this.state.efectivo_metales);
  });
};

  render() {
    return (
      <EfectivoMetales
        data={this.state}
        handleChange={this.setDataEfectivoMetales}
        addClick={this.addClickEfectivoMetales}
        removeClick={this.removeClickEfectivoMetales}
      />
    );
  }
}

export default EfectivoMetales;
