import React from "react";
import Intereses from "./Intereses";
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

class Intereses extends React.Component {
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

  setDataIntereses = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.datos_intereses.curp = valor;
        break;
      case "descripcion_actividad_servicio":
        data.datos_intereses.descripcion_actividad_servicio = valor;
        break;
      case "id":
        data.datos_intereses.id = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.datos_intereses.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.datos_intereses.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.datos_intereses.ingreso_bruto_anual.moneda = getData(
          catTipoMoneda,
          valor
        );
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.datos_intereses.ingreso_bruto_anual.unidad_temporal = getData(
          catMedidaPlazo,
          valor
        );
        break;
      case "ingreso_bruto_anual":
        data.datos_intereses.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion_razon_social":
        data.datos_intereses.nombre_denominacion_razon_social = valor;
        break;
      case "observaciones":
        data.datos_intereses.observaciones = valor;
        break;
      case "rfc":
        data.datos_intereses.rfc = valor;
        break;
      case "sector_industria":
        data.datos_intereses.sector_industria = getData(
          catSectorIndustria,
          valor
        );
        break;
      case "tipo_actividad_servicio":
        data.datos_intereses.tipo_actividad_servicio = getData(
          catTiposActividades,
          valor
        );
        break;
      /////////////////////////////  domicilio  /////////////////////////////////////
      case "pais":
        data.datos_intereses.domicilio.pais = getData(catPaises, valor);
        break;
      case "entidad_federativa":
        data.datos_intereses.domicilio.entidad_federativa = getEntidadesFederativas(
          catEntidadesFederativas,
          valor
        );
        break;
      case "municipio":
        data.datos_intereses.domicilio.municipio = getMunicipios(
          catMunicipios,
          valor
        );

        this.updateLocalidades(
          this.state.datos_intereses.domicilio.entidad_federativa.cve_agee,
          valor
        );
        break;
      case "cp":
        data.datos_intereses.domicilio.cp = valor;
        break;
      case "localidad":
        data.datos_intereses.domicilio.localidad = getLocalidades(
          catLocalidades,
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_intereses.domicilio.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_intereses.domicilio.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_intereses.domicilio.numExt = valor;
        break;
      case "numInt":
        data.datos_intereses.domicilio.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickIntereses = () => {
    let data = Object.assign({}, this.state.datos_intereses);
    let info = Object.assign({}, clean.ingresos.intereses[0]);

    this.setState(
      {
        intereses: [...this.state.intereses, data],
        datos_intereses: info
      },
      () => {
        console.log(this.state.intereses);
      }
    );
  };

  removeClickIntereses = index => event => {
    this.state.intereses.splice(index, 1);
    this.setState({ intereses: this.state.intereses }, () => {
      // console.log(this.state.intereses);
    });
  };

  render() {
    return (
      <Intereses
        data={this.state}
        handleChange={this.setDataIntereses}
        addClick={this.addClickIntereses}
        removeClick={this.removeClickIntereses}
      />
    );
  }
}

export default Intereses;
