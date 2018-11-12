import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";

//Grid
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

import Menu from "../Menu";
import Formulario from "./Formulario";
import DatosCurriculares from "./DatosCurriculares";
import EncargoActual from "./EncargoActual";
import ExperienciaLaboral from "./ExperienciaLaboral";

var apiHost = process.env.APP_API || 'https://localhost/captura/api/';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

var loggedIn = sessionStorage.getItem("logged");

class Index extends Component {
  state = {
    message: "",
    type: "",
    ciudades: [],
    entidades: [],
    municipios: [],
    localidades: [],
    tipovialidad: [],
    estadosciviles: [],
    regimen: [],
    startDate: moment(),
    nombres: "",
    primer_apellido: "",
    segundo_apellido: "",
    nacionalidad: [],
    nacionalidades: [
      {
        valor: "",
        codigo: ""
      }
    ],
    pais_nacimiento_valor: "",
    pais_nacimiento: {
      valor: "",
      codigo: ""
    },
    entidad_federativa_nacimiento: {
      nom_ent: "",
      cve_ent: ""
    },
    curp: "",
    rfc: "",
    fecha_nacimiento: "",
    numero_identificacion_oficial: "",
    correo_electronico: {
      personal: "",
      laboral: ""
    },
    telefono: {
      personal: "",
      celular: ""
    },

    estado_civil: {
      codigo: "",
      valor: ""
    },

    dom_pais: {
      valor: "",
      codigo: ""
    },
    dom_entidad_federativa: {
      nom_ent: "",
      cve_ent: ""
    },
    dom_municipio: {
      nom_mun: "",
      cve_mun: ""
    },
    dom_localidad: {
      nom_loc: "",
      cve_loc: ""
    },
    dom_cp: "",
    dom_vialidad: {
      codigo: "",
      valor: "",
      tipo_vial: "",
      nom_vial: ""
    },
    dom_numExt: "",
    dom_numInt: "",

    regimen_matrimonial: {
      codigo: "",
      valor: ""
    },
    fecha_declaracion: "",
    datos_curriculares: {
      grado_maximo_escolaridad: "Licenciatura",
      grados_academicos: [
        {
          grado_obtenido: "Licenciatura",
          institucion_educativa: "La Universidad Nacionalista México",
          lugar_institucion_educativa: {
            pais: {
              valor: "México",
              codigo: "MX"
            },
            entidad: {
              nom_ent: "México",
              cve_ent: "15"
            }
          },
          carrera: "Ing. en Sistemas Computacionales",
          estatus: {
            codigo: "CURS",
            valor: "Cursando"
          },
          ano_conclusion: "2005",
          documento_obtenido: {
            codigo: "BOL",
            valor: "Boleta"
          },
          cedula_profesional: "2094884"
        }
      ]
    }
  };

  handleClickDatosCurriculares = () => event => {
    this.state.datos_curriculares.grados_academicos.push({
      grado_obtenido: "Licenciatura",
      institucion_educativa: "La Universidad Nacionalista México",
      lugar_institucion_educativa: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad: {
          nom_ent: "México",
          cve_ent: "15"
        }
      },
      carrera: "Ing. en Sistemas Computacionales",
      estatus: {
        codigo: "CURS",
        valor: "Cursando"
      },
      ano_conclusion: "2005",
      documento_obtenido: {
        codigo: "BOL",
        valor: "Boleta"
      },
      cedula_profesional: "2094884"
    });
    this.setState(this.state);
    console.log("hi");
  };

  handleClick = () => event => {
    var data = {
      nombres: this.state.nombres,
      primer_apellido: this.state.primer_apellido,
      segundo_apellido: this.state.segundo_apellido,
      nacionalidades: this.state.nacionalidades,
      pais_nacimiento: this.state.pais_nacimiento,
      entidad_federativa_nacimiento: this.state.entidad_federativa_nacimiento,
      curp: this.state.curp,
      rfc: this.state.rfc,
      fecha_nacimiento: this.state.fecha_nacimiento,
      numero_identificacion_oficial: this.state.numero_identificacion_oficial,
      correo_electronico: this.state.correo_electronico,
      telefono: this.state.telefono,
      domicilio: {
        pais: this.state.dom_pais,
        entidad_federativa: this.state.dom_entidad_federativa,
        municipio: this.state.dom_municipio,
        cp: this.state.dom_cp,
        localidad: this.state.dom_localidad,
        vialidad: this.state.dom_vialidad,
        numExt: this.state.dom_numExt,
        numInt: this.state.dom_numInt
      },
      estado_civil: this.state.estado_civil,
      regimen_matrimonial: this.state.regimen_matrimonial,
      fecha_declaracion: moment().format("YYYY-MM-DD")
    };
    console.log(data);

    var apiBaseUrl = apiHost;
    // var apiHost = process.env.APP_API || 'https://localhost/captura/api/';
    var self = this;
    var info;

    axios
      .post(apiBaseUrl + "declaraciones", data)
      .then(function(response) {
        // console.log(response);
        switch (response.data.code) {
          case 200:
            info = {
              message: "Los datos se guardaron correctamente.",
              type: "alert alert-success text-center"
            };
            self.setState(info);
            break;
          default:
            info = {
              message:
                "hubo un error al guardar la informacion intenten nuevamente.",
              type: "alert alert-danger text-center"
            };
            self.setState(info);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleChange = name => event => {
    var ciudades = event.target.value;
    var nacionalidad = [];
    for (var index in ciudades) {
      var ciudad = ciudades[index];
      var valor = this.state.ciudades.filter(x => x.codigo === ciudad);

      delete valor[0]._id;
      nacionalidad.push(valor);
      // console.log(nacionalidad);
    }

    this.setState({ nacionalidades: nacionalidad });
    this.setState({
      [name]: event.target.value
    });
    // console.log(event.target.value);
  };

  handleChangeTipoVialidad = name => event => {
    const valor = this.state.tipovialidad.filter(
      x => x.codigo === event.target.value
    );

    this.setState({
      [name]: {
        valor: valor[0].valor,
        tipo_vial: valor[0].valor,
        codigo: valor[0].codigo,
        nom_vial: this.state.dom_vialidad.nom_vial
      }
    });
  };

  handleChangeNombreVialidad = () => event => {
    this.setState({
      dom_vialidad: {
        valor: this.state.dom_vialidad.valor,
        tipo_vial: this.state.dom_vialidad.valor,
        codigo: this.state.dom_vialidad.codigo,
        nom_vial: event.target.value
      }
    });

    console.log(this.state.dom_vialidad);
  };

  handleChangeDirPais = name => event => {
    const valor = this.state.ciudades.filter(
      x => x.codigo === event.target.value
    );

    this.setState({
      [name]: {
        valor: valor[0].valor,
        codigo: valor[0].codigo
      }
    });
  };

  handleChangeEdoCivil = name => event => {
    const valor = this.state.estadosciviles.filter(
      x => x.codigo === event.target.value
    );

    this.setState({
      [name]: {
        valor: valor[0].valor,
        codigo: valor[0].codigo
      }
    });
  };

  handleChangeRegimen = name => event => {
    const valor = this.state.regimen.filter(
      x => x.codigo === event.target.value
    );

    this.setState({
      [name]: {
        valor: valor[0].valor,
        codigo: valor[0].codigo
      }
    });
  };

  handleChangeEntidades = name => event => {
    const valor = this.state.entidades.filter(
      x => x.cve_ent === event.target.value
    );

    fetch(apiHost + "municipios?cve_ent=" + event.target.value)
      .then(res => res.json())
      .then(municipios => this.setState({ municipios: municipios }));

    this.setState({
      [name]: {
        nom_ent: valor[0].nom_ent,
        cve_ent: valor[0].cve_ent
      }
    });
  };

  handleChangeMunicipios = name => event => {
    const valor = this.state.municipios.filter(
      x => x.cve_mun === event.target.value
    );

    fetch(
      apiHost +
        "localidades?cve_ent=" +
        this.state.dom_entidad_federativa.cve_ent +
        "&cve_mun=" +
        event.target.value
    )
      .then(res => res.json())
      .then(localidades => this.setState({ localidades: localidades }));

    this.setState({
      [name]: {
        nom_mun: valor[0].nom_mun,
        cve_mun: valor[0].cve_mun
      }
    });
  };

  handleChangeLocalidades = name => event => {
    const valor = this.state.localidades.filter(
      x => x.cve_loc === event.target.value
    );

    this.setState({
      [name]: {
        nom_loc: valor[0].nom_loc,
        cve_loc: valor[0].cve_loc
      }
    });
  };

  handleChangeFecha(date) {
    const fecha = moment(date, "MM/DD/YYYY").format("DD-MM-YYYY");
    console.log(fecha);
    console.log(date);
    this.setState({
      fecha_nacimiento: fecha
    });
  }

  componentDidMount() {
    fetch(apiHost + "ciudades")
      .then(res => res.json())
      .then(ciudades => this.setState({ ciudades: ciudades }));

    fetch(apiHost + "entidades")
      .then(res => res.json())
      .then(entidades => this.setState({ entidades: entidades }));

    fetch(apiHost + "estadosciviles")
      .then(res => res.json())
      .then(estadosciviles =>
        this.setState({ estadosciviles: estadosciviles })
      );

    fetch(apiHost + "regimenmatrimonial")
      .then(res => res.json())
      .then(regimenmatrimonial =>
        this.setState({ regimen: regimenmatrimonial })
      );

    fetch(
      apiHost +
        "municipios?cve_ent=" +
        this.state.dom_entidad_federativa.cve_ent
    )
      .then(res => res.json())
      .then(municipios => this.setState({ municipios: municipios }));

    fetch(
      apiHost +
        "localidades?cve_ent=" +
        this.state.dom_entidad_federativa.cve_ent +
        "&cve_mun=" +
        this.state.dom_municipio.cve_mun
    )
      .then(res => res.json())
      .then(localidades => this.setState({ localidades: localidades }));

    fetch(apiHost + "tipovialidad")
      .then(res => res.json())
      .then(tipovialidad => this.setState({ tipovialidad: tipovialidad }));
  }

  render() {
    const { classes } = this.props;

    if (loggedIn) {
      return (
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Menu loggedIn={loggedIn} />
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              {/*
                <Formulario
                  data={this.state}
                  handleChange={this.handleChange}
                  handleChangeEntidades={this.handleChangeEntidades}
                  handleChangeFecha={this.handleChangeFecha}
                  handleChangeEdoCivil={this.handleChangeEdoCivil}
                  handleChangeRegimen={this.handleChangeRegimen}
                  handleChangeDirPais={this.handleChangeDirPais}
                  handleChangeMunicipios={this.handleChangeMunicipios}
                  handleChangeLocalidades={this.handleChangeLocalidades}
                  handleChangeTipoVialidad={this.handleChangeTipoVialidad}
                  handleChangeNombreVialidad={this.handleChangeNombreVialidad}
                  handleClick={this.handleClick}
                />
                */}
              {/*
              <DatosCurriculares
                data={this.state}
                handleChangeEdoCivil={this.handleChangeEdoCivil}
                handleChange={this.handleChange}
                handleClickDatosCurriculares={this.handleClickDatosCurriculares}
              />
              */}
              {/*
              <EncargoActual
                data={this.state}
                handleClickDatosCurriculares={this.handleClickDatosCurriculares}
                handleChange={this.handleChange}
                handleChangeEntidades={this.handleChangeEntidades}
                handleChangeFecha={this.handleChangeFecha}
                handleChangeEdoCivil={this.handleChangeEdoCivil}
                handleChangeRegimen={this.handleChangeRegimen}
                handleChangeDirPais={this.handleChangeDirPais}
                handleChangeMunicipios={this.handleChangeMunicipios}
                handleChangeLocalidades={this.handleChangeLocalidades}
                handleChangeTipoVialidad={this.handleChangeTipoVialidad}
                handleChangeNombreVialidad={this.handleChangeNombreVialidad}
                handleClick={this.handleClick}
              />
              */}
              <ExperienciaLaboral
                data={this.state}
                handleClickDatosCurriculares={this.handleClickDatosCurriculares}
                handleChange={this.handleChange}
                handleChangeEntidades={this.handleChangeEntidades}
                handleChangeFecha={this.handleChangeFecha}
                handleChangeEdoCivil={this.handleChangeEdoCivil}
                handleChangeRegimen={this.handleChangeRegimen}
                handleChangeDirPais={this.handleChangeDirPais}
                handleChangeMunicipios={this.handleChangeMunicipios}
                handleChangeLocalidades={this.handleChangeLocalidades}
                handleChangeTipoVialidad={this.handleChangeTipoVialidad}
                handleChangeNombreVialidad={this.handleChangeNombreVialidad}
                handleClick={this.handleClick}
              />
            </Grid>
          </Grid>
        </div>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

export default withStyles(styles)(Index);
