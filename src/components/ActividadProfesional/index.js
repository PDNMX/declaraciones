import React from "react";

import ActividadProfesionalForm from "./ActividadProfesional";
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
  catTiposActividades,
  catSectorIndustria,
  catMedidaPlazo,
  catTipoMoneda
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class ActividadProfesional extends React.Component {
  constructor(props) {
    super(props);

    let info;

    info = clean;
    info = example;

    this.state = {
      datos_actividad_profesional: info.ingresos.actividad_profesional[0],
      actividad_profesional: [],
      catPaises: [],
      catEntidadesFederativas: [],
      catMunicipios: [],
      catLocalidades: [],
      catTipoVialidad: [],
      catTiposActividades: [],
      catSectorIndustria: [],
      catMedidaPlazo: [],
      catTipoMoneda: []
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
    catTiposActividades().then(data => {
      this.setState({ catTiposActividades: data });
    });
    catSectorIndustria().then(data => {
      this.setState({ catSectorIndustria: data });
    });
    catMedidaPlazo().then(data => {
      this.setState({ catMedidaPlazo: data });
    });
    catTipoMoneda().then(data => {
      this.setState({ catTipoMoneda: data });
    });
  }

  setDataActividadProfesional = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.datos_actividad_profesional.curp = valor;
        break;
      case "descripcion_actividad_servicio":
        data.datos_actividad_profesional.descripcion_actividad_servicio = valor;
        break;
      case "id":
        data.datos_actividad_profesional.id = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.datos_actividad_profesional.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.datos_actividad_profesional.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.datos_actividad_profesional.ingreso_bruto_anual.moneda = getData(
          catTipoMoneda,
          valor
        );
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.datos_actividad_profesional.ingreso_bruto_anual.unidad_temporal = getData(
          catMedidaPlazo,
          valor
        );
        break;
      case "ingreso_bruto_anual":
        data.datos_actividad_profesional.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion_razon_social":
        data.datos_actividad_profesional.nombre_denominacion_razon_social = valor;
        break;
      case "observaciones":
        data.datos_actividad_profesional.observaciones = valor;
        break;
      case "rfc":
        data.datos_actividad_profesional.rfc = valor;
        break;
      case "sector_industria":
        data.datos_actividad_profesional.sector_industria = getData(
          catSectorIndustria,
          valor
        );
        break;
      case "tipo_actividad_servicio":
        data.datos_actividad_profesional.tipo_actividad_servicio = getData(
          catTiposActividades,
          valor
        );
        break;
      /////////////////////////////  domicilio_persona_paga  /////////////////////////////////////
      case "pais":
        data.datos_actividad_profesional.domicilio_persona_paga.pais = getData(
          catPaises,
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_actividad_profesional.domicilio_persona_paga.entidad_federativa = getEntidadesFederativas(
          catEntidadesFederativas,
          valor
        );
        break;
      case "municipio":
        data.datos_actividad_profesional.domicilio_persona_paga.municipio = getMunicipios(
          catMunicipios,
          valor
        );

        this.updateLocalidades(
          this.state.datos_actividad_profesional.domicilio_persona_paga
            .entidad_federativa.cve_agee,
          valor
        );
        break;
      case "cp":
        data.datos_actividad_profesional.domicilio_persona_paga.cp = valor;
        break;
      case "localidad":
        data.datos_actividad_profesional.domicilio_persona_paga.localidad = getLocalidades(
          catLocalidades,
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_actividad_profesional.domicilio_persona_paga.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_actividad_profesional.domicilio_persona_paga.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_actividad_profesional.domicilio_persona_paga.numExt = valor;
        break;
      case "numInt":
        data.datos_actividad_profesional.domicilio_persona_paga.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickActividadProfesional = () => {
    let data = Object.assign({}, this.state.datos_actividad_profesional);
    let info = Object.assign({}, clean.ingresos.actividad_profesional[0]);

    this.setState(
      {
        actividad_profesional: [...this.state.actividad_profesional, data],
        datos_actividad_profesional: info
      },
      () => {
        console.log(this.state.actividad_profesional);
      }
    );
  };

  removeClickActividadProfesional = index => event => {
    this.state.actividad_profesional.splice(index, 1);
    this.setState(
      { actividad_profesional: this.state.actividad_profesional },
      () => {
        // console.log(this.state.actividad_profesional);
      }
    );
  };

  render() {
    return (
      <ActividadProfesionalForm
        data={this.state}
        handleChange={this.setDataActividadProfesional}
        addClick={this.addClickActividadProfesional}
        removeClick={this.removeClickActividadProfesional}
      />
    );
  }
}

export default ActividadProfesional;
