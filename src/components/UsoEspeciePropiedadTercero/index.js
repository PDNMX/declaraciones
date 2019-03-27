import React from "react";
import PropietarioTerceroForm from "./PropietarioTercero";
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
  catTipoMoneda,
  catRelacionDeclarante,
  catSectorIndustria
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class UsoEspeciePropiedadTercero extends React.Component {
  constructor(props) {
    super(props);

    let info;

    info = clean;
    info = example;

    this.state = {
      datos_uso_especie_propiedad_tercero:
        info.activos.uso_especie_propiedad_tercero[0],
      uso_especie_propiedad_tercero: [],
      catPaises: [],
      catEntidadesFederativas: [],
      catMunicipios: [],
      catLocalidades: [],
      catTipoVialidad: [],
      catTipoMoneda: [],
      catRelacionDeclarante: [],
      catSectorIndustria: []
    };

    // console.log("state constructor", this.state);
  }

  componentDidMount() {
    catPaises().then(data => {
      this.setState({ catPaises: data });
    });
    catEntidadesFederativas().then(data => {
      this.setState({ catEntidadesFederativas: data });
    });
    catMunicipios().then(data => {
      this.setState({ catMunicipios: data });
    });
    catLocalidades().then(data => {
      this.setState({ catLocalidades: data });
    });
    catTipoVialidad().then(data => {
      this.setState({ catTipoVialidad: data });
    });
    catTipoMoneda().then(data => {
      this.setState({ catTipoMoneda: data });
    });
    catRelacionDeclarante().then(data => {
      this.setState({ catRelacionDeclarante: data });
    });
    catSectorIndustria().then(data => {
      this.setState({ catSectorIndustria: data });
    });
  }

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
        data.datos_uso_especie_propiedad_tercero.relacion_persona = getData(
          catRelacionDeclarante,
          valor
        );
        break;
      case "rfc_tercero_propietario":
        data.datos_uso_especie_propiedad_tercero.rfc_tercero_propietario = valor;
        break;
      case "sector_industria":
        data.datos_uso_especie_propiedad_tercero.sector_industria = getData(
          catSectorIndustria,
          valor
        );
        break;
      case "tipo_bien":
        data.datos_uso_especie_propiedad_tercero.tipo_bien = valor;
        break;
      case "valor_mercado.moneda":
        data.datos_uso_especie_propiedad_tercero.valor_mercado.moneda = getData(
          catTipoMoneda,
          valor
        );
        break;
      case "valor_mercado":
        data.datos_uso_especie_propiedad_tercero.valor_mercado.valor = valor;
        break;

      /////////////////////////////  domicilio_persona  /////////////////////////////////////
      case "pais":
        data.datos_uso_especie_propiedad_tercero.domicilio_persona.pais = getData(
          catPaises,
          valor
        );
        break;
      case "entidad_federativa":
        data.datos_uso_especie_propiedad_tercero.domicilio_persona.entidad_federativa = getEntidadesFederativas(
          catEntidadesFederativas,
          valor
        );
        break;
      case "municipio":
        data.datos_uso_especie_propiedad_tercero.domicilio_persona.municipio = getMunicipios(
          catMunicipios,
          valor
        );

        this.updateLocalidades(
          this.state.datos_uso_especie_propiedad_tercero.domicilio_persona
            .entidad_federativa.cve_agee,
          valor
        );
        break;
      case "cp":
        data.datos_uso_especie_propiedad_tercero.domicilio_persona.cp = valor;
        break;
      case "localidad":
        data.datos_uso_especie_propiedad_tercero.domicilio_persona.localidad = getLocalidades(
          catLocalidades,
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

  addClickPropietarioTercero = () => {
    let data = Object.assign(
      {},
      this.state.datos_uso_especie_propiedad_tercero
    );
    let info = Object.assign(
      {},
      clean.activos.uso_especie_propiedad_tercero[0]
    );

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

  render() {
    return (
      <PropietarioTerceroForm
        data={this.state}
        handleChange={this.setDataUsoEspeciePropiedadTercero}
        addClick={this.addClickPropietarioTercero}
        removeClick={this.removeClickPropietarioTercero}
      />
    );
  }
}

export default UsoEspeciePropiedadTercero;
