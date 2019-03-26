import React from "react";
import Premios from "./Premios";
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
  catSectorIndustria,
  catTiposActividades,
  catTiposMonedas,
  catMedidasPlazos
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class Premios extends React.Component {
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

  setDataPremios = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.datos_premios.curp = valor;
        break;
      case "descripcion_premio":
        data.datos_premios.descripcion_premio = valor;
        break;
      case "id":
        data.datos_premios.id = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.datos_premios.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.datos_premios.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.datos_premios.ingreso_bruto_anual.moneda = getData(
          catTipoMoneda,
          valor
        );
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.datos_premios.ingreso_bruto_anual.unidad_temporal = getData(
          catMedidaPlazo,
          valor
        );
        break;
      case "ingreso_bruto_anual":
        data.datos_premios.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion":
        data.datos_premios.nombre_denominacion = valor;
        break;
      case "observaciones":
        data.datos_premios.observaciones = valor;
        break;
      case "rfc":
        data.datos_premios.rfc = valor;
        break;
      case "sector_industria":
        data.datos_premios.sector_industria = getData(
          catSectorIndustria,
          valor
        );
        break;
      case "tipo_actividad_servicio":
        data.datos_premios.tipo_actividad_servicio = getData(
          catTiposActividades,
          valor
        );
        break;

      /////////////////////////////  domicilio  /////////////////////////////////////
      case "pais":
        data.datos_premios.domicilio.pais = getData(catPaises, valor);
        break;
      case "entidad_federativa":
        data.datos_premios.domicilio.entidad_federativa = getEntidadesFederativas(
          catEntidadesFederativas,
          valor
        );
        break;
      case "municipio":
        data.datos_premios.domicilio.municipio = getMunicipios(
          catMunicipios,
          valor
        );

        this.updateLocalidades(
          this.state.datos_premios.domicilio.entidad_federativa.cve_agee,
          valor
        );
        break;
      case "cp":
        data.datos_premios.domicilio.cp = valor;
        break;
      case "localidad":
        data.datos_premios.domicilio.localidad = getLocalidades(
          catLocalidades,
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_premios.domicilio.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_premios.domicilio.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_premios.domicilio.numExt = valor;
        break;
      case "numInt":
        data.datos_premios.domicilio.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickPremios = () => {
    let data = Object.assign({}, this.state.datos_premios);
    let info = Object.assign({}, clean.ingresos.premios[0]);

    this.setState(
      {
        premios: [...this.state.premios, data],
        datos_premios: info
      },
      () => {
        console.log(this.state.premios);
      }
    );
  };

  removeClickPremios = index => event => {
    this.state.premios.splice(index, 1);
    this.setState({ premios: this.state.premios }, () => {
      // console.log(this.state.premios);
    });
  };

  render() {
    return (
      <Premios
        data={this.state}
        handleChange={this.setDataPremios}
        addClick={this.addClickPremios}
        removeClick={this.removeClickPremios}
      />
    );
  }
}

export default Premios;
