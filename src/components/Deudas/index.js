import React from "react";
import Deudas from "./Deudas";
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
  catTiposAcredores,
  catTiposAdeudos,
  catSectorIndustria,
  catTiposMonedas,
  catMedidasPlazos,
  catTitularesBienes
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class Deudas extends React.Component {
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

  setDataDeudas = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "fecha_adeudo":
        data.datos_deudas.fecha_adeudo = valor;
        break;
      case "garantia":
        data.datos_deudas.garantia = !data.datos_deudas.garantia;
        break;
      case "id":
        data.datos_deudas.id = valor;
        break;
      case "identificador_deuda":
        data.datos_deudas.identificador_deuda = valor;
        break;
      case "monto_original":
        data.datos_deudas.monto_original = valor;
        break;
      case "montos_abonados":
        data.datos_deudas.montos_abonados = valor;
        break;
      case "nacional_extranjero":
        data.datos_deudas.nacional_extranjero = getData(catPaises, valor);
        break;
      case "nombre_acreedor":
        data.datos_deudas.nombre_acreedor = valor;
        break;
      case "nombre_garante":
        data.datos_deudas.nombre_garante = valor;
        break;
      case "observaciones":
        data.datos_deudas.observaciones = valor;
        break;
      case "plazo_adeudo":
        data.datos_deudas.plazo_adeudo = valor;
        break;
      case "porcentaje_adeudo_titular":
        data.datos_deudas.porcentaje_adeudo_titular = valor;
        break;
      case "rfc_acreedor":
        data.datos_deudas.rfc_acreedor = valor;
        break;
      case "saldo_pendiente":
        data.datos_deudas.saldo_pendiente = valor;
        break;
      case "sector_industria":
        data.datos_deudas.sector_industria = getData(catSectorIndustria, valor);
        break;
      case "tasa_interes":
        data.datos_deudas.tasa_interes = valor;
        break;
      case "tipo_acreedor":
        data.datos_deudas.tipo_acreedor = getData(catTipoAcreedor, valor);
        break;
      case "tipo_adeudo":
        data.datos_deudas.tipo_adeudo = getData(catTipoAdeudo, valor);
        break;
      case "tipo_moneda":
        data.datos_deudas.tipo_moneda = getData(catTipoMoneda, valor);
        break;
      case "tipo_operacion":
        data.datos_deudas.tipo_operacion = getData(catTipoOperacion, valor);
        break;
      case "titularidad_deuda":
        data.datos_deudas.titularidad_deuda = getData(catTitularBien, valor);
        break;
      case "unidad_medida_adeudo":
        data.datos_deudas.unidad_medida_adeudo = getData(catMedidaPlazo, valor);
        break;

      /////////////////////////////  domicilio_acreedor  /////////////////////////////////////
      case "pais":
        data.datos_deudas.domicilio_acreedor.pais = getData(catPaises, valor);
        break;
      case "entidad_federativa":
        data.datos_deudas.domicilio_acreedor.entidad_federativa = getEntidadesFederativas(
          catEntidadesFederativas,
          valor
        );
        break;
      case "municipio":
        data.datos_deudas.domicilio_acreedor.municipio = getMunicipios(
          catMunicipios,
          valor
        );

        this.updateLocalidades(
          this.state.datos_deudas.domicilio_acreedor.entidad_federativa
            .cve_agee,
          valor
        );
        break;
      case "cp":
        data.datos_deudas.domicilio_acreedor.cp = valor;
        break;
      case "localidad":
        data.datos_deudas.domicilio_acreedor.localidad = getLocalidades(
          catLocalidades,
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_deudas.domicilio_acreedor.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_deudas.domicilio_acreedor.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_deudas.domicilio_acreedor.numExt = valor;
        break;
      case "numInt":
        data.datos_deudas.domicilio_acreedor.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickDeudas = () => {
    let data = Object.assign({}, this.state.datos_deudas);
    let info = Object.assign({}, clean.pasivos.deudas[0]);

    this.setState(
      {
        deudas: [...this.state.deudas, data],
        datos_deudas: info
      },
      () => {
        console.log(this.state.deudas);
      }
    );
  };

  removeClickDeudas = index => event => {
    this.state.deudas.splice(index, 1);
    this.setState({ deudas: this.state.deudas }, () => {
      // console.log(this.state.deudas);
    });
  };

  render() {
    return (
      <Deudas
        data={this.state}
        handleChange={this.setDataDeudas}
        addClick={this.addClickDeudas}
        removeClick={this.removeClickDeudas}
      />
    );
  }
}

export default Deudas;
