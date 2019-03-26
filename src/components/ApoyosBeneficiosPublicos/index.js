import React from "react";

import ApoyosPublicos from "./ApoyosPublicos";
import {
  getData,
  catEntidadesFederativas,
  catPaises,
  catNivelGobierno,
  catTipoApoyo
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class ApoyosBeneficiosPublicos extends React.Component {
  constructor(props) {
    super(props);

    let info;

    info = clean;
    info = example;

    this.state = {
      datos_apoyos_beneficios_publicos:
        info.intereses.apoyos_beneficios_publicos[0],

      catEntidadesFederativas: [],
      catPaises: [],
      catNivelGobierno: [],
      catTipoApoyo: []
    };

    // console.log("state constructor", this.state);
  }

  componentDidMount() {
    catNivelGobierno().then(data => {
      this.setState({ catNivelGobierno: data });
    });
    catTipoApoyo().then(data => {
      this.setState({ catTipoApoyo: data });
    });
    catEntidadesFederativas().then(data => {
      this.setState({ catEntidadesFederativas: data });
    });
    catPaises().then(data => {
      this.setState({ catPaises: data });
    });
    catNivelGobierno().then(data => {
      this.setState({ catNivelGobierno: data });
    });
    catTipoApoyo().then(data => {
      this.setState({ catTipoApoyo: data });
    });
  }

  setDataApoyosBeneficiosPublicos = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "es_beneficiario":
        data.datos_apoyos_beneficios_publicos.es_beneficiario = !data
          .datos_apoyos_beneficios_publicos.es_beneficiario;
        break;
      case "id":
        data.datos_apoyos_beneficios_publicos.id = valor;
        break;
      case "institucion_otorgante":
        data.datos_apoyos_beneficios_publicos.institucion_otorgante = valor;
        break;
      case "nivel_orden_gobierno":
        data.datos_apoyos_beneficios_publicos.nivel_orden_gobierno = getData(
          catNivelGobierno,
          valor
        );
        break;
      case "observaciones":
        data.datos_apoyos_beneficios_publicos.observaciones = valor;
        break;
      case "programa":
        data.datos_apoyos_beneficios_publicos.programa = valor;
        break;
      case "tipo_apoyo":
        data.datos_apoyos_beneficios_publicos.tipo_apoyo = getData(
          catTipoApoyo,
          valor
        );
        break;
      case "valor_anual_apoyo":
        data.datos_apoyos_beneficios_publicos.valor_anual_apoyo = valor;
        break;
      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickApoyosPublicos = () => {
    let data = Object.assign({}, this.state.datos_apoyos_beneficios_publicos);
    let info = Object.assign({}, clean.intereses.apoyos_beneficios_publicos[0]);

    this.setState(
      {
        apoyos_beneficios_publicos: [
          ...this.state.apoyos_beneficios_publicos,
          data
        ],
        datos_apoyos_beneficios_publicos: info
      },
      () => {
        console.log(this.state.apoyos_beneficios_publicos);
      }
    );
  };

  removeClickApoyosPublicos = index => event => {
    this.state.apoyos_beneficios_publicos.splice(index, 1);
    this.setState(
      { apoyos_beneficios_publicos: this.state.apoyos_beneficios_publicos },
      () => {
        // console.log(this.state.apoyos_beneficios_publicos);
      }
    );
  };

  render() {
    return (
      <ApoyosPublicos
        data={this.state}
        handleChange={this.setDataApoyosBeneficiosPublicos}
        addClick={this.addClickApoyosPublicos}
        removeClick={this.removeClickApoyosPublicos}
      />
    );
  }
}

export default ApoyosBeneficiosPublicos;
