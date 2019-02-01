import moment from "moment";

export var data = {
  debug: false,
  show: 17,
  message: "",
  type: "",
  nacionalidad: [],
  catTipoOperacion: [],
  catTiposMonedas: [],
  catTiposMetales: [],
  catFormaAdquision: [],
  catTiposBienesInmuebles: [],
  catEntidadesFederativas: [],
  catTitularesBienes: [],
  catRelacionDeclarante: [],
  catMedidasPlazos: [],
  catDependencias: [],
  catTiposActividades: [],
  catTiposAcredores: [],
  catTiposBienes: [],
  catNivelesGobierno: [],
  catTiposApoyos: [],
  catTiposFideicomisos: [],
  catTiposInversiones: [],
  catTiposEspecificosInversion: [],
  catTiposInstituciones: [],
  catNaturalezaMembresias: [],
  catTiposAdeudos: [],
  catTiposRepresentaciones: [],
  relacionDeclarante: [],
  nivelGobierno: [],
  poderEjecutivo: [],
  sectorIndustria: [],
  ambitos: [],
  ciudades: [],
  entidades: [],
  municipios: [],
  localidades: [],
  tipovialidad: [],
  estadosciviles: [],
  documentoObtenido: [],
  estatusEstudio: [],
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
      particular: "",
      celular: ""
    },
    domicilio: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
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
        nom_ent: "",
        cve_ent: ""
      }
    },
    direccion_encargo: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
    programa:
      "",
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
        nom_ent: "",
        cve_ent: ""
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
    numero_Registro: "",
    dueno_encargado: "",
    nombre: "",
    rfc: "",
    domicilio: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
          nom_ent: "",
          cve_ent: ""
        },
        municipio: {
          nom_mun: "",
          cve_mun: ""
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
          nom_ent: "",
          cve_ent: ""
        },
        municipio: {
          nom_mun: "",
          cve_mun: ""
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
          nom_ent: "",
          cve_ent: ""
        },
        municipio: {
          nom_mun: "",
          cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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

export var clean = {
  datos_curriculares_grados_academicos: {
    grado_obtenido: "",
    institucion_educativa: "",
    lugar_institucion_educativa: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad: {
        nom_ent: "",
        cve_ent: ""
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
        nom_ent: "",
        cve_ent: ""
      }
    },
    direccion_encargo: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
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
  datos_clientes_principales: {
    id: null,
    nombre_negocio: "",
    numero_Registro: "",
    dueno_encargado: "",
    nombre: "",
    rfc: "",
    domicilio: {
      pais: {
        valor: "",
        codigo: ""
      },
      entidad_federativa: {
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
          nom_ent: "",
          cve_ent: ""
        },
        municipio: {
          nom_mun: "",
          cve_mun: ""
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
          nom_ent: "",
          cve_ent: ""
        },
        municipio: {
          nom_mun: "",
          cve_mun: ""
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
          nom_ent: "",
          cve_ent: ""
        },
        municipio: {
          nom_mun: "",
          cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
    montos_abonados: [],
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
        nom_ent: "",
        cve_ent: ""
      },
      municipio: {
        nom_mun: "",
        cve_mun: ""
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
    montos_abonados: [],
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
  }
};

export var example = {
  id: "a1b2c3d4",
  metadata: {
    actualizacion: "2017-07-21T17:32:28Z",
    institucion: "Secretaría de Educación Pública",
    contacto: "usuario@dominio.org",
    persona_contacto: "José John",
    diccionario: "https://diccionario.mx/archivo.csv"
  },
  informacion_personal: {
    informacion_general: {
      nombres: "Carlos",
      primer_apellido: "Pérez",
      segundo_apellido: "López",
      nacionalidades: [
        {
          valor: "México",
          codigo: "MX"
        }
      ],
      pais_nacimiento: {
        valor: "México",
        codigo: "MX"
      },
      entidad_federativa_nacimiento: {
        nom_ent: "México",
        cve_ent: "15"
      },
      curp: "BEML920313HMCLNS09",
      rfc: "GOAP780710RH7",
      fecha_nacimiento: "2010-07-26",
      numero_identificacion_oficial: "a1b2c3d4",
      correo_electronico: {
        personal: "jperez@ejemplo.com.mx",
        laboral: "jperez@ejemplo.com.mx"
      },
      telefono: {
        particular: "+525510203040",
        celular: "+525510203040"
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
      estado_civil: {
        codigo: "CAS",
        valor: "Casado (a)"
      },
      regimen_matrimonial: {
        codigo: "SBI",
        valor: "Separación de Bienes"
      },
      fecha_declaracion: "2010-07-26"
    },
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
          ano_conclusion: 2005,
          documento_obtenido: {
            codigo: "BOL",
            valor: "Boleta"
          },
          cedula_profesional: "2094884"
        }
      ]
    },
    datos_encargo_actual: {
      ente_publico: "Presidencia de la República",
      empleo_cargo_comision: "Director General de Datos Abiertos",
      nivel_gobierno: {
        codigo: "EST",
        valor: "Estatal"
      },
      poder_juridico: {
        codigo: "JUD",
        valor: "Judicial"
      },
      contratado_honorarios: true,
      nivel_encargo: "CA0001",
      area_adscripcion: "Unidad de Política Regulatoria",
      fecha_posesion: "2010-07-26",
      lugar_ubicacion: {
        pais: {
          valor: "México",
          codigo: "MX"
        },
        entidad: {
          nom_ent: "México",
          cve_ent: "15"
        }
      },
      direccion_encargo: {
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
      telefono_laboral: {
        numero: "+525510203040",
        extension: 1020
      },
      sector_industria: {
        codigo: "SFS",
        valor: "Servicios de salud y asistencia social"
      },
      funciones_principales: [
        {
          codigo: "ABI",
          valor: "Administración de bienes"
        }
      ]
    },
    experiencia_laboral: [
      {
        ambito: {
          codigo: "PUB",
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
        fecha_ingreso: "2010-07-26",
        fecha_salida: "2010-07-26",
        funciones_principales: [
          {
            codigo: "ABI",
            valor: "Administración de bienes"
          }
        ]
      }
    ],
    dependientes_economicos: [
      {
        nombre_personal: {
          nombres: "Carlos",
          primer_apellido: "Perez",
          segundo_apellido: "Lopez"
        },
        tipo_relacion: {
          codigo: "CONY",
          valor: "Cónyuge"
        },
        nacionalidades: [
          {
            valor: "México",
            codigo: "MX"
          }
        ],
        curp: "BEML920313HMCLNS09",
        rfc: "GOAP780710RH7",
        fecha_nacimiento: "2010-07-26",
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
    ]
  },
  intereses: {
    empresas_sociedades_asociaciones: [
      {
        id: 123,
        nombre_empresa_sociedad_asociacion: "DataIQ",
        pais_registro: {
          valor: "México",
          codigo: "MX"
        },
        fecha_constitucion: "2010-07-26",
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
        tipo_apoyo: {
          valor:"Servicio",
          codigo:"SERV"
        },
        valor_anual_apoyo: 7500,
        observaciones: "Esto es una observación"
      }
    ],
    representacion_activa: [
      {
        id: 123,
        tipo_representacion: "Mandato",
        nombre_parte_representada: "Cecilia Gomez Urrutia",
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
        nombre: "Augusto Fernandez Castro",
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
        nombre: "Armando Rodriguez Saes",
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
        numero_registro: "HTC896DSFA",
        dueno_encargado: "Salvador Hernández Torres",
        nombre: "AMEX S A",
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
    otras_partes: [
      {
        id: 123,
        tipo_relacion: "Garantes de Préstamos Recibidos",
        nombre_denominacion_parte: "Sergio Rodriguez",
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
      }
    ],
    beneficios_gratuitos: [
      {
        id: 123,
        tipo_beneficio: "Tarjetas o monederos electrónicos",
        origen_beneficio: "Prestación laboral",
        sector_industria: {
          codigo: "SFS",
          valor: "Servicios de salud y asistencia social"
        },
        valor_beneficio: 1256,
        observaciones: "Esto es una observación"
      }
    ]
  },
  ingresos: {
    sueldos_salarios_publicos: [
      {
        id: 123,
        ente_publico: {
          valor: "SECRETARIA DE GOBERNACION",
          codigo: "SEGOB"
        },
        rfc: "GOAP780710RH7",
        ingreso_bruto_anual: {
          valor: 10000,
          moneda: {
            codigo: "MXN",
            moneda: "MXN"
          },
          unidad_temporal: {
            codigo: "MESS",
            valor: "Meses"
          },
          duracion_frecuencia: 10,
          fecha_transaccion: "2010-07-26"
        },
        observaciones: "Esto es una observación"
      }
    ],
    sueldos_salarios_otros_empleos: [
      {
        id: 123,
        nombre_denominacion_razon_social: "Max Power Inc",
        rfc: "GOAP780710RH7",
        curp: "BEML920313HMCLNS09",
        sector_industria: {
          codigo: "SFS",
          valor: "Servicios de salud y asistencia social"
        },
        tipo_actividad_servicio: {
          codigo: "SPU",
          valor: "Sector Público"
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
            moneda: "MXN"
          },
          unidad_temporal: {
            codigo: "MESS",
            valor: "Meses"
          },
          duracion_frecuencia: 10,
          fecha_transaccion: "2010-07-26"
        },
        observaciones: "Esto es una observación"
      }
    ],
    actividad_profesional: [
      {
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
          valor: "Sector Público"
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
            moneda: "MXN"
          },
          unidad_temporal: {
            codigo: "MESS",
            valor: "Meses"
          },
          duracion_frecuencia: 10,
          fecha_transaccion: "2010-07-26"
        },
        observaciones: "Esto es una observación"
      }
    ],
    actividad_empresarial: [
      {
        id: 123,
        nombre_denominacion_razon_social: "Empresa S A",
        rfc: "GOAP780710RH7",
        curp: "BEML920313HMCLNS09",
        sector_industria: {
          codigo: "SFS",
          valor: "Servicios de salud y asistencia social"
        },
        tipo_actividad_servicio: {
          codigo: "SPU",
          valor: "Sector Público"
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
            moneda: "MXN"
          },
          unidad_temporal: {
            codigo: "MESS",
            valor: "Meses"
          },
          duracion_frecuencia: 10,
          fecha_transaccion: "2010-07-26"
        },
        observaciones: "Esto es una observación"
      }
    ],
    actividad_economica_menor: [
      {
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
          valor: "Sector Público"
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
            moneda: "MXN"
          },
          unidad_temporal: {
            codigo: "MESS",
            valor: "Meses"
          },
          duracion_frecuencia: 10,
          fecha_transaccion: "2010-07-26"
        },
        observaciones: "Esto es una observación"
      }
    ],
    arrendamiento: [
      {
        id: 123,
        nombre_denominacion_razon_social: "ABC Inc",
        rfc: "GOAP780710RH7",
        curp: "BEML920313HMCLNS09",
        sector_industria: {
          codigo: "SFS",
          valor: "Servicios de salud y asistencia social"
        },
        tipo_actividad_servicio: {
          codigo: "SPU",
          valor: "Sector Público"
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
            moneda: "MXN"
          },
          unidad_temporal: {
            codigo: "MESS",
            valor: "Meses"
          },
          duracion_frecuencia: 10,
          fecha_transaccion: "2010-07-26"
        },
        observaciones: "Esto es una observación"
      }
    ],
    intereses: [
      {
        id: 123,
        nombre_denominacion_razon_social: "BANC",
        rfc: "GOAP780710RH7",
        curp: "BEML920313HMCLNS09",
        sector_industria: {
          codigo: "SFS",
          valor: "Servicios de salud y asistencia social"
        },
        tipo_actividad_servicio: {
          codigo: "SPU",
          valor: "Sector Público"
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
            moneda: "MXN"
          },
          unidad_temporal: {
            codigo: "MESS",
            valor: "Meses"
          },
          duracion_frecuencia: 10,
          fecha_transaccion: "2010-07-26"
        },
        observaciones: "Esto es una observación"
      }
    ],
    premios: [
      {
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
          valor: "Sector Público"
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
            moneda: "MXN"
          },
          unidad_temporal: {
            codigo: "MESS",
            valor: "Meses"
          },
          duracion_frecuencia: 10,
          fecha_transaccion: "2010-07-26"
        },
        observaciones: "Esto es una observación"
      }
    ],
    enajenacion_bienes: [
      {
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
          valor: "Sector Público"
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
            moneda: "MXN"
          },
          unidad_temporal: {
            codigo: "MESS",
            valor: "Meses"
          },
          duracion_frecuencia: 10,
          fecha_transaccion: "2010-07-26"
        },
        observaciones: "Esto es una observación"
      }
    ],
    otros_ingresos: [
      {
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
          valor: "Sector Público"
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
            moneda: "MXN"
          },
          unidad_temporal: {
            codigo: "MESS",
            valor: "Meses"
          },
          duracion_frecuencia: 10,
          fecha_transaccion: "2010-07-26"
        },
        observaciones: "Esto es una observación"
      }
    ]
  },
  activos: {
    bienes_inmuebles: [
      {
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
          primer_apellido: "Perez",
          segundo_apellido: "Sanchez"
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
        nombre_denominacion_quien_adquirio: "Monster Inc",
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
            moneda: "MXN"
          }
        },
        valor_catastral: 800,
        observaciones: "Esto es una observación"
      }
    ],
    bienes_muebles_registrables: [
      {
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
        nombres_copropietarios: ["Monstr Inc"],
        numero_registro_vehicular: 455000,
        forma_adquisicion: {
          codigo: "CES",
          valor: "Cesión"
        },
        nombre_denominacion_adquirio: "Monstr Inc",
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
            moneda: "MXN"
          }

        },
        observaciones: "Esto es una observación"
      }
    ],
    bienes_muebles_no_registrables: [
      {
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
        nombres_copropietarios: ["Monstr Incorporation"],
        forma_adquisicion: {
          codigo: "CES",
          valor: "Cesión"
        },
        nombre_denominacion_adquirio: "Tesl Mtr Inc",
        relacion_quien_adquirio: {
          codigo: "CONY",
          valor: "Cónyuge"
        },
        fecha_adquisicion: "2010-07-26",
        precio_adquisicion: {
          valor: 4000,
          moneda: {
            codigo: "MXN",
            moneda: "MXN"
          }
        },
        observaciones: "Esto es una observación"
      }
    ],
    inversiones_cuentas_valores: [
      {
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
          moneda: "MXN"
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
      }
    ],
    efectivo_metales: [
      {
        id: 123,
        tipo_operacion: {
          codigo: "INCP",
          valor: "Incorporación"
        },
        tipo_moneda: {
          codigo: "MXN",
          moneda: "MXN"
        },
        monto_moneda: 78555,
        tipo_metal: {
          codigo: "ORO",
          valor: "Oro"
        },
        unidades: 100,
        monto_metal: 78555,
        forma_adquisicion: {
          codigo: "CES",
          valor: "Cesión"
        },
        observaciones_comentarios: "Esto es una observación"
      }
    ],
    fideicomisos: [
      {
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
          moneda: "MXN"
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
      }
    ],
    bienes_intangibles: [
      {
        id: 123,
        tipo_operacion: {
          codigo: "INCP",
          valor: "Incorporación"
        },
        propietario_registrado: ["Sergio Perez"],
        descripcion: "Aquí va una descripción",
        ente_publico_encargado: "Presidencia de la República",
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
            moneda: "MXN"
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
            moneda: "MXN"
          }
        },
        nombre_copropietario: "Vien Incorporation",
        porcentaje_propiedad_copropietario: 70,
        observaciones: "Esto es una observación"
      }
    ],
    cuentas_por_cobrar: [
      {
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
      }
    ],
    uso_especie_propiedad_tercero: [
      {
        id: 123,
        tipo_bien: {
          codigo: "VEH",
          valor: "Vehículo"
        },
        valor_mercado: {
          valor: 4000,
          moneda: {
            codigo: "MXN",
            moneda: "MXN"
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
      }
    ]
  },
  pasivos: {
    deudas: [
      {
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
        nombre_acreedor: "PNBKSRIBAS SA DE CV",
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
          moneda: "MXN"
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
      }
    ],
    otras_obligaciones: [
      {
        id: 123,
        tipo_operacion: {
          codigo: "INCP",
          valor: "Incorporación"
        },
        tipo_acreedor: {
          codigo: "INSTF",
          valor: "Institución Financiera"
        },
        tipo_obligacion: {
          codigo: "CVH",
          valor: "Compra de vehículo"
        },
        identificador_obligacion: "FONAET8945",
        nacional_extranjero: {
          valor: "México",
          codigo: "MX"
        },
        nombre_acreedor: "Bansky",
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
          moneda: "MXN"
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
      }
    ]
  }
};
