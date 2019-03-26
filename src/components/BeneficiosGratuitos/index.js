import React from "react";

import BeneficiosGratuitos from "./BeneficiosGratuitos";
import {
  getData,
catSectorIndustria
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class BeneficiosGratuitos extends React.Component {
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

setDataBeneficiosGratuitos = field => event => {
  let valor = event.target.value;
  let data = this.state;

  switch (field) {
    case "id":
      data.datos_beneficios_gratuitos.id = valor;
      break;
    case "observaciones":
      data.datos_beneficios_gratuitos.observaciones = valor;
      break;
    case "origen_beneficio":
      data.datos_beneficios_gratuitos.origen_beneficio = valor;
      break;
    case "sector_industria":
      data.datos_beneficios_gratuitos.sector_industria = getData(
        catSectorIndustria,
        valor
      );
      break;
    case "tipo_beneficio":
      data.datos_beneficios_gratuitos.tipo_beneficio = valor;
      break;
    case "valor_beneficio":
      data.datos_beneficios_gratuitos.valor_beneficio = valor;
      break;

    default:
      console.log(field);
  }

  this.setState(data);
};


addClickBeneficiosGratuitos = () => {
  let data = Object.assign({}, this.state.datos_beneficios_gratuitos);
  let info = Object.assign({}, clean.intereses.beneficios_gratuitos[0]);

  this.setState(
    {
      beneficios_gratuitos: [...this.state.beneficios_gratuitos, data],
      datos_beneficios_gratuitos: info
    },
    () => {
      console.log(this.state.beneficios_gratuitos);
    }
  );
};


removeClickBeneficiosGratuitos = index => event => {
  this.state.beneficios_gratuitos.splice(index, 1);
  this.setState(
    { beneficios_gratuitos: this.state.beneficios_gratuitos },
    () => {
      // console.log(this.state.beneficios_gratuitos);
    }
  );
};
  render() {
    return (
      <BeneficiosGratuitos
        data={this.state}
        handleChange={this.setDataBeneficiosGratuitos}
        addClick={this.addClickBeneficiosGratuitos}
        removeClick={this.removeClickBeneficiosGratuitos}
      />
    );
  }
}

export default BeneficiosGratuitos;
