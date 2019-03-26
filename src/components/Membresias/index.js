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
          catNaturalezaMembresia,
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
          catSectorIndustria,
          valor
        );
        break;
      case "tipo_institucion":
        data.datos_membresias.tipo_institucion = getData(
          catTipoInstitucion,
          valor
        );
        break;
      /////////////////////////////  DOMICILIO  /////////////////////////////////////
      case "pais":
        data.datos_membresias.domicilio.pais = getData(catPaises, valor);
        break;
      case "entidad_federativa":
        data.datos_membresias.domicilio.entidad_federativa = getEntidadesFederativas(
          catEntidadesFederativas,
          valor
        );
        break;
      case "municipio":
        data.datos_membresias.domicilio.municipio = getMunicipios(
          catMunicipios,
          valor
        );

        this.updateLocalidades(
          this.state.datos_membresias.domicilio.entidad_federativa.cve_agee,
          valor
        );
        break;
      case "cp":
        data.datos_membresias.domicilio.cp = valor;
        break;
      case "localidad":
        data.datos_membresias.domicilio.localidad = getLocalidades(
          catLocalidades,
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
