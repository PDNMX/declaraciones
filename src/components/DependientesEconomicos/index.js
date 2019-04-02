import React from "react";

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
  catRelacionDeclarante,
  catSectorIndustria
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";
import DependientesEconomicosForm from "./DependientesEconomicos";

class DependientesEconomicos extends React.Component {
  constructor(props) {
    super(props);

    let info;

    info = clean;
    info = example;

    this.state = {
      datos_dependientes_economicos:
        info.informacion_personal.dependientes_economicos[0],
      dependientes_economicos: [],
      dependientes_economicos_nacionlidades: [],
      nacionalidad: [],
      catPaises: [],
      catEntidadesFederativas: [],
      catMunicipios: [],
      catLocalidades: [],
      catTipoVialidad: [],
      catRelacionDeclarante: [],
      catSectorIndustria: []
    };

    // console.log("state constructor", this.state);
  }

  componentDidMount() {
    let {
      entidad_federativa,
      municipio
    } = this.state.datos_dependientes_economicos.domicilio;

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
    catRelacionDeclarante().then(data => {
      this.setState({ catRelacionDeclarante: data });
    });
    catSectorIndustria().then(data => {
      this.setState({ catSectorIndustria: data });
    });
  }

  setDataDependientesEconomicos = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "tipo_relacion":
        data.datos_dependientes_economicos.tipo_relacion = getData(
          this.state.catRelacionDeclarante,
          valor
        );
        break;
      case "nombre_personal.nombres":
        data.datos_dependientes_economicos.nombre_personal.nombres = valor;
        break;
      case "nombre_personal.primer_apellido":
        data.datos_dependientes_economicos.nombre_personal.primer_apellido = valor;
        break;
      case "nombre_personal.segundo_apellido":
        data.datos_dependientes_economicos.nombre_personal.segundo_apellido = valor;
        break;
      case "nacionalidades":
        data.dependientes_economicos_nacionlidades = valor;
        let nacionalidad = [];
        for (var index in data.dependientes_economicos_nacionlidades) {
          nacionalidad.push(
            getData(
              this.state.catPaises,
              data.dependientes_economicos_nacionlidades[index]
            )
          );
        }

        data.datos_dependientes_economicos.nacionalidades = nacionalidad;
        break;
      case "curp":
        data.datos_dependientes_economicos.curp = valor;
        break;
      case "rfc":
        data.datos_dependientes_economicos.rfc = valor;
        break;
      case "fecha_nacimiento":
        data.datos_dependientes_economicos.fecha_nacimiento = valor;
        break;
      case "numero_identificacion_nacional":
        data.datos_dependientes_economicos.numero_identificacion_nacional = valor;
        break;

      case "habita_domicilio_declarante":
        data.datos_dependientes_economicos.habita_domicilio_declarante = !data
          .datos_dependientes_economicos.habita_domicilio_declarante;
        break;
      case "medio_contacto":
        data.datos_dependientes_economicos.medio_contacto = valor;
        break;
      case "ingresos_propios":
        data.datos_dependientes_economicos.ingresos_propios = !data
          .datos_dependientes_economicos.ingresos_propios;
        break;
      case "ocupacion_profesion":
        data.datos_dependientes_economicos.ocupacion_profesion = valor;
        break;
      case "sector_industria":
        data.datos_dependientes_economicos.sector_industria = getData(
          this.state.catSectorIndustria,
          valor
        );
        break;
      case "proveedor_contratista_gobierno":
        data.datos_dependientes_economicos.proveedor_contratista_gobierno = !data
          .datos_dependientes_economicos.proveedor_contratista_gobierno;
        break;
      case "tiene_intereses_mismo_sector_declarante":
        data.datos_dependientes_economicos.tiene_intereses_mismo_sector_declarante = !data
          .datos_dependientes_economicos
          .tiene_intereses_mismo_sector_declarante;
        break;
      case "desarrolla_cabildeo_sector_declarante.respuesta":
        data.datos_dependientes_economicos.desarrolla_cabildeo_sector_declarante.respuesta = !data
          .datos_dependientes_economicos.desarrolla_cabildeo_sector_declarante
          .respueta;
        break;

      case "desarrolla_cabildeo_sector_declarante.observaciones":
        data.datos_dependientes_economicos.desarrolla_cabildeo_sector_declarante.observaciones = valor;
        break;
      case "observaciones":
        data.datos_dependientes_economicos.observaciones = valor;
        break;
      /////////////////////////////  domicilio  /////////////////////////////////////
      case "pais":
        data.datos_dependientes_economicos.domicilio = {
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
        data.datos_dependientes_economicos.domicilio.entidad_federativa = getEntidadesFederativas(
          this.state.catEntidadesFederativas,
          valor
        );

        data.datos_dependientes_economicos.domicilio.municipio = {
          nom_agem: "",
          cve_agem: ""
        };

        data.datos_dependientes_economicos.domicilio.localidad = {
          nom_loc: "",
          cve_loc: ""
        };

        catMunicipios(
          data.datos_dependientes_economicos.domicilio.entidad_federativa
            .cve_agee
        ).then(data => {
          this.setState({ catMunicipios: data, catLocalidades: [] });
        });

        break;
      case "municipio":
        data.datos_dependientes_economicos.domicilio.municipio = getMunicipios(
          this.state.catMunicipios,
          valor
        );

        data.datos_dependientes_economicos.domicilio.localidad = {
          nom_loc: "",
          cve_loc: ""
        };

        catLocalidades(
          data.datos_dependientes_economicos.domicilio.entidad_federativa
            .cve_agee,
          data.datos_dependientes_economicos.domicilio.municipio.cve_agem
        ).then(data => {
          this.setState({ catLocalidades: data });
        });

        break;
      case "cp":
        data.datos_dependientes_economicos.domicilio.cp = valor;
        break;
      case "localidad":
        data.datos_dependientes_economicos.domicilio.localidad = getLocalidades(
          this.state.catLocalidades,
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_dependientes_economicos.domicilio.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_dependientes_economicos.domicilio.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_dependientes_economicos.domicilio.numExt = valor;
        break;
      case "numInt":
        data.datos_dependientes_economicos.domicilio.numInt = valor;
        break;
      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickDependientesEconomicos = () => {
    let data = Object.assign({}, this.state.datos_dependientes_economicos);
    let info = Object.assign(
      {},
      clean.informacion_personal.dependientes_economicos[0]
    );

    this.setState(
      {
        dependientes_economicos: [...this.state.dependientes_economicos, data],
        datos_dependientes_economicos: info
      },
      () => {
        console.log(this.state.dependientes_economicos);
      }
    );
  };

  removeClickDependientesEconomicos = index => event => {
    this.state.dependientes_economicos.splice(index, 1);
    this.setState(
      { dependientes_economicos: this.state.dependientes_economicos },
      () => {
        // console.log(this.state.dependientes_economicos);
      }
    );
  };

  render() {
    return (
      <DependientesEconomicosForm
        data={this.state}
        handleChange={this.setDataDependientesEconomicos}
        addClick={this.addClickDependientesEconomicos}
        removeClick={this.removeClickDependientesEconomicos}
      />
    );
  }
}

export default DependientesEconomicos;
