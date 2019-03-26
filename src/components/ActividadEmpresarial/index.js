import React from "react";

import ActividadEmpresarial from "./ActividadEmpresarial";
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
class ActividadEmpresarial extends React.Component {
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

  setDataActividadEmpresarial = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.datos_actividad_empresarial.curp = valor;
        break;
      case "descripcion_actividad_servicio":
        data.datos_actividad_empresarial.descripcion_actividad_servicio = valor;
        break;
      case "id":
        data.datos_actividad_empresarial.id = valor;
        break;
      case "ingreso_bruto_anual":
        data.datos_actividad_empresarial.ingreso_bruto_anual.valor = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.datos_actividad_empresarial.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.datos_actividad_empresarial.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.datos_actividad_empresarial.ingreso_bruto_anual.moneda = getData(
          catTipoMoneda,
          valor
        );
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.datos_actividad_empresarial.ingreso_bruto_anual.unidad_temporal = getData(
          catMedidaPlazo,
          valor
        );
        break;
      case "ingreso_bruto_anual.valor":
        data.datos_actividad_empresarial.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion_razon_social":
        data.datos_actividad_empresarial.nombre_denominacion_razon_social = valor;
        break;
      case "observaciones":
        data.datos_actividad_empresarial.observaciones = valor;
        break;
      case "rfc":
        data.datos_actividad_empresarial.rfc = valor;
        break;
      case "sector_industria":
        data.datos_actividad_empresarial.sector_industria = getData(
          catSectorIndustria,
          valor
        );
        break;
      case "tipo_actividad_servicio":
        data.datos_actividad_empresarial.tipo_actividad_servicio = getData(
          catTiposActividades,
          valor
        );
        break;
      /////////////////////////////  domicilio_actividad_empresarial  /////////////////////////////////////
      case "pais":
        data.datos_actividad_empresarial.domicilio_actividad_empresarial.pais = getData(
          catPaises,
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_actividad_empresarial.domicilio_actividad_empresarial.entidad_federativa = getEntidadesFederativas(
          catEntidadesFederativas,
          valor
        );
        break;
      case "municipio":
        data.datos_actividad_empresarial.domicilio_actividad_empresarial.municipio = getMunicipios(
          catMunicipios,
          valor
        );

        this.updateLocalidades(
          this.state.datos_actividad_empresarial.domicilio_actividad_empresarial
            .entidad_federativa.cve_agee,
          valor
        );
        break;
      case "cp":
        data.datos_actividad_empresarial.domicilio_actividad_empresarial.cp = valor;
        break;
      case "localidad":
        data.datos_actividad_empresarial.domicilio_actividad_empresarial.localidad = getLocalidades(
          catLocalidades,
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_actividad_empresarial.domicilio_actividad_empresarial.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_actividad_empresarial.domicilio_actividad_empresarial.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_actividad_empresarial.domicilio_actividad_empresarial.numExt = valor;
        break;
      case "numInt":
        data.datos_actividad_empresarial.domicilio_actividad_empresarial.numInt = valor;
        break;
      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickActividadEmpresarial = () => {
    let data = Object.assign({}, this.state.datos_actividad_empresarial);
    let info = Object.assign({}, clean.ingresos.actividad_empresarial[0]);

    this.setState(
      {
        actividad_empresarial: [...this.state.actividad_empresarial, data],
        datos_actividad_empresarial: info
      },
      () => {
        console.log(this.state.actividad_empresarial);
      }
    );
  };

  removeClickActividadEmpresarial = index => event => {
    this.state.actividad_empresarial.splice(index, 1);
    this.setState(
      { actividad_empresarial: this.state.actividad_empresarial },
      () => {
        // console.log(this.state.actividad_empresarial);
      }
    );
  };

  render() {
    return (
      <ActividadEmpresarial
        data={this.state}
        handleChange={this.setDataActividadEmpresarial}
        addClick={this.addClickActividadEmpresarial}
        removeClick={this.removeClickActividadEmpresarial}
      />
    );
  }
}

export default ActividadEmpresarial;
