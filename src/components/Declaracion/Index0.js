import React, { Component } from "react";
import axios from "axios";
import config from "../../config.json";

//Grid
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

import { data } from "./data";
import { example } from "./data_example";
import { clean } from "./data_clean";

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

    let info = example;

    this.state = data;

    // this.state.datos_experiencia_laboral =
    //   info.informacion_personal.experiencia_laboral[0];
    this.state.datos_dependientes_economicos =
      info.informacion_personal.dependientes_economicos[0];

    this.state.datos_empresas_sociedades_asociaciones =
      info.intereses.empresas_sociedades_asociaciones[0];
    this.state.datos_membresias = info.intereses.membresias[0];
    this.state.datos_apoyos_beneficios_publicos =
      info.intereses.apoyos_beneficios_publicos[0];
    this.state.datos_representacion_activa =
      info.intereses.representacion_activa[0];
    this.state.datos_representacion_pasiva =
      info.intereses.representacion_pasiva[0];
    this.state.datos_socios_comerciales = info.intereses.socios_comerciales[0];
    this.state.datos_clientes_principales =
      info.intereses.clientes_principales[0];
    this.state.datos_otras_partes = info.intereses.otras_partes[0];
    this.state.datos_beneficios_gratuitos =
      info.intereses.beneficios_gratuitos[0];

    this.state.datos_sueldos_salarios_publicos =
      info.ingresos.sueldos_salarios_publicos[0];
    this.state.datos_sueldos_salarios_otros_empleos =
      info.ingresos.sueldos_salarios_otros_empleos[0];
    this.state.datos_actividad_profesional =
      info.ingresos.actividad_profesional[0];
    this.state.datos_actividad_empresarial =
      info.ingresos.actividad_empresarial[0];
    this.state.datos_actividad_economica_menor =
      info.ingresos.actividad_economica_menor[0];
    this.state.datos_arrendamiento = info.ingresos.arrendamiento[0];
    this.state.datos_intereses = info.ingresos.intereses[0];
    this.state.datos_premios = info.ingresos.premios[0];
    this.state.datos_enajenacion_bienes = info.ingresos.enajenacion_bienes[0];
    this.state.datos_otros_ingresos = info.ingresos.otros_ingresos[0];

    this.state.datos_bienes_inmuebles = info.activos.bienes_inmuebles[0];
    this.state.datos_bienes_muebles_registrables =
      info.activos.bienes_muebles_registrables[0];
    this.state.datos_bienes_muebles_no_registrables =
      info.activos.bienes_muebles_no_registrables[0];
    this.state.datos_inversiones_cuentas_valores =
      info.activos.inversiones_cuentas_valores[0];
    this.state.datos_efectivo_metales = info.activos.efectivo_metales[0];
    this.state.datos_fideicomisos = info.activos.fideicomisos[0];
    this.state.datos_bienes_intangibles = info.activos.bienes_intangibles[0];
    this.state.datos_cuentas_por_cobrar = info.activos.cuentas_por_cobrar[0];
    this.state.datos_uso_especie_propiedad_tercero =
      info.activos.uso_especie_propiedad_tercero[0];

    this.state.datos_deudas = info.pasivos.deudas[0];
    this.state.datos_otras_obligaciones = info.pasivos.otras_obligaciones[0];

    //clean  form
  }

  state = data;

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

    // this.updateMunicipios(
    //   this.state.informacion_general.domicilio.entidad_federativa.cve_agee
    // );

    // this.updateLocalidades(
    //   this.state.informacion_general.domicilio.entidad_federativa.cve_agee,
    //   this.state.informacion_general.domicilio.municipio.cve_mun
    // );

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

    fetch(config.apiHost + "catTiposMonedas")
      .then(res => res.json())
      .then(catTiposMonedas =>
        this.setState({ catTiposMonedas: catTiposMonedas })
      );

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

    fetch(config.apiHost + "catTiposBienesInmuebles")
      .then(res => res.json())
      .then(catTiposBienesInmuebles =>
        this.setState({ catTiposBienesInmuebles: catTiposBienesInmuebles })
      );

    fetch(config.apiHost + "catEntidadesFederativas")
      .then(res => res.json())
      .then(catEntidadesFederativas =>
        this.setState({ catEntidadesFederativas: catEntidadesFederativas })
      );

    fetch(config.apiHost + "catTitularesBienes")
      .then(res => res.json())
      .then(catTitularesBienes =>
        this.setState({ catTitularesBienes: catTitularesBienes })
      );

    fetch(config.apiHost + "catRelacionDeclarante")
      .then(res => res.json())
      .then(catRelacionDeclarante =>
        this.setState({ catRelacionDeclarante: catRelacionDeclarante })
      );

    fetch(config.apiHost + "catMedidasPlazos")
      .then(res => res.json())
      .then(catMedidasPlazos =>
        this.setState({ catMedidasPlazos: catMedidasPlazos })
      );

    fetch(config.apiHost + "catDependencias")
      .then(res => res.json())
      .then(catDependencias =>
        this.setState({ catDependencias: catDependencias })
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

    fetch(config.apiHost + "catTiposAdeudos")
      .then(res => res.json())
      .then(catTiposAdeudos =>
        this.setState({ catTiposAdeudos: catTiposAdeudos })
      );

    fetch(config.apiHost + "catTiposBienes")
      .then(res => res.json())
      .then(catTiposBienes =>
        this.setState({ catTiposBienes: catTiposBienes })
      );

    fetch(config.apiHost + "catNivelesGobierno")
      .then(res => res.json())
      .then(catNivelesGobierno =>
        this.setState({ catNivelesGobierno: catNivelesGobierno })
      );

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

    fetch(config.apiHost + "catTiposInversiones")
      .then(res => res.json())
      .then(catTiposInversiones =>
        this.setState({ catTiposInversiones: catTiposInversiones })
      );

    fetch(config.apiHost + "catTiposEspecificosInversion")
      .then(res => res.json())
      .then(catTiposEspecificosInversion =>
        this.setState({
          catTiposEspecificosInversion: catTiposEspecificosInversion
        })
      );

    fetch(config.apiHost + "catTiposInstituciones")
      .then(res => res.json())
      .then(catTiposInstituciones =>
        this.setState({ catTiposInstituciones: catTiposInstituciones })
      );

    fetch(config.apiHost + "catNaturalezaMembresias")
      .then(res => res.json())
      .then(catNaturalezaMembresias =>
        this.setState({ catNaturalezaMembresias: catNaturalezaMembresias })
      );

    fetch(config.apiHost + "catTiposAdeudos")
      .then(res => res.json())
      .then(catTiposAdeudos =>
        this.setState({ catTiposAdeudos: catTiposAdeudos })
      );

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
