import React, { Component } from "react";
import axios from "axios";
import config from "../../config.json";

//Grid
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

import { data,datos_curriculares_grados_academicos} from "./data";

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

  handleNext = () => event => {
    this.setState({
      show: this.state.show + 1
    });
  };

  handleBack = () => event => {
    this.setState({
      show: this.state.show - 1
    });
  };

  handleChangeDirPais = name => event => {
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

    this.updateLocalidades(
      this.state.informacion_general.domicilio.entidad_federativa.cve_ent,
      cve_mun
    );

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

  handleChangeEntidades = name => event => {
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

  handleChangeMunicipios = name => event => {
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
    let datos=Object.assign({}, this.state.datos_curriculares_grados_academicos);
    this.state.datos_curriculares.grados_academicos.push(datos);
    this.setState(this.state);

    // limpieza del Formulario
    this.setState({datos_curriculares_grados_academicos:Object.assign({}, datos_curriculares_grados_academicos)});
  };

  handleClickEliminarDatosCurriculares = (index) => event =>{
    this.state.datos_curriculares.grados_academicos.splice(index,1);
    this.setState({datos_curriculares:this.state.datos_curriculares},()=>{
      console.log(this.state.datos_curriculares);
    });


  };

  handleClickExperienciaLaborar = () => event => {
    this.state.experiencia_laboral.push({
      ambito: {
        codigo: "Pub",
        valor: "Público"
      },
      nivel_gobierno: {
        codigo: "EST",
        valor: "Estatal"
      },
      poder_ente: {
        codigo: "JUD",
        valor: "Judicial"
      },
      nombre_institucion: "Instituto Federal de Telecomunicaciones",
      unidad_administrativa: "Unidad de Política Regulatoria",
      direccion: {
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
      jerarquia_rango: "string",
      cargo_puesto: "Jefe de Departamento",
      fecha_ingreso: "31/07/1980",
      fecha_salida: "31/07/1980",
      funciones_principales: [
        {
          codigo: "ABI",
          valor: "Administración de bienes"
        }
      ]
    });
    this.setState(this.state);
    // console.log("hi");
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

  handleClickActividadEmpresarial = () => event => {
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

    var apiBaseUrl = config.apiHost;
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

  handleChangeNombreVialidad = obj => event => {
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
        data.datos_curriculares_grados_academicos.lugar_institucion_educativa.pais = this.getCiudad(valor);
        break;
      case "datos_curriculares_grados_academicos.lugar_institucion_educativa.entidad":
        data.datos_curriculares_grados_academicos.lugar_institucion_educativa.entidad = this.getEntidadFederativa(valor);
        break;
      case "datos_curriculares_grados_academicos.carrera":
        data.datos_curriculares_grados_academicos.carrera = valor;
        break;
      case "datos_curriculares_grados_academicos.estatus":
        data.datos_curriculares_grados_academicos.estatus = this.getEstatusEstudio(valor);
        break;
      case "datos_curriculares_grados_academicos.ano_conclusion":
        data.datos_curriculares_grados_academicos.ano_conclusion = valor;
        break;
      case "datos_curriculares_grados_academicos.documento_obtenido":
        data.datos_curriculares_grados_academicos.documento_obtenido = this.getDocumuentoObtenido(valor);
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
        data.datos_encargo_actual.nivel_gobierno = valor;
        break;
      case "datos_encargo_actual.poder_juridico":
        data.datos_encargo_actual.poder_juridico = this.getCiudad(valor);
        break;
      case "datos_encargo_actual.contratado_honorarios":
        data.datos_encargo_actual.contratado_honorarios = this.getEntidadFederativa(
          valor
        );
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
        data.datos_encargo_actual.sector_industria = valor;
        break;
      case "datos_encargo_actual.funciones_principales.codigo":
        data.datos_encargo_actual.funciones_principales.codigo = valor;
        break;
      /////////////////////////////  direccion_encargo  /////////////////////////////////////
      case "pais":
        data.datos_encargo_actual.direccion_encargo.pais = this.getCiudad(valor);
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
        break;
      case "cp":
        data.datos_encargo_actual.direccion_encargo.cp = valor;
        break;
      case "localidad":
        data.datos_encargo_actual.direccion_encargo.localidad = this.getLocalidad(valor);
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
    // fetch(
    //   config.apiHost +
    //     "municipios?cve_ent=" +
    //     this.state.informacion_general.domicilio.entidad_federativa.cve_ent
    // )
    //   .then(res => res.json())
    //   .then(municipios => this.setState({ municipios: municipios }));

    // fetch(
    //   config.apiHost +
    //     "localidades?cve_ent=" +
    //     this.state.informacion_general.domicilio.entidad_federativa.cve_ent +
    //     "&cve_mun=" +
    //     this.state.informacion_general.domicilio.municipio.cve_mun
    // )
    //   .then(res => res.json())
    //   .then(localidades => this.setState({ localidades: localidades }));

    fetch(config.apiHost + "tipovialidad")
      .then(res => res.json())
      .then(tipovialidad => this.setState({ tipovialidad: tipovialidad }));
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
                onClick={this.handleBack()}
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
                onClick={this.handleNext()}
              >
                Siguiente
              </Button>
            )}
          </Grid>
          {this.state.show === 1 && (
            <Grid item xs={12}>
              <Formulario
                data={this.state}
                setDataInformacionPersonal={this.setDataInformacionPersonal}
              />
            </Grid>
          )}
          {this.state.show === 2 && (
            <DatosCurriculares
              data={this.state}
              entidades={this.state.entidades}
              ciudades={this.state.ciudades}
              handleChange={this.setDataDatosCurriculares}
              handleClick={this.handleClickDatosCurriculares}
              buttonClick={this.handleClickEliminarDatosCurriculares}
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
              handleClickExperienciaLaborar={this.handleClickExperienciaLaborar}
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 5 && (
            <DependientesEconomicos
              data={this.state}
              handleClickDependientesEconomicos={
                this.handleClickDependientesEconomicos
              }
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 6 && (
            <EmpresasSociedadesAsociaciones
              data={this.state}
              handleClickEmpresasSociedadesAsociaciones={
                this.handleClickEmpresasSociedadesAsociaciones
              }
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 7 && (
            <Membresias
              data={this.state}
              handleClickMembresias={this.handleClickMembresias}
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 8 && (
            <ApoyosPublicos
              data={this.state}
              handleClickApoyosPublicos={this.handleClickApoyosPublicos}
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 9 && (
            <RepresentacionActiva
              data={this.state}
              handleClickRepresentacionActiva={
                this.handleClickRepresentacionActiva
              }
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 10 && (
            <RepresentacionPasiva
              data={this.state}
              handleClickRepresentacionPasiva={
                this.handleClickRepresentacionPasiva
              }
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 11 && (
            <SociosComerciales
              data={this.state}
              handleClickSociosComerciales={this.handleClickSociosComerciales}
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 12 && (
            <ClientesPrincipales
              data={this.state}
              handleClickClientesPrincipales={
                this.handleClickClientesPrincipales
              }
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 13 && (
            <OtrasPartesRelacionadas
              data={this.state}
              handleClickOtrasPartesRelacionadas={
                this.handleClickOtrasPartesRelacionadas
              }
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 14 && (
            <BeneficiosGratuitos
              data={this.state}
              handleClickBeneficiosGratuitos={
                this.handleClickBeneficiosGratuitos
              }
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 15 && (
            <SalariosPublicos
              data={this.state}
              handleClickSalariosPublicos={this.handleClickSalariosPublicos}
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 16 && (
            <SalariosEmpleos
              data={this.state}
              handleClickSalariosEmpleos={this.handleClickSalariosEmpleos}
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 17 && (
            <ActividadProfesional
              data={this.state}
              handleClickActividadProfesional={
                this.handleClickActividadProfesional
              }
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 18 && (
            <ActividadEmpresarial
              data={this.state}
              handleClickActividadEmpresarial={
                this.handleClickActividadEmpresarial
              }
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 19 && (
            <ActividadMenor
              data={this.state}
              handleClickActividadMenor={this.handleClickActividadMenor}
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 20 && (
            <Arrendamiento
              data={this.state}
              handleClickArrendamiento={this.handleClickArrendamiento}
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 21 && (
            <Intereses
              data={this.state}
              handleClickIntereses={this.handleClickIntereses}
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 22 && (
            <Premios
              data={this.state}
              handleClickPremios={this.handleClickPremios}
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 23 && (
            <EnajenacionBienes
              data={this.state}
              handleClickEnajenacionBienes={this.handleClickEnajenacionBienes}
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 24 && (
            <OtrosIngresos
              data={this.state}
              handleClickOtrosIngresos={this.handleClickOtrosIngresos}
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 25 && (
            <BienesInmuebles
              data={this.state}
              handleClickBienesInmuebles={this.handleClickBienesInmuebles}
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 26 && (
            <BienesMueblesRegistrables
              data={this.state}
              handleClickBienesMueblesRegistrables={
                this.handleClickBienesMueblesRegistrables
              }
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 27 && (
            <BienesMueblesNoRegistrables
              data={this.state}
              handleClickBienesMueblesNoRegistrables={
                this.handleClickBienesMueblesNoRegistrables
              }
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 28 && (
            <Inversiones
              data={this.state}
              handleClickInversiones={this.handleClickInversiones}
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 29 && (
            <EfectivoMetales
              data={this.state}
              handleClickEfectivoMetales={this.handleClickEfectivoMetales}
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 30 && (
            <Fideicomisos
              data={this.state}
              handleClickFideicomisos={this.handleClickFideicomisos}
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 31 && (
            <BienesIntangibles
              data={this.state}
              handleClickBienesIntangibles={this.handleClickBienesIntangibles}
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 32 && (
            <CuentasCobrar
              data={this.state}
              handleClickCuentasCobrar={this.handleClickCuentasCobrar}
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 33 && (
            <PropietarioTercero
              data={this.state}
              handleClickPropietarioTercero={this.handleClickPropietarioTercero}
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 34 && (
            <Deudas
              data={this.state}
              handleClickDeudas={this.handleClickDeudas}
              handleChange={this.setDataEncargoActual}
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
          )}

          {this.state.show === 35 && (
            <OtrasObligaciones
              data={this.state}
              handleClickOtrasObligaciones={this.handleClickOtrasObligaciones}
              handleChange={this.setDataEncargoActual}
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
          )}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Index);
