import React from "react";
import OtrasPartesRelacionadas from "./OtrasPartesRelacionadas";
import {
  getData,
catRelacionDeclarante,
catPaises,
catSectorIndustria,
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class OtrasPartesRelacionadas extends React.Component {
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



setDataOtrasPartesRelacionadas = field => event => {
  let valor = event.target.value;
  let data = this.state;

  switch (field) {
    case "curp":
      data.datos_otras_partes.curp = valor;
      break;
    case "fecha_inicio_relacion":
      data.datos_otras_partes.fecha_inicio_relacion = valor;
      break;
    case "fecha_nacimiento":
      data.datos_otras_partes.fecha_nacimiento = valor;
      break;
    case "id":
      data.datos_otras_partes.id = valor;
      break;
    case "nacionalidades":
      data.datos_otras_partes.nacionalidades = valor;
      break;
    case "nombre_denominacion_parte":
      data.datos_otras_partes.nombre_denominacion_parte = valor;
      break;
    case "observaciones":
      data.datos_otras_partes.observaciones = valor;
      break;
    case "ocupacion":
      data.datos_otras_partes.ocupacion = valor;
      break;
    case "rfc":
      data.datos_otras_partes.rfc = valor;
      break;
    case "sector_industria":
      data.datos_otras_partes.sector_industria = getData(
        catSectorIndustria,
        valor
      );
      break;
    case "tiene_interes":
      data.datos_otras_partes.tiene_interes = !data.datos_otras_partes
        .tiene_interes;
      break;
    case "tipo_relacion":
      data.datos_otras_partes.tipo_relacion = getData(
        catRelacionDeclarante,
        valor
      );
      break;

    default:
      console.log(field);
  }

  this.setState(data);
};

addClickOtrasPartesRelacionadas = () => {
  let data = Object.assign({}, this.state.datos_otras_partes);
  let info = Object.assign({}, clean.intereses.otras_partes[0]);

  this.setState(
    {
      otras_partes: [...this.state.otras_partes, data],
      datos_otras_partes: info
    },
    () => {
      console.log(this.state.otras_partes);
    }
  );
};

removeClickOtrasPartesRelacionadas = index => event => {
  this.state.otras_partes.splice(index, 1);
  this.setState({ otras_partes: this.state.otras_partes }, () => {
    // console.log(this.state.otras_partes);
  });
};

  render() {
    return (
      <OtrasPartesRelacionadas
        data={this.state}
        handleChange={this.setDataOtrasPartesRelacionadas}
        addClick={this.addClickOtrasPartesRelacionadas}
        removeClick={this.removeClickOtrasPartesRelacionadas}
      />
    );
  }
}

export default OtrasPartesRelacionadas;
