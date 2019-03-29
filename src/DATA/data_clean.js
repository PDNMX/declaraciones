export var clean = {
  id: "",
  metadata: {
    actualizacion: "",
    institucion: "",
    contacto: "",
    persona_contacto: "",
    diccionario: ""
  },
  informacion_personal: {
    informacion_general: {
      nombres: "",
      primer_apellido: "",
      segundo_apellido: "",
      nacionalidades: [
        {
          valor: "",
          codigo: ""
        }
      ],
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
          cve_agem: ""
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
    datos_curriculares: {
      grado_maximo_escolaridad: "",
      grados_academicos: [
        {
          grado_obtenido: "",
          institucion_educativa: "",
          lugar_institucion_educativa: {
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
              cve_agem: ""
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
        }
      ]
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
          cve_agem: ""
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
    experiencia_laboral: [
      {
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
            cve_agem: ""
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
        funciones_principales: [
          {
            codigo: "",
            valor: ""
          }
        ]
      }
    ],
    dependientes_economicos: [
      {
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
            cve_agem: ""
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
        desarrolla_cabildeo_sector_declarante: {
          respuesta: false,
          observaciones: ""
        },
        beneficiario_programa_publico: [
          {
            nombre_programa: "",
            institucion_otorga_apoyo: "",
            tipo_apoyo: {
              codigo: "",
              valor: ""
            },
            valor_apoyo: ""
          }
        ],
        observaciones: ""
      }
    ]
  },
  intereses: {
    empresas_sociedades_asociaciones: [
      {
        id: "",
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
            cve_agem: ""
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
        porcentaje_participacion: ""
      }
    ],
    membresias: [
      {
        id: "",
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
            cve_agem: ""
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
      }
    ],
    apoyos_beneficios_publicos: [
      {
        id: "",
        es_beneficiario: false,
        programa: "",
        institucion_otorgante: "",
        nivel_orden_gobierno: {
          codigo: "",
          valor: ""
        },
        tipo_apoyo: {
          codigo: "",
          valor: ""
        },
        valor_anual_apoyo: "",
        observaciones: ""
      }
    ],
    representacion_activa: [
      {
        id: "",
        tipo_representacion: {
          codigo: "",
          valor: ""
        },
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
      }
    ],
    representacion_pasiva: [
      {
        id: "",
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
      }
    ],
    socios_comerciales: [
      {
        id: "",
        nombre_actividad: "",
        tipo_vinculo: "",
        antiguedad_vinculo: "",
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
        porcentaje_participacion: "",
        sector_industria: {
          codigo: "",
          valor: ""
        },
        observaciones: ""
      }
    ],
    clientes_principales: [
      {
        id: "",
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
            cve_agem: ""
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
        porcentaje_participacion: "",
        observaciones: ""
      }
    ],
    otras_partes: [
      {
        id: "",
        tipo_relacion: {
          codigo: "",
          valor: ""
        },
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
      }
    ],
    beneficios_gratuitos: [
      {
        id: "",
        tipo_beneficio: "",
        origen_beneficio: "",
        sector_industria: {
          codigo: "",
          valor: ""
        },
        valor_beneficio: "",
        observaciones: ""
      }
    ]
  },
  ingresos: {
    sueldos_salarios_publicos: [
      {
        id: "",
        ente_publico: {
          valor: "",
          codigo: ""
        },
        rfc: "",
        ingreso_bruto_anual: {
          valor: "",
          moneda: {
            codigo: "",
            moneda: ""
          },
          unidad_temporal: {
            codigo: "",
            valor: ""
          },
          duracion_frecuencia: "",
          fecha_transaccion: ""
        },
        observaciones: ""
      }
    ],
    sueldos_salarios_otros_empleos: [
      {
        id: "",
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
            cve_agem: ""
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
          valor: "",
          moneda: {
            codigo: "",
            moneda: ""
          },
          unidad_temporal: {
            codigo: "",
            valor: ""
          },
          duracion_frecuencia: "",
          fecha_transaccion: ""
        },
        observaciones: ""
      }
    ],
    actividad_profesional: [
      {
        id: "",
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
            cve_agem: ""
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
          valor: "",
          moneda: {
            codigo: "",
            moneda: ""
          },
          unidad_temporal: {
            codigo: "",
            valor: ""
          },
          duracion_frecuencia: "",
          fecha_transaccion: ""
        },
        observaciones: ""
      }
    ],
    actividad_empresarial: [
      {
        id: "",
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
            cve_agem: ""
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
          valor: "",
          moneda: {
            codigo: "",
            moneda: ""
          },
          unidad_temporal: {
            codigo: "",
            valor: ""
          },
          duracion_frecuencia: "",
          fecha_transaccion: ""
        },
        observaciones: ""
      }
    ],
    actividad_economica_menor: [
      {
        id: "",
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
            cve_agem: ""
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
          valor: "",
          moneda: {
            codigo: "",
            moneda: ""
          },
          unidad_temporal: {
            codigo: "",
            valor: ""
          },
          duracion_frecuencia: "",
          fecha_transaccion: ""
        },
        observaciones: ""
      }
    ],
    arrendamiento: [
      {
        id: "",
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
            cve_agem: ""
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
          valor: "",
          moneda: {
            codigo: "",
            moneda: ""
          },
          unidad_temporal: {
            codigo: "",
            valor: ""
          },
          duracion_frecuencia: "",
          fecha_transaccion: ""
        },
        observaciones: ""
      }
    ],
    intereses: [
      {
        id: "",
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
            cve_agem: ""
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
          valor: "",
          moneda: {
            codigo: "",
            moneda: ""
          },
          unidad_temporal: {
            codigo: "",
            valor: ""
          },
          duracion_frecuencia: "",
          fecha_transaccion: ""
        },
        observaciones: ""
      }
    ],
    premios: [
      {
        id: "",
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
            cve_agem: ""
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
          valor: "",
          moneda: {
            codigo: "",
            moneda: ""
          },
          unidad_temporal: {
            codigo: "",
            valor: ""
          },
          duracion_frecuencia: "",
          fecha_transaccion: ""
        },
        observaciones: ""
      }
    ],
    enajenacion_bienes: [
      {
        id: "",
        nombre_denominacion: "",
        rfc: "",
        curp: "",
        tipo_bien: {
          codigo: "",
          valor: ""
        },
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
            cve_agem: ""
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
          valor: "",
          moneda: {
            codigo: "",
            moneda: ""
          },
          unidad_temporal: {
            codigo: "",
            valor: ""
          },
          duracion_frecuencia: "",
          fecha_transaccion: ""
        },
        observaciones: ""
      }
    ],
    otros_ingresos: [
      {
        id: "",
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
            cve_agem: ""
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
          valor: "",
          moneda: {
            codigo: "",
            moneda: ""
          },
          unidad_temporal: {
            codigo: "",
            valor: ""
          },
          duracion_frecuencia: "",
          fecha_transaccion: ""
        },
        observaciones: ""
      }
    ]
  },
  activos: {
    bienes_inmuebles: [
      {
        id: "",
        tipo_operacion: {
          codigo: "",
          valor: ""
        },
        tipo_bien: {
          codigo: "",
          valor: ""
        },
        superficie_terreno: "",
        superficie_construccion: "",
        titular: {
          codigo: "",
          valor: ""
        },
        porcentaje_propiedad: "",
        nombre_copropietario: {
          nombres: "",
          primer_apellido: "",
          segundo_apellido: ""
        },
        identificacion_bien: {
          numero_escritura_publica: "",
          numero_registro_publico: "",
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
            cve_agem: ""
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
          valor: "",
          moneda: {
            codigo: "",
            moneda: ""
          }
        },
        valor_catastral: "",
        observaciones: ""
      }
    ],
    bienes_muebles_registrables: [
      {
        id: "",
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
        modelo: "",
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
        porcentaje_propiedad: "",
        nombres_copropietarios: [""],
        numero_registro_vehicular: "",
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
          valor: "",
          moneda: {
            codigo: "",
            moneda: ""
          }
        },
        observaciones: ""
      }
    ],
    bienes_muebles_no_registrables: [
      {
        id: "",
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
        porcentaje_propiedad: "",
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
          valor: "",
          moneda: {
            codigo: "",
            moneda: ""
          }
        },
        observaciones: ""
      }
    ],
    inversiones_cuentas_valores: [
      {
        id: "",
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
            cve_agem: ""
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
        monto_original: "",
        tipo_moneda: {
          codigo: "",
          moneda: ""
        },
        tasa_interes: "",
        saldo_anual: "",
        plazo: "",
        unidad_medida_plazo: {
          codigo: "",
          valor: ""
        },
        titular_bien: {
          codigo: "",
          valor: ""
        },
        porcentaje_inversion: "",
        observaciones: ""
      }
    ],
    efectivo_metales: [
      {
        id: "",
        tipo_operacion: {
          codigo: "",
          valor: ""
        },
        tipo_moneda: {
          codigo: "",
          moneda: ""
        },
        monto_moneda: "",
        tipo_metal: {
          codigo: "",
          valor: ""
        },
        unidades: "",
        monto_metal: "",
        forma_adquisicion: {
          codigo: "",
          valor: ""
        },
        observaciones_comentarios: ""
      }
    ],
    fideicomisos: [
      {
        id: "",
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
        valor: "",
        moneda: {
          codigo: "",
          moneda: ""
        },
        porcentaje_propiedad_derechos_fiduciarios: "",
        ingreso_monetario_obtenido: "",
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
              cve_agem: ""
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
              cve_agem: ""
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
              cve_agem: ""
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
      }
    ],
    bienes_intangibles: [
      {
        id: "",
        tipo_operacion: {
          codigo: "",
          valor: ""
        },
        propietario_registrado: [""],
        descripcion: "",
        ente_publico_encargado: "",
        numero_registro: "",
        fecha_registro: "",
        sector_industria: {
          codigo: "",
          valor: ""
        },
        precio_adquisicion: {
          valor: "",
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
        porcentaje_copropiedad: "",
        precio_total_copropiedad: {
          valor: "",
          moneda: {
            codigo: "",
            moneda: ""
          }
        },
        nombre_copropietario: "",
        porcentaje_propiedad_copropietario: "",
        observaciones: ""
      }
    ],
    cuentas_por_cobrar: [
      {
        id: "",
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
            cve_agem: ""
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
        monto_original_prestamo: "",
        tasa_interes: "",
        saldo_pendiente: "",
        fecha_vencimiento: "",
        porcentaje_copropiedad: "",
        nombre_copropietario: "",
        observaciones: ""
      }
    ],
    uso_especie_propiedad_tercero: [
      {
        id: "",
        tipo_bien: "",
        valor_mercado: {
          valor: "",
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
            cve_agem: ""
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
      }
    ]
  },
  pasivos: {
    deudas: [
      {
        id: "",
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
            cve_agem: ""
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
        monto_original: "",
        tipo_moneda: {
          codigo: "",
          moneda: ""
        },
        tasa_interes: "",
        saldo_pendiente: "",
        montos_abonados: [],
        plazo_adeudo: "",
        unidad_medida_adeudo: {
          codigo: "",
          valor: ""
        },
        titularidad_deuda: {
          codigo: "",
          valor: ""
        },
        porcentaje_adeudo_titular: "",
        garantia: false,
        nombre_garante: "",
        observaciones: ""
      }
    ],
    otras_obligaciones: [
      {
        id: "",
        tipo_operacion: {
          codigo: "",
          valor: ""
        },
        tipo_acreedor: {
          codigo: "",
          valor: ""
        },
        tipo_obligacion: {
          codigo: "",
          valor: ""
        },
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
            cve_agem: ""
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
        monto_original: "",
        tipo_moneda: {
          codigo: "",
          moneda: ""
        },
        tasa_interes: "",
        saldo_pendiente: "",
        montos_abonados: [],
        plazo_obligacion: "",
        unidad_medida_plazo: {
          codigo: "",
          valor: ""
        },
        titularidad_obligacion: {
          codigo: "",
          valor: ""
        },
        porcentaje_obligacion_titular: "",
        garantia: false,
        nombre_garante: "",
        observaciones: ""
      }
    ]
  }
};
