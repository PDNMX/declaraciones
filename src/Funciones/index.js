var apiHost = process.env.REACT_APP_API || "https://localhost/captura/api/";

export const catSectorIndustria = () => {
  return fetch(apiHost + "catSectorIndustria")
    .then(res => res.json())
    .then(data => data);
};

export const catEntidadesFederativas = () => {
  // return fetch(apiHost + "catEntidadesFederativas")
  //   .then(res => res.json())
  //   .then(data => data);
  return fetch("https://gaia.inegi.org.mx/wscatgeo/mgee/")
    .then(res => res.json())
    .then(data => data.datos);
};

export const catMunicipios = cve_agee => {
  return fetch(apiHost + "catMunicipios?cve_agee=" + cve_agee)
    .then(res => res.json())
    .then(data => data);
};

export const catLocalidades = (cve_agee, cve_mun) => {
  return fetch(
    apiHost + "catLocalidades?cve_agee=" + cve_agee + "&cve_mun=" + cve_mun
  )
    .then(res => res.json())
    .then(data => data);
};
export const catTipoVialidad = () => {
  return fetch(apiHost + "catTiposVialidades")
    .then(res => res.json())
    .then(data => data);
};

export const catPaises = () => {
  return fetch(apiHost + "catCiudades")
    .then(res => res.json())
    .then(data => data);
};

export const catEstadoCivil = () => {
  return fetch(apiHost + "catEstadosCiviles")
    .then(res => res.json())
    .then(data => data);
};

export const catRegimenMatrimonial = () => {
  return fetch(apiHost + "regimenmatrimonial")
    .then(res => res.json())
    .then(data => data);
};
export const catTipoMoneda = () => {
  return fetch(apiHost + "catTiposMonedas")
    .then(res => res.json())
    .then(data => data);
};
export const catMedidaPlazo = () => {
  return fetch(apiHost + "catMedidasPlazos")
    .then(res => res.json())
    .then(data => data);
};
export const catNaturalezaMembresia = () => {
  return fetch(apiHost + "catNaturalezaMembresias")
    .then(res => res.json())
    .then(data => data);
};
export const catTiposActividades = () => {
  return fetch(apiHost + "catTiposActividades")
    .then(res => res.json())
    .then(data => data);
};
export const catNivelGobierno = () => {
  return fetch(apiHost + "nivelGobierno")
    .then(res => res.json())
    .then(data => data);
};
export const catTipoApoyo = () => {
  return fetch(apiHost + "catTiposApoyos")
    .then(res => res.json())
    .then(data => data);
};
export const catTipoInstitucion = () => {
  return fetch(apiHost + "catTiposInstituciones")
    .then(res => res.json())
    .then(data => data);
};
export const catTipoBien = () => {
  return fetch(apiHost + "catTiposBienes")
    .then(res => res.json())
    .then(data => data);
};
export const catFormaAdquision = () => {
  return fetch(apiHost + "catFormaAdquision")
    .then(res => res.json())
    .then(data => data);
};
export const catTipoBienInmueble = () => {
  return fetch(apiHost + "catTiposBienesInmuebles")
    .then(res => res.json())
    .then(data => data);
};

export const catTipoOperacion = () => {
  return fetch(apiHost + "catTipoOperacion")
    .then(res => res.json())
    .then(data => data);
};
export const catTitularBien = () => {
  return fetch(apiHost + "catTitularesBienes")
    .then(res => res.json())
    .then(data => data);
};
export const catTipoRepresentacion = () => {
  return fetch(apiHost + "catTiposRepresentaciones")
    .then(res => res.json())
    .then(data => data);
};
export const catDependencia = () => {
  return fetch(apiHost + "catDependencias")
    .then(res => res.json())
    .then(data => data);
};
export const catTipoFideicomiso = () => {
  return fetch(apiHost + "catTiposFideicomisos")
    .then(res => res.json())
    .then(data => data);
};

export const catPoderJuridico = () => {
  return fetch(apiHost + "catPoderesJuridicos")
    .then(res => res.json())
    .then(data => data);
};
export const catTipoInversion = () => {
  return fetch(apiHost + "catTiposInversiones")
    .then(res => res.json())
    .then(data => data);
};
export const catTipoEspecificoInversion = () => {
  return fetch(apiHost + "catTiposEspecificosInversion")
    .then(res => res.json())
    .then(data => data);
};
export const catTipoAdeudo = () => {
  return fetch(apiHost + "catTiposAdeudos")
    .then(res => res.json())
    .then(data => data);
};

export const catRelacionDeclarante = () => {
  return fetch(apiHost + "catRelacionDeclarante")
    .then(res => res.json())
    .then(data => data);
};

export const catAmbito = () => {
  return fetch(apiHost + "catAmbito")
    .then(res => res.json())
    .then(data => data);
};
export const catTipoMetal = () => {
  return fetch(apiHost + "catTipoMetal")
    .then(res => res.json())
    .then(data => data);
};
export const catTipoAcreedor = () => {
  return fetch(apiHost + "catTipoAcreedor")
    .then(res => res.json())
    .then(data => data);
};
export const catEstatusEstudio = () => {
  return fetch(apiHost + "catEstadosEstudios")
    .then(res => res.json())
    .then(data => data);
};
export const catDocumentoObtenido = () => {
  return fetch(apiHost + "catDocumentosObtenidos")
    .then(res => res.json())
    .then(data => data);
};

export const getData = (data, codigo) => {
  let info = data.filter(x => x.codigo === codigo);
  return {
    codigo: info[0].codigo,
    valor: info[0].valor
  };
};
export const getEntidadesFederativas = (data, cve_agee) => {
  let info = data.filter(x => x.cve_agee === cve_agee);

  return {
    nom_agee: info[0].nom_agee,
    cve_agee: info[0].cve_agee
  };
};
export const getMunicipios = (data, cve_mun) => {
  let info = data.filter(x => x.cve_mun === cve_mun);

  return {
    nom_mun: info[0].nom_mun,
    cve_mun: info[0].cve_mun
  };
};
export const getLocalidades = (data, cve_loc) => {
  let info = data.filter(x => x.cve_loc === cve_loc);

  return {
    nom_loc: info[0].nom_loc,
    cve_loc: info[0].cve_loc
  };
};
