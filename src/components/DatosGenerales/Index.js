import React, { Component } from "react";
import axios from "axios";
import config from "../../config.json";

//Grid
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

import { data, clean, example } from "./data";

import Menu from "../Menu";
import InformacionGeneral from "./InformacionGeneral";
import DatosCurriculares from "./DatosCurriculares";
import EncargoActual from "./EncargoActual";
import ExperienciaLaboral from "./ExperienciaLaboral";
import DependientesEconomicos from "./DependientesEconomicos";
import EmpresasSociedadesAsociaciones from "./EmpresasSociedadesAsociaciones";
import Membresias from "./Membresias";
import ApoyosPublicos from "./ApoyosPublicos";
import RepresentacionActiva from "./RepresentacionActiva";
import RepresentacionPasiva from "./RepresentacionPasiva";
import SociosComerciales from "./SociosComerciales";
import ClientesPrincipales from "./ClientesPrincipales";
import OtrasPartesRelacionadas from "./OtrasPartesRelacionadas";
import BeneficiosGratuitos from "./BeneficiosGratuitos";
import SueldosSalariosPublicos from "./SueldosSalariosPublicos";
import SueldosSalariosOtrosEmpleos from "./SueldosSalariosOtrosEmpleos";
import ActividadProfesional from "./ActividadProfesional";
import ActividadEmpresarial from "./ActividadEmpresarial";
import ActividadMenor from "./ActividadMenor";
import Arrendamiento from "./Arrendamiento";
import Intereses from "./Intereses";
import Premios from "./Premios";
import EnajenacionBienes from "./EnajenacionBienes";
import OtrosIngresos from "./OtrosIngresos";
import BienesInmuebles from "./BienesInmuebles";
import BienesMueblesRegistrables from "./BienesMueblesRegistrables";
import BienesMueblesNoRegistrables from "./BienesMueblesNoRegistrables";
import Inversiones from "./Inversiones";
import EfectivoMetales from "./EfectivoMetales";
import Fideicomisos from "./Fideicomisos";
import BienesIntangibles from "./BienesIntangibles";
import CuentasCobrar from "./CuentasCobrar";
import PropietarioTercero from "./PropietarioTercero";
import Deudas from "./Deudas";
import OtrasObligaciones from "./OtrasObligaciones";

console.log(process.env.APP_API);

var apiHost = process.env.APP_API || "https://localhost/captura/api/";

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
  constructor(props) {
    super(props);
    this.state = data;

    this.state.informacion_general =
      example.informacion_personal.informacion_general;
    this.state.datos_curriculares_grados_academicos =
      example.informacion_personal.datos_curriculares.grados_academicos[0];
    this.state.datos_encargo_actual =
      example.informacion_personal.datos_encargo_actual;
    this.state.datos_experiencia_laboral =
      example.informacion_personal.experiencia_laboral[0];
    this.state.datos_dependientes_economicos =
      example.informacion_personal.dependientes_economicos[0];

    this.state.datos_empresas_sociedades_asociaciones =
      example.intereses.empresas_sociedades_asociaciones[0];
    this.state.datos_membresias = example.intereses.membresias[0];
    this.state.datos_apoyos_beneficios_publicos =
      example.intereses.apoyos_beneficios_publicos[0];
    this.state.datos_representacion_activa =
      example.intereses.representacion_activa[0];
    this.state.datos_representacion_pasiva =
      example.intereses.representacion_pasiva[0];
    this.state.datos_socios_comerciales =
      example.intereses.socios_comerciales[0];
    this.state.datos_clientes_principales =
      example.intereses.clientes_principales[0];
    this.state.datos_otras_partes = example.intereses.otras_partes[0];
    this.state.datos_beneficios_gratuitos =
      example.intereses.beneficios_gratuitos[0];

    this.state.datos_sueldos_salarios_publicos =
      example.ingresos.sueldos_salarios_publicos[0];
    this.state.datos_sueldos_salarios_otros_empleos =
      example.ingresos.sueldos_salarios_otros_empleos[0];
    this.state.datos_actividad_profesional =
      example.ingresos.actividad_profesional[0];
    this.state.datos_actividad_empresarial =
      example.ingresos.actividad_empresarial[0];
    this.state.datos_actividad_economica_menor =
      example.ingresos.actividad_economica_menor[0];
    this.state.datos_arrendamiento = example.ingresos.arrendamiento[0];
    this.state.datos_intereses = example.ingresos.intereses[0];
    this.state.datos_premios = example.ingresos.premios[0];
    this.state.datos_enajenacion_bienes =
      example.ingresos.enajenacion_bienes[0];
    this.state.datos_otros_ingresos = example.ingresos.otros_ingresos[0];

    this.state.datos_bienes_inmuebles = example.activos.bienes_inmuebles[0];
    this.state.datos_bienes_muebles_registrables =
      example.activos.bienes_muebles_registrables[0];
    this.state.datos_bienes_muebles_no_registrables =
      example.activos.bienes_muebles_no_registrables[0];
    this.state.datos_inversiones_cuentas_valores =
      example.activos.inversiones_cuentas_valores[0];
    this.state.datos_efectivo_metales = example.activos.efectivo_metales[0];
    this.state.datos_fideicomisos = example.activos.fideicomisos[0];
    this.state.datos_bienes_intangibles = example.activos.bienes_intangibles[0];
    this.state.datos_cuentas_por_cobrar = example.activos.cuentas_por_cobrar[0];
    this.state.datos_uso_especie_propiedad_tercero =
      example.activos.uso_especie_propiedad_tercero[0];

    this.state.datos_deudas = example.pasivos.deudas[0];
    this.state.datos_otras_obligaciones = example.pasivos.otras_obligaciones[0];
  }

  // state = data;

  show = () => {
    console.log(this.state.datos_otras_obligaciones);
  };

  anyTextChange = (obj, name) => event => {
    let text = this.state[obj];
    text[name] = event.target.value;

    this.setState({
      [obj]: text
    });
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

  handleChange = name => event => {
    const valor = this.state.ciudades.filter(
      x => x.codigo === event.target.value
    );

    let pais = this.state[name];
    pais.pais = {
      valor: valor[0].valor,
      codigo: valor[0].codigo
    };

    this.setState(
      {
        [name]: pais
      },
      () => {
        // console.log(this.state);
      }
    );
  };

  handleChange = name => event => {
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

  getNomEntidad = cve_ent => {
    let entidad = this.state.entidades.filter(x => x.cve_ent === cve_ent);
    return entidad[0].nom_ent;
  };

  getEntidadFederativa = cve_ent => {
    let info = this.state.catEntidadesFederativas.filter(
      x => x.cve_ent === cve_ent
    );
    this.updateMunicipios(cve_ent);

    return {
      nom_ent: info[0].nom_ent,
      cve_ent: info[0].cve_ent
    };
  };

  getMunicipios = cve_mun => {
    let info = this.state.municipios.filter(x => x.cve_mun === cve_mun);

    return {
      nom_mun: info[0].nom_mun,
      cve_mun: info[0].cve_mun
    };
  };

  getLocalidad = cve_loc => {
    let info = this.state.localidades.filter(x => x.cve_loc === cve_loc);

    return {
      nom_loc: info[0].nom_loc,
      cve_loc: info[0].cve_loc
    };
  };

  getCiudad = codigo => {
    let info = this.state.ciudades.filter(x => x.codigo === codigo);
    return {
      codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  getTipoMetal = codigo => {
    let info = this.state.catTiposMetales.filter(x => x.codigo === codigo);
    return {
      codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  getTipoAcreedor = codigo => {
    let info = this.state.catTiposAcredores.filter(x => x.codigo === codigo);
    return {
      codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  getTipoAdeudo = codigo => {
    let info = this.state.catTiposAdeudos.filter(x => x.codigo === codigo);
    return {
      codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  getTipoEspecificoInversion = codigo => {
    let info = this.state.catTiposEspecificosInversion.filter(
      x => x.codigo === codigo
    );
    return {
      codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  getTipoInversion = codigo => {
    let info = this.state.catTiposInversiones.filter(x => x.codigo === codigo);
    return {
      codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  getEstadoCivil = codigo => {
    let info = this.state.estadosciviles.filter(x => x.codigo === codigo);
    return {
      codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  getRegimenMatrimonial = codigo => {
    let info = this.state.regimen.filter(x => x.codigo === codigo);
    return {
      codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  getEstatusEstudio = codigo => {
    let info = this.state.estatusEstudio.filter(x => x.codigo === codigo);
    return {
      codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  getDocumuentoObtenido = codigo => {
    let info = this.state.documentoObtenido.filter(x => x.codigo === codigo);
    return {
      codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  getNivelGobierno = codigo => {
    let info = this.state.nivelGobierno.filter(x => x.codigo === codigo);
    return {
      codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  getPoderEjecutivo = codigo => {
    let info = this.state.poderEjecutivo.filter(x => x.codigo === codigo);
    return {
      codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  getSectorIndustria = codigo => {
    let info = this.state.sectorIndustria.filter(x => x.codigo === codigo);
    return {
      codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  getTipoInstitucion = codigo => {
    let info = this.state.catTiposInstituciones.filter(
      x => x.codigo === codigo
    );
    return {
      codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  getTipoApoyo = codigo => {
    let info = this.state.catTiposApoyos.filter(x => x.codigo === codigo);
    return {
      codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  getTipoActividad = codigo => {
    let info = this.state.catTiposActividades.filter(x => x.codigo === codigo);
    return {
      codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  getTipoBien = codigo => {
    let info = this.state.catTiposBienes.filter(x => x.codigo === codigo);
    return {
      codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  getFormaAdquision = codigo => {
    let info = this.state.catFormaAdquision.filter(x => x.codigo === codigo);
    return {
      codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  getTipoBienInmueble = codigo => {
    let info = this.state.catTiposBienesInmuebles.filter(
      x => x.codigo === codigo
    );
    return {
      codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  getRelacionDeclarante = codigo => {
    let info = this.state.catRelacionDeclarante.filter(
      x => x.codigo === codigo
    );
    return {
      codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  getTipoOperacion = codigo => {
    let info = this.state.catTipoOperacion.filter(x => x.codigo === codigo);
    return {
      codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  getTitularBien = codigo => {
    let info = this.state.catTitularesBienes.filter(x => x.codigo === codigo);
    return {
      codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  getTipoRepresentacion = codigo => {
    let info = this.state.catTiposRepresentaciones.filter(
      x => x.codigo === codigo
    );
    return {
      codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  getEntePublico = valor => {
    let info = this.state.catDependencias.filter(x => x.valor === valor);
    return {
      // codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  getNaturalezaMembresia = codigo => {
    let info = this.state.catNaturalezaMembresias.filter(
      x => x.codigo === codigo
    );
    return {
      codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  getMoneda = codigo => {
    let info = this.state.catTiposMonedas.filter(x => x.codigo === codigo);
    return {
      codigo: info[0].codigo,
      valor: info[0].moneda
    };
  };

  getMedidasPlazo = codigo => {
    let info = this.state.catMedidasPlazos.filter(x => x.codigo === codigo);
    return {
      codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  getAmbito = codigo => {
    let info = this.state.ambitos.filter(x => x.codigo === codigo);
    return {
      codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  getTipoRelacion = codigo => {
    let info = this.state.relacionDeclarante.filter(x => x.codigo === codigo);
    return {
      codigo: info[0].codigo,
      valor: info[0].valor
    };
  };

  updateMunicipios = cve_ent => {
    fetch(config.apiHost + "municipios?cve_ent=" + cve_ent)
      .then(res => res.json())
      .then(municipios => this.setState({ municipios: municipios }));
  };

  updateLocalidades = (cve_ent, cve_mun) => {
    fetch(
      config.apiHost + "localidades?cve_ent=" + cve_ent + "&cve_mun=" + cve_mun
    )
      .then(res => res.json())
      .then(localidades => this.setState({ localidades: localidades }));
  };

  removeClickActividadEmpresarial = index => event => {
    this.state.actividad_empresarial.splice(index, 1);
    this.setState(
      { actividad_empresarial: this.state.actividad_empresarial },
      () => {
        // console.log(this.state.actividad_empresarial);
      }
    );
  };
  removeClickActividadMenor = index => event => {
    this.state.actividad_economica_menor.splice(index, 1);
    this.setState(
      { actividad_economica_menor: this.state.actividad_economica_menor },
      () => {
        // console.log(this.state.actividad_economica_menor);
      }
    );
  };
  removeClickActividadProfesional = index => event => {
    this.state.actividad_profesional.splice(index, 1);
    this.setState(
      { actividad_profesional: this.state.actividad_profesional },
      () => {
        // console.log(this.state.actividad_profesional);
      }
    );
  };
  removeClickApoyosPublicos = index => event => {
    this.state.apoyos_beneficios_publicos.splice(index, 1);
    this.setState(
      { apoyos_beneficios_publicos: this.state.apoyos_beneficios_publicos },
      () => {
        // console.log(this.state.apoyos_beneficios_publicos);
      }
    );
  };
  removeClickArrendamiento = index => event => {
    this.state.arrendamiento.splice(index, 1);
    this.setState({ arrendamiento: this.state.arrendamiento }, () => {
      // console.log(this.state.arrendamiento);
    });
  };
  removeClickBeneficiosGratuitos = index => event => {
    this.state.beneficios_gratuitos.splice(index, 1);
    this.setState(
      { beneficios_gratuitos: this.state.beneficios_gratuitos },
      () => {
        // console.log(this.state.beneficios_gratuitos);
      }
    );
  };
  removeClickBienesInmuebles = index => event => {
    this.state.bienes_inmuebles.splice(index, 1);
    this.setState({ bienes_inmuebles: this.state.bienes_inmuebles }, () => {
      // console.log(this.state.bienes_inmuebles);
    });
  };
  removeClickBienesIntangibles = index => event => {
    this.state.bienes_intangibles.splice(index, 1);
    this.setState({ bienes_intangibles: this.state.bienes_intangibles }, () => {
      // console.log(this.state.bienes_intangibles);
    });
  };
  removeClickBienesMueblesNoRegistrables = index => event => {
    this.state.bienes_muebles_no_registrables.splice(index, 1);
    this.setState(
      {
        bienes_muebles_no_registrables: this.state
          .bienes_muebles_no_registrables
      },
      () => {
        // console.log(this.state.bienes_muebles_no_registrables);
      }
    );
  };
  removeClickBienesMueblesRegistrables = index => event => {
    this.state.bienes_muebles_registrables.splice(index, 1);
    this.setState(
      { bienes_muebles_registrables: this.state.bienes_muebles_registrables },
      () => {
        // console.log(this.state.bienes_muebles_registrables);
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
  removeClickCuentasCobrar = index => event => {
    this.state.cuentas_por_cobrar.splice(index, 1);
    this.setState({ cuentas_por_cobrar: this.state.cuentas_por_cobrar }, () => {
      // console.log(this.state.cuentas_por_cobrar);
    });
  };
  removeClickDatosCurriculares = index => event => {
    this.state.curriculares_grados_academicos.splice(event.target.value, 1);
    this.setState(
      {
        curriculares_grados_academicos: this.state
          .curriculares_grados_academicos
      },
      () => {
        // console.log(this.state.datos_curriculares);
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
  removeClickDeudas = index => event => {
    this.state.deudas.splice(index, 1);
    this.setState({ deudas: this.state.deudas }, () => {
      // console.log(this.state.deudas);
    });
  };
  removeClickEfectivoMetales = index => event => {
    this.state.efectivo_metales.splice(index, 1);
    this.setState({ efectivo_metales: this.state.efectivo_metales }, () => {
      // console.log(this.state.efectivo_metales);
    });
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
  removeClickEnajenacionBienes = index => event => {
    this.state.enajenacion_bienes.splice(index, 1);
    this.setState({ enajenacion_bienes: this.state.enajenacion_bienes }, () => {
      // console.log(this.state.enajenacion_bienes);
    });
  };
  removeClickExperienciaLaborar = index => event => {
    this.state.experiencia_laboral.splice(index, 1);
    this.setState(
      { experiencia_laboral: this.state.experiencia_laboral },
      () => {
        // console.log(this.state.experiencia_laboral);
      }
    );
  };
  removeClickFideicomisos = index => event => {
    this.state.fideicomisos.splice(index, 1);
    this.setState({ fideicomisos: this.state.fideicomisos }, () => {
      // console.log(this.state.fideicomisos);
    });
  };
  removeClickIntereses = index => event => {
    this.state.intereses.splice(index, 1);
    this.setState({ intereses: this.state.intereses }, () => {
      // console.log(this.state.intereses);
    });
  };
  removeClickInversiones = index => event => {
    this.state.inversiones_cuentas_valores.splice(index, 1);
    this.setState(
      { inversiones_cuentas_valores: this.state.inversiones_cuentas_valores },
      () => {
        // console.log(this.state.inversiones_cuentas_valores);
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
  removeClickOtrasObligaciones = index => event => {
    this.state.otras_obligaciones.splice(index, 1);
    this.setState({ otras_obligaciones: this.state.otras_obligaciones }, () => {
      // console.log(this.state.otras_obligaciones);
    });
  };
  removeClickOtrasPartesRelacionadas = index => event => {
    this.state.otras_partes.splice(index, 1);
    this.setState({ otras_partes: this.state.otras_partes }, () => {
      // console.log(this.state.otras_partes);
    });
  };
  removeClickOtrosIngresos = index => event => {
    this.state.otros_ingresos.splice(index, 1);
    this.setState({ otros_ingresos: this.state.otros_ingresos }, () => {
      // console.log(this.state.otros_ingresos);
    });
  };
  removeClickPremios = index => event => {
    this.state.premios.splice(index, 1);
    this.setState({ premios: this.state.premios }, () => {
      // console.log(this.state.premios);
    });
  };
  removeClickPropietarioTercero = index => event => {
    this.state.uso_especie_propiedad_tercero.splice(index, 1);
    this.setState(
      {
        uso_especie_propiedad_tercero: this.state.uso_especie_propiedad_tercero
      },
      () => {
        // console.log(this.state.uso_especie_propiedad_tercero);
      }
    );
  };
  removeClickRepresentacionActiva = index => event => {
    this.state.representacion_activa.splice(index, 1);
    this.setState(
      { representacion_activa: this.state.representacion_activa },
      () => {
        // console.log(this.state.representacion_activa);
      }
    );
  };
  removeClickRepresentacionPasiva = index => event => {
    this.state.representacion_pasiva.splice(index, 1);
    this.setState(
      { representacion_pasiva: this.state.representacion_pasiva },
      () => {
        // console.log(this.state.representacion_pasiva);
      }
    );
  };
  removeClickSueldosSalariosOtrosEmpleos = index => event => {
    this.state.sueldos_salarios_otros_empleos.splice(index, 1);
    this.setState(
      {
        sueldos_salarios_otros_empleos: this.state
          .sueldos_salarios_otros_empleos
      },
      () => {
        // console.log(this.state.sueldos_salarios_otros_empleos);
      }
    );
  };
  removeClickSueldosSalariosPublicos = index => event => {
    this.state.sueldos_salarios_publicos.splice(index, 1);
    this.setState(
      { sueldos_salarios_publicos: this.state.sueldos_salarios_publicos },
      () => {
        // console.log(this.state.sueldos_salarios_publicos);
      }
    );
  };
  removeClickSociosComerciales = index => event => {
    this.state.socios_comerciales.splice(index, 1);
    this.setState({ socios_comerciales: this.state.socios_comerciales }, () => {
      // console.log(this.state.socios_comerciales);
    });
  };

  // handleChange = name => event => {

  //   const valor = this.state.entidades.filter(
  //     x => x.cve_ent === event.target.value
  //   );
  //
  //   this.setState({
  //     [name]: {
  //       nom_ent: valor[0].nom_ent,
  //       cve_ent: valor[0].cve_ent
  //     }
  //   });
  // };

  // handleChange = name => event => {

  //   const valor = this.state.municipios.filter(
  //     x => x.cve_mun === event.target.value
  //   );
  //
  //   fetch(
  //     config.apiHost +
  //       "localidades?cve_ent=" +
  //       this.state.dom_entidad_federativa.cve_ent +
  //       "&cve_mun=" +
  //       event.target.value
  //   )
  //     .then(res => res.json())
  //     .then(localidades => this.setState({ localidades: localidades }));
  //
  //   this.setState({
  //     [name]: {
  //       nom_mun: valor[0].nom_mun,
  //       cve_mun: valor[0].cve_mun
  //     }
  //   });
  // };

  // handleChange = name => event => {

  //   const valor = this.state.localidades.filter(
  //     x => x.cve_loc === event.target.value
  //   );
  //
  //   this.setState({
  //     [name]: {
  //       nom_loc: valor[0].nom_loc,
  //       cve_loc: valor[0].cve_loc
  //     }
  //   });
  // };

  // handleChange = name => event => {

  // var ciudades = event.target.value;
  // var nacionalidad = [];
  // for (var event in ciudades) {
  //   var ciudad = ciudades[event];
  //   var valor = this.state.ciudades.filter(x => x.codigo === ciudad);
  //
  //   delete valor[0]._id;
  //   nacionalidad.push(valor);
  //   // console.log(nacionalidad);
  // }
  // this.setState({ nacionalidades: nacionalidad });
  // this.setState({
  //   [name]: event.target.value
  // });
  // console.log(index.target.value);
  // };

  addClickDatosCurriculares = () => {
    let data = Object.assign(
      {},
      this.state.datos_curriculares_grados_academicos
    );
    let info = Object.assign({}, clean.datos_curriculares_grados_academicos);

    this.setState(
      {
        curriculares_grados_academicos: [
          ...this.state.curriculares_grados_academicos,
          data
        ],
        datos_curriculares_grados_academicos: info
      },
      () => {
        console.log(this.state.curriculares_grados_academicos);
      }
    );
  };

  addClickExperienciaLaborar = () => {
    let data = Object.assign({}, this.state.datos_experiencia_laboral);
    let info = Object.assign({}, clean.datos_experiencia_laboral);

    this.setState(
      {
        experiencia_laboral: [...this.state.experiencia_laboral, data],
        datos_experiencia_laboral: info
      },
      () => {
        console.log(this.state.experiencia_laboral);
      }
    );
  };

  removeClickExperienciaLaborar = index => event => {
    this.state.experiencia_laboral.splice(index, 1);
    this.setState(
      { experiencia_laboral: this.state.experiencia_laboral },
      () => {
        // console.log(this.state.experiencia_laboral);
      }
    );
  };

  addClickDependientesEconomicos = () => {
    let data = Object.assign({}, this.state.datos_dependientes_economicos);
    let info = Object.assign({}, clean.datos_dependientes_economicos);

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

  addClickEmpresasSociedadesAsociaciones = () => {
    let data = Object.assign(
      {},
      this.state.datos_empresas_sociedades_asociaciones
    );
    let info = Object.assign({}, clean.datos_empresas_sociedades_asociaciones);

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

  addClickMembresias = () => {
    let data = Object.assign({}, this.state.datos_membresias);
    let info = Object.assign({}, clean.datos_membresias);

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

  addClickApoyosPublicos = () => {
    let data = Object.assign({}, this.state.datos_apoyos_beneficios_publicos);
    let info = Object.assign({}, clean.datos_apoyos_beneficios_publicos);

    this.setState(
      {
        apoyos_beneficios_publicos: [
          ...this.state.apoyos_beneficios_publicos,
          data
        ],
        datos_apoyos_beneficios_publicos: info
      },
      () => {
        console.log(this.state.apoyos_beneficios_publicos);
      }
    );
  };

  addClickRepresentacionActiva = () => {
    let data = Object.assign({}, this.state.datos_representacion_activa);
    let info = Object.assign({}, clean.datos_representacion_activa);

    this.setState(
      {
        representacion_activa: [...this.state.representacion_activa, data],
        datos_representacion_activa: info
      },
      () => {
        console.log(this.state.representacion_activa);
      }
    );
  };

  addClickRepresentacionPasiva = () => {
    let data = Object.assign({}, this.state.datos_representacion_pasiva);
    let info = Object.assign({}, clean.datos_representacion_pasiva);

    this.setState(
      {
        representacion_pasiva: [...this.state.representacion_pasiva, data],
        datos_representacion_pasiva: info
      },
      () => {
        console.log(this.state.representacion_pasiva);
      }
    );
  };

  addClickSociosComerciales = () => {
    let data = Object.assign({}, this.state.datos_socios_comerciales);
    let info = Object.assign({}, clean.datos_socios_comerciales);

    this.setState(
      {
        socios_comerciales: [...this.state.socios_comerciales, data],
        datos_socios_comerciales: info
      },
      () => {
        console.log(this.state.socios_comerciales);
      }
    );
  };

  addClickClientesPrincipales = () => {
    let data = Object.assign({}, this.state.datos_clientes_principales);
    let info = Object.assign({}, clean.datos_clientes_principales);

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

  addClickOtrasPartesRelacionadas = () => {
    let data = Object.assign({}, this.state.datos_otras_partes);
    let info = Object.assign({}, clean.datos_otras_partes);

    this.setState(
      {
        otras_partes: [...this.state.otras_partes, data],
        datos_otras_partes: info
      },
      () => {
        console.log(this.state.otras_partes);
      }
    );
  };

  addClickBeneficiosGratuitos = () => {
    let data = Object.assign({}, this.state.datos_beneficios_gratuitos);
    let info = Object.assign({}, clean.datos_beneficios_gratuitos);

    this.setState(
      {
        beneficios_gratuitos: [...this.state.beneficios_gratuitos, data],
        datos_beneficios_gratuitos: info
      },
      () => {
        console.log(this.state.beneficios_gratuitos);
      }
    );
  };

  addClickSueldosSalariosPublicos = () => {
    let data = Object.assign({}, this.state.datos_sueldos_salarios_publicos);
    let info = Object.assign({}, clean.datos_sueldos_salarios_publicos);

    this.setState(
      {
        sueldos_salarios_publicos: [
          ...this.state.sueldos_salarios_publicos,
          data
        ],
        datos_sueldos_salarios_publicos: info
      },
      () => {
        console.log(this.state.sueldos_salarios_publicos);
      }
    );
  };

  addClickSueldosSalariosOtrosEmpleos = () => {
    let data = Object.assign(
      {},
      this.state.datos_sueldos_salarios_otros_empleos
    );
    let info = Object.assign({}, clean.datos_sueldos_salarios_otros_empleos);

    this.setState(
      {
        sueldos_salarios_otros_empleos: [
          ...this.state.sueldos_salarios_otros_empleos,
          data
        ],
        datos_sueldos_salarios_otros_empleos: info
      },
      () => {
        console.log(this.state.sueldos_salarios_otros_empleos);
      }
    );
  };

  addClickActividadProfesional = () => {
    let data = Object.assign({}, this.state.datos_actividad_profesional);
    let info = Object.assign({}, clean.datos_actividad_profesional);

    this.setState(
      {
        actividad_profesional: [...this.state.actividad_profesional, data],
        datos_actividad_profesional: info
      },
      () => {
        console.log(this.state.actividad_profesional);
      }
    );
  };

  addClickActividadEmpresarial = () => {
    let data = Object.assign({}, this.state.datos_actividad_empresarial);
    let info = Object.assign({}, clean.datos_actividad_empresarial);

    this.setState(
      {
        actividad_empresarial: [...this.state.actividad_empresarial, data],
        datos_actividad_empresarial: info
      },
      () => {
        console.log(this.state.actividad_empresarial);
      }
    );
  };

  addClickActividadMenor = () => {
    let data = Object.assign({}, this.state.datos_actividad_economica_menor);
    let info = Object.assign({}, clean.datos_actividad_economica_menor);

    this.setState(
      {
        actividad_economica_menor: [
          ...this.state.actividad_economica_menor,
          data
        ],
        datos_actividad_economica_menor: info
      },
      () => {
        console.log(this.state.actividad_economica_menor);
      }
    );
  };

  addClickArrendamiento = () => {
    let data = Object.assign({}, this.state.datos_arrendamiento);
    let info = Object.assign({}, clean.datos_arrendamiento);

    this.setState(
      {
        arrendamiento: [...this.state.arrendamiento, data],
        datos_arrendamiento: info
      },
      () => {
        console.log(this.state.arrendamiento);
      }
    );
  };

  addClickIntereses = () => {
    let data = Object.assign({}, this.state.datos_intereses);
    let info = Object.assign({}, clean.datos_intereses);

    this.setState(
      {
        intereses: [...this.state.intereses, data],
        datos_intereses: info
      },
      () => {
        console.log(this.state.intereses);
      }
    );
  };

  addClickPremios = () => {
    let data = Object.assign({}, this.state.datos_premios);
    let info = Object.assign({}, clean.datos_premios);

    this.setState(
      {
        premios: [...this.state.premios, data],
        datos_premios: info
      },
      () => {
        console.log(this.state.premios);
      }
    );
  };

  addClickEnajenacionBienes = () => {
    let data = Object.assign({}, this.state.datos_enajenacion_bienes);
    let info = Object.assign({}, clean.datos_enajenacion_bienes);

    this.setState(
      {
        enajenacion_bienes: [...this.state.enajenacion_bienes, data],
        datos_enajenacion_bienes: info
      },
      () => {
        console.log(this.state.enajenacion_bienes);
      }
    );
  };

  addClickOtrosIngresos = () => {
    let data = Object.assign({}, this.state.datos_otros_ingresos);
    let info = Object.assign({}, clean.datos_otros_ingresos);

    this.setState(
      {
        otros_ingresos: [...this.state.otros_ingresos, data],
        datos_otros_ingresos: info
      },
      () => {
        console.log(this.state.otros_ingresos);
      }
    );
  };

  addClickBienesInmuebles = () => {
    let data = Object.assign({}, this.state.datos_bienes_inmuebles);
    let info = Object.assign({}, clean.datos_bienes_inmuebles);

    this.setState(
      {
        bienes_inmuebles: [...this.state.bienes_inmuebles, data],
        datos_bienes_inmuebles: info
      },
      () => {
        console.log(this.state.bienes_inmuebles);
      }
    );
  };

  addClickBienesMueblesRegistrables = () => {
    let data = Object.assign({}, this.state.datos_bienes_muebles_registrables);
    let info = Object.assign({}, clean.datos_bienes_muebles_registrables);

    this.setState(
      {
        bienes_muebles_registrables: [
          ...this.state.bienes_muebles_registrables,
          data
        ],
        datos_bienes_muebles_registrables: info
      },
      () => {
        console.log(this.state.bienes_muebles_registrables);
      }
    );
  };

  addClickBienesMueblesNoRegistrables = () => {
    let data = Object.assign(
      {},
      this.state.datos_bienes_muebles_no_registrables
    );
    let info = Object.assign({}, clean.datos_bienes_muebles_no_registrables);

    this.setState(
      {
        bienes_muebles_no_registrables: [
          ...this.state.bienes_muebles_no_registrables,
          data
        ],
        datos_bienes_muebles_no_registrables: info
      },
      () => {
        console.log(this.state.bienes_muebles_no_registrables);
      }
    );
  };

  addClickInversiones = () => {
    let data = Object.assign({}, this.state.datos_inversiones_cuentas_valores);
    let info = Object.assign({}, clean.datos_inversiones_cuentas_valores);

    this.setState(
      {
        inversiones_cuentas_valores: [
          ...this.state.inversiones_cuentas_valores,
          data
        ],
        datos_inversiones_cuentas_valores: info
      },
      () => {
        console.log(this.state.inversiones_cuentas_valores);
      }
    );
  };

  addClickEfectivoMetales = () => {
    let data = Object.assign({}, this.state.datos_efectivo_metales);
    let info = Object.assign({}, clean.datos_efectivo_metales);

    this.setState(
      {
        efectivo_metales: [...this.state.efectivo_metales, data],
        datos_efectivo_metales: info
      },
      () => {
        console.log(this.state.efectivo_metales);
      }
    );
  };

  addClickFideicomisos = () => {
    let data = Object.assign({}, this.state.datos_fideicomisos);
    let info = Object.assign({}, clean.datos_fideicomisos);

    this.setState(
      {
        fideicomisos: [...this.state.fideicomisos, data],
        datos_fideicomisos: info
      },
      () => {
        console.log(this.state.fideicomisos);
      }
    );
  };

  addClickBienesIntangibles = () => {
    let data = Object.assign({}, this.state.datos_bienes_intangibles);
    let info = Object.assign({}, clean.datos_bienes_intangibles);

    this.setState(
      {
        bienes_intangibles: [...this.state.bienes_intangibles, data],
        datos_bienes_intangibles: info
      },
      () => {
        console.log(this.state.bienes_intangibles);
      }
    );
  };

  addClickCuentasCobrar = () => {
    let data = Object.assign({}, this.state.datos_cuentas_por_cobrar);
    let info = Object.assign({}, clean.datos_cuentas_por_cobrar);

    this.setState(
      {
        cuentas_por_cobrar: [...this.state.cuentas_por_cobrar, data],
        datos_cuentas_por_cobrar: info
      },
      () => {
        console.log(this.state.cuentas_por_cobrar);
      }
    );
  };

  addClickPropietarioTercero = () => {
    let data = Object.assign(
      {},
      this.state.datos_uso_especie_propiedad_tercero
    );
    let info = Object.assign({}, clean.datos_uso_especie_propiedad_tercero);

    this.setState(
      {
        uso_especie_propiedad_tercero: [
          ...this.state.uso_especie_propiedad_tercero,
          data
        ],
        datos_uso_especie_propiedad_tercero: info
      },
      () => {
        console.log(this.state.uso_especie_propiedad_tercero);
      }
    );
  };

  addClickDeudas = () => {
    let data = Object.assign({}, this.state.datos_deudas);
    let info = Object.assign({}, clean.datos_deudas);

    this.setState(
      {
        deudas: [...this.state.deudas, data],
        datos_deudas: info
      },
      () => {
        console.log(this.state.deudas);
      }
    );
  };

  addClickOtrasObligaciones = () => {
    let data = Object.assign({}, this.state.datos_otras_obligaciones);
    let info = Object.assign({}, clean.datos_otras_obligaciones);

    this.setState(
      {
        otras_obligaciones: [...this.state.otras_obligaciones, data],
        datos_otras_obligaciones: info
      },
      () => {
        console.log(this.state.otras_obligaciones);
      }
    );
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

  textChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleChange = name => event => {
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

  handleChange = obj => event => {
    this.setState({
      dom_vialidad: {
        valor: this.state.dom_vialidad.valor,
        tipo_vial: this.state.dom_vialidad.valor,
        codigo: this.state.dom_vialidad.codigo,
        nom_vial: event.target.value
      }
    });

    // console.log(this.state.dom_vialidad);
  };

  anyTextChange = (obj, name) => event => {
    let text = this.state[obj];
    text[name] = event.target.value;

    this.setState(
      {
        [obj]: text
      },
      () => {
        // console.log(text);
      }
    );
  };

  handleChangeFecha(date) {
    const fecha = moment(date, "MM/DD/YYYY").format("DD-MM-YYYY");
    console.log(fecha);
    console.log(date);
    this.setState({
      fecha_nacimiento: fecha
    });
  }

  setDataDatosCurriculares = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "grado_obtenido":
        data.datos_curriculares_grados_academicos.grado_obtenido = valor;
        break;
      case "institucion_educativa":
        data.datos_curriculares_grados_academicos.institucion_educativa = valor;
        break;
      case "lugar_institucion_educativa.pais":
        data.datos_curriculares_grados_academicos.lugar_institucion_educativa.pais = this.getCiudad(
          valor
        );
        break;
      case "lugar_institucion_educativa.entidad":
        data.datos_curriculares_grados_academicos.lugar_institucion_educativa.entidad = this.getEntidadFederativa(
          valor
        );
        break;
      case "carrera":
        data.datos_curriculares_grados_academicos.carrera = valor;
        break;
      case "estatus":
        data.datos_curriculares_grados_academicos.estatus = this.getEstatusEstudio(
          valor
        );
        break;
      case "ano_conclusion":
        data.datos_curriculares_grados_academicos.ano_conclusion = valor;
        break;
      case "documento_obtenido":
        data.datos_curriculares_grados_academicos.documento_obtenido = this.getDocumuentoObtenido(
          valor
        );
        break;
      case "cedula_profesional":
        data.datos_curriculares_grados_academicos.cedula_profesional = valor;
        break;
      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataInformacionPersonal = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "nombres":
        data.informacion_general.nombres = valor;
        break;
      case "primer_apellido":
        data.informacion_general.primer_apellido = valor;
        break;
      case "segundo_apellido":
        data.informacion_general.segundo_apellido = valor;
        break;
      case "nacionalidades":
        data.informacion_general_nacionalidades = valor;
        let nacionalidad = [];
        for (var index in data.informacion_general_nacionalidades) {
          nacionalidad.push(
            this.getCiudad(data.informacion_general_nacionalidades[index])
          );
        }

        data.informacion_general.nacionalidades = nacionalidad;
        break;
      case "pais_nacimiento":
        data.informacion_general.pais_nacimiento = this.getCiudad(valor);
        break;
      case "entidad_federativa_nacimiento":
        data.informacion_general.entidad_federativa_nacimiento = this.getEntidadFederativa(
          valor
        );

        break;
      case "curp":
        data.informacion_general.curp = valor;
        break;
      case "rfc":
        data.informacion_general.rfc = valor;
        break;
      case "fecha_nacimiento":
        data.informacion_general.fecha_nacimiento = valor;
        break;
      case "numero_identificacion_oficial":
        data.informacion_general.numero_identificacion_oficial = valor;
        break;
      case "correo_electronico.personal":
        data.informacion_general.correo_electronico.personal = valor;
        break;
      case "correo_electronico.laboral":
        data.informacion_general.correo_electronico.laboral = valor;
        break;
      case "telefono.particular":
        data.informacion_general.telefono.particular = valor;
        break;
      case "telefono.celular":
        data.informacion_general.telefono.celular = valor;
        break;
      case "estado_civil":
        data.informacion_general.estado_civil = this.getEstadoCivil(valor);
        break;
      case "regimen_matrimonial":
        data.informacion_general.regimen_matrimonial = this.getRegimenMatrimonial(
          valor
        );
        break;
      /////////////////////////////  DOMICILIO  /////////////////////////////////////
      case "pais":
        data.informacion_general.domicilio.pais = this.getCiudad(valor);
        break;
      case "entidad_federativa":
        data.informacion_general.domicilio.entidad_federativa = this.getEntidadFederativa(
          valor
        );
        break;
      case "municipio":
        data.informacion_general.domicilio.municipio = this.getMunicipios(
          valor
        );

        this.updateLocalidades(
          this.state.informacion_general.domicilio.entidad_federativa.cve_ent,
          valor
        );
        break;
      case "cp":
        data.informacion_general.domicilio.cp = valor;
        break;
      case "localidad":
        data.informacion_general.domicilio.localidad = this.getLocalidad(valor);
        break;
      case "vialidad.tipo_vial":
        data.informacion_general.domicilio.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.informacion_general.domicilio.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.informacion_general.domicilio.numExt = valor;
        break;
      case "numInt":
        data.informacion_general.domicilio.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataEncargoActual = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "ente_publico":
        data.datos_encargo_actual.ente_publico = valor;
        break;
      case "empleo_cargo_comision":
        data.datos_encargo_actual.empleo_cargo_comision = valor;
        break;
      case "nivel_gobierno":
        data.datos_encargo_actual.nivel_gobierno = this.getNivelGobierno(valor);
        break;
      case "poder_juridico":
        data.datos_encargo_actual.poder_juridico = this.getPoderEjecutivo(
          valor
        );
        break;
      case "contratado_honorarios":
        data.datos_encargo_actual.contratado_honorarios = !data
          .datos_encargo_actual.contratado_honorarios;
        break;
      case "nivel_encargo":
        data.datos_encargo_actual.nivel_encargo = valor;
        break;
      case "area_adscripcion":
        data.datos_encargo_actual.area_adscripcion = valor;
        break;
      case "fecha_posesion":
        data.datos_encargo_actual.fecha_posesion = valor;
        break;
      case "telefono_laboral.numero":
        data.datos_encargo_actual.telefono_laboral.numero = valor;
        break;
      case "telefono_laboral.extension":
        data.datos_encargo_actual.telefono_laboral.extension = valor;
        break;
      case "sector_industria":
        data.datos_encargo_actual.sector_industria = this.getSectorIndustria(
          valor
        );
        break;
      case "funciones_principales.codigo":
        data.datos_encargo_actual.funciones_principales.codigo = valor;
        break;
      /////////////////////////////  direccion_encargo  /////////////////////////////////////
      case "pais":
        data.datos_encargo_actual.direccion_encargo.pais = this.getCiudad(
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_encargo_actual.direccion_encargo.entidad_federativa = this.getEntidadFederativa(
          valor
        );
        break;
      case "municipio":
        data.datos_encargo_actual.direccion_encargo.municipio = this.getMunicipios(
          valor
        );

        this.updateLocalidades(
          this.state.datos_encargo_actual.direccion_encargo.entidad_federativa
            .cve_ent,
          valor
        );
        break;
      case "cp":
        data.datos_encargo_actual.direccion_encargo.cp = valor;
        break;
      case "localidad":
        data.datos_encargo_actual.direccion_encargo.localidad = this.getLocalidad(
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_encargo_actual.direccion_encargo.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_encargo_actual.direccion_encargo.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_encargo_actual.direccion_encargo.numExt = valor;
        break;
      case "numInt":
        data.datos_encargo_actual.direccion_encargo.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataExperienciaLaboral = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "ambito":
        data.datos_experiencia_laboral.ambito = this.getAmbito(valor);
        break;
      case "nivel_gobierno":
        data.datos_experiencia_laboral.nivel_gobierno = this.getNivelGobierno(
          valor
        );
        break;
      case "poder_ente":
        data.datos_experiencia_laboral.poder_ente = this.getPoderEjecutivo(
          valor
        );
        break;
      case "nombre_institucion":
        data.datos_experiencia_laboral.nombre_institucion = valor;
        break;
      case "unidad_administrativa":
        data.datos_experiencia_laboral.unidad_administrativa = valor;
        break;
      case "sector_industria":
        data.datos_experiencia_laboral.sector_industria = this.getSectorIndustria(
          valor
        );
        break;
      case "jerarquia_rango":
        data.datos_experiencia_laboral.jerarquia_rango = valor;
        break;

      case "cargo_puesto":
        data.datos_experiencia_laboral.cargo_puesto = valor;
        break;
      case "fecha_ingreso":
        data.datos_experiencia_laboral.fecha_ingreso = valor;
        break;
      case "fecha_salida":
        data.datos_experiencia_laboral.fecha_salida = valor;
        break;
      case "funciones_principales.codigo":
        data.datos_experiencia_laboral.funciones_principales[0].codigo = valor;
        break;
      /////////////////////////////  direccion  /////////////////////////////////////
      case "pais":
        data.datos_experiencia_laboral.direccion.pais = this.getCiudad(valor);
        break;
      case "entidad_federativa":
        data.datos_experiencia_laboral.direccion.entidad_federativa = this.getEntidadFederativa(
          valor
        );
        break;
      case "municipio":
        data.datos_experiencia_laboral.direccion.municipio = this.getMunicipios(
          valor
        );

        this.updateLocalidades(
          this.state.datos_experiencia_laboral.direccion.entidad_federativa
            .cve_ent,
          valor
        );
        break;
      case "cp":
        data.datos_experiencia_laboral.direccion.cp = valor;
        break;
      case "localidad":
        data.datos_experiencia_laboral.direccion.localidad = this.getLocalidad(
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_experiencia_laboral.direccion.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_experiencia_laboral.direccion.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_experiencia_laboral.direccion.numExt = valor;
        break;
      case "numInt":
        data.datos_experiencia_laboral.direccion.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataDependientesEconomicos = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "tipo_relacion":
        data.datos_dependientes_economicos.tipo_relacion = this.getTipoRelacion(
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
            this.getCiudad(data.dependientes_economicos_nacionlidades[index])
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
        data.datos_dependientes_economicos.sector_industria = this.getSectorIndustria(
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
      case "desarrolla_cabildeo_sector_declarante":
        data.datos_dependientes_economicos.desarrolla_cabildeo_sector_declarante = !data
          .datos_dependientes_economicos.desarrolla_cabildeo_sector_declarante;
        break;
      case "observaciones":
        data.datos_dependientes_economicos.observaciones = valor;
        break;
      /////////////////////////////  DOMICILIO  /////////////////////////////////////
      case "pais":
        data.datos_dependientes_economicos.domicilio.pais = this.getCiudad(
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_dependientes_economicos.domicilio.entidad_federativa = this.getEntidadFederativa(
          valor
        );
        break;
      case "municipio":
        data.datos_dependientes_economicos.domicilio.municipio = this.getMunicipios(
          valor
        );

        this.updateLocalidades(
          this.state.datos_dependientes_economicos.domicilio.entidad_federativa
            .cve_ent,
          valor
        );
        break;
      case "cp":
        data.datos_dependientes_economicos.domicilio.cp = valor;
        break;
      case "localidad":
        data.datos_dependientes_economicos.domicilio.localidad = this.getLocalidad(
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
        data.datos_empresas_sociedades_asociaciones.pais_registro = this.getCiudad(
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
        data.datos_empresas_sociedades_asociaciones.sector_industria = this.getSectorIndustria(
          valor
        );
        break;
      /////////////////////////////  DOMICILIO  /////////////////////////////////////
      case "pais":
        data.datos_empresas_sociedades_asociaciones.domicilio.pais = this.getCiudad(
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_empresas_sociedades_asociaciones.domicilio.entidad_federativa = this.getEntidadFederativa(
          valor
        );
        break;
      case "municipio":
        data.datos_empresas_sociedades_asociaciones.domicilio.municipio = this.getMunicipios(
          valor
        );

        this.updateLocalidades(
          this.state.datos_empresas_sociedades_asociaciones.domicilio
            .entidad_federativa.cve_ent,
          valor
        );
        break;
      case "cp":
        data.datos_empresas_sociedades_asociaciones.domicilio.cp = valor;
        break;
      case "localidad":
        data.datos_empresas_sociedades_asociaciones.domicilio.localidad = this.getLocalidad(
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
        data.datos_membresias.naturaleza_membresia = this.getNaturalezaMembresia(
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
        data.datos_membresias.sector_industria = this.getSectorIndustria(valor);
        break;
      case "tipo_institucion":
        data.datos_membresias.tipo_institucion = this.getTipoInstitucion(valor);
        break;
      /////////////////////////////  DOMICILIO  /////////////////////////////////////
      case "pais":
        data.datos_membresias.domicilio.pais = this.getCiudad(valor);
        break;
      case "entidad_federativa":
        data.datos_membresias.domicilio.entidad_federativa = this.getEntidadFederativa(
          valor
        );
        break;
      case "municipio":
        data.datos_membresias.domicilio.municipio = this.getMunicipios(valor);

        this.updateLocalidades(
          this.state.datos_membresias.domicilio.entidad_federativa.cve_ent,
          valor
        );
        break;
      case "cp":
        data.datos_membresias.domicilio.cp = valor;
        break;
      case "localidad":
        data.datos_membresias.domicilio.localidad = this.getLocalidad(valor);
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

  setDataApoyosBeneficiosPublicos = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "es_beneficiario":
        data.datos_apoyos_beneficios_publicos.es_beneficiario = !data
          .datos_apoyos_beneficios_publicos.es_beneficiario;
        break;
      case "id":
        data.datos_apoyos_beneficios_publicos.id = valor;
        break;
      case "institucion_otorgante":
        data.datos_apoyos_beneficios_publicos.institucion_otorgante = valor;
        break;
      case "nivel_orden_gobierno":
        data.datos_apoyos_beneficios_publicos.nivel_orden_gobierno = this.getNivelGobierno(
          valor
        );
        break;
      case "observaciones":
        data.datos_apoyos_beneficios_publicos.observaciones = valor;
        break;
      case "programa":
        data.datos_apoyos_beneficios_publicos.programa = valor;
        break;
      case "tipo_apoyo":
        data.datos_apoyos_beneficios_publicos.tipo_apoyo = this.getTipoApoyo(
          valor
        );
        break;
      case "valor_anual_apoyo":
        data.datos_apoyos_beneficios_publicos.valor_anual_apoyo = valor;
        break;
      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataRepresentacionActiva = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp_parte":
        data.datos_representacion_activa.curp_parte = valor;
        break;
      case "fecha_inicio":
        data.datos_representacion_activa.fecha_inicio = valor;
        break;
      case "fecha_nacimiento_parte":
        data.datos_representacion_activa.fecha_nacimiento_parte = valor;
        break;
      case "id":
        data.datos_representacion_activa.id = valor;
        break;
      case "nombre_parte_representada":
        data.datos_representacion_activa.nombre_parte_representada = valor;
        break;
      case "observaciones":
        data.datos_representacion_activa.observaciones = valor;
        break;
      case "ocupacion_profesion_parte":
        data.datos_representacion_activa.ocupacion_profesion_parte = valor;
        break;
      case "pagado":
        data.datos_representacion_activa.pagado = !data
          .datos_representacion_activa.pagado;
        break;
      case "rfc_parte":
        data.datos_representacion_activa.rfc_parte = valor;
        break;
      case "sector_industria":
        data.datos_representacion_activa.sector_industria = this.getSectorIndustria(
          valor
        );
        break;
      case "tipo_representacion":
        // data.datos_representacion_activa.tipo_representacion = this.getTipoRepresentacion(valor);
        data.datos_representacion_activa.tipo_representacion = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataRepresentacionPasiva = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.datos_representacion_pasiva.curp = valor;
        break;
      case "fecha_inicio_representacion":
        data.datos_representacion_pasiva.fecha_inicio_representacion = valor;
        break;
      case "fecha_nacimiento":
        data.datos_representacion_pasiva.fecha_nacimiento = valor;
        break;
      case "id":
        data.datos_representacion_pasiva.id = valor;
        break;
      case "nacionalidades_representante":
        data.datos_representacion_pasiva.nacionalidades_representante = valor;
        break;
      case "nombre":
        data.datos_representacion_pasiva.nombre = valor;
        break;
      case "observaciones":
        data.datos_representacion_pasiva.observaciones = valor;
        break;
      case "ocupacion_profesion":
        data.datos_representacion_pasiva.ocupacion_profesion = valor;
        break;
      case "rfc":
        data.datos_representacion_pasiva.rfc = valor;
        break;
      case "sector_industria":
        data.datos_representacion_pasiva.sector_industria = this.getSectorIndustria(
          valor
        );
        break;
      case "tiene_intereses":
        data.datos_representacion_pasiva.tiene_intereses = !data
          .datos_representacion_pasiva.tiene_intereses;
        break;
      case "tipo_representacion":
        data.datos_representacion_pasiva.tipo_representacion.valor = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataSociosComerciales = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "antiguedad_vinculo":
        data.datos_socios_comerciales.antiguedad_vinculo = valor;
        break;
      case "rfc_entidad":
        data.datos_socios_comerciales.rfc_entidad = valor;
        break;
      case "fecha_nacimiento":
        data.datos_socios_comerciales.fecha_nacimiento = valor;
        break;
      case "id":
        data.datos_socios_comerciales.id = valor;
        break;
      case "lugar_nacimiento.entidad":
        data.datos_socios_comerciales.lugar_nacimiento.entidad = this.getEntidadFederativa(
          valor
        );
        break;
      case "lugar_nacimiento.pais":
        data.datos_socios_comerciales.lugar_nacimiento.pais = this.getCiudad(
          valor
        );
        break;
      case "nombre_actividad":
        data.datos_socios_comerciales.nombre_actividad = valor;
        break;
      case "nombre":
        data.datos_socios_comerciales.nombre = valor;
        break;
      case "observaciones":
        data.datos_socios_comerciales.observaciones = valor;
        break;
      case "porcentaje_participacion":
        data.datos_socios_comerciales.porcentaje_participacion = valor;
        break;
      case "rfc":
        data.datos_socios_comerciales.rfc = valor;
        break;
      case "curp":
        data.datos_socios_comerciales.curp = valor;
        break;
      case "sector_industria":
        data.datos_socios_comerciales.sector_industria = this.getSectorIndustria(
          valor
        );
        break;
      case "tipo_vinculo":
        data.datos_socios_comerciales.tipo_vinculo = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

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
        data.datos_clientes_principales.sector_industria = this.getSectorIndustria(
          valor
        );
        break;
      /////////////////////////////  DOMICILIO  /////////////////////////////////////
      case "pais":
        data.datos_clientes_principales.domicilio.pais = this.getCiudad(valor);
        break;
      case "entidad_federativa":
        data.datos_clientes_principales.domicilio.entidad_federativa = this.getEntidadFederativa(
          valor
        );
        break;
      case "municipio":
        data.datos_clientes_principales.domicilio.municipio = this.getMunicipios(
          valor
        );

        this.updateLocalidades(
          this.state.datos_clientes_principales.domicilio.entidad_federativa
            .cve_ent,
          valor
        );
        break;
      case "cp":
        data.datos_clientes_principales.domicilio.cp = valor;
        break;
      case "localidad":
        data.datos_clientes_principales.domicilio.localidad = this.getLocalidad(
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

  setDataOtrasPartesRelacionadas = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.datos_otras_partes.curp = valor;
        break;
      case "fecha_inicio_relacion":
        data.datos_otras_partes.fecha_inicio_relacion = valor;
        break;
      case "fecha_nacimiento":
        data.datos_otras_partes.fecha_nacimiento = valor;
        break;
      case "id":
        data.datos_otras_partes.id = valor;
        break;
      case "nacionalidades":
        data.datos_otras_partes.nacionalidades = valor;
        break;
      case "nombre_denominacion_parte":
        data.datos_otras_partes.nombre_denominacion_parte = valor;
        break;
      case "observaciones":
        data.datos_otras_partes.observaciones = valor;
        break;
      case "ocupacion":
        data.datos_otras_partes.ocupacion = valor;
        break;
      case "rfc":
        data.datos_otras_partes.rfc = valor;
        break;
      case "sector_industria":
        data.datos_otras_partes.sector_industria = this.getSectorIndustria(
          valor
        );
        break;
      case "tiene_interes":
        data.datos_otras_partes.tiene_interes = !data.datos_otras_partes
          .tiene_interes;
        break;
      case "tipo_relacion":
        data.datos_otras_partes.tipo_relacion = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataBeneficiosGratuitos = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "id":
        data.datos_beneficios_gratuitos.id = valor;
        break;
      case "observaciones":
        data.datos_beneficios_gratuitos.observaciones = valor;
        break;
      case "origen_beneficio":
        data.datos_beneficios_gratuitos.origen_beneficio = valor;
        break;
      case "sector_industria":
        data.datos_beneficios_gratuitos.sector_industria = this.getSectorIndustria(
          valor
        );
        break;
      case "tipo_beneficio":
        data.datos_beneficios_gratuitos.tipo_beneficio = valor;
        break;
      case "valor_beneficio":
        data.datos_beneficios_gratuitos.valor_beneficio = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataSueldosSalariosPublicos = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "ente_publico":
        data.datos_sueldos_salarios_publicos.ente_publico = this.getEntePublico(
          valor
        );
        break;
      case "id":
        data.datos_sueldos_salarios_publicos.id = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.datos_sueldos_salarios_publicos.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.datos_sueldos_salarios_publicos.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.datos_sueldos_salarios_publicos.ingreso_bruto_anual.moneda = this.getMoneda(
          valor
        );
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.datos_sueldos_salarios_publicos.ingreso_bruto_anual.unidad_temporal = this.getMedidasPlazo(
          valor
        );
        break;
      case "ingreso_bruto_anual.valor":
        data.datos_sueldos_salarios_publicos.ingreso_bruto_anual.valor = valor;
        break;
      case "observaciones":
        data.datos_sueldos_salarios_publicos.observaciones = valor;
        break;
      case "rfc":
        data.datos_sueldos_salarios_publicos.rfc = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataSueldosSalariosOtrosEmpleos = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.datos_sueldos_salarios_otros_empleos.curp = valor;
        break;
      case "descripcion_actividad_servicio":
        data.datos_sueldos_salarios_otros_empleos.descripcion_actividad_servicio = valor;
        break;
      case "id":
        data.datos_sueldos_salarios_otros_empleos.id = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.datos_sueldos_salarios_otros_empleos.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.datos_sueldos_salarios_otros_empleos.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.datos_sueldos_salarios_otros_empleos.ingreso_bruto_anual.moneda = this.getMoneda(
          valor
        );
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.datos_sueldos_salarios_otros_empleos.ingreso_bruto_anual.unidad_temporal = this.getMedidasPlazo(
          valor
        );
        break;
      case "ingreso_bruto_anual":
        data.datos_sueldos_salarios_otros_empleos.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion_razon_social":
        data.datos_sueldos_salarios_otros_empleos.nombre_denominacion_razon_social = valor;
        break;
      case "observaciones":
        data.datos_sueldos_salarios_otros_empleos.observaciones = valor;
        break;
      case "rfc":
        data.datos_sueldos_salarios_otros_empleos.rfc = valor;
        break;
      case "sector_industria":
        data.datos_sueldos_salarios_otros_empleos.sector_industria = this.getSectorIndustria(
          valor
        );
        break;
      case "tipo_actividad_servicio":
        data.datos_sueldos_salarios_otros_empleos.tipo_actividad_servicio = this.getTipoActividad(
          valor
        );
        break;
      /////////////////////////////  domicilio_persona_paga  /////////////////////////////////////
      case "pais":
        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.pais = this.getCiudad(
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.entidad_federativa = this.getEntidadFederativa(
          valor
        );
        break;
      case "municipio":
        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.municipio = this.getMunicipios(
          valor
        );

        this.updateLocalidades(
          this.state.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga
            .entidad_federativa.cve_ent,
          valor
        );
        break;
      case "cp":
        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.cp = valor;
        break;
      case "localidad":
        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.localidad = this.getLocalidad(
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.numExt = valor;
        break;
      case "numInt":
        data.datos_sueldos_salarios_otros_empleos.domicilio_persona_paga.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataActividadProfesional = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.datos_actividad_profesional.curp = valor;
        break;
      case "descripcion_actividad_servicio":
        data.datos_actividad_profesional.descripcion_actividad_servicio = valor;
        break;
      case "id":
        data.datos_actividad_profesional.id = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.datos_actividad_profesional.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.datos_actividad_profesional.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.datos_actividad_profesional.ingreso_bruto_anual.moneda = this.getMoneda(
          valor
        );
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.datos_actividad_profesional.ingreso_bruto_anual.unidad_temporal = this.getMedidasPlazo(
          valor
        );
        break;
      case "ingreso_bruto_anual":
        data.datos_actividad_profesional.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion_razon_social":
        data.datos_actividad_profesional.nombre_denominacion_razon_social = valor;
        break;
      case "observaciones":
        data.datos_actividad_profesional.observaciones = valor;
        break;
      case "rfc":
        data.datos_actividad_profesional.rfc = valor;
        break;
      case "sector_industria":
        data.datos_actividad_profesional.sector_industria = this.getSectorIndustria(
          valor
        );
        break;
      case "tipo_actividad_servicio":
        data.datos_actividad_profesional.tipo_actividad_servicio = this.getTipoActividad(
          valor
        );
        break;
      /////////////////////////////  domicilio_persona_paga  /////////////////////////////////////
      case "pais":
        data.datos_actividad_profesional.domicilio_persona_paga.pais = this.getCiudad(
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_actividad_profesional.domicilio_persona_paga.entidad_federativa = this.getEntidadFederativa(
          valor
        );
        break;
      case "municipio":
        data.datos_actividad_profesional.domicilio_persona_paga.municipio = this.getMunicipios(
          valor
        );

        this.updateLocalidades(
          this.state.datos_actividad_profesional.domicilio_persona_paga
            .entidad_federativa.cve_ent,
          valor
        );
        break;
      case "cp":
        data.datos_actividad_profesional.domicilio_persona_paga.cp = valor;
        break;
      case "localidad":
        data.datos_actividad_profesional.domicilio_persona_paga.localidad = this.getLocalidad(
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_actividad_profesional.domicilio_persona_paga.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_actividad_profesional.domicilio_persona_paga.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_actividad_profesional.domicilio_persona_paga.numExt = valor;
        break;
      case "numInt":
        data.datos_actividad_profesional.domicilio_persona_paga.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataActividadEmpresarial = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.datos_actividad_empresarial.curp = valor;
        break;
      case "descripcion_actividad_servicio":
        data.datos_actividad_empresarial.descripcion_actividad_servicio = valor;
        break;
      case "id":
        data.datos_actividad_empresarial.id = valor;
        break;
      case "ingreso_bruto_anual":
        data.datos_actividad_empresarial.ingreso_bruto_anual.valor = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.datos_actividad_empresarial.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.datos_actividad_empresarial.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.datos_actividad_empresarial.ingreso_bruto_anual.moneda = this.getMoneda(
          valor
        );
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.datos_actividad_empresarial.ingreso_bruto_anual.unidad_temporal = this.getMedidasPlazo(
          valor
        );
        break;
      case "ingreso_bruto_anual.valor":
        data.datos_actividad_empresarial.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion_razon_social":
        data.datos_actividad_empresarial.nombre_denominacion_razon_social = valor;
        break;
      case "observaciones":
        data.datos_actividad_empresarial.observaciones = valor;
        break;
      case "rfc":
        data.datos_actividad_empresarial.rfc = valor;
        break;
      case "sector_industria":
        data.datos_actividad_empresarial.sector_industria = this.getSectorIndustria(
          valor
        );
        break;
      case "tipo_actividad_servicio":
        data.datos_actividad_empresarial.tipo_actividad_servicio = this.getTipoActividad(
          valor
        );
        break;
      /////////////////////////////  domicilio_actividad_empresarial  /////////////////////////////////////
      case "pais":
        data.datos_actividad_empresarial.domicilio_actividad_empresarial.pais = this.getCiudad(
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_actividad_empresarial.domicilio_actividad_empresarial.entidad_federativa = this.getEntidadFederativa(
          valor
        );
        break;
      case "municipio":
        data.datos_actividad_empresarial.domicilio_actividad_empresarial.municipio = this.getMunicipios(
          valor
        );

        this.updateLocalidades(
          this.state.datos_actividad_empresarial.domicilio_actividad_empresarial
            .entidad_federativa.cve_ent,
          valor
        );
        break;
      case "cp":
        data.datos_actividad_empresarial.domicilio_actividad_empresarial.cp = valor;
        break;
      case "localidad":
        data.datos_actividad_empresarial.domicilio_actividad_empresarial.localidad = this.getLocalidad(
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_actividad_empresarial.domicilio_actividad_empresarial.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_actividad_empresarial.domicilio_actividad_empresarial.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_actividad_empresarial.domicilio_actividad_empresarial.numExt = valor;
        break;
      case "numInt":
        data.datos_actividad_empresarial.domicilio_actividad_empresarial.numInt = valor;
        break;
      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataActividadEconomicaMenor = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.datos_actividad_economica_menor.curp = valor;
        break;
      case "descripcion_actividad_servicio":
        data.datos_actividad_economica_menor.descripcion_actividad_servicio = valor;
        break;
      case "id":
        data.datos_actividad_economica_menor.id = valor;
        break;
      case "ingreso_bruto_anual":
        data.datos_actividad_economica_menor.ingreso_bruto_anual.valor = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.datos_actividad_economica_menor.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.datos_actividad_economica_menor.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.datos_actividad_economica_menor.ingreso_bruto_anual.moneda = this.getMoneda(
          valor
        );
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.datos_actividad_economica_menor.ingreso_bruto_anual.unidad_temporal = this.getMedidasPlazo(
          valor
        );
        break;
      case "nombre_denominacion_razon_social":
        data.datos_actividad_economica_menor.nombre_denominacion_razon_social = valor;
        break;
      case "observaciones":
        data.datos_actividad_economica_menor.observaciones = valor;
        break;
      case "rfc":
        data.datos_actividad_economica_menor.rfc = valor;
        break;
      case "sector_industria":
        data.datos_actividad_economica_menor.sector_industria = this.getSectorIndustria(
          valor
        );
        break;
      case "tipo_actividad_servicio":
        data.datos_actividad_economica_menor.tipo_actividad_servicio = this.getTipoActividad(
          valor
        );
        break;
      /////////////////////////////  domicilio_actividad  /////////////////////////////////////
      case "pais":
        data.datos_actividad_economica_menor.domicilio_actividad.pais = this.getCiudad(
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_actividad_economica_menor.domicilio_actividad.entidad_federativa = this.getEntidadFederativa(
          valor
        );
        break;
      case "municipio":
        data.datos_actividad_economica_menor.domicilio_actividad.municipio = this.getMunicipios(
          valor
        );

        this.updateLocalidades(
          this.state.datos_actividad_economica_menor.domicilio_actividad
            .entidad_federativa.cve_ent,
          valor
        );
        break;
      case "cp":
        data.datos_actividad_economica_menor.domicilio_actividad.cp = valor;
        break;
      case "localidad":
        data.datos_actividad_economica_menor.domicilio_actividad.localidad = this.getLocalidad(
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_actividad_economica_menor.domicilio_actividad.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_actividad_economica_menor.domicilio_actividad.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_actividad_economica_menor.domicilio_actividad.numExt = valor;
        break;
      case "numInt":
        data.datos_actividad_economica_menor.domicilio_actividad.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataArrendamiento = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.datos_arrendamiento.curp = valor;
        break;
      case "descripcion_actividad_servicio":
        data.datos_arrendamiento.descripcion_actividad_servicio = valor;
        break;
      case "id":
        data.datos_arrendamiento.id = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.datos_arrendamiento.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.datos_arrendamiento.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.datos_arrendamiento.ingreso_bruto_anual.moneda = this.getMoneda(
          valor
        );
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.datos_arrendamiento.ingreso_bruto_anual.unidad_temporal = this.getMedidasPlazo(
          valor
        );
        break;
      case "ingreso_bruto_anual":
        data.datos_arrendamiento.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion_razon_social":
        data.datos_arrendamiento.nombre_denominacion_razon_social = valor;
        break;
      case "observaciones":
        data.datos_arrendamiento.observaciones = valor;
        break;
      case "rfc":
        data.datos_arrendamiento.rfc = valor;
        break;
      case "sector_industria":
        data.datos_arrendamiento.sector_industria = this.getSectorIndustria(
          valor
        );
        break;
      case "tipo_actividad_servicio":
        data.datos_arrendamiento.tipo_actividad_servicio = this.getTipoActividad(
          valor
        );
        break;

      /////////////////////////////  domicilio_actividad  /////////////////////////////////////
      case "pais":
        data.datos_arrendamiento.domicilio_actividad.pais = this.getCiudad(
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_arrendamiento.domicilio_actividad.entidad_federativa = this.getEntidadFederativa(
          valor
        );
        break;
      case "municipio":
        data.datos_arrendamiento.domicilio_actividad.municipio = this.getMunicipios(
          valor
        );

        this.updateLocalidades(
          this.state.datos_arrendamiento.domicilio_actividad.entidad_federativa
            .cve_ent,
          valor
        );
        break;
      case "cp":
        data.datos_arrendamiento.domicilio_actividad.cp = valor;
        break;
      case "localidad":
        data.datos_arrendamiento.domicilio_actividad.localidad = this.getLocalidad(
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_arrendamiento.domicilio_actividad.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_arrendamiento.domicilio_actividad.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_arrendamiento.domicilio_actividad.numExt = valor;
        break;
      case "numInt":
        data.datos_arrendamiento.domicilio_actividad.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataIntereses = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.datos_intereses.curp = valor;
        break;
      case "descripcion_actividad_servicio":
        data.datos_intereses.descripcion_actividad_servicio = valor;
        break;
      case "id":
        data.datos_intereses.id = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.datos_intereses.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.datos_intereses.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.datos_intereses.ingreso_bruto_anual.moneda = this.getMoneda(valor);
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.datos_intereses.ingreso_bruto_anual.unidad_temporal = this.getMedidasPlazo(
          valor
        );
        break;
      case "ingreso_bruto_anual":
        data.datos_intereses.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion_razon_social":
        data.datos_intereses.nombre_denominacion_razon_social = valor;
        break;
      case "observaciones":
        data.datos_intereses.observaciones = valor;
        break;
      case "rfc":
        data.datos_intereses.rfc = valor;
        break;
      case "sector_industria":
        data.datos_intereses.sector_industria = this.getSectorIndustria(valor);
        break;
      case "tipo_actividad_servicio":
        data.datos_intereses.tipo_actividad_servicio = this.getTipoActividad(
          valor
        );
        break;
      /////////////////////////////  domicilio  /////////////////////////////////////
      case "pais":
        data.datos_intereses.domicilio.pais = this.getCiudad(valor);
        break;
      case "entidad_federativa":
        data.datos_intereses.domicilio.entidad_federativa = this.getEntidadFederativa(
          valor
        );
        break;
      case "municipio":
        data.datos_intereses.domicilio.municipio = this.getMunicipios(valor);

        this.updateLocalidades(
          this.state.datos_intereses.domicilio.entidad_federativa.cve_ent,
          valor
        );
        break;
      case "cp":
        data.datos_intereses.domicilio.cp = valor;
        break;
      case "localidad":
        data.datos_intereses.domicilio.localidad = this.getLocalidad(valor);
        break;
      case "vialidad.tipo_vial":
        data.datos_intereses.domicilio.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_intereses.domicilio.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_intereses.domicilio.numExt = valor;
        break;
      case "numInt":
        data.datos_intereses.domicilio.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };
  setDataPremios = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.datos_premios.curp = valor;
        break;
      case "descripcion_premio":
        data.datos_premios.descripcion_premio = valor;
        break;
      case "id":
        data.datos_premios.id = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.datos_premios.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.datos_premios.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.datos_premios.ingreso_bruto_anual.moneda = this.getMoneda(valor);
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.datos_premios.ingreso_bruto_anual.unidad_temporal = this.getMedidasPlazo(
          valor
        );
        break;
      case "ingreso_bruto_anual":
        data.datos_premios.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion":
        data.datos_premios.nombre_denominacion = valor;
        break;
      case "observaciones":
        data.datos_premios.observaciones = valor;
        break;
      case "rfc":
        data.datos_premios.rfc = valor;
        break;
      case "sector_industria":
        data.datos_premios.sector_industria = this.getSectorIndustria(valor);
        break;
      case "tipo_actividad_servicio":
        data.datos_premios.tipo_actividad_servicio = this.getTipoActividad(
          valor
        );
        break;

      /////////////////////////////  domicilio  /////////////////////////////////////
      case "pais":
        data.datos_premios.domicilio.pais = this.getCiudad(valor);
        break;
      case "entidad_federativa":
        data.datos_premios.domicilio.entidad_federativa = this.getEntidadFederativa(
          valor
        );
        break;
      case "municipio":
        data.datos_premios.domicilio.municipio = this.getMunicipios(valor);

        this.updateLocalidades(
          this.state.datos_premios.domicilio.entidad_federativa.cve_ent,
          valor
        );
        break;
      case "cp":
        data.datos_premios.domicilio.cp = valor;
        break;
      case "localidad":
        data.datos_premios.domicilio.localidad = this.getLocalidad(valor);
        break;
      case "vialidad.tipo_vial":
        data.datos_premios.domicilio.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_premios.domicilio.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_premios.domicilio.numExt = valor;
        break;
      case "numInt":
        data.datos_premios.domicilio.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataEnajenacionBienes = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.datos_enajenacion_bienes.curp = valor;
        break;
      case "descripcion_bien":
        data.datos_enajenacion_bienes.descripcion_bien = valor;
        break;

      case "tipo_bien":
        data.datos_enajenacion_bienes.tipo_bien = this.getTipoBien(valor);
        break;
      case "id":
        data.datos_enajenacion_bienes.id = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.datos_enajenacion_bienes.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.datos_enajenacion_bienes.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.datos_enajenacion_bienes.ingreso_bruto_anual.moneda = this.getMoneda(
          valor
        );
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.datos_enajenacion_bienes.ingreso_bruto_anual.unidad_temporal = this.getMedidasPlazo(
          valor
        );
        break;
      case "ingreso_bruto_anual":
        data.datos_enajenacion_bienes.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion":
        data.datos_enajenacion_bienes.nombre_denominacion = valor;
        break;
      case "observaciones":
        data.datos_enajenacion_bienes.observaciones = valor;
        break;
      case "rfc":
        data.datos_enajenacion_bienes.rfc = valor;
        break;
      case "sector_industria":
        data.datos_enajenacion_bienes.sector_industria = this.getSectorIndustria(
          valor
        );
        break;
      case "tipo_actividad_servicio":
        data.datos_enajenacion_bienes.tipo_actividad_servicio = this.getTipoActividad(
          valor
        );
        break;

      /////////////////////////////  domicilio_bien_enajenado  /////////////////////////////////////
      case "pais":
        data.datos_enajenacion_bienes.domicilio_bien_enajenado.pais = this.getCiudad(
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_enajenacion_bienes.domicilio_bien_enajenado.entidad_federativa = this.getEntidadFederativa(
          valor
        );
        break;
      case "municipio":
        data.datos_enajenacion_bienes.domicilio_bien_enajenado.municipio = this.getMunicipios(
          valor
        );

        this.updateLocalidades(
          this.state.datos_enajenacion_bienes.domicilio_bien_enajenado
            .entidad_federativa.cve_ent,
          valor
        );
        break;
      case "cp":
        data.datos_enajenacion_bienes.domicilio_bien_enajenado.cp = valor;
        break;
      case "localidad":
        data.datos_enajenacion_bienes.domicilio_bien_enajenado.localidad = this.getLocalidad(
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_enajenacion_bienes.domicilio_bien_enajenado.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_enajenacion_bienes.domicilio_bien_enajenado.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_enajenacion_bienes.domicilio_bien_enajenado.numExt = valor;
        break;
      case "numInt":
        data.datos_enajenacion_bienes.domicilio_bien_enajenado.numInt = valor;
        break;
      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataOtrosIngresos = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.datos_otros_ingresos.curp = valor;
        break;
      case "descripcion_actividad":
        data.datos_otros_ingresos.descripcion_actividad = valor;
        break;
      case "id":
        data.datos_otros_ingresos.id = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.datos_otros_ingresos.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.datos_otros_ingresos.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.datos_otros_ingresos.ingreso_bruto_anual.moneda = this.getMoneda(
          valor
        );
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.datos_otros_ingresos.ingreso_bruto_anual.unidad_temporal = this.getMedidasPlazo(
          valor
        );
        break;
      case "ingreso_bruto_anual":
        data.datos_otros_ingresos.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion":
        data.datos_otros_ingresos.nombre_denominacion = valor;
        break;
      case "observaciones":
        data.datos_otros_ingresos.observaciones = valor;
        break;
      case "rfc":
        data.datos_otros_ingresos.rfc = valor;
        break;
      case "sector_industria":
        data.datos_otros_ingresos.sector_industria = this.getSectorIndustria(
          valor
        );
        break;
      case "tipo_actividad":
        data.datos_otros_ingresos.tipo_actividad = this.getTipoActividad(valor);
        break;

      /////////////////////////////  domicilio_actividad  /////////////////////////////////////
      case "pais":
        data.datos_otros_ingresos.domicilio_actividad.pais = this.getCiudad(
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_otros_ingresos.domicilio_actividad.entidad_federativa = this.getEntidadFederativa(
          valor
        );
        break;
      case "municipio":
        data.datos_otros_ingresos.domicilio_actividad.municipio = this.getMunicipios(
          valor
        );

        this.updateLocalidades(
          this.state.datos_otros_ingresos.domicilio_actividad.entidad_federativa
            .cve_ent,
          valor
        );
        break;
      case "cp":
        data.datos_otros_ingresos.domicilio_actividad.cp = valor;
        break;
      case "localidad":
        data.datos_otros_ingresos.domicilio_actividad.localidad = this.getLocalidad(
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_otros_ingresos.domicilio_actividad.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_otros_ingresos.domicilio_actividad.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_otros_ingresos.domicilio_actividad.numExt = valor;
        break;
      case "numInt":
        data.datos_otros_ingresos.domicilio_actividad.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataBienesInmuebles = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp_quien_adquirio":
        data.datos_bienes_inmuebles.curp_quien_adquirio = valor;
        break;
      case "fecha_adquisicion":
        data.datos_bienes_inmuebles.fecha_adquisicion = valor;
        break;
      case "forma_adquisicion":
        data.datos_bienes_inmuebles.forma_adquisicion = this.getFormaAdquision(
          valor
        );
        break;
      case "id":
        data.datos_bienes_inmuebles.id = valor;
        break;
      case "identificacion_bien":
        data.datos_bienes_inmuebles.identificacion_bien = valor;
        break;
      case "identificacion_bien.fecha_contrato":
        data.datos_bienes_inmuebles.identificacion_bien.fecha_contrato = valor;
        break;
      case "identificacion_bien.folio_real":
        data.datos_bienes_inmuebles.identificacion_bien.folio_real = valor;
        break;
      case "identificacion_bien.numero_escritura_publica":
        data.datos_bienes_inmuebles.identificacion_bien.numero_escritura_publica = valor;
        break;
      case "identificacion_bien.numero_registro_publico":
        data.datos_bienes_inmuebles.identificacion_bien.numero_registro_publico = valor;
        break;
      case "nombre_copropietario":
        data.datos_bienes_inmuebles.nombre_copropietario = valor;
        break;
      case "nombre_copropietario.nombres":
        data.datos_bienes_inmuebles.nombre_copropietario.nombres = valor;
        break;
      case "nombre_copropietario.primer_apellido":
        data.datos_bienes_inmuebles.nombre_copropietario.primer_apellido = valor;
        break;
      case "nombre_copropietario.segundo_apellido":
        data.datos_bienes_inmuebles.nombre_copropietario.segundo_apellido = valor;
        break;
      case "nombre_denominacion_quien_adquirio":
        data.datos_bienes_inmuebles.nombre_denominacion_quien_adquirio = valor;
        break;
      case "observaciones":
        data.datos_bienes_inmuebles.observaciones = valor;
        break;
      case "porcentaje_propiedad":
        data.datos_bienes_inmuebles.porcentaje_propiedad = valor;
        break;
      case "precio_adquisicion.moneda":
        data.datos_bienes_inmuebles.precio_adquisicion.moneda = this.getMoneda(
          valor
        );
        break;
      case "precio_adquisicion":
        data.datos_bienes_inmuebles.precio_adquisicion.valor = valor;
        break;
      case "relacion_persona_adquirio":
        data.datos_bienes_inmuebles.relacion_persona_adquirio = this.getRelacionDeclarante(
          valor
        );
        break;
      case "rfc_quien_adquirio":
        data.datos_bienes_inmuebles.rfc_quien_adquirio = valor;
        break;
      case "sector_industria":
        data.datos_bienes_inmuebles.sector_industria = this.getSectorIndustria(
          valor
        );
        break;
      case "superficie_construccion":
        data.datos_bienes_inmuebles.superficie_construccion = valor;
        break;
      case "superficie_terreno":
        data.datos_bienes_inmuebles.superficie_terreno = valor;
        break;
      case "tipo_bien":
        data.datos_bienes_inmuebles.tipo_bien = this.getTipoBien(valor);
        break;
      case "tipo_operacion":
        data.datos_bienes_inmuebles.tipo_operacion = this.getTipoOperacion(
          valor
        );
        break;
      case "valor_catastral":
        data.datos_bienes_inmuebles.valor_catastral = valor;
        break;

      case "titular":
        data.datos_bienes_inmuebles.titular = this.getTitularBien(valor);
        break;

      /////////////////////////////  domicilio_bien  /////////////////////////////////////
      case "pais":
        data.datos_bienes_inmuebles.domicilio_bien.pais = this.getCiudad(valor);
        break;
      case "entidad_federativa":
        data.datos_bienes_inmuebles.domicilio_bien.entidad_federativa = this.getEntidadFederativa(
          valor
        );
        break;
      case "municipio":
        data.datos_bienes_inmuebles.domicilio_bien.municipio = this.getMunicipios(
          valor
        );

        this.updateLocalidades(
          this.state.datos_bienes_inmuebles.domicilio_bien.entidad_federativa
            .cve_ent,
          valor
        );
        break;
      case "cp":
        data.datos_bienes_inmuebles.domicilio_bien.cp = valor;
        break;
      case "localidad":
        data.datos_bienes_inmuebles.domicilio_bien.localidad = this.getLocalidad(
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_bienes_inmuebles.domicilio_bien.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_bienes_inmuebles.domicilio_bien.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_bienes_inmuebles.domicilio_bien.numExt = valor;
        break;
      case "numInt":
        data.datos_bienes_inmuebles.domicilio_bien.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataBienesMueblesRegistables = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "fecha_adquisicion":
        data.datos_bienes_muebles_registrables.fecha_adquisicion = valor;
        break;
      case "forma_adquisicion":
        data.datos_bienes_muebles_registrables.forma_adquisicion = this.getFormaAdquision(
          valor
        );
        break;
      case "id":
        data.datos_bienes_muebles_registrables.id = valor;
        break;
      case "lugar_registro.entidad":
        data.datos_bienes_muebles_registrables.lugar_registro.entidad = this.getEntidadFederativa(
          valor
        );
        break;
      case "lugar_registro.pais":
        data.datos_bienes_muebles_registrables.lugar_registro.pais = this.getCiudad(
          valor
        );
        break;
      case "marca":
        data.datos_bienes_muebles_registrables.marca = valor;
        break;
      case "modelo":
        data.datos_bienes_muebles_registrables.modelo = valor;
        break;
      case "nombre_denominacion_adquirio":
        data.datos_bienes_muebles_registrables.nombre_denominacion_adquirio = valor;
        break;
      case "nombres_copropietarios":
        data.datos_bienes_muebles_registrables.nombres_copropietarios = valor;
        break;
      case "numero_registro_vehicular":
        data.datos_bienes_muebles_registrables.numero_registro_vehicular = valor;
        break;
      case "numero_serie":
        data.datos_bienes_muebles_registrables.numero_serie = valor;
        break;
      case "observaciones":
        data.datos_bienes_muebles_registrables.observaciones = valor;
        break;
      case "porcentaje_propiedad":
        data.datos_bienes_muebles_registrables.porcentaje_propiedad = valor;
        break;
      case "precio_adquisicion.moneda":
        data.datos_bienes_muebles_registrables.precio_adquisicion.moneda = this.getMoneda(
          valor
        );
        break;
      case "precio_adquisicion":
        data.datos_bienes_muebles_registrables.precio_adquisicion.valor = valor;
        break;
      case "relacion_persona_quien_adquirio":
        data.datos_bienes_muebles_registrables.relacion_persona_quien_adquirio = this.getRelacionDeclarante(
          valor
        );
        break;
      case "rfc_quien_adquirio":
        data.datos_bienes_muebles_registrables.rfc_quien_adquirio = valor;
        break;
      case "sector_industria":
        data.datos_bienes_muebles_registrables.sector_industria = this.getSectorIndustria(
          valor
        );
        break;
      case "submarca":
        data.datos_bienes_muebles_registrables.submarca = valor;
        break;
      case "tipo_bien_inmueble":
        data.datos_bienes_muebles_registrables.tipo_bien_mueble = this.getTipoBienInmueble(
          valor
        );
        break;
      case "tipo_operacion":
        data.datos_bienes_muebles_registrables.tipo_operacion = this.getTipoOperacion(
          valor
        );
        break;
      case "titular_bien":
        data.datos_bienes_muebles_registrables.titular_bien = this.getTitularBien(
          valor
        );
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataBienesMueblesNoRegistables = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "descripcion":
        data.datos_bienes_muebles_no_registrables.descripcion = valor;
        break;
      case "fecha_adquisicion":
        data.datos_bienes_muebles_no_registrables.fecha_adquisicion = valor;
        break;
      case "forma_adquisicion":
        data.datos_bienes_muebles_no_registrables.forma_adquisicion = this.getFormaAdquision(
          valor
        );
        break;
      case "id":
        data.datos_bienes_muebles_no_registrables.id = valor;
        break;
      case "nombre_denominacion_adquirio":
        data.datos_bienes_muebles_no_registrables.nombre_denominacion_adquirio = valor;
        break;
      case "nombres_copropietarios":
        data.datos_bienes_muebles_no_registrables.nombres_copropietarios = valor;
        break;
      case "observaciones":
        data.datos_bienes_muebles_no_registrables.observaciones = valor;
        break;
      case "porcentaje_propiedad":
        data.datos_bienes_muebles_no_registrables.porcentaje_propiedad = valor;
        break;
      case "precio_adquisicion.moneda":
        data.datos_bienes_muebles_no_registrables.precio_adquisicion.moneda = this.getMoneda(
          valor
        );
        break;
      case "precio_adquisicion":
        data.datos_bienes_muebles_no_registrables.precio_adquisicion.valor = valor;
        break;
      case "relacion_quien_adquirio":
        data.datos_bienes_muebles_no_registrables.relacion_quien_adquirio = this.getTipoRelacion(
          valor
        );
        break;
      case "tipo_bien":
        data.datos_bienes_muebles_no_registrables.tipo_bien = this.getTipoBien(
          valor
        );
        break;
      case "tipo_operacion":
        data.datos_bienes_muebles_no_registrables.tipo_operacion = this.getTipoOperacion(
          valor
        );
        break;
      case "titular_bien":
        data.datos_bienes_muebles_no_registrables.titular_bien = this.getTitularBien(
          valor
        );
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataInversionesCuentasValores = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "fecha_inicio":
        data.datos_inversiones_cuentas_valores.fecha_inicio = valor;
        break;
      case "forma_adquisicion":
        data.datos_inversiones_cuentas_valores.forma_adquisicion = this.getFormaAdquision(
          valor
        );
        break;
      case "id":
        data.datos_inversiones_cuentas_valores.id = valor;
        break;
      case "monto_original":
        data.datos_inversiones_cuentas_valores.monto_original = valor;
        break;
      case "nacional_extranjero":
        data.datos_inversiones_cuentas_valores.nacional_extranjero = this.getCiudad(
          valor
        );
        break;
      case "nombre_institucion":
        data.datos_inversiones_cuentas_valores.nombre_institucion = valor;
        break;
      case "numero_cuenta":
        data.datos_inversiones_cuentas_valores.numero_cuenta = valor;
        break;
      case "observaciones":
        data.datos_inversiones_cuentas_valores.observaciones = valor;
        break;
      case "plazo":
        data.datos_inversiones_cuentas_valores.plazo = valor;
        break;
      case "porcentaje_inversion":
        data.datos_inversiones_cuentas_valores.porcentaje_inversion = valor;
        break;
      case "rfc_institucion":
        data.datos_inversiones_cuentas_valores.rfc_institucion = valor;
        break;
      case "saldo_anual":
        data.datos_inversiones_cuentas_valores.saldo_anual = valor;
        break;
      case "sector_industria":
        data.datos_inversiones_cuentas_valores.sector_industria = this.getSectorIndustria(
          valor
        );
        break;
      case "tasa_interes":
        data.datos_inversiones_cuentas_valores.tasa_interes = valor;
        break;
      case "tipo_especifico_inversion":
        data.datos_inversiones_cuentas_valores.tipo_especifico_inversion = this.getTipoEspecificoInversion(
          valor
        );
        break;
      case "tipo_inversion":
        data.datos_inversiones_cuentas_valores.tipo_inversion = this.getTipoInversion(
          valor
        );
        break;
      case "tipo_moneda":
        data.datos_inversiones_cuentas_valores.tipo_moneda = this.getMoneda(
          valor
        );
        break;
      case "tipo_operacion":
        data.datos_inversiones_cuentas_valores.tipo_operacion = this.getTipoOperacion(
          valor
        );
        break;
      case "titular_bien":
        data.datos_inversiones_cuentas_valores.titular_bien = this.getTitularBien(
          valor
        );
        break;
      case "unidad_medida_plazo":
        data.datos_inversiones_cuentas_valores.unidad_medida_plazo = this.getMedidasPlazo(
          valor
        );
        break;

      /////////////////////////////  domicilio_institucion  /////////////////////////////////////
      case "pais":
        data.datos_inversiones_cuentas_valores.domicilio_institucion.pais = this.getCiudad(
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_inversiones_cuentas_valores.domicilio_institucion.entidad_federativa = this.getEntidadFederativa(
          valor
        );
        break;
      case "municipio":
        data.datos_inversiones_cuentas_valores.domicilio_institucion.municipio = this.getMunicipios(
          valor
        );

        this.updateLocalidades(
          this.state.datos_inversiones_cuentas_valores.domicilio_institucion
            .entidad_federativa.cve_ent,
          valor
        );
        break;
      case "cp":
        data.datos_inversiones_cuentas_valores.domicilio_institucion.cp = valor;
        break;
      case "localidad":
        data.datos_inversiones_cuentas_valores.domicilio_institucion.localidad = this.getLocalidad(
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_inversiones_cuentas_valores.domicilio_institucion.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_inversiones_cuentas_valores.domicilio_institucion.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_inversiones_cuentas_valores.domicilio_institucion.numExt = valor;
        break;
      case "numInt":
        data.datos_inversiones_cuentas_valores.domicilio_institucion.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataEfectivoMetales = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "forma_adquisicion":
        data.datos_efectivo_metales.forma_adquisicion = this.getFormaAdquision(
          valor
        );
        break;
      case "id":
        data.datos_efectivo_metales.id = valor;
        break;
      case "monto_moneda":
        data.datos_efectivo_metales.monto_moneda = valor;
        break;
      case "observaciones_comentarios":
        data.datos_efectivo_metales.observaciones_comentarios = valor;
        break;
      case "tipo_metal":
        data.datos_efectivo_metales.tipo_metal = this.getTipoMetal(valor);
        break;
      case "tipo_moneda":
        data.datos_efectivo_metales.tipo_moneda = this.getMoneda(valor);
        break;
      case "tipo_operacion":
        data.datos_efectivo_metales.tipo_operacion = this.getTipoOperacion(
          valor
        );
        break;
      case "unidades":
        data.datos_efectivo_metales.unidades = valor;
        break;
      case "monto_metal":
        data.datos_efectivo_metales.monto_metal = valor;
        break;
      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataFideicomisos = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "id":
        data.fideicomisos.id = valor;
        break;
      case "tipo_operacion":
        data.fideicomisos.tipo_operacion = this.getTipoOperacion(valor);
        break;
      case "identificador_fideicomiso":
        data.fideicomisos.identificador_fideicomiso = valor;
        break;
      case "tipo_fideicomiso":
        data.fideicomisos.tipo_fideicomiso = valor;
        break;
      case "objetivo":
        data.fideicomisos.objetivo = valor;
        break;
      case "numero_registro":
        data.fideicomisos.numero_registro = valor;
        break;
      case "fecha_creacion":
        data.fideicomisos.fecha_creacion = valor;
        break;
      case "vigencia":
        data.fideicomisos.vigencia = valor;
        break;
      case "residencia":
        data.fideicomisos.residencia = valor;
        break;
      case "valor":
        data.fideicomisos.valor = valor;
        break;
      case "moneda":
        data.fideicomisos.moneda = valor;
        break;
      case "porcentaje_propiedad_derechos_fiduciarios":
        data.fideicomisos.porcentaje_propiedad_derechos_fiduciarios = valor;
        break;
      case "ingreso_monetario_obtenido":
        data.fideicomisos.ingreso_monetario_obtenido = valor;
        break;
      case "institucion_fiduciaria":
        data.fideicomisos.institucion_fiduciaria = valor;
        break;
      case "observaciones":
        data.fideicomisos.observaciones = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataBienesIntangibles = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "descripcion":
        data.datos_bienes_intangibles.descripcion = valor;
        break;
      case "ente_publico_encargado":
        data.datos_bienes_intangibles.ente_publico_encargado = valor;
        break;
      case "fecha_registro":
        data.datos_bienes_intangibles.fecha_registro = valor;
        break;
      case "fecha_vencimiento":
        data.datos_bienes_intangibles.fecha_vencimiento = valor;
        break;
      case "forma_adquisicion":
        data.datos_bienes_intangibles.forma_adquisicion = this.getFormaAdquision(
          valor
        );
        break;
      case "id":
        data.datos_bienes_intangibles.id = valor;
        break;
      case "nombre_copropietario":
        data.datos_bienes_intangibles.nombre_copropietario = valor;
        break;
      case "numero_registro":
        data.datos_bienes_intangibles.numero_registro = valor;
        break;
      case "observaciones":
        data.datos_bienes_intangibles.observaciones = valor;
        break;
      case "porcentaje_copropiedad":
        data.datos_bienes_intangibles.porcentaje_copropiedad = valor;
        break;
      case "porcentaje_propiedad_copropietario":
        data.datos_bienes_intangibles.porcentaje_propiedad_copropietario = valor;
        break;
      case "precio_adquisicion.moneda":
        data.datos_bienes_intangibles.precio_adquisicion.moneda = this.getMoneda(
          valor
        );
        break;
      case "precio_adquisicion":
        data.datos_bienes_intangibles.precio_adquisicion.valor = valor;
        break;
      case "precio_total_copropiedad.moneda":
        data.datos_bienes_intangibles.precio_total_copropiedad.moneda = this.getMoneda(
          valor
        );
        break;
      case "precio_total_copropiedad":
        data.datos_bienes_intangibles.precio_total_copropiedad.valor = valor;
        break;
      case "propietario_registrado":
        data.datos_bienes_intangibles.propietario_registrado = valor;
        break;
      case "sector_industria":
        data.datos_bienes_intangibles.sector_industria = this.getSectorIndustria(
          valor
        );
        break;
      case "tipo_operacion":
        data.datos_bienes_intangibles.tipo_operacion = this.getTipoOperacion(
          valor
        );
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataCuentasPorCobrar = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "fecha_prestamo":
        data.datos_cuentas_por_cobrar.fecha_prestamo = valor;
        break;
      case "fecha_vencimiento":
        data.datos_cuentas_por_cobrar.fecha_vencimiento = valor;
        break;
      case "id":
        data.datos_cuentas_por_cobrar.id = valor;
        break;
      case "monto_original_prestamo":
        data.datos_cuentas_por_cobrar.monto_original_prestamo = valor;
        break;
      case "nombre_copropietario":
        data.datos_cuentas_por_cobrar.nombre_copropietario = valor;
        break;
      case "nombre_prestatario":
        data.datos_cuentas_por_cobrar.nombre_prestatario = valor;
        break;
      case "numero_registro":
        data.datos_cuentas_por_cobrar.numero_registro = valor;
        break;
      case "observaciones":
        data.datos_cuentas_por_cobrar.observaciones = valor;
        break;
      case "porcentaje_copropiedad":
        data.datos_cuentas_por_cobrar.porcentaje_copropiedad = valor;
        break;
      case "saldo_pendiente":
        data.datos_cuentas_por_cobrar.saldo_pendiente = valor;
        break;
      case "sector_industria":
        data.datos_cuentas_por_cobrar.sector_industria = this.getSectorIndustria(
          valor
        );
        break;
      case "tasa_interes":
        data.datos_cuentas_por_cobrar.tasa_interes = valor;
        break;

      /////////////////////////////  domicilio_prestatarios  /////////////////////////////////////
      case "pais":
        data.datos_cuentas_por_cobrar.domicilio_prestatarios.pais = this.getCiudad(
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_cuentas_por_cobrar.domicilio_prestatarios.entidad_federativa = this.getEntidadFederativa(
          valor
        );
        break;
      case "municipio":
        data.datos_cuentas_por_cobrar.domicilio_prestatarios.municipio = this.getMunicipios(
          valor
        );

        this.updateLocalidades(
          this.state.datos_cuentas_por_cobrar.domicilio_prestatarios
            .entidad_federativa.cve_ent,
          valor
        );
        break;
      case "cp":
        data.datos_cuentas_por_cobrar.domicilio_prestatarios.cp = valor;
        break;
      case "localidad":
        data.datos_cuentas_por_cobrar.domicilio_prestatarios.localidad = this.getLocalidad(
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_cuentas_por_cobrar.domicilio_prestatarios.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_cuentas_por_cobrar.domicilio_prestatarios.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_cuentas_por_cobrar.domicilio_prestatarios.numExt = valor;
        break;
      case "numInt":
        data.datos_cuentas_por_cobrar.domicilio_prestatarios.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataUsoEspeciePropiedadTercero = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp_tercero_propietario":
        data.datos_uso_especie_propiedad_tercero.curp_tercero_propietario = valor;
        break;
      case "fecha_inicio":
        data.datos_uso_especie_propiedad_tercero.fecha_inicio = valor;
        break;
      case "id":
        data.datos_uso_especie_propiedad_tercero.id = valor;
        break;
      case "nombre_tercero_propietario":
        data.datos_uso_especie_propiedad_tercero.nombre_tercero_propietario = valor;
        break;
      case "observaciones":
        data.datos_uso_especie_propiedad_tercero.observaciones = valor;
        break;
      case "relacion_persona":
        data.datos_uso_especie_propiedad_tercero.relacion_persona = this.getRelacionDeclarante(
          valor
        );
        break;
      case "rfc_tercero_propietario":
        data.datos_uso_especie_propiedad_tercero.rfc_tercero_propietario = valor;
        break;
      case "sector_industria":
        data.datos_uso_especie_propiedad_tercero.sector_industria = this.getSectorIndustria(
          valor
        );
        break;
      case "tipo_bien":
        data.datos_uso_especie_propiedad_tercero.tipo_bien = valor;
        break;
      case "valor_mercado.moneda":
        data.datos_uso_especie_propiedad_tercero.valor_mercado.moneda = this.getMoneda(
          valor
        );
        break;
      case "valor_mercado":
        data.datos_uso_especie_propiedad_tercero.valor_mercado.valor = valor;
        break;

      /////////////////////////////  domicilio_persona  /////////////////////////////////////
      case "pais":
        data.datos_uso_especie_propiedad_tercero.domicilio_persona.pais = this.getCiudad(
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_uso_especie_propiedad_tercero.domicilio_persona.entidad_federativa = this.getEntidadFederativa(
          valor
        );
        break;
      case "municipio":
        data.datos_uso_especie_propiedad_tercero.domicilio_persona.municipio = this.getMunicipios(
          valor
        );

        this.updateLocalidades(
          this.state.datos_uso_especie_propiedad_tercero.domicilio_persona
            .entidad_federativa.cve_ent,
          valor
        );
        break;
      case "cp":
        data.datos_uso_especie_propiedad_tercero.domicilio_persona.cp = valor;
        break;
      case "localidad":
        data.datos_uso_especie_propiedad_tercero.domicilio_persona.localidad = this.getLocalidad(
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_uso_especie_propiedad_tercero.domicilio_persona.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_uso_especie_propiedad_tercero.domicilio_persona.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_uso_especie_propiedad_tercero.domicilio_persona.numExt = valor;
        break;
      case "numInt":
        data.datos_uso_especie_propiedad_tercero.domicilio_persona.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataDeudas = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "fecha_adeudo":
        data.datos_deudas.fecha_adeudo = valor;
        break;
      case "garantia":
        data.datos_deudas.garantia = valor;
        break;
      case "id":
        data.datos_deudas.id = valor;
        break;
      case "identificador_deuda":
        data.datos_deudas.identificador_deuda = valor;
        break;
      case "monto_original":
        data.datos_deudas.monto_original = valor;
        break;
      case "montos_abonados":
        data.datos_deudas.montos_abonados = valor;
        break;
      case "nacional_extranjero":
        data.datos_deudas.nacional_extranjero = this.getCiudad(valor);
        break;
      case "nombre_acreedor":
        data.datos_deudas.nombre_acreedor = valor;
        break;
      case "nombre_garante":
        data.datos_deudas.nombre_garante = valor;
        break;
      case "observaciones":
        data.datos_deudas.observaciones = valor;
        break;
      case "plazo_adeudo":
        data.datos_deudas.plazo_adeudo = valor;
        break;
      case "porcentaje_adeudo_titular":
        data.datos_deudas.porcentaje_adeudo_titular = valor;
        break;
      case "rfc_acreedor":
        data.datos_deudas.rfc_acreedor = valor;
        break;
      case "saldo_pendiente":
        data.datos_deudas.saldo_pendiente = valor;
        break;
      case "sector_industria":
        data.datos_deudas.sector_industria = this.getSectorIndustria(valor);
        break;
      case "tasa_interes":
        data.datos_deudas.tasa_interes = valor;
        break;
      case "tipo_acreedor":
        data.datos_deudas.tipo_acreedor = this.getTipoAcreedor(valor);
        break;
      case "tipo_adeudo":
        data.datos_deudas.tipo_adeudo = this.getTipoAdeudo(valor);
        break;
      case "tipo_moneda":
        data.datos_deudas.tipo_moneda = this.getMoneda(valor);
        break;
      case "tipo_operacion":
        data.datos_deudas.tipo_operacion = this.getTipoOperacion(valor);
        break;
      case "titularidad_deuda":
        data.datos_deudas.titularidad_deuda = this.getTitularBien(valor);
        break;
      case "unidad_medida_adeudo":
        data.datos_deudas.unidad_medida_adeudo = this.getMedidasPlazo(valor);
        break;

      /////////////////////////////  domicilio_acreedor  /////////////////////////////////////
      case "pais":
        data.datos_deudas.domicilio_acreedor.pais = this.getCiudad(valor);
        break;
      case "entidad_federativa":
        data.datos_deudas.domicilio_acreedor.entidad_federativa = this.getEntidadFederativa(
          valor
        );
        break;
      case "municipio":
        data.datos_deudas.domicilio_acreedor.municipio = this.getMunicipios(
          valor
        );

        this.updateLocalidades(
          this.state.datos_deudas.domicilio_acreedor.entidad_federativa.cve_ent,
          valor
        );
        break;
      case "cp":
        data.datos_deudas.domicilio_acreedor.cp = valor;
        break;
      case "localidad":
        data.datos_deudas.domicilio_acreedor.localidad = this.getLocalidad(
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_deudas.domicilio_acreedor.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_deudas.domicilio_acreedor.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_deudas.domicilio_acreedor.numExt = valor;
        break;
      case "numInt":
        data.datos_deudas.domicilio_acreedor.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  setDataOtrasObligaciones = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "fecha_obligacion":
        data.datos_otras_obligaciones.fecha_obligacion = valor;
        break;
      case "garantia":
        data.datos_otras_obligaciones.garantia = valor;
        break;
      case "id":
        data.datos_otras_obligaciones.id = valor;
        break;
      case "identificador_obligacion":
        data.datos_otras_obligaciones.identificador_obligacion = valor;
        break;
      case "monto_original":
        data.datos_otras_obligaciones.monto_original = valor;
        break;
      case "montos_abonados":
        data.datos_otras_obligaciones.montos_abonados = valor;
        break;
      case "nacional_extranjero":
        data.datos_otras_obligaciones.nacional_extranjero = this.getCiudad(
          valor
        );
        break;
      case "nombre_acreedor":
        data.datos_otras_obligaciones.nombre_acreedor = valor;
        break;
      case "observaciones":
        data.datos_otras_obligaciones.observaciones = valor;
        break;
      case "plazo_obligacion":
        data.datos_otras_obligaciones.plazo_obligacion = valor;
        break;
      case "porcentaje_obligacion_titular":
        data.datos_otras_obligaciones.porcentaje_obligacion_titular = valor;
        break;
      case "rfc_acreedor":
        data.datos_otras_obligaciones.rfc_acreedor = valor;
        break;
      case "saldo_pendiente":
        data.datos_otras_obligaciones.saldo_pendiente = valor;
        break;
      case "sector_industria":
        data.datos_otras_obligaciones.sector_industria = this.getSectorIndustria(
          valor
        );
        break;
      case "tasa_interes":
        data.datos_otras_obligaciones.tasa_interes = valor;
        break;
      case "tipo_acreedor":
        data.datos_otras_obligaciones.tipo_acreedor = this.getTipoAcreedor(
          valor
        );
        break;
      case "tipo_moneda":
        data.datos_otras_obligaciones.tipo_moneda = this.getMoneda(valor);
        break;
      case "tipo_obligacion":
        data.datos_otras_obligaciones.tipo_obligacion = this.getTipoAdeudo(
          valor
        );
        break;
      case "tipo_operacion":
        data.datos_otras_obligaciones.tipo_operacion = this.getTipoOperacion(
          valor
        );
        break;
      case "titularidad_obligacion":
        data.datos_otras_obligaciones.titularidad_obligacion = this.getTitularBien(
          valor
        );
        break;
      case "unidad_medida_plazo":
        data.datos_otras_obligaciones.unidad_medida_plazo = this.getMedidasPlazo(
          valor
        );
        break;

      /////////////////////////////  domicilio_acreedor  /////////////////////////////////////
      case "pais":
        data.datos_otras_obligaciones.domicilio_acreedor.pais = this.getCiudad(
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_otras_obligaciones.domicilio_acreedor.entidad_federativa = this.getEntidadFederativa(
          valor
        );
        break;
      case "municipio":
        data.datos_otras_obligaciones.domicilio_acreedor.municipio = this.getMunicipios(
          valor
        );

        this.updateLocalidades(
          this.state.datos_otras_obligaciones.domicilio_acreedor
            .entidad_federativa.cve_ent,
          valor
        );
        break;
      case "cp":
        data.datos_otras_obligaciones.domicilio_acreedor.cp = valor;
        break;
      case "localidad":
        data.datos_otras_obligaciones.domicilio_acreedor.localidad = this.getLocalidad(
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_otras_obligaciones.domicilio_acreedor.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_otras_obligaciones.domicilio_acreedor.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_otras_obligaciones.domicilio_acreedor.numExt = valor;
        break;
      case "numInt":
        data.datos_otras_obligaciones.domicilio_acreedor.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  componentDidMount() {
    fetch(config.apiHost + "ciudades")
      .then(res => res.json())
      .then(ciudades => this.setState({ ciudades: ciudades }));

    fetch(config.apiHost + "entidades")
      .then(res => res.json())
      .then(entidades => this.setState({ entidades: entidades }));

    fetch(config.apiHost + "documentosObtenidos")
      .then(res => res.json())
      .then(documentos => this.setState({ documentoObtenido: documentos }));

    fetch(config.apiHost + "estatusEstudio")
      .then(res => res.json())
      .then(estatus => this.setState({ estatusEstudio: estatus }));

    fetch(config.apiHost + "estadosciviles")
      .then(res => res.json())
      .then(estadosciviles =>
        this.setState({ estadosciviles: estadosciviles })
      );

    fetch(config.apiHost + "regimenmatrimonial")
      .then(res => res.json())
      .then(regimenmatrimonial =>
        this.setState({ regimen: regimenmatrimonial })
      );

    this.updateMunicipios(
      this.state.informacion_general.domicilio.entidad_federativa.cve_ent
    );

    this.updateLocalidades(
      this.state.informacion_general.domicilio.entidad_federativa.cve_ent,
      this.state.informacion_general.domicilio.municipio.cve_mun
    );

    fetch(config.apiHost + "tipovialidad")
      .then(res => res.json())
      .then(tipovialidad => this.setState({ tipovialidad: tipovialidad }));

    fetch(config.apiHost + "nivelGobierno")
      .then(res => res.json())
      .then(nivelGobierno => this.setState({ nivelGobierno: nivelGobierno }));

    fetch(config.apiHost + "poderEjecutivo")
      .then(res => res.json())
      .then(poderEjecutivo =>
        this.setState({ poderEjecutivo: poderEjecutivo })
      );

    fetch(config.apiHost + "sectorIndustria")
      .then(res => res.json())
      .then(sectorIndustria =>
        this.setState({ sectorIndustria: sectorIndustria })
      );

    fetch(config.apiHost + "catAmbitos")
      .then(res => res.json())
      .then(ambitos => this.setState({ ambitos: ambitos }));

    fetch(config.apiHost + "catRelacionDeclarante")
      .then(res => res.json())
      .then(relacionDeclarante =>
        this.setState({ relacionDeclarante: relacionDeclarante })
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
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Menu loggedIn={loggedIn} />
          </Grid>
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
          <Grid item xs={6} style={{ textAlign: "right", padding: "20px" }}>
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
          <Grid item xs={2} style={{ textAlign: "right", padding: "20px" }}>
            <br />

            <Button variant="contained" size="small" onClick={this.show}>
              SHOW
            </Button>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center", padding: "20px" }}>
            {this.state.show}
          </Grid>
          {this.state.show === 1 && (
            <Grid item xs={12}>
              <InformacionGeneral
                data={this.state}
                handleChange={this.setDataInformacionPersonal}
              />
            </Grid>
          )}
          {this.state.show === 2 && (
            <DatosCurriculares
              data={this.state}
              handleChange={this.setDataDatosCurriculares}
              addClick={this.addClickDatosCurriculares}
              removeClick={this.removeClickDatosCurriculares}
            />
          )}
          {this.state.show === 3 && (
            <EncargoActual
              data={this.state}
              handleChange={this.setDataEncargoActual}
            />
          )}

          {this.state.show === 4 && (
            <ExperienciaLaboral
              data={this.state}
              handleChange={this.setDataExperienciaLaboral}
              addClick={this.addClickExperienciaLaborar}
              removeClick={this.removeClickExperienciaLaborar}
            />
          )}

          {this.state.show === 5 && (
            <DependientesEconomicos
              data={this.state}
              handleChange={this.setDataDependientesEconomicos}
              addClick={this.addClickDependientesEconomicos}
              removeClick={this.removeClickDependientesEconomicos}
            />
          )}

          {this.state.show === 6 && (
            <EmpresasSociedadesAsociaciones
              data={this.state}
              handleChange={this.setDataEmpresasSociedadesAsociaciones}
              addClick={this.addClickEmpresasSociedadesAsociaciones}
              removeClick={this.removeClickEmpresasSociedadesAsociaciones}
            />
          )}

          {this.state.show === 7 && (
            <Membresias
              data={this.state}
              handleChange={this.setDataMembresias}
              addClick={this.addClickMembresias}
              removeClick={this.removeClickMembresias}
            />
          )}

          {this.state.show === 8 && (
            <ApoyosPublicos
              data={this.state}
              handleChange={this.setDataApoyosBeneficiosPublicos}
              addClick={this.addClickApoyosPublicos}
              removeClick={this.removeClickApoyosPublicos}
            />
          )}

          {this.state.show === 9 && (
            <RepresentacionActiva
              data={this.state}
              handleChange={this.setDataRepresentacionActiva}
              addClick={this.addClickRepresentacionActiva}
              removeClick={this.removeClickRepresentacionActiva}
            />
          )}

          {this.state.show === 10 && (
            <RepresentacionPasiva
              data={this.state}
              handleChange={this.setDataRepresentacionPasiva}
              addClick={this.addClickRepresentacionPasiva}
              removeClick={this.removeClickRepresentacionPasiva}
            />
          )}

          {this.state.show === 11 && (
            <SociosComerciales
              data={this.state}
              handleChange={this.setDataSociosComerciales}
              addClick={this.addClickSociosComerciales}
              removeClick={this.removeClickSociosComerciales}
            />
          )}

          {this.state.show === 12 && (
            <ClientesPrincipales
              data={this.state}
              handleChange={this.setDataClientesPrincipales}
              addClick={this.addClickClientesPrincipales}
              removeClick={this.removeClickClientesPrincipales}
            />
          )}

          {this.state.show === 13 && (
            <OtrasPartesRelacionadas
              data={this.state}
              handleChange={this.setDataOtrasPartesRelacionadas}
              addClick={this.addClickOtrasPartesRelacionadas}
              removeClick={this.removeClickOtrasPartesRelacionadas}
            />
          )}

          {this.state.show === 14 && (
            <BeneficiosGratuitos
              data={this.state}
              handleChange={this.setDataBeneficiosGratuitos}
              addClick={this.addClickBeneficiosGratuitos}
              removeClick={this.removeClickBeneficiosGratuitos}
            />
          )}

          {this.state.show === 15 && (
            <SueldosSalariosPublicos
              data={this.state}
              handleChange={this.setDataSueldosSalariosPublicos}
              addClick={this.addClickSueldosSalariosPublicos}
              removeClick={this.removeClickSueldosSalariosPublicos}
            />
          )}

          {this.state.show === 16 && (
            <SueldosSalariosOtrosEmpleos
              data={this.state}
              handleChange={this.setDataSueldosSalariosOtrosEmpleos}
              addClick={this.addClickSueldosSalariosOtrosEmpleos}
              removeClick={this.removeClickSueldosSalariosOtrosEmpleos}
            />
          )}

          {this.state.show === 17 && (
            <ActividadProfesional
              data={this.state}
              handleChange={this.setDataActividadProfesional}
              addClick={this.addClickActividadProfesional}
              removeClick={this.removeClickActividadProfesional}
            />
          )}

          {this.state.show === 18 && (
            <ActividadEmpresarial
              data={this.state}
              handleChange={this.setDataActividadEmpresarial}
              addClick={this.addClickActividadEmpresarial}
              removeClick={this.removeClickActividadEmpresarial}
            />
          )}

          {this.state.show === 19 && (
            <ActividadMenor
              data={this.state}
              handleChange={this.setDataActividadEconomicaMenor}
              addClick={this.addClickActividadMenor}
              removeClick={this.removeClickActividadMenor}
            />
          )}

          {this.state.show === 20 && (
            <Arrendamiento
              data={this.state}
              handleChange={this.setDataArrendamiento}
              addClick={this.addClickArrendamiento}
              removeClick={this.removeClickArrendamiento}
            />
          )}

          {this.state.show === 21 && (
            <Intereses
              data={this.state}
              handleChange={this.setDataIntereses}
              addClick={this.addClickIntereses}
              removeClick={this.removeClickIntereses}
            />
          )}

          {this.state.show === 22 && (
            <Premios
              data={this.state}
              handleChange={this.setDataPremios}
              addClick={this.addClickPremios}
              removeClick={this.removeClickPremios}
            />
          )}

          {this.state.show === 23 && (
            <EnajenacionBienes
              data={this.state}
              handleChange={this.setDataEnajenacionBienes}
              addClick={this.addClickEnajenacionBienes}
              removeClick={this.removeClickEnajenacionBienes}
            />
          )}

          {this.state.show === 24 && (
            <OtrosIngresos
              data={this.state}
              handleChange={this.setDataOtrosIngresos}
              addClick={this.addClickOtrosIngresos}
              removeClick={this.removeClickOtrosIngresos}
            />
          )}

          {this.state.show === 25 && (
            <BienesInmuebles
              data={this.state}
              handleChange={this.setDataBienesInmuebles}
              addClick={this.addClickBienesInmuebles}
              removeClick={this.removeClickBienesInmuebles}
            />
          )}

          {this.state.show === 26 && (
            <BienesMueblesRegistrables
              data={this.state}
              handleChange={this.setDataBienesMueblesRegistables}
              addClick={this.addClickBienesMueblesRegistrables}
              removeClick={this.removeClickBienesMueblesRegistrables}
            />
          )}

          {this.state.show === 27 && (
            <BienesMueblesNoRegistrables
              data={this.state}
              handleChange={this.setDataBienesMueblesNoRegistables}
              addClick={this.addClickBienesMueblesNoRegistrables}
              removeClick={this.removeClickBienesMueblesNoRegistrables}
            />
          )}

          {this.state.show === 28 && (
            <Inversiones
              data={this.state}
              handleChange={this.setDataInversionesCuentasValores}
              addClick={this.addClickInversiones}
              removeClick={this.removeClickInversiones}
            />
          )}

          {this.state.show === 29 && (
            <EfectivoMetales
              data={this.state}
              handleChange={this.setDataEfectivoMetales}
              addClick={this.addClickEfectivoMetales}
              removeClick={this.removeClickEfectivoMetales}
            />
          )}

          {this.state.show === 30 && (
            <Fideicomisos
              data={this.state}
              handleChange={this.setDataFideicomisos}
              addClick={this.addClickFideicomisos}
              removeClick={this.removeClickFideicomisos}
            />
          )}

          {this.state.show === 31 && (
            <BienesIntangibles
              data={this.state}
              handleChange={this.setDataBienesIntangibles}
              addClick={this.addClickBienesIntangibles}
              removeClick={this.removeClickBienesIntangibles}
            />
          )}

          {this.state.show === 32 && (
            <CuentasCobrar
              data={this.state}
              handleChange={this.setDataCuentasPorCobrar}
              addClick={this.addClickCuentasCobrar}
              removeClick={this.removeClickCuentasCobrar}
            />
          )}

          {this.state.show === 33 && (
            <PropietarioTercero
              data={this.state}
              handleChange={this.setDataUsoEspeciePropiedadTercero}
              addClick={this.addClickPropietarioTercero}
              removeClick={this.removeClickPropietarioTercero}
            />
          )}

          {this.state.show === 34 && (
            <Deudas
              data={this.state}
              handleChange={this.setDataDeudas}
              addClick={this.addClickDeudas}
              removeClick={this.removeClickDeudas}
            />
          )}

          {this.state.show === 35 && (
            <OtrasObligaciones
              data={this.state}
              handleChange={this.setDataOtrasObligaciones}
              addClick={this.addClickOtrasObligaciones}
              removeClick={this.removeClickOtrasObligaciones}
            />
          )}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Index);
