import React from "react";
import InversionesForm from "./Inversiones";
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
  catTipoOperacion,
  catTipoInversion,
  catTipoEspecificoInversion,
  catSectorIndustria,
  catFormaAdquision,
  catTipoMoneda,
  catMedidaPlazo,
  catTitularBien
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class InversionesCuentasValores extends React.Component {
  constructor(props) {
    super(props);

    let info;

    info = clean;
    info = example;

    this.state = {
      datos_inversiones_cuentas_valores:
        info.activos.inversiones_cuentas_valores[0],
      inversiones_cuentas_valores: [],
      catPaises: [],
      catEntidadesFederativas: [],
      catMunicipios: [],
      catLocalidades: [],
      catTipoVialidad: [],
      catTipoOperacion: [],
      catTipoInversion: [],
      catTipoEspecificoInversion: [],
      catSectorIndustria: [],
      catFormaAdquision: [],
      catTipoMoneda: [],
      catMedidaPlazo: [],
      catTitularBien: []
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
    catTipoOperacion().then(data => {
      this.setState({ catTipoOperacion: data });
    });
    catTipoInversion().then(data => {
      this.setState({ catTipoInversion: data });
    });
    catTipoEspecificoInversion().then(data => {
      this.setState({ catTipoEspecificoInversion: data });
    });
    catSectorIndustria().then(data => {
      this.setState({ catSectorIndustria: data });
    });
    catFormaAdquision().then(data => {
      this.setState({ catFormaAdquision: data });
    });
    catTipoMoneda().then(data => {
      this.setState({ catTipoMoneda: data });
    });
    catMedidaPlazo().then(data => {
      this.setState({ catMedidaPlazo: data });
    });
    catTitularBien().then(data => {
      this.setState({ catTitularBien: data });
    });
  }

  setDataInversionesCuentasValores = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "fecha_inicio":
        data.datos_inversiones_cuentas_valores.fecha_inicio = valor;
        break;
      case "forma_adquisicion":
        data.datos_inversiones_cuentas_valores.forma_adquisicion = getData(
          this.state.catFormaAdquision,
          valor
        );
        break;
      case "id":
        data.datos_inversiones_cuentas_valores.id = valor;
        break;
      case "monto_original":
        data.datos_inversiones_cuentas_valores.monto_original = valor;
        break;
      case "nacional_extranjero":
        data.datos_inversiones_cuentas_valores.nacional_extranjero = getData(
          this.state.catPaises,
          valor
        );
        break;
      case "nombre_institucion":
        data.datos_inversiones_cuentas_valores.nombre_institucion = valor;
        break;
      case "numero_cuenta":
        data.datos_inversiones_cuentas_valores.numero_cuenta = valor;
        break;
      case "observaciones":
        data.datos_inversiones_cuentas_valores.observaciones = valor;
        break;
      case "plazo":
        data.datos_inversiones_cuentas_valores.plazo = valor;
        break;
      case "porcentaje_inversion":
        data.datos_inversiones_cuentas_valores.porcentaje_inversion = valor;
        break;
      case "rfc_institucion":
        data.datos_inversiones_cuentas_valores.rfc_institucion = valor;
        break;
      case "saldo_anual":
        data.datos_inversiones_cuentas_valores.saldo_anual = valor;
        break;
      case "sector_industria":
        data.datos_inversiones_cuentas_valores.sector_industria = getData(
          this.state.catSectorIndustria,
          valor
        );
        break;
      case "tasa_interes":
        data.datos_inversiones_cuentas_valores.tasa_interes = valor;
        break;
      case "tipo_especifico_inversion":
        data.datos_inversiones_cuentas_valores.tipo_especifico_inversion = getData(
          this.state.catTipoEspecificoInversion,
          valor
        );
        break;
      case "tipo_inversion":
        data.datos_inversiones_cuentas_valores.tipo_inversion = getData(
          this.state.catTipoInversion,
          valor
        );
        break;
      case "tipo_moneda":
        data.datos_inversiones_cuentas_valores.tipo_moneda = getData(
          this.state.catTipoMoneda,
          valor
        );
        break;
      case "tipo_operacion":
        data.datos_inversiones_cuentas_valores.tipo_operacion = getData(
          this.state.catTipoOperacion,
          valor
        );
        break;
      case "titular_bien":
        data.datos_inversiones_cuentas_valores.titular_bien = getData(
          this.state.catTitularBien,
          valor
        );
        break;
      case "unidad_medida_plazo":
        data.datos_inversiones_cuentas_valores.unidad_medida_plazo = getData(
          this.state.catMedidaPlazo,
          valor
        );
        break;

      /////////////////////////////  domicilio_institucion  /////////////////////////////////////
      case "pais":
        data.datos_inversiones_cuentas_valores.domicilio_institucion.pais = getData(
          this.state.catPaises,
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_inversiones_cuentas_valores.domicilio_institucion.entidad_federativa = getEntidadesFederativas(
          this.state.catEntidadesFederativas,
          valor
        );
        break;
      case "municipio":
        data.datos_inversiones_cuentas_valores.domicilio_institucion.municipio = getMunicipios(
          this.state.catMunicipios,
          valor
        );

        this.updateLocalidades(
          this.state.datos_inversiones_cuentas_valores.domicilio_institucion
            .entidad_federativa.cve_agee,
          valor
        );
        break;
      case "cp":
        data.datos_inversiones_cuentas_valores.domicilio_institucion.cp = valor;
        break;
      case "localidad":
        data.datos_inversiones_cuentas_valores.domicilio_institucion.localidad = getLocalidades(
          this.state.catLocalidades,
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_inversiones_cuentas_valores.domicilio_institucion.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_inversiones_cuentas_valores.domicilio_institucion.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_inversiones_cuentas_valores.domicilio_institucion.numExt = valor;
        break;
      case "numInt":
        data.datos_inversiones_cuentas_valores.domicilio_institucion.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickInversiones = () => {
    let data = Object.assign({}, this.state.datos_inversiones_cuentas_valores);
    let info = Object.assign({}, clean.activos.inversiones_cuentas_valores[0]);

    this.setState(
      {
        inversiones_cuentas_valores: [
          ...this.state.inversiones_cuentas_valores,
          data
        ],
        datos_inversiones_cuentas_valores: info
      },
      () => {
        console.log(this.state.inversiones_cuentas_valores);
      }
    );
  };

  removeClickInversiones = index => event => {
    this.state.inversiones_cuentas_valores.splice(index, 1);
    this.setState(
      { inversiones_cuentas_valores: this.state.inversiones_cuentas_valores },
      () => {
        // console.log(this.state.inversiones_cuentas_valores);
      }
    );
  };

  render() {
    return (
      <InversionesForm
        data={this.state}
        handleChange={this.setDataInversionesCuentasValores}
        addClick={this.addClickInversiones}
        removeClick={this.removeClickInversiones}
      />
    );
  }
}

export default InversionesCuentasValores;
