import React, { Component } from "react";
import axios from "axios";
import config from "../../config.json";

//Grid
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

import {
  data,
  datos_curriculares_grados_academicos,
  datos_experiencia_laboral,
  datos_dependientes_economicos
} from "./data";

import Menu from "../Menu";
import Formulario from "./Formulario";
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
import SalariosPublicos from "./SalariosPublicos";
import SalariosEmpleos from "./SalariosEmpleos";
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

console.log(process.env.PRUEBA);

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
  state = data;

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
    let info = this.state.entidades.filter(x => x.cve_ent === cve_ent);
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

  handleChange = name => event => {
    const valor = this.state.entidades.filter(
      x => x.cve_ent === event.target.value
    );

    this.setState({
      [name]: {
        nom_ent: valor[0].nom_ent,
        cve_ent: valor[0].cve_ent
      }
    });
  };

  handleChange = name => event => {
    const valor = this.state.municipios.filter(
      x => x.cve_mun === event.target.value
    );

    fetch(
      config.apiHost +
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

  handleChange = name => event => {
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

  handleChange = name => event => {
    // var ciudades = event.target.value;
    // var nacionalidad = [];
    // for (var index in ciudades) {
    //   var ciudad = ciudades[index];
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
    // console.log(event.target.value);
  };

  handleClickDatosCurriculares = () => event => {
    let datos = Object.assign(
      {},
      this.state.datos_curriculares_grados_academicos
    );
    this.state.datos_curriculares.grados_academicos.push(datos);
    this.setState(this.state);

    // limpieza del Formulario
    this.setState({
      datos_curriculares_grados_academicos: Object.assign(
        {},
        datos_curriculares_grados_academicos
      )
    });
  };

  handleClickEliminarDatosCurriculares = index => event => {
    this.state.datos_curriculares.grados_academicos.splice(index, 1);
    this.setState({ datos_curriculares: this.state.datos_curriculares }, () => {
      console.log(this.state.datos_curriculares);
    });
  };

  handleAddExperienciaLaborar = () => {
    let datos = Object.assign({}, this.state.datos_experiencia_laboral);
    this.state.experiencia_laboral.push(datos);
    this.setState(this.state);

    // limpieza del Formulario
    this.setState({
      datos_experiencia_laboral: Object.assign({}, datos_experiencia_laboral)
    });
  };

  handleRemoveExperienciaLaborar = index => event => {
    this.state.experiencia_laboral.splice(index, 1);
    this.setState(
      { experiencia_laboral: this.state.experiencia_laboral },
      () => {
        console.log(this.state.experiencia_laboral);
      }
    );
  };

  handleAddDependientesEconomicos = () => {
    let datos = Object.assign({}, this.state.datos_dependientes_economicos);
    this.state.dependientes_economicos.push(datos);
    this.setState(this.state);

    // limpieza del Formulario
    this.setState({
      datos_dependientes_economicos: Object.assign(
        {},
        datos_dependientes_economicos
      )
    });
  };

  handleRemoveDependientesEconomicos = index => event => {
    this.state.dependientes_economicos.splice(index, 1);
    this.setState(
      { dependientes_economicos: this.state.dependientes_economicos },
      () => {
        console.log(this.state.dependientes_economicos);
      }
    );
  };

  handleClickDependientesEconomicos = () => event => {
    this.state.datos_dependientes_economicos.push({
      nombres: "Carlos",
      primer_apellido: "Pérez",
      segundo_apellido: "López",
      tipo_relacion: {
        codigo: "CONY",
        valor: "Cónyuge"
      },
      nacionalidad: [
        {
          valor: "México",
          codigo: "MX"
        }
      ],
      curp: "BEML920313HMCLNS09",
      rfc: "GOAP780710RH7",
      fecha_nacimiento: "31/07/1980",
      numero_identificacion_nacional: "ABCD1234",
      habita_domicilio_declarante: true,
      domicilio: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      medio_contacto: "usuario@correo.com",
      ingresos_propios: true,
      ocupacion_profesion: "Administrador de empresas",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      proveedor_contratista_gobierno: true,
      tiene_intereses_mismo_sector_declarante: true,
      desarrolla_cabildeo_sector_declarante: true,
      beneficiario_programa_publico: [
        {
          nombre_programa: "Prospera",
          institucion_otorga_apoyo: "XE-IPN Canal 11",
          tipo_apoyo: "Servicio",
          valor_apoyo: 4000
        }
      ],
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickEmpresasSociedadesAsociaciones = () => event => {
    this.state.empresas_sociedades_asociaciones.push({
      id: 123,
      nombre_empresa_sociedad_asociacion: "DataIQ",
      pais_registro: {
        valor: "México",
        codigo: "MX"
      },
      fecha_constitucion: "31/07/1980",
      numero_registro: "ABC123",
      rfc: "GOAP780710RH7",
      domicilio: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      rol: "Dueño",
      actividad_economica: true,
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      porcentaje_participacion: 70
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickMembresias = () => event => {
    this.state.membresias.push({
      id: 123,
      tipo_institucion: {
        codigo: "ASC",
        valor: "Asociaciones civiles"
      },
      nombre_institucion: "Asociacion A.C",
      naturaleza_membresia: {
        codigo: "ASC",
        valor: "Asociaciones civiles"
      },
      domicilio: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      puesto_rol: "Titular",
      fecha_inicio: "2010-07-26",
      pagado: true,
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickApoyosPublicos = () => event => {
    this.state.apoyos_beneficios_publicos.push({
      id: 123,
      es_beneficiario: true,
      programa:
        "Programa de Estímulos Económicos a Deportistas del Distrito Federal",
      institucion_otorgante: "Instituto del Deporte del Distrito Federal ",
      nivel_orden_gobierno: {
        codigo: "EST",
        valor: "Estatal"
      },
      tipo_apoyo: "Servicio",
      valor_anual_apoyo: 7500,
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickRepresentacionActiva = () => event => {
    this.state.representacion_activa.push({
      id: 123,
      tipo_representacion: {
        codigo: "APOD",
        valor: "Apoderado"
      },
      nacionalidades: [
        {
          valor: "México",
          codigo: "MX"
        }
      ],
      nombre_parte_representada: "Cecilia Gómez Urrutia",
      curp_parte: "BEML920313HMCLNS09",
      rfc_parte: "GOAP780710RH7",
      fecha_nacimiento_parte: "2010-07-26",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      fecha_inicio: "2010-07-26",
      pagado: true,
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickRepresentacionPasiva = () => event => {
    this.state.representacion_pasiva.push({
      id: 123,
      tipo_representacion: {
        codigo: "APOD",
        valor: "Apoderado"
      },
      nombre: "Augusto Fernández Castro",
      fecha_inicio_representacion: "2010-07-26",
      nacionalidades: [
        {
          valor: "México",
          codigo: "MX"
        }
      ],
      curp: "BEML920313HMCLNS09",
      rfc: "GOAP780710RH7",
      fecha_nacimiento: "2010-07-26",
      tiene_intereses: true,
      ocupacion_profesion: "Contador",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickSociosComerciales = () => event => {
    this.state.socios_comerciales.push({
      id: 123,
      nombre_negocio: "Nombre negocio",
      numero_Registro: "HTC896DSFA",
      dueno_encargado: "Salvador Hernández Torres",
      nombre: "AMEX.S.A.",
      rfc: "GOAP780710RH7",
      domicilio: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      porcentaje_participacion: 70,
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickClientesPrincipales = () => event => {
    this.state.clientes_principales.push({
      id: 123,
      nombre_negocio: "Nombre negocio",
      numero_Registro: "HTC896DSFA",
      dueno_encargado: "Salvador Hernández Torres",
      nombre: "AMEX.S.A.",
      rfc: "GOAP780710RH7",
      domicilio: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      porcentaje_participacion: 70,
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickOtrasPartesRelacionadas = () => event => {
    this.state.otras_partes.push({
      id: 123,
      tipo_relacion: "Garantes de Préstamos Recibidos",
      nombre_denominacion_parte: "Sergio Rodríguez",
      fecha_inicio_relacion: "2010-07-26",
      nacionalidades: [
        {
          valor: "México",
          codigo: "MX"
        }
      ],
      curp: "BEML920313HMCLNS09",
      rfc: "GOAP780710RH7",
      fecha_nacimiento: "2010-07-26",
      ocupacion: "Administrador de empresas",
      tiene_interes: true,
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickBeneficiosGratuitos = () => event => {
    this.state.beneficios_gratuitos.push({
      id: 123,
      tipo_beneficio: "Tarjetas o monederos electrónicos",
      origen_beneficio: "Prestación laboral",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      valor_beneficio: 1256,
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickSalariosPublicos = () => event => {
    this.state.sueldos_salarios_publicos.push({
      id: 123,
      ente_publico: {
        valor: "Secretaría de Gobernación",
        codigo: "SEGOB"
      },
      rfc: "GOAP780710RH7",
      ingreso_bruto_anual: {
        valor: 10000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        },
        unidad_temporal: {
          codigo: "MESS",
          valor: "Meses"
        },
        duracion_frecuencia: 10,
        fecha_transaccion: "2010-07-26"
      },
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickSalariosEmpleos = () => event => {
    this.state.sueldos_salarios_otros_empleos.push({
      id: 123,
      nombre_denominacion_razon_social: "Max Power Inc.",
      rfc: "GOAP780710RH7",
      curp: "BEML920313HMCLNS09",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      tipo_actividad_servicio: {
        codigo: "SPU",
        valor: "Sector público"
      },
      descripcion_actividad_servicio: "Servicio profesional de TI",
      domicilio_persona_paga: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      ingreso_bruto_anual: {
        valor: 10000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        },
        unidad_temporal: {
          codigo: "MESS",
          valor: "Meses"
        },
        duracion_frecuencia: 10,
        fecha_transaccion: "2010-07-26"
      },
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickActividadProfesional = () => event => {
    this.state.actividad_profesional.push({
      id: 123,
      nombre_denominacion_razon_social: "Nombre",
      rfc: "GOAP780710RH7",
      curp: "BEML920313HMCLNS09",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      tipo_actividad_servicio: {
        codigo: "SPU",
        valor: "Sector público"
      },
      descripcion_actividad_servicio: "Descripción del servicio",
      domicilio_persona_paga: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      ingreso_bruto_anual: {
        valor: 10000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        },
        unidad_temporal: {
          codigo: "MESS",
          valor: "Meses"
        },
        duracion_frecuencia: 10,
        fecha_transaccion: "2010-07-26"
      },
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickActividadEmpresarial = () => {
    this.state.actividad_empresarial.push({
      id: 123,
      nombre_denominacion_razon_social: "Empresa S.A.",
      rfc: "GOAP780710RH7",
      curp: "BEML920313HMCLNS09",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      tipo_actividad_servicio: {
        codigo: "SPU",
        valor: "Sector público"
      },
      descripcion_actividad_servicio: "Descripción del servicio",
      domicilio_actividad_empresarial: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      ingreso_bruto_anual: {
        valor: 10000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        },
        unidad_temporal: {
          codigo: "MESS",
          valor: "Meses"
        },
        duracion_frecuencia: 10,
        fecha_transaccion: "2010-07-26"
      },
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickActividadMenor = () => event => {
    this.state.actividad_economica_menor.push({
      id: 123,
      nombre_denominacion_razon_social: "Nombre",
      rfc: "GOAP780710RH7",
      curp: "BEML920313HMCLNS09",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      tipo_actividad_servicio: {
        codigo: "SPU",
        valor: "Sector público"
      },
      descripcion_actividad_servicio: "Descripción del servicio",
      domicilio_actividad: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      ingreso_bruto_anual: {
        valor: 10000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        },
        unidad_temporal: {
          codigo: "MESS",
          valor: "Meses"
        },
        duracion_frecuencia: 10,
        fecha_transaccion: "2010-07-26"
      },
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickArrendamiento = () => event => {
    this.state.arrendamiento.push({
      id: 123,
      nombre_denominacion_razon_social: "ABC Inc.",
      rfc: "GOAP780710RH7",
      curp: "BEML920313HMCLNS09",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      tipo_actividad_servicio: {
        codigo: "SPU",
        valor: "Sector público"
      },
      descripcion_actividad_servicio: "Descripción del servicio",
      domicilio_actividad: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      ingreso_bruto_anual: {
        valor: 10000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        },
        unidad_temporal: {
          codigo: "MESS",
          valor: "Meses"
        },
        duracion_frecuencia: 10,
        fecha_transaccion: "2010-07-26"
      },
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickIntereses = () => event => {
    this.state.intereses.push({
      id: 123,
      nombre_denominacion_razon_social: "BANC S.A.",
      rfc: "GOAP780710RH7",
      curp: "BEML920313HMCLNS09",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      tipo_actividad_servicio: {
        codigo: "SPU",
        valor: "Sector público"
      },
      descripcion_actividad_servicio: "Descripción del servicio",
      domicilio: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      ingreso_bruto_anual: {
        valor: 10000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        },
        unidad_temporal: {
          codigo: "MESS",
          valor: "Meses"
        },
        duracion_frecuencia: 10,
        fecha_transaccion: "2010-07-26"
      },
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickPremios = () => event => {
    this.state.premios.push({
      id: 123,
      nombre_denominacion: "Loteria Nacional",
      rfc: "GOAP780710RH7",
      curp: "BEML920313HMCLNS09",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      tipo_actividad_servicio: {
        codigo: "SPU",
        valor: "Sector público"
      },
      descripcion_premio: "Descripción del servicio",
      domicilio: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      ingreso_bruto_anual: {
        valor: 10000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        },
        unidad_temporal: {
          codigo: "MESS",
          valor: "Meses"
        },
        duracion_frecuencia: 10,
        fecha_transaccion: "2010-07-26"
      },
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickEnajenacionBienes = () => event => {
    this.state.enajenacion_bienes.push({
      id: 123,
      nombre_denominacion: "Loteria Nacional",
      rfc: "GOAP780710RH7",
      curp: "BEML920313HMCLNS09",
      tipo_bien: "Inmueble",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      tipo_actividad_servicio: {
        codigo: "SPU",
        valor: "Sector público"
      },
      descripcion_bien: "Descripción del servicio",
      domicilio_bien_enajenado: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      ingreso_bruto_anual: {
        valor: 10000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        },
        unidad_temporal: {
          codigo: "MESS",
          valor: "Meses"
        },
        duracion_frecuencia: 10,
        fecha_transaccion: "2010-07-26"
      },
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickOtrosIngresos = () => event => {
    this.state.otros_ingresos.push({
      id: 123,
      nombre_denominacion: "Centro Educativo",
      rfc: "GOAP780710RH7",
      curp: "BEML920313HMCLNS09",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      tipo_actividad: {
        codigo: "SPU",
        valor: "Sector público"
      },
      descripcion_actividad: "Descripción del servicio",
      domicilio_actividad: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      ingreso_bruto_anual: {
        valor: 10000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        },
        unidad_temporal: {
          codigo: "MESS",
          valor: "Meses"
        },
        duracion_frecuencia: 10,
        fecha_transaccion: "2010-07-26"
      },
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickBienesInmuebles = () => event => {
    this.state.bienes_inmuebles.push({
      id: 123,
      tipo_operacion: {
        codigo: "INCP",
        valor: "Incorporación"
      },
      tipo_bien: {
        codigo: "VEH",
        valor: "Vehículo"
      },
      superficie_terreno: 300,
      superficie_construccion: 100,
      titular: {
        codigo: "DECL",
        valor: "Declarante"
      },
      porcentaje_propiedad: 70,
      nombre_copropietario: {
        nombres: "Carlos",
        primer_apellido: "Pérez",
        segundo_apellido: "string"
      },
      identificacion_bien: {
        numero_escritura_publica: 202020,
        numero_registro_publico: 404040,
        folio_real: "jsjs74747",
        fecha_contrato: "2010-07-26"
      },
      domicilio_bien: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      forma_adquisicion: {
        codigo: "CES",
        valor: "Cesión"
      },
      nombre_denominacion_quien_adquirio: "Monster Inc.",
      rfc_quien_adquirio: "GOAP780710RH7",
      curp_quien_adquirio: "BEML920313HMCLNS09",
      relacion_persona_adquirio: {
        codigo: "CONY",
        valor: "Cónyuge"
      },
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      fecha_adquisicion: "2010-07-26",
      precio_adquisicion: {
        valor: 4000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        }
      },
      valor_catastral: 800,
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickBienesMueblesRegistrables = () => event => {
    this.state.bienes_muebles_registrables.push({
      id: 123,
      tipo_operacion: {
        codigo: "INCP",
        valor: "Incorporación"
      },
      tipo_bien_mueble: {
        codigo: "VEH",
        valor: "Vehículo"
      },
      marca: "NISSAN",
      submarca: "RS-122234",
      modelo: 2018,
      numero_serie: "6545243-4334",
      lugar_registro: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad: {
          nom_ent: "México",
          cve_ent: "15"
        }
      },
      titular_bien: {
        codigo: "DECL",
        valor: "Declarante"
      },
      porcentaje_propiedad: 70,
      nombres_copropietarios: ["Monstr Inc."],
      numero_registro_vehicular: 455000,
      forma_adquisicion: {
        codigo: "CES",
        valor: "Cesión"
      },
      nombre_denominacion_adquirio: "Monstr Inc.",
      rfc_quien_adquirio: "GOAP780710RH7",
      relacion_persona_quien_adquirio: {
        codigo: "CONY",
        valor: "Cónyuge"
      },
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      fecha_adquisicion: "2010-07-26",
      precio_adquisicion: {
        valor: 4000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        }
      },
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickBienesMueblesNoRegistrables = () => event => {
    this.state.bienes_muebles_no_registrables.push({
      id: 123,
      tipo_operacion: {
        codigo: "INCP",
        valor: "Incorporación"
      },
      tipo_bien: {
        codigo: "VEH",
        valor: "Vehículo"
      },
      descripcion: "Con descripción",
      titular_bien: {
        codigo: "DECL",
        valor: "Declarante"
      },
      porcentaje_propiedad: 70,
      nombres_copropietarios: ["Monstr Inc."],
      forma_adquisicion: {
        codigo: "CES",
        valor: "Cesión"
      },
      nombre_denominacion_adquirio: "Tesl Mtr Inc.",
      relacion_quien_adquirio: {
        codigo: "CONY",
        valor: "Cónyuge"
      },
      fecha_adquisicion: "2010-07-26",
      precio_adquisicion: {
        valor: 4000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        }
      },
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickInversiones = () => event => {
    this.state.inversiones_cuentas_valores.push({
      id: 123,
      tipo_operacion: {
        codigo: "INCP",
        valor: "Incorporación"
      },
      tipo_inversion: {
        codigo: "VALS",
        valor: "Valores"
      },
      tipo_especifico_inversion: {
        codigo: "VALRS",
        valor: "Valores"
      },
      numero_cuenta: "GFHRTY788778",
      nacional_extranjero: {
        valor: "México",
        codigo: "MX"
      },
      nombre_institucion: "Bank Inkc",
      rfc_institucion: "GOAP780710RH7",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      domicilio_institucion: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      forma_adquisicion: {
        codigo: "CES",
        valor: "Cesión"
      },
      fecha_inicio: "2010-07-26",
      monto_original: 80000,
      tipo_moneda: {
        codigo: "MXN",
        moneda: "Peso mexicano"
      },
      tasa_interes: 10,
      saldo_anual: 5000,
      plazo: 6,
      unidad_medida_plazo: {
        codigo: "MESS",
        valor: "Meses"
      },
      titular_bien: {
        codigo: "DECL",
        valor: "Declarante"
      },
      porcentaje_inversion: 70,
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickEfectivoMetales = () => event => {
    this.state.efectivo_metales.push({
      id: 123,
      tipo_operacion: {
        codigo: "INCP",
        valor: "Incorporación"
      },
      tipo_moneda: {
        codigo: "MXN",
        moneda: "Peso mexicano"
      },
      monto: 78555,
      tipo_metal: {
        codigo: "ORO",
        valor: "Oro"
      },
      unidades: 100,
      forma_adquisicion: {
        codigo: "CES",
        valor: "Cesión"
      },
      observaciones_comentarios: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickFideicomisos = () => event => {
    this.state.fideicomisos.push({
      id: 123,
      tipo_operacion: {
        codigo: "INCP",
        valor: "Incorporación"
      },
      identificador_fideicomiso: "93232",
      tipo_fideicomiso: {
        codigo: "GARNT",
        valor: "Garantía"
      },
      objetivo: "Objetivo del fideicomiso",
      numero_registro: "788544abc",
      fecha_creacion: "2010-07-26",
      vigencia: "2010-07-26",
      residencia: {
        valor: "México",
        codigo: "MX"
      },
      valor: 78555555,
      moneda: {
        codigo: "MXN",
        moneda: "Peso mexicano"
      },
      porcentaje_propiedad_derechos_fiduciarios: 70,
      ingreso_monetario_obtenido: 56666,
      institucion_fiduciaria: "Banco de México",
      fideicomitente: {
        nombre: "Banco Robmen1",
        rfc: "GOAP780710RH7",
        curp: "BEML920313HMCLNS09",
        domicilio: {
          pais: {
            valor: "México",
            codigo: "MX"
          },
          entidad_federativa: {
            nom_ent: "México",
            cve_ent: "15"
          },
          municipio: {
            nom_mun: "Ecatepec de Morelos",
            cve_mun: "033"
          },
          cp: "55018",
          localidad: {
            nom_loc: "Ecatepec de Morelos",
            cve_loc: "0001"
          },
          vialidad: {
            tipo_vial: "CALLE",
            nom_vial: "El Rosal"
          },
          numExt: "24",
          numInt: "48"
        },
        fecha_constitucion: "2010-07-26"
      },
      fideicomisario: {
        nombre: "Banco Robmen1",
        rfc: "GOAP780710RH7",
        curp: "BEML920313HMCLNS09",
        domicilio: {
          pais: {
            valor: "México",
            codigo: "MX"
          },
          entidad_federativa: {
            nom_ent: "México",
            cve_ent: "15"
          },
          municipio: {
            nom_mun: "Ecatepec de Morelos",
            cve_mun: "033"
          },
          cp: "55018",
          localidad: {
            nom_loc: "Ecatepec de Morelos",
            cve_loc: "0001"
          },
          vialidad: {
            tipo_vial: "CALLE",
            nom_vial: "El Rosal"
          },
          numExt: "24",
          numInt: "48"
        },
        fecha_constitucion: "2010-07-26"
      },
      fiduciario: {
        nombre: "Banco Robmen1",
        rfc: "GOAP780710RH7",
        curp: "BEML920313HMCLNS09",
        domicilio: {
          pais: {
            valor: "México",
            codigo: "MX"
          },
          entidad_federativa: {
            nom_ent: "México",
            cve_ent: "15"
          },
          municipio: {
            nom_mun: "Ecatepec de Morelos",
            cve_mun: "033"
          },
          cp: "55018",
          localidad: {
            nom_loc: "Ecatepec de Morelos",
            cve_loc: "0001"
          },
          vialidad: {
            tipo_vial: "CALLE",
            nom_vial: "El Rosal"
          },
          numExt: "24",
          numInt: "48"
        },
        fecha_constitucion: "2010-07-26"
      },
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickBienesIntangibles = () => event => {
    this.state.bienes_intangibles.push({
      id: 123,
      tipo_operacion: {
        codigo: "INCP",
        valor: "Incorporación"
      },
      propietario_registrado: "Sergio Perez",
      descripcion: "Aquí va una descripción",
      ente_publico_encargado: {
        nombres: "Carlos",
        primer_apellido: "Pérez",
        segundo_apellido: "López"
      },
      numero_registro: 754444,
      fecha_registro: "2010-07-26",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      precio_adquisicion: {
        valor: 4000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        }
      },
      forma_adquisicion: {
        codigo: "CES",
        valor: "Cesión"
      },
      fecha_vencimiento: "2010-07-26",
      porcentaje_copropiedad: 70,
      precio_total_copropiedad: {
        valor: 4000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        }
      },
      nombre_copropietario: "Vien Inc,",
      porcentaje_propiedad_copropietario: 70,
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickCuentasCobrar = () => event => {
    this.state.cuentas_por_cobrar.push({
      id: 123,
      nombre_prestatario: "Max Power Tier",
      numero_registro: "488755avvv",
      domicilio_prestatarios: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      fecha_prestamo: "2010-07-26",
      monto_original_prestamo: 488844,
      tasa_interes: 10.01,
      saldo_pendiente: 4555,
      fecha_vencimiento: "2010-07-26",
      porcentaje_copropiedad: 70,
      nombre_copropietario: "Max Power Bansky",
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickPropietarioTercero = () => event => {
    this.state.uso_especie_propiedad_tercero.push({
      id: 123,
      tipo_bien: {
        codigo: "VEH",
        valor: "Vehículo"
      },
      valor_mercado: {
        valor: 4000,
        moneda: {
          codigo: "MXN",
          moneda: "Peso mexicano"
        }
      },
      nombre_tercero_propietario: "Bansky Von Trier",
      rfc_tercero_propietario: "GOAP780710RH7",
      curp_tercero_propietario: "BEML920313HMCLNS09",
      relacion_persona: {
        codigo: "CONY",
        valor: "Cónyuge"
      },
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      fecha_inicio: "2010-07-26",
      domicilio_persona: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickDeudas = () => event => {
    this.state.deudas.push({
      id: 123,
      tipo_operacion: {
        codigo: "INCP",
        valor: "Incorporación"
      },
      tipo_acreedor: {
        codigo: "INSTF",
        valor: "Institución Financiera"
      },
      tipo_adeudo: {
        codigo: "CVH",
        valor: "Compra de vehículo"
      },
      identificador_deuda: "CONT12354",
      nacional_extranjero: {
        valor: "México",
        codigo: "MX"
      },
      nombre_acreedor: "PNBKSRIBAS S.A. DE C.V",
      rfc_acreedor: "GOAP780710RH7",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      domicilio_acreedor: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      fecha_adeudo: "2010-07-26",
      monto_original: 277900,
      tipo_moneda: {
        codigo: "MXN",
        moneda: "Peso mexicano"
      },
      tasa_interes: 12,
      saldo_pendiente: 28000,
      montos_abonados: [28000],
      plazo_adeudo: 24,
      unidad_medida_adeudo: {
        codigo: "MESS",
        valor: "Meses"
      },
      titularidad_deuda: {
        codigo: "DECL",
        valor: "Declarante"
      },
      porcentaje_adeudo_titular: 70,
      garantia: true,
      nombre_garante: "Bansky Von Tier",
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickOtrasObligaciones = () => event => {
    this.state.otras_obligaciones.push({
      id: 123,
      tipo_operacion: {
        codigo: "INCP",
        valor: "Incorporación"
      },
      tipo_acreedor: {
        codigo: "INSTF",
        valor: "Institución Financiera"
      },
      tipo_obligacion: "Ejemplo",
      identificador_obligacion: "FONAET8945",
      nacional_extranjero: {
        valor: "México",
        codigo: "MX"
      },
      nombre_acreedor: "Bansky Hola Adios",
      rfc_acreedor: "GOAP780710RH7",
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      domicilio_acreedor: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad_federativa: {
          nom_ent: "México",
          cve_ent: "15"
        },
        municipio: {
          nom_mun: "Ecatepec de Morelos",
          cve_mun: "033"
        },
        cp: "55018",
        localidad: {
          nom_loc: "Ecatepec de Morelos",
          cve_loc: "0001"
        },
        vialidad: {
          tipo_vial: "CALLE",
          nom_vial: "El Rosal"
        },
        numExt: "24",
        numInt: "48"
      },
      fecha_obligacion: "2010-07-26",
      monto_original: 300000,
      tipo_moneda: {
        codigo: "MXN",
        moneda: "Peso mexicano"
      },
      tasa_interes: 12,
      saldo_pendiente: 297000,
      montos_abonados: [28000],
      plazo_obligacion: 360,
      unidad_medida_plazo: {
        codigo: "MESS",
        valor: "Meses"
      },
      titularidad_obligacion: {
        codigo: "DECL",
        valor: "Declarante"
      },
      porcentaje_obligacion_titular: 70,
      garantia: true,
      observaciones: "Esto es una observación"
    });
    this.setState(this.state);
    // console.log("hi");
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

    console.log(this.state.dom_vialidad);
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
      case "datos_curriculares_grados_academicos.grado_obtenido":
        data.datos_curriculares_grados_academicos.grado_obtenido = valor;
        break;
      case "datos_curriculares_grados_academicos.institucion_educativa":
        data.datos_curriculares_grados_academicos.institucion_educativa = valor;
        break;
      case "datos_curriculares_grados_academicos.lugar_institucion_educativa.pais":
        data.datos_curriculares_grados_academicos.lugar_institucion_educativa.pais = this.getCiudad(
          valor
        );
        break;
      case "datos_curriculares_grados_academicos.lugar_institucion_educativa.entidad":
        data.datos_curriculares_grados_academicos.lugar_institucion_educativa.entidad = this.getEntidadFederativa(
          valor
        );
        break;
      case "datos_curriculares_grados_academicos.carrera":
        data.datos_curriculares_grados_academicos.carrera = valor;
        break;
      case "datos_curriculares_grados_academicos.estatus":
        data.datos_curriculares_grados_academicos.estatus = this.getEstatusEstudio(
          valor
        );
        break;
      case "datos_curriculares_grados_academicos.ano_conclusion":
        data.datos_curriculares_grados_academicos.ano_conclusion = valor;
        break;
      case "datos_curriculares_grados_academicos.documento_obtenido":
        data.datos_curriculares_grados_academicos.documento_obtenido = this.getDocumuentoObtenido(
          valor
        );
        break;
      case "datos_curriculares_grados_academicos.cedula_profesional":
        data.datos_curriculares_grados_academicos.cedula_profesional = valor;
        break;
      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.datos_curriculares_grados_academicos);
      }
    });
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
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.informacion_general);
        // console.log(this.state.informacion_general_nacionalidades);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataEncargoActual = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "datos_encargo_actual.ente_publico":
        data.datos_encargo_actual.ente_publico = valor;
        break;
      case "datos_encargo_actual.empleo_cargo_comision":
        data.datos_encargo_actual.empleo_cargo_comision = valor;
        break;
      case "datos_encargo_actual.nivel_gobierno":
        data.datos_encargo_actual.nivel_gobierno = this.getNivelGobierno(valor);
        break;
      case "datos_encargo_actual.poder_juridico":
        data.datos_encargo_actual.poder_juridico = this.getPoderEjecutivo(
          valor
        );
        break;
      case "datos_encargo_actual.contratado_honorarios":
        data.datos_encargo_actual.contratado_honorarios = !data
          .datos_encargo_actual.contratado_honorarios;
        break;
      case "datos_encargo_actual.nivel_encargo":
        data.datos_encargo_actual.nivel_encargo = valor;
        break;
      case "datos_encargo_actual.area_adscripcion":
        data.datos_encargo_actual.area_adscripcion = valor;
        break;
      case "datos_encargo_actual.fecha_posesion":
        data.datos_encargo_actual.fecha_posesion = valor;
        break;
      case "datos_encargo_actual.telefono_laboral.numero":
        data.datos_encargo_actual.telefono_laboral.numero = valor;
        break;
      case "datos_encargo_actual.telefono_laboral.extension":
        data.datos_encargo_actual.telefono_laboral.extension = valor;
        break;
      case "datos_encargo_actual.sector_industria":
        data.datos_encargo_actual.sector_industria = this.getSectorIndustria(
          valor
        );
        break;
      case "datos_encargo_actual.funciones_principales.codigo":
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
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.datos_encargo_actual);
        // console.log(this.state.datos_encargo_actual_nacionalidades);
        // console.log(this.state.datos_encargo_actual.direccion_encargo);
      }
    });
  };

  setDataExperienciaLaboral = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "datos_experiencia_laboral.ambito":
        data.datos_experiencia_laboral.ambito = this.getAmbito(valor);
        break;
      case "datos_experiencia_laboral.nivel_gobierno":
        data.datos_experiencia_laboral.nivel_gobierno = this.getNivelGobierno(
          valor
        );
        break;
      case "datos_experiencia_laboral.poder_ente":
        data.datos_experiencia_laboral.poder_ente = this.getPoderEjecutivo(
          valor
        );
        break;
      case "datos_experiencia_laboral.nombre_institucion":
        data.datos_experiencia_laboral.nombre_institucion = valor;
        break;
      case "datos_experiencia_laboral.unidad_administrativa":
        data.datos_experiencia_laboral.unidad_administrativa = valor;
        break;
      case "datos_experiencia_laboral.sector_industria":
        data.datos_experiencia_laboral.sector_industria = this.getSectorIndustria(
          valor
        );
        break;
      case "datos_experiencia_laboral.jerarquia_rango":
        data.datos_experiencia_laboral.jerarquia_rango = valor;
        break;

      case "datos_experiencia_laboral.cargo_puesto":
        data.datos_experiencia_laboral.cargo_puesto = valor;
        break;
      case "datos_experiencia_laboral.fecha_ingreso":
        data.datos_experiencia_laboral.fecha_ingreso = valor;
        break;
      case "datos_experiencia_laboral.fecha_salida":
        data.datos_experiencia_laboral.fecha_salida = valor;
        break;
      case "datos_experiencia_laboral.funciones_principales.codigo":
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
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(valor);
        console.log(this.state.datos_experiencia_laboral);

        // console.log(this.state.datos_experiencia_laboral_nacionalidades);
        // console.log(this.state.datos_experiencia_laboral.direccion_encargo);
      }
    });
  };

  setDataDependientesEconomicos = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "datos_dependientes_economicos.tipo_relacion":
        data.datos_dependientes_economicos.tipo_relacion = this.getTipoRelacion(
          valor
        );
        break;
      case "datos_dependientes_economicos.nombre_personal.nombres":
        data.datos_dependientes_economicos.nombre_personal.nombres = valor;
        break;
      case "datos_dependientes_economicos.nombre_personal.primer_apellido":
        data.datos_dependientes_economicos.nombre_personal.primer_apellido = valor;
        break;
      case "datos_dependientes_economicos.nombre_personal.segundo_apellido":
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
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.datos_dependientes_economicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataEmpresasSociedadesAsociaciones = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "actividad_economica":
        data.empresas_sociedades_asociaciones.actividad_economica = valor;
        break;
      case "domicilio":
        data.empresas_sociedades_asociaciones.domicilio = valor;
        break;
      case "domicilio.cp":
        data.empresas_sociedades_asociaciones.domicilio.cp = valor;
        break;
      case "domicilio.entidad_federativa":
        data.empresas_sociedades_asociaciones.domicilio.entidad_federativa = valor;
        break;
      case "domicilio.entidad_federativa.cve_ent":
        data.empresas_sociedades_asociaciones.domicilio.entidad_federativa.cve_ent = valor;
        break;
      case "domicilio.entidad_federativa.nom_ent":
        data.empresas_sociedades_asociaciones.domicilio.entidad_federativa.nom_ent = valor;
        break;
      case "domicilio.localidad":
        data.empresas_sociedades_asociaciones.domicilio.localidad = valor;
        break;
      case "domicilio.localidad.cve_loc":
        data.empresas_sociedades_asociaciones.domicilio.localidad.cve_loc = valor;
        break;
      case "domicilio.localidad.nom_loc":
        data.empresas_sociedades_asociaciones.domicilio.localidad.nom_loc = valor;
        break;
      case "domicilio.municipio":
        data.empresas_sociedades_asociaciones.domicilio.municipio = valor;
        break;
      case "domicilio.municipio.cve_mun":
        data.empresas_sociedades_asociaciones.domicilio.municipio.cve_mun = valor;
        break;
      case "domicilio.municipio.nom_mun":
        data.empresas_sociedades_asociaciones.domicilio.municipio.nom_mun = valor;
        break;
      case "domicilio.numExt":
        data.empresas_sociedades_asociaciones.domicilio.numExt = valor;
        break;
      case "domicilio.numInt":
        data.empresas_sociedades_asociaciones.domicilio.numInt = valor;
        break;
      case "domicilio.pais":
        data.empresas_sociedades_asociaciones.domicilio.pais = valor;
        break;
      case "domicilio.pais.codigo":
        data.empresas_sociedades_asociaciones.domicilio.pais.codigo = valor;
        break;
      case "domicilio.pais.valor":
        data.empresas_sociedades_asociaciones.domicilio.pais.valor = valor;
        break;
      case "domicilio.vialidad":
        data.empresas_sociedades_asociaciones.domicilio.vialidad = valor;
        break;
      case "domicilio.vialidad.nom_vial":
        data.empresas_sociedades_asociaciones.domicilio.vialidad.nom_vial = valor;
        break;
      case "domicilio.vialidad.tipo_vial":
        data.empresas_sociedades_asociaciones.domicilio.vialidad.tipo_vial = valor;
        break;
      case "fecha_constitucion":
        data.empresas_sociedades_asociaciones.fecha_constitucion = valor;
        break;
      case "id":
        data.empresas_sociedades_asociaciones.id = valor;
        break;
      case "nombre_empresa_sociedad_asociacion":
        data.empresas_sociedades_asociaciones.nombre_empresa_sociedad_asociacion = valor;
        break;
      case "numero_registro":
        data.empresas_sociedades_asociaciones.numero_registro = valor;
        break;
      case "pais_registro":
        data.empresas_sociedades_asociaciones.pais_registro = valor;
        break;
      case "pais_registro.codigo":
        data.empresas_sociedades_asociaciones.pais_registro.codigo = valor;
        break;
      case "pais_registro.valor":
        data.empresas_sociedades_asociaciones.pais_registro.valor = valor;
        break;
      case "porcentaje_participacion":
        data.empresas_sociedades_asociaciones.porcentaje_participacion = valor;
        break;
      case "rfc":
        data.empresas_sociedades_asociaciones.rfc = valor;
        break;
      case "rol":
        data.empresas_sociedades_asociaciones.rol = valor;
        break;
      case "sector_industria":
        data.empresas_sociedades_asociaciones.sector_industria = valor;
        break;
      case "sector_industria.codigo":
        data.empresas_sociedades_asociaciones.sector_industria.codigo = valor;
        break;
      case "sector_industria.valor":
        data.empresas_sociedades_asociaciones.sector_industria.valor = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.empresas_sociedades_asociaciones);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataMembresias = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "domicilio":
        data.membresias.domicilio = valor;
        break;
      case "domicilio.cp":
        data.membresias.domicilio.cp = valor;
        break;
      case "domicilio.entidad_federativa":
        data.membresias.domicilio.entidad_federativa = valor;
        break;
      case "domicilio.entidad_federativa.cve_ent":
        data.membresias.domicilio.entidad_federativa.cve_ent = valor;
        break;
      case "domicilio.entidad_federativa.nom_ent":
        data.membresias.domicilio.entidad_federativa.nom_ent = valor;
        break;
      case "domicilio.localidad":
        data.membresias.domicilio.localidad = valor;
        break;
      case "domicilio.localidad.cve_loc":
        data.membresias.domicilio.localidad.cve_loc = valor;
        break;
      case "domicilio.localidad.nom_loc":
        data.membresias.domicilio.localidad.nom_loc = valor;
        break;
      case "domicilio.municipio":
        data.membresias.domicilio.municipio = valor;
        break;
      case "domicilio.municipio.cve_mun":
        data.membresias.domicilio.municipio.cve_mun = valor;
        break;
      case "domicilio.municipio.nom_mun":
        data.membresias.domicilio.municipio.nom_mun = valor;
        break;
      case "domicilio.numExt":
        data.membresias.domicilio.numExt = valor;
        break;
      case "domicilio.numInt":
        data.membresias.domicilio.numInt = valor;
        break;
      case "domicilio.pais":
        data.membresias.domicilio.pais = valor;
        break;
      case "domicilio.pais.codigo":
        data.membresias.domicilio.pais.codigo = valor;
        break;
      case "domicilio.pais.valor":
        data.membresias.domicilio.pais.valor = valor;
        break;
      case "domicilio.vialidad":
        data.membresias.domicilio.vialidad = valor;
        break;
      case "domicilio.vialidad.nom_vial":
        data.membresias.domicilio.vialidad.nom_vial = valor;
        break;
      case "domicilio.vialidad.tipo_vial":
        data.membresias.domicilio.vialidad.tipo_vial = valor;
        break;
      case "fecha_inicio":
        data.membresias.fecha_inicio = valor;
        break;
      case "id":
        data.membresias.id = valor;
        break;
      case "naturaleza_membresia":
        data.membresias.naturaleza_membresia = valor;
        break;
      case "nombre_institucion":
        data.membresias.nombre_institucion = valor;
        break;
      case "observaciones":
        data.membresias.observaciones = valor;
        break;
      case "pagado":
        data.membresias.pagado = valor;
        break;
      case "puesto_rol":
        data.membresias.puesto_rol = valor;
        break;
      case "sector_industria":
        data.membresias.sector_industria = valor;
        break;
      case "sector_industria.codigo":
        data.membresias.sector_industria.codigo = valor;
        break;
      case "sector_industria.valor":
        data.membresias.sector_industria.valor = valor;
        break;
      case "tipo_institucion":
        data.membresias.tipo_institucion = valor;
        break;
      case "tipo_institucion.codigo":
        data.membresias.tipo_institucion.codigo = valor;
        break;
      case "tipo_institucion.valor":
        data.membresias.tipo_institucion.valor = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.membresias);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataApoyosBeneficiosPublicos = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "es_beneficiario":
        data.apoyos_beneficios_publicos.es_beneficiario = valor;
        break;
      case "id":
        data.apoyos_beneficios_publicos.id = valor;
        break;
      case "institucion_otorgante":
        data.apoyos_beneficios_publicos.institucion_otorgante = valor;
        break;
      case "nivel_orden_gobierno":
        data.apoyos_beneficios_publicos.nivel_orden_gobierno = valor;
        break;
      case "nivel_orden_gobierno.codigo":
        data.apoyos_beneficios_publicos.nivel_orden_gobierno.codigo = valor;
        break;
      case "nivel_orden_gobierno.valor":
        data.apoyos_beneficios_publicos.nivel_orden_gobierno.valor = valor;
        break;
      case "observaciones":
        data.apoyos_beneficios_publicos.observaciones = valor;
        break;
      case "programa":
        data.apoyos_beneficios_publicos.programa = valor;
        break;
      case "tipo_apoyo":
        data.apoyos_beneficios_publicos.tipo_apoyo = valor;
        break;
      case "tipo_apoyo.codigo":
        data.apoyos_beneficios_publicos.tipo_apoyo.codigo = valor;
        break;
      case "tipo_apoyo.valor":
        data.apoyos_beneficios_publicos.tipo_apoyo.valor = valor;
        break;
      case "valor_anual_apoyo":
        data.apoyos_beneficios_publicos.valor_anual_apoyo = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.apoyos_beneficios_publicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataRepresentacionActiva = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp_parte":
        data.representacion_activa.curp_parte = valor;
        break;
      case "fecha_inicio":
        data.representacion_activa.fecha_inicio = valor;
        break;
      case "fecha_nacimiento_parte":
        data.representacion_activa.fecha_nacimiento_parte = valor;
        break;
      case "id":
        data.representacion_activa.id = valor;
        break;
      case "nombre_parte_representada":
        data.representacion_activa.nombre_parte_representada = valor;
        break;
      case "observaciones":
        data.representacion_activa.observaciones = valor;
        break;
      case "ocupacion_profesion_parte":
        data.representacion_activa.ocupacion_profesion_parte = valor;
        break;
      case "pagado":
        data.representacion_activa.pagado = valor;
        break;
      case "rfc_parte":
        data.representacion_activa.rfc_parte = valor;
        break;
      case "sector_industria":
        data.representacion_activa.sector_industria = valor;
        break;
      case "sector_industria.codigo":
        data.representacion_activa.sector_industria.codigo = valor;
        break;
      case "sector_industria.valor":
        data.representacion_activa.sector_industria.valor = valor;
        break;
      case "tipo_representacion":
        data.representacion_activa.tipo_representacion = valor;
        break;
      case "tipo_representacion.codigo":
        data.representacion_activa.tipo_representacion.codigo = valor;
        break;
      case "tipo_representacion.valor":
        data.representacion_activa.tipo_representacion.valor = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.apoyos_beneficios_publicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataRepresentacionPasiva = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp_representante":
        data.representacion_pasiva.curp_representante = valor;
        break;
      case "fecha_inicio_representacion":
        data.representacion_pasiva.fecha_inicio_representacion = valor;
        break;
      case "fecha_nacimiento_representante":
        data.representacion_pasiva.fecha_nacimiento_representante = valor;
        break;
      case "id":
        data.representacion_pasiva.id = valor;
        break;
      case "nacionalidades_representante":
        data.representacion_pasiva.nacionalidades_representante = valor;
        break;
      case "nacionalidades_representante.codigo":
        data.representacion_pasiva.nacionalidades_representante.codigo = valor;
        break;
      case "nacionalidades_representante.valor":
        data.representacion_pasiva.nacionalidades_representante.valor = valor;
        break;
      case "nombre_representante":
        data.representacion_pasiva.nombre_representante = valor;
        break;
      case "observaciones":
        data.representacion_pasiva.observaciones = valor;
        break;
      case "ocupacion_profesion":
        data.representacion_pasiva.ocupacion_profesion = valor;
        break;
      case "rfc_representante":
        data.representacion_pasiva.rfc_representante = valor;
        break;
      case "sector_industria":
        data.representacion_pasiva.sector_industria = valor;
        break;
      case "sector_industria.codigo":
        data.representacion_pasiva.sector_industria.codigo = valor;
        break;
      case "sector_industria.valor":
        data.representacion_pasiva.sector_industria.valor = valor;
        break;
      case "tiene_intereses":
        data.representacion_pasiva.tiene_intereses = valor;
        break;
      case "tipo_representacion":
        data.representacion_pasiva.tipo_representacion = valor;
        break;
      case "tipo_representacion.codigo":
        data.representacion_pasiva.tipo_representacion.codigo = valor;
        break;
      case "tipo_representacion.valor":
        data.representacion_pasiva.tipo_representacion.valor = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.apoyos_beneficios_publicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataSociosComerciales = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "antiguedad_vinculo":
        data.socios_comerciales.antiguedad_vinculo = valor;
        break;
      case "curp_socio":
        data.socios_comerciales.curp_socio = valor;
        break;
      case "fecha_nacimiento_socio":
        data.socios_comerciales.fecha_nacimiento_socio = valor;
        break;
      case "id":
        data.socios_comerciales.id = valor;
        break;
      case "lugar_nacimiento_socio":
        data.socios_comerciales.lugar_nacimiento_socio = valor;
        break;
      case "lugar_nacimiento_socio.entidad":
        data.socios_comerciales.lugar_nacimiento_socio.entidad = valor;
        break;
      case "lugar_nacimiento_socio.entidad.cve_ent":
        data.socios_comerciales.lugar_nacimiento_socio.entidad.cve_ent = valor;
        break;
      case "lugar_nacimiento_socio.entidad.nom_ent":
        data.socios_comerciales.lugar_nacimiento_socio.entidad.nom_ent = valor;
        break;
      case "lugar_nacimiento_socio.pais":
        data.socios_comerciales.lugar_nacimiento_socio.pais = valor;
        break;
      case "lugar_nacimiento_socio.pais.codigo":
        data.socios_comerciales.lugar_nacimiento_socio.pais.codigo = valor;
        break;
      case "lugar_nacimiento_socio.pais.valor":
        data.socios_comerciales.lugar_nacimiento_socio.pais.valor = valor;
        break;
      case "nombre_actividad":
        data.socios_comerciales.nombre_actividad = valor;
        break;
      case "nombre_socio":
        data.socios_comerciales.nombre_socio = valor;
        break;
      case "observaciones":
        data.socios_comerciales.observaciones = valor;
        break;
      case "porcentaje_participacion":
        data.socios_comerciales.porcentaje_participacion = valor;
        break;
      case "rfc_entidad":
        data.socios_comerciales.rfc_entidad = valor;
        break;
      case "rfc_socio":
        data.socios_comerciales.rfc_socio = valor;
        break;
      case "sector_industria":
        data.socios_comerciales.sector_industria = valor;
        break;
      case "sector_industria.codigo":
        data.socios_comerciales.sector_industria.codigo = valor;
        break;
      case "sector_industria.valor":
        data.socios_comerciales.sector_industria.valor = valor;
        break;
      case "tipo_vinculo":
        data.socios_comerciales.tipo_vinculo = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.apoyos_beneficios_publicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataClientesPrincipales = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "domicilio_cliente":
        data.clientes_principales.domicilio_cliente = valor;
        break;
      case "domicilio_cliente.cp":
        data.clientes_principales.domicilio_cliente.cp = valor;
        break;
      case "domicilio_cliente.entidad_federativa":
        data.clientes_principales.domicilio_cliente.entidad_federativa = valor;
        break;
      case "domicilio_cliente.entidad_federativa.cve_ent":
        data.clientes_principales.domicilio_cliente.entidad_federativa.cve_ent = valor;
        break;
      case "domicilio_cliente.entidad_federativa.nom_ent":
        data.clientes_principales.domicilio_cliente.entidad_federativa.nom_ent = valor;
        break;
      case "domicilio_cliente.localidad":
        data.clientes_principales.domicilio_cliente.localidad = valor;
        break;
      case "domicilio_cliente.localidad.cve_loc":
        data.clientes_principales.domicilio_cliente.localidad.cve_loc = valor;
        break;
      case "domicilio_cliente.localidad.nom_loc":
        data.clientes_principales.domicilio_cliente.localidad.nom_loc = valor;
        break;
      case "domicilio_cliente.municipio":
        data.clientes_principales.domicilio_cliente.municipio = valor;
        break;
      case "domicilio_cliente.municipio.cve_mun":
        data.clientes_principales.domicilio_cliente.municipio.cve_mun = valor;
        break;
      case "domicilio_cliente.municipio.nom_mun":
        data.clientes_principales.domicilio_cliente.municipio.nom_mun = valor;
        break;
      case "domicilio_cliente.numExt":
        data.clientes_principales.domicilio_cliente.numExt = valor;
        break;
      case "domicilio_cliente.numInt":
        data.clientes_principales.domicilio_cliente.numInt = valor;
        break;
      case "domicilio_cliente.pais":
        data.clientes_principales.domicilio_cliente.pais = valor;
        break;
      case "domicilio_cliente.pais.codigo":
        data.clientes_principales.domicilio_cliente.pais.codigo = valor;
        break;
      case "domicilio_cliente.pais.valor":
        data.clientes_principales.domicilio_cliente.pais.valor = valor;
        break;
      case "domicilio_cliente.vialidad":
        data.clientes_principales.domicilio_cliente.vialidad = valor;
        break;
      case "domicilio_cliente.vialidad.nom_vial":
        data.clientes_principales.domicilio_cliente.vialidad.nom_vial = valor;
        break;
      case "domicilio_cliente.vialidad.tipo_vial":
        data.clientes_principales.domicilio_cliente.vialidad.tipo_vial = valor;
        break;
      case "dueno_encargado":
        data.clientes_principales.dueno_encargado = valor;
        break;
      case "id":
        data.clientes_principales.id = valor;
        break;
      case "nombre_cliente":
        data.clientes_principales.nombre_cliente = valor;
        break;
      case "nombre_negocio":
        data.clientes_principales.nombre_negocio = valor;
        break;
      case "numero_registro":
        data.clientes_principales.numero_registro = valor;
        break;
      case "observaciones":
        data.clientes_principales.observaciones = valor;
        break;
      case "porcentaje_facturacion":
        data.clientes_principales.porcentaje_facturacion = valor;
        break;
      case "rfc_cliente":
        data.clientes_principales.rfc_cliente = valor;
        break;
      case "sector_industria":
        data.clientes_principales.sector_industria = valor;
        break;
      case "sector_industria.codigo":
        data.clientes_principales.sector_industria.codigo = valor;
        break;
      case "sector_industria.valor":
        data.clientes_principales.sector_industria.valor = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.apoyos_beneficios_publicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataOtrasPartes = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.otras_partes.curp = valor;
        break;
      case "fecha_inicio_relacion":
        data.otras_partes.fecha_inicio_relacion = valor;
        break;
      case "fecha_nacimiento":
        data.otras_partes.fecha_nacimiento = valor;
        break;
      case "id":
        data.otras_partes.id = valor;
        break;
      case "nacionalidades":
        data.otras_partes.nacionalidades = valor;
        break;
      case "nacionalidades.codigo":
        data.otras_partes.nacionalidades.codigo = valor;
        break;
      case "nacionalidades.valor":
        data.otras_partes.nacionalidades.valor = valor;
        break;
      case "nombre_denominacion_parte":
        data.otras_partes.nombre_denominacion_parte = valor;
        break;
      case "observaciones":
        data.otras_partes.observaciones = valor;
        break;
      case "ocupacion":
        data.otras_partes.ocupacion = valor;
        break;
      case "rfc":
        data.otras_partes.rfc = valor;
        break;
      case "sector_industria":
        data.otras_partes.sector_industria = valor;
        break;
      case "sector_industria.codigo":
        data.otras_partes.sector_industria.codigo = valor;
        break;
      case "sector_industria.valor":
        data.otras_partes.sector_industria.valor = valor;
        break;
      case "tiene_interes":
        data.otras_partes.tiene_interes = valor;
        break;
      case "tipo_relacion":
        data.otras_partes.tipo_relacion = valor;
        break;
      case "tipo_relacion.codigo":
        data.otras_partes.tipo_relacion.codigo = valor;
        break;
      case "tipo_relacion.valor":
        data.otras_partes.tipo_relacion.valor = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.apoyos_beneficios_publicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataBeneficiosGratuitos = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "id":
        data.beneficios_gratuitos.id = valor;
        break;
      case "observaciones":
        data.beneficios_gratuitos.observaciones = valor;
        break;
      case "origen_beneficio":
        data.beneficios_gratuitos.origen_beneficio = valor;
        break;
      case "sector_industria":
        data.beneficios_gratuitos.sector_industria = valor;
        break;
      case "sector_industria.codigo":
        data.beneficios_gratuitos.sector_industria.codigo = valor;
        break;
      case "sector_industria.valor":
        data.beneficios_gratuitos.sector_industria.valor = valor;
        break;
      case "tipo_beneficio":
        data.beneficios_gratuitos.tipo_beneficio = valor;
        break;
      case "tipo_beneficio.codigo":
        data.beneficios_gratuitos.tipo_beneficio.codigo = valor;
        break;
      case "tipo_beneficio.valor":
        data.beneficios_gratuitos.tipo_beneficio.valor = valor;
        break;
      case "valor_beneficio":
        data.beneficios_gratuitos.valor_beneficio = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.apoyos_beneficios_publicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataSueldosSalariosPublicos = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "ente_publico":
        data.sueldos_salarios_publicos.ente_publico = valor;
        break;
      case "id":
        data.sueldos_salarios_publicos.id = valor;
        break;
      case "ingreso_bruto_anual":
        data.sueldos_salarios_publicos.ingreso_bruto_anual = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.sueldos_salarios_publicos.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.sueldos_salarios_publicos.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.sueldos_salarios_publicos.ingreso_bruto_anual.moneda = valor;
        break;
      case "ingreso_bruto_anual.moneda.codigo":
        data.sueldos_salarios_publicos.ingreso_bruto_anual.moneda.codigo = valor;
        break;
      case "ingreso_bruto_anual.moneda.moneda":
        data.sueldos_salarios_publicos.ingreso_bruto_anual.moneda.moneda = valor;
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.sueldos_salarios_publicos.ingreso_bruto_anual.unidad_temporal = valor;
        break;
      case "ingreso_bruto_anual.unidad_temporal.codigo":
        data.sueldos_salarios_publicos.ingreso_bruto_anual.unidad_temporal.codigo = valor;
        break;
      case "ingreso_bruto_anual.unidad_temporal.valor":
        data.sueldos_salarios_publicos.ingreso_bruto_anual.unidad_temporal.valor = valor;
        break;
      case "ingreso_bruto_anual.valor":
        data.sueldos_salarios_publicos.ingreso_bruto_anual.valor = valor;
        break;
      case "observaciones":
        data.sueldos_salarios_publicos.observaciones = valor;
        break;
      case "rfc":
        data.sueldos_salarios_publicos.rfc = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.apoyos_beneficios_publicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataSueldosSalariosOtrosEmpleos = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.sueldos_salarios_otros_empleos.curp = valor;
        break;
      case "descripcion_actividad_servicio":
        data.sueldos_salarios_otros_empleos.descripcion_actividad_servicio = valor;
        break;
      case "domicilio_persona_recibe_ingreso":
        data.sueldos_salarios_otros_empleos.domicilio_persona_recibe_ingreso = valor;
        break;
      case "domicilio_persona_recibe_ingreso.cp":
        data.sueldos_salarios_otros_empleos.domicilio_persona_recibe_ingreso.cp = valor;
        break;
      case "domicilio_persona_recibe_ingreso.entidad_federativa":
        data.sueldos_salarios_otros_empleos.domicilio_persona_recibe_ingreso.entidad_federativa = valor;
        break;
      case "domicilio_persona_recibe_ingreso.entidad_federativa.cve_ent":
        data.sueldos_salarios_otros_empleos.domicilio_persona_recibe_ingreso.entidad_federativa.cve_ent = valor;
        break;
      case "domicilio_persona_recibe_ingreso.entidad_federativa.nom_ent":
        data.sueldos_salarios_otros_empleos.domicilio_persona_recibe_ingreso.entidad_federativa.nom_ent = valor;
        break;
      case "domicilio_persona_recibe_ingreso.localidad":
        data.sueldos_salarios_otros_empleos.domicilio_persona_recibe_ingreso.localidad = valor;
        break;
      case "domicilio_persona_recibe_ingreso.localidad.cve_loc":
        data.sueldos_salarios_otros_empleos.domicilio_persona_recibe_ingreso.localidad.cve_loc = valor;
        break;
      case "domicilio_persona_recibe_ingreso.localidad.nom_loc":
        data.sueldos_salarios_otros_empleos.domicilio_persona_recibe_ingreso.localidad.nom_loc = valor;
        break;
      case "domicilio_persona_recibe_ingreso.municipio":
        data.sueldos_salarios_otros_empleos.domicilio_persona_recibe_ingreso.municipio = valor;
        break;
      case "domicilio_persona_recibe_ingreso.municipio.cve_mun":
        data.sueldos_salarios_otros_empleos.domicilio_persona_recibe_ingreso.municipio.cve_mun = valor;
        break;
      case "domicilio_persona_recibe_ingreso.municipio.nom_mun":
        data.sueldos_salarios_otros_empleos.domicilio_persona_recibe_ingreso.municipio.nom_mun = valor;
        break;
      case "domicilio_persona_recibe_ingreso.numExt":
        data.sueldos_salarios_otros_empleos.domicilio_persona_recibe_ingreso.numExt = valor;
        break;
      case "domicilio_persona_recibe_ingreso.numInt":
        data.sueldos_salarios_otros_empleos.domicilio_persona_recibe_ingreso.numInt = valor;
        break;
      case "domicilio_persona_recibe_ingreso.pais":
        data.sueldos_salarios_otros_empleos.domicilio_persona_recibe_ingreso.pais = valor;
        break;
      case "domicilio_persona_recibe_ingreso.pais.codigo":
        data.sueldos_salarios_otros_empleos.domicilio_persona_recibe_ingreso.pais.codigo = valor;
        break;
      case "domicilio_persona_recibe_ingreso.pais.valor":
        data.sueldos_salarios_otros_empleos.domicilio_persona_recibe_ingreso.pais.valor = valor;
        break;
      case "domicilio_persona_recibe_ingreso.vialidad":
        data.sueldos_salarios_otros_empleos.domicilio_persona_recibe_ingreso.vialidad = valor;
        break;
      case "domicilio_persona_recibe_ingreso.vialidad.nom_vial":
        data.sueldos_salarios_otros_empleos.domicilio_persona_recibe_ingreso.vialidad.nom_vial = valor;
        break;
      case "domicilio_persona_recibe_ingreso.vialidad.tipo_vial":
        data.sueldos_salarios_otros_empleos.domicilio_persona_recibe_ingreso.vialidad.tipo_vial = valor;
        break;
      case "id":
        data.sueldos_salarios_otros_empleos.id = valor;
        break;
      case "ingreso_bruto_anual":
        data.sueldos_salarios_otros_empleos.ingreso_bruto_anual = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.sueldos_salarios_otros_empleos.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.sueldos_salarios_otros_empleos.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.sueldos_salarios_otros_empleos.ingreso_bruto_anual.moneda = valor;
        break;
      case "ingreso_bruto_anual.moneda.codigo":
        data.sueldos_salarios_otros_empleos.ingreso_bruto_anual.moneda.codigo = valor;
        break;
      case "ingreso_bruto_anual.moneda.moneda":
        data.sueldos_salarios_otros_empleos.ingreso_bruto_anual.moneda.moneda = valor;
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.sueldos_salarios_otros_empleos.ingreso_bruto_anual.unidad_temporal = valor;
        break;
      case "ingreso_bruto_anual.unidad_temporal.codigo":
        data.sueldos_salarios_otros_empleos.ingreso_bruto_anual.unidad_temporal.codigo = valor;
        break;
      case "ingreso_bruto_anual.unidad_temporal.valor":
        data.sueldos_salarios_otros_empleos.ingreso_bruto_anual.unidad_temporal.valor = valor;
        break;
      case "ingreso_bruto_anual.valor":
        data.sueldos_salarios_otros_empleos.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion_razon_social":
        data.sueldos_salarios_otros_empleos.nombre_denominacion_razon_social = valor;
        break;
      case "observaciones":
        data.sueldos_salarios_otros_empleos.observaciones = valor;
        break;
      case "rfc":
        data.sueldos_salarios_otros_empleos.rfc = valor;
        break;
      case "sector_industria":
        data.sueldos_salarios_otros_empleos.sector_industria = valor;
        break;
      case "sector_industria.codigo":
        data.sueldos_salarios_otros_empleos.sector_industria.codigo = valor;
        break;
      case "sector_industria.valor":
        data.sueldos_salarios_otros_empleos.sector_industria.valor = valor;
        break;
      case "tipo_actividad_servicio":
        data.sueldos_salarios_otros_empleos.tipo_actividad_servicio = valor;
        break;
      case "tipo_actividad_servicio.codigo":
        data.sueldos_salarios_otros_empleos.tipo_actividad_servicio.codigo = valor;
        break;
      case "tipo_actividad_servicio.valor":
        data.sueldos_salarios_otros_empleos.tipo_actividad_servicio.valor = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.apoyos_beneficios_publicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataActividadProfesional = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.actividad_profesional.curp = valor;
        break;
      case "descripcion_actividad_servicio":
        data.actividad_profesional.descripcion_actividad_servicio = valor;
        break;
      case "domicilio_persona_recibe_ingreso":
        data.actividad_profesional.domicilio_persona_recibe_ingreso = valor;
        break;
      case "domicilio_persona_recibe_ingreso.cp":
        data.actividad_profesional.domicilio_persona_recibe_ingreso.cp = valor;
        break;
      case "domicilio_persona_recibe_ingreso.entidad_federativa":
        data.actividad_profesional.domicilio_persona_recibe_ingreso.entidad_federativa = valor;
        break;
      case "domicilio_persona_recibe_ingreso.entidad_federativa.cve_ent":
        data.actividad_profesional.domicilio_persona_recibe_ingreso.entidad_federativa.cve_ent = valor;
        break;
      case "domicilio_persona_recibe_ingreso.entidad_federativa.nom_ent":
        data.actividad_profesional.domicilio_persona_recibe_ingreso.entidad_federativa.nom_ent = valor;
        break;
      case "domicilio_persona_recibe_ingreso.localidad":
        data.actividad_profesional.domicilio_persona_recibe_ingreso.localidad = valor;
        break;
      case "domicilio_persona_recibe_ingreso.localidad.cve_loc":
        data.actividad_profesional.domicilio_persona_recibe_ingreso.localidad.cve_loc = valor;
        break;
      case "domicilio_persona_recibe_ingreso.localidad.nom_loc":
        data.actividad_profesional.domicilio_persona_recibe_ingreso.localidad.nom_loc = valor;
        break;
      case "domicilio_persona_recibe_ingreso.municipio":
        data.actividad_profesional.domicilio_persona_recibe_ingreso.municipio = valor;
        break;
      case "domicilio_persona_recibe_ingreso.municipio.cve_mun":
        data.actividad_profesional.domicilio_persona_recibe_ingreso.municipio.cve_mun = valor;
        break;
      case "domicilio_persona_recibe_ingreso.municipio.nom_mun":
        data.actividad_profesional.domicilio_persona_recibe_ingreso.municipio.nom_mun = valor;
        break;
      case "domicilio_persona_recibe_ingreso.numExt":
        data.actividad_profesional.domicilio_persona_recibe_ingreso.numExt = valor;
        break;
      case "domicilio_persona_recibe_ingreso.numInt":
        data.actividad_profesional.domicilio_persona_recibe_ingreso.numInt = valor;
        break;
      case "domicilio_persona_recibe_ingreso.pais":
        data.actividad_profesional.domicilio_persona_recibe_ingreso.pais = valor;
        break;
      case "domicilio_persona_recibe_ingreso.pais.codigo":
        data.actividad_profesional.domicilio_persona_recibe_ingreso.pais.codigo = valor;
        break;
      case "domicilio_persona_recibe_ingreso.pais.valor":
        data.actividad_profesional.domicilio_persona_recibe_ingreso.pais.valor = valor;
        break;
      case "domicilio_persona_recibe_ingreso.vialidad":
        data.actividad_profesional.domicilio_persona_recibe_ingreso.vialidad = valor;
        break;
      case "domicilio_persona_recibe_ingreso.vialidad.nom_vial":
        data.actividad_profesional.domicilio_persona_recibe_ingreso.vialidad.nom_vial = valor;
        break;
      case "domicilio_persona_recibe_ingreso.vialidad.tipo_vial":
        data.actividad_profesional.domicilio_persona_recibe_ingreso.vialidad.tipo_vial = valor;
        break;
      case "id":
        data.actividad_profesional.id = valor;
        break;
      case "ingreso_bruto_anual":
        data.actividad_profesional.ingreso_bruto_anual = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.actividad_profesional.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.actividad_profesional.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.actividad_profesional.ingreso_bruto_anual.moneda = valor;
        break;
      case "ingreso_bruto_anual.moneda.codigo":
        data.actividad_profesional.ingreso_bruto_anual.moneda.codigo = valor;
        break;
      case "ingreso_bruto_anual.moneda.moneda":
        data.actividad_profesional.ingreso_bruto_anual.moneda.moneda = valor;
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.actividad_profesional.ingreso_bruto_anual.unidad_temporal = valor;
        break;
      case "ingreso_bruto_anual.unidad_temporal.codigo":
        data.actividad_profesional.ingreso_bruto_anual.unidad_temporal.codigo = valor;
        break;
      case "ingreso_bruto_anual.unidad_temporal.valor":
        data.actividad_profesional.ingreso_bruto_anual.unidad_temporal.valor = valor;
        break;
      case "ingreso_bruto_anual.valor":
        data.actividad_profesional.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion_razon_social":
        data.actividad_profesional.nombre_denominacion_razon_social = valor;
        break;
      case "observaciones":
        data.actividad_profesional.observaciones = valor;
        break;
      case "rfc":
        data.actividad_profesional.rfc = valor;
        break;
      case "sector_industria":
        data.actividad_profesional.sector_industria = valor;
        break;
      case "sector_industria.codigo":
        data.actividad_profesional.sector_industria.codigo = valor;
        break;
      case "sector_industria.valor":
        data.actividad_profesional.sector_industria.valor = valor;
        break;
      case "tipo_actividad_servicio":
        data.actividad_profesional.tipo_actividad_servicio = valor;
        break;
      case "tipo_actividad_servicio.codigo":
        data.actividad_profesional.tipo_actividad_servicio.codigo = valor;
        break;
      case "tipo_actividad_servicio.valor":
        data.actividad_profesional.tipo_actividad_servicio.valor = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.apoyos_beneficios_publicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataActividadEmpresarial = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.actividad_empresarial.curp = valor;
        break;
      case "descripcion_actividad_servicio":
        data.actividad_empresarial.descripcion_actividad_servicio = valor;
        break;
      case "domicilio_actividad_empresarial":
        data.actividad_empresarial.domicilio_actividad_empresarial = valor;
        break;
      case "domicilio_actividad_empresarial.cp":
        data.actividad_empresarial.domicilio_actividad_empresarial.cp = valor;
        break;
      case "domicilio_actividad_empresarial.entidad_federativa":
        data.actividad_empresarial.domicilio_actividad_empresarial.entidad_federativa = valor;
        break;
      case "domicilio_actividad_empresarial.entidad_federativa.cve_ent":
        data.actividad_empresarial.domicilio_actividad_empresarial.entidad_federativa.cve_ent = valor;
        break;
      case "domicilio_actividad_empresarial.entidad_federativa.nom_ent":
        data.actividad_empresarial.domicilio_actividad_empresarial.entidad_federativa.nom_ent = valor;
        break;
      case "domicilio_actividad_empresarial.localidad":
        data.actividad_empresarial.domicilio_actividad_empresarial.localidad = valor;
        break;
      case "domicilio_actividad_empresarial.localidad.cve_loc":
        data.actividad_empresarial.domicilio_actividad_empresarial.localidad.cve_loc = valor;
        break;
      case "domicilio_actividad_empresarial.localidad.nom_loc":
        data.actividad_empresarial.domicilio_actividad_empresarial.localidad.nom_loc = valor;
        break;
      case "domicilio_actividad_empresarial.municipio":
        data.actividad_empresarial.domicilio_actividad_empresarial.municipio = valor;
        break;
      case "domicilio_actividad_empresarial.municipio.cve_mun":
        data.actividad_empresarial.domicilio_actividad_empresarial.municipio.cve_mun = valor;
        break;
      case "domicilio_actividad_empresarial.municipio.nom_mun":
        data.actividad_empresarial.domicilio_actividad_empresarial.municipio.nom_mun = valor;
        break;
      case "domicilio_actividad_empresarial.numExt":
        data.actividad_empresarial.domicilio_actividad_empresarial.numExt = valor;
        break;
      case "domicilio_actividad_empresarial.numInt":
        data.actividad_empresarial.domicilio_actividad_empresarial.numInt = valor;
        break;
      case "domicilio_actividad_empresarial.pais":
        data.actividad_empresarial.domicilio_actividad_empresarial.pais = valor;
        break;
      case "domicilio_actividad_empresarial.pais.codigo":
        data.actividad_empresarial.domicilio_actividad_empresarial.pais.codigo = valor;
        break;
      case "domicilio_actividad_empresarial.pais.valor":
        data.actividad_empresarial.domicilio_actividad_empresarial.pais.valor = valor;
        break;
      case "domicilio_actividad_empresarial.vialidad":
        data.actividad_empresarial.domicilio_actividad_empresarial.vialidad = valor;
        break;
      case "domicilio_actividad_empresarial.vialidad.nom_vial":
        data.actividad_empresarial.domicilio_actividad_empresarial.vialidad.nom_vial = valor;
        break;
      case "domicilio_actividad_empresarial.vialidad.tipo_vial":
        data.actividad_empresarial.domicilio_actividad_empresarial.vialidad.tipo_vial = valor;
        break;
      case "id":
        data.actividad_empresarial.id = valor;
        break;
      case "ingreso_bruto_anual":
        data.actividad_empresarial.ingreso_bruto_anual = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.actividad_empresarial.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.actividad_empresarial.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.actividad_empresarial.ingreso_bruto_anual.moneda = valor;
        break;
      case "ingreso_bruto_anual.moneda.codigo":
        data.actividad_empresarial.ingreso_bruto_anual.moneda.codigo = valor;
        break;
      case "ingreso_bruto_anual.moneda.moneda":
        data.actividad_empresarial.ingreso_bruto_anual.moneda.moneda = valor;
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.actividad_empresarial.ingreso_bruto_anual.unidad_temporal = valor;
        break;
      case "ingreso_bruto_anual.unidad_temporal.codigo":
        data.actividad_empresarial.ingreso_bruto_anual.unidad_temporal.codigo = valor;
        break;
      case "ingreso_bruto_anual.unidad_temporal.valor":
        data.actividad_empresarial.ingreso_bruto_anual.unidad_temporal.valor = valor;
        break;
      case "ingreso_bruto_anual.valor":
        data.actividad_empresarial.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion_razon_social":
        data.actividad_empresarial.nombre_denominacion_razon_social = valor;
        break;
      case "observaciones":
        data.actividad_empresarial.observaciones = valor;
        break;
      case "rfc":
        data.actividad_empresarial.rfc = valor;
        break;
      case "sector_industria":
        data.actividad_empresarial.sector_industria = valor;
        break;
      case "sector_industria.codigo":
        data.actividad_empresarial.sector_industria.codigo = valor;
        break;
      case "sector_industria.valor":
        data.actividad_empresarial.sector_industria.valor = valor;
        break;
      case "tipo_actividad_servicio":
        data.actividad_empresarial.tipo_actividad_servicio = valor;
        break;
      case "tipo_actividad_servicio.codigo":
        data.actividad_empresarial.tipo_actividad_servicio.codigo = valor;
        break;
      case "tipo_actividad_servicio.valor":
        data.actividad_empresarial.tipo_actividad_servicio.valor = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.apoyos_beneficios_publicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataActividadEconomicaMenor = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.actividad_economica_menor.curp = valor;
        break;
      case "descripcion_actividad_servicio":
        data.actividad_economica_menor.descripcion_actividad_servicio = valor;
        break;
      case "domicilio_actividad":
        data.actividad_economica_menor.domicilio_actividad = valor;
        break;
      case "domicilio_actividad.cp":
        data.actividad_economica_menor.domicilio_actividad.cp = valor;
        break;
      case "domicilio_actividad.entidad_federativa":
        data.actividad_economica_menor.domicilio_actividad.entidad_federativa = valor;
        break;
      case "domicilio_actividad.entidad_federativa.cve_ent":
        data.actividad_economica_menor.domicilio_actividad.entidad_federativa.cve_ent = valor;
        break;
      case "domicilio_actividad.entidad_federativa.nom_ent":
        data.actividad_economica_menor.domicilio_actividad.entidad_federativa.nom_ent = valor;
        break;
      case "domicilio_actividad.localidad":
        data.actividad_economica_menor.domicilio_actividad.localidad = valor;
        break;
      case "domicilio_actividad.localidad.cve_loc":
        data.actividad_economica_menor.domicilio_actividad.localidad.cve_loc = valor;
        break;
      case "domicilio_actividad.localidad.nom_loc":
        data.actividad_economica_menor.domicilio_actividad.localidad.nom_loc = valor;
        break;
      case "domicilio_actividad.municipio":
        data.actividad_economica_menor.domicilio_actividad.municipio = valor;
        break;
      case "domicilio_actividad.municipio.cve_mun":
        data.actividad_economica_menor.domicilio_actividad.municipio.cve_mun = valor;
        break;
      case "domicilio_actividad.municipio.nom_mun":
        data.actividad_economica_menor.domicilio_actividad.municipio.nom_mun = valor;
        break;
      case "domicilio_actividad.numExt":
        data.actividad_economica_menor.domicilio_actividad.numExt = valor;
        break;
      case "domicilio_actividad.numInt":
        data.actividad_economica_menor.domicilio_actividad.numInt = valor;
        break;
      case "domicilio_actividad.pais":
        data.actividad_economica_menor.domicilio_actividad.pais = valor;
        break;
      case "domicilio_actividad.pais.codigo":
        data.actividad_economica_menor.domicilio_actividad.pais.codigo = valor;
        break;
      case "domicilio_actividad.pais.valor":
        data.actividad_economica_menor.domicilio_actividad.pais.valor = valor;
        break;
      case "domicilio_actividad.vialidad":
        data.actividad_economica_menor.domicilio_actividad.vialidad = valor;
        break;
      case "domicilio_actividad.vialidad.nom_vial":
        data.actividad_economica_menor.domicilio_actividad.vialidad.nom_vial = valor;
        break;
      case "domicilio_actividad.vialidad.tipo_vial":
        data.actividad_economica_menor.domicilio_actividad.vialidad.tipo_vial = valor;
        break;
      case "id":
        data.actividad_economica_menor.id = valor;
        break;
      case "ingreso_bruto_anual":
        data.actividad_economica_menor.ingreso_bruto_anual = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.actividad_economica_menor.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.actividad_economica_menor.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.actividad_economica_menor.ingreso_bruto_anual.moneda = valor;
        break;
      case "ingreso_bruto_anual.moneda.codigo":
        data.actividad_economica_menor.ingreso_bruto_anual.moneda.codigo = valor;
        break;
      case "ingreso_bruto_anual.moneda.moneda":
        data.actividad_economica_menor.ingreso_bruto_anual.moneda.moneda = valor;
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.actividad_economica_menor.ingreso_bruto_anual.unidad_temporal = valor;
        break;
      case "ingreso_bruto_anual.unidad_temporal.codigo":
        data.actividad_economica_menor.ingreso_bruto_anual.unidad_temporal.codigo = valor;
        break;
      case "ingreso_bruto_anual.unidad_temporal.valor":
        data.actividad_economica_menor.ingreso_bruto_anual.unidad_temporal.valor = valor;
        break;
      case "ingreso_bruto_anual.valor":
        data.actividad_economica_menor.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion_razon_social":
        data.actividad_economica_menor.nombre_denominacion_razon_social = valor;
        break;
      case "observaciones":
        data.actividad_economica_menor.observaciones = valor;
        break;
      case "rfc":
        data.actividad_economica_menor.rfc = valor;
        break;
      case "sector_industria":
        data.actividad_economica_menor.sector_industria = valor;
        break;
      case "sector_industria.codigo":
        data.actividad_economica_menor.sector_industria.codigo = valor;
        break;
      case "sector_industria.valor":
        data.actividad_economica_menor.sector_industria.valor = valor;
        break;
      case "tipo_actividad_servicio":
        data.actividad_economica_menor.tipo_actividad_servicio = valor;
        break;
      case "tipo_actividad_servicio.codigo":
        data.actividad_economica_menor.tipo_actividad_servicio.codigo = valor;
        break;
      case "tipo_actividad_servicio.valor":
        data.actividad_economica_menor.tipo_actividad_servicio.valor = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.apoyos_beneficios_publicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataArrendamiento = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.arrendamiento.curp = valor;
        break;
      case "descripcion_actividad_servicio":
        data.arrendamiento.descripcion_actividad_servicio = valor;
        break;
      case "domicilio_actividad":
        data.arrendamiento.domicilio_actividad = valor;
        break;
      case "domicilio_actividad.cp":
        data.arrendamiento.domicilio_actividad.cp = valor;
        break;
      case "domicilio_actividad.entidad_federativa":
        data.arrendamiento.domicilio_actividad.entidad_federativa = valor;
        break;
      case "domicilio_actividad.entidad_federativa.cve_ent":
        data.arrendamiento.domicilio_actividad.entidad_federativa.cve_ent = valor;
        break;
      case "domicilio_actividad.entidad_federativa.nom_ent":
        data.arrendamiento.domicilio_actividad.entidad_federativa.nom_ent = valor;
        break;
      case "domicilio_actividad.localidad":
        data.arrendamiento.domicilio_actividad.localidad = valor;
        break;
      case "domicilio_actividad.localidad.cve_loc":
        data.arrendamiento.domicilio_actividad.localidad.cve_loc = valor;
        break;
      case "domicilio_actividad.localidad.nom_loc":
        data.arrendamiento.domicilio_actividad.localidad.nom_loc = valor;
        break;
      case "domicilio_actividad.municipio":
        data.arrendamiento.domicilio_actividad.municipio = valor;
        break;
      case "domicilio_actividad.municipio.cve_mun":
        data.arrendamiento.domicilio_actividad.municipio.cve_mun = valor;
        break;
      case "domicilio_actividad.municipio.nom_mun":
        data.arrendamiento.domicilio_actividad.municipio.nom_mun = valor;
        break;
      case "domicilio_actividad.numExt":
        data.arrendamiento.domicilio_actividad.numExt = valor;
        break;
      case "domicilio_actividad.numInt":
        data.arrendamiento.domicilio_actividad.numInt = valor;
        break;
      case "domicilio_actividad.pais":
        data.arrendamiento.domicilio_actividad.pais = valor;
        break;
      case "domicilio_actividad.pais.codigo":
        data.arrendamiento.domicilio_actividad.pais.codigo = valor;
        break;
      case "domicilio_actividad.pais.valor":
        data.arrendamiento.domicilio_actividad.pais.valor = valor;
        break;
      case "domicilio_actividad.vialidad":
        data.arrendamiento.domicilio_actividad.vialidad = valor;
        break;
      case "domicilio_actividad.vialidad.nom_vial":
        data.arrendamiento.domicilio_actividad.vialidad.nom_vial = valor;
        break;
      case "domicilio_actividad.vialidad.tipo_vial":
        data.arrendamiento.domicilio_actividad.vialidad.tipo_vial = valor;
        break;
      case "id":
        data.arrendamiento.id = valor;
        break;
      case "ingreso_bruto_anual":
        data.arrendamiento.ingreso_bruto_anual = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.arrendamiento.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.arrendamiento.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.arrendamiento.ingreso_bruto_anual.moneda = valor;
        break;
      case "ingreso_bruto_anual.moneda.codigo":
        data.arrendamiento.ingreso_bruto_anual.moneda.codigo = valor;
        break;
      case "ingreso_bruto_anual.moneda.moneda":
        data.arrendamiento.ingreso_bruto_anual.moneda.moneda = valor;
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.arrendamiento.ingreso_bruto_anual.unidad_temporal = valor;
        break;
      case "ingreso_bruto_anual.unidad_temporal.codigo":
        data.arrendamiento.ingreso_bruto_anual.unidad_temporal.codigo = valor;
        break;
      case "ingreso_bruto_anual.unidad_temporal.valor":
        data.arrendamiento.ingreso_bruto_anual.unidad_temporal.valor = valor;
        break;
      case "ingreso_bruto_anual.valor":
        data.arrendamiento.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion_razon_social":
        data.arrendamiento.nombre_denominacion_razon_social = valor;
        break;
      case "observaciones":
        data.arrendamiento.observaciones = valor;
        break;
      case "rfc":
        data.arrendamiento.rfc = valor;
        break;
      case "sector_industria":
        data.arrendamiento.sector_industria = valor;
        break;
      case "sector_industria.codigo":
        data.arrendamiento.sector_industria.codigo = valor;
        break;
      case "sector_industria.valor":
        data.arrendamiento.sector_industria.valor = valor;
        break;
      case "tipo_actividad_servicio":
        data.arrendamiento.tipo_actividad_servicio = valor;
        break;
      case "tipo_actividad_servicio.codigo":
        data.arrendamiento.tipo_actividad_servicio.codigo = valor;
        break;
      case "tipo_actividad_servicio.valor":
        data.arrendamiento.tipo_actividad_servicio.valor = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.apoyos_beneficios_publicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataPremios = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.premios.curp = valor;
        break;
      case "descripcion_actividad":
        data.premios.descripcion_actividad = valor;
        break;
      case "domicilio":
        data.premios.domicilio = valor;
        break;
      case "domicilio.cp":
        data.premios.domicilio.cp = valor;
        break;
      case "domicilio.entidad_federativa":
        data.premios.domicilio.entidad_federativa = valor;
        break;
      case "domicilio.entidad_federativa.cve_ent":
        data.premios.domicilio.entidad_federativa.cve_ent = valor;
        break;
      case "domicilio.entidad_federativa.nom_ent":
        data.premios.domicilio.entidad_federativa.nom_ent = valor;
        break;
      case "domicilio.localidad":
        data.premios.domicilio.localidad = valor;
        break;
      case "domicilio.localidad.cve_loc":
        data.premios.domicilio.localidad.cve_loc = valor;
        break;
      case "domicilio.localidad.nom_loc":
        data.premios.domicilio.localidad.nom_loc = valor;
        break;
      case "domicilio.municipio":
        data.premios.domicilio.municipio = valor;
        break;
      case "domicilio.municipio.cve_mun":
        data.premios.domicilio.municipio.cve_mun = valor;
        break;
      case "domicilio.municipio.nom_mun":
        data.premios.domicilio.municipio.nom_mun = valor;
        break;
      case "domicilio.numExt":
        data.premios.domicilio.numExt = valor;
        break;
      case "domicilio.numInt":
        data.premios.domicilio.numInt = valor;
        break;
      case "domicilio.pais":
        data.premios.domicilio.pais = valor;
        break;
      case "domicilio.pais.codigo":
        data.premios.domicilio.pais.codigo = valor;
        break;
      case "domicilio.pais.valor":
        data.premios.domicilio.pais.valor = valor;
        break;
      case "domicilio.vialidad":
        data.premios.domicilio.vialidad = valor;
        break;
      case "domicilio.vialidad.nom_vial":
        data.premios.domicilio.vialidad.nom_vial = valor;
        break;
      case "domicilio.vialidad.tipo_vial":
        data.premios.domicilio.vialidad.tipo_vial = valor;
        break;
      case "id":
        data.premios.id = valor;
        break;
      case "ingreso_bruto_anual":
        data.premios.ingreso_bruto_anual = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.premios.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.premios.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.premios.ingreso_bruto_anual.moneda = valor;
        break;
      case "ingreso_bruto_anual.moneda.codigo":
        data.premios.ingreso_bruto_anual.moneda.codigo = valor;
        break;
      case "ingreso_bruto_anual.moneda.moneda":
        data.premios.ingreso_bruto_anual.moneda.moneda = valor;
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.premios.ingreso_bruto_anual.unidad_temporal = valor;
        break;
      case "ingreso_bruto_anual.unidad_temporal.codigo":
        data.premios.ingreso_bruto_anual.unidad_temporal.codigo = valor;
        break;
      case "ingreso_bruto_anual.unidad_temporal.valor":
        data.premios.ingreso_bruto_anual.unidad_temporal.valor = valor;
        break;
      case "ingreso_bruto_anual.valor":
        data.premios.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion":
        data.premios.nombre_denominacion = valor;
        break;
      case "observaciones":
        data.premios.observaciones = valor;
        break;
      case "rfc":
        data.premios.rfc = valor;
        break;
      case "sector_industria":
        data.premios.sector_industria = valor;
        break;
      case "sector_industria.codigo":
        data.premios.sector_industria.codigo = valor;
        break;
      case "sector_industria.valor":
        data.premios.sector_industria.valor = valor;
        break;
      case "tipo_actividad_servicio":
        data.premios.tipo_actividad_servicio = valor;
        break;
      case "tipo_actividad_servicio.codigo":
        data.premios.tipo_actividad_servicio.codigo = valor;
        break;
      case "tipo_actividad_servicio.valor":
        data.premios.tipo_actividad_servicio.valor = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.apoyos_beneficios_publicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataEnajenacionBienes = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.enajenacion_bienes.curp = valor;
        break;
      case "descripcion_bien":
        data.enajenacion_bienes.descripcion_bien = valor;
        break;
      case "domicilio_bien_enajenado":
        data.enajenacion_bienes.domicilio_bien_enajenado = valor;
        break;
      case "domicilio_bien_enajenado.cp":
        data.enajenacion_bienes.domicilio_bien_enajenado.cp = valor;
        break;
      case "domicilio_bien_enajenado.entidad_federativa":
        data.enajenacion_bienes.domicilio_bien_enajenado.entidad_federativa = valor;
        break;
      case "domicilio_bien_enajenado.entidad_federativa.cve_ent":
        data.enajenacion_bienes.domicilio_bien_enajenado.entidad_federativa.cve_ent = valor;
        break;
      case "domicilio_bien_enajenado.entidad_federativa.nom_ent":
        data.enajenacion_bienes.domicilio_bien_enajenado.entidad_federativa.nom_ent = valor;
        break;
      case "domicilio_bien_enajenado.localidad":
        data.enajenacion_bienes.domicilio_bien_enajenado.localidad = valor;
        break;
      case "domicilio_bien_enajenado.localidad.cve_loc":
        data.enajenacion_bienes.domicilio_bien_enajenado.localidad.cve_loc = valor;
        break;
      case "domicilio_bien_enajenado.localidad.nom_loc":
        data.enajenacion_bienes.domicilio_bien_enajenado.localidad.nom_loc = valor;
        break;
      case "domicilio_bien_enajenado.municipio":
        data.enajenacion_bienes.domicilio_bien_enajenado.municipio = valor;
        break;
      case "domicilio_bien_enajenado.municipio.cve_mun":
        data.enajenacion_bienes.domicilio_bien_enajenado.municipio.cve_mun = valor;
        break;
      case "domicilio_bien_enajenado.municipio.nom_mun":
        data.enajenacion_bienes.domicilio_bien_enajenado.municipio.nom_mun = valor;
        break;
      case "domicilio_bien_enajenado.numExt":
        data.enajenacion_bienes.domicilio_bien_enajenado.numExt = valor;
        break;
      case "domicilio_bien_enajenado.numInt":
        data.enajenacion_bienes.domicilio_bien_enajenado.numInt = valor;
        break;
      case "domicilio_bien_enajenado.pais":
        data.enajenacion_bienes.domicilio_bien_enajenado.pais = valor;
        break;
      case "domicilio_bien_enajenado.pais.codigo":
        data.enajenacion_bienes.domicilio_bien_enajenado.pais.codigo = valor;
        break;
      case "domicilio_bien_enajenado.pais.valor":
        data.enajenacion_bienes.domicilio_bien_enajenado.pais.valor = valor;
        break;
      case "domicilio_bien_enajenado.vialidad":
        data.enajenacion_bienes.domicilio_bien_enajenado.vialidad = valor;
        break;
      case "domicilio_bien_enajenado.vialidad.nom_vial":
        data.enajenacion_bienes.domicilio_bien_enajenado.vialidad.nom_vial = valor;
        break;
      case "domicilio_bien_enajenado.vialidad.tipo_vial":
        data.enajenacion_bienes.domicilio_bien_enajenado.vialidad.tipo_vial = valor;
        break;
      case "id":
        data.enajenacion_bienes.id = valor;
        break;
      case "ingreso_bruto_anual":
        data.enajenacion_bienes.ingreso_bruto_anual = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.enajenacion_bienes.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.enajenacion_bienes.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.enajenacion_bienes.ingreso_bruto_anual.moneda = valor;
        break;
      case "ingreso_bruto_anual.moneda.codigo":
        data.enajenacion_bienes.ingreso_bruto_anual.moneda.codigo = valor;
        break;
      case "ingreso_bruto_anual.moneda.moneda":
        data.enajenacion_bienes.ingreso_bruto_anual.moneda.moneda = valor;
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.enajenacion_bienes.ingreso_bruto_anual.unidad_temporal = valor;
        break;
      case "ingreso_bruto_anual.unidad_temporal.codigo":
        data.enajenacion_bienes.ingreso_bruto_anual.unidad_temporal.codigo = valor;
        break;
      case "ingreso_bruto_anual.unidad_temporal.valor":
        data.enajenacion_bienes.ingreso_bruto_anual.unidad_temporal.valor = valor;
        break;
      case "ingreso_bruto_anual.valor":
        data.enajenacion_bienes.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion":
        data.enajenacion_bienes.nombre_denominacion = valor;
        break;
      case "observaciones":
        data.enajenacion_bienes.observaciones = valor;
        break;
      case "rfc":
        data.enajenacion_bienes.rfc = valor;
        break;
      case "sector_industria":
        data.enajenacion_bienes.sector_industria = valor;
        break;
      case "sector_industria.codigo":
        data.enajenacion_bienes.sector_industria.codigo = valor;
        break;
      case "sector_industria.valor":
        data.enajenacion_bienes.sector_industria.valor = valor;
        break;
      case "tipo_actividad_servicio":
        data.enajenacion_bienes.tipo_actividad_servicio = valor;
        break;
      case "tipo_actividad_servicio.codigo":
        data.enajenacion_bienes.tipo_actividad_servicio.codigo = valor;
        break;
      case "tipo_actividad_servicio.valor":
        data.enajenacion_bienes.tipo_actividad_servicio.valor = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.apoyos_beneficios_publicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataBienesInmuebles = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp_quien_adquirio":
        data.bienes_inmuebles.curp_quien_adquirio = valor;
        break;
      case "domicilio_bien":
        data.bienes_inmuebles.domicilio_bien = valor;
        break;
      case "domicilio_bien.cp":
        data.bienes_inmuebles.domicilio_bien.cp = valor;
        break;
      case "domicilio_bien.entidad_federativa":
        data.bienes_inmuebles.domicilio_bien.entidad_federativa = valor;
        break;
      case "domicilio_bien.entidad_federativa.cve_ent":
        data.bienes_inmuebles.domicilio_bien.entidad_federativa.cve_ent = valor;
        break;
      case "domicilio_bien.entidad_federativa.nom_ent":
        data.bienes_inmuebles.domicilio_bien.entidad_federativa.nom_ent = valor;
        break;
      case "domicilio_bien.localidad":
        data.bienes_inmuebles.domicilio_bien.localidad = valor;
        break;
      case "domicilio_bien.localidad.cve_loc":
        data.bienes_inmuebles.domicilio_bien.localidad.cve_loc = valor;
        break;
      case "domicilio_bien.localidad.nom_loc":
        data.bienes_inmuebles.domicilio_bien.localidad.nom_loc = valor;
        break;
      case "domicilio_bien.municipio":
        data.bienes_inmuebles.domicilio_bien.municipio = valor;
        break;
      case "domicilio_bien.municipio.cve_mun":
        data.bienes_inmuebles.domicilio_bien.municipio.cve_mun = valor;
        break;
      case "domicilio_bien.municipio.nom_mun":
        data.bienes_inmuebles.domicilio_bien.municipio.nom_mun = valor;
        break;
      case "domicilio_bien.numExt":
        data.bienes_inmuebles.domicilio_bien.numExt = valor;
        break;
      case "domicilio_bien.numInt":
        data.bienes_inmuebles.domicilio_bien.numInt = valor;
        break;
      case "domicilio_bien.pais":
        data.bienes_inmuebles.domicilio_bien.pais = valor;
        break;
      case "domicilio_bien.pais.codigo":
        data.bienes_inmuebles.domicilio_bien.pais.codigo = valor;
        break;
      case "domicilio_bien.pais.valor":
        data.bienes_inmuebles.domicilio_bien.pais.valor = valor;
        break;
      case "domicilio_bien.vialidad":
        data.bienes_inmuebles.domicilio_bien.vialidad = valor;
        break;
      case "domicilio_bien.vialidad.nom_vial":
        data.bienes_inmuebles.domicilio_bien.vialidad.nom_vial = valor;
        break;
      case "domicilio_bien.vialidad.tipo_vial":
        data.bienes_inmuebles.domicilio_bien.vialidad.tipo_vial = valor;
        break;
      case "fecha_adquisicion":
        data.bienes_inmuebles.fecha_adquisicion = valor;
        break;
      case "forma_adquisicion":
        data.bienes_inmuebles.forma_adquisicion = valor;
        break;
      case "forma_adquisicion.codigo":
        data.bienes_inmuebles.forma_adquisicion.codigo = valor;
        break;
      case "forma_adquisicion.valor":
        data.bienes_inmuebles.forma_adquisicion.valor = valor;
        break;
      case "id":
        data.bienes_inmuebles.id = valor;
        break;
      case "identificacion_bien":
        data.bienes_inmuebles.identificacion_bien = valor;
        break;
      case "identificacion_bien.fecha_contrato":
        data.bienes_inmuebles.identificacion_bien.fecha_contrato = valor;
        break;
      case "identificacion_bien.folio_real":
        data.bienes_inmuebles.identificacion_bien.folio_real = valor;
        break;
      case "identificacion_bien.numero_escritura_publica":
        data.bienes_inmuebles.identificacion_bien.numero_escritura_publica = valor;
        break;
      case "identificacion_bien.numero_registro_publico":
        data.bienes_inmuebles.identificacion_bien.numero_registro_publico = valor;
        break;
      case "nombre_copropietario":
        data.bienes_inmuebles.nombre_copropietario = valor;
        break;
      case "nombre_copropietario.nombres":
        data.bienes_inmuebles.nombre_copropietario.nombres = valor;
        break;
      case "nombre_copropietario.primer_apellido":
        data.bienes_inmuebles.nombre_copropietario.primer_apellido = valor;
        break;
      case "nombre_copropietario.segundo_apellido":
        data.bienes_inmuebles.nombre_copropietario.segundo_apellido = valor;
        break;
      case "nombre_denominacion_quien_adquirio":
        data.bienes_inmuebles.nombre_denominacion_quien_adquirio = valor;
        break;
      case "observaciones":
        data.bienes_inmuebles.observaciones = valor;
        break;
      case "porcentaje_propiedad":
        data.bienes_inmuebles.porcentaje_propiedad = valor;
        break;
      case "precio_adquisicion":
        data.bienes_inmuebles.precio_adquisicion = valor;
        break;
      case "precio_adquisicion.moneda":
        data.bienes_inmuebles.precio_adquisicion.moneda = valor;
        break;
      case "precio_adquisicion.moneda.codigo":
        data.bienes_inmuebles.precio_adquisicion.moneda.codigo = valor;
        break;
      case "precio_adquisicion.moneda.moneda":
        data.bienes_inmuebles.precio_adquisicion.moneda.moneda = valor;
        break;
      case "precio_adquisicion.valor":
        data.bienes_inmuebles.precio_adquisicion.valor = valor;
        break;
      case "relacion_persona_adquirio":
        data.bienes_inmuebles.relacion_persona_adquirio = valor;
        break;
      case "relacion_persona_adquirio.codigo":
        data.bienes_inmuebles.relacion_persona_adquirio.codigo = valor;
        break;
      case "relacion_persona_adquirio.valor":
        data.bienes_inmuebles.relacion_persona_adquirio.valor = valor;
        break;
      case "rfc_quien_adquirio":
        data.bienes_inmuebles.rfc_quien_adquirio = valor;
        break;
      case "sector_industria":
        data.bienes_inmuebles.sector_industria = valor;
        break;
      case "sector_industria.codigo":
        data.bienes_inmuebles.sector_industria.codigo = valor;
        break;
      case "sector_industria.valor":
        data.bienes_inmuebles.sector_industria.valor = valor;
        break;
      case "superficie_construccion":
        data.bienes_inmuebles.superficie_construccion = valor;
        break;
      case "superficie_terreno":
        data.bienes_inmuebles.superficie_terreno = valor;
        break;
      case "tipo_bien":
        data.bienes_inmuebles.tipo_bien = valor;
        break;
      case "tipo_bien.codigo":
        data.bienes_inmuebles.tipo_bien.codigo = valor;
        break;
      case "tipo_bien.valor":
        data.bienes_inmuebles.tipo_bien.valor = valor;
        break;
      case "tipo_operacion":
        data.bienes_inmuebles.tipo_operacion = valor;
        break;
      case "tipo_operacion.codigo":
        data.bienes_inmuebles.tipo_operacion.codigo = valor;
        break;
      case "tipo_operacion.valor":
        data.bienes_inmuebles.tipo_operacion.valor = valor;
        break;
      case "valor_catastral":
        data.bienes_inmuebles.valor_catastral = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.apoyos_beneficios_publicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataBienesMueblesRegistables = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "fecha_adquisicion":
        data.bienes_muebles_registrables.fecha_adquisicion = valor;
        break;
      case "forma_adquisicion":
        data.bienes_muebles_registrables.forma_adquisicion = valor;
        break;
      case "forma_adquisicion.codigo":
        data.bienes_muebles_registrables.forma_adquisicion.codigo = valor;
        break;
      case "forma_adquisicion.valor":
        data.bienes_muebles_registrables.forma_adquisicion.valor = valor;
        break;
      case "id":
        data.bienes_muebles_registrables.id = valor;
        break;
      case "lugar_registro":
        data.bienes_muebles_registrables.lugar_registro = valor;
        break;
      case "lugar_registro.entidad":
        data.bienes_muebles_registrables.lugar_registro.entidad = valor;
        break;
      case "lugar_registro.entidad.cve_ent":
        data.bienes_muebles_registrables.lugar_registro.entidad.cve_ent = valor;
        break;
      case "lugar_registro.entidad.nom_ent":
        data.bienes_muebles_registrables.lugar_registro.entidad.nom_ent = valor;
        break;
      case "lugar_registro.pais":
        data.bienes_muebles_registrables.lugar_registro.pais = valor;
        break;
      case "lugar_registro.pais.codigo":
        data.bienes_muebles_registrables.lugar_registro.pais.codigo = valor;
        break;
      case "lugar_registro.pais.valor":
        data.bienes_muebles_registrables.lugar_registro.pais.valor = valor;
        break;
      case "marca":
        data.bienes_muebles_registrables.marca = valor;
        break;
      case "modelo":
        data.bienes_muebles_registrables.modelo = valor;
        break;
      case "nombre_denominacion_adquirio":
        data.bienes_muebles_registrables.nombre_denominacion_adquirio = valor;
        break;
      case "nombres_copropietarios":
        data.bienes_muebles_registrables.nombres_copropietarios = valor;
        break;
      case "numero_registro_vehicular":
        data.bienes_muebles_registrables.numero_registro_vehicular = valor;
        break;
      case "numero_serie":
        data.bienes_muebles_registrables.numero_serie = valor;
        break;
      case "observaciones":
        data.bienes_muebles_registrables.observaciones = valor;
        break;
      case "porcentaje_propiedad":
        data.bienes_muebles_registrables.porcentaje_propiedad = valor;
        break;
      case "precio_adquisicion":
        data.bienes_muebles_registrables.precio_adquisicion = valor;
        break;
      case "precio_adquisicion.moneda":
        data.bienes_muebles_registrables.precio_adquisicion.moneda = valor;
        break;
      case "precio_adquisicion.moneda.codigo":
        data.bienes_muebles_registrables.precio_adquisicion.moneda.codigo = valor;
        break;
      case "precio_adquisicion.moneda.moneda":
        data.bienes_muebles_registrables.precio_adquisicion.moneda.moneda = valor;
        break;
      case "precio_adquisicion.valor":
        data.bienes_muebles_registrables.precio_adquisicion.valor = valor;
        break;
      case "relacion_persona_quien_adquirio":
        data.bienes_muebles_registrables.relacion_persona_quien_adquirio = valor;
        break;
      case "relacion_persona_quien_adquirio.codigo":
        data.bienes_muebles_registrables.relacion_persona_quien_adquirio.codigo = valor;
        break;
      case "relacion_persona_quien_adquirio.valor":
        data.bienes_muebles_registrables.relacion_persona_quien_adquirio.valor = valor;
        break;
      case "rfc_quien_adquirio":
        data.bienes_muebles_registrables.rfc_quien_adquirio = valor;
        break;
      case "sector_industria":
        data.bienes_muebles_registrables.sector_industria = valor;
        break;
      case "sector_industria.codigo":
        data.bienes_muebles_registrables.sector_industria.codigo = valor;
        break;
      case "sector_industria.valor":
        data.bienes_muebles_registrables.sector_industria.valor = valor;
        break;
      case "submarca":
        data.bienes_muebles_registrables.submarca = valor;
        break;
      case "tipo_bien_mueble":
        data.bienes_muebles_registrables.tipo_bien_mueble = valor;
        break;
      case "tipo_bien_mueble.codigo":
        data.bienes_muebles_registrables.tipo_bien_mueble.codigo = valor;
        break;
      case "tipo_bien_mueble.valor":
        data.bienes_muebles_registrables.tipo_bien_mueble.valor = valor;
        break;
      case "tipo_operacion":
        data.bienes_muebles_registrables.tipo_operacion = valor;
        break;
      case "tipo_operacion.codigo":
        data.bienes_muebles_registrables.tipo_operacion.codigo = valor;
        break;
      case "tipo_operacion.valor":
        data.bienes_muebles_registrables.tipo_operacion.valor = valor;
        break;
      case "titular_bien":
        data.bienes_muebles_registrables.titular_bien = valor;
        break;
      case "titular_bien.codigo":
        data.bienes_muebles_registrables.titular_bien.codigo = valor;
        break;
      case "titular_bien.valor":
        data.bienes_muebles_registrables.titular_bien.valor = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.apoyos_beneficios_publicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataBienesMueblesNoRegistables = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "descripcion":
        data.bienes_muebles_no_registrables.descripcion = valor;
        break;
      case "fecha_adquisicion":
        data.bienes_muebles_no_registrables.fecha_adquisicion = valor;
        break;
      case "forma_adquisicion":
        data.bienes_muebles_no_registrables.forma_adquisicion = valor;
        break;
      case "forma_adquisicion.codigo":
        data.bienes_muebles_no_registrables.forma_adquisicion.codigo = valor;
        break;
      case "forma_adquisicion.valor":
        data.bienes_muebles_no_registrables.forma_adquisicion.valor = valor;
        break;
      case "id":
        data.bienes_muebles_no_registrables.id = valor;
        break;
      case "nombre_denominacion_adquirio":
        data.bienes_muebles_no_registrables.nombre_denominacion_adquirio = valor;
        break;
      case "nombres_copropietarios":
        data.bienes_muebles_no_registrables.nombres_copropietarios = valor;
        break;
      case "observaciones":
        data.bienes_muebles_no_registrables.observaciones = valor;
        break;
      case "porcentaje_propiedad":
        data.bienes_muebles_no_registrables.porcentaje_propiedad = valor;
        break;
      case "precio_adquisicion":
        data.bienes_muebles_no_registrables.precio_adquisicion = valor;
        break;
      case "precio_adquisicion.moneda":
        data.bienes_muebles_no_registrables.precio_adquisicion.moneda = valor;
        break;
      case "precio_adquisicion.moneda.codigo":
        data.bienes_muebles_no_registrables.precio_adquisicion.moneda.codigo = valor;
        break;
      case "precio_adquisicion.moneda.moneda":
        data.bienes_muebles_no_registrables.precio_adquisicion.moneda.moneda = valor;
        break;
      case "precio_adquisicion.valor":
        data.bienes_muebles_no_registrables.precio_adquisicion.valor = valor;
        break;
      case "relacion_quien_adquirio":
        data.bienes_muebles_no_registrables.relacion_quien_adquirio = valor;
        break;
      case "relacion_quien_adquirio.codigo":
        data.bienes_muebles_no_registrables.relacion_quien_adquirio.codigo = valor;
        break;
      case "relacion_quien_adquirio.valor":
        data.bienes_muebles_no_registrables.relacion_quien_adquirio.valor = valor;
        break;
      case "tipo_bien":
        data.bienes_muebles_no_registrables.tipo_bien = valor;
        break;
      case "tipo_bien.codigo":
        data.bienes_muebles_no_registrables.tipo_bien.codigo = valor;
        break;
      case "tipo_bien.valor":
        data.bienes_muebles_no_registrables.tipo_bien.valor = valor;
        break;
      case "tipo_operacion":
        data.bienes_muebles_no_registrables.tipo_operacion = valor;
        break;
      case "tipo_operacion.codigo":
        data.bienes_muebles_no_registrables.tipo_operacion.codigo = valor;
        break;
      case "tipo_operacion.valor":
        data.bienes_muebles_no_registrables.tipo_operacion.valor = valor;
        break;
      case "titular_bien":
        data.bienes_muebles_no_registrables.titular_bien = valor;
        break;
      case "titular_bien.codigo":
        data.bienes_muebles_no_registrables.titular_bien.codigo = valor;
        break;
      case "titular_bien.valor":
        data.bienes_muebles_no_registrables.titular_bien.valor = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.apoyos_beneficios_publicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataInversionesCuentasValores = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "domicilio_institucion":
        data.inversiones_cuentas_valores.domicilio_institucion = valor;
        break;
      case "domicilio_institucion.cp":
        data.inversiones_cuentas_valores.domicilio_institucion.cp = valor;
        break;
      case "domicilio_institucion.entidad_federativa":
        data.inversiones_cuentas_valores.domicilio_institucion.entidad_federativa = valor;
        break;
      case "domicilio_institucion.entidad_federativa.cve_ent":
        data.inversiones_cuentas_valores.domicilio_institucion.entidad_federativa.cve_ent = valor;
        break;
      case "domicilio_institucion.entidad_federativa.nom_ent":
        data.inversiones_cuentas_valores.domicilio_institucion.entidad_federativa.nom_ent = valor;
        break;
      case "domicilio_institucion.localidad":
        data.inversiones_cuentas_valores.domicilio_institucion.localidad = valor;
        break;
      case "domicilio_institucion.localidad.cve_loc":
        data.inversiones_cuentas_valores.domicilio_institucion.localidad.cve_loc = valor;
        break;
      case "domicilio_institucion.localidad.nom_loc":
        data.inversiones_cuentas_valores.domicilio_institucion.localidad.nom_loc = valor;
        break;
      case "domicilio_institucion.municipio":
        data.inversiones_cuentas_valores.domicilio_institucion.municipio = valor;
        break;
      case "domicilio_institucion.municipio.cve_mun":
        data.inversiones_cuentas_valores.domicilio_institucion.municipio.cve_mun = valor;
        break;
      case "domicilio_institucion.municipio.nom_mun":
        data.inversiones_cuentas_valores.domicilio_institucion.municipio.nom_mun = valor;
        break;
      case "domicilio_institucion.numExt":
        data.inversiones_cuentas_valores.domicilio_institucion.numExt = valor;
        break;
      case "domicilio_institucion.numInt":
        data.inversiones_cuentas_valores.domicilio_institucion.numInt = valor;
        break;
      case "domicilio_institucion.pais":
        data.inversiones_cuentas_valores.domicilio_institucion.pais = valor;
        break;
      case "domicilio_institucion.pais.codigo":
        data.inversiones_cuentas_valores.domicilio_institucion.pais.codigo = valor;
        break;
      case "domicilio_institucion.pais.valor":
        data.inversiones_cuentas_valores.domicilio_institucion.pais.valor = valor;
        break;
      case "domicilio_institucion.vialidad":
        data.inversiones_cuentas_valores.domicilio_institucion.vialidad = valor;
        break;
      case "domicilio_institucion.vialidad.nom_vial":
        data.inversiones_cuentas_valores.domicilio_institucion.vialidad.nom_vial = valor;
        break;
      case "domicilio_institucion.vialidad.tipo_vial":
        data.inversiones_cuentas_valores.domicilio_institucion.vialidad.tipo_vial = valor;
        break;
      case "fecha_inicio":
        data.inversiones_cuentas_valores.fecha_inicio = valor;
        break;
      case "forma_adquisicion":
        data.inversiones_cuentas_valores.forma_adquisicion = valor;
        break;
      case "forma_adquisicion.codigo":
        data.inversiones_cuentas_valores.forma_adquisicion.codigo = valor;
        break;
      case "forma_adquisicion.valor":
        data.inversiones_cuentas_valores.forma_adquisicion.valor = valor;
        break;
      case "id":
        data.inversiones_cuentas_valores.id = valor;
        break;
      case "monto_original":
        data.inversiones_cuentas_valores.monto_original = valor;
        break;
      case "nacional_extranjero":
        data.inversiones_cuentas_valores.nacional_extranjero = valor;
        break;
      case "nacional_extranjero.codigo":
        data.inversiones_cuentas_valores.nacional_extranjero.codigo = valor;
        break;
      case "nacional_extranjero.valor":
        data.inversiones_cuentas_valores.nacional_extranjero.valor = valor;
        break;
      case "nombre_institucion":
        data.inversiones_cuentas_valores.nombre_institucion = valor;
        break;
      case "numero_cuenta":
        data.inversiones_cuentas_valores.numero_cuenta = valor;
        break;
      case "observaciones":
        data.inversiones_cuentas_valores.observaciones = valor;
        break;
      case "plazo":
        data.inversiones_cuentas_valores.plazo = valor;
        break;
      case "porcentaje_inversion":
        data.inversiones_cuentas_valores.porcentaje_inversion = valor;
        break;
      case "rfc_institucion":
        data.inversiones_cuentas_valores.rfc_institucion = valor;
        break;
      case "saldo_anual":
        data.inversiones_cuentas_valores.saldo_anual = valor;
        break;
      case "sector_industria":
        data.inversiones_cuentas_valores.sector_industria = valor;
        break;
      case "sector_industria.codigo":
        data.inversiones_cuentas_valores.sector_industria.codigo = valor;
        break;
      case "sector_industria.valor":
        data.inversiones_cuentas_valores.sector_industria.valor = valor;
        break;
      case "tasa_interes":
        data.inversiones_cuentas_valores.tasa_interes = valor;
        break;
      case "tipo_especifico_inversion":
        data.inversiones_cuentas_valores.tipo_especifico_inversion = valor;
        break;
      case "tipo_especifico_inversion.codigo":
        data.inversiones_cuentas_valores.tipo_especifico_inversion.codigo = valor;
        break;
      case "tipo_especifico_inversion.valor":
        data.inversiones_cuentas_valores.tipo_especifico_inversion.valor = valor;
        break;
      case "tipo_inversion":
        data.inversiones_cuentas_valores.tipo_inversion = valor;
        break;
      case "tipo_inversion.codigo":
        data.inversiones_cuentas_valores.tipo_inversion.codigo = valor;
        break;
      case "tipo_inversion.valor":
        data.inversiones_cuentas_valores.tipo_inversion.valor = valor;
        break;
      case "tipo_moneda":
        data.inversiones_cuentas_valores.tipo_moneda = valor;
        break;
      case "tipo_moneda.codigo":
        data.inversiones_cuentas_valores.tipo_moneda.codigo = valor;
        break;
      case "tipo_moneda.moneda":
        data.inversiones_cuentas_valores.tipo_moneda.moneda = valor;
        break;
      case "tipo_operacion":
        data.inversiones_cuentas_valores.tipo_operacion = valor;
        break;
      case "tipo_operacion.codigo":
        data.inversiones_cuentas_valores.tipo_operacion.codigo = valor;
        break;
      case "tipo_operacion.valor":
        data.inversiones_cuentas_valores.tipo_operacion.valor = valor;
        break;
      case "titular_bien":
        data.inversiones_cuentas_valores.titular_bien = valor;
        break;
      case "titular_bien.codigo":
        data.inversiones_cuentas_valores.titular_bien.codigo = valor;
        break;
      case "titular_bien.valor":
        data.inversiones_cuentas_valores.titular_bien.valor = valor;
        break;
      case "unidad_medida_plazo":
        data.inversiones_cuentas_valores.unidad_medida_plazo = valor;
        break;
      case "unidad_medida_plazo.codigo":
        data.inversiones_cuentas_valores.unidad_medida_plazo.codigo = valor;
        break;
      case "unidad_medida_plazo.valor":
        data.inversiones_cuentas_valores.unidad_medida_plazo.valor = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.apoyos_beneficios_publicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataEfectivoMetales = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "forma_adquisicion":
        data.efectivo_metales.forma_adquisicion = valor;
        break;
      case "forma_adquisicion.codigo":
        data.efectivo_metales.forma_adquisicion.codigo = valor;
        break;
      case "forma_adquisicion.valor":
        data.efectivo_metales.forma_adquisicion.valor = valor;
        break;
      case "id":
        data.efectivo_metales.id = valor;
        break;
      case "monto":
        data.efectivo_metales.monto = valor;
        break;
      case "observaciones_comentarios":
        data.efectivo_metales.observaciones_comentarios = valor;
        break;
      case "tipo_metal":
        data.efectivo_metales.tipo_metal = valor;
        break;
      case "tipo_metal.codigo":
        data.efectivo_metales.tipo_metal.codigo = valor;
        break;
      case "tipo_metal.valor":
        data.efectivo_metales.tipo_metal.valor = valor;
        break;
      case "tipo_moneda":
        data.efectivo_metales.tipo_moneda = valor;
        break;
      case "tipo_moneda.codigo":
        data.efectivo_metales.tipo_moneda.codigo = valor;
        break;
      case "tipo_moneda.moneda":
        data.efectivo_metales.tipo_moneda.moneda = valor;
        break;
      case "tipo_operacion":
        data.efectivo_metales.tipo_operacion = valor;
        break;
      case "tipo_operacion.codigo":
        data.efectivo_metales.tipo_operacion.codigo = valor;
        break;
      case "tipo_operacion.valor":
        data.efectivo_metales.tipo_operacion.valor = valor;
        break;
      case "unidades":
        data.efectivo_metales.unidades = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.apoyos_beneficios_publicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataFideicomisos = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp_fideicomisario":
        data.fideicomisos.curp_fideicomisario = valor;
        break;
      case "curp_fideicomitente":
        data.fideicomisos.curp_fideicomitente = valor;
        break;
      case "curp_fiduciario":
        data.fideicomisos.curp_fiduciario = valor;
        break;
      case "domicilio_fideicomisario":
        data.fideicomisos.domicilio_fideicomisario = valor;
        break;
      case "domicilio_fideicomisario.cp":
        data.fideicomisos.domicilio_fideicomisario.cp = valor;
        break;
      case "domicilio_fideicomisario.entidad_federativa":
        data.fideicomisos.domicilio_fideicomisario.entidad_federativa = valor;
        break;
      case "domicilio_fideicomisario.entidad_federativa.cve_ent":
        data.fideicomisos.domicilio_fideicomisario.entidad_federativa.cve_ent = valor;
        break;
      case "domicilio_fideicomisario.entidad_federativa.nom_ent":
        data.fideicomisos.domicilio_fideicomisario.entidad_federativa.nom_ent = valor;
        break;
      case "domicilio_fideicomisario.localidad":
        data.fideicomisos.domicilio_fideicomisario.localidad = valor;
        break;
      case "domicilio_fideicomisario.localidad.cve_loc":
        data.fideicomisos.domicilio_fideicomisario.localidad.cve_loc = valor;
        break;
      case "domicilio_fideicomisario.localidad.nom_loc":
        data.fideicomisos.domicilio_fideicomisario.localidad.nom_loc = valor;
        break;
      case "domicilio_fideicomisario.municipio":
        data.fideicomisos.domicilio_fideicomisario.municipio = valor;
        break;
      case "domicilio_fideicomisario.municipio.cve_mun":
        data.fideicomisos.domicilio_fideicomisario.municipio.cve_mun = valor;
        break;
      case "domicilio_fideicomisario.municipio.nom_mun":
        data.fideicomisos.domicilio_fideicomisario.municipio.nom_mun = valor;
        break;
      case "domicilio_fideicomisario.numExt":
        data.fideicomisos.domicilio_fideicomisario.numExt = valor;
        break;
      case "domicilio_fideicomisario.numInt":
        data.fideicomisos.domicilio_fideicomisario.numInt = valor;
        break;
      case "domicilio_fideicomisario.pais":
        data.fideicomisos.domicilio_fideicomisario.pais = valor;
        break;
      case "domicilio_fideicomisario.pais.codigo":
        data.fideicomisos.domicilio_fideicomisario.pais.codigo = valor;
        break;
      case "domicilio_fideicomisario.pais.valor":
        data.fideicomisos.domicilio_fideicomisario.pais.valor = valor;
        break;
      case "domicilio_fideicomisario.vialidad":
        data.fideicomisos.domicilio_fideicomisario.vialidad = valor;
        break;
      case "domicilio_fideicomisario.vialidad.nom_vial":
        data.fideicomisos.domicilio_fideicomisario.vialidad.nom_vial = valor;
        break;
      case "domicilio_fideicomisario.vialidad.tipo_vial":
        data.fideicomisos.domicilio_fideicomisario.vialidad.tipo_vial = valor;
        break;
      case "domicilio_fideicomitente":
        data.fideicomisos.domicilio_fideicomitente = valor;
        break;
      case "domicilio_fideicomitente.cp":
        data.fideicomisos.domicilio_fideicomitente.cp = valor;
        break;
      case "domicilio_fideicomitente.entidad_federativa":
        data.fideicomisos.domicilio_fideicomitente.entidad_federativa = valor;
        break;
      case "domicilio_fideicomitente.entidad_federativa.cve_ent":
        data.fideicomisos.domicilio_fideicomitente.entidad_federativa.cve_ent = valor;
        break;
      case "domicilio_fideicomitente.entidad_federativa.nom_ent":
        data.fideicomisos.domicilio_fideicomitente.entidad_federativa.nom_ent = valor;
        break;
      case "domicilio_fideicomitente.localidad":
        data.fideicomisos.domicilio_fideicomitente.localidad = valor;
        break;
      case "domicilio_fideicomitente.localidad.cve_loc":
        data.fideicomisos.domicilio_fideicomitente.localidad.cve_loc = valor;
        break;
      case "domicilio_fideicomitente.localidad.nom_loc":
        data.fideicomisos.domicilio_fideicomitente.localidad.nom_loc = valor;
        break;
      case "domicilio_fideicomitente.municipio":
        data.fideicomisos.domicilio_fideicomitente.municipio = valor;
        break;
      case "domicilio_fideicomitente.municipio.cve_mun":
        data.fideicomisos.domicilio_fideicomitente.municipio.cve_mun = valor;
        break;
      case "domicilio_fideicomitente.municipio.nom_mun":
        data.fideicomisos.domicilio_fideicomitente.municipio.nom_mun = valor;
        break;
      case "domicilio_fideicomitente.numExt":
        data.fideicomisos.domicilio_fideicomitente.numExt = valor;
        break;
      case "domicilio_fideicomitente.numInt":
        data.fideicomisos.domicilio_fideicomitente.numInt = valor;
        break;
      case "domicilio_fideicomitente.pais":
        data.fideicomisos.domicilio_fideicomitente.pais = valor;
        break;
      case "domicilio_fideicomitente.pais.codigo":
        data.fideicomisos.domicilio_fideicomitente.pais.codigo = valor;
        break;
      case "domicilio_fideicomitente.pais.valor":
        data.fideicomisos.domicilio_fideicomitente.pais.valor = valor;
        break;
      case "domicilio_fideicomitente.vialidad":
        data.fideicomisos.domicilio_fideicomitente.vialidad = valor;
        break;
      case "domicilio_fideicomitente.vialidad.nom_vial":
        data.fideicomisos.domicilio_fideicomitente.vialidad.nom_vial = valor;
        break;
      case "domicilio_fideicomitente.vialidad.tipo_vial":
        data.fideicomisos.domicilio_fideicomitente.vialidad.tipo_vial = valor;
        break;
      case "domicilio_fiduciario":
        data.fideicomisos.domicilio_fiduciario = valor;
        break;
      case "domicilio_fiduciario.cp":
        data.fideicomisos.domicilio_fiduciario.cp = valor;
        break;
      case "domicilio_fiduciario.entidad_federativa":
        data.fideicomisos.domicilio_fiduciario.entidad_federativa = valor;
        break;
      case "domicilio_fiduciario.entidad_federativa.cve_ent":
        data.fideicomisos.domicilio_fiduciario.entidad_federativa.cve_ent = valor;
        break;
      case "domicilio_fiduciario.entidad_federativa.nom_ent":
        data.fideicomisos.domicilio_fiduciario.entidad_federativa.nom_ent = valor;
        break;
      case "domicilio_fiduciario.localidad":
        data.fideicomisos.domicilio_fiduciario.localidad = valor;
        break;
      case "domicilio_fiduciario.localidad.cve_loc":
        data.fideicomisos.domicilio_fiduciario.localidad.cve_loc = valor;
        break;
      case "domicilio_fiduciario.localidad.nom_loc":
        data.fideicomisos.domicilio_fiduciario.localidad.nom_loc = valor;
        break;
      case "domicilio_fiduciario.municipio":
        data.fideicomisos.domicilio_fiduciario.municipio = valor;
        break;
      case "domicilio_fiduciario.municipio.cve_mun":
        data.fideicomisos.domicilio_fiduciario.municipio.cve_mun = valor;
        break;
      case "domicilio_fiduciario.municipio.nom_mun":
        data.fideicomisos.domicilio_fiduciario.municipio.nom_mun = valor;
        break;
      case "domicilio_fiduciario.numExt":
        data.fideicomisos.domicilio_fiduciario.numExt = valor;
        break;
      case "domicilio_fiduciario.numInt":
        data.fideicomisos.domicilio_fiduciario.numInt = valor;
        break;
      case "domicilio_fiduciario.pais":
        data.fideicomisos.domicilio_fiduciario.pais = valor;
        break;
      case "domicilio_fiduciario.pais.codigo":
        data.fideicomisos.domicilio_fiduciario.pais.codigo = valor;
        break;
      case "domicilio_fiduciario.pais.valor":
        data.fideicomisos.domicilio_fiduciario.pais.valor = valor;
        break;
      case "domicilio_fiduciario.vialidad":
        data.fideicomisos.domicilio_fiduciario.vialidad = valor;
        break;
      case "domicilio_fiduciario.vialidad.nom_vial":
        data.fideicomisos.domicilio_fiduciario.vialidad.nom_vial = valor;
        break;
      case "domicilio_fiduciario.vialidad.tipo_vial":
        data.fideicomisos.domicilio_fiduciario.vialidad.tipo_vial = valor;
        break;
      case "fecha_creacion":
        data.fideicomisos.fecha_creacion = valor;
        break;
      case "fecha_nacimiento_constitucion_fideicomisario":
        data.fideicomisos.fecha_nacimiento_constitucion_fideicomisario = valor;
        break;
      case "fecha_nacimiento_constitucion_fideicomitente":
        data.fideicomisos.fecha_nacimiento_constitucion_fideicomitente = valor;
        break;
      case "fecha_nacimiento_constitucion_fiduciario":
        data.fideicomisos.fecha_nacimiento_constitucion_fiduciario = valor;
        break;
      case "id":
        data.fideicomisos.id = valor;
        break;
      case "identificador_fideicomiso":
        data.fideicomisos.identificador_fideicomiso = valor;
        break;
      case "ingreso_monetario_obtenido":
        data.fideicomisos.ingreso_monetario_obtenido = valor;
        break;
      case "institucion_fiduciaria":
        data.fideicomisos.institucion_fiduciaria = valor;
        break;
      case "moneda":
        data.fideicomisos.moneda = valor;
        break;
      case "moneda.codigo":
        data.fideicomisos.moneda.codigo = valor;
        break;
      case "moneda.moneda":
        data.fideicomisos.moneda.moneda = valor;
        break;
      case "nombre_fideicomisario":
        data.fideicomisos.nombre_fideicomisario = valor;
        break;
      case "nombre_fideicomitente":
        data.fideicomisos.nombre_fideicomitente = valor;
        break;
      case "nombre_fiduciario":
        data.fideicomisos.nombre_fiduciario = valor;
        break;
      case "numero_registro":
        data.fideicomisos.numero_registro = valor;
        break;
      case "objetivo":
        data.fideicomisos.objetivo = valor;
        break;
      case "observaciones":
        data.fideicomisos.observaciones = valor;
        break;
      case "porcentaje_propiedad_derechos_fiduciarios":
        data.fideicomisos.porcentaje_propiedad_derechos_fiduciarios = valor;
        break;
      case "residencia":
        data.fideicomisos.residencia = valor;
        break;
      case "residencia.codigo":
        data.fideicomisos.residencia.codigo = valor;
        break;
      case "residencia.valor":
        data.fideicomisos.residencia.valor = valor;
        break;
      case "rfc_fideicomitente":
        data.fideicomisos.rfc_fideicomitente = valor;
        break;
      case "rfc_fideicomsario":
        data.fideicomisos.rfc_fideicomsario = valor;
        break;
      case "rfc_fiduciario":
        data.fideicomisos.rfc_fiduciario = valor;
        break;
      case "tipo_fideicomiso":
        data.fideicomisos.tipo_fideicomiso = valor;
        break;
      case "tipo_fideicomiso.codigo":
        data.fideicomisos.tipo_fideicomiso.codigo = valor;
        break;
      case "tipo_fideicomiso.valor":
        data.fideicomisos.tipo_fideicomiso.valor = valor;
        break;
      case "tipo_operacion":
        data.fideicomisos.tipo_operacion = valor;
        break;
      case "tipo_operacion.codigo":
        data.fideicomisos.tipo_operacion.codigo = valor;
        break;
      case "tipo_operacion.valor":
        data.fideicomisos.tipo_operacion.valor = valor;
        break;
      case "valor":
        data.fideicomisos.valor = valor;
        break;
      case "vigencia":
        data.fideicomisos.vigencia = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.apoyos_beneficios_publicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataBienesIntangibles = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "descripcion":
        data.bienes_intangibles.descripcion = valor;
        break;
      case "ente_publico_encargado":
        data.bienes_intangibles.ente_publico_encargado = valor;
        break;
      case "ente_publico_encargado.nombres":
        data.bienes_intangibles.ente_publico_encargado.nombres = valor;
        break;
      case "ente_publico_encargado.primer_apellido":
        data.bienes_intangibles.ente_publico_encargado.primer_apellido = valor;
        break;
      case "ente_publico_encargado.segundo_apellido":
        data.bienes_intangibles.ente_publico_encargado.segundo_apellido = valor;
        break;
      case "fecha_registro":
        data.bienes_intangibles.fecha_registro = valor;
        break;
      case "fecha_vencimiento":
        data.bienes_intangibles.fecha_vencimiento = valor;
        break;
      case "forma_adquisicion":
        data.bienes_intangibles.forma_adquisicion = valor;
        break;
      case "forma_adquisicion.codigo":
        data.bienes_intangibles.forma_adquisicion.codigo = valor;
        break;
      case "forma_adquisicion.valor":
        data.bienes_intangibles.forma_adquisicion.valor = valor;
        break;
      case "id":
        data.bienes_intangibles.id = valor;
        break;
      case "nombre_copropietario":
        data.bienes_intangibles.nombre_copropietario = valor;
        break;
      case "numero_registro":
        data.bienes_intangibles.numero_registro = valor;
        break;
      case "observaciones":
        data.bienes_intangibles.observaciones = valor;
        break;
      case "porcentaje_copropiedad":
        data.bienes_intangibles.porcentaje_copropiedad = valor;
        break;
      case "porcentaje_propiedad_copropietario":
        data.bienes_intangibles.porcentaje_propiedad_copropietario = valor;
        break;
      case "precio_adquisicion":
        data.bienes_intangibles.precio_adquisicion = valor;
        break;
      case "precio_adquisicion.moneda":
        data.bienes_intangibles.precio_adquisicion.moneda = valor;
        break;
      case "precio_adquisicion.moneda.codigo":
        data.bienes_intangibles.precio_adquisicion.moneda.codigo = valor;
        break;
      case "precio_adquisicion.moneda.moneda":
        data.bienes_intangibles.precio_adquisicion.moneda.moneda = valor;
        break;
      case "precio_adquisicion.valor":
        data.bienes_intangibles.precio_adquisicion.valor = valor;
        break;
      case "precio_total_copropiedad":
        data.bienes_intangibles.precio_total_copropiedad = valor;
        break;
      case "precio_total_copropiedad.moneda":
        data.bienes_intangibles.precio_total_copropiedad.moneda = valor;
        break;
      case "precio_total_copropiedad.moneda.codigo":
        data.bienes_intangibles.precio_total_copropiedad.moneda.codigo = valor;
        break;
      case "precio_total_copropiedad.moneda.moneda":
        data.bienes_intangibles.precio_total_copropiedad.moneda.moneda = valor;
        break;
      case "precio_total_copropiedad.valor":
        data.bienes_intangibles.precio_total_copropiedad.valor = valor;
        break;
      case "propietario_registrado":
        data.bienes_intangibles.propietario_registrado = valor;
        break;
      case "sector_industria":
        data.bienes_intangibles.sector_industria = valor;
        break;
      case "sector_industria.codigo":
        data.bienes_intangibles.sector_industria.codigo = valor;
        break;
      case "sector_industria.valor":
        data.bienes_intangibles.sector_industria.valor = valor;
        break;
      case "tipo_operacion":
        data.bienes_intangibles.tipo_operacion = valor;
        break;
      case "tipo_operacion.codigo":
        data.bienes_intangibles.tipo_operacion.codigo = valor;
        break;
      case "tipo_operacion.valor":
        data.bienes_intangibles.tipo_operacion.valor = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.apoyos_beneficios_publicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataCuentasPorCobrar = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "domicilio_prestatarios":
        data.cuentas_por_cobrar.domicilio_prestatarios = valor;
        break;
      case "domicilio_prestatarios.cp":
        data.cuentas_por_cobrar.domicilio_prestatarios.cp = valor;
        break;
      case "domicilio_prestatarios.entidad_federativa":
        data.cuentas_por_cobrar.domicilio_prestatarios.entidad_federativa = valor;
        break;
      case "domicilio_prestatarios.entidad_federativa.cve_ent":
        data.cuentas_por_cobrar.domicilio_prestatarios.entidad_federativa.cve_ent = valor;
        break;
      case "domicilio_prestatarios.entidad_federativa.nom_ent":
        data.cuentas_por_cobrar.domicilio_prestatarios.entidad_federativa.nom_ent = valor;
        break;
      case "domicilio_prestatarios.localidad":
        data.cuentas_por_cobrar.domicilio_prestatarios.localidad = valor;
        break;
      case "domicilio_prestatarios.localidad.cve_loc":
        data.cuentas_por_cobrar.domicilio_prestatarios.localidad.cve_loc = valor;
        break;
      case "domicilio_prestatarios.localidad.nom_loc":
        data.cuentas_por_cobrar.domicilio_prestatarios.localidad.nom_loc = valor;
        break;
      case "domicilio_prestatarios.municipio":
        data.cuentas_por_cobrar.domicilio_prestatarios.municipio = valor;
        break;
      case "domicilio_prestatarios.municipio.cve_mun":
        data.cuentas_por_cobrar.domicilio_prestatarios.municipio.cve_mun = valor;
        break;
      case "domicilio_prestatarios.municipio.nom_mun":
        data.cuentas_por_cobrar.domicilio_prestatarios.municipio.nom_mun = valor;
        break;
      case "domicilio_prestatarios.numExt":
        data.cuentas_por_cobrar.domicilio_prestatarios.numExt = valor;
        break;
      case "domicilio_prestatarios.numInt":
        data.cuentas_por_cobrar.domicilio_prestatarios.numInt = valor;
        break;
      case "domicilio_prestatarios.pais":
        data.cuentas_por_cobrar.domicilio_prestatarios.pais = valor;
        break;
      case "domicilio_prestatarios.pais.codigo":
        data.cuentas_por_cobrar.domicilio_prestatarios.pais.codigo = valor;
        break;
      case "domicilio_prestatarios.pais.valor":
        data.cuentas_por_cobrar.domicilio_prestatarios.pais.valor = valor;
        break;
      case "domicilio_prestatarios.vialidad":
        data.cuentas_por_cobrar.domicilio_prestatarios.vialidad = valor;
        break;
      case "domicilio_prestatarios.vialidad.nom_vial":
        data.cuentas_por_cobrar.domicilio_prestatarios.vialidad.nom_vial = valor;
        break;
      case "domicilio_prestatarios.vialidad.tipo_vial":
        data.cuentas_por_cobrar.domicilio_prestatarios.vialidad.tipo_vial = valor;
        break;
      case "fecha_prestamo":
        data.cuentas_por_cobrar.fecha_prestamo = valor;
        break;
      case "fecha_vencimiento":
        data.cuentas_por_cobrar.fecha_vencimiento = valor;
        break;
      case "id":
        data.cuentas_por_cobrar.id = valor;
        break;
      case "monto_original_prestamo":
        data.cuentas_por_cobrar.monto_original_prestamo = valor;
        break;
      case "nombre_copropietario":
        data.cuentas_por_cobrar.nombre_copropietario = valor;
        break;
      case "nombre_prestatario":
        data.cuentas_por_cobrar.nombre_prestatario = valor;
        break;
      case "numero_registro":
        data.cuentas_por_cobrar.numero_registro = valor;
        break;
      case "observaciones":
        data.cuentas_por_cobrar.observaciones = valor;
        break;
      case "porcentaje_copropiedad":
        data.cuentas_por_cobrar.porcentaje_copropiedad = valor;
        break;
      case "saldo_pendiente":
        data.cuentas_por_cobrar.saldo_pendiente = valor;
        break;
      case "sector_industria":
        data.cuentas_por_cobrar.sector_industria = valor;
        break;
      case "sector_industria.codigo":
        data.cuentas_por_cobrar.sector_industria.codigo = valor;
        break;
      case "sector_industria.valor":
        data.cuentas_por_cobrar.sector_industria.valor = valor;
        break;
      case "tasa_interes":
        data.cuentas_por_cobrar.tasa_interes = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.apoyos_beneficios_publicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataUsoEspeciePropiedadTercero = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp_tercero_propietario":
        data.uso_especie_propiedad_tercero.curp_tercero_propietario = valor;
        break;
      case "domicilio_persona":
        data.uso_especie_propiedad_tercero.domicilio_persona = valor;
        break;
      case "domicilio_persona.cp":
        data.uso_especie_propiedad_tercero.domicilio_persona.cp = valor;
        break;
      case "domicilio_persona.entidad_federativa":
        data.uso_especie_propiedad_tercero.domicilio_persona.entidad_federativa = valor;
        break;
      case "domicilio_persona.entidad_federativa.cve_ent":
        data.uso_especie_propiedad_tercero.domicilio_persona.entidad_federativa.cve_ent = valor;
        break;
      case "domicilio_persona.entidad_federativa.nom_ent":
        data.uso_especie_propiedad_tercero.domicilio_persona.entidad_federativa.nom_ent = valor;
        break;
      case "domicilio_persona.localidad":
        data.uso_especie_propiedad_tercero.domicilio_persona.localidad = valor;
        break;
      case "domicilio_persona.localidad.cve_loc":
        data.uso_especie_propiedad_tercero.domicilio_persona.localidad.cve_loc = valor;
        break;
      case "domicilio_persona.localidad.nom_loc":
        data.uso_especie_propiedad_tercero.domicilio_persona.localidad.nom_loc = valor;
        break;
      case "domicilio_persona.municipio":
        data.uso_especie_propiedad_tercero.domicilio_persona.municipio = valor;
        break;
      case "domicilio_persona.municipio.cve_mun":
        data.uso_especie_propiedad_tercero.domicilio_persona.municipio.cve_mun = valor;
        break;
      case "domicilio_persona.municipio.nom_mun":
        data.uso_especie_propiedad_tercero.domicilio_persona.municipio.nom_mun = valor;
        break;
      case "domicilio_persona.numExt":
        data.uso_especie_propiedad_tercero.domicilio_persona.numExt = valor;
        break;
      case "domicilio_persona.numInt":
        data.uso_especie_propiedad_tercero.domicilio_persona.numInt = valor;
        break;
      case "domicilio_persona.pais":
        data.uso_especie_propiedad_tercero.domicilio_persona.pais = valor;
        break;
      case "domicilio_persona.pais.codigo":
        data.uso_especie_propiedad_tercero.domicilio_persona.pais.codigo = valor;
        break;
      case "domicilio_persona.pais.valor":
        data.uso_especie_propiedad_tercero.domicilio_persona.pais.valor = valor;
        break;
      case "domicilio_persona.vialidad":
        data.uso_especie_propiedad_tercero.domicilio_persona.vialidad = valor;
        break;
      case "domicilio_persona.vialidad.nom_vial":
        data.uso_especie_propiedad_tercero.domicilio_persona.vialidad.nom_vial = valor;
        break;
      case "domicilio_persona.vialidad.tipo_vial":
        data.uso_especie_propiedad_tercero.domicilio_persona.vialidad.tipo_vial = valor;
        break;
      case "fecha_inicio":
        data.uso_especie_propiedad_tercero.fecha_inicio = valor;
        break;
      case "id":
        data.uso_especie_propiedad_tercero.id = valor;
        break;
      case "nombre_tercero_propietario":
        data.uso_especie_propiedad_tercero.nombre_tercero_propietario = valor;
        break;
      case "observaciones":
        data.uso_especie_propiedad_tercero.observaciones = valor;
        break;
      case "relacion_persona":
        data.uso_especie_propiedad_tercero.relacion_persona = valor;
        break;
      case "relacion_persona.codigo":
        data.uso_especie_propiedad_tercero.relacion_persona.codigo = valor;
        break;
      case "relacion_persona.valor":
        data.uso_especie_propiedad_tercero.relacion_persona.valor = valor;
        break;
      case "rfc_tercero_propietario":
        data.uso_especie_propiedad_tercero.rfc_tercero_propietario = valor;
        break;
      case "sector_industria":
        data.uso_especie_propiedad_tercero.sector_industria = valor;
        break;
      case "sector_industria.codigo":
        data.uso_especie_propiedad_tercero.sector_industria.codigo = valor;
        break;
      case "sector_industria.valor":
        data.uso_especie_propiedad_tercero.sector_industria.valor = valor;
        break;
      case "tipo_bien":
        data.uso_especie_propiedad_tercero.tipo_bien = valor;
        break;
      case "tipo_bien.codigo":
        data.uso_especie_propiedad_tercero.tipo_bien.codigo = valor;
        break;
      case "tipo_bien.valor":
        data.uso_especie_propiedad_tercero.tipo_bien.valor = valor;
        break;
      case "valor_mercado":
        data.uso_especie_propiedad_tercero.valor_mercado = valor;
        break;
      case "valor_mercado.moneda":
        data.uso_especie_propiedad_tercero.valor_mercado.moneda = valor;
        break;
      case "valor_mercado.moneda.codigo":
        data.uso_especie_propiedad_tercero.valor_mercado.moneda.codigo = valor;
        break;
      case "valor_mercado.moneda.moneda":
        data.uso_especie_propiedad_tercero.valor_mercado.moneda.moneda = valor;
        break;
      case "valor_mercado.valor":
        data.uso_especie_propiedad_tercero.valor_mercado.valor = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.apoyos_beneficios_publicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataUsoEspeciePropiedadTercero = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp_tercero_propietario":
        data.uso_especie_propiedad_tercero.curp_tercero_propietario = valor;
        break;
      case "domicilio_persona":
        data.uso_especie_propiedad_tercero.domicilio_persona = valor;
        break;
      case "domicilio_persona.cp":
        data.uso_especie_propiedad_tercero.domicilio_persona.cp = valor;
        break;
      case "domicilio_persona.entidad_federativa":
        data.uso_especie_propiedad_tercero.domicilio_persona.entidad_federativa = valor;
        break;
      case "domicilio_persona.entidad_federativa.cve_ent":
        data.uso_especie_propiedad_tercero.domicilio_persona.entidad_federativa.cve_ent = valor;
        break;
      case "domicilio_persona.entidad_federativa.nom_ent":
        data.uso_especie_propiedad_tercero.domicilio_persona.entidad_federativa.nom_ent = valor;
        break;
      case "domicilio_persona.localidad":
        data.uso_especie_propiedad_tercero.domicilio_persona.localidad = valor;
        break;
      case "domicilio_persona.localidad.cve_loc":
        data.uso_especie_propiedad_tercero.domicilio_persona.localidad.cve_loc = valor;
        break;
      case "domicilio_persona.localidad.nom_loc":
        data.uso_especie_propiedad_tercero.domicilio_persona.localidad.nom_loc = valor;
        break;
      case "domicilio_persona.municipio":
        data.uso_especie_propiedad_tercero.domicilio_persona.municipio = valor;
        break;
      case "domicilio_persona.municipio.cve_mun":
        data.uso_especie_propiedad_tercero.domicilio_persona.municipio.cve_mun = valor;
        break;
      case "domicilio_persona.municipio.nom_mun":
        data.uso_especie_propiedad_tercero.domicilio_persona.municipio.nom_mun = valor;
        break;
      case "domicilio_persona.numExt":
        data.uso_especie_propiedad_tercero.domicilio_persona.numExt = valor;
        break;
      case "domicilio_persona.numInt":
        data.uso_especie_propiedad_tercero.domicilio_persona.numInt = valor;
        break;
      case "domicilio_persona.pais":
        data.uso_especie_propiedad_tercero.domicilio_persona.pais = valor;
        break;
      case "domicilio_persona.pais.codigo":
        data.uso_especie_propiedad_tercero.domicilio_persona.pais.codigo = valor;
        break;
      case "domicilio_persona.pais.valor":
        data.uso_especie_propiedad_tercero.domicilio_persona.pais.valor = valor;
        break;
      case "domicilio_persona.vialidad":
        data.uso_especie_propiedad_tercero.domicilio_persona.vialidad = valor;
        break;
      case "domicilio_persona.vialidad.nom_vial":
        data.uso_especie_propiedad_tercero.domicilio_persona.vialidad.nom_vial = valor;
        break;
      case "domicilio_persona.vialidad.tipo_vial":
        data.uso_especie_propiedad_tercero.domicilio_persona.vialidad.tipo_vial = valor;
        break;
      case "fecha_inicio":
        data.uso_especie_propiedad_tercero.fecha_inicio = valor;
        break;
      case "id":
        data.uso_especie_propiedad_tercero.id = valor;
        break;
      case "nombre_tercero_propietario":
        data.uso_especie_propiedad_tercero.nombre_tercero_propietario = valor;
        break;
      case "observaciones":
        data.uso_especie_propiedad_tercero.observaciones = valor;
        break;
      case "relacion_persona":
        data.uso_especie_propiedad_tercero.relacion_persona = valor;
        break;
      case "relacion_persona.codigo":
        data.uso_especie_propiedad_tercero.relacion_persona.codigo = valor;
        break;
      case "relacion_persona.valor":
        data.uso_especie_propiedad_tercero.relacion_persona.valor = valor;
        break;
      case "rfc_tercero_propietario":
        data.uso_especie_propiedad_tercero.rfc_tercero_propietario = valor;
        break;
      case "sector_industria":
        data.uso_especie_propiedad_tercero.sector_industria = valor;
        break;
      case "sector_industria.codigo":
        data.uso_especie_propiedad_tercero.sector_industria.codigo = valor;
        break;
      case "sector_industria.valor":
        data.uso_especie_propiedad_tercero.sector_industria.valor = valor;
        break;
      case "tipo_bien":
        data.uso_especie_propiedad_tercero.tipo_bien = valor;
        break;
      case "tipo_bien.codigo":
        data.uso_especie_propiedad_tercero.tipo_bien.codigo = valor;
        break;
      case "tipo_bien.valor":
        data.uso_especie_propiedad_tercero.tipo_bien.valor = valor;
        break;
      case "valor_mercado":
        data.uso_especie_propiedad_tercero.valor_mercado = valor;
        break;
      case "valor_mercado.moneda":
        data.uso_especie_propiedad_tercero.valor_mercado.moneda = valor;
        break;
      case "valor_mercado.moneda.codigo":
        data.uso_especie_propiedad_tercero.valor_mercado.moneda.codigo = valor;
        break;
      case "valor_mercado.moneda.moneda":
        data.uso_especie_propiedad_tercero.valor_mercado.moneda.moneda = valor;
        break;
      case "valor_mercado.valor":
        data.uso_especie_propiedad_tercero.valor_mercado.valor = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.apoyos_beneficios_publicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataDeudas = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "domicilio_acreedor":
        data.deudas.domicilio_acreedor = valor;
        break;
      case "domicilio_acreedor.cp":
        data.deudas.domicilio_acreedor.cp = valor;
        break;
      case "domicilio_acreedor.entidad_federativa":
        data.deudas.domicilio_acreedor.entidad_federativa = valor;
        break;
      case "domicilio_acreedor.entidad_federativa.cve_ent":
        data.deudas.domicilio_acreedor.entidad_federativa.cve_ent = valor;
        break;
      case "domicilio_acreedor.entidad_federativa.nom_ent":
        data.deudas.domicilio_acreedor.entidad_federativa.nom_ent = valor;
        break;
      case "domicilio_acreedor.localidad":
        data.deudas.domicilio_acreedor.localidad = valor;
        break;
      case "domicilio_acreedor.localidad.cve_loc":
        data.deudas.domicilio_acreedor.localidad.cve_loc = valor;
        break;
      case "domicilio_acreedor.localidad.nom_loc":
        data.deudas.domicilio_acreedor.localidad.nom_loc = valor;
        break;
      case "domicilio_acreedor.municipio":
        data.deudas.domicilio_acreedor.municipio = valor;
        break;
      case "domicilio_acreedor.municipio.cve_mun":
        data.deudas.domicilio_acreedor.municipio.cve_mun = valor;
        break;
      case "domicilio_acreedor.municipio.nom_mun":
        data.deudas.domicilio_acreedor.municipio.nom_mun = valor;
        break;
      case "domicilio_acreedor.numExt":
        data.deudas.domicilio_acreedor.numExt = valor;
        break;
      case "domicilio_acreedor.numInt":
        data.deudas.domicilio_acreedor.numInt = valor;
        break;
      case "domicilio_acreedor.pais":
        data.deudas.domicilio_acreedor.pais = valor;
        break;
      case "domicilio_acreedor.pais.codigo":
        data.deudas.domicilio_acreedor.pais.codigo = valor;
        break;
      case "domicilio_acreedor.pais.valor":
        data.deudas.domicilio_acreedor.pais.valor = valor;
        break;
      case "domicilio_acreedor.vialidad":
        data.deudas.domicilio_acreedor.vialidad = valor;
        break;
      case "domicilio_acreedor.vialidad.nom_vial":
        data.deudas.domicilio_acreedor.vialidad.nom_vial = valor;
        break;
      case "domicilio_acreedor.vialidad.tipo_vial":
        data.deudas.domicilio_acreedor.vialidad.tipo_vial = valor;
        break;
      case "fecha_adeudo":
        data.deudas.fecha_adeudo = valor;
        break;
      case "garantia":
        data.deudas.garantia = valor;
        break;
      case "id":
        data.deudas.id = valor;
        break;
      case "identificador_deuda":
        data.deudas.identificador_deuda = valor;
        break;
      case "monto_original":
        data.deudas.monto_original = valor;
        break;
      case "montos_abonados":
        data.deudas.montos_abonados = valor;
        break;
      case "nacional_extranjero":
        data.deudas.nacional_extranjero = valor;
        break;
      case "nacional_extranjero.codigo":
        data.deudas.nacional_extranjero.codigo = valor;
        break;
      case "nacional_extranjero.valor":
        data.deudas.nacional_extranjero.valor = valor;
        break;
      case "nombre_acreedor":
        data.deudas.nombre_acreedor = valor;
        break;
      case "nombre_garante":
        data.deudas.nombre_garante = valor;
        break;
      case "observaciones":
        data.deudas.observaciones = valor;
        break;
      case "plazo_adeudo":
        data.deudas.plazo_adeudo = valor;
        break;
      case "porcentaje_adeudo_titular":
        data.deudas.porcentaje_adeudo_titular = valor;
        break;
      case "rfc_acreedor":
        data.deudas.rfc_acreedor = valor;
        break;
      case "saldo_pendiente":
        data.deudas.saldo_pendiente = valor;
        break;
      case "sector_industria":
        data.deudas.sector_industria = valor;
        break;
      case "sector_industria.codigo":
        data.deudas.sector_industria.codigo = valor;
        break;
      case "sector_industria.valor":
        data.deudas.sector_industria.valor = valor;
        break;
      case "tasa_interes":
        data.deudas.tasa_interes = valor;
        break;
      case "tipo_acreedor":
        data.deudas.tipo_acreedor = valor;
        break;
      case "tipo_acreedor.codigo":
        data.deudas.tipo_acreedor.codigo = valor;
        break;
      case "tipo_acreedor.valor":
        data.deudas.tipo_acreedor.valor = valor;
        break;
      case "tipo_adeudo":
        data.deudas.tipo_adeudo = valor;
        break;
      case "tipo_adeudo.codigo":
        data.deudas.tipo_adeudo.codigo = valor;
        break;
      case "tipo_adeudo.valor":
        data.deudas.tipo_adeudo.valor = valor;
        break;
      case "tipo_moneda":
        data.deudas.tipo_moneda = valor;
        break;
      case "tipo_moneda.codigo":
        data.deudas.tipo_moneda.codigo = valor;
        break;
      case "tipo_moneda.moneda":
        data.deudas.tipo_moneda.moneda = valor;
        break;
      case "tipo_operacion":
        data.deudas.tipo_operacion = valor;
        break;
      case "tipo_operacion.codigo":
        data.deudas.tipo_operacion.codigo = valor;
        break;
      case "tipo_operacion.valor":
        data.deudas.tipo_operacion.valor = valor;
        break;
      case "titularidad_deuda":
        data.deudas.titularidad_deuda = valor;
        break;
      case "titularidad_deuda.codigo":
        data.deudas.titularidad_deuda.codigo = valor;
        break;
      case "titularidad_deuda.valor":
        data.deudas.titularidad_deuda.valor = valor;
        break;
      case "unidad_medida_adeudo":
        data.deudas.unidad_medida_adeudo = valor;
        break;
      case "unidad_medida_adeudo.codigo":
        data.deudas.unidad_medida_adeudo.codigo = valor;
        break;
      case "unidad_medida_adeudo.valor":
        data.deudas.unidad_medida_adeudo.valor = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.apoyos_beneficios_publicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
  };

  setDataOtrasObligaciones = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "domicilio_acreedor":
        data.otras_obligaciones.domicilio_acreedor = valor;
        break;
      case "domicilio_acreedor.cp":
        data.otras_obligaciones.domicilio_acreedor.cp = valor;
        break;
      case "domicilio_acreedor.entidad_federativa":
        data.otras_obligaciones.domicilio_acreedor.entidad_federativa = valor;
        break;
      case "domicilio_acreedor.entidad_federativa.cve_ent":
        data.otras_obligaciones.domicilio_acreedor.entidad_federativa.cve_ent = valor;
        break;
      case "domicilio_acreedor.entidad_federativa.nom_ent":
        data.otras_obligaciones.domicilio_acreedor.entidad_federativa.nom_ent = valor;
        break;
      case "domicilio_acreedor.localidad":
        data.otras_obligaciones.domicilio_acreedor.localidad = valor;
        break;
      case "domicilio_acreedor.localidad.cve_loc":
        data.otras_obligaciones.domicilio_acreedor.localidad.cve_loc = valor;
        break;
      case "domicilio_acreedor.localidad.nom_loc":
        data.otras_obligaciones.domicilio_acreedor.localidad.nom_loc = valor;
        break;
      case "domicilio_acreedor.municipio":
        data.otras_obligaciones.domicilio_acreedor.municipio = valor;
        break;
      case "domicilio_acreedor.municipio.cve_mun":
        data.otras_obligaciones.domicilio_acreedor.municipio.cve_mun = valor;
        break;
      case "domicilio_acreedor.municipio.nom_mun":
        data.otras_obligaciones.domicilio_acreedor.municipio.nom_mun = valor;
        break;
      case "domicilio_acreedor.numExt":
        data.otras_obligaciones.domicilio_acreedor.numExt = valor;
        break;
      case "domicilio_acreedor.numInt":
        data.otras_obligaciones.domicilio_acreedor.numInt = valor;
        break;
      case "domicilio_acreedor.pais":
        data.otras_obligaciones.domicilio_acreedor.pais = valor;
        break;
      case "domicilio_acreedor.pais.codigo":
        data.otras_obligaciones.domicilio_acreedor.pais.codigo = valor;
        break;
      case "domicilio_acreedor.pais.valor":
        data.otras_obligaciones.domicilio_acreedor.pais.valor = valor;
        break;
      case "domicilio_acreedor.vialidad":
        data.otras_obligaciones.domicilio_acreedor.vialidad = valor;
        break;
      case "domicilio_acreedor.vialidad.nom_vial":
        data.otras_obligaciones.domicilio_acreedor.vialidad.nom_vial = valor;
        break;
      case "domicilio_acreedor.vialidad.tipo_vial":
        data.otras_obligaciones.domicilio_acreedor.vialidad.tipo_vial = valor;
        break;
      case "fecha_obligacion":
        data.otras_obligaciones.fecha_obligacion = valor;
        break;
      case "garantia":
        data.otras_obligaciones.garantia = valor;
        break;
      case "id":
        data.otras_obligaciones.id = valor;
        break;
      case "identificador_obligacion":
        data.otras_obligaciones.identificador_obligacion = valor;
        break;
      case "monto_original":
        data.otras_obligaciones.monto_original = valor;
        break;
      case "montos_abonados":
        data.otras_obligaciones.montos_abonados = valor;
        break;
      case "nacional_extranjero":
        data.otras_obligaciones.nacional_extranjero = valor;
        break;
      case "nacional_extranjero.codigo":
        data.otras_obligaciones.nacional_extranjero.codigo = valor;
        break;
      case "nacional_extranjero.valor":
        data.otras_obligaciones.nacional_extranjero.valor = valor;
        break;
      case "nombre_acreedor":
        data.otras_obligaciones.nombre_acreedor = valor;
        break;
      case "observaciones":
        data.otras_obligaciones.observaciones = valor;
        break;
      case "plazo_obligacion":
        data.otras_obligaciones.plazo_obligacion = valor;
        break;
      case "porcentaje_obligacion_titular":
        data.otras_obligaciones.porcentaje_obligacion_titular = valor;
        break;
      case "rfc_acreedor":
        data.otras_obligaciones.rfc_acreedor = valor;
        break;
      case "saldo_pendiente":
        data.otras_obligaciones.saldo_pendiente = valor;
        break;
      case "sector_industria":
        data.otras_obligaciones.sector_industria = valor;
        break;
      case "sector_industria.codigo":
        data.otras_obligaciones.sector_industria.codigo = valor;
        break;
      case "sector_industria.valor":
        data.otras_obligaciones.sector_industria.valor = valor;
        break;
      case "tasa_interes":
        data.otras_obligaciones.tasa_interes = valor;
        break;
      case "tipo_acreedor":
        data.otras_obligaciones.tipo_acreedor = valor;
        break;
      case "tipo_acreedor.codigo":
        data.otras_obligaciones.tipo_acreedor.codigo = valor;
        break;
      case "tipo_acreedor.valor":
        data.otras_obligaciones.tipo_acreedor.valor = valor;
        break;
      case "tipo_moneda":
        data.otras_obligaciones.tipo_moneda = valor;
        break;
      case "tipo_moneda.codigo":
        data.otras_obligaciones.tipo_moneda.codigo = valor;
        break;
      case "tipo_moneda.moneda":
        data.otras_obligaciones.tipo_moneda.moneda = valor;
        break;
      case "tipo_obligacion":
        data.otras_obligaciones.tipo_obligacion = valor;
        break;
      case "tipo_operacion":
        data.otras_obligaciones.tipo_operacion = valor;
        break;
      case "tipo_operacion.codigo":
        data.otras_obligaciones.tipo_operacion.codigo = valor;
        break;
      case "tipo_operacion.valor":
        data.otras_obligaciones.tipo_operacion.valor = valor;
        break;
      case "titularidad_obligacion":
        data.otras_obligaciones.titularidad_obligacion = valor;
        break;
      case "titularidad_obligacion.codigo":
        data.otras_obligaciones.titularidad_obligacion.codigo = valor;
        break;
      case "titularidad_obligacion.valor":
        data.otras_obligaciones.titularidad_obligacion.valor = valor;
        break;
      case "unidad_medida_plazo":
        data.otras_obligaciones.unidad_medida_plazo = valor;
        break;
      case "unidad_medida_plazo.codigo":
        data.otras_obligaciones.unidad_medida_plazo.codigo = valor;
        break;
      case "unidad_medida_plazo.valor":
        data.otras_obligaciones.unidad_medida_plazo.valor = valor;
        break;

      default:
    }

    this.setState(data, () => {
      if (this.state.debug) {
        console.log(this.state.apoyos_beneficios_publicos);
        console.log(valor);
        // console.log(this.state.informacion_general.domicilio);
      }
    });
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

    fetch(config.apiHost + "catTiposMonedas")
      .then(res => res.json())
      .then(catTiposMonedas =>
        this.setState({ catTiposMonedas: catTiposMonedas })
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
          <Grid item xs={12} style={{ textAlign: "center", padding: "20px" }}>
            {this.state.show}
          </Grid>
          {this.state.show === 1 && (
            <Grid item xs={12}>
              <Formulario
                data={this.state}
                handleChange={this.setDataInformacionPersonal}
              />
            </Grid>
          )}
          {this.state.show === 2 && (
            <DatosCurriculares
              data={this.state}
              handleChange={this.setDataDatosCurriculares}
              addClick={this.handleClickDatosCurriculares}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}
          {this.state.show === 3 && (
            <EncargoActual
              data={this.state}
              handleChange={this.setDataEncargoActual}
              nivelGobierno={this.state.nivelGobierno}
              poderEjecutivo={this.state.poderEjecutivo}
              sectorIndustria={this.state.sectorIndustria}
            />
          )}

          {this.state.show === 4 && (
            <ExperienciaLaboral
              data={this.state}
              handleChange={this.setDataExperienciaLaboral}
              addClick={this.handleAddExperienciaLaborar}
              removeClick={this.handleRemoveExperienciaLaborar}
              nivelGobierno={this.state.nivelGobierno}
              poderEjecutivo={this.state.poderEjecutivo}
              sectorIndustria={this.state.sectorIndustria}
            />
          )}

          {this.state.show === 5 && (
            <DependientesEconomicos
              data={this.state}
              handleChange={this.setDataDependientesEconomicos}
              addClick={this.handleAddDependientesEconomicos}
              removeClick={this.handleRemoveDependientesEconomicos}
            />
          )}

          {this.state.show === 6 && (
            <EmpresasSociedadesAsociaciones
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickEmpresasSociedadesAsociaciones}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 7 && (
            <Membresias
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickMembresias}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 8 && (
            <ApoyosPublicos
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickApoyosPublicos}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 9 && (
            <RepresentacionActiva
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickRepresentacionActiva}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 10 && (
            <RepresentacionPasiva
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickRepresentacionPasiva}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 11 && (
            <SociosComerciales
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickSociosComerciales}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 12 && (
            <ClientesPrincipales
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickClientesPrincipales}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 13 && (
            <OtrasPartesRelacionadas
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickOtrasPartesRelacionadas}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 14 && (
            <BeneficiosGratuitos
              data={this.state}
              handleChange={this.setDataDatosCurriculares}
              addClick={this.handleClickDatosCurriculares}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 15 && (
            <SalariosPublicos
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickSalariosPublicos}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 16 && (
            <SalariosEmpleos
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickSalariosEmpleos}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 17 && (
            <ActividadProfesional
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickActividadProfesional}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 18 && (
            <ActividadEmpresarial
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickActividadEmpresarial}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 19 && (
            <ActividadMenor
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickActividadMenor}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 20 && (
            <Arrendamiento
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickArrendamiento}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 21 && (
            <Intereses
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickIntereses}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 22 && (
            <Premios
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickPremios}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 23 && (
            <EnajenacionBienes
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickEnajenacionBienes}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 24 && (
            <OtrosIngresos
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickOtrosIngresos}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 25 && (
            <BienesInmuebles
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickBienesInmuebles}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 26 && (
            <BienesMueblesRegistrables
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickBienesMueblesRegistrables}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 27 && (
            <BienesMueblesNoRegistrables
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickBienesMueblesNoRegistrables}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 28 && (
            <Inversiones
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickInversiones}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 29 && (
            <EfectivoMetales
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickEfectivoMetales}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 30 && (
            <Fideicomisos
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickFideicomisos}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 31 && (
            <BienesIntangibles
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickBienesIntangibles}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 32 && (
            <CuentasCobrar
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickCuentasCobrar}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 33 && (
            <PropietarioTercero
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickPropietarioTercero}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 34 && (
            <Deudas
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickDeudas}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}

          {this.state.show === 35 && (
            <OtrasObligaciones
              data={this.state}
              handleChange={this.setDataEncargoActual}
              addClick={this.handleClickOtrasObligaciones}
              removeClick={this.handleClickEliminarDatosCurriculares}
            />
          )}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Index);
