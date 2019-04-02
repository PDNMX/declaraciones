import React from "react";
import ClientesPrincipalesForm from "./ClientesPrincipales";

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

    this.state = {
      datos_clientes_principales: info.intereses.clientes_principales[0],
      clientes_principales: [],
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
    let {
      entidad_federativa,
      municipio
    } = this.state.datos_clientes_principales.domicilio;

    catPaises().then(data => {
      this.setState({ catPaises: data });
    });
    catEntidadesFederativas().then(data => {
      this.setState({ catEntidadesFederativas: data });
    });
    if (entidad_federativa.cve_agee !== "") {
      catMunicipios(entidad_federativa.cve_agee).then(data => {
        this.setState({ catMunicipios: data });
      });

      if (municipio.cve_agem !== "") {
        catLocalidades(entidad_federativa.cve_agee, municipio.cve_agem).then(
          data => {
            this.setState({ catLocalidades: data });
          }
        );
      }
    }
    catTipoVialidad().then(data => {
      this.setState({ catTipoVialidad: data });
    });
    catSectorIndustria().then(data => {
      this.setState({ catSectorIndustria: data });
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
          this.state.catSectorIndustria,
          valor
        );
        break;
      /////////////////////////////  domicilio  /////////////////////////////////////
      case "pais":
        data.datos_clientes_principales.domicilio = {
          pais: getData(this.state.catPaises, valor),
          entidad_federativa: {
            nom_agee: "",
            cve_agee: ""
          },
          municipio: {
            nom_agem: "",
            cve_agem: ""
          },
          cp: "",
          localidad: {
            nom_loc: "",
            cve_loc: ""
          },
          vialidad: {
            tipo_vial: "",
            nom_vial: ""
          },
          numExt: "",
          numInt: ""
        };

        break;
      case "entidad_federativa":
        data.datos_clientes_principales.domicilio.entidad_federativa = getEntidadesFederativas(
          this.state.catEntidadesFederativas,
          valor
        );

        data.datos_clientes_principales.domicilio.municipio = {
          nom_agem: "",
          cve_agem: ""
        };

        data.datos_clientes_principales.domicilio.localidad = {
          nom_loc: "",
          cve_loc: ""
        };

        catMunicipios(
          data.datos_clientes_principales.domicilio.entidad_federativa.cve_agee
        ).then(data => {
          this.setState({ catMunicipios: data, catLocalidades: [] });
        });

        break;
      case "municipio":
        data.datos_clientes_principales.domicilio.municipio = getMunicipios(
          this.state.catMunicipios,
          valor
        );

        data.datos_clientes_principales.domicilio.localidad = {
          nom_loc: "",
          cve_loc: ""
        };

        catLocalidades(
          data.datos_clientes_principales.domicilio.entidad_federativa.cve_agee,
          data.datos_clientes_principales.domicilio.municipio.cve_agem
        ).then(data => {
          this.setState({ catLocalidades: data });
        });

        break;
      case "cp":
        data.datos_clientes_principales.domicilio.cp = valor;
        break;
      case "localidad":
        data.datos_clientes_principales.domicilio.localidad = getLocalidades(
          this.state.catLocalidades,
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
      <ClientesPrincipalesForm
        data={this.state}
        handleChange={this.setDataClientesPrincipales}
        addClick={this.addClickClientesPrincipales}
        removeClick={this.removeClickClientesPrincipales}
      />
    );
  }
}

export default ClientesPrincipales;
