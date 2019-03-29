import React from "react";

import ActividadMenor from "./ActividadMenor";

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
  catTipoMoneda,
  catSectorIndustria,
  catTiposActividades,
  catMedidaPlazo
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class ActividadEconomicaMenor extends React.Component {
  constructor(props) {
    super(props);

    let info;

    info = clean;
    info = example;

    this.state = {
      datos_actividad_economica_menor:
        info.ingresos.actividad_economica_menor[0],
      actividad_economica_menor: [],
      catPaises: [],
      catEntidadesFederativas: [],
      catMunicipios: [],
      catLocalidades: [],
      catTipoVialidad: [],
      catTipoMoneda: [],
      catSectorIndustria: [],
      catTiposActividades: [],
      catMedidaPlazo: []
    };

    // console.log("state constructor", this.state);
  }

  componentDidMount() {
    catPaises().then(data => {
      this.setState({ catPaises: data });
    });
    catEntidadesFederativas().then(data => {
      this.setState({ catEntidadesFederativas: data });
    });
    catMunicipios().then(data => {
      this.setState({ catMunicipios: data });
    });
    catLocalidades().then(data => {
      this.setState({ catLocalidades: data });
    });
    catTipoVialidad().then(data => {
      this.setState({ catTipoVialidad: data });
    });
    catTipoMoneda().then(data => {
      this.setState({ catTipoMoneda: data });
    });
    catSectorIndustria().then(data => {
      this.setState({ catSectorIndustria: data });
    });
    catTiposActividades().then(data => {
      this.setState({ catTiposActividades: data });
    });
    catMedidaPlazo().then(data => {
      this.setState({ catMedidaPlazo: data });
    });
  }

  setDataActividadEconomicaMenor = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.datos_actividad_economica_menor.curp = valor;
        break;
      case "descripcion_actividad_servicio":
        data.datos_actividad_economica_menor.descripcion_actividad_servicio = valor;
        break;
      case "id":
        data.datos_actividad_economica_menor.id = valor;
        break;
      case "ingreso_bruto_anual":
        data.datos_actividad_economica_menor.ingreso_bruto_anual.valor = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.datos_actividad_economica_menor.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.datos_actividad_economica_menor.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.datos_actividad_economica_menor.ingreso_bruto_anual.moneda = getData(
          this.state.catTipoMoneda,
          valor
        );
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.datos_actividad_economica_menor.ingreso_bruto_anual.unidad_temporal = getData(
          this.state.catMedidaPlazo,
          valor
        );
        break;
      case "nombre_denominacion_razon_social":
        data.datos_actividad_economica_menor.nombre_denominacion_razon_social = valor;
        break;
      case "observaciones":
        data.datos_actividad_economica_menor.observaciones = valor;
        break;
      case "rfc":
        data.datos_actividad_economica_menor.rfc = valor;
        break;
      case "sector_industria":
        data.datos_actividad_economica_menor.sector_industria = getData(
          this.state.catSectorIndustria,
          valor
        );
        break;
      case "tipo_actividad_servicio":
        data.datos_actividad_economica_menor.tipo_actividad_servicio = getData(
          this.state.catTiposActividades,
          valor
        );
        break;
      /////////////////////////////  domicilio_actividad  /////////////////////////////////////
      case "pais":
        data.datos_actividad_economica_menor.domicilio_actividad.pais = getData(
          this.state.catPaises,
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_actividad_economica_menor.domicilio_actividad.entidad_federativa = getEntidadesFederativas(
          this.state.catEntidadesFederativas,
          valor
        );
        break;
      case "municipio":
        data.datos_actividad_economica_menor.domicilio_actividad.municipio = getMunicipios(
          this.state.catMunicipios,
          valor
        );

        break;
      case "cp":
        data.datos_actividad_economica_menor.domicilio_actividad.cp = valor;
        break;
      case "localidad":
        data.datos_actividad_economica_menor.domicilio_actividad.localidad = getLocalidades(
          this.state.catLocalidades,
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_actividad_economica_menor.domicilio_actividad.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_actividad_economica_menor.domicilio_actividad.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_actividad_economica_menor.domicilio_actividad.numExt = valor;
        break;
      case "numInt":
        data.datos_actividad_economica_menor.domicilio_actividad.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickActividadMenor = () => {
    let data = Object.assign({}, this.state.datos_actividad_economica_menor);
    let info = Object.assign({}, clean.ingresos.actividad_economica_menor[0]);

    this.setState(
      {
        actividad_economica_menor: [
          ...this.state.actividad_economica_menor,
          data
        ],
        datos_actividad_economica_menor: info
      },
      () => {
        console.log(this.state.actividad_economica_menor);
      }
    );
  };

  removeClickActividadMenor = index => event => {
    this.state.actividad_economica_menor.splice(index, 1);
    this.setState(
      { actividad_economica_menor: this.state.actividad_economica_menor },
      () => {
        // console.log(this.state.actividad_economica_menor);
      }
    );
  };
  render() {
    return (
      <ActividadMenor
        data={this.state}
        handleChange={this.setDataActividadEconomicaMenor}
        addClick={this.addClickActividadMenor}
        removeClick={this.removeClickActividadMenor}
      />
    );
  }
}

export default ActividadEconomicaMenor;
