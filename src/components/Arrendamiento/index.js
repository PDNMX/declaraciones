import React from "react";

import Arrendamiento from "./Arrendamiento";
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

class Arrendamiento extends React.Component {
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

  setDataArrendamiento = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.datos_arrendamiento.curp = valor;
        break;
      case "descripcion_actividad_servicio":
        data.datos_arrendamiento.descripcion_actividad_servicio = valor;
        break;
      case "id":
        data.datos_arrendamiento.id = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.datos_arrendamiento.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.datos_arrendamiento.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.datos_arrendamiento.ingreso_bruto_anual.moneda = getData(
          catTipoMoneda,
          valor
        );
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.datos_arrendamiento.ingreso_bruto_anual.unidad_temporal = getData(
          catMedidaPlazo,
          valor
        );
        break;
      case "ingreso_bruto_anual":
        data.datos_arrendamiento.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion_razon_social":
        data.datos_arrendamiento.nombre_denominacion_razon_social = valor;
        break;
      case "observaciones":
        data.datos_arrendamiento.observaciones = valor;
        break;
      case "rfc":
        data.datos_arrendamiento.rfc = valor;
        break;
      case "sector_industria":
        data.datos_arrendamiento.sector_industria = getData(
          catSectorIndustria,
          valor
        );
        break;
      case "tipo_actividad_servicio":
        data.datos_arrendamiento.tipo_actividad_servicio = getData(
          catTiposActividades,
          valor
        );
        break;

      /////////////////////////////  domicilio_actividad  /////////////////////////////////////
      case "pais":
        data.datos_arrendamiento.domicilio_actividad.pais = getData(
          catPaises,
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_arrendamiento.domicilio_actividad.entidad_federativa = getEntidadesFederativas(
          catEntidadesFederativas,
          valor
        );
        break;
      case "municipio":
        data.datos_arrendamiento.domicilio_actividad.municipio = getMunicipios(
          catMunicipios,
          valor
        );

        this.updateLocalidades(
          this.state.datos_arrendamiento.domicilio_actividad.entidad_federativa
            .cve_agee,
          valor
        );
        break;
      case "cp":
        data.datos_arrendamiento.domicilio_actividad.cp = valor;
        break;
      case "localidad":
        data.datos_arrendamiento.domicilio_actividad.localidad = getLocalidades(
          catLocalidades,
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_arrendamiento.domicilio_actividad.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_arrendamiento.domicilio_actividad.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_arrendamiento.domicilio_actividad.numExt = valor;
        break;
      case "numInt":
        data.datos_arrendamiento.domicilio_actividad.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickArrendamiento = () => {
    let data = Object.assign({}, this.state.datos_arrendamiento);
    let info = Object.assign({}, clean.ingresos.arrendamiento[0]);

    this.setState(
      {
        arrendamiento: [...this.state.arrendamiento, data],
        datos_arrendamiento: info
      },
      () => {
        console.log(this.state.arrendamiento);
      }
    );
  };

  removeClickArrendamiento = index => event => {
    this.state.arrendamiento.splice(index, 1);
    this.setState({ arrendamiento: this.state.arrendamiento }, () => {
      // console.log(this.state.arrendamiento);
    });
  };

  render() {
    return (
      <Arrendamiento
        data={this.state}
        handleChange={this.setDataArrendamiento}
        addClick={this.addClickArrendamiento}
        removeClick={this.removeClickArrendamiento}
      />
    );
  }
}

export default Arrendamiento;
