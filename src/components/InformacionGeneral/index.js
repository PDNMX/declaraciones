import React from "react";

import Grid from "@material-ui/core/Grid";

import InformacionGeneralForm from "./InformacionGeneral";

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
  catEstadoCivil,
  catRegimenMatrimonial
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class InformacionGeneral extends React.Component {
  constructor(props) {
    super(props);

    let info;

    info = clean;
    info = example;

    this.state = {
      informacion_general: info.informacion_personal.informacion_general,
      nacionalidades:[],
      catPaises: [],
      catEntidadesFederativas: [],
      catMunicipios: [],
      catLocalidades: [],
      catTipoVialidad: [],
      catEstadoCivil: [],
      catRegimenMatrimonial: []
    };

    // console.log("state constructor", this.state);
  }

  componentDidMount() {
    let {
      entidad_federativa,
      municipio
    } = this.state.informacion_general.domicilio;
    console.log("mount ", entidad_federativa);

    catEntidadesFederativas().then(data => {
      this.setState({ catEntidadesFederativas: data });
    });
    catMunicipios(entidad_federativa.cve_agee).then(data => {
      this.setState({ catMunicipios: data });
    });
    catLocalidades(entidad_federativa.cve_agee, municipio.cve_mun).then(
      data => {
        this.setState({ catLocalidades: data });
      }
    );
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
    catEntidadesFederativas().then(data => {
      this.setState({ catEntidadesFederativas: data });
    });
    catEstadoCivil().then(data => {
      this.setState({ catEstadoCivil: data });
    });
    catRegimenMatrimonial().then(data => {
      this.setState({ catRegimenMatrimonial: data });
    });
  }

  setDataInformacionPersonal = field => event => {
    let valor = event.target.value;
    let { informacion_general, nacionalidades } = this.state;

    switch (field) {
      case "nombres":
        informacion_general.nombres = valor;
        break;
      case "primer_apellido":
        informacion_general.primer_apellido = valor;
        break;
      case "segundo_apellido":
        informacion_general.segundo_apellido = valor;
        break;
      case "nacionalidades":
        nacionalidades = valor;
        let nacionalidad = [];
        for (var index in nacionalidades) {
          nacionalidad.push(
            getData(this.state.this.state.catPaises, nacionalidades[index])
          );
        }

        informacion_general.nacionalidades = nacionalidad;
        break;
      case "pais_nacimiento":
        informacion_general.pais_nacimiento = getData(
          this.state.this.state.catPaises,
          valor
        );
        break;
      case "entidad_federativa_nacimiento":
        informacion_general.entidad_federativa_nacimiento = getEntidadesFederativas(
          this.state.this.state.catEntidadesFederativas,
          valor
        );

        break;
      case "curp":
        informacion_general.curp = valor;
        break;
      case "rfc":
        informacion_general.rfc = valor;
        break;
      case "fecha_nacimiento":
        informacion_general.fecha_nacimiento = valor;
        break;
      case "numero_identificacion_oficial":
        informacion_general.numero_identificacion_oficial = valor;
        break;
      case "correo_electronico.personal":
        informacion_general.correo_electronico.personal = valor;
        break;
      case "correo_electronico.laboral":
        informacion_general.correo_electronico.laboral = valor;
        break;
      case "telefono.particular":
        informacion_general.telefono.particular = valor;
        break;
      case "telefono.celular":
        informacion_general.telefono.celular = valor;
        break;
      case "estado_civil":
        informacion_general.estado_civil = getData(
          this.state.this.state.catEstadoCivil,
          valor
        );
        break;
      case "regimen_matrimonial":
        informacion_general.regimen_matrimonial = getData(
          this.state.this.state.catRegimenMatrimonial,
          valor
        );
        break;
      /////////////////////////////  DOMICILIO  /////////////////////////////////////
      case "pais":
        informacion_general.domicilio.pais = getData(
          this.state.this.state.catPaises,
          valor
        );
        break;
      case "entidad_federativa":
        informacion_general.domicilio.entidad_federativa = getEntidadesFederativas(
          this.state.this.state.catEntidadesFederativas,
          valor
        );
        break;
      case "municipio":
        informacion_general.domicilio.municipio = getMunicipios(
          this.state.this.state.catMunicipios,
          valor
        );

        this.updateLocalidades(
          this.state.informacion_general.domicilio.entidad_federativa.cve_agee,
          valor
        );
        break;
      case "cp":
        informacion_general.domicilio.cp = valor;
        break;
      case "localidad":
        informacion_general.domicilio.localidad = getLocalidades(
          this.state.this.state.catLocalidades,
          valor
        );
        break;
      case "vialidad.tipo_vial":
        informacion_general.domicilio.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        informacion_general.domicilio.vialidad.nom_vial = valor;
        break;
      case "numExt":
        informacion_general.domicilio.numExt = valor;
        break;
      case "numInt":
        informacion_general.domicilio.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState({
      informacion_general: informacion_general,
      nacionalidades: nacionalidades
    });
  };

  render() {
    return (
      <Grid item xs={12}>
        <InformacionGeneralForm
          data={this.state}
          handleChange={this.setDataInformacionPersonal}
        />
      </Grid>
    );
  }
}

export default InformacionGeneral;
