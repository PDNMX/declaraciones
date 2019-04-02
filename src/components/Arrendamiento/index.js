import React from "react";

import ArrendamientoForm from "./Arrendamiento";
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
  catSectorIndustria,
  catTiposActividades,
  catTipoMoneda,
  catMedidaPlazo
} from "../../Funciones/";

import { example } from "../../DATA/data_example";
import { clean } from "../../DATA/data_clean";

class Arrendamiento extends React.Component {
  constructor(props) {
    super(props);

    let info;

    info = clean;
    info = example;

    this.state = {
      datos_arrendamiento: info.ingresos.arrendamiento[0],
      arrendamiento: [],
      catPaises: [],
      catEntidadesFederativas: [],
      catMunicipios: [],
      catLocalidades: [],
      catTipoVialidad: [],
      catSectorIndustria: [],
      catTiposActividades: [],
      catTipoMoneda: [],
      catMedidaPlazo: []
    };

    // console.log("state constructor", this.state);
  }

  componentDidMount() {
    let {
      entidad_federativa,
      municipio
    } = this.state.datos_arrendamiento.domicilio_actividad;

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
    catSectorIndustria().then(data => {
      this.setState({ catSectorIndustria: data });
    });
    catTiposActividades().then(data => {
      this.setState({ catTiposActividades: data });
    });
    catTipoMoneda().then(data => {
      this.setState({ catTipoMoneda: data });
    });
    catMedidaPlazo().then(data => {
      this.setState({ catMedidaPlazo: data });
    });
  }

  setDataArrendamiento = field => event => {
    let valor = event.target.value;
    let data = this.state;

    switch (field) {
      case "curp":
        data.datos_arrendamiento.curp = valor;
        break;
      case "descripcion_actividad_servicio":
        data.datos_arrendamiento.descripcion_actividad_servicio = valor;
        break;
      case "id":
        data.datos_arrendamiento.id = valor;
        break;
      case "ingreso_bruto_anual.duracion_frecuencia":
        data.datos_arrendamiento.ingreso_bruto_anual.duracion_frecuencia = valor;
        break;
      case "ingreso_bruto_anual.fecha_transaccion":
        data.datos_arrendamiento.ingreso_bruto_anual.fecha_transaccion = valor;
        break;
      case "ingreso_bruto_anual.moneda":
        data.datos_arrendamiento.ingreso_bruto_anual.moneda = getData(
          this.state.catTipoMoneda,
          valor
        );
        break;
      case "ingreso_bruto_anual.unidad_temporal":
        data.datos_arrendamiento.ingreso_bruto_anual.unidad_temporal = getData(
          this.state.catMedidaPlazo,
          valor
        );
        break;
      case "ingreso_bruto_anual":
        data.datos_arrendamiento.ingreso_bruto_anual.valor = valor;
        break;
      case "nombre_denominacion_razon_social":
        data.datos_arrendamiento.nombre_denominacion_razon_social = valor;
        break;
      case "observaciones":
        data.datos_arrendamiento.observaciones = valor;
        break;
      case "rfc":
        data.datos_arrendamiento.rfc = valor;
        break;
      case "sector_industria":
        data.datos_arrendamiento.sector_industria = getData(
          this.state.catSectorIndustria,
          valor
        );
        break;
      case "tipo_actividad_servicio":
        data.datos_arrendamiento.tipo_actividad_servicio = getData(
          this.state.catTiposActividades,
          valor
        );
        break;

      /////////////////////////////  domicilio  /////////////////////////////////////
      case "pais":
        data.datos_arrendamiento.domicilio_actividad = {
          pais: getData(this.state.catPaises, valor),
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
        };

        break;
      case "entidad_federativa":
        data.datos_arrendamiento.domicilio_actividad.entidad_federativa = getEntidadesFederativas(
          this.state.catEntidadesFederativas,
          valor
        );

        data.datos_arrendamiento.domicilio_actividad.municipio = {
          nom_agem: "",
          cve_agem: ""
        };

        data.datos_arrendamiento.domicilio_actividad.localidad = {
          nom_loc: "",
          cve_loc: ""
        };

        catMunicipios(
          data.datos_arrendamiento.domicilio_actividad.entidad_federativa
            .cve_agee
        ).then(data => {
          this.setState({ catMunicipios: data, catLocalidades: [] });
        });

        break;
      case "municipio":
        data.datos_arrendamiento.domicilio_actividad.municipio = getMunicipios(
          this.state.catMunicipios,
          valor
        );

        data.datos_arrendamiento.domicilio_actividad.localidad = {
          nom_loc: "",
          cve_loc: ""
        };

        catLocalidades(
          data.datos_arrendamiento.domicilio_actividad.entidad_federativa
            .cve_agee,
          data.datos_arrendamiento.domicilio_actividad.municipio.cve_agem
        ).then(data => {
          this.setState({ catLocalidades: data });
        });

        break;
      case "cp":
        data.datos_arrendamiento.domicilio_actividad.cp = valor;
        break;
      case "localidad":
        data.datos_arrendamiento.domicilio_actividad.localidad = getLocalidades(
          this.state.catLocalidades,
          valor
        );
        break;
      case "vialidad.tipo_vial":
        data.datos_arrendamiento.domicilio_actividad.vialidad.tipo_vial = valor;
        break;
      case "vialidad.nom_vial":
        data.datos_arrendamiento.domicilio_actividad.vialidad.nom_vial = valor;
        break;
      case "numExt":
        data.datos_arrendamiento.domicilio_actividad.numExt = valor;
        break;
      case "numInt":
        data.datos_arrendamiento.domicilio_actividad.numInt = valor;
        break;

      default:
        console.log(field);
    }

    this.setState(data);
  };

  addClickArrendamiento = () => {
    let data = Object.assign({}, this.state.datos_arrendamiento);
    let info = Object.assign({}, clean.ingresos.arrendamiento[0]);

    this.setState(
      {
        arrendamiento: [...this.state.arrendamiento, data],
        datos_arrendamiento: info
      },
      () => {
        console.log(this.state.arrendamiento);
      }
    );
  };

  removeClickArrendamiento = index => event => {
    this.state.arrendamiento.splice(index, 1);
    this.setState({ arrendamiento: this.state.arrendamiento }, () => {
      // console.log(this.state.arrendamiento);
    });
  };

  render() {
    return (
      <ArrendamientoForm
        data={this.state}
        handleChange={this.setDataArrendamiento}
        addClick={this.addClickArrendamiento}
        removeClick={this.removeClickArrendamiento}
      />
    );
  }
}

export default Arrendamiento;
