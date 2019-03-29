import React from "react";
import SociosComercialesForm from "./SociosComerciales";
import {
  getData,
  catPaises,
  catEntidadesFederativas,
  getEntidadesFederativas,
  catSectorIndustria
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class SociosComerciales extends React.Component {
  constructor(props) {
    super(props);

    let info;

    info = clean;
    info = example;

    this.state = {
      datos_socios_comerciales: info.intereses.socios_comerciales[0],
      socios_comerciales: [],
      catPaises: [],
      catEntidadesFederativas: [],
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
    catSectorIndustria().then(data => {
      this.setState({ catSectorIndustria: data });
    });
  }

  setDataSociosComerciales = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "antiguedad_vinculo":
        data.datos_socios_comerciales.antiguedad_vinculo = valor;
        break;
      case "rfc_entidad":
        data.datos_socios_comerciales.rfc_entidad = valor;
        break;
      case "fecha_nacimiento":
        data.datos_socios_comerciales.fecha_nacimiento = valor;
        break;
      case "id":
        data.datos_socios_comerciales.id = valor;
        break;
      case "lugar_nacimiento.entidad":
        data.datos_socios_comerciales.lugar_nacimiento.entidad = getEntidadesFederativas(
          this.state.catEntidadesFederativas,
          valor
        );
        break;
      case "lugar_nacimiento.pais":
        data.datos_socios_comerciales.lugar_nacimiento.pais = getData(
          this.state.catPaises,
          valor
        );
        break;
      case "nombre_actividad":
        data.datos_socios_comerciales.nombre_actividad = valor;
        break;
      case "nombre":
        data.datos_socios_comerciales.nombre = valor;
        break;
      case "observaciones":
        data.datos_socios_comerciales.observaciones = valor;
        break;
      case "porcentaje_participacion":
        data.datos_socios_comerciales.porcentaje_participacion = valor;
        break;
      case "rfc":
        data.datos_socios_comerciales.rfc = valor;
        break;
      case "curp":
        data.datos_socios_comerciales.curp = valor;
        break;
      case "sector_industria":
        data.datos_socios_comerciales.sector_industria = getData(
          this.state.catSectorIndustria,
          valor
        );
        break;
      case "tipo_vinculo":
        data.datos_socios_comerciales.tipo_vinculo = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickSociosComerciales = () => {
    let data = Object.assign({}, this.state.datos_socios_comerciales);
    let info = Object.assign({}, clean.intereses.socios_comerciales[0]);

    this.setState(
      {
        socios_comerciales: [...this.state.socios_comerciales, data],
        datos_socios_comerciales: info
      },
      () => {
        console.log(this.state.socios_comerciales);
      }
    );
  };

  removeClickSociosComerciales = index => event => {
    this.state.socios_comerciales.splice(index, 1);
    this.setState({ socios_comerciales: this.state.socios_comerciales }, () => {
      // console.log(this.state.socios_comerciales);
    });
  };

  render() {
    return (
      <SociosComercialesForm
        data={this.state}
        handleChange={this.setDataSociosComerciales}
        addClick={this.addClickSociosComerciales}
        removeClick={this.removeClickSociosComerciales}
      />
    );
  }
}

export default SociosComerciales;
