import React from "react";

import BienesMueblesNoRegistrables from "./BienesMueblesNoRegistrables";
import {
  getData,
catTipoOperacion,
catTiposBienes,
catTitularesBienes,
catFormaAdquision,
catRelacionDeclarante,
catTiposMonedas,
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class BienesMueblesNoRegistrables extends React.Component {
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

  setDataBienesMueblesNoRegistables = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "descripcion":
        data.datos_bienes_muebles_no_registrables.descripcion = valor;
        break;
      case "fecha_adquisicion":
        data.datos_bienes_muebles_no_registrables.fecha_adquisicion = valor;
        break;
      case "forma_adquisicion":
        data.datos_bienes_muebles_no_registrables.forma_adquisicion = getData(
          catFormaAdquision,
          valor
        );
        break;
      case "id":
        data.datos_bienes_muebles_no_registrables.id = valor;
        break;
      case "nombre_denominacion_adquirio":
        data.datos_bienes_muebles_no_registrables.nombre_denominacion_adquirio = valor;
        break;
      case "nombres_copropietarios":
        data.datos_bienes_muebles_no_registrables.nombres_copropietarios = valor;
        break;
      case "observaciones":
        data.datos_bienes_muebles_no_registrables.observaciones = valor;
        break;
      case "porcentaje_propiedad":
        data.datos_bienes_muebles_no_registrables.porcentaje_propiedad = valor;
        break;
      case "precio_adquisicion.moneda":
        data.datos_bienes_muebles_no_registrables.precio_adquisicion.moneda = getData(
          catTipoMoneda,
          valor
        );
        break;
      case "precio_adquisicion":
        data.datos_bienes_muebles_no_registrables.precio_adquisicion.valor = valor;
        break;
      case "relacion_quien_adquirio":
        data.datos_bienes_muebles_no_registrables.relacion_quien_adquirio = getData(
          catRelacionDeclarante,
          valor
        );
        break;
      case "tipo_bien":
        data.datos_bienes_muebles_no_registrables.tipo_bien = getData(
          catTiposBienes,
          valor
        );
        break;
      case "tipo_operacion":
        data.datos_bienes_muebles_no_registrables.tipo_operacion = getData(
          catTipoOperacion,
          valor
        );
        break;
      case "titular_bien":
        data.datos_bienes_muebles_no_registrables.titular_bien = getData(
          catTitularBien,
          valor
        );
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickBienesMueblesNoRegistrables = () => {
    let data = Object.assign(
      {},
      this.state.datos_bienes_muebles_no_registrables
    );
    let info = Object.assign(
      {},
      clean.activos.bienes_muebles_no_registrables[0]
    );
    this.setState(
      {
        bienes_muebles_no_registrables: [
          ...this.state.bienes_muebles_no_registrables,
          data
        ],
        datos_bienes_muebles_no_registrables: info
      },
      () => {
        console.log(this.state.bienes_muebles_no_registrables);
      }
    );
  };

  removeClickBienesMueblesNoRegistrables = index => event => {
    this.state.bienes_muebles_no_registrables.splice(index, 1);
    this.setState(
      {
        bienes_muebles_no_registrables: this.state
          .bienes_muebles_no_registrables
      },
      () => {
        // console.log(this.state.bienes_muebles_no_registrables);
      }
    );
  };

  render() {
    return (
      <BienesMueblesNoRegistrables
        data={this.state}
        handleChange={this.setDataBienesMueblesNoRegistables}
        addClick={this.addClickBienesMueblesNoRegistrables}
        removeClick={this.removeClickBienesMueblesNoRegistrables}
      />
    );
  }
}

export default BienesMueblesNoRegistrables;
