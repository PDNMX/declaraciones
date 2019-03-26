import React from "react";

import BienesInmuebles from "./BienesInmuebles";
import {
  getData,
  catPaises,
  getEntidadesFederativas,
  catEntidadesFederativas,
  getMunicipios,
  catMunicipios,
  getLocalidades,
  catLocalidades,
  catTipoVialidad,
  catTipoOperacion,
  catTiposBienes,
  catTitularesBienes,
  catFormaAdquision,
  catRelacionDeclarante,
  catSectorIndustria,
  catTiposMonedas
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class BienesInmuebles extends React.Component {
  constructor(props) {
    super(props);

    let info;

    info = clean;
    info = example;

    // this.state = data;
    // this.state.informacion_general =
    //   info.informacion_personal.informacion_general;
    // this.state.entidad_federativa=getSectorIndustria();
    // let catEntidadesFederativas_data = catEntidadesFederativas();

    this.state = {
      datos_curriculares_grados_academicos:
        info.informacion_personal.datos_curriculares.grados_academicos[0],
      catEntidadesFederativas: [],
      catPaises: [],
      catEstatusEstudio: [],
      catDocumentoObtenido: [],
      curriculares_grados_academicos: []
    };

    // console.log("state constructor", this.state);
  }

  componentDidMount() {
    catEntidadesFederativas().then(data => {
      this.setState({ catEntidadesFederativas: data });
    });
    catPaises().then(data => {
      this.setState({ catPaises: data });
    });
  }

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
        data.datos_bienes_inmuebles.forma_adquisicion = getData(
          catFormaAdquision,
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
        data.datos_bienes_inmuebles.precio_adquisicion.moneda = getData(
          catTipoMoneda,
          valor
        );
        break;
      case "precio_adquisicion":
        data.datos_bienes_inmuebles.precio_adquisicion.valor = valor;
        break;
      case "relacion_persona_adquirio":
        data.datos_bienes_inmuebles.relacion_persona_adquirio = getData(
          catRelacionDeclarante,
          valor
        );
        break;
      case "rfc_quien_adquirio":
        data.datos_bienes_inmuebles.rfc_quien_adquirio = valor;
        break;
      case "sector_industria":
        data.datos_bienes_inmuebles.sector_industria = getData(
          catSectorIndustria,
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
        data.datos_bienes_inmuebles.tipo_bien = getData(catTiposBienes, valor);
        break;
      case "tipo_operacion":
        data.datos_bienes_inmuebles.tipo_operacion = getData(
          catTipoOperacion,
          valor
        );
        break;
      case "valor_catastral":
        data.datos_bienes_inmuebles.valor_catastral = valor;
        break;

      case "titular":
        data.datos_bienes_inmuebles.titular = getData(catTitularBien, valor);
        break;

      /////////////////////////////  domicilio_bien  /////////////////////////////////////
      case "pais":
        data.datos_bienes_inmuebles.domicilio_bien.pais = getData(
          catPaises,
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_bienes_inmuebles.domicilio_bien.entidad_federativa = getEntidadesFederativas(
          catEntidadesFederativas,
          valor
        );
        break;
      case "municipio":
        data.datos_bienes_inmuebles.domicilio_bien.municipio = getMunicipios(
          catMunicipios,
          valor
        );

        this.updateLocalidades(
          this.state.datos_bienes_inmuebles.domicilio_bien.entidad_federativa
            .cve_agee,
          valor
        );
        break;
      case "cp":
        data.datos_bienes_inmuebles.domicilio_bien.cp = valor;
        break;
      case "localidad":
        data.datos_bienes_inmuebles.domicilio_bien.localidad = getLocalidades(
          catLocalidades,
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

  addClickBienesInmuebles = () => {
    let data = Object.assign({}, this.state.datos_bienes_inmuebles);
    let info = Object.assign({}, clean.activos.bienes_inmuebles[0]);

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

  removeClickBienesInmuebles = index => event => {
    this.state.bienes_inmuebles.splice(index, 1);
    this.setState({ bienes_inmuebles: this.state.bienes_inmuebles }, () => {
      // console.log(this.state.bienes_inmuebles);
    });
  };

  render() {
    return (
      <BienesInmuebles
        data={this.state}
        handleChange={this.setDataBienesInmuebles}
        addClick={this.addClickBienesInmuebles}
        removeClick={this.removeClickBienesInmuebles}
      />
    );
  }
}

export default BienesInmuebles;
