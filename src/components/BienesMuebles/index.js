import React from "react";

import BienesMueblesRegistrablesFrom from "./BienesMueblesRegistrables";
import {
  getData,
  catTipoOperacion,
  catTipoBienInmueble,
  catPaises,
  catEntidadesFederativas,
  getEntidadesFederativas,
  catTitularBien,
  catFormaAdquision,
  catRelacionDeclarante,
  catSectorIndustria,
  catTipoMoneda
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class BienesMuebles extends React.Component {
  constructor(props) {
    super(props);

    let info;

    info = clean;
    info = example;

    this.state = {
      datos_bienes_muebles_registrables:
        info.activos.bienes_muebles_registrables[0],
      bienes_muebles_registrables: [],
      catTipoOperacion: [],
      catTipoBienInmueble: [],
      catPaises: [],
      catEntidadesFederativas: [],
      catTitularBien: [],
      catFormaAdquision: [],
      catRelacionDeclarante: [],
      catSectorIndustria: [],
      catTipoMoneda: []
    };

    // console.log("state constructor", this.state);
  }

  componentDidMount() {
    catTipoOperacion().then(data => {
      this.setState({ catTipoOperacion: data });
    });
    catTipoBienInmueble().then(data => {
      console.log(data);
      this.setState({ catTipoBienInmueble: data });
    });
    catPaises().then(data => {
      this.setState({ catPaises: data });
    });
    catEntidadesFederativas().then(data => {
      this.setState({ catEntidadesFederativas: data });
    });
    catTitularBien().then(data => {
      this.setState({ catTitularBien: data });
    });
    catFormaAdquision().then(data => {
      this.setState({ catFormaAdquision: data });
    });
    catRelacionDeclarante().then(data => {
      this.setState({ catRelacionDeclarante: data });
    });
    catSectorIndustria().then(data => {
      this.setState({ catSectorIndustria: data });
    });
    catTipoMoneda().then(data => {
      this.setState({ catTipoMoneda: data });
    });
  }

  setDataBienesMueblesRegistables = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "fecha_adquisicion":
        data.datos_bienes_muebles_registrables.fecha_adquisicion = valor;
        break;
      case "forma_adquisicion":
        data.datos_bienes_muebles_registrables.forma_adquisicion = getData(
          catFormaAdquision,
          valor
        );
        break;
      case "id":
        data.datos_bienes_muebles_registrables.id = valor;
        break;
      case "lugar_registro.entidad":
        data.datos_bienes_muebles_registrables.lugar_registro.entidad = getEntidadesFederativas(
          catEntidadesFederativas,
          valor
        );
        break;
      case "lugar_registro.pais":
        data.datos_bienes_muebles_registrables.lugar_registro.pais = getData(
          catPaises,
          valor
        );
        break;
      case "marca":
        data.datos_bienes_muebles_registrables.marca = valor;
        break;
      case "modelo":
        data.datos_bienes_muebles_registrables.modelo = valor;
        break;
      case "nombre_denominacion_adquirio":
        data.datos_bienes_muebles_registrables.nombre_denominacion_adquirio = valor;
        break;
      case "nombres_copropietarios":
        data.datos_bienes_muebles_registrables.nombres_copropietarios = valor;
        break;
      case "numero_registro_vehicular":
        data.datos_bienes_muebles_registrables.numero_registro_vehicular = valor;
        break;
      case "numero_serie":
        data.datos_bienes_muebles_registrables.numero_serie = valor;
        break;
      case "observaciones":
        data.datos_bienes_muebles_registrables.observaciones = valor;
        break;
      case "porcentaje_propiedad":
        data.datos_bienes_muebles_registrables.porcentaje_propiedad = valor;
        break;
      case "precio_adquisicion.moneda":
        data.datos_bienes_muebles_registrables.precio_adquisicion.moneda = getData(
          catTipoMoneda,
          valor
        );
        break;
      case "precio_adquisicion":
        data.datos_bienes_muebles_registrables.precio_adquisicion.valor = valor;
        break;
      case "relacion_persona_quien_adquirio":
        data.datos_bienes_muebles_registrables.relacion_persona_quien_adquirio = getData(
          catRelacionDeclarante,
          valor
        );
        break;
      case "rfc_quien_adquirio":
        data.datos_bienes_muebles_registrables.rfc_quien_adquirio = valor;
        break;
      case "sector_industria":
        data.datos_bienes_muebles_registrables.sector_industria = getData(
          catSectorIndustria,
          valor
        );
        break;
      case "submarca":
        data.datos_bienes_muebles_registrables.submarca = valor;
        break;
      case "tipo_bien_inmueble":
        data.datos_bienes_muebles_registrables.tipo_bien_mueble = getData(
          catTipoBienInmueble,
          valor
        );
        break;
      case "tipo_operacion":
        data.datos_bienes_muebles_registrables.tipo_operacion = getData(
          catTipoOperacion,
          valor
        );
        break;
      case "titular_bien":
        data.datos_bienes_muebles_registrables.titular_bien = getData(
          catTitularBien,
          valor
        );
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickBienesMueblesRegistrables = () => {
    let data = Object.assign({}, this.state.datos_bienes_muebles_registrables);
    let info = Object.assign({}, clean.activos.bienes_muebles_registrables[0]);

    this.setState(
      {
        bienes_muebles_registrables: [
          ...this.state.bienes_muebles_registrables,
          data
        ],
        datos_bienes_muebles_registrables: info
      },
      () => {
        console.log(this.state.bienes_muebles_registrables);
      }
    );
  };

  removeClickBienesMueblesRegistrables = index => event => {
    this.state.bienes_muebles_registrables.splice(index, 1);
    this.setState(
      { bienes_muebles_registrables: this.state.bienes_muebles_registrables },
      () => {
        // console.log(this.state.bienes_muebles_registrables);
      }
    );
  };

  render() {
    return (
      <BienesMueblesRegistrablesFrom
        data={this.state}
        handleChange={this.setDataBienesMueblesRegistables}
        addClick={this.addClickBienesMueblesRegistrables}
        removeClick={this.removeClickBienesMueblesRegistrables}
      />
    );
  }
}

export default BienesMuebles;
