import React, { Component } from "react";
import axios from "axios";
import config from "../../config.json";
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

console.log(process.env.PUBLIC_URL);

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
    },
    experiencia_laboral: [
      {
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
      }
    ],
    datos_dependientes_economicos: [
      {
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
      }
    ],
    empresas_sociedades_asociaciones: [
      {
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
      }
    ],
    membresias: [
      {
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
      }
    ],
    apoyos_beneficios_publicos: [
      {
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
      }
    ],
    representacion_activa: [
      {
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
      }
    ],
    representacion_pasiva: [
      {
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
      }
    ],
    socios_comerciales: [
      {
        id: 123,
        nombre_actividad: "Actividad",
        tipo_vinculo: "Socio",
        antiguedad_vinculo: 20,
        rfc_entidad: "GOAP780710RH7",
        nombre: "Armando Rodríguez Saes",
        curp: "BEML920313HMCLNS09",
        rfc: "GOAP780710RH7",
        lugar_nacimiento: {
          pais: {
            valor: "México",
            codigo: "MX"
          },
          entidad: {
            nom_ent: "México",
            cve_ent: "15"
          }
        },
        fecha_nacimiento: "2010-07-26",
        porcentaje_participacion: 70,
        sector_industria: {
          codigo: "SFS",
          valor: "Servicios de salud y asistencia social"
        },
        observaciones: "Esto es una observación"
      }
    ],
    clientes_principales: [
      {
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
      }
    ],
    "otras_partes": [{
      "id": 123,
      "tipo_relacion": "Garantes de Préstamos Recibidos",
      "nombre_denominacion_parte": "Sergio Rodríguez",
      "fecha_inicio_relacion": "2010-07-26",
      "nacionalidades": [{
        "valor": "México",
        "codigo": "MX"
      }],
      "curp": "BEML920313HMCLNS09",
      "rfc": "GOAP780710RH7",
      "fecha_nacimiento": "2010-07-26",
      "ocupacion": "Administrador de empresas",
      "tiene_interes": true,
      "sector_industria": {
        "codigo": "SFS",
        "valor": "Servicios de salud y asistencia social"
      },
      "observaciones": "Esto es una observación"
    }],
    "beneficios_gratuitos": [{
        "id": 123,
        "tipo_beneficio": "Tarjetas o monederos electrónicos",
        "origen_beneficio": "Prestación laboral",
        "sector_industria": {
          "codigo": "SFS",
          "valor": "Servicios de salud y asistencia social"
        },
        "valor_beneficio": 1256,
        "observaciones": "Esto es una observación"
      }],
      "sueldos_salarios_publicos": [{
              "id": 123,
              "ente_publico": {
                "valor": "Secretaría de Gobernación",
                "codigo": "SEGOB"
              },
              "rfc": "GOAP780710RH7",
              "ingreso_bruto_anual": {
                "valor": 10000,
                "moneda": {
                  "codigo": "MXN",
                  "moneda": "Peso mexicano"
                },
                "unidad_temporal": {
                  "codigo": "MESS",
                  "valor": "Meses"
                },
                "duracion_frecuencia": 10,
                "fecha_transaccion": "2010-07-26"
              },
              "observaciones": "Esto es una observación"
            }],
            "sueldos_salarios_otros_empleos": [{
        "id": 123,
        "nombre_denominacion_razon_social": "Max Power Inc.",
        "rfc": "GOAP780710RH7",
        "curp": "BEML920313HMCLNS09",
        "sector_industria": {
          "codigo": "SFS",
          "valor": "Servicios de salud y asistencia social"
        },
        "tipo_actividad_servicio": {
          "codigo": "SPU",
          "valor": "Sector público"
        },
        "descripcion_actividad_servicio": "Servicio profesional de TI",
        "domicilio_persona_paga": {
          "pais": {
            "valor": "México",
            "codigo": "MX"
          },
          "entidad_federativa": {
            "nom_ent": "México",
            "cve_ent": "15"
          },
          "municipio": {
            "nom_mun": "Ecatepec de Morelos",
            "cve_mun": "033"
          },
          "cp": "55018",
          "localidad": {
            "nom_loc": "Ecatepec de Morelos",
            "cve_loc": "0001"
          },
          "vialidad": {
            "tipo_vial": "CALLE",
            "nom_vial": "El Rosal"
          },
          "numExt": "24",
          "numInt": "48"
        },
        "ingreso_bruto_anual": {
          "valor": 10000,
          "moneda": {
            "codigo": "MXN",
            "moneda": "Peso mexicano"
          },
          "unidad_temporal": {
            "codigo": "MESS",
            "valor": "Meses"
          },
          "duracion_frecuencia": 10,
          "fecha_transaccion": "2010-07-26"
        },
        "observaciones": "Esto es una observación"
      }],
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
    // console.log("hi");
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
        "id": 123,
        "tipo_relacion": "Garantes de Préstamos Recibidos",
        "nombre_denominacion_parte": "Sergio Rodríguez",
        "fecha_inicio_relacion": "2010-07-26",
        "nacionalidades": [{
          "valor": "México",
          "codigo": "MX"
        }],
        "curp": "BEML920313HMCLNS09",
        "rfc": "GOAP780710RH7",
        "fecha_nacimiento": "2010-07-26",
        "ocupacion": "Administrador de empresas",
        "tiene_interes": true,
        "sector_industria": {
          "codigo": "SFS",
          "valor": "Servicios de salud y asistencia social"
        },
        "observaciones": "Esto es una observación"
      });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickBeneficiosGratuitos = () => event => {
    this.state.beneficios_gratuitos.push({
        "id": 123,
        "tipo_beneficio": "Tarjetas o monederos electrónicos",
        "origen_beneficio": "Prestación laboral",
        "sector_industria": {
          "codigo": "SFS",
          "valor": "Servicios de salud y asistencia social"
        },
        "valor_beneficio": 1256,
        "observaciones": "Esto es una observación"
      });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickSalariosPublicos = () => event => {
    this.state.sueldos_salarios_publicos.push({
        "id": 123,
        "ente_publico": {
          "valor": "Secretaría de Gobernación",
          "codigo": "SEGOB"
        },
        "rfc": "GOAP780710RH7",
        "ingreso_bruto_anual": {
          "valor": 10000,
          "moneda": {
            "codigo": "MXN",
            "moneda": "Peso mexicano"
          },
          "unidad_temporal": {
            "codigo": "MESS",
            "valor": "Meses"
          },
          "duracion_frecuencia": 10,
          "fecha_transaccion": "2010-07-26"
        },
        "observaciones": "Esto es una observación"
      });
    this.setState(this.state);
    // console.log("hi");
  };

  handleClickSalariosEmpleos = () => event => {
    this.state.sueldos_salarios_otros_empleos.push({
        "id": 123,
        "nombre_denominacion_razon_social": "Max Power Inc.",
        "rfc": "GOAP780710RH7",
        "curp": "BEML920313HMCLNS09",
        "sector_industria": {
          "codigo": "SFS",
          "valor": "Servicios de salud y asistencia social"
        },
        "tipo_actividad_servicio": {
          "codigo": "SPU",
          "valor": "Sector público"
        },
        "descripcion_actividad_servicio": "Servicio profesional de TI",
        "domicilio_persona_paga": {
          "pais": {
            "valor": "México",
            "codigo": "MX"
          },
          "entidad_federativa": {
            "nom_ent": "México",
            "cve_ent": "15"
          },
          "municipio": {
            "nom_mun": "Ecatepec de Morelos",
            "cve_mun": "033"
          },
          "cp": "55018",
          "localidad": {
            "nom_loc": "Ecatepec de Morelos",
            "cve_loc": "0001"
          },
          "vialidad": {
            "tipo_vial": "CALLE",
            "nom_vial": "El Rosal"
          },
          "numExt": "24",
          "numInt": "48"
        },
        "ingreso_bruto_anual": {
          "valor": 10000,
          "moneda": {
            "codigo": "MXN",
            "moneda": "Peso mexicano"
          },
          "unidad_temporal": {
            "codigo": "MESS",
            "valor": "Meses"
          },
          "duracion_frecuencia": 10,
          "fecha_transaccion": "2010-07-26"
        },
        "observaciones": "Esto es una observación"
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

    fetch(config.apiHost + "municipios?cve_ent=" + event.target.value)
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

  handleChangeFecha(date) {
    const fecha = moment(date, "MM/DD/YYYY").format("DD-MM-YYYY");
    console.log(fecha);
    console.log(date);
    this.setState({
      fecha_nacimiento: fecha
    });
  }

  componentDidMount() {
    fetch(config.apiHost + "ciudades")
      .then(res => res.json())
      .then(ciudades => this.setState({ ciudades: ciudades }));

    fetch(config.apiHost + "entidades")
      .then(res => res.json())
      .then(entidades => this.setState({ entidades: entidades }));

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

    fetch(
      config.apiHost +
        "municipios?cve_ent=" +
        this.state.dom_entidad_federativa.cve_ent
    )
      .then(res => res.json())
      .then(municipios => this.setState({ municipios: municipios }));

    fetch(
      config.apiHost +
        "localidades?cve_ent=" +
        this.state.dom_entidad_federativa.cve_ent +
        "&cve_mun=" +
        this.state.dom_municipio.cve_mun
    )
      .then(res => res.json())
      .then(localidades => this.setState({ localidades: localidades }));

    fetch(config.apiHost + "tipovialidad")
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
              {/*
              <ExperienciaLaboral
                data={this.state}
                handleClickExperienciaLaborar={
                  this.handleClickExperienciaLaborar
                }
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
              <DependientesEconomicos
                data={this.state}
                handleClickDependientesEconomicos={
                  this.handleClickDependientesEconomicos
                }
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
              <EmpresasSociedadesAsociaciones
                data={this.state}
                handleClickEmpresasSociedadesAsociaciones={
                  this.handleClickEmpresasSociedadesAsociaciones
                }
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
              <Membresias
                data={this.state}
                handleClickMembresias={this.handleClickMembresias}
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
              <ApoyosPublicos
                data={this.state}
                handleClickApoyosPublicos={this.handleClickApoyosPublicos}
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
              <RepresentacionActiva
                data={this.state}
                handleClickRepresentacionActiva={
                  this.handleClickRepresentacionActiva
                }
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
              <RepresentacionPasiva
                data={this.state}
                handleClickRepresentacionPasiva={
                  this.handleClickRepresentacionPasiva
                }
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
*/}
              {/*
              <SociosComerciales
                data={this.state}
                handleClickSociosComerciales={
                  this.handleClickSociosComerciales
                }
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
              <ClientesPrincipales
                data={this.state}
                handleClickClientesPrincipales={
                  this.handleClickClientesPrincipales
                }
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
              <OtrasPartesRelacionadas
                data={this.state}
                handleClickOtrasPartesRelacionadas={
                  this.handleClickOtrasPartesRelacionadas
                }
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
              <BeneficiosGratuitos
                data={this.state}
                handleClickBeneficiosGratuitos={
                  this.handleClickBeneficiosGratuitos
                }
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
              <SalariosPublicos
                data={this.state}
                handleClickSalariosPublicos={
                  this.handleClickSalariosPublicos
                }
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

              <SalariosEmpleos
                data={this.state}
                handleClickSalariosEmpleos={
                  this.handleClickSalariosEmpleos
                }
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


              <ActividadProfesional
                data={this.state}
                handleClickSalariosEmpleos={
                  this.handleClickSalariosEmpleos
                }
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
