import React from "react";
import MembresiasForm from "./Membresias";
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
  catTipoInstitucion,
  catNaturalezaMembresia,
  catSectorIndustria
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class Membresias extends React.Component {
  constructor(props) {
    super(props);

    let info;

    info = clean;
    info = example;

    this.state = {
      datos_membresias: info.intereses.membresias[0],
      membresias: [],
      catPaises: [],
      catEntidadesFederativas: [],
      catMunicipios: [],
      catLocalidades: [],
      catTipoVialidad: [],
      catTipoInstitucion: [],
      catNaturalezaMembresia: [],
      catSectorIndustria: []
    };

    // console.log("state constructor", this.state);
  }

  componentDidMount() {

    let {
      entidad_federativa,
      municipio
    } = this.state.datos_membresias.domicilio;


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
    catTipoInstitucion().then(data => {
      this.setState({ catTipoInstitucion: data });
    });
    catNaturalezaMembresia().then(data => {
      this.setState({ catNaturalezaMembresia: data });
    });
    catSectorIndustria().then(data => {
      this.setState({ catSectorIndustria: data });
    });
  }

  setDataMembresias = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "fecha_inicio":
        data.datos_membresias.fecha_inicio = valor;
        break;
      case "id":
        data.datos_membresias.id = valor;
        break;
      case "naturaleza_membresia":
        data.datos_membresias.naturaleza_membresia = getData(
          this.state.catNaturalezaMembresia,
          valor
        );
        break;
      case "nombre_institucion":
        data.datos_membresias.nombre_institucion = valor;
        break;
      case "observaciones":
        data.datos_membresias.observaciones = valor;
        break;
      case "pagado":
        data.datos_membresias.pagado = !data.datos_membresias.pagado;
        break;
      case "puesto_rol":
        data.datos_membresias.puesto_rol = valor;
        break;
      case "sector_industria":
        data.datos_membresias.sector_industria = getData(
          this.state.catSectorIndustria,
          valor
        );
        break;
      case "tipo_institucion":
        data.datos_membresias.tipo_institucion = getData(
          this.state.catTipoInstitucion,
          valor
        );
        break;
        /////////////////////////////  domicilio  /////////////////////////////////////
        case "pais":
          data.datos_membresias.domicilio = {
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
          data.datos_membresias.domicilio.entidad_federativa = getEntidadesFederativas(
            this.state.catEntidadesFederativas,
            valor
          );

          data.datos_membresias.domicilio.municipio = {
            nom_agem: "",
            cve_agem: ""
          };

          data.datos_membresias.domicilio.localidad = {
            nom_loc: "",
            cve_loc: ""
          };

          catMunicipios(
            data.datos_membresias.domicilio.entidad_federativa
              .cve_agee
          ).then(data => {
            this.setState({ catMunicipios: data, catLocalidades: [] });
          });

          break;
        case "municipio":
          data.datos_membresias.domicilio.municipio = getMunicipios(
            this.state.catMunicipios,
            valor
          );

          data.datos_membresias.domicilio.localidad = {
            nom_loc: "",
            cve_loc: ""
          };

          catLocalidades(
            data.datos_membresias.domicilio.entidad_federativa.cve_agee,
            data.datos_membresias.domicilio.municipio.cve_agem
          ).then(data => {
            this.setState({ catLocalidades: data });
          });

          break;
        case "cp":
          data.datos_membresias.domicilio.cp = valor;
          break;
        case "localidad":
          data.datos_membresias.domicilio.localidad = getLocalidades(
            this.state.catLocalidades,
            valor
          );
          break;
        case "vialidad.tipo_vial":
          data.datos_membresias.domicilio.vialidad.tipo_vial = valor;
          break;
        case "vialidad.nom_vial":
          data.datos_membresias.domicilio.vialidad.nom_vial = valor;
          break;
        case "numExt":
          data.datos_membresias.domicilio.numExt = valor;
          break;
        case "numInt":
          data.datos_membresias.domicilio.numInt = valor;
          break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickMembresias = () => {
    let data = Object.assign({}, this.state.datos_membresias);
    let info = Object.assign({}, clean.intereses.membresias[0]);

    this.setState(
      {
        membresias: [...this.state.membresias, data],
        datos_membresias: info
      },
      () => {
        console.log(this.state.membresias);
      }
    );
  };

  removeClickMembresias = index => event => {
    // console.log(event);
    //

    this.state.membresias.splice(index, 1);
    this.setState({ membresias: this.state.membresias }, () => {
      console.log(index);
      // console.log(this.state.membresias);
    });
  };

  render() {
    return (
      <MembresiasForm
        data={this.state}
        handleChange={this.setDataMembresias}
        addClick={this.addClickMembresias}
        removeClick={this.removeClickMembresias}
      />
    );
  }
}

export default Membresias;
