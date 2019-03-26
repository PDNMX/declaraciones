import React from "react";

import BeneficiosGratuitosForm from "./BeneficiosGratuitos";
import {
  getData,
  catSectorIndustria,
  catEntidadesFederativas,
  catPaises
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class BeneficiosGratuitos extends React.Component {
  constructor(props) {
    super(props);

    let info;

    info = clean;
    info = example;

    this.state = {
      datos_beneficios_gratuitos: info.intereses.beneficios_gratuitos[0],
      catSectorIndustria: [],
      catEntidadesFederativas: [],
      catPaises: []
    };

    // console.log("state constructor", this.state);
  }

  componentDidMount() {
    catSectorIndustria().then(data => {
      this.setState({ catSectorIndustria: data });
    });
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
      <BeneficiosGratuitosForm
        data={this.state}
        handleChange={this.setDataBeneficiosGratuitos}
        addClick={this.addClickBeneficiosGratuitos}
        removeClick={this.removeClickBeneficiosGratuitos}
      />
    );
  }
}

export default BeneficiosGratuitos;
