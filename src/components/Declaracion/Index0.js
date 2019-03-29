import React, { Component } from "react";
import axios from "axios";
import config from "../../config.json";

//Grid
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

var apiHost = process.env.REACT_APP_API || "https://localhost/captura/api/";

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

class Index extends Component {
  constructor(props) {
    super(props);
  }

  show = () => {
    // console.log(this.state.datos_curriculares_grados_academicos);
  };

  handleNext = () => {
    this.setState({
      show: this.state.show + 1
    });
  };

  handleBack = () => {
    this.setState({
      show: this.state.show - 1
    });
  };

  addClick = () => {
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
    // console.log(data);

    var apiBaseUrl = apiHost;
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

  componentDidMount() {
    fetch(config.apiHost + "catPaises")
      .then(res => res.json())
      .then(catPaises => this.setState({ catPaises: catPaises }));

    fetch(config.apiHost + "catEntidadesFederativas")
      .then(res => res.json())
      .then(catEntidadesFederativas =>
        this.setState({ catEntidadesFederativas: catEntidadesFederativas })
      );

    fetch(config.apiHost + "documentosObtenidos")
      .then(res => res.json())
      .then(documentos => this.setState({ catDocumentoObtenido: documentos }));

    fetch(config.apiHost + "catEstatusEstudio")
      .then(res => res.json())
      .then(estatus => this.setState({ catEstatusEstudio: estatus }));

    fetch(config.apiHost + "catEstadoCivil")
      .then(res => res.json())
      .then(catEstadoCivil =>
        this.setState({ catEstadoCivil: catEstadoCivil })
      );

    fetch(config.apiHost + "regimenmatrimonial")
      .then(res => res.json())
      .then(regimenmatrimonial =>
        this.setState({ regimen: regimenmatrimonial })
      );

    fetch(config.apiHost + "catTipoVialidad")
      .then(res => res.json())
      .then(catTipoVialidad =>
        this.setState({ catTipoVialidad: catTipoVialidad })
      );

    fetch(config.apiHost + "nivelGobierno")
      .then(res => res.json())
      .then(nivelGobierno => this.setState({ nivelGobierno: nivelGobierno }));

    fetch(config.apiHost + "poderEjecutivo")
      .then(res => res.json())
      .then(poderEjecutivo =>
        this.setState({ poderEjecutivo: poderEjecutivo })
      );

    fetch(config.apiHost + "catSectorIndustria")
      .then(res => res.json())
      .then(catSectorIndustria =>
        this.setState({ catSectorIndustria: catSectorIndustria })
      );

    fetch(config.apiHost + "catAmbitos")
      .then(res => res.json())
      .then(ambitos => this.setState({ ambitos: ambitos }));

    fetch(config.apiHost + "catRelacionDeclarante")
      .then(res => res.json())
      .then(catRelacionDeclarante =>
        this.setState({ catRelacionDeclarante: catRelacionDeclarante })
      );

    fetch(config.apiHost + "catTiposOperaciones")
      .then(res => res.json())
      .then(catTipoOperacion =>
        this.setState({ catTipoOperacion: catTipoOperacion })
      );

    fetch(config.apiHost + "catTipoMoneda")
      .then(res => res.json())
      .then(catTipoMoneda => this.setState({ catTipoMoneda: catTipoMoneda }));

    fetch(config.apiHost + "catTiposMetales")
      .then(res => res.json())
      .then(catTiposMetales =>
        this.setState({ catTiposMetales: catTiposMetales })
      );

    fetch(config.apiHost + "catFormaAdquision")
      .then(res => res.json())
      .then(catFormaAdquision =>
        this.setState({ catFormaAdquision: catFormaAdquision })
      );

    fetch(config.apiHost + "catTipoBienInmuebles")
      .then(res => res.json())
      .then(catTipoBienInmuebles =>
        this.setState({ catTipoBienInmuebles: catTipoBienInmuebles })
      );

    fetch(config.apiHost + "catEntidadesFederativas")
      .then(res => res.json())
      .then(catEntidadesFederativas =>
        this.setState({ catEntidadesFederativas: catEntidadesFederativas })
      );

    fetch(config.apiHost + "catTitularBien")
      .then(res => res.json())
      .then(catTitularBien =>
        this.setState({ catTitularBien: catTitularBien })
      );

    fetch(config.apiHost + "catRelacionDeclarante")
      .then(res => res.json())
      .then(catRelacionDeclarante =>
        this.setState({ catRelacionDeclarante: catRelacionDeclarante })
      );

    fetch(config.apiHost + "catMedidaPlazo")
      .then(res => res.json())
      .then(catMedidaPlazo =>
        this.setState({ catMedidaPlazo: catMedidaPlazo })
      );

    fetch(config.apiHost + "catDependencia")
      .then(res => res.json())
      .then(catDependencia =>
        this.setState({ catDependencia: catDependencia })
      );

    fetch(config.apiHost + "catTiposActividades")
      .then(res => res.json())
      .then(catTiposActividades =>
        this.setState({ catTiposActividades: catTiposActividades })
      );

    fetch(config.apiHost + "catTiposAcredores")
      .then(res => res.json())
      .then(catTiposAcredores =>
        this.setState({ catTiposAcredores: catTiposAcredores })
      );

    fetch(config.apiHost + "catTipoAdeudo")
      .then(res => res.json())
      .then(catTipoAdeudo => this.setState({ catTipoAdeudo: catTipoAdeudo }));

    fetch(config.apiHost + "catTipoBien")
      .then(res => res.json())
      .then(catTipoBien => this.setState({ catTipoBien: catTipoBien }));

    fetch(config.apiHost + "catTiposApoyos")
      .then(res => res.json())
      .then(catTiposApoyos =>
        this.setState({ catTiposApoyos: catTiposApoyos })
      );

    fetch(config.apiHost + "catTiposFideicomisos")
      .then(res => res.json())
      .then(catTiposFideicomisos =>
        this.setState({ catTiposFideicomisos: catTiposFideicomisos })
      );

    fetch(config.apiHost + "catTipoInversion")
      .then(res => res.json())
      .then(catTipoInversion =>
        this.setState({ catTipoInversion: catTipoInversion })
      );

    fetch(config.apiHost + "catTipoEspecificoInversion")
      .then(res => res.json())
      .then(catTipoEspecificoInversion =>
        this.setState({
          catTipoEspecificoInversion: catTipoEspecificoInversion
        })
      );

    fetch(config.apiHost + "catTipoInstitucion")
      .then(res => res.json())
      .then(catTipoInstitucion =>
        this.setState({ catTipoInstitucion: catTipoInstitucion })
      );

    fetch(config.apiHost + "catNaturalezaMembresias")
      .then(res => res.json())
      .then(catNaturalezaMembresias =>
        this.setState({ catNaturalezaMembresias: catNaturalezaMembresias })
      );

    fetch(config.apiHost + "catTipoAdeudo")
      .then(res => res.json())
      .then(catTipoAdeudo => this.setState({ catTipoAdeudo: catTipoAdeudo }));

    fetch(config.apiHost + "catTiposRepresentaciones")
      .then(res => res.json())
      .then(catTiposRepresentaciones =>
        this.setState({ catTiposRepresentaciones: catTiposRepresentaciones })
      );
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid item xs={12}>
        <div className={classes.root}>
          <Grid container spacing={0}>
            {false && (
              <div>
                <Grid item xs={6} style={{ padding: "20px" }}>
                  <br />
                  {this.state.show > 1 && (
                    <Button
                      variant="contained"
                      size="small"
                      onClick={this.handleBack}
                    >
                      Anterior
                    </Button>
                  )}
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{ textAlign: "right", padding: "20px" }}
                >
                  <br />
                  {this.state.show < 35 && (
                    <Button
                      variant="contained"
                      size="small"
                      onClick={this.handleNext}
                    >
                      Siguiente
                    </Button>
                  )}
                </Grid>
              </div>
            )}
            {false && (
              <div>
                <Grid
                  item
                  xs={2}
                  style={{ textAlign: "right", padding: "20px" }}
                >
                  <br />

                  <Button variant="contained" size="small" onClick={this.show}>
                    SHOW
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ textAlign: "center", padding: "20px" }}
                >
                  {this.state.show}
                </Grid>
              </div>
            )}
          </Grid>
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(Index);
