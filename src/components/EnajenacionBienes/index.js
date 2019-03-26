import React from "react";
import EnajenacionBienes from "./EnajenacionBienes";
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
  catTiposBienes,
  catSectorIndustria,
  catTiposActividades,
  catTiposMonedas,
  catMedidasPlazos
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class EnajenacionBienes extends React.Component {
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

  setDataEnajenacionBienes = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.datos_enajenacion_bienes.curp = valor;
        break;
      case "descripcion_bien":
        data.datos_enajenacion_bienes.descripcion_bien = valor;
        break;

      case "tipo_bien":
        data.datos_enajenacion_bienes.tipo_bien = getData(
          catTiposBienes,
          valor
        );
        break;
      case "id":
        data.datos_enajenacion_bienes.id = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.datos_enajenacion_bienes.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.datos_enajenacion_bienes.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.datos_enajenacion_bienes.ingreso_bruto_anual.moneda = getData(
          catTipoMoneda,
          valor
        );
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.datos_enajenacion_bienes.ingreso_bruto_anual.unidad_temporal = getData(
          catMedidaPlazo,
          valor
        );
        break;
      case "ingreso_bruto_anual":
        data.datos_enajenacion_bienes.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion":
        data.datos_enajenacion_bienes.nombre_denominacion = valor;
        break;
      case "observaciones":
        data.datos_enajenacion_bienes.observaciones = valor;
        break;
      case "rfc":
        data.datos_enajenacion_bienes.rfc = valor;
        break;
      case "sector_industria":
        data.datos_enajenacion_bienes.sector_industria = getData(
          catSectorIndustria,
          valor
        );
        break;
      case "tipo_actividad_servicio":
        data.datos_enajenacion_bienes.tipo_actividad_servicio = getData(
          catTiposActividades,
          valor
        );
        break;

      /////////////////////////////  domicilio_bien_enajenado  /////////////////////////////////////
      case "pais":
        data.datos_enajenacion_bienes.domicilio_bien_enajenado.pais = getData(
          catPaises,
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_enajenacion_bienes.domicilio_bien_enajenado.entidad_federativa = getEntidadesFederativas(
          catEntidadesFederativas,
          valor
        );
        break;
      case "municipio":
        data.datos_enajenacion_bienes.domicilio_bien_enajenado.municipio = getMunicipios(
          catMunicipios,
          valor
        );

        this.updateLocalidades(
          this.state.datos_enajenacion_bienes.domicilio_bien_enajenado
            .entidad_federativa.cve_agee,
          valor
        );
        break;
      case "cp":
        data.datos_enajenacion_bienes.domicilio_bien_enajenado.cp = valor;
        break;
      case "localidad":
        data.datos_enajenacion_bienes.domicilio_bien_enajenado.localidad = getLocalidades(
          catLocalidades,
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_enajenacion_bienes.domicilio_bien_enajenado.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_enajenacion_bienes.domicilio_bien_enajenado.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_enajenacion_bienes.domicilio_bien_enajenado.numExt = valor;
        break;
      case "numInt":
        data.datos_enajenacion_bienes.domicilio_bien_enajenado.numInt = valor;
        break;
      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickEnajenacionBienes = () => {
    let data = Object.assign({}, this.state.datos_enajenacion_bienes);
    let info = Object.assign({}, clean.ingresos.enajenacion_bienes[0]);

    this.setState(
      {
        enajenacion_bienes: [...this.state.enajenacion_bienes, data],
        datos_enajenacion_bienes: info
      },
      () => {
        console.log(this.state.enajenacion_bienes);
      }
    );
  };

  removeClickEnajenacionBienes = index => event => {
    this.state.enajenacion_bienes.splice(index, 1);
    this.setState({ enajenacion_bienes: this.state.enajenacion_bienes }, () => {
      // console.log(this.state.enajenacion_bienes);
    });
  };

  render() {
    return (
      <EnajenacionBienes
        data={this.state}
        handleChange={this.setDataEnajenacionBienes}
        addClick={this.addClickEnajenacionBienes}
        removeClick={this.removeClickEnajenacionBienes}
      />
    );
  }
}

export default EnajenacionBienes;
