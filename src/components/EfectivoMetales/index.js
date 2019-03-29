import React from "react";
import EfectivoMetalesForm from "./EfectivoMetales";
import {
  getData,
  catTipoOperacion,
  catTipoMoneda,
  catTipoMetal,
  catFormaAdquision,
  catEntidadesFederativas,
  catPaises
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class EfectivoMetales extends React.Component {
  constructor(props) {
    super(props);

    let info;

    info = clean;
    info = example;

    this.state = {
      datos_efectivo_metales: info.activos.efectivo_metales[0],
      efectivo_metales: [],
      catTipoOperacion: [],
      catTipoMoneda: [],
      catTipoMetal: [],
      catFormaAdquision: [],
      catEntidadesFederativas: [],
      catPaises: []
    };

    // console.log("state constructor", this.state);
  }

  componentDidMount() {
    catTipoOperacion().then(data => {
      this.setState({ catTipoOperacion: data });
    });
    catTipoMoneda().then(data => {
      this.setState({ catTipoMoneda: data });
    });
    catTipoMetal().then(data => {
      this.setState({ catTipoMetal: data });
    });
    catFormaAdquision().then(data => {
      this.setState({ catFormaAdquision: data });
    });
    catEntidadesFederativas().then(data => {
      this.setState({ catEntidadesFederativas: data });
    });
    catPaises().then(data => {
      this.setState({ catPaises: data });
    });
    catTipoMetal().then(data => {
      this.setState({ catTipoMetal: data });
    });
  }

  setDataEfectivoMetales = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "forma_adquisicion":
        data.datos_efectivo_metales.forma_adquisicion = getData(
          this.state.catFormaAdquision,
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
        data.datos_efectivo_metales.tipo_metal = getData(this.state.catTipoMetal, valor);
        break;
      case "tipo_moneda":
        data.datos_efectivo_metales.tipo_moneda = getData(this.state.catTipoMoneda, valor);
        break;
      case "tipo_operacion":
        data.datos_efectivo_metales.tipo_operacion = getData(
          this.state.catTipoOperacion,
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
      <EfectivoMetalesForm
        data={this.state}
        handleChange={this.setDataEfectivoMetales}
        addClick={this.addClickEfectivoMetales}
        removeClick={this.removeClickEfectivoMetales}
      />
    );
  }
}

export default EfectivoMetales;
