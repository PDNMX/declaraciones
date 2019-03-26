import React from "react";

import BienesIntangibles from "./BienesIntangibles";
import {
  getData,
catTipoOperacion,
catSectorIndustria,
catTiposMonedas,
catFormaAdquision,
catTiposMonedas,
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class BienesIntangibles extends React.Component {

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

setDataBienesIntangibles = field => event => {
  let valor = event.target.value;
  let data = this.state;

  switch (field) {
    case "descripcion":
      data.datos_bienes_intangibles.descripcion = valor;
      break;
    case "ente_publico_encargado":
      data.datos_bienes_intangibles.ente_publico_encargado = valor;
      break;
    case "fecha_registro":
      data.datos_bienes_intangibles.fecha_registro = valor;
      break;
    case "fecha_vencimiento":
      data.datos_bienes_intangibles.fecha_vencimiento = valor;
      break;
    case "forma_adquisicion":
      data.datos_bienes_intangibles.forma_adquisicion = getData(
        catFormaAdquision,
        valor
      );
      break;
    case "id":
      data.datos_bienes_intangibles.id = valor;
      break;
    case "nombre_copropietario":
      data.datos_bienes_intangibles.nombre_copropietario = valor;
      break;
    case "numero_registro":
      data.datos_bienes_intangibles.numero_registro = valor;
      break;
    case "observaciones":
      data.datos_bienes_intangibles.observaciones = valor;
      break;
    case "porcentaje_copropiedad":
      data.datos_bienes_intangibles.porcentaje_copropiedad = valor;
      break;
    case "porcentaje_propiedad_copropietario":
      data.datos_bienes_intangibles.porcentaje_propiedad_copropietario = valor;
      break;
    case "precio_adquisicion.moneda":
      data.datos_bienes_intangibles.precio_adquisicion.moneda = getData(
        catTipoMoneda,
        valor
      );
      break;
    case "precio_adquisicion":
      data.datos_bienes_intangibles.precio_adquisicion.valor = valor;
      break;
    case "precio_total_copropiedad.moneda":
      data.datos_bienes_intangibles.precio_total_copropiedad.moneda = getData(
        catTipoMoneda,
        valor
      );
      break;
    case "precio_total_copropiedad":
      data.datos_bienes_intangibles.precio_total_copropiedad.valor = valor;
      break;
    case "propietario_registrado":
      data.datos_bienes_intangibles.propietario_registrado = valor;
      break;
    case "sector_industria":
      data.datos_bienes_intangibles.sector_industria = getData(
        catSectorIndustria,
        valor
      );
      break;
    case "tipo_operacion":
      data.datos_bienes_intangibles.tipo_operacion = getData(
        catTipoOperacion,
        valor
      );
      break;

    default:
      console.log(field);
  }

  this.setState(data);
};


addClickBienesIntangibles = () => {
  let data = Object.assign({}, this.state.datos_bienes_intangibles);
  let info = Object.assign({}, clean.activos.bienes_intangibles[0]);

  this.setState(
    {
      bienes_intangibles: [...this.state.bienes_intangibles, data],
      datos_bienes_intangibles: info
    },
    () => {
      console.log(this.state.bienes_intangibles);
    }
  );
};

removeClickBienesIntangibles = index => event => {
  this.state.bienes_intangibles.splice(index, 1);
  this.setState({ bienes_intangibles: this.state.bienes_intangibles }, () => {
    // console.log(this.state.bienes_intangibles);
  });
};

  render() {
    return (
      <BienesIntangibles
        data={this.state}
        handleChange={this.setDataBienesIntangibles}
        addClick={this.addClickBienesIntangibles}
        removeClick={this.removeClickBienesIntangibles}
      />
    );
  }
}

export default BienesIntangibles;
