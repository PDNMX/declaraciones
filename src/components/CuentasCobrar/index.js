import React from "react";
import CuentasCobrarForm from "./CuentasCobrar";
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
  catSectorIndustria
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class CuentasCobrar extends React.Component {
  constructor(props) {
    super(props);

    let info;

    info = clean;
    info = example;

    this.state = {
      datos_cuentas_por_cobrar: info.activos.cuentas_por_cobrar[0],
      cuentas_por_cobrar: [],
      catPaises: [],
      catEntidadesFederativas: [],
      catMunicipios: [],
      catLocalidades: [],
      catTipoVialidad: [],
      catSectorIndustria: []
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
    catSectorIndustria().then(data => {
      this.setState({ catSectorIndustria: data });
    });
  }

  setDataCuentasPorCobrar = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "fecha_prestamo":
        data.datos_cuentas_por_cobrar.fecha_prestamo = valor;
        break;
      case "fecha_vencimiento":
        data.datos_cuentas_por_cobrar.fecha_vencimiento = valor;
        break;
      case "id":
        data.datos_cuentas_por_cobrar.id = valor;
        break;
      case "monto_original_prestamo":
        data.datos_cuentas_por_cobrar.monto_original_prestamo = valor;
        break;
      case "nombre_copropietario":
        data.datos_cuentas_por_cobrar.nombre_copropietario = valor;
        break;
      case "nombre_prestatario":
        data.datos_cuentas_por_cobrar.nombre_prestatario = valor;
        break;
      case "numero_registro":
        data.datos_cuentas_por_cobrar.numero_registro = valor;
        break;
      case "observaciones":
        data.datos_cuentas_por_cobrar.observaciones = valor;
        break;
      case "porcentaje_copropiedad":
        data.datos_cuentas_por_cobrar.porcentaje_copropiedad = valor;
        break;
      case "saldo_pendiente":
        data.datos_cuentas_por_cobrar.saldo_pendiente = valor;
        break;
      case "sector_industria":
        data.datos_cuentas_por_cobrar.sector_industria = getData(
          this.state.catSectorIndustria,
          valor
        );
        break;
      case "tasa_interes":
        data.datos_cuentas_por_cobrar.tasa_interes = valor;
        break;

      /////////////////////////////  domicilio_prestatarios  /////////////////////////////////////
      case "pais":
        data.datos_cuentas_por_cobrar.domicilio_prestatarios.pais = getData(
          this.state.catPaises,
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_cuentas_por_cobrar.domicilio_prestatarios.entidad_federativa = getEntidadesFederativas(
          this.state.catEntidadesFederativas,
          valor
        );
        break;
      case "municipio":
        data.datos_cuentas_por_cobrar.domicilio_prestatarios.municipio = getMunicipios(
          this.state.catMunicipios,
          valor
        );

        this.updateLocalidades(
          this.state.datos_cuentas_por_cobrar.domicilio_prestatarios
            .entidad_federativa.cve_agee,
          valor
        );
        break;
      case "cp":
        data.datos_cuentas_por_cobrar.domicilio_prestatarios.cp = valor;
        break;
      case "localidad":
        data.datos_cuentas_por_cobrar.domicilio_prestatarios.localidad = getLocalidades(
          this.state.catLocalidades,
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_cuentas_por_cobrar.domicilio_prestatarios.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_cuentas_por_cobrar.domicilio_prestatarios.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_cuentas_por_cobrar.domicilio_prestatarios.numExt = valor;
        break;
      case "numInt":
        data.datos_cuentas_por_cobrar.domicilio_prestatarios.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickCuentasCobrar = () => {
    let data = Object.assign({}, this.state.datos_cuentas_por_cobrar);
    let info = Object.assign({}, clean.activos.cuentas_por_cobrar[0]);

    this.setState(
      {
        cuentas_por_cobrar: [...this.state.cuentas_por_cobrar, data],
        datos_cuentas_por_cobrar: info
      },
      () => {
        console.log(this.state.cuentas_por_cobrar);
      }
    );
  };

  removeClickCuentasCobrar = index => event => {
    this.state.cuentas_por_cobrar.splice(index, 1);
    this.setState({ cuentas_por_cobrar: this.state.cuentas_por_cobrar }, () => {
      // console.log(this.state.cuentas_por_cobrar);
    });
  };

  render() {
    return (
      <CuentasCobrarForm
        data={this.state}
        handleChange={this.setDataCuentasPorCobrar}
        addClick={this.addClickCuentasCobrar}
        removeClick={this.removeClickCuentasCobrar}
      />
    );
  }
}

export default CuentasCobrar;
