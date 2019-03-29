import moment from "moment";

export var data = {
  debug: false,
  show: 1,
  message: "",
  type: "",
  nacionalidad: [],
  catTipoOperacion: [],
  catTipoMoneda: [],
  catTipoMetal: [],
  catFormaAdquision: [],
  catTipoBienInmuebles: [],
  catEntidadesFederativas: [],
  catTitularBien: [],
  catRelacionDeclarante: [],
  catMedidaPlazo: [],
  catDependencia: [],
  catTiposActividades: [],
  catTipoAcreedor: [],
  catTipoBien: [],
  catNivelGobierno: [],
  catTipoApoyo: [],
  catTiposFideicomisos: [],
  catTipoInversion: [],
  catTipoEspecificoInversion: [],
  catTipoInstitucion: [],
  catNaturalezaMembresias: [],
  catTipoAdeudo: [],
  catTipoRepresentacion: [],
  catRelacionDeclarante: [],
  nivelGobierno: [],
  poderEjecutivo: [],
  catSectorIndustria: [],
  ambitos: [],
  catPaises: [],
  catEntidadesFederativas: [],
  catMunicipios: [],
  catLocalidades: [],
  catTipoVialidad: [],
  catEstadoCivil: [],
  catDocumentoObtenido: [],
  catEstatusEstudio: [],
  regimen: [],
  startDate: moment(),
  informacion_general_nacionalidades: [],
  informacion_general: {
    nombres: "",
    primer_apellido: "",
    segundo_apellido: "",
    nacionalidades: [],
    pais_nacimiento: {
      valor: "",
      codigo: ""
    },
    entidad_federativa_nacimiento: {
      nom_agee: "",
      cve_agee: ""
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
      particular: "",
      celular: ""
    },
    domicilio: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_agee: "",
        cve_agee: ""
      },
      municipio: {
        nom_agem: "",
        cve_agee: ""
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
    },
    estado_civil: {
      codigo: "",
      valor: ""
    },
    regimen_matrimonial: {
      codigo: "",
      valor: ""
    },
    fecha_declaracion: ""
  },
  datos_curriculares_grados_academicos: {
    grado_obtenido: "",
    institucion_educativa: "",
    lugar_institucion_educativa: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad: {
        nom_agee: "",
        cve_agee: ""
      }
    },
    carrera: "",
    estatus: {
      codigo: "",
      valor: ""
    },
    ano_conclusion: "",
    documento_obtenido: {
      codigo: "",
      valor: ""
    },
    cedula_profesional: ""
  },
  curriculares_grados_academicos: [],
  datos_curriculares: {
    grado_maximo_escolaridad: "",
    grados_academicos: []
  },
  datos_encargo_actual: {
    ente_publico: "",
    empleo_cargo_comision: "",
    nivel_gobierno: {
      codigo: "",
      valor: ""
    },
    poder_juridico: {
      codigo: "",
      valor: ""
    },
    contratado_honorarios: false,
    nivel_encargo: "",
    area_adscripcion: "",
    fecha_posesion: "",
    lugar_ubicacion: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad: {
        nom_agee: "",
        cve_agee: ""
      }
    },
    direccion_encargo: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_agee: "",
        cve_agee: ""
      },
      municipio: {
        nom_agem: "",
        cve_agee: ""
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
    },
    telefono_laboral: {
      numero: "",
      extension: ""
    },
    sector_industria: {
      codigo: "",
      valor: ""
    },
    funciones_principales: [
      {
        codigo: "",
        valor: ""
      }
    ]
  },
  datos_experiencia_laboral: {
    ambito: {
      codigo: "",
      valor: ""
    },
    nivel_gobierno: {
      codigo: "",
      valor: ""
    },
    poder_ente: {
      codigo: "",
      valor: ""
    },
    nombre_institucion: "",
    unidad_administrativa: "",
    direccion: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_agee: "",
        cve_agee: ""
      },
      municipio: {
        nom_agem: "",
        cve_agee: ""
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
    },
    sector_industria: {
      codigo: "",
      valor: ""
    },
    jerarquia_rango: "",
    cargo_puesto: "",
    fecha_ingreso: "",
    fecha_salida: "",
    funciones_principales: []
  },
  experiencia_laboral: [],
  dependientes_economicos_nacionlidades: [],
  datos_dependientes_economicos: {
    nombre_personal: {
      nombres: "",
      primer_apellido: "",
      segundo_apellido: ""
    },
    tipo_relacion: {
      codigo: "",
      valor: ""
    },
    nacionalidades: [
      {
        valor: "",
        codigo: ""
      }
    ],
    curp: "",
    rfc: "",
    fecha_nacimiento: "",
    numero_identificacion_nacional: "",
    habita_domicilio_declarante: false,
    domicilio: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_agee: "",
        cve_agee: ""
      },
      municipio: {
        nom_agem: "",
        cve_agee: ""
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
    },
    medio_contacto: "",
    ingresos_propios: false,
    ocupacion_profesion: "",
    sector_industria: {
      codigo: "",
      valor: ""
    },
    proveedor_contratista_gobierno: false,
    tiene_intereses_mismo_sector_declarante: false,
    desarrolla_cabildeo_sector_declarante: false,
    beneficiario_programa_publico: [
      {
        nombre_programa: "",
        institucion_otorga_apoyo: "",
        tipo_apoyo: "",
        valor_apoyo: null
      }
    ],
    observaciones: ""
  },
  dependientes_economicos: [],
  datos_empresas_sociedades_asociaciones: {
    id: null,
    nombre_empresa_sociedad_asociacion: "",
    pais_registro: {
      valor: "",
      codigo: ""
    },
    fecha_constitucion: "",
    numero_registro: "",
    rfc: "",
    domicilio: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_agee: "",
        cve_agee: ""
      },
      municipio: {
        nom_agem: "",
        cve_agee: ""
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
    },
    rol: "",
    actividad_economica: false,
    sector_industria: {
      codigo: "",
      valor: ""
    },
    porcentaje_participacion: null
  },
  empresas_sociedades_asociaciones: [],
  datos_membresias: {
    id: null,
    tipo_institucion: {
      codigo: "",
      valor: ""
    },
    nombre_institucion: "",
    naturaleza_membresia: {
      codigo: "",
      valor: ""
    },
    domicilio: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_agee: "",
        cve_agee: ""
      },
      municipio: {
        nom_agem: "",
        cve_agee: ""
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
    },
    sector_industria: {
      codigo: "",
      valor: ""
    },
    puesto_rol: "",
    fecha_inicio: "",
    pagado: false,
    observaciones: ""
  },
  membresias: [],
  datos_apoyos_beneficios_publicos: {
    id: null,
    es_beneficiario: false,
    programa: "",
    institucion_otorgante: "",
    nivel_orden_gobierno: {
      codigo: "",
      valor: ""
    },
    tipo_apoyo: "",
    valor_anual_apoyo: null,
    observaciones: ""
  },
  apoyos_beneficios_publicos: [],
  datos_representacion_activa: {
    id: null,
    tipo_representacion: {
      codigo: "",
      valor: ""
    },
    nacionalidades: [
      {
        valor: "",
        codigo: ""
      }
    ],
    nombre_parte_representada: "",
    curp_parte: "",
    rfc_parte: "",
    fecha_nacimiento_parte: "",
    sector_industria: {
      codigo: "",
      valor: ""
    },
    fecha_inicio: "",
    pagado: false,
    observaciones: ""
  },
  representacion_activa: [],
  datos_representacion_pasiva: {
    id: null,
    tipo_representacion: {
      codigo: "",
      valor: ""
    },
    nombre: "",
    fecha_inicio_representacion: "",
    nacionalidades: [
      {
        valor: "",
        codigo: ""
      }
    ],
    curp: "",
    rfc: "",
    fecha_nacimiento: "",
    tiene_intereses: false,
    ocupacion_profesion: "",
    sector_industria: {
      codigo: "",
      valor: ""
    },
    observaciones: ""
  },
  representacion_pasiva: [],
  datos_socios_comerciales: {
    id: null,
    nombre_actividad: "",
    tipo_vinculo: "",
    antiguedad_vinculo: null,
    rfc_entidad: "",
    nombre: "",
    curp: "",
    rfc: "",
    lugar_nacimiento: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad: {
        nom_agee: "",
        cve_agee: ""
      }
    },
    fecha_nacimiento: "",
    porcentaje_participacion: null,
    sector_industria: {
      codigo: "",
      valor: ""
    },
    observaciones: ""
  },
  socios_comerciales: [],
  datos_clientes_principales: {
    id: null,
    nombre_negocio: "",
    numero_registro: "",
    dueno_encargado: "",
    nombre: "",
    rfc: "",
    domicilio: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_agee: "",
        cve_agee: ""
      },
      municipio: {
        nom_agem: "",
        cve_agee: ""
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
    },
    sector_industria: {
      codigo: "",
      valor: ""
    },
    porcentaje_participacion: null,
    observaciones: ""
  },
  clientes_principales: [],
  datos_otras_partes: {
    id: null,
    tipo_relacion: "",
    nombre_denominacion_parte: "",
    fecha_inicio_relacion: "",
    nacionalidades: [
      {
        valor: "",
        codigo: ""
      }
    ],
    curp: "",
    rfc: "",
    fecha_nacimiento: "",
    ocupacion: "",
    tiene_interes: false,
    sector_industria: {
      codigo: "",
      valor: ""
    },
    observaciones: ""
  },
  otras_partes: [],
  datos_beneficios_gratuitos: {
    id: null,
    tipo_beneficio: "",
    origen_beneficio: "",
    sector_industria: {
      codigo: "",
      valor: ""
    },
    valor_beneficio: null,
    observaciones: ""
  },
  beneficios_gratuitos: [],
  datos_sueldos_salarios_publicos: {
    id: null,
    ente_publico: {
      valor: "",
      codigo: ""
    },
    rfc: "",
    ingreso_bruto_anual: {
      valor: null,
      moneda: {
        codigo: "",
        moneda: ""
      },
      unidad_temporal: {
        codigo: "",
        valor: ""
      },
      duracion_frecuencia: null,
      fecha_transaccion: ""
    },
    observaciones: ""
  },
  sueldos_salarios_publicos: [],
  datos_sueldos_salarios_otros_empleos: {
    id: null,
    nombre_denominacion_razon_social: "",
    rfc: "",
    curp: "",
    sector_industria: {
      codigo: "",
      valor: ""
    },
    tipo_actividad_servicio: {
      codigo: "",
      valor: ""
    },
    descripcion_actividad_servicio: "",
    domicilio_persona_paga: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_agee: "",
        cve_agee: ""
      },
      municipio: {
        nom_agem: "",
        cve_agee: ""
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
    },
    ingreso_bruto_anual: {
      valor: null,
      moneda: {
        codigo: "",
        moneda: ""
      },
      unidad_temporal: {
        codigo: "",
        valor: ""
      },
      duracion_frecuencia: null,
      fecha_transaccion: ""
    },
    observaciones: ""
  },
  sueldos_salarios_otros_empleos: [],
  datos_actividad_profesional: {
    id: null,
    nombre_denominacion_razon_social: "",
    rfc: "",
    curp: "",
    sector_industria: {
      codigo: "",
      valor: ""
    },
    tipo_actividad_servicio: {
      codigo: "",
      valor: ""
    },
    descripcion_actividad_servicio: "",
    domicilio_persona_paga: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_agee: "",
        cve_agee: ""
      },
      municipio: {
        nom_agem: "",
        cve_agee: ""
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
    },
    ingreso_bruto_anual: {
      valor: null,
      moneda: {
        codigo: "",
        moneda: ""
      },
      unidad_temporal: {
        codigo: "",
        valor: ""
      },
      duracion_frecuencia: null,
      fecha_transaccion: ""
    },
    observaciones: ""
  },
  actividad_profesional: [],
  datos_actividad_empresarial: {
    id: null,
    nombre_denominacion_razon_social: "",
    rfc: "",
    curp: "",
    sector_industria: {
      codigo: "",
      valor: ""
    },
    tipo_actividad_servicio: {
      codigo: "",
      valor: ""
    },
    descripcion_actividad_servicio: "",
    domicilio_actividad_empresarial: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_agee: "",
        cve_agee: ""
      },
      municipio: {
        nom_agem: "",
        cve_agee: ""
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
    },
    ingreso_bruto_anual: {
      valor: null,
      moneda: {
        codigo: "",
        moneda: ""
      },
      unidad_temporal: {
        codigo: "",
        valor: ""
      },
      duracion_frecuencia: null,
      fecha_transaccion: ""
    },
    observaciones: ""
  },
  actividad_empresarial: [],
  datos_actividad_economica_menor: {
    id: null,
    nombre_denominacion_razon_social: "",
    rfc: "",
    curp: "",
    sector_industria: {
      codigo: "",
      valor: ""
    },
    tipo_actividad_servicio: {
      codigo: "",
      valor: ""
    },
    descripcion_actividad_servicio: "",
    domicilio_actividad: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_agee: "",
        cve_agee: ""
      },
      municipio: {
        nom_agem: "",
        cve_agee: ""
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
    },
    ingreso_bruto_anual: {
      valor: null,
      moneda: {
        codigo: "",
        moneda: ""
      },
      unidad_temporal: {
        codigo: "",
        valor: ""
      },
      duracion_frecuencia: null,
      fecha_transaccion: ""
    },
    observaciones: ""
  },
  actividad_economica_menor: [],
  datos_arrendamiento: {
    id: null,
    nombre_denominacion_razon_social: "",
    rfc: "",
    curp: "",
    sector_industria: {
      codigo: "",
      valor: ""
    },
    tipo_actividad_servicio: {
      codigo: "",
      valor: ""
    },
    descripcion_actividad_servicio: "",
    domicilio_actividad: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_agee: "",
        cve_agee: ""
      },
      municipio: {
        nom_agem: "",
        cve_agee: ""
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
    },
    ingreso_bruto_anual: {
      valor: null,
      moneda: {
        codigo: "",
        moneda: ""
      },
      unidad_temporal: {
        codigo: "",
        valor: ""
      },
      duracion_frecuencia: null,
      fecha_transaccion: ""
    },
    observaciones: ""
  },
  arrendamiento: [],
  datos_intereses: {
    id: null,
    nombre_denominacion_razon_social: "",
    rfc: "",
    curp: "",
    sector_industria: {
      codigo: "",
      valor: ""
    },
    tipo_actividad_servicio: {
      codigo: "",
      valor: ""
    },
    descripcion_actividad_servicio: "",
    domicilio: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_agee: "",
        cve_agee: ""
      },
      municipio: {
        nom_agem: "",
        cve_agee: ""
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
    },
    ingreso_bruto_anual: {
      valor: null,
      moneda: {
        codigo: "",
        moneda: ""
      },
      unidad_temporal: {
        codigo: "",
        valor: ""
      },
      duracion_frecuencia: null,
      fecha_transaccion: ""
    },
    observaciones: ""
  },
  intereses: [],
  datos_premios: {
    id: null,
    nombre_denominacion: "",
    rfc: "",
    curp: "",
    sector_industria: {
      codigo: "",
      valor: ""
    },
    tipo_actividad_servicio: {
      codigo: "",
      valor: ""
    },
    descripcion_premio: "",
    domicilio: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_agee: "",
        cve_agee: ""
      },
      municipio: {
        nom_agem: "",
        cve_agee: ""
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
    },
    ingreso_bruto_anual: {
      valor: null,
      moneda: {
        codigo: "",
        moneda: ""
      },
      unidad_temporal: {
        codigo: "",
        valor: ""
      },
      duracion_frecuencia: null,
      fecha_transaccion: ""
    },
    observaciones: ""
  },
  premios: [],
  datos_enajenacion_bienes: {
    id: null,
    nombre_denominacion: "",
    rfc: "",
    curp: "",
    tipo_bien: "",
    sector_industria: {
      codigo: "",
      valor: ""
    },
    tipo_actividad_servicio: {
      codigo: "",
      valor: ""
    },
    descripcion_bien: "",
    domicilio_bien_enajenado: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_agee: "",
        cve_agee: ""
      },
      municipio: {
        nom_agem: "",
        cve_agee: ""
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
    },
    ingreso_bruto_anual: {
      valor: null,
      moneda: {
        codigo: "",
        moneda: ""
      },
      unidad_temporal: {
        codigo: "",
        valor: ""
      },
      duracion_frecuencia: null,
      fecha_transaccion: ""
    },
    observaciones: ""
  },
  enajenacion_bienes: [],
  datos_otros_ingresos: {
    id: null,
    nombre_denominacion: "",
    rfc: "",
    curp: "",
    sector_industria: {
      codigo: "",
      valor: ""
    },
    tipo_actividad: {
      codigo: "",
      valor: ""
    },
    descripcion_actividad: "",
    domicilio_actividad: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_agee: "",
        cve_agee: ""
      },
      municipio: {
        nom_agem: "",
        cve_agee: ""
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
    },
    ingreso_bruto_anual: {
      valor: null,
      moneda: {
        codigo: "",
        moneda: ""
      },
      unidad_temporal: {
        codigo: "",
        valor: ""
      },
      duracion_frecuencia: null,
      fecha_transaccion: ""
    },
    observaciones: ""
  },
  otros_ingresos: [],
  datos_bienes_inmuebles: {
    id: null,
    tipo_operacion: {
      codigo: "",
      valor: ""
    },
    tipo_bien: {
      codigo: "",
      valor: ""
    },
    superficie_terreno: null,
    superficie_construccion: null,
    titular: {
      codigo: "",
      valor: ""
    },
    porcentaje_propiedad: null,
    nombre_copropietario: {
      nombres: "",
      primer_apellido: "",
      segundo_apellido: ""
    },
    identificacion_bien: {
      numero_escritura_publica: null,
      numero_registro_publico: null,
      folio_real: "",
      fecha_contrato: ""
    },
    domicilio_bien: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_agee: "",
        cve_agee: ""
      },
      municipio: {
        nom_agem: "",
        cve_agee: ""
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
    },
    forma_adquisicion: {
      codigo: "",
      valor: ""
    },
    nombre_denominacion_quien_adquirio: "",
    rfc_quien_adquirio: "",
    curp_quien_adquirio: "",
    relacion_persona_adquirio: {
      codigo: "",
      valor: ""
    },
    sector_industria: {
      codigo: "",
      valor: ""
    },
    fecha_adquisicion: "",
    precio_adquisicion: {
      valor: null,
      moneda: {
        codigo: "",
        moneda: ""
      }
    },
    valor_catastral: null,
    observaciones: ""
  },
  bienes_inmuebles: [],
  datos_bienes_muebles_registrables: {
    id: null,
    tipo_operacion: {
      codigo: "",
      valor: ""
    },
    tipo_bien_mueble: {
      codigo: "",
      valor: ""
    },
    marca: "",
    submarca: "",
    modelo: null,
    numero_serie: "",
    lugar_registro: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad: {
        nom_agee: "",
        cve_agee: ""
      }
    },
    titular_bien: {
      codigo: "",
      valor: ""
    },
    porcentaje_propiedad: null,
    nombres_copropietarios: [""],
    numero_registro_vehicular: null,
    forma_adquisicion: {
      codigo: "",
      valor: ""
    },
    nombre_denominacion_adquirio: "",
    rfc_quien_adquirio: "",
    relacion_persona_quien_adquirio: {
      codigo: "",
      valor: ""
    },
    sector_industria: {
      codigo: "",
      valor: ""
    },
    fecha_adquisicion: "",
    precio_adquisicion: {
      valor: null,
      moneda: {
        codigo: "",
        moneda: ""
      }
    },
    observaciones: ""
  },
  bienes_muebles_registrables: [],
  datos_bienes_muebles_no_registrables: {
    id: null,
    tipo_operacion: {
      codigo: "",
      valor: ""
    },
    tipo_bien: {
      codigo: "",
      valor: ""
    },
    descripcion: "",
    titular_bien: {
      codigo: "",
      valor: ""
    },
    porcentaje_propiedad: null,
    nombres_copropietarios: [""],
    forma_adquisicion: {
      codigo: "",
      valor: ""
    },
    nombre_denominacion_adquirio: "",
    relacion_quien_adquirio: {
      codigo: "",
      valor: ""
    },
    fecha_adquisicion: "",
    precio_adquisicion: {
      valor: null,
      moneda: {
        codigo: "",
        moneda: ""
      }
    },
    observaciones: ""
  },
  bienes_muebles_no_registrables: [],
  datos_inversiones_cuentas_valores: {
    id: null,
    tipo_operacion: {
      codigo: "",
      valor: ""
    },
    tipo_inversion: {
      codigo: "",
      valor: ""
    },
    tipo_especifico_inversion: {
      codigo: "",
      valor: ""
    },
    numero_cuenta: "",
    nacional_extranjero: {
      valor: "",
      codigo: ""
    },
    nombre_institucion: "",
    rfc_institucion: "",
    sector_industria: {
      codigo: "",
      valor: ""
    },
    domicilio_institucion: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_agee: "",
        cve_agee: ""
      },
      municipio: {
        nom_agem: "",
        cve_agee: ""
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
    },
    forma_adquisicion: {
      codigo: "",
      valor: ""
    },
    fecha_inicio: "",
    monto_original: null,
    tipo_moneda: {
      codigo: "",
      moneda: ""
    },
    tasa_interes: null,
    saldo_anual: null,
    plazo: null,
    unidad_medida_plazo: {
      codigo: "",
      valor: ""
    },
    titular_bien: {
      codigo: "",
      valor: ""
    },
    porcentaje_inversion: null,
    observaciones: ""
  },
  inversiones_cuentas_valores: [],
  datos_efectivo_metales: {
    id: null,
    tipo_operacion: {
      codigo: "",
      valor: ""
    },
    tipo_moneda: {
      codigo: "",
      moneda: ""
    },
    monto: null,
    tipo_metal: {
      codigo: "",
      valor: ""
    },
    unidades: null,
    forma_adquisicion: {
      codigo: "",
      valor: ""
    },
    observaciones_comentarios: ""
  },
  efectivo_metales: [],
  datos_fideicomisos: {
    id: null,
    tipo_operacion: {
      codigo: "",
      valor: ""
    },
    identificador_fideicomiso: "",
    tipo_fideicomiso: {
      codigo: "",
      valor: ""
    },
    objetivo: "",
    numero_registro: "",
    fecha_creacion: "",
    vigencia: "",
    residencia: {
      valor: "",
      codigo: ""
    },
    valor: null,
    moneda: {
      codigo: "",
      moneda: ""
    },
    porcentaje_propiedad_derechos_fiduciarios: null,
    ingreso_monetario_obtenido: null,
    institucion_fiduciaria: "",
    fideicomitente: {
      nombre: "",
      rfc: "",
      curp: "",
      domicilio: {
        pais: {
          valor: "",
          codigo: ""
        },
        entidad_federativa: {
          nom_agee: "",
          cve_agee: ""
        },
        municipio: {
          nom_agem: "",
          cve_agee: ""
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
      },
      fecha_constitucion: ""
    },
    fideicomisario: {
      nombre: "",
      rfc: "",
      curp: "",
      domicilio: {
        pais: {
          valor: "",
          codigo: ""
        },
        entidad_federativa: {
          nom_agee: "",
          cve_agee: ""
        },
        municipio: {
          nom_agem: "",
          cve_agee: ""
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
      },
      fecha_constitucion: ""
    },
    fiduciario: {
      nombre: "",
      rfc: "",
      curp: "",
      domicilio: {
        pais: {
          valor: "",
          codigo: ""
        },
        entidad_federativa: {
          nom_agee: "",
          cve_agee: ""
        },
        municipio: {
          nom_agem: "",
          cve_agee: ""
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
      },
      fecha_constitucion: ""
    },
    observaciones: ""
  },
  fideicomisos: [],
  datos_bienes_intangibles: {
    id: null,
    tipo_operacion: {
      codigo: "",
      valor: ""
    },
    propietario_registrado: "",
    descripcion: "",
    ente_publico_encargado: {
      nombres: "",
      primer_apellido: "",
      segundo_apellido: ""
    },
    numero_registro: null,
    fecha_registro: "",
    sector_industria: {
      codigo: "",
      valor: ""
    },
    precio_adquisicion: {
      valor: null,
      moneda: {
        codigo: "",
        moneda: ""
      }
    },
    forma_adquisicion: {
      codigo: "",
      valor: ""
    },
    fecha_vencimiento: "",
    porcentaje_copropiedad: null,
    precio_total_copropiedad: {
      valor: null,
      moneda: {
        codigo: "",
        moneda: ""
      }
    },
    nombre_copropietario: "",
    porcentaje_propiedad_copropietario: null,
    observaciones: ""
  },
  bienes_intangibles: [],
  datos_cuentas_por_cobrar: {
    id: null,
    nombre_prestatario: "",
    numero_registro: "",
    domicilio_prestatarios: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_agee: "",
        cve_agee: ""
      },
      municipio: {
        nom_agem: "",
        cve_agee: ""
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
    },
    sector_industria: {
      codigo: "",
      valor: ""
    },
    fecha_prestamo: "",
    monto_original_prestamo: null,
    tasa_interes: null,
    saldo_pendiente: null,
    fecha_vencimiento: "",
    porcentaje_copropiedad: null,
    nombre_copropietario: "",
    observaciones: ""
  },
  cuentas_por_cobrar: [],
  datos_uso_especie_propiedad_tercero: {
    id: null,
    tipo_bien: {
      codigo: "",
      valor: ""
    },
    valor_mercado: {
      valor: null,
      moneda: {
        codigo: "",
        moneda: ""
      }
    },
    nombre_tercero_propietario: "",
    rfc_tercero_propietario: "",
    curp_tercero_propietario: "",
    relacion_persona: {
      codigo: "",
      valor: ""
    },
    sector_industria: {
      codigo: "",
      valor: ""
    },
    fecha_inicio: "",
    domicilio_persona: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_agee: "",
        cve_agee: ""
      },
      municipio: {
        nom_agem: "",
        cve_agee: ""
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
    },
    observaciones: ""
  },
  uso_especie_propiedad_tercero: [],
  datos_deudas: {
    id: null,
    tipo_operacion: {
      codigo: "",
      valor: ""
    },
    tipo_acreedor: {
      codigo: "",
      valor: ""
    },
    tipo_adeudo: {
      codigo: "",
      valor: ""
    },
    identificador_deuda: "",
    nacional_extranjero: {
      valor: "",
      codigo: ""
    },
    nombre_acreedor: "",
    rfc_acreedor: "",
    sector_industria: {
      codigo: "",
      valor: ""
    },
    domicilio_acreedor: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_agee: "",
        cve_agee: ""
      },
      municipio: {
        nom_agem: "",
        cve_agee: ""
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
    },
    fecha_adeudo: "",
    monto_original: null,
    tipo_moneda: {
      codigo: "",
      moneda: ""
    },
    tasa_interes: null,
    saldo_pendiente: null,
    montos_abonados: [null],
    plazo_adeudo: null,
    unidad_medida_adeudo: {
      codigo: "",
      valor: ""
    },
    titularidad_deuda: {
      codigo: "",
      valor: ""
    },
    porcentaje_adeudo_titular: null,
    garantia: false,
    nombre_garante: "",
    observaciones: ""
  },
  deudas: [],
  datos_otras_obligaciones: {
    id: null,
    tipo_operacion: {
      codigo: "",
      valor: ""
    },
    tipo_acreedor: {
      codigo: "",
      valor: ""
    },
    tipo_obligacion: "",
    identificador_obligacion: "",
    nacional_extranjero: {
      valor: "",
      codigo: ""
    },
    nombre_acreedor: "",
    rfc_acreedor: "",
    sector_industria: {
      codigo: "",
      valor: ""
    },
    domicilio_acreedor: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_agee: "",
        cve_agee: ""
      },
      municipio: {
        nom_agem: "",
        cve_agee: ""
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
    },
    fecha_obligacion: "",
    monto_original: null,
    tipo_moneda: {
      codigo: "",
      moneda: ""
    },
    tasa_interes: null,
    saldo_pendiente: null,
    montos_abonados: [null],
    plazo_obligacion: null,
    unidad_medida_plazo: {
      codigo: "",
      valor: ""
    },
    titularidad_obligacion: {
      codigo: "",
      valor: ""
    },
    porcentaje_obligacion_titular: null,
    garantia: false,
    observaciones: ""
  },
  otras_obligaciones: [],
  pais: ""
};
