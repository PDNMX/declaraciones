import React from "react";
import EmpresasSociedadesAsociacionesForm from "./EmpresasSociedadesAsociaciones";
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

class EmpresasSociedadesAsociaciones extends React.Component {
  constructor(props) {
    super(props);

    let info;

    info = clean;
    info = example;

    this.state = {
      datos_empresas_sociedades_asociaciones:
        info.intereses.empresas_sociedades_asociaciones[0],
      empresas_sociedades_asociaciones: [],
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
    } = this.state.datos_empresas_sociedades_asociaciones.domicilio;

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

  setDataEmpresasSociedadesAsociaciones = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "actividad_economica":
        data.datos_empresas_sociedades_asociaciones.actividad_economica = !data
          .datos_empresas_sociedades_asociaciones.actividad_economica;
        break;
      case "fecha_constitucion":
        data.datos_empresas_sociedades_asociaciones.fecha_constitucion = valor;
        break;
      case "id":
        data.datos_empresas_sociedades_asociaciones.id = valor;
        break;
      case "nombre_empresa_sociedad_asociacion":
        data.datos_empresas_sociedades_asociaciones.nombre_empresa_sociedad_asociacion = valor;
        break;
      case "numero_registro":
        data.datos_empresas_sociedades_asociaciones.numero_registro = valor;
        break;
      case "pais_registro":
        data.datos_empresas_sociedades_asociaciones.pais_registro = getData(
          this.state.catPaises,
          valor
        );
        break;
      case "porcentaje_participacion":
        data.datos_empresas_sociedades_asociaciones.porcentaje_participacion = valor;
        break;
      case "rfc":
        data.datos_empresas_sociedades_asociaciones.rfc = valor;
        break;
      case "rol":
        data.datos_empresas_sociedades_asociaciones.rol = valor;
        break;
      case "sector_industria":
        data.datos_empresas_sociedades_asociaciones.sector_industria = getData(
          this.state.catSectorIndustria,
          valor
        );
        break;
      /////////////////////////////  domicilio  /////////////////////////////////////
      case "pais":
        data.datos_empresas_sociedades_asociaciones.domicilio = {
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
        data.datos_empresas_sociedades_asociaciones.domicilio.entidad_federativa = getEntidadesFederativas(
          this.state.catEntidadesFederativas,
          valor
        );

        data.datos_empresas_sociedades_asociaciones.domicilio.municipio = {
          nom_agem: "",
          cve_agem: ""
        };

        data.datos_empresas_sociedades_asociaciones.domicilio.localidad = {
          nom_loc: "",
          cve_loc: ""
        };

        catMunicipios(
          data.datos_empresas_sociedades_asociaciones.domicilio
            .entidad_federativa.cve_agee
        ).then(data => {
          this.setState({ catMunicipios: data, catLocalidades: [] });
        });

        break;
      case "municipio":
        data.datos_empresas_sociedades_asociaciones.domicilio.municipio = getMunicipios(
          this.state.catMunicipios,
          valor
        );

        data.datos_empresas_sociedades_asociaciones.domicilio.localidad = {
          nom_loc: "",
          cve_loc: ""
        };

        catLocalidades(
          data.datos_empresas_sociedades_asociaciones.domicilio
            .entidad_federativa.cve_agee,
          data.datos_empresas_sociedades_asociaciones.domicilio.municipio
            .cve_agem
        ).then(data => {
          this.setState({ catLocalidades: data });
        });

        break;
      case "cp":
        data.datos_empresas_sociedades_asociaciones.domicilio.cp = valor;
        break;
      case "localidad":
        data.datos_empresas_sociedades_asociaciones.domicilio.localidad = getLocalidades(
          this.state.catLocalidades,
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_empresas_sociedades_asociaciones.domicilio.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_empresas_sociedades_asociaciones.domicilio.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_empresas_sociedades_asociaciones.domicilio.numExt = valor;
        break;
      case "numInt":
        data.datos_empresas_sociedades_asociaciones.domicilio.numInt = valor;
        break;
      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickEmpresasSociedadesAsociaciones = () => {
    let data = Object.assign(
      {},
      this.state.datos_empresas_sociedades_asociaciones
    );
    let info = Object.assign(
      {},
      clean.intereses.empresas_sociedades_asociaciones[0]
    );

    this.setState(
      {
        empresas_sociedades_asociaciones: [
          ...this.state.empresas_sociedades_asociaciones,
          data
        ],
        datos_empresas_sociedades_asociaciones: info
      },
      () => {
        console.log(this.state.empresas_sociedades_asociaciones);
      }
    );
  };

  removeClickEmpresasSociedadesAsociaciones = index => event => {
    this.state.empresas_sociedades_asociaciones.splice(index, 1);
    this.setState(
      {
        empresas_sociedades_asociaciones: this.state
          .empresas_sociedades_asociaciones
      },
      () => {
        // console.log(this.state.empresas_sociedades_asociaciones);
      }
    );
  };

  render() {
    return (
      <EmpresasSociedadesAsociacionesForm
        data={this.state}
        handleChange={this.setDataEmpresasSociedadesAsociaciones}
        addClick={this.addClickEmpresasSociedadesAsociaciones}
        removeClick={this.removeClickEmpresasSociedadesAsociaciones}
      />
    );
  }
}

export default EmpresasSociedadesAsociaciones;
