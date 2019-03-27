import React from "react";
import OtrasObligacionesForm from "./OtrasObligaciones";
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
  catTipoAcreedor,
  catTipoAdeudo,
  catSectorIndustria,
  catTipoMoneda,
  catMedidaPlazo,
  catTitularBien
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class OtrasObligaciones extends React.Component {
  constructor(props) {
    super(props);

    let info;

    info = clean;
    info = example;

    this.state = {
      datos_otras_obligaciones: info.pasivos.otras_obligaciones[0],
      otras_obligaciones: [],
      catPaises: [],
      catEntidadesFederativas: [],
      catMunicipios: [],
      catLocalidades: [],
      catTipoVialidad: [],
      catTipoOperacion: [],
      catTipoAcreedor: [],
      catTipoAdeudo: [],
      catSectorIndustria: [],
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
    catTipoAcreedor().then(data => {
      this.setState({ catTipoAcreedor: data });
    });
    catTipoAdeudo().then(data => {
      this.setState({ catTipoAdeudo: data });
    });
    catSectorIndustria().then(data => {
      this.setState({ catSectorIndustria: data });
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
    catTipoAcreedor().then(data => {
      this.setState({ catTipoAcreedor: data });
    });
  }

  setDataOtrasObligaciones = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "fecha_obligacion":
        data.datos_otras_obligaciones.fecha_obligacion = valor;
        break;
      case "garantia":
        data.datos_otras_obligaciones.garantia = !data.datos_otras_obligaciones
          .garantia;
        break;
      case "id":
        data.datos_otras_obligaciones.id = valor;
        break;
      case "identificador_obligacion":
        data.datos_otras_obligaciones.identificador_obligacion = valor;
        break;
      case "monto_original":
        data.datos_otras_obligaciones.monto_original = valor;
        break;
      case "montos_abonados":
        data.datos_otras_obligaciones.montos_abonados = valor;
        break;
      case "nacional_extranjero":
        data.datos_otras_obligaciones.nacional_extranjero = getData(
          catPaises,
          valor
        );
        break;
      case "nombre_acreedor":
        data.datos_otras_obligaciones.nombre_acreedor = valor;
        break;
      case "observaciones":
        data.datos_otras_obligaciones.observaciones = valor;
        break;
      case "plazo_obligacion":
        data.datos_otras_obligaciones.plazo_obligacion = valor;
        break;
      case "porcentaje_obligacion_titular":
        data.datos_otras_obligaciones.porcentaje_obligacion_titular = valor;
        break;
      case "rfc_acreedor":
        data.datos_otras_obligaciones.rfc_acreedor = valor;
        break;
      case "saldo_pendiente":
        data.datos_otras_obligaciones.saldo_pendiente = valor;
        break;
      case "sector_industria":
        data.datos_otras_obligaciones.sector_industria = getData(
          catSectorIndustria,
          valor
        );
        break;
      case "tasa_interes":
        data.datos_otras_obligaciones.tasa_interes = valor;
        break;
      case "tipo_acreedor":
        data.datos_otras_obligaciones.tipo_acreedor = getData(
          catTipoAcreedor,
          valor
        );
        break;
      case "tipo_moneda":
        data.datos_otras_obligaciones.tipo_moneda = getData(
          catTipoMoneda,
          valor
        );
        break;
      case "tipo_obligacion":
        data.datos_otras_obligaciones.tipo_obligacion = getData(
          catTipoAdeudo,
          valor
        );
        break;
      case "tipo_operacion":
        data.datos_otras_obligaciones.tipo_operacion = getData(
          catTipoOperacion,
          valor
        );
        break;
      case "titularidad_obligacion":
        data.datos_otras_obligaciones.titularidad_obligacion = getData(
          catTitularBien,
          valor
        );
        break;
      case "unidad_medida_plazo":
        data.datos_otras_obligaciones.unidad_medida_plazo = getData(
          catMedidaPlazo,
          valor
        );
        break;

      /////////////////////////////  domicilio_acreedor  /////////////////////////////////////
      case "pais":
        data.datos_otras_obligaciones.domicilio_acreedor.pais = getData(
          catPaises,
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_otras_obligaciones.domicilio_acreedor.entidad_federativa = getEntidadesFederativas(
          catEntidadesFederativas,
          valor
        );
        break;
      case "municipio":
        data.datos_otras_obligaciones.domicilio_acreedor.municipio = getMunicipios(
          catMunicipios,
          valor
        );

        this.updateLocalidades(
          this.state.datos_otras_obligaciones.domicilio_acreedor
            .entidad_federativa.cve_agee,
          valor
        );
        break;
      case "cp":
        data.datos_otras_obligaciones.domicilio_acreedor.cp = valor;
        break;
      case "localidad":
        data.datos_otras_obligaciones.domicilio_acreedor.localidad = getLocalidades(
          catLocalidades,
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_otras_obligaciones.domicilio_acreedor.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_otras_obligaciones.domicilio_acreedor.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_otras_obligaciones.domicilio_acreedor.numExt = valor;
        break;
      case "numInt":
        data.datos_otras_obligaciones.domicilio_acreedor.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickOtrasObligaciones = () => {
    let data = Object.assign({}, this.state.datos_otras_obligaciones);
    let info = Object.assign({}, clean.pasivos.otras_obligaciones[0]);

    this.setState(
      {
        otras_obligaciones: [...this.state.otras_obligaciones, data],
        datos_otras_obligaciones: info
      },
      () => {
        console.log(this.state.otras_obligaciones);
      }
    );
  };

  removeClickOtrasObligaciones = index => event => {
    this.state.otras_obligaciones.splice(index, 1);
    this.setState({ otras_obligaciones: this.state.otras_obligaciones }, () => {
      // console.log(this.state.otras_obligaciones);
    });
  };

  render() {
    return (
      <OtrasObligacionesForm
        data={this.state}
        handleChange={this.setDataOtrasObligaciones}
        addClick={this.addClickOtrasObligaciones}
        removeClick={this.removeClickOtrasObligaciones}
      />
    );
  }
}

export default OtrasObligaciones;
