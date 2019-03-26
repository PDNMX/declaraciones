import React from "react";
import ClientesPrincipales from "./ClientesPrincipales";

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

class ClientesPrincipales extends React.Component {
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

  setDataClientesPrincipales = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "dueno_encargado":
        data.datos_clientes_principales.dueno_encargado = valor;
        break;
      case "id":
        data.datos_clientes_principales.id = valor;
        break;
      case "nombre":
        data.datos_clientes_principales.nombre = valor;
        break;
      case "nombre_negocio":
        data.datos_clientes_principales.nombre_negocio = valor;
        break;
      case "numero_registro":
        data.datos_clientes_principales.numero_registro = valor;
        break;
      case "observaciones":
        data.datos_clientes_principales.observaciones = valor;
        break;
      case "porcentaje_participacion":
        data.datos_clientes_principales.porcentaje_participacion = valor;
        break;
      case "rfc":
        data.datos_clientes_principales.rfc = valor;
        break;
      case "sector_industria":
        data.datos_clientes_principales.sector_industria = getData(
          catSectorIndustria,
          valor
        );
        break;
      /////////////////////////////  DOMICILIO  /////////////////////////////////////
      case "pais":
        data.datos_clientes_principales.domicilio.pais = getData(
          catPaises,
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_clientes_principales.domicilio.entidad_federativa = getEntidadesFederativas(
          catEntidadesFederativas,
          valor
        );
        break;
      case "municipio":
        data.datos_clientes_principales.domicilio.municipio = getMunicipios(
          catMunicipios,
          valor
        );

        this.updateLocalidades(
          this.state.datos_clientes_principales.domicilio.entidad_federativa
            .cve_agee,
          valor
        );
        break;
      case "cp":
        data.datos_clientes_principales.domicilio.cp = valor;
        break;
      case "localidad":
        data.datos_clientes_principales.domicilio.localidad = getLocalidades(
          catLocalidades,
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_clientes_principales.domicilio.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_clientes_principales.domicilio.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_clientes_principales.domicilio.numExt = valor;
        break;
      case "numInt":
        data.datos_clientes_principales.domicilio.numInt = valor;
        break;
      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickClientesPrincipales = () => {
    let data = Object.assign({}, this.state.datos_clientes_principales);
    let info = Object.assign({}, clean.intereses.clientes_principales[0]);

    this.setState(
      {
        clientes_principales: [...this.state.clientes_principales, data],
        datos_clientes_principales: info
      },
      () => {
        console.log(this.state.clientes_principales);
      }
    );
  };

  removeClickClientesPrincipales = index => event => {
    this.state.clientes_principales.splice(index, 1);
    this.setState(
      { clientes_principales: this.state.clientes_principales },
      () => {
        // console.log(this.state.clientes_principales);
      }
    );
  };

  render() {
    return (
      <ClientesPrincipales
        data={this.state}
        handleChange={this.setDataClientesPrincipales}
        addClick={this.addClickClientesPrincipales}
        removeClick={this.removeClickClientesPrincipales}
      />
    );
  }
}

export default ClientesPrincipales;
