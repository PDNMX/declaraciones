import React from "react";

import BienesInmueblesForm from "./BienesInmuebles";
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
  catTipoBien,
  catTitularBien,
  catFormaAdquision,
  catRelacionDeclarante,
  catSectorIndustria,
  catTipoMoneda
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class BienesInmuebles extends React.Component {
  constructor(props) {
    super(props);

    let info;

    info = clean;
    info = example;

    this.state = {
      datos_bienes_inmuebles: info.activos.bienes_inmuebles[0],
      bienes_inmuebles: [],
      catPaises: [],
      catEntidadesFederativas: [],
      catMunicipios: [],
      catLocalidades: [],
      catTipoVialidad: [],
      catTipoOperacion: [],
      catTipoBien: [],
      catTitularBien: [],
      catFormaAdquision: [],
      catRelacionDeclarante: [],
      catSectorIndustria: [],
      catTipoMoneda: []
    };

    // console.log("state constructor", this.state);
  }

  componentDidMount() {

    let {
      entidad_federativa,
      municipio
    } = this.state.datos_bienes_inmuebles.domicilio_bien;

    catPaises().then(data => {
      this.setState({ catPaises: data });
    });
    catEntidadesFederativas().then(data => {
      this.setState({ catEntidadesFederativas: data });
    });
    if (entidad_federativa.cve_agee !== "") {
      catMunicipios(entidad_federativa.cve_agee).then(data => {
        this.setState({ catMunicipios: data });
      });

      if (municipio.cve_agem !== "") {
        catLocalidades(entidad_federativa.cve_agee, municipio.cve_agem).then(
          data => {
            this.setState({ catLocalidades: data });
          }
        );
      }
    }
    catTipoVialidad().then(data => {
      this.setState({ catTipoVialidad: data });
    });
    catTipoOperacion().then(data => {
      this.setState({ catTipoOperacion: data });
    });
    catTipoBien().then(data => {
      this.setState({ catTipoBien: data });
    });
    catTitularBien().then(data => {
      this.setState({ catTitularBien: data });
    });
    catFormaAdquision().then(data => {
      this.setState({ catFormaAdquision: data });
    });
    catRelacionDeclarante().then(data => {
      this.setState({ catRelacionDeclarante: data });
    });
    catSectorIndustria().then(data => {
      this.setState({ catSectorIndustria: data });
    });
    catTipoMoneda().then(data => {
      this.setState({ catTipoMoneda: data });
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
          this.state.catFormaAdquision,
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
          this.state.catTipoMoneda,
          valor
        );
        break;
      case "precio_adquisicion":
        data.datos_bienes_inmuebles.precio_adquisicion.valor = valor;
        break;
      case "relacion_persona_adquirio":
        data.datos_bienes_inmuebles.relacion_persona_adquirio = getData(
          this.state.catRelacionDeclarante,
          valor
        );
        break;
      case "rfc_quien_adquirio":
        data.datos_bienes_inmuebles.rfc_quien_adquirio = valor;
        break;
      case "sector_industria":
        data.datos_bienes_inmuebles.sector_industria = getData(
          this.state.catSectorIndustria,
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
        data.datos_bienes_inmuebles.tipo_bien = getData(this.state.catTipoBien, valor);
        break;
      case "tipo_operacion":
        data.datos_bienes_inmuebles.tipo_operacion = getData(
          this.state.catTipoOperacion,
          valor
        );
        break;
      case "valor_this.state.catastral":
        data.datos_bienes_inmuebles.valor_this.state.catastral = valor;
        break;

      case "titular":
        data.datos_bienes_inmuebles.titular = getData(this.state.catTitularBien, valor);
        break;

      /////////////////////////////  domicilio_bien  /////////////////////////////////////
      case "pais":
        data.datos_bienes_inmuebles.domicilio_bien.pais = getData(
          this.state.catPaises,
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_bienes_inmuebles.domicilio_bien.entidad_federativa = getEntidadesFederativas(
          this.state.catEntidadesFederativas,
          valor
        );
        break;
      case "municipio":
        data.datos_bienes_inmuebles.domicilio_bien.municipio = getMunicipios(
          this.state.catMunicipios,
          valor
        );


        break;
      case "cp":
        data.datos_bienes_inmuebles.domicilio_bien.cp = valor;
        break;
      case "localidad":
        data.datos_bienes_inmuebles.domicilio_bien.localidad = getLocalidades(
          this.state.catLocalidades,
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
      <BienesInmueblesForm
        data={this.state}
        handleChange={this.setDataBienesInmuebles}
        addClick={this.addClickBienesInmuebles}
        removeClick={this.removeClickBienesInmuebles}
      />
    );
  }
}

export default BienesInmuebles;
